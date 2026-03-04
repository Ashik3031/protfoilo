"use client";

import { useRef, useEffect } from "react";
import { useFBX, ContactShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useFollowCursor } from "@/hooks/useFollowCursor";

export function Character({ animation = "idle" }: { animation?: string }) {
    const model = useFBX("/base.fbx");
    const danceFBX = useFBX("/Wave Hip Hop Dance.fbx");
    const actionFBX = useFBX("/Swing To Land.fbx");
    const sleepFBX = useFBX("/Sleeping Idle.fbx");
    const wavingFBX = useFBX("/Waving.fbx");

    const group = useRef<THREE.Group>(null);
    const mixer = useRef<THREE.AnimationMixer | null>(null);
    const actions = useRef<{ [key: string]: THREE.AnimationAction }>({});
    const { target } = useFollowCursor();

    useEffect(() => {
        if (!model) return;

        // Find bones inside SkinnedMesh skeleton
        const bonesByCleanName = new Map<string, THREE.Bone>();
        model.traverse((obj) => {
            if ((obj as THREE.SkinnedMesh).isSkinnedMesh) {
                const skinnedMesh = obj as THREE.SkinnedMesh;
                skinnedMesh.skeleton?.bones.forEach((bone) => {
                    const cleanName = bone.name.replace(/mixamorig[0-9]*:?_?/gi, "").toLowerCase();
                    bonesByCleanName.set(cleanName, bone);
                    bonesByCleanName.set(bone.name.toLowerCase(), bone);
                });
            }
        });

        mixer.current = new THREE.AnimationMixer(model);

        const setupAnimation = (fbx: any, name: string) => {
            if (!fbx?.animations?.length) return;
            const clip = fbx.animations[0].clone();
            clip.tracks.forEach((track: any) => {
                const dotIdx = track.name.lastIndexOf('.');
                const property = dotIdx !== -1 ? track.name.slice(dotIdx + 1) : "quaternion";
                const nodeNameRaw = dotIdx !== -1 ? track.name.slice(0, dotIdx) : track.name;
                const cleanTrack = nodeNameRaw
                    .replace(/^.*[:|]/, "")
                    .replace(/mixamorig[0-9]*:?_?/gi, "")
                    .toLowerCase();
                const targetBone = bonesByCleanName.get(cleanTrack) || bonesByCleanName.get(nodeNameRaw.toLowerCase());
                if (targetBone) {
                    track.name = targetBone.name + "." + property;
                }
            });
            const action = mixer.current!.clipAction(clip);
            actions.current[name] = action;
        };

        setupAnimation(danceFBX, "dance");
        setupAnimation(actionFBX, "action");
        setupAnimation(sleepFBX, "sleep");
        setupAnimation(wavingFBX, "waving");

        return () => {
            mixer.current?.stopAllAction();
            mixer.current = null;
        };
    }, [model, danceFBX, actionFBX, sleepFBX, wavingFBX]);

    useEffect(() => {
        if (!mixer.current) return;

        let timeout: NodeJS.Timeout | null = null;
        let interval: NodeJS.Timeout | null = null;

        if (animation === "waving") {
            // Fade out any currently running animations when returning to idle
            Object.values(actions.current).forEach(action => {
                if (action.isRunning() && action !== actions.current["waving"]) {
                    action.fadeOut(0.5);
                }
            });

            // Idle state behavior: Wave once every 10 seconds
            const playWaveOnce = () => {
                const action = actions.current["waving"];
                if (action) {
                    action.reset()
                        .setEffectiveWeight(1)
                        .setEffectiveTimeScale(1)
                        .setLoop(THREE.LoopOnce, 1)
                        .clampWhenFinished = false; // Ensure it returns to bind pose
                    action.play();
                }
            };

            // First wave after 2 seconds
            timeout = setTimeout(playWaveOnce, 2000);
            // Subsequent waves every 10 seconds
            interval = setInterval(playWaveOnce, 10000);
        } else {
            const nextAction = actions.current[animation];
            if (!nextAction) return;

            const currentActions = Object.values(actions.current).filter(a => a.isRunning());
            currentActions.forEach(action => {
                if (action !== nextAction) {
                    action.fadeOut(0.5);
                }
            });

            nextAction.reset()
                .setEffectiveWeight(1)
                .setLoop(THREE.LoopRepeat, Infinity)
                .fadeIn(0.5)
                .play();
        }

        return () => {
            if (timeout) clearTimeout(timeout);
            if (interval) clearInterval(interval);
            if (animation === "waving") {
                actions.current["waving"]?.fadeOut(0.5);
            }
        };
    }, [animation]);

    useFrame((_, delta) => {
        mixer.current?.update(delta);
        if (!group.current) return;

        group.current.rotation.y = THREE.MathUtils.lerp(
            group.current.rotation.y,
            target.current.x * 0.3,
            0.1
        );
        group.current.rotation.x = THREE.MathUtils.lerp(
            group.current.rotation.x,
            -target.current.y * 0.2,
            0.1
        );
    });

    return (
        <group ref={group} dispose={null} scale={[1, 1, 1]} position={[0, -0.5, 0]}>
            <primitive object={model} />
            <ContactShadows opacity={0.4} scale={10} blur={2.5} far={4} />
        </group>
    );
}

useFBX.preload("/base.fbx");
useFBX.preload("/Wave Hip Hop Dance.fbx");
useFBX.preload("/Swing To Land.fbx");
useFBX.preload("/Sleeping Idle.fbx");
useFBX.preload("/Waving.fbx");
