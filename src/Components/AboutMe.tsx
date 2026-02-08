"use client";

import { MousePointerClick, Calendar } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";
// import { SiBuymeacoffee } from "react-icons/si";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";
import LiveViewCounter from "./LiveViewCounter";
import LivePingChat from "./LivePingChat";
import RotateText from "./RotateText";

interface SocialIconProps {
    icon: React.ReactNode;
    username: string;
    link: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, username, link }) => {
    const { theme } = useTheme();
    const baseStyles = theme === "dark"
        ? "text-white border border-zinc-700 bg-zinc-900/40 hover:border-gray-500"
        : "text-slate-800 border border-slate-300 bg-slate-50 hover:border-slate-400";
    const labelColor = theme === "dark" ? "text-white" : "text-slate-800";
    const depthEffect = theme === "dark"
        ? "shadow-[inset_4px_4px_12px_rgba(0,0,0,0.7),inset_-4px_-4px_12px_rgba(161,161,170,0.25)] hover:shadow-[inset_3px_3px_9px_rgba(0,0,0,0.75),inset_-3px_-3px_9px_rgba(200,200,210,0.22)]"
        : "shadow-[inset_6px_6px_16px_rgba(148,163,184,0.3),inset_-6px_-6px_16px_rgba(255,255,255,0.95)] hover:shadow-[inset_4px_4px_12px_rgba(148,163,184,0.35),inset_-4px_-4px_12px_rgba(255,255,255,0.9)]";

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <motion.div
                className={`flex items-center px-3 py-2 rounded-lg cursor-pointer overflow-hidden w-12 transition ${baseStyles} ${depthEffect}`}
                whileHover={{ width: 165 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
                <div className="text-2xl">{icon}</div>
                <motion.span
                    className={`ml-3 whitespace-nowrap opacity-0 ${labelColor}`}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    {username}
                </motion.span>
            </motion.div>
        </a>
    );
};

export default function AboutMe() {
    const [showComponentTip, setShowComponentTip] = useState(false);
    const [showKaizenTip, setShowKaizenTip] = useState(false);
    const { theme } = useTheme();

    const roleColor = theme === "dark" ? "text-gray-400" : "text-slate-600";
    const componentLinkStyles = theme === "dark"
        ? "bg-zinc-900/70 border border-zinc-700 text-white hover:border-zinc-500 shadow-[inset_4px_4px_12px_rgba(0,0,0,0.7),inset_-4px_-4px_12px_rgba(161,161,170,0.25)] hover:shadow-[inset_3px_3px_9px_rgba(0,0,0,0.75),inset_-3px_-3px_9px_rgba(200,200,210,0.22)]"
        : "bg-white border border-slate-300 text-slate-800 hover:border-slate-500 shadow-[inset_6px_6px_16px_rgba(148,163,184,0.3),inset_-6px_-6px_16px_rgba(255,255,255,0.95)] hover:shadow-[inset_4px_4px_12px_rgba(148,163,184,0.35),inset_-4px_-4px_12px_rgba(255,255,255,0.9)]";

    return (
        <section className={`relative w-full max-w-4xl mx-auto ${theme === "dark" ? "" : "text-slate-800"}`}>
            {/* First Section */}
            <div className="flex flex-col items-center justify-center w-full mb-4 select-none relative z-10 pt-4 pb-10">
                <div
                    className={`absolute inset-0 z-0 bg-cover bg-center pointer-events-none rounded-lg overflow-hidden ${theme === "dark" ? "opacity-10" : "opacity-60"}`}
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=2076&auto=format&fit=crop")',
                        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                        maskComposite: 'intersect',
                        WebkitMaskComposite: 'source-in',
                        filter: 'blur(2px)'
                    }}
                />
                <div className="absolute top-0 left-5 pt-4">
                    <LiveViewCounter />
                </div>
                <div
                    className="relative inline-block cursor-help group"
                    onMouseEnter={() => setShowKaizenTip(true)}
                    onMouseLeave={() => setShowKaizenTip(false)}
                >
                    <span className={`transition-all duration-700 text-center font-serif italic text-7xl sm:text-8xl md:text-9xl font-bold whitespace-nowrap ${theme === "dark" ? "text-zinc-400/50 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" : "text-zinc-800/50 group-hover:text-zinc-900 group-hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                        }`}>
                        継続
                    </span>
                    <AnimatePresence>
                        {showKaizenTip && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64 p-4 rounded-xl overflow-hidden backdrop-blur-md shadow-2xl z-50 ${theme === "dark"
                                    ? "bg-zinc-900/80 text-zinc-100 border border-zinc-700/50"
                                    : "bg-white/80 text-slate-700 border border-slate-200/50"
                                    }`}
                            >
                                <div
                                    className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                                    style={{
                                        backgroundImage: 'url("https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2092&auto=format&fit=crop")',
                                        filter: 'blur(1px)'
                                    }}
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="space-y-3 text-center relative z-10"
                                >
                                    <p className="text-sm leading-relaxed font-medium">
                                        The word <span className="font-bold text-lg mx-1">継続</span> translates to "consistency" or "continuance".
                                    </p>
                                    <div className="w-full h-px bg-current opacity-10" />
                                    <p className="text-sm italic font-serif text-center">
                                        "継続は力なり"
                                        <br />
                                        <span className="text-xs opacity-70 not-italic font-sans">
                                            (Consistency is power)
                                        </span>
                                    </p>
                                    <div className="w-full h-px bg-current opacity-10" />
                                    <p className="text-xs opacity-80 uppercase tracking-wider font-semibold">
                                        Composed of two characters
                                    </p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className={`flex flex-col items-center p-2 rounded-lg ${theme === "dark" ? "bg-zinc-800/50" : "bg-slate-100/50"}`}>
                                            <span className="text-2xl font-bold mb-1">継</span>
                                            <span className="text-[10px] opacity-70">Inherit</span>
                                        </div>
                                        <div className={`flex flex-col items-center p-2 rounded-lg ${theme === "dark" ? "bg-zinc-800/50" : "bg-slate-100/50"}`}>
                                            <span className="text-2xl font-bold mb-1">続</span>
                                            <span className="text-[10px] opacity-70">Continue</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <span className="text-lg m-6"></span>
            </div>

            {/* <div className={`w-full h-[1px] my-8 bg-gradient-to-r from-transparent ${theme === "dark" ? "via-zinc-700" : "via-slate-300"} to-transparent opacity-60`} /> */}

            <div className="flex flex-row items-center md:items-start">
                {/* Left - Profile Image */}
                <div className="w-auto md:w-1/4 p-3 md:p-6 md:pr-4 md:pb-3 flex flex-col items-center md:items-start gap-4 relative">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg overflow-hidden relative">
                        <img
                            src="images/Profile.jpg"
                            alt="Sayoun"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <LivePingChat
                        orientation="horizontal"
                        maxWidthClass="w-[160px] sm:w-40"
                        inputWidthClass="w-[160px]"
                        className="hidden justify-center sm:flex sm:justify-center"
                    />
                </div>

                {/* Right - Info */}
                <div className="relative flex-1 md:w-2/3 pt-2 md:pt-4 pl-2 md:pl-2 flex flex-col items-start justify-center text-left">
                    {/* Header */}
                    <div className="flex w-full flex-col gap-2 items-center md:flex-row md:items-center md:gap-3 mb-3">
                    </div>

                    <div className={`text-lg ${roleColor} flex justify-start w-full`}>
                        <RotateText
                            texts={["Full Stack Developer", "DevOps Engineer", "Applied AI Engineer"]}
                            className="font-medium justify-start"
                        />
                    </div>
                    {/* Social Icons */}
                    <div className="relative group">
                        <div className="flex flex-col gap-3 my-3 w-fit">
                            <div className="flex flex-wrap gap-3">
                                <SocialIcon
                                    icon={<FaXTwitter />}
                                    username="DriftNBlde"
                                    link="https://x.com/DriftNBlde"
                                />
                                <SocialIcon
                                    icon={<FaLinkedin />}
                                    username="Sayoun Parui"
                                    link="https://www.linkedin.com/in/sayoun-parui-868b4228b/"
                                />
                                <SocialIcon
                                    icon={<SiGithub />}
                                    username="SAYOUNCDR"
                                    link="https://github.com/SAYOUNCDR"
                                />
                                <SocialIcon
                                    icon={
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 56 56"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M28 0C6.22222 0 0 6.22222 0 28C0 49.7778 6.23778 56 28 56C49.7622 56 56 49.7778 56 28C56 6.22222 49.7622 0 28 0Z" fill="currentColor"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.24755 7.24755C3.5875 10.9076 2 17.153 2 28C2 38.8461 3.59108 45.0918 7.25306 48.7521C10.9153 52.4127 17.1612 54 28 54C38.8388 54 45.0847 52.4127 48.7469 48.7521C52.4089 45.0918 54 38.8461 54 28C54 17.1539 52.4089 10.9082 48.7469 7.24787C45.0847 3.58733 38.8388 2 28 2C17.153 2 10.9076 3.5875 7.24755 7.24755ZM0 28C0 6.22222 6.22222 0 28 0C49.7622 0 56 6.22222 56 28C56 49.7778 49.7622 56 28 56C6.23778 56 0 49.7778 0 28Z"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M27.0769 13H15V47H24.3846V39.8889H27.0769C34.7305 39.8889 41 33.9048 41 26.4444C41 18.984 34.7305 13 27.0769 13ZM24.3846 30.7778V22.1111H27.0769C29.6194 22.1111 31.6154 24.0864 31.6154 26.4444C31.6154 28.8024 29.6194 30.7778 27.0769 30.7778H24.3846Z" fill="currentColor"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18 12H29.0769C36.2141 12 42 17.5716 42 24.4444C42 31.3173 36.2141 36.8889 29.0769 36.8889H25.3846V44H18V12ZM25.3846 29.7778H29.0769C32.1357 29.7778 34.6154 27.39 34.6154 24.4444C34.6154 21.4989 32.1357 19.1111 29.0769 19.1111H25.3846V29.7778Z" fill="white"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17 11H29.0769C36.7305 11 43 16.984 43 24.4444C43 31.9048 36.7305 37.8889 29.0769 37.8889H26.3846V45H17V11ZM19 13V43H24.3846V35.8889H29.0769C35.6978 35.8889 41 30.7298 41 24.4444C41 18.1591 35.6978 13 29.0769 13H19ZM24.3846 18.1111H29.0769C32.6521 18.1111 35.6154 20.9114 35.6154 24.4444C35.6154 27.9775 32.6521 30.7778 29.0769 30.7778H24.3846V18.1111ZM26.3846 20.1111V28.7778H29.0769C31.6194 28.7778 33.6154 26.8024 33.6154 24.4444C33.6154 22.0864 31.6194 20.1111 29.0769 20.1111H26.3846Z" fill="#24292E"></path>
                                        </svg>
                                    }
                                    username="Peerlist"
                                    link="https://peerlist.io/0xsyndev"
                                />
                                {/* <SocialIcon
                                icon={<SiBuymeacoffee />}
                                username="BuyMeACoffee"
                                link="https://buymeacoffee.com/sayoun_parui"
                            /> */}
                            </div>
                            <a
                                href="https://cal.com/sayoun-parui-sdv05p/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`hidden md:flex items-center justify-center gap-2 w-full px-2 py-1 md:px-3 md:py-2 rounded-lg transition font-medium text-xs sm:text-sm ${theme === "dark"
                                    ? "text-white border border-zinc-700 bg-zinc-900/40 hover:border-gray-500 shadow-[inset_4px_4px_12px_rgba(0,0,0,0.7),inset_-4px_-4px_12px_rgba(161,161,170,0.25)] hover:shadow-[inset_3px_3px_9px_rgba(0,0,0,0.75),inset_-3px_-3px_9px_rgba(200,200,210,0.22)]"
                                    : "text-slate-800 border border-slate-300 bg-slate-50 hover:border-slate-400 shadow-[inset_6px_6px_16px_rgba(148,163,184,0.3),inset_-6px_-6px_16px_rgba(255,255,255,0.95)] hover:shadow-[inset_4px_4px_12px_rgba(148,163,184,0.35),inset_-4px_-4px_12px_rgba(255,255,255,0.9)]"
                                    }`}
                            >
                                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                                <span>Schedule a meeting</span>
                            </a>
                        </div>
                        <div className="hidden md:block absolute -right-[140px] top-4 text-center">
                            <svg className="w-24 h-12 text-slate-500/60 rotate-0" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M 80 10 Q 50 40 10 30" />
                                <path d="M 10 30 L 20 25 M 10 30 L 20 38" />
                            </svg>
                            <p className="text-[10px] font-handwriting text-slate-500/80 -rotate-6 mt-1 whitespace-nowrap">
                                hover to see cool effect
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Schedule Button */}
            <div className="md:hidden w-full px-3 mt-1 mb-4 relative z-20">
                <a
                    href="https://cal.com/sayoun-parui-sdv05p/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg transition font-medium text-sm ${theme === "dark"
                        ? "text-white border border-zinc-700 bg-zinc-900/40 hover:border-gray-500 shadow-[inset_4px_4px_12px_rgba(0,0,0,0.7),inset_-4px_-4px_12px_rgba(161,161,170,0.25)] hover:shadow-[inset_3px_3px_9px_rgba(0,0,0,0.75),inset_-3px_-3px_9px_rgba(200,200,210,0.22)]"
                        : "text-slate-800 border border-slate-300 bg-slate-50 hover:border-slate-400 shadow-[inset_6px_6px_16px_rgba(148,163,184,0.3),inset_-6px_-6px_16px_rgba(255,255,255,0.95)] hover:shadow-[inset_4px_4px_12px_rgba(148,163,184,0.35),inset_-4px_-4px_12px_rgba(255,255,255,0.9)]"
                        }`}
                >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule a meeting</span>
                </a>
            </div>

            <a
                href="https://github.com/SAYOUNCDR/Kairo-Ui"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setShowComponentTip(true)}
                onMouseLeave={() => setShowComponentTip(false)}
                onFocus={() => setShowComponentTip(true)}
                onBlur={() => setShowComponentTip(false)}
                className={`hidden md:flex absolute right-[2.5rem] top-[10rem] -translate-y-1/2 flex-col gap-0.5 rounded-xl px-4 py-3 text-xs font-medium transition-opacity duration-300 rotate-[-8deg] opacity-50 hover:opacity-100 ${componentLinkStyles} z-50`}
            >
                <div className="relative flex flex-col gap-0.5">
                    <span className="flex items-center gap-2 text-sm font-semibold">
                        <MousePointerClick className="h-3.5 w-3.5" />
                        Components lab
                    </span>
                    <span className="text-[11px] font-normal opacity-80">
                        under development
                    </span>
                    <AnimatePresence>
                        {showComponentTip && (
                            <motion.div
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 4 }}
                                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                                className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md px-3 py-1.5 text-[10px] font-medium shadow-lg backdrop-blur-md  ${theme === "dark" ? "bg-zinc-900/85 text-zinc-100 border border-zinc-700" : "bg-white/95 text-slate-700 border border-slate-200"}`}
                            >
                                under development
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </a>
            <div className={`w-full h-[1px] my-8 bg-gradient-to-r from-transparent ${theme === "dark" ? "via-zinc-700" : "via-slate-300"} to-transparent opacity-60`} />
        </section >
    );
}
