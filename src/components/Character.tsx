"use client";

import { useRef, useEffect } from "react";
import { useFBX, ContactShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useFollowCursor } from "@/hooks/useFollowCursor";

type FBXModel = {
    animations?: THREE.AnimationClip[];
};

type TrackWithName = THREE.KeyframeTrack & { name: string };

export function Character({ animation = "idle" }: { animation?: string }) {
    const model = useFBX("/base.fbx");
    const wavingFBX = useFBX("/Waving.fbx");

    // Non-essential animations load only when required to speed up initial render.
    const group = useRef<THREE.Group>(null);
    const mixer = useRef<THREE.AnimationMixer | null>(null);
    const actions = useRef<{ [key: string]: THREE.AnimationAction }>({});
    const loadedActions = useRef<Set<string>>(new Set());
    const pendingAnimation = useRef<string | null>(null);
    const { target } = useFollowCursor();

    const playAnimation = (name: string) => {
        const nextAction = actions.current[name];
        if (!nextAction) return;

        const currentActions = Object.values(actions.current).filter((action) => action.isRunning());
        currentActions.forEach((action) => {
            if (action !== nextAction) {
                action.fadeOut(0.5);
            }
        });

        nextAction.reset()
            .setEffectiveWeight(1)
            .setLoop(THREE.LoopRepeat, Infinity)
            .fadeIn(0.5)
            .play();
    };

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

        const setupAnimation = (fbx: FBXModel, name: string) => {
            if (!fbx?.animations?.length) return;
            const clip = fbx.animations[0].clone();
            clip.tracks.forEach((track) => {
                const typedTrack = track as TrackWithName;
                const dotIdx = typedTrack.name.lastIndexOf('.');
                const property = dotIdx !== -1 ? typedTrack.name.slice(dotIdx + 1) : "quaternion";
                const nodeNameRaw = dotIdx !== -1 ? typedTrack.name.slice(0, dotIdx) : typedTrack.name;
                const cleanTrack = nodeNameRaw
                    .replace(/^.*[:|]/, "")
                    .replace(/mixamorig[0-9]*:?_?/gi, "")
                    .toLowerCase();
                const targetBone = bonesByCleanName.get(cleanTrack) || bonesByCleanName.get(nodeNameRaw.toLowerCase());
                if (targetBone) {
                    typedTrack.name = targetBone.name + "." + property;
                }
            });
            const action = mixer.current!.clipAction(clip);
            actions.current[name] = action;
        };

        setupAnimation(wavingFBX, "waving");
        loadedActions.current.add("waving");

        const loader = new FBXLoader();
        const pendingLoads = new Set<string>();

        const loadAnimation = (path: string, name: string) => {
            if (loadedActions.current.has(name) || pendingLoads.has(name)) return;
            pendingLoads.add(name);
            loader.load(path, (fbx: FBXModel) => {
                setupAnimation(fbx, name);
                loadedActions.current.add(name);
                pendingLoads.delete(name);
                if (pendingAnimation.current === name) {
                    pendingAnimation.current = null;
                    playAnimation(name);
                }
            });
        };

        const loadAllNonEssentialAnimations = () => {
            loadAnimation("/Wave Hip Hop Dance.fbx", "dance");
            loadAnimation("/Swing To Land.fbx", "action");
            loadAnimation("/Sleeping Idle.fbx", "sleep");
        };

        const idleCallback =
            typeof window !== "undefined" && "requestIdleCallback" in window
                ? window.requestIdleCallback
                : (cb: FrameRequestCallback | (() => void)) => window.setTimeout(cb as () => void, 3500);

        const idleHandle = idleCallback(() => {
            loadAllNonEssentialAnimations();
        });

        return () => {
            if (typeof window !== "undefined" && "cancelIdleCallback" in window && typeof idleHandle === "number") {
                window.cancelIdleCallback(idleHandle as number);
            } else {
                window.clearTimeout(idleHandle as number);
            }
            mixer.current?.stopAllAction();
            mixer.current = null;
        };
    }, [model, wavingFBX]);

    useEffect(() => {
        if (!mixer.current) return;

        const actionsSnapshot = actions.current;
        let timeout: NodeJS.Timeout | null = null;
        let interval: NodeJS.Timeout | null = null;

        const playAnimation = (name: string) => {
            const nextAction = actionsSnapshot[name];
            if (!nextAction) return;

            const currentActions = Object.values(actionsSnapshot).filter(a => a.isRunning());
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
        };

        if (animation === "waving") {
            Object.values(actions.current).forEach(action => {
                if (action.isRunning() && action !== actions.current["waving"]) {
                    action.fadeOut(0.5);
                }
            });

            const playWaveOnce = () => {
                const action = actions.current["waving"];
                if (action) {
                    action.reset()
                        .setEffectiveWeight(1)
                        .setEffectiveTimeScale(1)
                        .setLoop(THREE.LoopOnce, 1)
                        .clampWhenFinished = false;
                    action.play();
                }
            };

            timeout = setTimeout(playWaveOnce, 2000);
            interval = setInterval(playWaveOnce, 10000);
        } else {
            const actionName = animation;
            const nextAction = actions.current[actionName];
            if (nextAction) {
                playAnimation(actionName);
            } else {
                pendingAnimation.current = actionName;
                const animationPaths: Record<string, string> = {
                    dance: "/Wave Hip Hop Dance.fbx",
                    action: "/Swing To Land.fbx",
                    sleep: "/Sleeping Idle.fbx"
                };
                const path = animationPaths[actionName];
                if (path) {
                    const loader = new FBXLoader();
                    loader.load(path, (fbx: FBXModel) => {
                        setupAnimation(fbx, actionName);
                        loadedActions.current.add(actionName);
                        pendingAnimation.current = null;
                        playAnimation(actionName);
                    });
                }
            }
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
useFBX.preload("/Waving.fbx");
// Removed preloads for non-essential animations to speed up initial site load
