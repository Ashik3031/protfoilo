"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projectSessions = [
    {
        title: "Freelancer Marketplace",
        subtitle: "Scaling to 100K+ Users",
        image: "/cult_gaia.png", // Keeping placeholder but updating text
        tags: ["Full-Stack", "MERN", "Production"],
        color: "#1a1a1a",
    },
    {
        title: "Real-Time Sales Tracker",
        subtitle: "Audit & Lead Management",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1772604358/Gemini_Generated_Image_gcginmgcginmgcgi_zmten0.png",
        tags: ["Socket.io", "Real-Time", "Dashboard"],
        color: "#1a1a1a",
    },
];

const latestUpdates = [
    { tag: "Work", text: "Successfully delivered UAE-based sales system", tagColor: "#fef08a" },
    { tag: "Tech", text: "Mastered React Native for cross-platform apps", tagColor: "#f3f4f6" },
    { tag: "News", text: "Scaling marketplace platform support", tagColor: "#f3f4f6" },
    { tag: "Edu", text: "Focusing on System Design & Scalability", tagColor: "#f3f4f6" },
];

function ProjectCard({ project, index }: { project: typeof projectSessions[0], index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="relative group overflow-hidden bg-[#1a1a1a] rounded-sm aspect-[1.1/1] flex flex-col items-center justify-center p-8 md:p-16"
        >
            <div className="absolute top-8 left-8 z-10">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{project.title}</h3>
                <p className="text-sm font-bold text-white/60 uppercase tracking-widest">{project.subtitle}</p>
            </div>

            <div className="relative w-full h-full flex items-center justify-center mt-12 transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-contain w-full h-full rounded-lg shadow-2xl"
                />
            </div>

            <div className="absolute bottom-8 left-8 flex gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-white/40 bg-white/5 px-2 py-1 rounded">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={20} />
            </div>
        </motion.div>
    );
}

export function LatestWorkSection() {
    return (
        <section className="py-24 bg-[#FAF9F6] relative z-20">
            <div className="container-wide px-6">
                {/* Top Heading */}
                <div className="mb-24">
                    <h2 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-none">
                        Latest
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-24 items-start">
                    {/* Main Column - Project Cards */}
                    <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProjectCard project={projectSessions[0]} index={0} />
                        <div className="md:mt-24">
                            <ProjectCard project={projectSessions[1]} index={1} />
                        </div>
                    </div>

                    {/* Side Column - Description & Updates */}
                    <div className="w-full lg:w-1/4 lg:sticky lg:top-32 h-fit">
                        <div className="mb-12">
                            <h3 className="text-sm font-black uppercase tracking-widest text-[#1a1a1a] mb-6">
                                Latest Updates
                            </h3>
                            <p className="text-sm font-bold opacity-40 uppercase tracking-widest leading-loose mb-12">
                                Pushing boundaries in full-stack architecture and real-time systems. Here's what's happening lately.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {latestUpdates.map((update, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-4 group cursor-pointer"
                                >
                                    <span
                                        className="text-[10px] font-black uppercase tracking-widest px-2 py-1 flex-shrink-0"
                                        style={{ backgroundColor: update.tagColor }}
                                    >
                                        {update.tag}
                                    </span>
                                    <p className="text-sm font-bold uppercase tracking-tight opacity-60 group-hover:opacity-100 transition-opacity">
                                        {update.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
