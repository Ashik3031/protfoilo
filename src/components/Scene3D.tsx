"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center, AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { Character } from "./Character";

export function Scene3D({ animation }: { animation?: string }) {
    return (
        <div className="canvas-container">
            <Canvas
                shadows
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{
                    antialias: true,
                    powerPreference: "high-performance",
                    alpha: true,
                    preserveDrawingBuffer: true
                }}
                dpr={[1, 2]} // Limit pixel ratio for performance
                onCreated={({ gl }) => {
                    gl.domElement.addEventListener("webglcontextlost", (event) => {
                        event.preventDefault();
                        console.warn("WebGL Context Lost");
                    }, false);
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
                    <pointLight position={[-10, -10, -5]} intensity={1} />

                    <group>
                        <Character animation={animation} />
                    </group>
                </Suspense>
            </Canvas>
        </div>
    );
}
