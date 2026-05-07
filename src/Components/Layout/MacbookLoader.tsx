import { motion } from "framer-motion";
import { useEffect } from "react";

type MacbookLoaderProps = {
    onComplete: () => void;
};

const nameLetters = [
    { char: "S", x: 76 },
    { char: "a", x: 124 },
    { char: "y", x: 169 },
    { char: "o", x: 213 },
    { char: "u", x: 253 },
    { char: "n", x: 294 },
];

const MacbookLoader = ({ onComplete }: MacbookLoaderProps) => {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const completeTimer = setTimeout(onComplete, 3700);

        return () => {
            clearTimeout(completeTimer);
            document.body.style.overflow = previousOverflow;
        };
    }, [onComplete]);

    return (
        <div
            role="status"
            aria-label="Loading portfolio"
            className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#f5f5f2] text-slate-950"
        >
            <motion.div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.95),rgba(245,245,242,0)_34%),linear-gradient(180deg,rgba(255,255,255,0.8),rgba(226,232,240,0.5))]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            />

            <motion.div
                className="relative flex w-full max-w-[560px] flex-col items-center px-6"
                initial={{ opacity: 0, y: 26, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="relative h-[340px] w-full max-w-[460px]">
                    <div
                        className="absolute left-1/2 bottom-[78px] z-10 w-[90%] -translate-x-1/2"
                        style={{ perspective: 1200 }}
                    >
                        <motion.div
                            className="aspect-[16/10] w-full origin-bottom overflow-hidden rounded-t-2xl border border-slate-300 bg-slate-950 p-2 shadow-[0_32px_80px_rgba(15,23,42,0.24)]"
                            initial={{ rotateX: -88, y: 0 }}
                            animate={{ rotateX: 0, y: 0 }}
                            transition={{ delay: 0.28, duration: 1.28, ease: "easeInOut" }}
                            style={{ backfaceVisibility: "hidden", transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
                        >
                            <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,#050505,#111827_45%,#0f172a)]">
                                <motion.div
                                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(115deg,transparent_0%,transparent_42%,rgba(255,255,255,0.13)_48%,transparent_55%)]"
                                    initial={{ x: "-35%", opacity: 0.4 }}
                                    animate={{ x: "35%", opacity: 0.8 }}
                                    transition={{ duration: 2.1, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                />

                                <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                                    <motion.svg
                                        viewBox="0 0 380 112"
                                        className="h-24 w-full max-w-[300px] overflow-visible"
                                        aria-hidden="true"
                                        initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{ delay: 1.12, duration: 0.46, ease: [0.42, 0, 0.58, 1] }}
                                    >
                                        {nameLetters.map((letter, index) => {
                                            const delay = 1.16 + index * 0.18;

                                            return (
                                                <g key={letter.char}>
                                                    <motion.text
                                                        x={letter.x}
                                                        y="62"
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                        fontFamily='"Segoe Script", "Snell Roundhand", "Brush Script MT", cursive'
                                                        fontSize={letter.char === "S" ? "64" : "58"}
                                                        fontWeight="400"
                                                        letterSpacing="0"
                                                        fill="transparent"
                                                        stroke="rgba(255,255,255,0.96)"
                                                        strokeWidth="1.8"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        initial={{ opacity: 0, strokeDasharray: 150, strokeDashoffset: 150, x: -8 }}
                                                        animate={{ opacity: 1, strokeDashoffset: 0, x: 0 }}
                                                        transition={{ delay, duration: 0.72, ease: [0.42, 0, 0.58, 1] }}
                                                    >
                                                        {letter.char}
                                                    </motion.text>
                                                    <motion.text
                                                        x={letter.x}
                                                        y="62"
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                        fontFamily='"Segoe Script", "Snell Roundhand", "Brush Script MT", cursive'
                                                        fontSize={letter.char === "S" ? "64" : "58"}
                                                        fontWeight="400"
                                                        letterSpacing="0"
                                                        fill="rgba(255,255,255,0.96)"
                                                        initial={{ opacity: 0, x: -8 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: delay + 0.46, duration: 0.34, ease: "easeInOut" }}
                                                    >
                                                        {letter.char}
                                                    </motion.text>
                                                </g>
                                            );
                                        })}
                                    </motion.svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute left-1/2 bottom-16 z-30 w-[106%] -translate-x-1/2">
                        <motion.div
                            className="relative h-4 rounded-[10px] border border-slate-300 bg-[linear-gradient(180deg,#fbfbf7_0%,#d9dadd_62%,#aeb2b8_100%)] shadow-[0_14px_28px_rgba(15,23,42,0.18)]"
                            initial={{ y: 18 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.12, duration: 0.7, ease: "easeInOut" }}
                        >
                            <div className="absolute left-1/2 top-0 h-1.5 w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300 bg-[linear-gradient(180deg,#fbfbf7,#b8bbc0)] shadow-[0_2px_5px_rgba(15,23,42,0.1)]" />
                            <div className="absolute left-1/2 top-0 h-2 w-20 -translate-x-1/2 rounded-b-xl bg-slate-500/22 shadow-inner" />
                            <div className="absolute inset-x-6 top-1.5 h-px bg-white/70" />
                            <div className="absolute inset-x-5 bottom-0 h-0.5 rounded-b-[10px] bg-slate-600/12" />
                        </motion.div>
                    </div>

                    <div className="absolute bottom-8 left-1/2 z-0 h-3 w-[78%] -translate-x-1/2 rounded-b-full bg-slate-400/24 blur-sm" />
                </div>

            </motion.div>
        </div>
    );
};

export default MacbookLoader;
