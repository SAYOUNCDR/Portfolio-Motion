import React, { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

interface GithubHeatmapProps {
    username?: string;
    theme?: string;
}

interface ContributionData {
    total: {
        lastYear: number;
        [key: string]: number;
    };
    contributions: Array<{
        count: number;
        date: string;
        level: number;
    }>;
}

const GithubHeatmap: React.FC<GithubHeatmapProps> = ({ username = "SAYOUNCDR" }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const [contributionCount, setContributionCount] = useState<number>(0);

    // Fetch contribution count from the API
    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const res = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
                );
                const data: ContributionData = await res.json();
                if (data && data.total && data.total.lastYear !== undefined) {
                    setContributionCount(data.total.lastYear);
                } else if (data && data.contributions) {
                    const total = data.contributions.reduce(
                        (acc: number, day) => acc + (day.count || 0),
                        0,
                    );
                    setContributionCount(total);
                }
            } catch (e) {
                console.warn("Failed to fetch contribution count:", e);
            }
        };
        fetchContributions();
    }, [username]);

    // Drag to scroll handlers
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && scrollContainerRef.current) {
                        setTimeout(() => {
                            if (scrollContainerRef.current) {
                                const container = scrollContainerRef.current;
                                container.scrollLeft = container.scrollWidth;
                            }
                        }, 1000);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 },
        );

        if (scrollContainerRef.current) {
            observer.observe(scrollContainerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl mt-20"
        >
            <div className="p-6 rounded-2xl border border-[#30363d] backdrop-blur-sm">
                {/* Scrollable Heatmap Grid */}
                <div
                    className={`overflow-x-scroll select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"
                        }`}
                    ref={scrollContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    <div
                        style={{
                            width: "fit-content",
                            pointerEvents: isDragging ? "none" : "auto",
                        }}
                    >
                        <GitHubCalendar
                            username={username}
                            blockSize={14}
                            blockMargin={4}
                            fontSize={14}
                            showColorLegend={true}
                            showTotalCount={false}
                            year="last"
                            style={{ color: "white" }}
                        />
                    </div>
                </div>

                {/* Static Footer: Total Count & Color Legend */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#30363d]/30">
                    <span className="text-sm font-mono text-white">
                        {contributionCount.toLocaleString()} contributions in the last year
                    </span>

                    <a href="https://github.com/SAYOUNCDR" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-white hover:underline">@SAYOUNCDR</a>
                </div>
            </div>
        </motion.div>
    );
};

export default GithubHeatmap;
