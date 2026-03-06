"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
    return (
        <section className="bg-black py-32 md:py-48 overflow-hidden">
            <div className="container-wide px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6"
                        >
                            Open to Work
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black uppercase text-white leading-none"
                        >
                            Let&apos;s <br className="hidden md:block" />
                            <span className="text-accent">Connect</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 max-w-md text-white/40 font-medium uppercase text-xs leading-relaxed tracking-wider"
                        >
                            Have a project in mind? I&apos;m available for freelance work, full-time roles, and interesting collaborations.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex-shrink-0 mt-8 md:mt-0"
                    >
                        <Link
                            href="/contact"
                            className="group flex items-center gap-6 border border-white/10 hover:border-accent px-10 py-6 transition-all duration-500"
                        >
                            <span className="text-sm font-black uppercase tracking-widest text-white group-hover:text-accent transition-colors">
                                Get in Touch
                            </span>
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                                <ArrowUpRight size={20} className="text-white" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                    className="mt-24 h-px bg-white/10 origin-left"
                />
            </div>
        </section>
    );
}
