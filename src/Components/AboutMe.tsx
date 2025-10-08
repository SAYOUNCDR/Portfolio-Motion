"use client";

import { Mail } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiCodeforces, SiGithub, SiBuymeacoffee } from "react-icons/si";

interface SocialIconProps {
    icon: React.ReactNode;
    username: string;
    link: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, username, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <motion.div
                className="flex items-center bg-black text-white px-3 py-2 rounded-lg cursor-pointer overflow-hidden w-12 border border-zinc-700 hover:border-gray-500 transition"
                whileHover={{ width: 165 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
                <div className="text-2xl">{icon}</div>
                <motion.span
                    className="ml-3 whitespace-nowrap opacity-0"
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

    return (
        <section className="w-full max-w-4xl mx-auto bg-black overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                {/* Left - Profile Image */}
                <div className="md:w-1/4 p-6 pr-4 flex justify-center md:justify-start relative">
                    <div className="w-40 h-40 rounded-lg overflow-hidden relative">
                        <img
                            src="/Profile.jpg"
                            alt="Sayoun"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right - Info */}
                <div className="relative md:w-2/3 pt-4 pl-2 flex flex-col justify-center">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-3">
                        <h1 className="text-3xl font-bold text-white">Sayoun ⚡</h1>
                    </div>

                    <p className="text-gray-400 text-lg">Full Stack AI Developer</p>
                        <p className="text-white text-lg absolute top-5 right-0">📍India</p>
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
                    <div className="flex flex-wrap gap-3">
                        {/* Resume/CV Button */}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-[#18181b] border border-[#c2c2c2] border-dashed
                          rounded-lg px-3 py-2 text-white font-medium text-xs 
                          gap-2 shadow transition hover:border-gray-500 
                          focus:outline-none whitespace-nowrap"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-download text-gray-400"
                                aria-hidden="true"
                            >
                                <path d="M12 15V3"></path>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <path d="m7 10 5 5 5-5"></path>
                            </svg>
                            Download CV
                        </a>

                        {/* Mail Button */}
                        <div className="relative">
                            <a
                                href="mailto:0xsyn.dev@gmail.com"
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-white text-xs font-medium border border-[#c2c2c2] border-dashed bg-[#18181b] shadow transition hover:border-gray-500 focus:outline-none"
                            >
                                <Mail className="w-4 h-4 text-gray-400" />
                                Email Me
                            </a>

                            {showTooltip && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs rounded bg-white text-black whitespace-nowrap z-10"
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
