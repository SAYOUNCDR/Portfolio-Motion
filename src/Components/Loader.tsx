import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
    onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
    const [isExit, setIsExit] = useState(false);

    useEffect(() => {
        // Timeline:
        // 0.0s: Start
        // 0.0s - 0.8s: Sayoun slides in
        // 0.4s - 1.2s: Parui slides in (staggered)
        // 2.0s: Trigger exit

        const timer = setTimeout(() => {
            setIsExit(true);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    const textVariants: Variants = {
        hidden: { y: "100%" },
        visible: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
            }
        },
        exit: {
            opacity: 1,
        }
    };

    const textVariantsBottom: Variants = {
        hidden: { y: "-100%" },
        visible: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
            }
        },
        exit: {
            opacity: 1,
        }
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
            {/* Top Half - White */}
            <motion.div
                className="relative flex-1 w-full bg-zinc-100 flex items-end justify-center overflow-hidden" // items-end for text at bottom of top half
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
                <img
                    src="/images/loader.jpg"
                    alt=""
                    className="absolute top-0 left-0 w-full h-[200%] object-cover opacity-[0.05] pointer-events-none" // Translucent opacity-5/100 = 0.05
                />

                {/* Mask container for text */}
                <div className="overflow-hidden pb-0 md:pb-2">
                    <motion.h1
                        variants={textVariants}
                        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black uppercase leading-none"
                    >
                        SAYOUN
                    </motion.h1>
                </div>
            </motion.div>

            {/* Bottom Half - Black */}
            <motion.div
                className="relative flex-1 w-full bg-black flex items-start justify-center overflow-hidden" // items-start for text at top of bottom half
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
                <img
                    src="/images/loader.jpg"
                    alt=""
                    className="absolute top-[-100%] left-0 w-full h-[200%] object-cover opacity-[0.05] pointer-events-none"
                />

                {/* Mask container for text */}
                <div className="overflow-hidden pt-0 md:pt-2">
                    <motion.h1
                        variants={textVariantsBottom}
                        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-none"
                    >
                        PARUI
                    </motion.h1>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Loader;
