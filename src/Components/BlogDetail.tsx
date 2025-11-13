import { useParams, Link } from "react-router-dom";
import { findBlogBySlug } from "../data/blogs";
import { ChevronLeft } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function BlogDetail() {
    const { slug } = useParams();
    const blog = findBlogBySlug(slug);
    const { theme } = useTheme();

    const mainStyles = theme === "dark" ? "bg-black text-white" : "bg-white text-slate-800";
    const backLinkStyles = theme === "dark" ? "text-neutral-400" : "text-slate-600";
    const metaStyles = theme === "dark" ? "text-neutral-400" : "text-slate-500";
    const proseStyles = theme === "dark" ? "prose-invert" : "prose-p:text-slate-700 prose-headings:text-slate-900";
    const tagStyles = theme === "dark"
        ? "bg-zinc-800 text-neutral-300"
        : "bg-slate-200 text-slate-700";

    if (!blog) {
        return (
            <main className={`min-h-screen max-w-3xl mx-auto py-10 px-6 ${mainStyles}`}>
                <p className="text-lg">Blog not found.</p>
                <Link to="/blogs" className={`mt-4 inline-block text-sm hover:underline ${backLinkStyles}`}>
                    Back to all blogs
                </Link>
            </main>
        );
    }

    return (
        <main className={`min-h-screen max-w-3xl mx-auto py-10 px-6 ${mainStyles}`}>
            <Link
                to="/blogs"
                className={`inline-flex items-center gap-2 text-sm hover:underline mb-6 ${backLinkStyles}`}
            >
                <ChevronLeft className="w-4 h-4" />
                Back to all blogs
            </Link>

            <article>
                <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
                <div className={`flex items-center gap-4 text-sm mb-4 ${metaStyles}`}>
                    <span>{blog.readTime}</span>
                    <span>•</span>
                    <span>{blog.type}</span>
                    <span>•</span>
                    <time>{blog.date}</time>
                </div>

                <div className={`prose max-w-none text-sm ${proseStyles}`}>
                    <p>{blog.content ?? blog.description}</p>
                </div>

                <div className="mt-6">
                    <h3 className="text-sm font-semibold mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.map((t) => (
                            <span key={t} className={`text-xs px-2 py-1 rounded ${tagStyles}`}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </main>
    );
}
