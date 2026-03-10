"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Text, useProgress } from "@react-three/drei";
import * as THREE from "three";

function LoaderShape() {
    // Currently empty 3D scene since text was removed.
    // Kept the Canvas structure in case we want to add 
    // a simple geometric shape back later.
    return (
        <group>
            {/* Very soft ambient light just in case, though basic materials don't need it */}
            <ambientLight intensity={1} />
        </group>
    );
}

export function Loader() {
    const { active, progress: realProgress } = useProgress();
    const [syntheticProgress, setSyntheticProgress] = useState(0);
    const [minimumTimePassed, setMinimumTimePassed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // 1. Minimum Time / Synthetic Progress Timer (Ensures the loader looks good even if cached)
    useEffect(() => {
        const duration = 1000; // 1s minimum time
        const interval = 30; // Update every 30ms
        const steps = duration / interval;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const rawProgress = Math.min(1, currentStep / steps);

            // Smooth ease out for the synthetic visual
            const easeOutQuart = 1 - Math.pow(1 - rawProgress, 4);
            setSyntheticProgress(Math.floor(easeOutQuart * 99)); // Goes up to 99%

            if (currentStep >= steps) {
                setMinimumTimePassed(true);
                clearInterval(timer);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    // 2. Hide Loader Condition
    useEffect(() => {
        // Consider the 3D assets loaded if realProgress hits 100, 
        // OR if active is false (meaning nothing is in the Drei queue right now).
        const isDreiLoaded = realProgress >= 100 || !active;

        if (minimumTimePassed && isDreiLoaded) {
            // Both conditions met, we can close!
            setTimeout(() => setIsLoading(false), 400);
        }
    }, [minimumTimePassed, realProgress, active]);

    // The displayed progress is the highest of either the synthetic timer or the real asset load.
    // If we're done, force exactly 100%. Ensure no NaN if realProgress is undefined.
    const validRealProgress = isNaN(realProgress) ? 0 : Math.floor(realProgress);
    const isDone = minimumTimePassed && (validRealProgress >= 100 || !active);
    const displayProgress = isDone ? 100 : Math.max(syntheticProgress, validRealProgress);

    // Prevent scrolling while loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: "-100%",
                        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
                >
                    {/* Animated Background Text */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-5 pointer-events-none">
                        <motion.h1
                            initial={{ x: "0%" }}
                            animate={{ x: "-50%" }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="text-[30vw] font-black uppercase whitespace-nowrap text-white"
                        >
                            CREATIVE DEVELOPER CREATIVE DEVELOPER
                        </motion.h1>
                    </div>

                    {/* 3D Scene */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
                            <LoaderShape />
                        </Canvas>
                    </div>

                    {/* Progress Counter overlay */}
                    <div className="relative z-20 flex flex-col items-center mt-[30vh]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="overflow-hidden"
                        >
                            <span className="text-8xl md:text-9xl font-black text-white italic tracking-tighter mix-blend-difference">
                                {displayProgress}
                            </span>
                            <span className="text-2xl md:text-4xl font-bold text-[#ff4800] align-top ml-2">
                                %
                            </span>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="mt-6 text-sm font-medium tracking-[0.4em] uppercase text-white/50"
                        >
                            Loading Experience
                        </motion.p>
                    </div>

                    {/* Loading Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
                        <motion.div
                            className="h-full bg-[#ff4800]"
                            style={{ width: `${displayProgress}%` }}
                            transition={{ ease: "easeOut" }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
