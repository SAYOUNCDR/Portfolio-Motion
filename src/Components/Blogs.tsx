import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/Button";

export default function Blogs() {
    const { theme } = useTheme();
    const visible = blogs.slice(0, 2);

    const headingColor = theme === "dark" ? "text-white" : "text-slate-900";
    const titleColor = theme === "dark" ? "text-white" : "text-slate-900";
    const descColor = theme === "dark" ? "text-gray-400" : "text-slate-600";
    const dateColor = theme === "dark" ? "text-gray-500" : "text-slate-500";

    return (
        <section className="py-5 w-full max-w-3xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl font-bold ${headingColor}`}>Blogs & Gists</h2>
                <a
                    href="https://medium.com/@sayoun_parui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                    <svg width="14" height="14" viewBox="0 0 1043.63 592.71" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                        <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
                    </svg>
                    <span>Read on Medium</span>
                </a>
            </div>
            <div className="space-y-0">
                {visible.map((blog, idx) => (
                    <div key={blog.slug}>
                        <Link
                            to={`/blogs/${blog.slug}`}
                            className="flex items-start group cursor-pointer hover:opacity-95"
                        >
                            {/* Thumbnail */}
                            <div className="w-12 h-12 flex-shrink-0 bg-slate-50 dark:bg-zinc-900/50 rounded-xl border border-slate-200/60 dark:border-zinc-800/60 flex items-center justify-center p-1 mr-5 mt-1">
                                <img src={blog.thumbnail || ""} alt="" className="w-full h-full object-cover rounded-lg" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start gap-4">
                                    <h3 className={`font-semibold flex items-center gap-1.5 text-[15px] leading-tight tracking-tight ${titleColor}`}>
                                        <span className="line-clamp-1">{blog.title}</span>
                                        <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 flex-shrink-0" />
                                    </h3>
                                    <span className={`text-[13px] whitespace-nowrap flex-shrink-0 ${dateColor}`}>
                                        {blog.readTime}
                                    </span>
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

            {blogs.length > visible.length && (
                <div className="mt-6 flex justify-end">
                    <Button
                        text="Read all blogs"
                        icon={<ArrowUpRight className="h-4 w-4" />}
                        to="/blogs"
                        variant="outline"
                        className="rounded-lg px-3 py-2 text-xs font-semibold"
                    />
                </div>
            )}
        </section>
    );
}
