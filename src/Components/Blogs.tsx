import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function Blogs() {
    const visible = blogs.slice(0, 2);

    return (
        <section className="py-5 w-full max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-6 text-white">Blogs & Gists</h2>
            <div className="space-y-6">
                {visible.map((blog) => (
                    <Link
                        key={blog.slug}
                        to={`/blogs/${blog.slug}`}
                        className="flex items-start group cursor-pointer gap-x-6 hover:opacity-95"
                    >
                        {/* Left Side */}
                        <div className="flex-1">
                            <h3 className="font-semibold flex items-center gap-2 text-white text-lg">
                                {blog.title}
                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">{blog.description}</p>
                        </div>

                        {/* Right Side (Date) */}
                        <span className="text-sm text-gray-500 flex-shrink-0">{blog.date}</span>
                    </Link>
                ))}
            </div>

            {blogs.length > visible.length && (
                <div className="mt-6 flex justify-end">
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#c2c2c2] border-dashed px-3 py-2 text-xs font-semibold text-white transition hover:border-gray-500"
                    >
                        Read all blogs
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            )}
        </section>
    );
}
