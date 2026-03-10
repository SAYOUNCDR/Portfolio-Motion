import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Github } from "lucide-react";
import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
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
                        <div className={`overflow-y-auto p-6 scrollbar-thin ${theme === 'dark' ? 'scrollbar-thumb-zinc-700 scrollbar-track-zinc-900' : 'scrollbar-thumb-slate-300 scrollbar-track-slate-100'}`}>
                            <button
                                onClick={onClose}
                                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors bg-white/10 backdrop-blur-sm ${theme === "dark" ? "hover:bg-zinc-800 text-zinc-400 hover:text-white" : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"}`}
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
                                            <p className={`text-sm ${subTextColor}`}>{project.period} • {project.category}</p>
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

                                    <div className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none`}>
                                        <p className={`${theme === 'dark' ? 'text-zinc-300' : 'text-slate-600'} leading-relaxed`}>
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-6">
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