import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import { ChevronRight, ArrowLeft } from "lucide-react";

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-black text-white max-w-3xl mx-auto py-10 px-6">
            <div className="mb-15 flex justify-start">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#c2c2c2] border-dashed px-3 py-2 text-xs font-semibold text-white transition hover:border-gray-500"
                >
                    <ArrowLeft className="w-3 h-3" />
                    Back to home
                </Link>
            </div>

            <h1 className="text-3xl font-bold mb-6">All Blogs & Gists</h1>

            <div className="space-y-6">
                {blogs.map((blog) => (
                    <Link
                        to={`/blogs/${blog.slug}`}
                        key={blog.slug}
                        className="flex items-start justify-between gap-x-6 group hover:opacity-95"
                    >
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                {blog.title}
                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" />
                            </h3>
                            <p className="text-sm text-gray-400 mt-1">{blog.description}</p>
                            <div className="mt-2 flex flex-wrap gap-2 text-xs text-neutral-400">
                                <span>{blog.readTime}</span>
                                <span>•</span>
                                <span>{blog.type}</span>
                            </div>
                        </div>

                        <time className="text-sm text-gray-500 flex-shrink-0">{blog.date}</time>
                    </Link>
                ))}
            </div>

        </main>
    );
}
