import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users } from "lucide-react";
import { usePresenceCount } from "../hooks/usePresenceCount";
import { useTheme } from "../contexts/ThemeContext";

type LiveViewCounterProps = {
    className?: string;
};

export default function LiveViewCounter({ className = "" }: LiveViewCounterProps) {
    const count = usePresenceCount("portfolio-presence") ?? 0;
    const { theme } = useTheme();
    const [hovered, setHovered] = useState(false);

    const shellStyles = theme === "dark"
        ? "bg-zinc-900/75 border border-zinc-700 text-zinc-100 shadow-[inset_4px_4px_12px_rgba(0,0,0,0.6),inset_-4px_-4px_12px_rgba(160,160,170,0.18)]"
        : "bg-white/85 border border-slate-200 text-slate-800 shadow-[inset_6px_6px_16px_rgba(148,163,184,0.2),inset_-6px_-6px_16px_rgba(255,255,255,0.85)]";

    const pulseStyles = theme === "dark" ? "bg-emerald-400" : "bg-emerald-500";
    const glowStyle = {
        background: theme === "dark"
            ? "radial-gradient(circle at left, rgba(16,185,129,0.18), transparent 70%)"
            : "radial-gradient(circle at left, rgba(16,185,129,0.28), transparent 70%)",
    } as const;

    const headline = count === 0 ? "solo flow" : count === 1 ? "you + 1" : `${count} folks`;
    const caption = count === 0 ? "no witnesses" : count === 1 ? "peeked in" : "exploring rn";

    return (
        <motion.div
            className={`relative inline-flex ${className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            tabIndex={0}
            aria-label={`${headline}, ${caption}`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
        >
            <motion.div
                className={`relative inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium backdrop-blur-lg overflow-hidden ${shellStyles}`}
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        ...glowStyle,
                        maskImage: "radial-gradient(circle at left, rgba(0,0,0,1), transparent 70%)",
                        WebkitMaskImage: "radial-gradient(circle at left, rgba(0,0,0,1), transparent 70%)",
                    }}
                />
                <span className="relative inline-flex h-2 w-2" aria-hidden>
                    <span className={`absolute inline-flex h-full w-full rounded-full opacity-70 ${pulseStyles} animate-ping`} />
                    <span className={`relative inline-flex h-full w-full rounded-full ${pulseStyles}`} />
                </span>
                <Users className="relative h-3.5 w-3.5 opacity-80" aria-hidden />
                <motion.span
                    key={headline}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                    className="relative font-semibold"
                    aria-live="polite"
                >
                    <span className="inline sm:hidden">{count}</span>
                    <span className="hidden sm:inline">{headline}</span>
                </motion.span>
                <span className="hidden sm:inline relative text-[11px] opacity-70">{caption}</span>
            </motion.div>

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ type: "spring", stiffness: 240, damping: 20 }}
                        className={`absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md px-3 py-1.5 text-[10px] font-medium shadow-lg backdrop-blur-md ${theme === "dark" ? "bg-zinc-900/85 text-zinc-100 border border-zinc-700" : "bg-white/95 text-slate-700 border border-slate-200"}`}
                    >
                        live presence feed
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
