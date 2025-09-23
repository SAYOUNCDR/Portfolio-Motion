import { ExternalLink, Github, HatGlasses } from "lucide-react";

const Projects = () => {
    const projects = [
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
            liveUrl: "https://z.vercel.app",
            videolink: "",
            badge: null,
            backedBy: null,
            image: "src/assets/Fuji-Dark.png",
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
            liveUrl: "https://zi.com",
            videolink: "",
            badge: null,
            backedBy: null,
            image: "src/assets/Dark_window.png",
        },
    ];

    return (
        <section className="py-16 px-4 bg-black text-white min-h-screen w-full">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

                <div className="space-y-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-black border border-gray-500 border-dashed rounded-xl overflow-hidden group"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Project Image */}
                                <div className="md:w-2/5">
                                    <div className="relative h-64 md:h-full">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/20"></div>

                                        {/* Badge overlay */}
                                        {project.badge && (
                                            <div className="absolute top-4 left-4">
                                                <div className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                                    {project.badge}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="md:w-3/5 p-6 flex flex-col justify-between relative">
                                    <div>
                                        {/* Project Title */}
                                        <h3 className="text-xl font-semibold mb-3 text-white">
                                            {project.title}
                                        </h3>

                                        {/* Backed By Badge */}
                                        {project.backedBy && (
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="bg-green-800/20 text-gray-300 text-xs px-3 py-1 rounded-lg flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    backed by {project.backedBy}
                                                </div>
                                            </div>
                                        )}

                                        {/* Description */}
                                        <p className="text-gray-400 text-base mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack with Logos */}
                                        <div className="flex flex-wrap gap-3 mb-6">
                                            {project.techStack.map((tech, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-black border border-gray-700 rounded-lg px-1 py-1 flex items-center "
                                                >
                                                    <img
                                                        src={tech.logo}
                                                        alt={tech.name}
                                                        className="w-5 h-5"
                                                    />
                                                    {/* <span className="text-gray-300 text-sm font-medium">
                                                        {tech.name}
                                                    </span> */}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex  absolute right-4 top-5">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-black   px-2 py-2 rounded-lg flex items-center gap-2 transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>

                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-black px-2 py-2 rounded-lg flex items-center gap-2 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-black px-2 py-2 rounded-lg flex items-center gap-2 transition-colors"
                                        >
                                            <HatGlasses className="w-4 h-4" />
                                        </a>
                                    </div>

                                    <div className="absolute flex items-center gap-1 rounded-lg border border-gray-400/40 h-[5] w-[5] bottom-5 right-5 bg-gray-900/20 p-2 text-xs text-gray-300 ">
                                        View Details
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                            className="size-4"
                                        >
                                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
