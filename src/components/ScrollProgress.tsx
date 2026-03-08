"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    // Smooth the progress out so the line doesn't stutter on mouse wheels
    const smoothedProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // The thumb is 25% of the track height (h-1/4).
    // To move it from top to bottom, it must translate down by exactly 
    // 3 times its own height (300%) to reach the bottom edge of the container.
    const yTranslation = useTransform(smoothedProgress, [0, 1], ["0%", "300%"]);

    return (
        <div className="fixed right-2 md:right-8 top-1/2 -translate-y-1/2 w-[2px] md:w-[3px] h-32 md:h-48 bg-white/20 z-[100] pointer-events-none rounded-full overflow-hidden mix-blend-difference">
            <motion.div
                className="w-full h-1/4 bg-white rounded-full"
                style={{ y: yTranslation }}
            />
        </div>
    );
}
