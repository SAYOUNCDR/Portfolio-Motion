import { Github, GitBranch, Building2, ExternalLink } from "lucide-react";

interface Contribution {
    repo: string;
    company?: string;
    companyUrl?: string;
    prUrl: string;
    description: string;
    contribution: string;
}

const contributions: Contribution[] = [
    {
        repo: "pqoqubbw/icons",
        company: "Lucide Animated",
        companyUrl: "https://lucide-animated.com/",
        prUrl: "https://github.com/pqoqubbw/icons/pull/167",
        description: "Open Source Animated Icon Library built on top of lucid icons.",
        contribution:
            "Added git-merge animated icon #167",
    },
    {
        repo: "EbookFoundation/free-programming-books",
        company: "EbookFoundation",
        companyUrl: "https://github.com/EbookFoundation/free-programming-books",
        prUrl: "https://github.com/EbookFoundation/free-programming-books/pull/12356",
        description: "Massive open-source repo curating free dev resources.",
        contribution:
            "Added TypeScript Cheat Sheet covering TS basics, React, and Node/Express.",
    },

];

const OpenSource = () => {
    return (
        <section className="w-full max-w-3xl mx-auto py-14 px-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
                Open Source Contributions
            </h2>

            <div className="flex flex-col gap-6">
                {contributions.map((item, index) => (
                    <div
                        key={index}
                        className="
              w-full rounded-2xl border border-zinc-800 
              bg-gradient-to-r from-zinc-900/80 via-zinc-900/60 to-black/20
              shadow-lg hover:shadow-xl hover:border-zinc-700
              transition-all duration-300
              p-6 flex flex-col gap-4 select-none
            "
                    >
                        {/* Header Section */}
                        <div className="flex items-center justify-between flex-wrap gap-3">
                            <div className="flex flex-col">
                                <h3 className="text-lg font-medium text-gray-100 flex items-center gap-2">
                                    <GitBranch size={18} className="text-gray-400" />
                                    {item.repo}
                                </h3>

                                {item.company && (
                                    <a
                                        href={item.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
                                    >
                                        <Building2 size={14} />
                                        <span>{item.company}</span>
                                        <ExternalLink size={12} />
                                    </a>
                                )}
                            </div>

                            <a
                                href={item.prUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors"
                            >
                                <Github size={18} />
                                <span>View PR</span>
                                <ExternalLink size={12} />
                            </a>
                        </div>

                        {/* Description Section */}
                        <div className="space-y-1">
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                            <p className="text-sm text-blue-300/90 font-medium leading-snug">
                                {item.contribution}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OpenSource;
