"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Scene3D } from "@/components/Scene3D";

const timeline = [
    { year: "2025 - 2026", title: "Senior Full-Stack Engineer", company: "Digtel (UAE-based)" },
    { year: "2023 - 2024", title: "Full-Stack Developer Intern", company: "Brototype" },
    { year: "2019 - 2023", title: "B.Tech Computer Science", company: "APJ Abdul Kalam University" },
];

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="h-[70vh] relative flex items-center justify-center overflow-hidden bg-[#f2f2f2]">
                <Scene3D />
                <div className="relative z-20 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black uppercase"
                    >
                        About <span className="text-accent underline decoration-8 underline-offset-8">Me</span>
                    </motion.h1>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-padding">
                <div className="container-wide">
                    <div className="grid md:grid-cols-2 gap-24">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6">Discovery</p>
                            <h2 className="text-4xl md:text-5xl font-black uppercase mb-12">Building What <br /> Becomes Real</h2>
                            <div className="space-y-6 text-lg font-medium opacity-80 uppercase leading-relaxed">
                                <p>My journey in tech has evolved into architecting robust, enterprise-grade systems. As a Senior Engineer, I focus on delivering scalable, production-ready applications that solve complex business challenges.</p>
                                <p>From engineering marketplace platforms serving 100K+ users to developing sophisticated React Native mobile solutions, my philosophy remains constant: high performance, clean architecture, and seamless user experiences are the foundations of success.</p>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6">Experience</p>
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex justify-between items-end border-b border-black/5 pb-8"
                                >
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2 block">{item.year}</span>
                                        <h3 className="text-2xl font-black uppercase">{item.title}</h3>
                                    </div>
                                    <span className="font-bold uppercase tracking-widest text-accent">{item.company}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
