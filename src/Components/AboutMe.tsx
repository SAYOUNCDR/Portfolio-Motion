"use client";

import { Mail, Eye, MousePointerClick } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiBuymeacoffee } from "react-icons/si";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";
import LiveViewCounter from "./LiveViewCounter";
import LivePingChat from "./LivePingChat";

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
    const [showTooltip, setShowTooltip] = useState(false);
    const [showComponentTip, setShowComponentTip] = useState(false);
    const { theme } = useTheme();

    const headingColor = theme === "dark" ? "text-white" : "text-slate-900";
    const roleColor = theme === "dark" ? "text-gray-400" : "text-slate-600";
    const resumeButton = theme === "dark"
        ? "bg-[#18181b] border-[#c2c2c2] text-white hover:border-gray-500"
        : "bg-white border-slate-300 text-slate-800 hover:border-slate-500";
    const mailButton = theme === "dark"
        ? "text-white border-[#c2c2c2] hover:border-gray-500 bg-[#18181b]"
        : "text-slate-800 border-slate-300 hover:border-slate-500 bg-white";
    const tooltipStyles = theme === "dark"
        ? "bg-white text-black"
        : "bg-slate-900 text-white";
    const iconAccent = theme === "dark" ? "text-gray-400" : "text-slate-500";
    const componentLinkStyles = theme === "dark"
        ? "bg-zinc-900/70 border border-zinc-700 text-white hover:border-zinc-500 shadow-[inset_4px_4px_12px_rgba(0,0,0,0.7),inset_-4px_-4px_12px_rgba(161,161,170,0.25)] hover:shadow-[inset_3px_3px_9px_rgba(0,0,0,0.75),inset_-3px_-3px_9px_rgba(200,200,210,0.22)]"
        : "bg-white border border-slate-300 text-slate-800 hover:border-slate-500 shadow-[inset_6px_6px_16px_rgba(148,163,184,0.3),inset_-6px_-6px_16px_rgba(255,255,255,0.95)] hover:shadow-[inset_4px_4px_12px_rgba(148,163,184,0.35),inset_-4px_-4px_12px_rgba(255,255,255,0.9)]";

    return (
        <section className={`relative w-full max-w-4xl mx-auto overflow-hidden ${theme === "dark" ? "" : "text-slate-800"}`}>
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
                        <h1 className={`text-2xl font-bold ${headingColor}`}>Sayoun ⚡</h1>
                        <LiveViewCounter className="md:ml-auto" />
                    </div>

                    <p className={`text-lg ${roleColor}`}>Full Stack AI Developer</p>
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

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-5 pl-[2px]">
                        {/* Resume/CV Button */}
                        <a
                            href="https://drive.google.com/file/d/1zrMACd70KzK-4lpzZAQw4eLbM4f2ovZG/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center border border-dashed rounded-lg px-4 py-2 font-medium text-xs gap-2 shadow transition focus:outline-none whitespace-nowrap ${resumeButton}`}
                        >
                            <Eye className={`w-4 h-4 ${iconAccent}`} aria-hidden="true" />
                            Resume
                        </a>

                        {/* Mail Button */}
                        <div className="relative">
                            <a
                                href="mailto:0xsyn.dev@gmail.com"
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border border-dashed shadow transition focus:outline-none ${mailButton}`}
                            >
                                <Mail className={`w-4 h-4 ${iconAccent}`} />
                                Email Me
                            </a>

                            {showTooltip && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs rounded whitespace-nowrap z-10 ${tooltipStyles}`}
                                >
                                    0xsyn.dev@gmail.com
                                </motion.div>
                            )}

                        </div>
                    </div>
                </div>
            </div>

            <a
                href=""
                onMouseEnter={() => setShowComponentTip(true)}
                onMouseLeave={() => setShowComponentTip(false)}
                onFocus={() => setShowComponentTip(true)}
                onBlur={() => setShowComponentTip(false)}
                className={`hidden md:flex absolute right-[2.5rem] top-[10rem] -translate-y-1/2 flex-col gap-0.5 rounded-xl px-4 py-3 text-xs font-medium transition-opacity duration-300 rotate-[-8deg] opacity-50 hover:opacity-100 ${componentLinkStyles}`}
            >
                <div className="relative flex flex-col gap-0.5">
                    <span className="flex items-center gap-2 text-sm font-semibold">
                        <MousePointerClick className="h-3.5 w-3.5" />
                        Components lab
                    </span>
                    <span className="text-[11px] font-normal opacity-80">
                        click for micro-interactions
                    </span>
                    {showComponentTip && (
                        <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ type: "spring", stiffness: 250, damping: 20 }}
                            className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-md px-3 py-1 text-[10px] font-medium shadow-lg ${tooltipStyles}`}
                        >
                            under development
                        </motion.div>
                    )}
                </div>
            </a>
        </section>
    );
}
