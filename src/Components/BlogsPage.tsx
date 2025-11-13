import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function BlogsPage() {
    const { theme } = useTheme();

    const mainStyles = theme === "dark" ? "bg-black text-white" : "bg-white text-slate-800";
    const backLinkStyles = theme === "dark"
        ? "border-[#c2c2c2] text-white hover:border-gray-500"
        : "border-slate-400 text-slate-800 hover:border-slate-600";
    const headingStyles = theme === "dark" ? "text-white" : "text-slate-900";
    const titleStyles = theme === "dark" ? "text-white" : "text-slate-900";
    const descriptionStyles = theme === "dark" ? "text-gray-400" : "text-slate-600";
    const metaStyles = theme === "dark" ? "text-neutral-400" : "text-slate-500";
    const dateStyles = theme === "dark" ? "text-gray-500" : "text-slate-500";

    return (
        <main className={`min-h-screen max-w-3xl mx-auto py-10 px-6 ${mainStyles}`}>
            <div className="mb-15 flex justify-start">
                <Link
                    to="/"
                    className={`inline-flex items-center gap-2 rounded-lg border border-dashed px-3 py-2 text-xs font-semibold transition ${backLinkStyles}`}
                >
                    <ArrowLeft className="w-3 h-3" />
                    Back to home
                </Link>
            </div>

            <h1 className={`text-2xl font-bold mb-6 ${headingStyles}`}>All Blogs & Gists</h1>

            <div className="space-y-6">
                {blogs.map((blog) => (
                    <Link
                        to={`/blogs/${blog.slug}`}
                        key={blog.slug}
                        className="flex items-start justify-between gap-x-6 group hover:opacity-95"
                    >
                        <div className="flex-1">
                            <h3 className={`text-lg font-semibold flex items-center gap-2 ${titleStyles}`}>
                                {blog.title}
                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" />
                            </h3>
                            <p className={`text-sm mt-1 ${descriptionStyles}`}>{blog.description}</p>
                            <div className={`mt-2 flex flex-wrap gap-2 text-xs ${metaStyles}`}>
                                <span>{blog.readTime}</span>
                                <span>•</span>
                                <span>{blog.type}</span>
                            </div>
                        </div>

                        <time className={`text-sm flex-shrink-0 ${dateStyles}`}>{blog.date}</time>
                    </Link>
                ))}
            </div>

        </main>
    );
}
