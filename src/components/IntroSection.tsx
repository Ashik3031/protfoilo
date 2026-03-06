"use client";

import { motion } from "framer-motion";

export function IntroSection() {
    return (
        <section className="relative min-h-screen bg-white py-24 px-6 md:px-12 lg:px-24 z-30 flex flex-col justify-between">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 flex-1">
                {/* Header Label */}
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-[12px] font-bold uppercase tracking-widest opacity-60 flex items-center gap-4"
                >
                    <span>[QUICK INTRO]</span>
                </motion.p>

                {/* Main Typography - Left Aligned & Multi-line */}
                <div className="flex flex-col mt-8 md:mt-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.2] md:leading-[1.1] tracking-tight text-foreground flex flex-col gap-1 md:gap-0"
                    >
                        <span>I ARCHITECT SCALABLE</span>
                        <span>FULL-STACK</span>
                        <span>SYSTEMS THAT SERVE</span>
                        <span>100K+ USERS,</span>
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-1 md:mt-0">
                            <span>BRIDGING COMPLEX</span>
                            <div className="w-16 h-8 md:w-32 md:h-16 bg-black/10 rounded-full overflow-hidden relative group cursor-pointer inline-flex border border-black/5 align-middle">
                                <video
                                    src="https://res.cloudinary.com/dugtxybef/video/upload/v1772449397/0_Web_Power_Pack_Brand_Boost_Deal_1280x720_n9w6uv.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/0 transition-colors" />
                            </div>
                        </div>
                        <span>BACKENDS WITH SEAMLESS</span>
                        <span>FRONTENDS AT THE</span>
                        <span className="opacity-30">HELM.</span>
                    </motion.h2>
                </div>
            </div>

            {/* Bottom Section - Status and Sub-text */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8 md:gap-12 mt-16 md:mt-12 pb-12">
                {/* Empty left side to push content to the right (only on desktop) */}
                <div className="hidden md:block w-1/2" />

                {/* Sub-text Bottom Right (Left aligned on mobile, right on desktop) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:max-w-md text-left md:text-right space-y-6"
                >
                    <div className="flex items-center justify-start md:justify-end gap-2 text-[10px] font-bold uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        <span>AVAILABLE FOR NEW OPPORTUNITIES</span>
                    </div>

                    <p className="text-xs md:text-sm font-mono leading-relaxed opacity-60">
                        I'm Ashik, a Senior Full-Stack Engineer specializing in high-performance web and mobile solutions.
                        With deep expertise across the MERN stack and React Native, I architect scalable systems
                        that bridge complex business requirements with seamless user experiences.
                    </p>

                    <a
                        href="/services"
                        className="inline-block text-[12px] font-black uppercase tracking-widest border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
                    >
                        READ MY STORY & SERVICES
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
