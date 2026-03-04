"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Clock, Code2, Globe } from "lucide-react";

const upcomingProjects = [
    {
        id: "epsilon",
        title: "Project Epsilon",
        subtitle: "The Future of AI Design",
        concept: "An experimental platform exploring how generative AI can dynamically reshape user interfaces based on intent and context.",
        timeline: "Q3 2026",
        tech: ["Next.js 15", "PyTorch", "Three.js", "WebGPU"],
        color: "#6366f1"
    },
    {
        id: "zeta",
        title: "Project Zeta",
        subtitle: "Spatial Web Framework",
        concept: "Bridging the gap between 2D web and 3D spatial computing. A lightweight framework for creating immersive XR experiences directly in the browser.",
        timeline: "Q4 2026",
        tech: ["React Three Fiber", "WebXR", "TypeScript", "Rust"],
        color: "#10b981"
    },
    {
        id: "omega",
        title: "Project Omega",
        subtitle: "Decentralized Identity",
        concept: "A secure, privacy-first protocol for managing digital presence across the decentralized web without compromising user data.",
        timeline: "Early 2027",
        tech: ["Solidity", "Tailwind CSS", "Ethers.js", "Next Auth"],
        color: "#f59e0b"
    }
];

export default function UpcomingPage() {
    return (
        <main className="relative min-h-screen bg-[#f9f7f2] text-[#1a1a1a] selection:bg-accent selection:text-white">
            <Navbar />

            {/* Header Section */}
            <section className="pt-48 pb-24 px-6 md:px-12 lg:px-24">
                <div className="container-wide">
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 block"
                        >
                            [ Future Roadmap ]
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tighter mb-12"
                        >
                            Upcoming <br /> <span className="text-black/10">Concepts</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl font-medium opacity-60 uppercase leading-relaxed max-w-2xl"
                        >
                            A glimpse into the laboratory. These are the projects currently in development, pushing the boundaries of what's possible on the web.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Projects List */}
            <section className="pb-48 px-6 md:px-12 lg:px-24">
                <div className="container-wide">
                    <div className="space-y-32 md:space-y-48">
                        {upcomingProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="group relative"
                            >
                                <div className="grid md:grid-cols-12 gap-12 items-start">
                                    {/* Project Meta */}
                                    <div className="md:col-span-4 space-y-8">
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-2 block">Index</span>
                                            <span className="text-4xl font-black">0{index + 1}</span>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Clock size={16} className="text-accent" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">{project.timeline}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map(t => (
                                                    <span key={t} className="px-3 py-1 bg-white border border-black/5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="md:col-span-8">
                                        <div className="mb-12">
                                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 group-hover:text-accent transition-colors duration-500">
                                                {project.title}
                                            </h2>
                                            <p className="text-xl md:text-2xl font-bold uppercase text-black/20 italic">
                                                {project.subtitle}
                                            </p>
                                        </div>

                                        <div className="max-w-2xl">
                                            <p className="text-lg md:text-xl font-medium opacity-60 leading-relaxed mb-12">
                                                {project.concept}
                                            </p>

                                            <div
                                                className="h-1 w-full bg-black/5 rounded-full overflow-hidden relative"
                                            >
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    transition={{ duration: 2, delay: 0.5 }}
                                                    className="absolute inset-0 bg-accent origin-left"
                                                    style={{ backgroundColor: project.color }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-black py-48 px-6 overflow-hidden relative">
                <div className="container-wide relative z-10 text-center">
                    <h3 className="text-5xl md:text-7xl font-black uppercase text-white mb-12 tracking-tighter">
                        Have a project <br /> in mind?
                    </h3>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-6 px-12 py-6 bg-white text-black font-black uppercase tracking-widest text-lg rounded-full hover:bg-accent hover:text-white transition-all duration-500 group"
                        >
                            Let's Collaborate
                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Decorative background text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black uppercase text-white/[0.02] whitespace-nowrap pointer-events-none">
                    COLLAB
                </div>
            </section>

            <Footer />
        </main>
    );
}
