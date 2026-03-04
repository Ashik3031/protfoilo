"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const featuredProjects = [
    {
        id: "01",
        title: "WRAPILO MOMENTS",
        category: "NEXT ECOMMERCE",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1772604358/Gemini_Generated_Image_vpskyzvpskyzvpsk_uyatql.png",
        isComingSoon: false,
    },
    {
        id: "02",
        title: "SALES-LIVE TRACKER",
        category: "NEXT PROJECT",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1772604358/Gemini_Generated_Image_gcginmgcginmgcgi_zmten0.png",
        isComingSoon: false,
    },
    {
        id: "03",
        title: "3D WEBSITE",
        category: "NEXT & THREE.JS",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1772604358/wmremove-transformed_8_a4v3b2.png",
        isComingSoon: false,
    },
    {
        id: "04",
        title: "HTHREADS",
        category: "SHOPIFY ECOMMERCE",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1772604423/Gemini_Generated_Image_el3ou0el3ou0el3o_cuw8on.png",
        isComingSoon: false,
    },
    {
        id: "05",
        title: "ALMARJAN",
        category: "MERN ECOMMERCE",
        image: "https://res.cloudinary.com/dugtxybef/image/upload/v1772604358/Gemini_Generated_Image_j71e3fj71e3fj71e_supbn0.png",
        isComingSoon: false,
    },
];

export function HorizontalProjects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0.1, 1], ["0%", "-80%"]);

    return (
        <section ref={targetRef} className="relative h-[500vh] bg-[#f2f2f2]">
            <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
                {/* Header inside sticky to control trigger */}
                <div className="pt-24 px-6 md:px-12 lg:px-24">
                    <div className="container-wide">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                            <div className="flex flex-col gap-6">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-[10px] font-black uppercase tracking-[0.3em] text-accent"
                                >
                                    [ Featured Works ]
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-[12vw] md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter"
                                >
                                    Select <br /> <span className="text-black/10">Works</span>
                                </motion.h2>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="max-w-xs md:text-right md:pt-12"
                            >
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed opacity-40">
                                    A curated selection of digital experiences, spanning from high-performance web applications to experimental 3D interactions.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex items-center">
                    <motion.div style={{ x }} className="flex gap-24 px-24">
                        {featuredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative flex flex-col gap-4 w-[60vw] md:w-[45vw] lg:w-[35vw] shrink-0"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-black/5 shadow-2xl">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-all duration-700"
                                    />
                                    {project.isComingSoon && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
                                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Coming</span>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4 flex items-end justify-between px-2">
                                    <div className="flex flex-col">
                                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#1a1a1a] group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40 whitespace-nowrap">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
