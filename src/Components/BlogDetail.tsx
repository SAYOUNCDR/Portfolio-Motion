import { useParams } from "react-router-dom";
import { findBlogBySlug, type BlogContentBlock } from "../data/blogs";
import { ArrowLeft, Terminal, Info, AlertTriangle, Lightbulb } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/Button";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, code, filename }: { language: string; code: string; filename?: string }) => {
    const { theme } = useTheme();

    return (
        <div className={`my-6 rounded-lg overflow-hidden border shadow-sm text-[13px] ${theme === 'dark' ? 'border-zinc-800' : 'border-slate-200'}`}>
            {(filename || language) && (
                <div className={`flex items-center justify-between px-4 py-2 border-b ${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-100 border-slate-200'}`}>
                    <div className="flex items-center gap-2">
                        {language === 'bash' || language === 'terminal' ? <Terminal className="w-4 h-4 text-slate-500" /> : null}
                        <span className={`text-xs font-medium font-mono ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                            {filename || language}
                        </span>
                    </div>
                    <div className="flex gap-1.5">
                        <div className={`w-2.5 h-2.5 rounded-full ${theme === 'dark' ? 'bg-zinc-700' : 'bg-slate-300'}`}></div>
                        <div className={`w-2.5 h-2.5 rounded-full ${theme === 'dark' ? 'bg-zinc-700' : 'bg-slate-300'}`}></div>
                    </div>
                </div>
            )}
            <div className="grid">
                <SyntaxHighlighter
                    language={language.toLowerCase()}
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: '1.5rem',
                        fontSize: '13px',
                        lineHeight: '1.6',
                        backgroundColor: theme === 'dark' ? '#0d1117' : '#1e1e1e', // Force dark background for code blocks always for aesthetic
                    }}
                    wrapLines={true}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

const Callout = ({ title, text, variant }: { title?: string; text: string; variant: 'tip' | 'warning' | 'info' }) => {
    const { theme } = useTheme();

    let bgClass = theme === 'dark' ? "bg-blue-900/20" : "bg-blue-50";
    let borderClass = theme === 'dark' ? "border-blue-800" : "border-blue-200";
    let textClass = theme === 'dark' ? "text-blue-200" : "text-blue-800";
    let icon = <Info className="w-5 h-5" />;

    if (variant === 'tip') {
        bgClass = theme === 'dark' ? "bg-emerald-900/20" : "bg-emerald-50";
        borderClass = theme === 'dark' ? "border-emerald-800" : "border-emerald-200";
        textClass = theme === 'dark' ? "text-emerald-200" : "text-emerald-800";
        icon = <Lightbulb className="w-5 h-5" />;
    } else if (variant === 'warning') {
        bgClass = theme === 'dark' ? "bg-amber-900/20" : "bg-amber-50";
        borderClass = theme === 'dark' ? "border-amber-800" : "border-amber-200";
        textClass = theme === 'dark' ? "text-amber-200" : "text-amber-800";
        icon = <AlertTriangle className="w-5 h-5" />;
    }

    return (
        <div className={`my-6 p-4 rounded-lg border flex gap-4 ${bgClass} ${borderClass}`}>
            <div className={`shrink-0 mt-0.5 ${textClass}`}>{icon}</div>
            <div>
                {title && <h4 className={`font-semibold mb-1 ${textClass}`}>{title}</h4>}
                <div className={`text-sm ${textClass} opacity-90`}>{text}</div>
            </div>
        </div>
    );
}


const BlogContentRenderer = ({ content }: { content: BlogContentBlock[] }) => {
    const { theme } = useTheme();
    const headingColor = theme === "dark" ? "text-white" : "text-slate-900";
    const paragraphColor = theme === "dark" ? "text-neutral-300" : "text-slate-700";

    return (
        <div className="space-y-6">
            {content.map((block, index) => {
                switch (block.type) {
                    case 'paragraph':
                        return <p key={index} className={`leading-relaxed ${paragraphColor}`}>{block.text}</p>;
                    case 'heading': {
                        // Explicitly cast to valid JSX element type for TS
                        const Tag = `h${block.level}` as 'h1' | 'h2' | 'h3';
                        const sizes = { 1: "text-3xl", 2: "text-2xl mt-8 mb-4", 3: "text-xl mt-6 mb-3" };
                        return <Tag key={index} className={`font-bold ${sizes[block.level]} ${headingColor}`}>{block.text}</Tag>;
                    }
                    case 'code':
                        return <CodeBlock key={index} language={block.language} code={block.code} filename={block.filename} />;
                    case 'image':
                        return (
                            <figure key={index} className="my-8">
                                <img src={block.src} alt={block.alt} className="w-full rounded-xl" />
                                {block.caption && (
                                    <figcaption className="text-center text-sm text-slate-500 mt-2 italic">{block.caption}</figcaption>
                                )}
                            </figure>
                        );
                    case 'list':
                        return (
                            <ul key={index} className={`list-disc list-inside space-y-2 pl-4 ${paragraphColor}`}>
                                {block.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        );
                    case 'callout':
                        return <Callout key={index} title={block.title} text={block.text} variant={block.variant} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default function BlogDetail() {
    const { slug } = useParams();
    const blog = findBlogBySlug(slug);
    const { theme } = useTheme();

    const mainStyles = theme === "dark" ? "bg-black text-white" : "bg-white text-slate-800";
    const metaStyles = theme === "dark" ? "text-neutral-400" : "text-slate-500";
    const tagStyles = theme === "dark"
        ? "bg-zinc-800 text-neutral-300"
        : "bg-slate-200 text-slate-700";

    if (!blog) {
        return (
            <main className={`min-h-screen max-w-3xl mx-auto py-10 px-6 ${mainStyles}`}>
                <p className="text-lg">Blog not found.</p>
                <Button
                    text="Back to all blogs"
                    icon={<ArrowLeft className="w-4 h-4" />}
                    to="/blogs"
                    variant="outline"
                    className="mt-4 rounded-lg px-3 py-2 text-xs font-semibold"
                />
            </main>
        );
    }

    const hasCoverImage = blog.content && blog.content.length > 0 && blog.content[0].type === 'image';
    const coverImage = hasCoverImage ? (blog.content![0] as Extract<BlogContentBlock, { type: 'image' }>) : null;
    const contentToRender = hasCoverImage ? blog.content!.slice(1) : blog.content;

    return (
        <main className={`min-h-screen max-w-3xl mx-auto py-10 px-6 ${mainStyles}`}>
            <div className="mb-8 flex justify-start">
                <Button
                    text="Back to all blogs"
                    icon={<ArrowLeft className="w-4 h-4" />}
                    to="/blogs"
                    variant="outline"
                    className="rounded-lg px-3 py-2 text-xs font-semibold"
                />
            </div>

            <article className="pb-20">
                {coverImage && (
                    <figure className="mb-8 w-full">
                        <img src={coverImage.src} alt={coverImage.alt} className="w-full rounded-xl object-cover" />
                        {coverImage.caption && (
                            <figcaption className="text-center text-sm text-slate-500 mt-3 italic">{coverImage.caption}</figcaption>
                        )}
                    </figure>
                )}

                <header className="mb-10">
                    <h1 className="text-xl sm:text-3xl font-bold mb-4 leading-tight">{blog.title}</h1>
                    <div className={`flex flex-wrap items-center gap-4 text-sm ${metaStyles}`}>
                        <span>{blog.readTime}</span>
                        <span>•</span>
                        <time>{blog.date}</time>
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.map((t) => (
                                <span key={t} className={`text-xs px-2.5 py-1 rounded-md font-medium ${tagStyles}`}>
                                    {t}
                                </span>
                            ))}
                        </div>

                    </div>
                </header>

                {contentToRender && typeof contentToRender !== 'string' ? (
                    <BlogContentRenderer content={contentToRender} />
                ) : (
                    <div className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}>
                        <p>{blog.description}</p>
                        <p className="italic text-slate-500">Content not available in new format.</p>
                    </div>
                )}

                <hr className={`my-10 border-t ${theme === 'dark' ? 'border-zinc-800' : 'border-slate-200'}`} />

            </article>
        </main>
    );
}
