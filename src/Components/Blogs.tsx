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
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>Blogs & Gists</h2>
            <div className="space-y-6">
                {visible.map((blog) => (
                    <Link
                        key={blog.slug}
                        to={`/blogs/${blog.slug}`}
                        className="flex items-start group cursor-pointer gap-x-6 hover:opacity-95"
                    >
                        {/* Left Side */}
                        <div className="flex-1">
                            <h3 className={`font-semibold flex items-center gap-2 text-lg ${titleColor}`}>
                                {blog.title}
                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                            </h3>
                            <p className={`text-xs mt-1 ${descColor}`}>{blog.description}</p>
                        </div>

                        {/* Right Side (Date) */}
                        <span className={`text-sm flex-shrink-0 ${dateColor}`}>{blog.date}</span>
                    </Link>
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
