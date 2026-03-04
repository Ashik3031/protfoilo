"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HorizontalProjects } from "@/components/HorizontalProjects";
import { WorksGrid } from "@/components/WorksGrid";
import Link from "next/link";

import { useState } from "react";
import { ProjectDetailsDrawer } from "@/components/ProjectDetailsDrawer";

export default function WorkPage() {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    return (
        <main className="relative min-h-screen bg-[#f2f2f2] text-[#1a1a1a] selection:bg-accent selection:text-white">
            <Navbar />

            {/* Editorial Header Tag */}
            <div className="fixed top-12 right-6 md:right-12 lg:right-24 z-[60] mix-blend-difference pointer-events-none">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">[2026]</span>
            </div>

            {/* Content Sections */}
            <HorizontalProjects />
            <WorksGrid onProjectClick={(project) => setSelectedProject(project)} />

            <Footer />

            <ProjectDetailsDrawer
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </main>
    );
}

