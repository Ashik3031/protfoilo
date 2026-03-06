"use client";

import { motion } from "framer-motion";
import { Scene3D } from "./Scene3D";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const AUDIO_MAP: Record<string, string> = {
    dance: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Energetic
    action: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Driving
    sleep: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", // Calm
    waving: "" // No music for IDLE
};

export function Hero() {
    const [animation, setAnimation] = useState("waving");
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Stop current audio
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }

        const url = AUDIO_MAP[animation];
        if (url && !isMuted) {
            const audio = new Audio(url);
            audio.loop = true;
            audio.volume = 0.5;
            audioRef.current = audio;

            audio.play().catch(err => console.log("Audio play blocked:", err));
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [animation, isMuted]);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#f9f7f2]">

            {/* Mute Button - Top Right */}
            {/* Moved down on mobile (top-24) to avoid overlapping the Navbar menu button */}
            <div className="fixed top-24 md:top-12 right-6 md:right-12 lg:right-24 z-[60] pointer-events-auto">
                <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="group bg-white/80 backdrop-blur-md border border-black/5 p-3 rounded-full hover:bg-black hover:text-white transition-all duration-500 shadow-sm"
                    title={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
            </div>

            {/* Animation Controls - Vertical right side */}
            <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
                {[
                    { id: "dance", label: "Dance" },
                    { id: "action", label: "Action" },
                    { id: "sleep", label: "Sleep" },
                    { id: "waving", label: "Idle" }
                ].map((btn) => (
                    <button
                        key={btn.id}
                        onClick={() => setAnimation(btn.id)}
                        className={`group relative flex items-center justify-end gap-3 transition-all duration-300 ${animation === btn.id ? "opacity-100 scale-110" : "opacity-60 hover:opacity-100"}`}
                    >
                        <span className="text-[10px] font-black uppercase tracking-widest transition-all duration-300">
                            {btn.label}
                        </span>
                        <div className={`w-2 h-2 rounded-full border-2 border-black transition-all duration-300 ${animation === btn.id ? "bg-black scale-125" : "bg-transparent scale-100"}`} />
                    </button>
                ))}
            </div>

            {/* ── Main stacked layout: character on top, text below ── */}
            <div className="relative z-20 flex flex-col items-center">

                {/*
                  The character renders at the BOTTOM of the 600px canvas.
                  We want to show the bottom 300px (where the character is),
                  so we use a negative margin-top to shift the inner div up,
                  revealing the bottom half instead of the top half.
                */}
                <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
                    <div style={{ height: "600px", marginTop: "-300px" }}>
                        <Scene3D animation={animation} />
                    </div>
                </div>

                {/* Clear gap between character feet and first text row */}
                <div style={{ height: "48px" }} />

                {/* ── Pill Typography ── */}
                <div className="flex flex-col items-center gap-2">

                    {/* Row 1: Ashik + Senior Engineer */}
                    <div className="flex flex-wrap justify-center items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="pill pill-purple text-xl md:text-3xl lg:text-4xl"
                        >
                            Turning
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="pill pill-gray text-2xl md:text-5xl lg:text-7xl tracking-tighter"
                        >
                            Complex Problems
                        </motion.div>
                    </div>

                    {/* Row 2: MERN + React Native + Architecture */}
                    <div className="flex flex-wrap justify-center items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="pill pill-pink text-xl md:text-3xl lg:text-4xl"
                        >
                            into
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="pill pill-blue text-xl md:text-5xl lg:text-7xl tracking-tighter"
                        >
                            Scalable
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="pill pill-gray text-xl md:text-3xl lg:text-6xl tracking-tighter"
                        >
                            Architecture
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Bottom-left label */}
            <div className="absolute bottom-10 left-10 md:left-24">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">
                    Creating Experiences Since 2020
                </p>
            </div>

            {/* Bottom-right email */}
            <div className="absolute bottom-10 right-10 md:right-24 flex items-center gap-4">

                <a
                    href="mailto:ashikash202@gmail.com"
                    className="text-[10px] font-black uppercase tracking-widest hover:text-accent transition-colors"
                >
                    ashikash202@gmail.com
                </a>
            </div>

        </section>
    );
}