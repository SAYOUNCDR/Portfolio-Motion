"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { FiSearch } from "react-icons/fi";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function BottomDock() {
    const [value, setValue] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [visible, setVisible] = useState(true);
    const lastY = useRef<number>(0);
    const ticking = useRef(false);

    const shouldExpand = isHovered || value.length > 0;

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

                {/* Expandable Input */}
                <motion.div
                    className="flex items-center rounded-md bg-zinc-800 px-2 py-1"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    animate={{ width: shouldExpand ? 180 : 40 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                    <FiSearch
                        className="text-zinc-300 cursor-pointer"
                        onClick={() => inputRef.current?.focus()}
                    />
                    <input
                        ref={inputRef}
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Search..."
                        className={`ml-2 bg-transparent text-white text-sm focus:outline-none transition-opacity duration-200 ${shouldExpand ? "opacity-100 w-full" : "opacity-0 w-0"
                            }`}
                    />
                </motion.div>
            </div>
        </div>
    );
}
