import { Globe, Github, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    tags: string[];
    website: { label: string; url: string };
    github?: { label: string; url: string };
};

const projects: Project[] = [
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
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
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
        tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
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

    return (
        <section className="text-white px-4 py-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {items.map((project) => (
                        <div
                            key={project.title}
                            className="rounded-2xl text-white flex flex-col overflow-hidden border border-zinc-800 bg-gradient-to-r from-zinc-900/80 via-zinc-900/60 to-black/20 transition-all duration-300 ease-out hover:shadow-lg hover:border-zinc-700 hover:-translate-y-1 h-full"
                        >
                            {project.website.url ? (
                                <a href={project.website.url} target="_blank" rel="noreferrer" className="block cursor-pointer">
                                    <video
                                        src={project.video.src}
                                        autoPlay={project.video.autoPlay}
                                        loop={project.video.loop}
                                        muted={project.video.muted}
                                        playsInline={project.video.playsInline}
                                        className={project.video.className}
                                    />
                                </a>
                            ) : (
                                <video
                                    src={project.video.src}
                                    autoPlay={project.video.autoPlay}
                                    loop={project.video.loop}
                                    muted={project.video.muted}
                                    playsInline={project.video.playsInline}
                                    className={project.video.className}
                                />
                            )}

                            <div className="flex flex-col px-3 py-2">
                                <h3 className="font-semibold tracking-tight text-base mt-1 pb-2">{project.title}</h3>
                                <time className="text-xs text-neutral-400 pb-2">{project.period}</time>
                                <p className="text-xs text-neutral-400 mt-1">{project.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-1 px-3 pb-5 pt-8 mt-auto">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-md bg-neutral-800 text-white px-1.5 py-0.5 text-[10px] font-semibold"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 px-3 pb-3">
                                {project.website.url && (
                                    <a
                                        href={project.website.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1 px-2 py-1 text-[10px] font-semibold bg-white text-black rounded-md shadow border border-neutral-200 hover:bg-neutral-100 transition-colors"
                                    >
                                        <Globe className="size-3" />
                                        <span>{project.website.label}</span>
                                    </a>
                                )}

                                {project.github?.url && (
                                    <a
                                        href={project.github.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1 px-2 py-1 text-[10px] font-semibold bg-white text-black rounded-md shadow border border-neutral-200 hover:bg-neutral-100 transition-colors"
                                    >
                                        <Github className="size-3" />
                                        <span>{project.github.label}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {showViewAll && (
                    <div className="mt-8 flex justify-end">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 rounded-lg border border-[#c2c2c2] border-dashed px-3 py-2 text-xs font-semibold text-white transition hover:border-gray-500"
                        >
                            View more projects
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
