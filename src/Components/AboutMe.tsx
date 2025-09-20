import { Mail } from "lucide-react";
import { useState } from "react";

export default function AboutMe() {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <section className="w-full max-w-4xl mx-auto bg-black overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                {/* Left - Profile Image */}
                <div className="md:w-1/4 p-6 pr-4 flex justify-center md:justify-start relative">
                    <div className="w-40 h-40 rounded-lg overflow-hidden relative">
                        <img
                            src="src/assets/Profile.jpg"
                            alt="Sayoun"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>


                {/* Right - Info */}
                <div className="md:w-2/3 p-6 pl-2 flex flex-col justify-center">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-3">
                        <h1 className="text-3xl font-bold text-white">Sayoun ⚡</h1>
                        {/* <span className="flex items-center gap-2 px-3 py-1 rounded-lg border border-green-500 text-green-500 text-sm font-medium">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            Available
                        </span> */}
                    </div>

                    <p className="text-gray-400 text-lg mb-8">Full Stack AI Developer</p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                        {/* Resume/CV Button */}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-[#18181b] border border-[#27272a] 
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
                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-white text-xs font-medium border border-[#27272a] bg-[#18181b] shadow transition hover:border-gray-500 focus:outline-none"
                            >
                                <Mail className="w-4 h-4 text-gray-400" />
                                Email Me
                            </a>

                            {showTooltip && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs rounded bg-gray-800 text-white whitespace-nowrap z-10 border border-[#27272a] shadow">
                                    0xsyn.dev@gmail.com
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}