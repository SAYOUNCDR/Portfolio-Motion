import { Globe, Github, ArrowUpRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/Button";

type Project = {
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
};

const projects: Project[] = [
    {
        title: "DevCalander",
        period: "Aug 2025 - Aug 2025",
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
    },
    {
        title: "ElevateX",
        period: "June 2025 - July 2025",
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
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/InternalSIH25" },
    },
    {
        title: "PolySee",
        period: "Oct 2025 - Oct 2025",
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
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/InternalSIH25" },
    },
    {
        title: "NyaySaathi",
        period: "Aug 2025 - Aug 2025",
        description:
            "An AI-powered legal assistant designed to help users navigate legal processes, understand their rights, and access legal resources with ease.",
        video: {
            src: "/videos/Polysee.mp4",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "",
        tags: ["React.js", "JavaScript", "Framer Motion", "Tailwind CSS", "Python", "Langchain", "Docker", "redis", "OpenAI API"],
        website: { label: "Website", url: "" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/InternalSIH25" },
    },
];

type ProjectsProps = {
    limit?: number;
    showViewAll?: boolean;
};

const Projects = ({ limit, showViewAll = true }: ProjectsProps) => {
    const items = typeof limit === "number" ? projects.slice(0, limit) : projects;
    const { theme } = useTheme();

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

    return (
        <section className={`${sectionText} px-6 py-10`}>
            <div className="max-w-6xl mx-auto">
                <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {items.map((project) => (
                        <div
                            key={project.title}
                            className={`rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ease-out hover:shadow-lg h-full ${cardStyles}`}
                        >
                            {project.website.url ? (
                                <a href={project.website.url} target="_blank" rel="noreferrer" className="block cursor-pointer">
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
                                        <img
                                            src={project.imageLink}
                                            alt={project.title}
                                            className={project.video.className}
                                        />
                                    )}
                                </a>
                            ) : (
                                <>
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
                                        <img
                                            src={project.imageLink}
                                            alt={project.title}
                                            className={project.video.className}
                                        />
                                    )}
                                </>
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

                            <div className="flex items-center gap-2 px-3 pb-3">
                                {project.github?.url && (
                                    <a
                                        href={project.github.url}
                                        target="_blank"
                                        rel="noreferrer"
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
                        </div>
                    ))}
                </div>

                {showViewAll && (
                    <div className="mt-8 flex justify-end">
                        <Button
                            text="View more projects"
                            icon={<ArrowUpRight className="h-4 w-4" />}
                            to="/projects"
                            variant="outline"
                            className="rounded-lg px-3 py-2 text-xs font-semibold"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
