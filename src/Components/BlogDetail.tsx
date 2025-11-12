import { useParams, Link } from "react-router-dom";
import { findBlogBySlug } from "../data/blogs";
import { ChevronLeft } from "lucide-react";

export default function BlogDetail() {
    const { slug } = useParams();
    const blog = findBlogBySlug(slug);

    if (!blog) {
        return (
            <main className="min-h-screen bg-black text-white max-w-3xl mx-auto py-10 px-6">
                <p className="text-lg">Blog not found.</p>
                <Link to="/blogs" className="mt-4 inline-block text-sm text-neutral-400 hover:underline">
                    Back to all blogs
                </Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white max-w-3xl mx-auto py-10 px-6">
            <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:underline mb-6"
            >
                <ChevronLeft className="w-4 h-4" />
                Back to all blogs
            </Link>

            <article>
                <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
                <div className="flex items-center gap-4 text-sm text-neutral-400 mb-4">
                    <span>{blog.readTime}</span>
                    <span>•</span>
                    <span>{blog.type}</span>
                    <span>•</span>
                    <time>{blog.date}</time>
                </div>

                <div className="prose prose-invert max-w-none text-sm">
                    <p>{blog.content ?? blog.description}</p>
                </div>

                <div className="mt-6">
                    <h3 className="text-sm font-semibold mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.map((t) => (
                            <span key={t} className="text-xs px-2 py-1 bg-zinc-800 rounded text-neutral-300">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </main>
    );
}
