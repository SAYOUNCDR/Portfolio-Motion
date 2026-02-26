import { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "../Components/ui/Button";

export default function BlogsPage() {
    const { theme } = useTheme();
    const [currentPage, setCurrentPage] = useState(1);

    const blogsPerPage = 3;
    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const currentBlogs = blogs.slice(startIndex, endIndex);

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(1, prev - 1));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(totalPages, prev + 1));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const mainStyles = theme === "dark" ? "bg-black text-white" : "bg-white text-slate-800";
    const headingStyles = theme === "dark" ? "text-white" : "text-slate-900";
    const titleStyles = theme === "dark" ? "text-white" : "text-slate-900";
    const descriptionStyles = theme === "dark" ? "text-gray-400" : "text-slate-600";
    const metaStyles = theme === "dark" ? "text-neutral-400" : "text-slate-500";
    const dateStyles = theme === "dark" ? "text-gray-500" : "text-slate-500";

    return (
        <main className={`min-h-screen max-w-3xl mx-auto py-10 px-6 ${mainStyles}`}>
            <div className="mb-15 flex justify-start">
                <Button
                    text="Back to home"
                    icon={<ArrowLeft className="w-3 h-3" />}
                    to="/"
                    variant="outline"
                    className="rounded-lg px-3 py-2 text-xs font-semibold"
                />
            </div>

            <div className="flex items-center justify-between mb-6">
                <h1 className={`text-xl font-bold ${headingStyles}`}>All Blogs & Gists</h1>
            </div>

            <div className="space-y-0">
                {currentBlogs.map((blog, idx) => (
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
                                    <h3 className={`font-semibold flex items-center gap-1.5 text-[15px] leading-tight tracking-tight ${titleStyles}`}>
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

                                <div className={`text-[13px] mt-0.5 ${dateStyles}`}>
                                    {blog.date} {blog.relativeTime && <span>({blog.relativeTime})</span>}
                                    <span className={`text-[11px] px-1.5 py-0.5 rounded-md border ml-4 ${theme === 'dark' ? 'border-zinc-800' : 'border-slate-200'} ${metaStyles}`}>
                                        {blog.type}
                                    </span>

                                </div>

                                <p className={`text-[14px] leading-snug tracking-tight mt-1.5 ${descriptionStyles}`}>
                                    {blog.description}
                                </p>
                            </div>
                        </Link>

                        {idx < currentBlogs.length - 1 && (
                            <div className="border-b border-dashed border-gray-300 dark:border-zinc-800/80 my-6" />
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-dashed border-gray-300 dark:border-zinc-800/80 pt-6">
                <div className={`text-sm font-medium ${metaStyles}`}>
                    Page {currentPage} of {Math.max(1, totalPages)}
                </div>
                <div className="flex gap-3">
                    <Button
                        text="Previous"
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="px-4 py-2 text-sm rounded-lg sm:px-4 sm:py-2"
                    />
                    <Button
                        text="Next"
                        variant="outline"
                        onClick={handleNext}
                        disabled={currentPage >= totalPages}
                        className="px-4 py-2 text-sm rounded-lg sm:px-4 sm:py-2"
                    />
                </div>
            </div>

        </main>
    );
}
