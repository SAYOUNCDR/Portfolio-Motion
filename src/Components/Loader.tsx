import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
    onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
    const [isExit, setIsExit] = useState(false);

    useEffect(() => {
        // Duration for the text to sit there before splitting
        const timer = setTimeout(() => {
            setIsExit(true);
        }, 2200); // 1.5s animation + 0.7s read time

        return () => clearTimeout(timer);
    }, []);

    const topTextVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2 + i * 0.1,
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        }),
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    const bottomTextVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.4 + i * 0.1, // Start slightly after top text
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        }),
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col pointer-events-none font-sans"
            animate={isExit ? "exit" : "visible"}
            initial="hidden"
            onAnimationComplete={(definition) => {
                if (definition === "exit") {
                    onComplete();
                }
            }}
        >
            {/* Top Half - White - Name Top Left */}
            <motion.div
                className="relative flex-1 w-full bg-zinc-100 flex items-start justify-start p-8 md:p-12 overflow-hidden"
                initial={{ y: 0 }}
                variants={{
                    visible: { y: 0 },
                    exit: {
                        y: "-100%",
                        transition: {
                            duration: 0.8,
                            ease: [0.76, 0, 0.24, 1],
                        },
                    },
                }}
            >
                <div className="flex flex-col gap-1 z-10">
                    {["Sayoun", "Parui"].map((word, i) => (
                        <motion.span
                            key={word}
                            custom={i}
                            variants={topTextVariants}
                            className="text-4xl md:text-6xl font-bold tracking-tighter text-black uppercase"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Bottom Half - Black - Skills Top Right */}
            <motion.div
                className="relative flex-1 w-full bg-black flex items-start justify-end p-8 md:p-12 overflow-hidden"
                initial={{ y: 0 }}
                variants={{
                    visible: { y: 0 },
                    exit: {
                        y: "100%",
                        transition: {
                            duration: 0.8,
                            ease: [0.76, 0, 0.24, 1],
                        },
                    },
                }}
            >
                <div className="flex flex-col items-end gap-2 z-10 text-right">
                    {/* Simulating "Badges" with text, or actual pill shapes */}
                    {[
                        "Full Stack Developer",
                        "React & Node.js",
                        "Creative Designer"
                    ].map((skill, i) => (
                        <motion.div
                            key={skill}
                            custom={i}
                            variants={bottomTextVariants}
                            className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                        >
                            <span className="text-sm md:text-lg font-medium text-white tracking-wide">
                                {skill}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Loader;
