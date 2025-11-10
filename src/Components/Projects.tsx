import { Globe, Github } from "lucide-react";

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
        title: "Ecliptix UI",
        period: "May 2025 - May 2025",
        description:
            "A beautiful and accessible component library built with Next.js, Tailwind CSS, and Framer Motion. Create stunning interfaces with ease.",
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
    {
        title: "PixLayer",
        period: "April 2025 - April 2025",
        description:
            "A dynamic web project that blends text and images through innovative layering and masking techniques to create captivating visuals.",
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
];

const Projects = () => {
    return (
        <section className="text-white px-4 py-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="rounded-2xl text-white flex flex-col overflow-hidden border border-zinc-800 bg-gradient-to-r from-zinc-900/80 via-zinc-900/60 to-black/20 transition-all duration-300 ease-out hover:shadow-lg hover:border-zinc-700 hover:-translate-y-1 h-full"
                        >
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
                                <a
                                    href={project.website.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1 px-2 py-1 text-[10px] font-semibold bg-white text-black rounded-md shadow border border-neutral-200 hover:bg-neutral-100 transition-colors"
                                >
                                    <Globe className="size-3" />
                                    <span>{project.website.label}</span>
                                </a>

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
            </div>
        </section>
    );
};

export default Projects;
