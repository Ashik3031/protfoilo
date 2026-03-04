"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Connect", href: "/contact" },

    { name: "Resume", href: "/Ashik_Mohammed_s (2).pdf" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 py-10 px-6 md:px-12 lg:px-24 flex items-center justify-between pointer-events-none">
            {/* Logo - T:\ layout */}
            <Link href="/" className="pointer-events-auto text-black font-black text-2xl tracking-tighter hover:opacity-70 transition-opacity">
                ashik
            </Link>

            {/* Centered Pill Links */}
            <div className="hidden md:flex items-center gap-2 pointer-events-auto">
                {navLinks.map((link) => (
                    link.name === "Resume" ? (
                        <a
                            key={link.name}
                            href={link.href}
                            download
                            className="px-6 py-2 bg-accent text-white hover:bg-black text-[10px] font-black uppercase tracking-widest rounded-full transition-colors pointer-events-auto"
                        >
                            {link.name}
                        </a>
                    ) : (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-6 py-2 bg-[#f5f5f5] hover:bg-[#ebebeb] text-[10px] font-black uppercase tracking-widest rounded-full transition-colors"
                        >
                            {link.name}
                        </Link>
                    )
                ))}
            </div>

            {/* Top Right - Empty for Mute Button in Hero */}
            <div className="hidden md:block w-32" />

            {/* Mobile Toggle */}
            <button
                className="md:hidden z-50 pointer-events-auto"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: isOpen ? "0%" : "-100%" }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 bg-[#f2f2f2] flex flex-col items-center justify-center gap-12 text-5xl font-black uppercase md:hidden pointer-events-auto"
            >
                {navLinks.map((link) => (
                    link.name === "Resume" ? (
                        <a
                            key={link.name}
                            href={link.href}
                            download
                            onClick={() => setIsOpen(false)}
                            className="hover:text-accent transition-colors"
                        >
                            {link.name}
                        </a>
                    ) : (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    )
                ))}
            </motion.div>
        </nav>
    );
}
