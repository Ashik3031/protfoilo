"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
}

interface ProjectDetailsDrawerProps {
    project: Project | null;
    onClose: () => void;
}

export function ProjectDetailsDrawer({ project, onClose }: ProjectDetailsDrawerProps) {
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        if (project) {
            document.body.style.overflow = "hidden";
            // Also handle padding-right to prevent layout shift if scrollbar disappears
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        }
        return () => {
            document.body.style.overflow = originalStyle;
            document.body.style.paddingRight = "0px";
        };
    }, [project]);

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex justify-end overflow-y-auto overflow-x-hidden bg-black/40 backdrop-blur-md"
                    onClick={onClose} // Clicking the background closes it
                >
                    {/* Drawer Content Wrapper */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 35, stiffness: 350 }}
                        className="relative min-h-full w-full md:w-[700px] bg-white shadow-2xl flex flex-col pointer-events-auto"
                        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
                    >
                        <div className="p-8 md:p-16 flex flex-col flex-1">
                            <div className="flex justify-between items-center mb-16">
                                <span className="font-mono text-[10px] opacity-40 uppercase tracking-[0.3em]">/ PROJECT DETAILS</span>
                                <button
                                    onClick={onClose}
                                    className="group flex items-center gap-2 p-2 hover:bg-black/5 rounded-full transition-colors"
                                >
                                    <span className="text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 block">
                                    {project.category}
                                </span>
                                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
                                    {project.title.split(' ').map((word, i) => (
                                        <span key={i} className="block">{word}</span>
                                    ))}
                                </h1>

                                <div className="relative aspect-video w-full mb-16 overflow-hidden rounded-sm shadow-xl">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <div className="max-w-2xl">
                                    <div className="flex flex-col gap-2 mb-8">
                                        <span className="font-mono text-[9px] opacity-30 uppercase tracking-[0.2em]">Project Overview</span>
                                        <p className="text-lg md:text-xl leading-relaxed text-black/80 whitespace-pre-wrap font-medium">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-12 pt-12 border-t border-black/10">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest opacity-20">Deliverables</span>
                                            <span className="text-[11px] font-bold uppercase tracking-widest">System Design • UI/UX • Core Runtime</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest opacity-20">Year</span>
                                            <span className="text-[11px] font-bold uppercase tracking-widest">2026</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest opacity-20">Status</span>
                                            <span className="text-[11px] font-bold uppercase tracking-widest text-accent italic">In Development</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-24 pb-16">
                                <button
                                    onClick={onClose}
                                    className="w-full py-6 px-12 bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-accent transition-colors"
                                >
                                    BACK TO WORK
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
