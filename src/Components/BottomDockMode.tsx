"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { BsSun } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function BottomDockMode() {

    const [visible, setVisible] = useState(true);
    const lastY = useRef<number>(0);
    const ticking = useRef(false);



    // Theme: 'dark' | 'light'
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        try {
            const saved = localStorage.getItem('theme');
            if (saved === 'light' || saved === 'dark') return saved;
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        } catch {
            return 'dark';
        }
    });

    useEffect(() => {
        try {
            if (theme === 'light') {
                document.documentElement.classList.add('light-theme');
                document.documentElement.classList.remove('dark-theme');
            } else {
                document.documentElement.classList.add('dark-theme');
                document.documentElement.classList.remove('light-theme');
            }
            localStorage.setItem('theme', theme);
        } catch (e) {
            // ignore
        }
    }, [theme]);

    useEffect(() => {
        // initialize lastY safely on mount
        lastY.current = typeof window !== "undefined" ? window.scrollY : 0;

        const onScroll = () => {
            const currentY = window.scrollY;
            if (!ticking.current) {
                ticking.current = true;
                window.requestAnimationFrame(() => {
                    if (currentY > lastY.current && currentY > 50) {
                        // scrolling down -> hide
                        setVisible(false);
                    } else {
                        // scrolling up -> show
                        setVisible(true);
                    }
                    lastY.current = currentY;
                    ticking.current = false;
                });
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={`fixed bottom-6 left-0 right-0 flex justify-center items-center z-50 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 pointer-events-none'}`}>
            <div className="relative bg-black/30 border border-zinc-700 px-3 py-2 rounded-xl flex items-center gap-4 backdrop-blur-md">
                {/* GitHub */}
                <a href="https://github.com/SAYOUNCDR" target="_blank" className="group relative flex">
                    <FaGithub className="text-white text-xl" />
                    <span className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-max bg-white text-black font-medium text-sm rounded-md py-1 px-1.5 scale-0 group-hover:scale-100 transition">
                        GitHub
                    </span>
                </a>

                {/* Twitter (X) */}
                <a href="https://x.com/DriftNBlde" target="_blank" className="group relative flex">
                    <FaXTwitter className="text-white text-xl" />
                    <span className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-max bg-white text-black font-medium text-sm rounded-md py-1 px-1.5 scale-0 group-hover:scale-100 transition">
                        Twitter
                    </span>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/sayoun-parui-868b4228b/" target="_blank" className="group relative flex">
                    <FaLinkedin className="text-white text-xl" />
                    <span className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-max bg-white text-black font-medium text-sm rounded-md py-1 px-1.5 scale-0 group-hover:scale-100 transition">
                        LinkedIn
                    </span>
                </a>

                {/* Divider */}
                <div className="h-8 w-[1px] bg-zinc-500 mx-1"></div>

                {/* Profile Image */}
                <div className="rounded-md overflow-hidden cursor-pointer">
                    <img
                        src="images/Profile.jpg"
                        alt="Profile"
                        className="w-9 h-9 rounded-md"
                    />
                </div>

                {/* Divider */}
                <div className="h-8 w-[1px] bg-zinc-500 mx-1"></div>

                {/* Theme Switcher (Sun / Moon) */}
                <div className="relative">
                    <motion.button
                        aria-label="Toggle theme"
                        aria-pressed={theme === 'dark'}
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className={`relative p-1 rounded-md flex items-center justify-center w-9 h-9 cursor-pointer bg-transparent transition-colors duration-150 ${theme === 'light' ? 'hover:bg-white/90' : 'hover:bg-zinc-800'}`}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <motion.span
                            className="absolute inset-0 flex items-center justify-center"
                            animate={theme === 'light' ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
                            transition={{ duration: 0.18 }}
                        >
                            <BsSun className={`w-5 h-5 ${theme === 'light' ? 'text-black' : 'text-white'}`} />
                        </motion.span>

                        <motion.span
                            className="absolute inset-0 flex items-center justify-center"
                            animate={theme === 'dark' ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                            transition={{ duration: 0.18 }}
                        >
                            <RiMoonClearFill className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                        </motion.span>
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
