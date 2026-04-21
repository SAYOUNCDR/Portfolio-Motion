import { ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function Experience() {
    const { theme } = useTheme();
    const [showCompanyInfo, setShowCompanyInfo] = useState(false);

    const headingText = theme === "dark" ? "text-zinc-100" : "text-slate-900";
    const companyText = theme === "dark" ? "text-zinc-100" : "text-slate-900";
    const companyHoverText = theme === "dark" ? "hover:text-white" : "hover:text-slate-700";
    const subtitleText = theme === "dark" ? "text-zinc-300" : "text-slate-600";
    const dateText = theme === "dark" ? "text-zinc-400" : "text-slate-500";
    const companyLinkText = theme === "dark" ? "text-zinc-500" : "text-slate-500";

    return (
        <section className="w-full max-w-3xl mx-auto p-6">
            <h2 className={`text-xl font-bold ${headingText}`}>
                cool places I worked at
            </h2>

            <div className="mt-5">
                <div className="group flex items-start sm:items-center justify-between gap-4 rounded-xl px-2.5 py-2.5">
                    <div className="flex items-start gap-3.5 min-w-0">
                        <a
                            href="https://www.drcode.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-10 w-10 rounded-full bg-orange-500 text-white grid place-items-center font-extrabold text-xs shrink-0"
                        >
                            DC
                        </a>

                        <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                                <button
                                    type="button"
                                    onClick={() => setShowCompanyInfo((prev) => !prev)}
                                    className={`text-left text-md sm:text-lg font-semibold leading-tight cursor-pointer transition-colors ${companyText} ${companyHoverText}`}
                                    aria-label="Toggle DrCode AI details"
                                >
                                    DrCode AI
                                </button>
                                <button
                                    type="button"
                                    aria-label="Toggle company info"
                                    onClick={() => setShowCompanyInfo((prev) => !prev)}
                                    className={`rounded p-0.5 cursor-pointer transition-colors ${dateText} ${companyHoverText}`}
                                >
                                    <ChevronRight
                                        className={`w-4 h-4 transition-transform ${showCompanyInfo ? "rotate-90" : "rotate-0"}`}
                                    />
                                </button>
                            </div>
                            <p className={`text-xs sm:text-sm ${subtitleText}`}>
                                FullStack AI Engineer Intern | remote
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                        <a
                            href="https://www.drcode.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 text-[10px] sm:text-xs uppercase tracking-wide ${companyLinkText}`}
                        >
                            Visit Site
                            <ExternalLink className="w-3 h-3" />
                        </a>
                        <p className={`text-xs sm:text-sm whitespace-nowrap ${dateText}`}>
                            april 2026 -
                            <span className="inline-flex items-center gap-0.5 ml-1 align-middle">
                                <span className="h-1 w-1 rounded-full bg-emerald-500" />
                                <span className="text-[9px] sm:text-[10px] text-emerald-500">present</span>
                            </span>
                        </p>
                    </div>
                </div>

                {showCompanyInfo && (
                    <p className={`mt-1 pl-[3.4rem] text-xs sm:text-sm ${subtitleText}`}>
                        DrCode is all about building AI products from idea to production. We partner with startups and companies to design, build and launch AI-native products used by mass.
                    </p>
                )}
            </div>
        </section>
    );
}
