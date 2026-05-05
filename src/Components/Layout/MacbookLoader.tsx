import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type MacbookLoaderProps = {
    onComplete: () => void;
};

const greetings = [
    { text: "Hello", language: "English" },
    { text: "Hola", language: "Spanish" },
    { text: "Bonjour", language: "French" },
    { text: "Ciao", language: "Italian" },
    { text: "Hallo", language: "German" },
    { text: "Namaste", language: "Hindi" },
    { text: "Salaam", language: "Urdu" },
    { text: "Konnichiwa", language: "Japanese" },
    { text: "Annyeong", language: "Korean" },
    { text: "Ni hao", language: "Mandarin" },
    { text: "Merhaba", language: "Turkish" },
];

const MacbookLoader = ({ onComplete }: MacbookLoaderProps) => {
    const [isExit, setIsExit] = useState(false);
    const [greetingIndex, setGreetingIndex] = useState(0);
    const greeting = greetings[greetingIndex];

    useEffect(() => {
        let greetingTimer: ReturnType<typeof setInterval> | undefined;

        const startGreetingTimer = setTimeout(() => {
            greetingTimer = setInterval(() => {
                setGreetingIndex((current) => (current + 1) % greetings.length);
            }, 620);
        }, 1280);

        const stopGreetingTimer = setTimeout(() => {
            if (greetingTimer) clearInterval(greetingTimer);
        }, 4380);

        const exitTimer = setTimeout(() => {
            setIsExit(true);
        }, 4920);

        return () => {
            clearTimeout(startGreetingTimer);
            clearTimeout(stopGreetingTimer);
            clearTimeout(exitTimer);
            if (greetingTimer) clearInterval(greetingTimer);
        };
    }, []);

    return (
        <motion.div
            role="status"
            aria-label="Loading portfolio"
            className="pointer-events-none fixed inset-0 z-[100] grid place-items-center overflow-hidden text-slate-950"
            initial={{ backgroundColor: "rgba(245, 245, 242, 1)" }}
            animate={{
                backgroundColor: isExit ? "rgba(245, 245, 242, 0)" : "rgba(245, 245, 242, 1)",
            }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
            <motion.div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.95),rgba(245,245,242,0)_34%),linear-gradient(180deg,rgba(255,255,255,0.8),rgba(226,232,240,0.5))]"
                initial={{ opacity: 0 }}
                animate={{ opacity: isExit ? 0 : 1 }}
                transition={{ duration: 0.7 }}
            />

            <motion.div
                className="relative flex w-full max-w-[560px] flex-col items-center px-6"
                initial={{ opacity: 0, y: 26, scale: 0.96 }}
                animate={isExit ? { opacity: 0, y: 64, scale: 1.18 } : { opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: isExit ? 0.55 : 0.75, ease: [0.22, 1, 0.36, 1] }}
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
                                    <motion.div
                                        className="mb-5 grid h-12 w-12 place-items-center rounded-[14px] border border-white/15 bg-white/10 text-sm font-bold text-white shadow-inner"
                                        initial={{ opacity: 0, scale: 0.86, y: 8 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: 1.18, duration: 0.45 }}
                                    >
                                        SP
                                    </motion.div>

                                    <div className="h-16 w-full">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                            key={greeting.text}
                                            initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
                                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, y: -12, filter: "blur(5px)" }}
                                            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                                            className="flex flex-col items-center"
                                        >
                                                <span className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">
                                                    {greeting.text}
                                                </span>
                                                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
                                                    {greeting.language}
                                                </span>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    <div className="mt-4 h-1.5 w-full max-w-[220px] overflow-hidden rounded-full bg-white/15">
                                        <motion.div
                                        className="h-full rounded-full bg-white"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 1.08, duration: 3.55, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                    </div>
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

                <motion.div
                    className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: isExit ? 0 : 1, y: isExit ? -4 : 0 }}
                    transition={{ delay: isExit ? 0 : 1.45, duration: 0.4 }}
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>starting portfolio</span>
                </motion.div>
            </motion.div>

            <motion.div
                aria-hidden
                className="absolute left-1/2 top-1/2 z-40 aspect-[16/10] overflow-hidden rounded-2xl bg-slate-950 shadow-[0_0_80px_rgba(15,23,42,0.3)]"
                style={{ width: "min(420px, 82vw)", x: "-50%", y: "-50%" }}
                initial={false}
                animate={
                    isExit
                        ? {
                            opacity: [0, 1, 1, 0],
                            scale: [1, 1.04, 8, 8],
                            borderRadius: ["1rem", "1rem", "0rem", "0rem"],
                        }
                        : { opacity: 0, scale: 1, borderRadius: "1rem" }
                }
                transition={
                    isExit
                        ? { duration: 1.35, times: [0, 0.16, 0.78, 1], ease: [0.76, 0, 0.24, 1] }
                        : { duration: 0 }
                }
                onAnimationComplete={() => {
                    if (isExit) onComplete();
                }}
            >
                <div className="h-full w-full bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.16),transparent_30%),linear-gradient(135deg,#020617,#0f172a)]" />
            </motion.div>
        </motion.div>
    );
};

export default MacbookLoader;
