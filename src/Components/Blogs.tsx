// Blogs.tsx
import { ChevronRight } from "lucide-react";

type Blog = {
    title: string;
    description: string;
    date: string;
};

const blogs: Blog[] = [
    {
        title: "Understanding Transformers in AI",
        description: "A beginner-friendly guide to how transformer architectures power modern LLMs.",
        date: "September 2025",
    },
    {
        title: "Why TypeScript is Essential for Scalable React Apps",
        description: "Exploring the benefits of using TypeScript in large React codebases.",
        date: "August 2025",
    },
    {
        title: "The Future of Serverless with AWS Lambda",
        description: "How serverless is shaping modern backend development.",
        date: "July 2025",
    },
    {
        title: "Vector Databases Explained",
        description: "A deep dive into vector databases and why they matter for AI search.",
        date: "June 2025",
    },
    {
        title: "From Prompt to Product",
        description: "Turning AI-generated ideas into real-world applications.",
        date: "May 2025",
    },
];

export default function Blogs() {
    return (
        <section className="py-5 w-full max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-6 text-white">Blogs & Gists</h2>
            <div className="space-y-6">
                {blogs.map((blog) => (
                    <div
                        key={blog.title}
                        className="flex justify-between items-start group cursor-pointer"
                    >
                        {/* Left Side */}
                        <div>
                            <h3 className="font-semibold flex items-center gap-2 text-white">
                                {blog.title}
                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0" />
                            </h3>
                            <p className="text-sm text-gray-400">{blog.description}</p>
                        </div>

                        {/* Right Side (Date) */}
                        <span className="text-sm text-gray-500">{blog.date}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
