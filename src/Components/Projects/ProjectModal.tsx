import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Github } from "lucide-react";
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import type { Project } from "./Projects";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    const { theme } = useTheme();

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const modalBg = theme === "dark" ? "bg-zinc-900 border border-zinc-800" : "bg-white border border-slate-200";
    const textColor = theme === "dark" ? "text-white" : "text-slate-900";
    const subTextColor = theme === "dark" ? "text-zinc-400" : "text-slate-500";
    const buttonBg = theme === "dark" ? "bg-white text-black hover:bg-zinc-200" : "bg-slate-900 text-white hover:bg-slate-800";
    const subtlePanel = theme === "dark" ? "border-zinc-800 bg-zinc-950/40" : "border-slate-200 bg-slate-50";
    const detailText = theme === "dark" ? "text-zinc-300" : "text-slate-600";
    const fineText = theme === "dark" ? "text-zinc-400" : "text-slate-500";

    return (
        <AnimatePresence>
            {isOpen && project && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={`relative w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-xl ${modalBg} overflow-hidden flex flex-col`}
                    >
                        <div className="overflow-y-auto p-6 custom-scrollbar">
                            <button
                                onClick={onClose}
                                className={`cursor-pointer absolute top-4 right-4 z-10 p-2 rounded-full transition-colors bg-white/10 backdrop-blur-sm ${theme === "dark" ? "hover:bg-zinc-800 text-zinc-400 hover:text-white" : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"}`}
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="space-y-6">
                                {/* Header Image/Video */}
                                <div className={`w-full aspect-video rounded-xl overflow-hidden flex items-center justify-center ${theme === 'dark' ? 'bg-neutral-900' : 'bg-slate-100'}`}>
                                    {project.video.src ? (
                                        <div className="w-full h-full bg-black">
                                            <video
                                                src={project.video.src}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    ) : project.imageLink ? (
                                        <img
                                            src={project.imageLink}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className={`text-lg font-semibold opacity-50 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                            {project.category}
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                        <div>
                                            <h2 id="modal-title" className={`text-2xl font-bold ${textColor}`}>{project.title}</h2>
                                            <p className={`text-sm ${subTextColor}`}>{project.period} - {project.category}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            {project.website.url && (
                                                <a
                                                    href={project.website.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${buttonBg}`}
                                                >
                                                    <Globe className="w-4 h-4" />
                                                    Website
                                                </a>
                                            )}
                                            {project.github?.url && (
                                                <a
                                                    href={project.github.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors border ${theme === "dark" ? "border-zinc-700 hover:bg-zinc-800 text-white" : "border-slate-200 hover:bg-slate-100 text-slate-900"}`}
                                                >
                                                    <Github className="w-4 h-4" />
                                                    Source
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className={`text-sm font-semibold mb-3 ${textColor}`}>Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className={`px-3 py-1 text-xs font-medium rounded-full ${theme === "dark" ? "bg-zinc-800 text-zinc-300 border border-zinc-700" : "bg-slate-100 text-slate-600 border border-slate-200"}`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}>
                                        <p className={`${theme === 'dark' ? 'text-zinc-300' : 'text-slate-600'} leading-relaxed`}>
                                            {project.description}
                                        </p>
                                    </div>

                                    {project.details && (
                                        <div className="mt-6 space-y-6">
                                            {Boolean(project.details.overview?.length) && (
                                                <div className="space-y-3">
                                                    {project.details.overview?.map((paragraph) => (
                                                        <p key={paragraph} className={`${detailText} leading-relaxed`}>
                                                            {paragraph}
                                                        </p>
                                                    ))}
                                                </div>
                                            )}

                                            {Boolean(project.details.links?.length) && (
                                                <div className="flex flex-wrap gap-2">
                                                    {project.details.links?.map((link) => (
                                                        <a
                                                            key={link.url}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors ${theme === "dark"
                                                                ? "border-zinc-700 text-zinc-200 hover:bg-zinc-800"
                                                                : "border-slate-200 text-slate-700 hover:bg-slate-100"
                                                                }`}
                                                        >
                                                            <Globe className="h-3.5 w-3.5" />
                                                            {link.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}

                                            {project.details.sections?.map((section) => (
                                                <div key={section.title}>
                                                    <h3 className={`text-sm font-semibold mb-3 ${textColor}`}>{section.title}</h3>
                                                    <div className="space-y-3">
                                                        {section.items.map((item) => (
                                                            <div
                                                                key={item.title}
                                                                className={`border-l-2 pl-3 ${theme === "dark" ? "border-zinc-700" : "border-slate-300"}`}
                                                            >
                                                                <h4 className={`text-sm font-semibold ${textColor}`}>{item.title}</h4>
                                                                <p className={`mt-1 text-sm leading-relaxed ${fineText}`}>{item.description}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}

                                            {Boolean(project.details.stack?.length) && (
                                                <div>
                                                    <h3 className={`text-sm font-semibold mb-3 ${textColor}`}>Architecture</h3>
                                                    <dl className={`rounded-md border px-3 ${subtlePanel}`}>
                                                        {project.details.stack?.map((item) => (
                                                            <div
                                                                key={item.label}
                                                                className={`grid gap-1 py-2 text-sm sm:grid-cols-[120px_1fr] ${theme === "dark" ? "border-b border-zinc-800 last:border-b-0" : "border-b border-slate-200 last:border-b-0"}`}
                                                            >
                                                                <dt className={`font-semibold ${textColor}`}>{item.label}</dt>
                                                                <dd className={fineText}>{item.value}</dd>
                                                            </div>
                                                        ))}
                                                    </dl>
                                                </div>
                                            )}

                                            {project.details.snippet && (
                                                <div>
                                                    <h3 className={`text-sm font-semibold mb-3 ${textColor}`}>{project.details.snippet.title}</h3>
                                                    <pre className={`overflow-x-auto rounded-md border p-3 text-xs leading-relaxed ${subtlePanel} ${detailText}`}>
                                                        <code>{project.details.snippet.code}</code>
                                                    </pre>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
