// Skills.tsx
import type { JSX } from "react";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiGithub,
    SiDocker,
    SiPython,
    SiLangchain,
} from "react-icons/si";
import { FaPuzzlePiece, FaRocket, FaCode, FaCoffee, FaCogs } from "react-icons/fa";

type Skill = {
    name: string;
    icon: JSX.Element;
};

const skills: Skill[] = [
    { name: "C++", icon: <FaCode size={14} /> },
    { name: "Java", icon: <FaCoffee size={14} /> },
    { name: "JavaScript", icon: <SiJavascript size={14} /> },
    { name: "TypeScript", icon: <SiTypescript size={14} /> },
    { name: "React.js", icon: <SiReact size={14} /> },
    { name: "Next.js", icon: <SiNextdotjs size={14} /> },
    { name: "Node.js", icon: <SiNodedotjs size={14} /> },
    { name: "Express.js", icon: <SiExpress size={14} /> },
    { name: "MongoDB", icon: <SiMongodb size={14} /> },
    { name: "MySQL", icon: <SiMysql size={14} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={14} /> },
    { name: "Framer Motion", icon: <FaCogs size={14} /> },
    { name: "Zod", icon: <FaPuzzlePiece size={14} /> },
    { name: "Git & GitHub", icon: <SiGithub size={14} /> },
    { name: "Docker", icon: <SiDocker size={14} /> },
    { name: "Python", icon: <SiPython size={14} /> },
    { name: "LangChain", icon: <SiLangchain size={14} /> },
    { name: "FastMCP", icon: <FaRocket size={14} /> },
];

export default function Skills() {
    return (
        <section className="w-full max-w-4xl mx-auto p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Skills</h2>
            <div className="flex flex-wrap items-center">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 rounded-lg shadow-sm m-1"
                    >
                        <span className="flex items-center" aria-hidden>
                            {skill.icon}
                        </span>
                        <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
