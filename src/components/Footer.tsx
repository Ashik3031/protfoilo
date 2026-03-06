"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-white py-24 px-6 md:px-12 lg:px-24 border-t border-black/5">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
                    <div className="max-w-md">
                        <Link href="/" className="text-4xl font-black lowercase tracking-tighter mb-8 block hover:opacity-70 transition-opacity">
                            ashik
                        </Link>
                        <p className="text-xl font-medium opacity-60 leading-relaxed uppercase">
                            Architecting digital experiences that scale. Based in the future, engineering for today.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-accent">Navigation</span>
                            <Link href="/work" className="font-bold uppercase tracking-widest hover:text-accent transition-colors">Work</Link>
                            <Link href="/about" className="font-bold uppercase tracking-widest hover:text-accent transition-colors">About</Link>
                            <Link href="/services" className="font-bold uppercase tracking-widest hover:text-accent transition-colors">Services</Link>
                            <Link href="/contact" className="font-bold uppercase tracking-widest hover:text-accent transition-colors">Contact</Link>
                            <a href="/Ashik_Mohammed_s (2).pdf" download className="font-bold uppercase tracking-widest text-accent hover:underline transition-all">Resume (PDF)</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-accent">Social</span>
                            <Link href="https://github.com/Ashik3031" target="_blank" className="font-bold uppercase tracking-widest hover:text-accent transition-colors inline-flex items-center gap-2">
                                <Github size={16} /> GitHub
                            </Link>
                            <Link href="https://www.linkedin.com/in/ashik-mohammad-s/" target="_blank" className="font-bold uppercase tracking-widest hover:text-accent transition-colors inline-flex items-center gap-2">
                                <Linkedin size={16} /> LinkedIn
                            </Link>
                            <Link href="https://www.instagram.com/it_s_ashik_?igsh=dTI3MHpzaTE1emdr&utm_source=qr" target="_blank" className="font-bold uppercase tracking-widest hover:text-accent transition-colors inline-flex items-center gap-2">
                                <Instagram size={16} /> Instagram
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-accent">Contact</span>
                            <a href="mailto:ashikash202@gmail.com" className="font-bold uppercase tracking-widest hover:text-accent transition-colors">ashikash202@gmail.com</a>
                            <span className="font-bold uppercase tracking-widest opacity-40">+91 9567039159</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                        © 2026 ashik. All Rights Reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] hover:text-accent transition-colors"
                    >
                        Back to Top
                        <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                            <ArrowUp size={16} />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
