import { ExternalLink, Github, HatGlasses } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
    id: number;
    title: string;
    description: string;
    techStack: { name: string; logo: string }[];
    githubUrl: string;
    liveUrl: string;
    videolink?: string;
    badge?: string | null;
    backedBy?: string | null;
    image: string;
};

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: "TypeScript Comps",
            description: "Copy-paste-ready animations and components for modern UIs.",
            techStack: [
                {
                    name: "React",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                },
                {
                    name: "TypeScript",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                },
            ],
            githubUrl: "https://github.com/username/z",
            liveUrl: "#",
            image: "src/assets/Fuji-Dark.png",
            videolink: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example
        },
        {
            id: 2,
            title: "Nahi Bataunga",
            description: "Nahi Bataunga - Start saying nahi bataunga to everyone.",
            techStack: [
                {
                    name: "Next.js",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                },
                {
                    name: "React",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                },
                {
                    name: "Node.js",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                },
            ],
            githubUrl: "https://github.com/username/z",
            liveUrl: "#",
            image: "src/assets/Dark_window.png",
            videolink: "https://www.youtube.com/embed/9bZkp7q19f0", // Example
        },
    ];

    const toggleExpand = (id: number) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    return (
        <section className="py-16 px-6 bg-black text-white min-h-screen">
            <div className="w-full max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>

                <div className="space-y-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            transition={{ duration: 0.4 }}
                            className="bg-gray-black border border-gray-500 border-dashed rounded-xl overflow-hidden group"
                        >
                            <div className="flex flex-col md:flex-row relative">
                                {/* Project Image */}
                                <div className="md:w-2/5">
                                    <div className="relative h-64 md:h-full">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/20"></div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="md:w-3/5 p-6 flex flex-col justify-between relative">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3 text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400  mb-6 leading-relaxed text-sm">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3 mb-6">
                                            {project.techStack.map((tech, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-black border border-gray-700 rounded-lg px-1 py-1 flex items-center"
                                                >
                                                    <img
                                                        src={tech.logo}
                                                        alt={tech.name}
                                                        className="w-5 h-5"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex absolute right-4 top-5 gap-2">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-black px-2 py-2 rounded-lg flex items-center gap-2 border border-gray-500 border-dashed"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-black px-2 py-2 rounded-lg flex items-center gap-2 border border-gray-500 border-dashed"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                        <button
                                            onClick={() => toggleExpand(project.id)}
                                            className="bg-black px-2 py-2 rounded-lg flex items-center gap-2 border border-gray-500 border-dashed cursor-pointer"
                                        >
                                            <HatGlasses className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Video Section */}
                            <AnimatePresence>
                                {expandedProject === project.id && project.videolink && (
                                    <motion.div
                                        key="video"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-black p-4"
                                    >
                                        <div className="aspect-video w-full rounded-lg overflow-hidden">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={project.videolink}
                                                title={project.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="rounded-lg"
                                            ></iframe>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
