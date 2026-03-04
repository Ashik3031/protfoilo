"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const works = [
    {
        id: "01",
        title: "AI AGENT PLATFORM",
        category: "SYSTEM DESIGN / AI",
        slug: "ai-agent-platform",
        description: "A multi-tenant AI Agent platform designed for modern enterprise runtimes. Unlike simple GPT-to-WhatsApp integrations, this system focuses on building a configurable, production-ready agent core.\n\nKey capabilities:\n• Orchestrate tool-based actions\n• Enforce business rules outside the model\n• Support multi-tenant configuration\n• Abstract LLM providers (model-agnostic design)\n• Handle memory, governance, and observability\n• Plug into voice, messaging, and automation channels\n\nCurrently focusing on 'Level 1' — core engine architecture: tenant resolution, context management, rule enforcement, and modular agent orchestration.",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1772608295/Gemini_Generated_Image_60d1x60d1x60d1x6_hdmadc.png",
    },
    {
        id: "02",
        title: "MOBILE SOLUTIONS",
        category: "REACT NATIVE",
        slug: "mobile-solutions",
        description: "Enterprise-grade cross-platform mobile applications built with React Native. Focused on achieving native-like performance through modular architecture and offline-first capabilities. This expertise was honed during extensive project work at Digtel, where I explored complex workflows and successfully delivered multiple high-performance mobile products.",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1772609195/ChatGPT_Image_Mar_4_2026_12_57_28_PM_pxcbd5.png",
    },
    {
        id: "03",
        title: "LEAD DISTRIBUTION",
        category: "REAL-TIME / ENTERPRISE",
        slug: "lead-distribution",
        description: "A high-frequency lead management and distribution system developed for TSPL Corp. Designed to handle massive data volumes with concurrent access for over 300 users. The system ensures efficient lead routing and comprehensive management through intelligent allocation algorithms.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
        id: "04",
        title: "SYSTEM DESIGN",
        category: "R&D / ARCHITECTURE",
        slug: "system-design",
        description: "Deep-dive exploration into modern infrastructure and distributed systems. Research focus includes Docker containerization, microservices orchestration, and complex architectural patterns to ensure scalable and resilient system foundations.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    },
];

function WorkCard({ work, index, onClick }: { work: typeof works[0], index: number, onClick: (work: typeof works[0]) => void }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y }}
            onClick={() => onClick(work)}
            className="group relative h-96 bg-white border border-black/5 rounded-sm overflow-hidden p-12 flex flex-col justify-between hover:shadow-xl transition-all duration-500 cursor-pointer"
        >
            <div className="flex justify-between items-start z-10">
                <span className="font-mono text-xs text-black/20">/ {work.id}</span>
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                    <ArrowUpRight size={20} />
                </div>
            </div>

            {/* Small Central Image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-48 h-32 overflow-hidden rounded-sm group-hover:scale-110 transition-all duration-700 shadow-2xl">
                    <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent mb-2 block">{work.category}</span>
                <h3 className="text-4xl md:text-5xl font-black uppercase text-[#1a1a1a] tracking-tighter">
                    {work.title}
                </h3>
            </div>
        </motion.div>
    );
}


export function WorksGrid({ onProjectClick }: { onProjectClick: (work: typeof works[0]) => void }) {
    return (
        <section className="bg-[#f2f2f2] pt-24 pb-48 px-6 md:px-12 lg:px-24 border-t border-black/5">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <div className="flex flex-col gap-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Section 02</span>
                        <h2 className="text-6xl md:text-8xl font-black uppercase text-[#1a1a1a] leading-none">
                            On the <br /> <span className="text-black/10">Side</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-black/40 font-medium uppercase text-xs leading-relaxed tracking-wider">
                        Experimental projects, research, and technical explorations conducted outside of commercial mandates.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {works.map((work, index) => (
                        <WorkCard key={work.id} work={work} index={index} onClick={onProjectClick} />
                    ))}
                </div>
            </div>
        </section>
    );
}
