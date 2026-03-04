"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
    {
        title: "The Future of Web Interactivity",
        excerpt: "Exploring the next frontier of immersive digital experiences using browser-native technologies.",
        date: "March 15, 2026",
        category: "Insights",
        slug: "future-of-web-interactivity",
    },
    {
        title: "The Power of Three.js",
        excerpt: "How 3D rendering in the browser is changing the way we tell stories online.",
        date: "February 28, 2026",
        category: "Tutorial",
        slug: "power-of-three-js",
    },
    {
        title: "Designing for Motion",
        excerpt: "Why animations are not just eye candy, but essential for modern user experience.",
        date: "January 10, 2026",
        category: "Design",
        slug: "designing-for-motion",
    },
];

export default function BlogPage() {
    return (
        <main className="relative min-h-screen bg-white">
            <Navbar />

            <section className="pt-48 pb-24 px-6 md:px-12 lg:px-24">
                <div className="container-wide">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                        <div className="max-w-xl">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6"
                            >
                                Journal
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-8xl font-black uppercase leading-tight"
                            >
                                Insights <br /> <span className="text-black/20">& News</span>
                            </motion.h1>
                        </div>
                        <p className="md:max-w-xs text-sm font-bold opacity-40 uppercase tracking-widest leading-loose">
                            Sharing thoughts on design, technology, and the intersection of both.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="toy-card flex flex-col justify-between group cursor-pointer"
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="mb-12">
                                        <div className="flex items-center justify-between mb-8">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-accent">{post.category}</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{post.date}</span>
                                        </div>
                                        <h2 className="text-2xl font-black uppercase group-hover:text-accent transition-colors mb-6">{post.title}</h2>
                                        <p className="text-lg font-medium opacity-60 uppercase leading-relaxed">{post.excerpt}</p>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all">
                                        Read Story
                                        <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
