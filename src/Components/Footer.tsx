import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
    const TypewriterText = () => {
        const full = "Shipping pixels → animating states → refining semantics.";
        const [text, setText] = useState("");
        const [isDeleting, setIsDeleting] = useState(false);

        useEffect(() => {
            let timer: number | undefined;

            // typing speed is slower, deleting is faster
            const typingSpeed = isDeleting ? 20 : 40;

            if (!isDeleting && text === full) {
                // pause at full text before deleting
                timer = window.setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === "") {
                // pause slightly at empty before typing again
                timer = window.setTimeout(() => setIsDeleting(false), 500);
            } else {
                timer = window.setTimeout(() => {
                    const next = isDeleting
                        ? full.substring(0, text.length - 1)
                        : full.substring(0, text.length + 1);
                    setText(next);
                }, typingSpeed);
            }

            return () => {
                if (timer) clearTimeout(timer);
            };
        }, [text, isDeleting]);

        return (
            <span>
                {text}
                <span style={{ animation: "blinkCaret 1s step-end infinite", marginLeft: 2 }}>|</span>
            </span>
        );
    };
    return (
        <footer
            id="footer"
            className="relative w-full mt-24 pt-14 pb-10 overflow-hidden mb-10"
        >
            {/* Ambient backdrop gradient */}
            {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" /> */}
            {/* <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[42rem] rounded-full bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-indigo-500/10 blur-3xl" /> */}

            <div className="relative max-w-4xl mx-auto px-6 flex flex-col gap-10">
                {/* Brand & mantra */}
                <div className="space-y-5 text-center">
                    <div className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm text-xs text-zinc-300 tracking-wide overflow-hidden">
                        {/* Shine overlay (slightly brighter) */}
                        <span className="pointer-events-none absolute inset-0 -translate-x-full animate-shine-smooth bg-gradient-to-r from-transparent via-white/30 to-transparent [mask-image:linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]" />
                        <Heart className="size-3 text-pink-400 relative" />
                        <span className="relative transition-colors duration-300 group-hover:text-white">Built with focus, curiosity & far too much caffeine</span>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                        Sayoun
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400 max-w-xl mx-auto">
                        Crafting smooth, accessible interfaces & micro–interactions. Shipping ideas fast, polishing the details slower. Always learning.
                    </p>
                </div>

                {/* Divider accent */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />
                {/* Meta */}
                <div className="flex flex-col items-center gap-2 text-[11px] text-zinc-500">
                    <p>
                        © {new Date().getFullYear()} <span className="text-zinc-300">Sayoun Parui</span>. Source on{' '}
                        <a
                            href="https://github.com/SAYOUNCDR/Portfolio-Motion"
                            target="_blank"
                            rel="noreferrer"
                            className="underline decoration-dotted hover:text-zinc-300"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                    <p className="text-zinc-600">
                        <span>
                            <TypewriterText />
                        </span>
                        <style>{`
                        @keyframes blinkCaret {50% { opacity: 0 }}
                        `}</style>
                    </p>
                </div>
            </div>
        </footer>
    );
}
