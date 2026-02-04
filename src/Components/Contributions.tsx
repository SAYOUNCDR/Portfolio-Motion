import { Github, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";


type Contribution = {
    repo: string;
    company: string;
    companyUrl: string;
    prUrl: string;
    description: string;
    contribution: string;
    period?: string;
    icon: { src: string; alt: string };
};

const contributions: Contribution[] = [
    {
        repo: "pqoqubbw/icons",
        company: "Lucide Animated",
        companyUrl: "https://lucide-animated.com/",
        prUrl: "https://github.com/pqoqubbw/icons/pull/167",
        description: "Open Source Animated Icon Library built on top of lucid icons.",
        contribution: "Animated \"git-merge\" icon #167",
        period: "July 2024",
        icon: {
            src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/git-merge-icon-svg-download-png-8863137.png",
            alt: "Branch icon",
        },
    },
    {
        repo: "EbookFoundation/free-programming-books",
        company: "EbookFoundation",
        companyUrl: "https://github.com/EbookFoundation/free-programming-books",
        prUrl: "https://github.com/EbookFoundation/free-programming-books/pull/12356",
        description: "Massive open-source repo curating free dev resources.",
        contribution: "Added TypeScript Cheat Sheet covering TS basics, React, and Node/Express.",
        period: "February 2024",
        icon: {
            src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/git-merge-icon-svg-download-png-8863137.png",
            alt: "Branch icon",
        },
    },
    {
        repo: "pqoqubbw/icons",
        company: "Lucide Animated",
        companyUrl: "https://lucide-animated.com/",
        prUrl: "https://github.com/pqoqubbw/icons/pull/172",
        description: "Open Source Animated Icon Library built on top of lucid icons.",
        contribution: "Animated 8 \"git related\" icons #172",
        period: "July 2024",
        icon: {
            src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/git-merge-icon-svg-download-png-8863137.png",
            alt: "Branch icon",
        },
    },
];

type ContributionsProps = {
    limit?: number;
    showViewAll?: boolean;
};

const Contributions = ({ limit, showViewAll = true }: ContributionsProps) => {
    const items = typeof limit === "number" ? contributions.slice(0, limit) : contributions;
    const { theme } = useTheme();

    const sectionText = theme === "dark" ? "text-white" : "text-slate-800";
    const borderColor = theme === "dark" ? "border-zinc-800" : "border-slate-400";
    const metaText = theme === "dark" ? "text-neutral-400" : "text-slate-500";
    const descriptionText = theme === "dark" ? "text-neutral-400" : "text-slate-600";
    const contributionText = theme === "dark" ? "text-neutral-300" : "text-slate-700";
    const cardBorder = theme === "dark" ? "border-zinc-800" : "border-slate-400";
    const afterBorder = theme === "dark" ? "after:border-zinc-800" : "after:border-slate-400";
    const buttonBg = theme === "dark" ? "bg-white text-black hover:bg-neutral-100" : "bg-slate-900 text-white hover:bg-slate-800";
    const viewAllBorder = theme === "dark" ? "border-[#c2c2c2] hover:border-gray-500 text-white" : "border-slate-400 hover:border-slate-500 text-slate-800";
    const depthEffect = theme === "dark"
        ? "shadow-[inset_4px_4px_12px_rgba(0,0,0,0.7),inset_-4px_-4px_12px_rgba(161,161,170,0.25)] hover:shadow-[inset_3px_3px_9px_rgba(0,0,0,0.75),inset_-3px_-3px_9px_rgba(200,200,210,0.22)]"
        : "shadow-[inset_6px_6px_16px_rgba(148,163,184,0.3),inset_-6px_-6px_16px_rgba(255,255,255,0.95)] hover:shadow-[inset_4px_4px_12px_rgba(148,163,184,0.35),inset_-4px_-4px_12px_rgba(255,255,255,0.9)]";

    return (
        <section className={`${sectionText} px-6 py-10 w-full mb-15 max-w-6xl mx-auto`}>

            <h2 className="text-2xl font-bold mb-6">Contributions</h2>

            <ul className={`relative ml-4 border-l ${borderColor}`}>
                {items.map((item) => (
                    <li
                        key={item.repo}
                        className={`relative ml-10 rounded-xl py-6 pl-6 after:absolute after:bottom-0 after:-left-10 after:right-0 after:border-b after:border-dashed after:content-[''] last:after:hidden ${cardBorder} ${afterBorder}`}
                    >
                        <div className="absolute -left-16 top-6 flex items-center justify-center">
                            <span className={`relative flex shrink-0 overflow-hidden rounded-full border bg-white h-12 w-12 ${cardBorder}`}>
                                <img
                                    src={item.icon.src}
                                    alt={item.icon.alt}
                                    className="h-full w-full object-contain"
                                />
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <h3 className="text-base font-semibold leading-none">{item.repo}</h3>
                                {item.period && (
                                    <time className={`text-xs font-medium ${metaText}`}>{item.period}</time>
                                )}
                            </div>
                            <a
                                href={item.companyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={`text-xs font-medium underline-offset-4 hover:underline ${metaText} ${theme === "dark" ? "hover:text-neutral-200" : "hover:text-slate-700"}`}
                            >
                                {item.company}
                            </a>
                            <p className={`text-sm ${descriptionText}`}>{item.description}</p>
                            <p className={`text-sm ${contributionText}`}>{item.contribution}</p>
                        </div>

                        <div className="mt-4 flex flex-row flex-wrap items-start gap-2">
                            <a
                                href={item.prUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-flex items-center gap-2 rounded-md border border-transparent px-3 py-1 text-xs font-semibold shadow transition-colors ${buttonBg}`}
                            >
                                <Github className="h-3 w-3" />
                                <span>View PR</span>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>

            {showViewAll && (
                <div className="mt-8 flex justify-end">
                    <Link
                        to="/contributions"
                        className={`inline-flex items-center gap-2 rounded-lg border border-dashed px-3 py-2 text-xs font-semibold transition ${viewAllBorder} ${depthEffect}`}
                    >
                        View more contributions
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            )}






        </section>
    );
};

export default Contributions;