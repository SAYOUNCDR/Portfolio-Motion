"use client";

import { Mail, Eye } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiCodeforces, SiGithub, SiBuymeacoffee } from "react-icons/si";
import { useTheme } from "../contexts/ThemeContext";

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
    const { theme } = useTheme();

    const headingColor = theme === "dark" ? "text-white" : "text-slate-900";
    const roleColor = theme === "dark" ? "text-gray-400" : "text-slate-600";
    const locationColor = theme === "dark" ? "text-white" : "text-slate-700";
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

    return (
        <section className={`w-full max-w-4xl mx-auto overflow-hidden ${theme === "dark" ? "" : "text-slate-800"}`}>
            <div className="flex flex-col md:flex-row items-center md:items-start">
                {/* Left - Profile Image */}
                <div className="md:w-1/4 p-6 pr-4 flex justify-center md:justify-start relative">
                    <div className="w-40 h-40 rounded-lg overflow-hidden relative">
                        <img
                            src="images/Profile.jpg"
                            alt="Sayoun"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right - Info */}
                <div className="relative md:w-2/3 pt-4 pl-2 flex flex-col justify-center">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-2">
                        <h1 className={`text-2xl font-bold ${headingColor}`}>Sayoun ⚡</h1>
                    </div>

                    <p className={`text-lg ${roleColor}`}>Full Stack AI Developer</p>
                    <p className={`text-lg absolute top-5 right-0 ${locationColor}`}>📍India</p>
                    {/* Social Icons */}
                    <div className="flex flex-wrap gap-3 my-3">
                        <SocialIcon
                            icon={<SiLeetcode />}
                            username="sayoun_parui"
                            link="https://leetcode.com/u/Sayoun_parui/"
                        />
                        <SocialIcon
                            icon={<SiCodeforces />}
                            username="sayounfalut"
                            link="https://codeforces.com/profile/sayounfalut"
                        />
                        <SocialIcon
                            icon={<SiGithub />}
                            username="SAYOUNCDR"
                            link="https://github.com/SAYOUNCDR"
                        />
                        <SocialIcon
                            icon={<SiBuymeacoffee />}
                            username="BuyMeACoffee"
                            link="#"
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
        </section>
    );
}
