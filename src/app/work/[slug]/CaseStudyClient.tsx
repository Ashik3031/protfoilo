"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const projectData: Record<string, any> = {
    "project-alpha": {
        title: "Project Alpha",
        category: "Web Application",
        color: "#ff4d00",
        description: "A high-performance web application designed for seamless user interaction and real-time data visualization.",
        year: "2026",
        role: "Lead Developer",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    "project-beta": {
        title: "Project Beta",
        category: "3D Experience",
        color: "#000000",
        description: "An immersive 3D experience exploring the boundaries of WebGL and interactive storytelling in the browser.",
        year: "2025",
        role: "Creative Developer",
        tech: ["Three.js", "React Three Fiber", "GSAP", "WebGL"],
    },
    "project-gamma": {
        title: "Project Gamma",
        category: "Interactive Story",
        color: "#22c55e",
        description: "A narrative-driven interactive experience that combines bold typography with smooth scroll-based animations.",
        year: "2024",
        role: "Frontend Engineer",
        tech: ["React", "GSAP", "CSS Modules", "Intersection Observer"],
    },
    "project-delta": {
        title: "Project Delta",
        category: "Creative Tool",
        color: "#3b82f6",
        description: "A suite of creative tools designed for designers and developers to streamline their workflow and enhance collaboration.",
        year: "2023",
        role: "Full Stack Developer",
        tech: ["Node.js", "PostgreSQL", "React", "Docker"],
    },
};

export default function CaseStudyClient({ slug }: { slug: string }) {
    const project = projectData[slug] || projectData["project-alpha"];

    return (
        <main className="relative min-h-screen bg-white">
            <Navbar />

            {/* Hero Header */}
            <section
                className="h-[80vh] relative flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: project.color }}
            >
                <div className="relative z-20 text-center px-6 text-white">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 opacity-60"
                    >
                        {project.category}
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-tight"
                    >
                        {project.title.split(' ')[0]}<br />
                        {project.title.split(' ')[1]}
                    </motion.h1>
                </div>

                {/* Decorative Toy Element */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[600px] h-[600px] border-2 border-white/5 rounded-full flex items-center justify-center"
                >
                    <div className="w-[400px] h-[400px] border-2 border-white/10 rounded-full" />
                </motion.div>
            </section>

            {/* Info Grid */}
            <section className="section-padding">
                <div className="container-wide">
                    <div className="grid md:grid-cols-12 gap-16">
                        <div className="md:col-span-8">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6">Overview</p>
                            <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 leading-tight">
                                Crafting a <br /> New Standard
                            </h2>
                            <p className="text-xl font-medium opacity-60 uppercase leading-relaxed mb-12">
                                {project.description}
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-black/5">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4 block">Year</span>
                                    <span className="font-bold uppercase tracking-widest">{project.year}</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4 block">Role</span>
                                    <span className="font-bold uppercase tracking-widest">{project.role}</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4 block">Sector</span>
                                    <span className="font-bold uppercase tracking-widest">Technology</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4 block">Live Site</span>
                                    <a href="#" className="font-bold uppercase tracking-widest text-accent flex items-center gap-2 hover:underline">
                                        Visit <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-4 bg-[#f2f2f2] p-12 rounded-3xl">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-8">Technology</p>
                            <ul className="space-y-6">
                                {project.tech.map((item: string) => (
                                    <li key={item} className="flex justify-between items-center border-b border-black/5 pb-4 last:border-0">
                                        <span className="font-bold uppercase tracking-widest text-sm">{item}</span>
                                        <div className="w-2 h-2 rounded-full bg-accent" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="bg-black py-24 px-6">
                <div className="container-wide">
                    <div className="flex justify-between items-center">
                        <Link href="/work" className="group flex items-center gap-6 text-2xl font-black uppercase text-white hover:text-accent transition-colors">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-500">
                                <ArrowLeft size={24} />
                            </div>
                            All Projects
                        </Link>

                        <Link href="#" className="group flex items-center gap-6 text-2xl font-black uppercase text-white hover:text-accent transition-colors text-right">
                            Next Project
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-500">
                                <ArrowRight size={24} />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
