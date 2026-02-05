import { Github, ArrowUpRight, ChevronRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";

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
        repo: "EbookFoundation/free-programming-books",
        company: "EbookFoundation",
        companyUrl: "https://github.com/EbookFoundation/free-programming-books",
        prUrl: "https://github.com/EbookFoundation/free-programming-books/pull/12356",
        description: "Massive open-source repo curating free dev resources.",
        contribution: "Added TypeScript Cheat Sheet covering TS basics, React, and Node/Express.",
        period: "October 2025",
        icon: {
            src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/git-merge-icon-svg-download-png-8863137.png",
            alt: "Branch icon",
        },
    },
    {
        repo: "EbookFoundation/free-programming-books",
        company: "EbookFoundation",
        companyUrl: "https://github.com/EbookFoundation/free-programming-books",
        prUrl: "https://github.com/EbookFoundation/free-programming-books/pull/12703",
        description: "Massive open-source repo curating free dev resources.",
        contribution: "Comprehensive Go Backend Cheeetsheet",
        period: "October 2025",
        icon: {
            src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/git-merge-icon-svg-download-png-8863137.png",
            alt: "Branch icon",
        },
    },
    {
        repo: "EbookFoundation/free-programming-books",
        company: "EbookFoundation",
        companyUrl: "https://github.com/EbookFoundation/free-programming-books",
        prUrl: "https://github.com/EbookFoundation/free-programming-books/pull/12729",
        description: "Massive open-source repo curating free dev resources.",
        contribution: "Add Helm Cheatsheet (Kubernetes Package Manager)",
        period: "October 2025",
        icon: {
            src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/git-merge-icon-svg-download-png-8863137.png",
            alt: "Branch icon",
        },
    },
    {
        repo: "EbookFoundation/free-programming-books",
        company: "EbookFoundation",
        companyUrl: "https://github.com/EbookFoundation/free-programming-books",
        prUrl: "https://github.com/EbookFoundation/free-programming-books/pull/12557",
        description: "Massive open-source repo curating free dev resources.",
        contribution: "Adds Docker cheat sheet for full-stack developers",
        period: "October 2025",
        icon: {
            src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/git-merge-icon-svg-download-png-8863137.png",
            alt: "Branch icon",
        },
    },
    {
        repo: "lingdojo/kana-dojo",
        company: "kana-dojo",
        companyUrl: "https://kanadojo.com/",
        prUrl: "https://github.com/lingdojo/kana-dojo/pull/193",
        description: "Open-source kanji learning platform.",
        contribution: "Added Cosmic Dream theme #142",
        period: "November 2025",
        icon: {
            src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/git-merge-icon-svg-download-png-8863137.png",
            alt: "Branch icon",
        },
    },
    {
        repo: "pqoqubbw/icons",
        company: "Lucide Animated",
        companyUrl: "https://lucide-animated.com/",
        prUrl: "https://github.com/pqoqubbw/icons/pull/167",
        description: "Open Source Animated Icon Library built on top of lucid icons.",
        contribution: "Animated \"git-merge\" icon #167",
        period: "November 2025",
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
        period: "November 2025",
        icon: {
            src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/git-merge-icon-svg-download-png-8863137.png",
            alt: "Branch icon",
        },
    },
    {
        repo: "pqoqubbw/icons",
        company: "Lucide Animated",
        companyUrl: "https://lucide-animated.com/",
        prUrl: "https://github.com/pqoqubbw/icons/pull/180",
        description: "Open Source Animated Icon Library built on top of lucid icons.",
        contribution: "Animated all folder icons",
        period: "November 2025",
        icon: {
            src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/git-merge-icon-svg-download-png-8863137.png",
            alt: "Branch icon",
        },
    },
    {
        repo: "pqoqubbw/icons",
        company: "Lucide Animated",
        companyUrl: "https://lucide-animated.com/",
        prUrl: "https://github.com/pqoqubbw/icons/pull/177",
        description: "Open Source Animated Icon Library built on top of lucid icons.",
        contribution: "Animated bell-element icon",
        period: "November 2025",
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

// Helper function to group contributions
const groupAndSortContributions = (items: Contribution[]) => {
    const groups: Record<string, Contribution[]> = {};

    items.forEach(item => {
        if (!groups[item.company]) {
            groups[item.company] = [];
        }
        groups[item.company].push(item);
    });

    // Convert to array and sort by latest contribution date
    return Object.entries(groups)
        .map(([company, items]) => {
            // Sort items within company by period (assuming month year string format) logic or index if period is same
            // For now, simpler approach: use the original order or period string comparison if simple
            // Let's assume the input list has some chronological order or we just keep as is
            return {
                company,
                items,
                // Get the period of the first item (assuming latest) for sorting groups
                latestPeriod: items[0]?.period || ""
            };
        })
        .sort((a, b) => {
            // Custom sort for "Month Year" strings if needed, or just rely on list order for now
            // Since the input has November 2025 and October 2025, string comparison works reversely or we parse date
            const dateA = new Date(a.latestPeriod);
            const dateB = new Date(b.latestPeriod);
            return dateB.getTime() - dateA.getTime();
        });
};

const SimpleTooltip = ({ children, content }: { children: React.ReactNode; content: string }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 dark:bg-zinc-800 rounded-md shadow-lg border border-slate-700/50 dark:border-zinc-700 whitespace-nowrap z-50 pointer-events-none"
                    >
                        {content}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-zinc-800 border-r border-b border-slate-700/50 dark:border-zinc-700 transform rotate-45"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Contributions = ({ limit, showViewAll = true }: ContributionsProps) => {
    const { theme } = useTheme();
    const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

    const allItems = useMemo(() => {
        return groupAndSortContributions(contributions);
    }, []);

    // Apply limit to groups NOT items, or maybe items?
    // User request implies showing orgs. If limit is 2, maybe show 2 orgs?
    // Or if limit is strictly for home page items list.
    // Given the refactor, let's limit by Groups for the main view if limit is present.
    const displayedGroups = typeof limit === "number" ? allItems.slice(0, limit) : allItems;


    const toggleGroup = (company: string) => {
        setExpandedGroups(prev => ({ ...prev, [company]: !prev[company] }));
    };

    const sectionText = theme === "dark" ? "text-white" : "text-slate-800";
    const borderColor = theme === "dark" ? "border-zinc-800" : "border-slate-400";
    const metaText = theme === "dark" ? "text-neutral-400" : "text-slate-500";
    const descriptionText = theme === "dark" ? "text-neutral-400" : "text-slate-600";
    const cardBorder = theme === "dark" ? "border-zinc-800" : "border-slate-400";

    const buttonBg = theme === "dark" ? "bg-white text-black hover:bg-neutral-100" : "bg-slate-900 text-white hover:bg-slate-800";

    return (
        <section className={`${sectionText} px-6 py-10 w-full mb-15 max-w-6xl mx-auto`}>

            <h2 className="text-2xl font-bold mb-6">Contributions</h2>

            <div className={`relative ml-4 border-l ${borderColor} space-y-2`}>
                {displayedGroups.map((group) => {
                    const isExpanded = !!expandedGroups[group.company];
                    // The main item to display as the "Header" of the group (just for company info)
                    const headerItem = group.items[0];

                    return (
                        <div key={group.company} className="relative ml-10">
                            {/* Circle Icon */}
                            <div className="absolute -left-16 top-6 flex items-center justify-center">
                                <span className={`relative flex shrink-0 overflow-hidden rounded-full border bg-white h-12 w-12 ${cardBorder} z-10`}>
                                    <img
                                        src={headerItem.icon.src}
                                        alt={headerItem.icon.alt}
                                        className="h-full w-full object-contain"
                                    />
                                </span>
                            </div>

                            {/* Card Container */}
                            <div className={`py-6 pl-6 pr-4 relative ${cardBorder} border-b border-dashed mb-4`}>
                                {/* Group Header */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <SimpleTooltip content="View contributions">
                                            <div
                                                className="flex items-center gap-2 cursor-pointer group/header select-none"
                                                onClick={() => toggleGroup(group.company)}
                                            >
                                                <h3 className="text-base font-semibold leading-none group-hover/header:opacity-80 transition-opacity">
                                                    {group.company}
                                                </h3>
                                                <div
                                                    className={`p-1 rounded-full transition-all duration-200 opacity-70 group-hover/header:opacity-100 group-hover/header:bg-black/5 dark:group-hover/header:bg-white/10 ${isExpanded ? 'rotate-90' : ''}`}
                                                >
                                                    <ChevronRight className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </SimpleTooltip>
                                        <div className="flex items-center gap-3">
                                            {headerItem.period && (
                                                <time className={`text-xs font-medium ${metaText}`}>{headerItem.period}</time>
                                            )}
                                        </div>
                                    </div>
                                    <a
                                        href={headerItem.companyUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`text-xs font-medium underline-offset-4 hover:underline ${metaText} ${theme === "dark" ? "hover:text-neutral-200" : "hover:text-slate-700"}`}
                                    >
                                        {headerItem.company}
                                    </a>
                                    <p className={`text-sm ${descriptionText}`}>{headerItem.description}</p>
                                </div>

                                {/* Collapsible Content */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className={`mt-4 pt-4 border-t border-dashed ${theme === "dark" ? "border-zinc-800" : "border-slate-300"} space-y-6`}>
                                                {group.items.map((item, idx) => (
                                                    <div key={idx} className="flex flex-col gap-1.5">
                                                        <p className={`text-sm font-medium ${sectionText}`}>{item.contribution}</p>
                                                        {item.period && (
                                                            <span className={`text-[10px] ${metaText}`}>{item.period}</span>
                                                        )}
                                                        <div>
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
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    )
                })}
            </div>

            {showViewAll && (
                <div className="mt-8 flex justify-end">
                    <Button
                        text="View more contributions"
                        icon={<ArrowUpRight className="h-4 w-4" />}
                        to="/contributions"
                        variant="outline"
                        className="rounded-lg px-3 py-2 text-xs font-semibold"
                    />
                </div>
            )}

        </section>
    );
};

export default Contributions;