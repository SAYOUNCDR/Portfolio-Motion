"use client";

import { MousePointerClick } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub, SiBuymeacoffee } from "react-icons/si";
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
        <section className={`relative w-full max-w-4xl mx-auto overflow-hidden ${theme === "dark" ? "" : "text-slate-800"}`}>
            {/* First Section */}
            <div className="flex flex-col items-center justify-center w-full mb-4 select-none relative z-10 pt-4 pb-10">
                <div className="absolute top-0 left-5 pt-4">
                    <LiveViewCounter />
                </div>
                <div
                    className="relative inline-block cursor-help group"
                    onMouseEnter={() => setShowKaizenTip(true)}
                    onMouseLeave={() => setShowKaizenTip(false)}
                >
                    <span className={`transition-all duration-700 text-zinc-800/50 text-center font-serif italic text-7xl sm:text-8xl md:text-9xl font-bold whitespace-nowrap ${theme === "dark" ? "group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" : "group-hover:text-zinc-900 group-hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                        }`}>
                        改善
                    </span>
                    <AnimatePresence>
                        {showKaizenTip && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64 p-4 rounded-xl overflow-hidden backdrop-blur-md shadow-2xl z-50 ${theme === "dark"
                                    ? "bg-zinc-900/60 text-zinc-100 border border-zinc-700/50"
                                    : "bg-white/60 text-slate-700 border border-slate-200/50"
                                    }`}
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="space-y-3 text-center"
                                >
                                    <p className="text-sm leading-relaxed font-medium">
                                        The word <span className="font-bold text-lg mx-1">改善</span> literally translates to "improvement" or "change for the better".
                                    </p>
                                    <div className="w-full h-px bg-current opacity-10" />
                                    <p className="text-xs opacity-80 uppercase tracking-wider font-semibold">
                                        Composed of two characters
                                    </p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className={`flex flex-col items-center p-2 rounded-lg ${theme === "dark" ? "bg-zinc-800/50" : "bg-slate-100/50"}`}>
                                            <span className="text-2xl font-bold mb-1">改</span>
                                            <span className="text-[10px] opacity-70">CHANGE</span>
                                        </div>
                                        <div className={`flex flex-col items-center p-2 rounded-lg ${theme === "dark" ? "bg-zinc-800/50" : "bg-slate-100/50"}`}>
                                            <span className="text-2xl font-bold mb-1">善</span>
                                            <span className="text-[10px] opacity-70">GOOD</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <span className="text-lg mt-4"></span>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start">
                {/* Left - Profile Image */}
                <div className="md:w-1/4 p-6 pr-4 pb-3 flex flex-col items-center md:items-start gap-4 relative">
                    <div className="w-40 h-40 rounded-lg overflow-hidden relative">
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
                <div className="relative md:w-2/3 pt-4 md:pl-2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
                    {/* Header */}
                    <div className="flex w-full flex-col gap-2 items-center md:flex-row md:items-center md:gap-3 mb-3">
                    </div>

                    <div className={`text-lg ${roleColor} flex justify-center md:justify-start w-full`}>
                        <RotateText
                            texts={["Full Stack Developer", "DevOps Engineer", "Applied AI Engineer"]}
                            className="font-medium justify-center md:justify-start"
                        />
                    </div>
                    {/* Social Icons */}
                    <div className="flex flex-wrap gap-3 my-3">
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
                            icon={<SiBuymeacoffee />}
                            username="BuyMeACoffee"
                            link="https://buymeacoffee.com/sayoun_parui"
                        />
                    </div>
                </div>
            </div>

            <a
                href=""
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
        </section>
    );
}
