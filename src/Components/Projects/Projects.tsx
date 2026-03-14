import { Globe, Github, ArrowUpRight, Eye } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { Button } from "../ui/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

export type ProjectCategory = "Web2" | "AI" | "Extensions" | "Developer Tools";

export type Project = {
    title: string;
    period: string;
    description: string;
    video: {
        src: string;
        autoPlay?: boolean;
        loop?: boolean;
        muted?: boolean;
        playsInline?: boolean;
        className?: string;
    };
    imageLink: string;
    tags: string[];
    website: { label: string; url: string };
    github?: { label: string; url: string };
    category: ProjectCategory;
};

const projects: Project[] = [
    {
        title: "KeyRush",
        period: "March 2026",
        description:
            "A gamified, beautiful typing platform designed to engage and visually stun. Built with React, Vite, Shadcn UI and Framer Motion, it features a custom interactive keyboard component with realistic sound effects and haptics.",
        video: {
            src: "",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "/images/ProjectImage/keyrush.webp",
        tags: ["React", "Vite", "Shadcn UI", "Framer Motion", "Vercel"],
        website: { label: "Website", url: "https://key-rush-five.vercel.app/" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/KeyRush" },
        category: "Web2",
    },
    {
        title: "Okunix",
        period: "January 2026",
        description:
            "A lightweight web analytics platform. Tracks visits, visitors, bounce rate, live viewers, page entry exits and so on.",
        video: {
            src: "",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "/images/ProjectImage/Okunix.png",
        tags: ["Nodejs/express", "Reactjs", "Mongodb", "Azure", "Github Actions", "Nginx"],
        website: { label: "Website", url: "https://okunix.sayoun.studio" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/okunix" },
        category: "Web2",
    },
    {
        title: "Auto-Timetable",
        period: "December 2025",
        description:
            "The TimeTable Management & Generation System is a sophisticated full-stack application designed to automate the complex process of academic scheduling. By leveraging AI-powered constraint programming (Google OR-Tools), it generates conflict-free timetables.",
        video: {
            src: "",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "/images/ProjectImage/auto-timetable.png",
        tags: ["React.js", "Python", "Google OR-Tools", "Flask"],
        website: { label: "Website", url: "" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/auto-timetable" },
        category: "Web2",
    },
    {
        title: "DevCalander",
        period: "December 2025",
        description:
            "Your curated intelligence feed for top Open Source Programs, Hackathons, and Hiring Cycles.",
        video: {
            src: "",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "/images/ProjectImage/DevCalander.png",
        tags: ["React.js", "JavaScript", "Framer Motion", "Tailwind CSS"],
        website: { label: "Website", url: "https://devcalendar.sayoun.studio/" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/DevCalendar" },
        category: "Web2",
    },
    {
        title: "ElevateX",
        period: "April 2025",
        description:
            "A Collaborative platform designed to connect aspiring entrepreneurs with seasoned mentors, fostering innovation and business growth through shared expertise.",
        video: {
            src: "/videos/ElevateX.mp4",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "",
        tags: ["JavaScript", "PHP", "MySQL", "XAMPP", "Tailwind CSS"],
        website: { label: "Website", url: "" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/Startup" },
        category: "Web2",
    },
    {
        title: "PolySee",
        period: "November 2025",
        description:
            "A Rag based ai assistant for college queries that can be fed with documents by admins and verified then embedded into vectorDB to answer questions related to them.",
        video: {
            src: "/videos/Polysee.mp4",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "",
        tags: ["React.js", "JavaScript", "Framer Motion", "Tailwind CSS", "Python", "Langchain", "VectorDB", "Pypdf2", "OpenAI API"],
        website: { label: "Website", url: "" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/PolySEE" },
        category: "AI",
    },
    {
        title: "NyaySaathi",
        period: "November 2025",
        description:
            "An AI-powered legal assistant designed to help users navigate legal processes, understand their rights, and access legal resources with ease.",
        video: {
            src: "",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "",
        tags: ["React.js", "JavaScript", "Framer Motion", "Tailwind CSS", "Python", "Langchain", "Docker", "redis", "OpenAI API"],
        website: { label: "Website", url: "" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/NyaySaathi" },
        category: "AI",
    },
    {
        title: "better-chatgpt-sidebar",
        period: "November 2025",
        description:
            "The ultimate workflow upgrade for ChatGPT. A dedicated sidebar to save, organize, and color-code your most important conversations with folders and drag-drop.",
        video: {
            src: "",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "/images/ProjectImage/better-sidebar.png",
        tags: ["Chrome Extension", "JavaScript", "React"],
        website: { label: "Website", url: "https://chromewebstore.google.com/detail/bfahjhadjkneahhalojpofmbegkllhnj?utm_source=item-share-cb" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/better-chatgpt-sidebar" },
        category: "Extensions",
    },
    {
        title: "Advance-Auth-Templete",
        period: "January 2025",
        description:
            "A production-ready authentication template built with Node.js, MongoDB, and TypeScript, featuring JWT-based auth, email verification, and OAuth integration.",
        video: {
            src: "",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "",
        tags: ["oauth", "express", "typescript", "mongodb", "authentication", "jwt-authentication", "2fa-security"],
        website: { label: "Website", url: "" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/Advance-Auth" },
        category: "Developer Tools",
    },
];

type ProjectsProps = {
    limit?: number;
    showViewAll?: boolean;
};

const Projects = ({ limit, showViewAll = true }: ProjectsProps) => {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState<ProjectCategory | "All">("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const categories: (ProjectCategory | "All")[] = ["All", "Web2", "AI", "Extensions", "Developer Tools"];

    const filteredProjects = activeTab === "All"
        ? projects
        : projects.filter(project => project.category === activeTab);

    const items = typeof limit === "number" ? filteredProjects.slice(0, limit) : filteredProjects;

    const sectionText = theme === "dark" ? "text-white" : "text-slate-800";
    const headingColor = theme === "dark" ? "text-white" : "text-slate-900";
    const cardStyles =
        theme === "dark"
            ? "text-white border border-zinc-800 bg-gradient-to-r from-zinc-900/80 via-zinc-900/60 to-black/20 hover:border-zinc-700"
            : "text-slate-800 border border-slate-200 bg-gradient-to-b from-white to-gray-50/50 hover:border-slate-300";
    const timeColor = theme === "dark" ? "text-neutral-400" : "text-slate-500";
    const descriptionColor = theme === "dark" ? "text-neutral-400" : "text-slate-600";
    const tagStyles = theme === "dark" ? "bg-neutral-800 text-white" : "bg-white/80 text-slate-800 border border-slate-200";
    const actionButton =
        theme === "dark"
            ? "bg-white text-black border border-neutral-200 hover:bg-neutral-100"
            : "bg-slate-900 text-white border border-slate-900 hover:bg-slate-800";

    const tabContainerStyles = theme === "dark"
        ? "bg-zinc-800/50 border border-white/5"
        : "bg-slate-100 border border-slate-200";

    return (
        <section className={`${sectionText} px-6 py-10`}>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <h2 className={`text-xl font-bold ${headingColor}`}>Projects</h2>

                    <div className="overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 sm:pb-0 scrollbar-none">
                        <div className={`inline-flex items-center p-1 rounded-md ${tabContainerStyles}`}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    className={`relative px-3 py-1.5 text-xs font-medium rounded-md transition-colors z-10 whitespace-nowrap cursor-pointer ${activeTab === category
                                        ? theme === "dark"
                                            ? "text-black"
                                            : "text-white"
                                        : theme === "dark"
                                            ? "text-neutral-400 hover:text-white"
                                            : "text-slate-500 hover:text-slate-800"
                                        }`}
                                >
                                    {activeTab === category && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className={`absolute inset-0 rounded-md -z-10 ${theme === "dark" ? "bg-white" : "bg-slate-900"
                                                }`}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {category === "All" ? "All" : category === "Web2" ? "Web2" : category === "AI" ? "AI" : category === "Developer Tools" ? "Tools" : category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {items.map((project) => (
                        <div
                            key={project.title}
                            onClick={() => {
                                if (project.website.url) {
                                    window.open(project.website.url, "_blank");
                                }
                            }}
                            className={`rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ease-out hover:shadow-lg h-full ${project.website.url ? "cursor-pointer" : "cursor-default"
                                } ${cardStyles}`}
                        >
                            {project.video.src ? (
                                <video
                                    src={project.video.src}
                                    autoPlay={project.video.autoPlay}
                                    loop={project.video.loop}
                                    muted={project.video.muted}
                                    playsInline={project.video.playsInline}
                                    className={project.video.className}
                                />
                            ) : (
                                <div className={`h-40 w-full flex items-center justify-center ${theme === 'dark' ? 'bg-neutral-900' : 'bg-slate-100'}`}>
                                    {project.imageLink ? (
                                        <img
                                            src={project.imageLink}
                                            alt={project.title}
                                            className="h-full w-full object-cover object-top"
                                        />
                                    ) : (
                                        <div className="text-sm opacity-50 font-semibold">{project.category}</div>
                                    )}
                                </div>
                            )}

                            <div className="flex flex-col px-3 py-2">
                                <h3 className="font-semibold tracking-tight text-base mt-1 pb-2">{project.title}</h3>
                                <time className={`text-xs pb-2 ${timeColor}`}>{project.period}</time>
                                <p className={`text-xs mt-1 ${descriptionColor}`}>{project.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-1 px-3 pb-5 pt-8 mt-auto">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${tagStyles}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between px-3 pb-3">
                                <div className="flex items-center gap-2">
                                    {project.github?.url && (
                                        <a
                                            href={project.github.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className={`flex items-center gap-1 px-2 py-1 text-[10px] font-semibold rounded-md shadow transition-colors ${actionButton}`}
                                        >
                                            <Github className="size-3" />
                                            <span>{project.github.label}</span>
                                        </a>
                                    )}

                                    {project.website.url ? (
                                        <a
                                            href={project.website.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className={`flex items-center gap-1 px-2 py-1 text-[10px] font-semibold rounded-md shadow transition-colors ${actionButton}`}
                                        >
                                            <Globe className="size-3" />
                                            <span>{project.website.label}</span>
                                        </a>
                                    ) : (
                                        <button
                                            disabled
                                            className={`flex items-center gap-1 px-2 py-1 text-[10px] font-semibold rounded-md shadow transition-colors opacity-50 cursor-not-allowed ${theme === "dark" ? "bg-neutral-800 text-neutral-500 border border-neutral-700" : "bg-slate-100 text-slate-400 border border-slate-200"}`}
                                        >
                                            <Globe className="size-3" />
                                            <span>{project.website.label}</span>
                                        </button>
                                    )}
                                </div>

                                <Button
                                    text="Details"
                                    icon={<Eye className="size-3" />}
                                    variant="outline"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedProject(project);
                                    }}
                                    className="rounded-md px-2 py-1 text-[10px] font-semibold"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />

                {showViewAll && (
                    <div className="mt-8 flex justify-end">
                        <Button
                            text="View more projects"
                            icon={<ArrowUpRight className="h-4 w-4" />}
                            to="/projects"
                            variant="outline"
                            className={`rounded-md px-5 py-2.5 text-sm font-medium transition-all ${theme === "dark"
                                ? "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
                                : "bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                }`}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
