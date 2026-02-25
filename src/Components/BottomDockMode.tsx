"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { BsSun } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function BottomDockMode() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
    const lastY = useRef<number>(0);
    const ticking = useRef(false);

    const [wakaStats, setWakaStats] = useState({
        isOnline: false,
        textToday: "Loading...",
        topEditor: null as string | null
    });

    useEffect(() => {
        async function fetchWakaTime() {
            try {
                const res = await fetch('/api/wakatime');
                if (!res.ok) throw new Error('WakaTime API failed');
                const data = await res.json();
                setWakaStats(data);
            } catch (err) {
                console.error("Failed to fetch WakaTime stats", err);
                setWakaStats(prev => ({ ...prev, textToday: "Offline" }));
            }
        }
        fetchWakaTime();
        const interval = setInterval(fetchWakaTime, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    // Theme provided by context
    const { theme, toggleTheme } = useTheme();
    const dockStyles = theme === 'dark'
        ? 'bg-black/40 border border-zinc-700'
        : 'bg-white/80 border border-slate-300 shadow-lg';
    const iconColor = theme === 'dark' ? 'text-white' : 'text-slate-800';
    const tooltipStyles = theme === 'dark'
        ? 'bg-white text-black'
        : 'bg-slate-900 text-white';
    const dividerColor = theme === 'dark' ? 'bg-zinc-500' : 'bg-slate-300';

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
            <div className={`relative px-3 py-2 rounded-xl flex items-center gap-4 backdrop-blur-md transition-colors duration-200 ${dockStyles}`}>
                {/* GitHub */}
                <a href="https://github.com/SAYOUNCDR" target="_blank" className="group relative flex">
                    <FaGithub className={`${iconColor} text-xl`} />
                    <span className={`absolute bottom-[30px] left-1/2 -translate-x-1/2 w-max font-medium text-sm rounded-md py-1 px-1.5 scale-0 group-hover:scale-100 transition ${tooltipStyles}`}>
                        GitHub
                    </span>
                </a>

                {/* Twitter (X) */}
                <a href="https://x.com/DriftNBlde" target="_blank" className="group relative flex">
                    <FaXTwitter className={`${iconColor} text-xl`} />
                    <span className={`absolute bottom-[30px] left-1/2 -translate-x-1/2 w-max font-medium text-sm rounded-md py-1 px-1.5 scale-0 group-hover:scale-100 transition ${tooltipStyles}`}>
                        Twitter
                    </span>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/sayoun-parui-868b4228b/" target="_blank" className="group relative flex">
                    <FaLinkedin className={`${iconColor} text-xl`} />
                    <span className={`absolute bottom-[30px] left-1/2 -translate-x-1/2 w-max font-medium text-sm rounded-md py-1 px-1.5 scale-0 group-hover:scale-100 transition ${tooltipStyles}`}>
                        LinkedIn
                    </span>
                </a>

                {/* Divider */}
                <div className={`h-8 w-[1px] mx-1 ${dividerColor}`}></div>

                {/* Profile Image with Status */}
                <div className="relative group/profile rounded-md cursor-pointer" onClick={() => navigate("/")}>
                    <img
                        src="images/Profile.jpg"
                        alt="Profile"
                        className="w-9 h-9 rounded-md object-cover"
                    />
                    {/* Status Dot */}
                    <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                        {wakaStats.isOnline && (
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        )}
                        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 border border-white ${wakaStats.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                    </span>

                    {/* Tooltip */}
                    <div className={`absolute bottom-[50px] left-1/2 -translate-x-1/2 w-max max-w-[200px] p-2 rounded-lg shadow-xl opacity-0 invisible group-hover/profile:opacity-100 group-hover/profile:visible transition-all duration-300 z-50 text-xs ${tooltipStyles} border ${theme === 'dark' ? 'border-zinc-700' : 'border-slate-200'}`}>
                        <div className="flex flex-col gap-1 items-center text-center">
                            <div className="font-bold flex items-center gap-1.5 whitespace-nowrap">
                                {wakaStats.isOnline ? (
                                    <>
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        <span>Coding Now</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                                        <span>Currently Away</span>
                                    </>
                                )}
                            </div>

                            <div className="opacity-80 text-[10px] leading-tight">
                                {wakaStats.isOnline ? (
                                    <>
                                        in {wakaStats.topEditor || 'IDE'} <br />
                                        for {wakaStats.textToday?.replace('hrs', 'h').replace('mins', 'm')}
                                    </>
                                ) : (
                                    <>
                                        Coded today: {wakaStats.textToday || '0m'}
                                    </>
                                )}
                            </div>
                        </div>
                        {/* Arrow */}
                        <div className={`absolute left-1/2 -ml-1 -bottom-1 w-2 h-2 rotate-45 ${tooltipStyles} border-b border-r ${theme === 'dark' ? 'border-zinc-700' : 'border-slate-200'}`}></div>
                    </div>
                </div>

                {/* Divider */}
                <div className={`h-8 w-[1px] mx-1 ${dividerColor}`}></div>

                {/* Theme Switcher (Sun / Moon) */}
                <div className="relative">
                    <motion.button
                        aria-label="Toggle theme"
                        aria-pressed={theme === 'dark'}
                        onClick={(e) => toggleTheme(e)}
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
