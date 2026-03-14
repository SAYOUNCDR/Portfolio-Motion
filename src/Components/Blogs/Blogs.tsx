import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { useTheme } from "../../contexts/ThemeContext";
import { Button } from "../ui/Button";

interface BlogsProps {
    limit?: number;
    showViewAll?: boolean;
}

export default function Blogs({ limit = 2, showViewAll = true }: BlogsProps) {
    const { theme } = useTheme();
    const visible = blogs.slice(0, limit);

    const headingColor = theme === "dark" ? "text-white" : "text-slate-900";
    const titleColor = theme === "dark" ? "text-white" : "text-slate-900";
    const descColor = theme === "dark" ? "text-gray-400" : "text-slate-600";
    const dateColor = theme === "dark" ? "text-gray-500" : "text-slate-500";

    return (
        <section className="py-5 w-full max-w-3xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-bold ${headingColor}`}>Blogs & Gists</h2>
            </div>
            <div className="space-y-0">
                {visible.map((blog, idx) => (
                    <div key={blog.slug}>
                        <Link
                            to={`/blogs/${blog.slug}`}
                            className="flex items-start group cursor-pointer hover:opacity-95"
                        >
                            {/* Thumbnail */}
                            <div className="w-12 h-12 flex-shrink-0 rounded-xl border border-slate-100 dark:border-gray-700 flex items-center justify-center p-1 mr-5 mt-1 shadow-sm">
                                <img src={blog.thumbnail || ""} alt="" className="w-full h-full object-cover rounded-[0.4rem]" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start gap-4">
                                    <h3 className={`font-semibold flex items-center gap-1.5 text-[15px] leading-tight tracking-tight ${titleColor}`}>
                                        <span className="line-clamp-1">{blog.title}</span>
                                        <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 flex-shrink-0" />
                                    </h3>
                                    <div className="flex items-center gap-3 flex-shrink-0">
                                        {blog.mediumLink && (
                                            <a
                                                href={blog.mediumLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center justify-center bg-black dark:bg-white text-white dark:text-black w-6 h-6 rounded-full hover:scale-110 transition-transform shadow-sm"
                                                title="Read on Medium"
                                            >
                                                <svg width="12" height="12" viewBox="0 0 1043.63 592.71" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                                                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className={`text-[13px] mt-0.5 ${dateColor}`}>
                                    {blog.date} {blog.relativeTime && <span>({blog.relativeTime})</span>}
                                </div>

                                <p className={`text-[14px] leading-snug tracking-tight mt-1.5 ${descColor}`}>
                                    {blog.description}
                                </p>
                            </div>
                        </Link>

                        {idx < visible.length - 1 && (
                            <div className="border-b border-dashed border-gray-300 dark:border-zinc-800/80 my-6" />
                        )}
                    </div>
                ))}
            </div>

            {showViewAll && (
                <div className="mt-8 flex justify-end">
                    <Button
                        to="/blogs"
                        text="View all blogs"
                        icon={<ArrowUpRight className="h-4 w-4" />}
                        variant="outline"
                        className={`rounded-md px-5 py-2.5 text-sm font-medium transition-all ${theme === "dark"
                            ? "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
                            : "bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                            }`}
                    />
                </div>
            )}
        </section>
    );
}
