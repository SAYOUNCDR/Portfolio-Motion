"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

interface RotateTextProps {
    texts: string[];
    className?: string; // Additional classes for the container
    interval?: number;
    stagger?: number; // Stagger delay between characters
}

export default function RotateText({
    texts,
    className = "",
    interval = 3000,
    stagger = 0.03 // Default stagger per letter
}: RotateTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [texts, interval]);

    // Parent container variants for staggering
    const containerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: stagger / 2, // Faster exit
                staggerDirection: -1, // Exit from last to first
            },
        },
    };

    // Letter variants
    const letterVariants: Variants = {
        hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 15,
            },
        },
        exit: {
            y: -20,
            opacity: 0,
            filter: "blur(4px)",
            transition: {
                duration: 0.2,
            },
        },
    };

    // Helper to split text into words and preserve spaces, or just render letters directly.
    // To properly animate spaces, we render them as non-breaking spaces or spans with width.
    const currentText = texts[index];
    // Splitting by character including spaces
    const letters = currentText.split("");

    return (
        <div className={`relative flex items-center justify-center md:justify-start overflow-hidden h-10 w-full ${className}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={index} // Key by index to trigger re-animation on text change
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute flex flex-wrap justify-center md:justify-start whitespace-nowrap"
                >
                    {letters.map((char, i) => (
                        <motion.span key={i} variants={letterVariants} className="inline-block relative">
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
