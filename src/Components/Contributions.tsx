import { Github, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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
        contribution: "Added git-merge animated icon #167",
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
];

type ContributionsProps = {
    limit?: number;
    showViewAll?: boolean;
};

const Contributions = ({ limit, showViewAll = true }: ContributionsProps) => {
    const items = typeof limit === "number" ? contributions.slice(0, limit) : contributions;

    return (
        <section className="text-white px-4 py-10 w-full mb-15 max-w-6xl mx-auto">

            <h2 className="text-2xl font-bold mb-6">Contributions</h2>

            <ul className="relative ml-4 border-l border-zinc-800">
                {items.map((item) => (
                    <li
                        key={item.repo}
                        className="relative ml-10 rounded-xl py-6 pl-6 after:absolute after:bottom-0 after:-left-10 after:right-0 after:border-b after:border-dashed after:border-zinc-800 after:content-[''] last:after:hidden"
                    >
                        <div className="absolute -left-16 top-6 flex items-center justify-center">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full border border-zinc-800 bg-white h-12 w-12">
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
                                    <time className="text-xs font-medium text-neutral-400">{item.period}</time>
                                )}
                            </div>
                            <a
                                href={item.companyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-medium text-neutral-400 underline-offset-4 hover:text-neutral-200 hover:underline"
                            >
                                {item.company}
                            </a>
                            <p className="text-sm text-neutral-400">{item.description}</p>
                            <p className="text-sm text-neutral-300">{item.contribution}</p>
                        </div>

                        <div className="mt-4 flex flex-row flex-wrap items-start gap-2">
                            <a
                                href={item.prUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-md border border-transparent bg-white px-3 py-1 text-xs font-semibold text-black shadow transition-colors hover:bg-neutral-100"
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
                        className="inline-flex items-center gap-2 rounded-lg border border-[#c2c2c2] border-dashed px-3 py-2 text-xs font-semibold text-white transition hover:border-gray-500"
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