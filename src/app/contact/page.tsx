"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Github, Linkedin, Instagram, ArrowRight, Download, Briefcase } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen bg-[#f2f2f2] selection:bg-accent selection:text-white">
            <Navbar />

            <section className="pt-48 pb-24 px-6 md:px-12 lg:px-24">
                <div className="container-wide">
                    <div className="grid lg:grid-cols-2 gap-24">
                        <div className="flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 mb-6"
                            >
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Available for / New Opportunities</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-8xl font-black uppercase mb-12 leading-[0.85] tracking-tighter"
                            >
                                Hire <br /> <span className="text-black/10">The</span> <br /> Future.
                            </motion.h1>

                            <p className="text-xl font-medium opacity-60 uppercase leading-relaxed max-w-sm mb-12">
                                Currently seeking a position where I can push the boundaries of digital experiences and creative technology.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 mb-16">
                                <a
                                    href="/Ashik_Mohammed_s (2).pdf"
                                    download
                                    className="group flex items-center justify-center gap-4 px-8 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-accent transition-all duration-500"
                                >
                                    Download Resume
                                    <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                                </a>
                                <a
                                    href="mailto:ashikash202@gmail.com"
                                    className="group flex items-center justify-center gap-4 px-8 py-5 bg-white border border-black/5 rounded-full font-black uppercase tracking-widest text-xs hover:border-accent transition-all duration-500"
                                >
                                    Direct Email
                                    <Mail size={18} />
                                </a>
                            </div>

                            <div className="flex gap-6 pt-12 border-t border-black/5">
                                {[
                                    { icon: Github, href: "https://github.com/Ashik3031" },
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/ashik-mohammad-s/" },
                                    { icon: Instagram, href: "https://www.instagram.com/it_s_ashik_?igsh=dTI3MHpzaTE1emdr&utm_source=qr" }
                                ].map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.href}
                                        className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all"
                                    >
                                        <item.icon size={20} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-black/5 border border-black/5"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <Briefcase className="text-accent" size={24} />
                                <h3 className="text-2xl font-black uppercase tracking-tight">Show Interest</h3>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Company Name</label>
                                        <input type="text" placeholder="GOOGLE, INC." className="w-full bg-black/5 border-none p-4 font-bold uppercase tracking-widest text-xs focus:ring-2 focus:ring-accent transition-all outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Role / Position</label>
                                        <input type="text" placeholder="SENIOR FRONTEND" className="w-full bg-black/5 border-none p-4 font-bold uppercase tracking-widest text-xs focus:ring-2 focus:ring-accent transition-all outline-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Your Name</label>
                                    <input type="text" className="w-full bg-black/5 border-none p-4 font-bold uppercase tracking-widest text-xs focus:ring-2 focus:ring-accent transition-all outline-none" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Official Email</label>
                                    <input type="email" className="w-full bg-black/5 border-none p-4 font-bold uppercase tracking-widest text-xs focus:ring-2 focus:ring-accent transition-all outline-none" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Brief Message / Pitch</label>
                                    <textarea rows={4} className="w-full bg-black/5 border-none p-4 font-bold uppercase tracking-widest text-xs focus:ring-2 focus:ring-accent transition-all outline-none resize-none"></textarea>
                                </div>

                                <button className="w-full py-6 bg-accent text-white font-black uppercase tracking-widest hover:bg-black transition-all duration-500 flex items-center justify-center gap-3">
                                    Submit Interest
                                    <ArrowRight size={20} />
                                </button>

                                <p className="text-[9px] font-bold uppercase tracking-widest opacity-30 text-center">
                                    Serious inquiries only. Expect a response within 24-48 hours.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
