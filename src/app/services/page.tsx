"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Layout, Zap, Terminal, Server, Database, Cloud, Smartphone } from "lucide-react";
import { useRef } from "react";

const services = [
    {
        title: "Frontend Development",
        description: "Highly interactive, performance-optimized user interfaces built with modern frameworks like React and Next.js. Focused on scalable component architecture, clean state management using Redux Toolkit, and responsive design systems powered by Tailwind CSS. Optimized for speed, accessibility, and seamless user experience across devices.",
        tags: ["Strategy", "UI Architecture", "Performance"],
        skills: ["React.js", "Next.js (App Router)", "TypeScript", "Redux / Redux Toolkit", "Tailwind CSS", "Responsive Design", "Performance Optimization", "Framer Motion"],
        icon: Layout,
    },
    {
        title: "Backend Development",
        description: "Robust and scalable backend systems designed with Node.js and Express. Specialized in RESTful API development, authentication systems, role-based access control, and clean architecture principles. Focused on building secure, maintainable, and production-ready server-side applications.",
        tags: ["Architecture", "APIs", "Scalability"],
        skills: ["Node.js", "Express.js", "REST API Development", "JWT Authentication", "Role-Based Access Control", "Microservices", "GraphQL", "SOAP API Integration"],
        icon: Server,
    },
    {
        title: "Real-Time Systems",
        description: "Development of real-time applications using WebSockets and Socket.IO for live data synchronization, notifications, tracking systems, and collaborative features. Designed for high concurrency and consistent performance under production workloads.",
        tags: ["WebSockets", "Live Data", "Performance"],
        skills: ["Socket.IO", "WebSockets", "Live Notifications", "Real-Time Dashboards", "Event-Based Architecture"],
        icon: Zap,
    },
    {
        title: "Database & System Design",
        description: "Efficient data modeling and scalable database architecture using MongoDB. Designed optimized schemas, aggregation pipelines, and query performance improvements for high-traffic applications. Structured systems using clean architecture principles for long-term maintainability.",
        tags: ["Data Modeling", "Optimization", "Clean Architecture"],
        skills: ["MongoDB", "Schema Design", "Aggregations", "Query Optimization", "Clean Architecture"],
        icon: Database,
    },
    {
        title: "Cloud & DevOps",
        description: "Production deployment and infrastructure setup for scalable applications. Configured VPS environments, AWS services, Docker containers, and automated CI/CD pipelines using GitHub Actions to ensure reliability, speed, and maintainability.",
        tags: ["Deployment", "Infrastructure", "CI/CD"],
        skills: ["AWS (EC2, S3)", "VPS Deployment", "Nginx", "PM2", "Docker", "GitHub Actions", "CI/CD Automation"],
        icon: Cloud,
    },
    {
        title: "Mobile Development",
        description: "Cross-platform mobile applications built with React Native, integrated with secure backend APIs. Designed business-focused mobile solutions optimized for performance, usability, and production deployment.",
        tags: ["Cross-Platform", "API Integration", "Performance"],
        skills: ["React Native", "API Integration", "Authentication Flows", "Cross-Platform Deployment"],
        icon: Smartphone,
    },
    {
        title: "Engineering Foundations",
        description: "Strong foundation in data structures and algorithms with consistent problem-solving practice. Emphasis on clean code principles, maintainable architecture, and scalable engineering patterns across full-stack applications.",
        tags: ["Problem Solving", "Data Structures", "Code Quality"],
        skills: ["Data Structures & Algorithms", "Code Reviews", "Jest (Basic Unit Testing)", "Postman (API Testing)", "Git & GitHub"],
        icon: Terminal,
    },
];

function ServiceItem({ service, index }: { service: typeof services[0], index: number }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={container}
            style={{ opacity }}
            className="group relative"
        >
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                {/* Service Media Placeholder/Visual */}
                <div className="w-full md:w-1/2 aspect-[4/5] bg-[#f2f2f2] overflow-hidden rounded-sm relative">
                    <motion.div
                        style={{ y: imageY }}
                        className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-1000"
                    >
                        <service.icon size={120} strokeWidth={0.5} />
                    </motion.div>
                    <div className="absolute bottom-12 left-12">
                        <span className="text-[10vw] font-serif italic opacity-10">0{index + 1}</span>
                    </div>
                </div>

                {/* Service Content */}
                <motion.div
                    style={{ y }}
                    className="w-full md:w-1/2 flex flex-col justify-center mt-8 md:mt-0"
                >
                    <div className="flex items-center gap-4 mb-6 md:mb-8">
                        <span className="font-mono text-xs opacity-40">(0{index + 1})</span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight lowercase italic">
                            {service.title}
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-12">
                        {service.tags.map(tag => (
                            <span key={tag} className="service-tag">{tag}</span>
                        ))}
                    </div>

                    <p className="text-xl md:text-2xl font-serif leading-relaxed opacity-70 mb-12 max-w-xl">
                        {service.description}
                    </p>

                    <div className="mb-12">
                        <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-6">Skills Included</p>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                            {service.skills.map(skill => (
                                <div key={skill} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                    <span className="text-xs font-bold uppercase tracking-wider opacity-60">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="horizontal-rule !my-0 w-24 bg-accent" />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function ServicesPage() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

    return (
        <main className="relative min-h-screen bg-white text-[#1a1a1a]">
            <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="pt-48 pb-24 px-6 md:px-12 lg:px-24">
                <div className="container-wide">
                    <motion.div
                        style={{ opacity: heroOpacity, y: heroY }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl sm:text-6xl md:text-[7vw] font-serif leading-[0.9] tracking-tight flex flex-wrap gap-x-[0.2em] gap-y-[0.1em]"
                        >
                            <span>Where</span>
                            <span className="italic">Originality</span>
                            <span className="inline-flex items-center justify-center -rotate-12 translate-y-[0.1em] scale-110">
                                <Zap className="w-[0.8em] h-[0.8em] text-accent fill-accent" />
                            </span>
                            <span>Clashes</span>
                            <span>With</span>
                            <span className="inline-flex items-center justify-center rotate-12 -translate-y-[0.1em] scale-110">
                                <Code2Icon className="w-[0.8em] h-[0.8em] text-black/10" />
                            </span>
                            <br className="hidden md:block" />
                            <span className="italic block w-full mt-2">Authenticity</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="w-full md:max-w-md md:text-right mt-8 md:mt-0"
                        >
                            <p className="text-lg md:text-2xl font-serif italic leading-relaxed opacity-80">
                                Our ethos is anchored in the creation of experiences that feel Unmistakably Original.
                            </p>
                            <div className="horizontal-rule bg-black md:ml-auto md:mr-0 max-w-[100px] my-6" />
                            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-40">
                                We believe that true originality stems from a blend of experiences...
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="horizontal-rule mb-32 origin-left"
                    />

                    {/* Services Listing */}
                    <div className="space-y-48 pb-48">
                        {services.map((service, index) => (
                            <ServiceItem key={service.title} service={service} index={index} />
                        ))}
                    </div>

                    {/* Clients Section */}
                    <section className="py-24 border-t border-black/10">
                        <div className="flex flex-col lg:flex-row gap-24">
                            <div className="lg:w-1/3">
                                <h2 className="text-6xl font-serif italic lowercase mb-8">Clients</h2>
                                <p className="text-2xl font-serif leading-tight opacity-70">
                                    We've Worked With Some of the World's Biggest Brands, Challenger Brands, and Startups.
                                </p>
                            </div>
                            <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-12">
                                {[
                                    "Cekir Bazaar", "Abbad Transport", "Al Marjaan", "H-Threads",
                                    "Al Arif Group", "Supreme Luxury Cars", "Global HR Pro",
                                    "Telestation Online", "Sava Beauty", "Envoy Digtel",
                                    "Xyraco Project", "Wrapilo Moment"
                                ].map((client, i) => (
                                    <motion.div
                                        key={client}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="py-2 border-b border-black/5 group cursor-default"
                                    >
                                        <span className="font-mono text-[10px] opacity-40 mr-2">/ 0{i + 1}</span>
                                        <span className="font-mono text-xs uppercase tracking-widest group-hover:text-accent transition-colors">
                                            {client}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function Code2Icon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
        </svg>
    )
}
