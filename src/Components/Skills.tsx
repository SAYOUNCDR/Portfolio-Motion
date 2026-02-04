// Skills.tsx
import type { JSX } from "react";
import {
    SiJavascript,
    SiCplusplus,
    SiPython,
    SiNodedotjs,
    SiExpress,
    SiFastapi,
    SiJsonwebtokens,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiNginx,
    SiGithubactions,
    SiLinux,
    SiReact,
    SiTailwindcss,
    SiFramer,
    SiBun,
    SiPrisma,
    SiLangchain,
} from "react-icons/si";
import {
    FaNetworkWired,
    FaUserShield,
    FaDatabase,
    FaBrain,
    FaEye,
    FaRobot,
    FaLightbulb,
    FaServer
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

type Skill = {
    name: string;
    icon: JSX.Element;
};

const skills: Skill[] = [
    { name: "C++", icon: <SiCplusplus size={14} /> },
    { name: "JavaScript", icon: <SiJavascript size={14} /> },
    { name: "Python", icon: <SiPython size={14} /> },
    { name: "Node.js", icon: <SiNodedotjs size={14} /> },
    { name: "Bun", icon: <SiBun size={14} /> },
    { name: "Express.js", icon: <SiExpress size={14} /> },
    { name: "FastAPI", icon: <SiFastapi size={14} /> },
    { name: "Prisma", icon: <SiPrisma size={14} /> },
    { name: "REST APIs", icon: <FaNetworkWired size={14} /> },
    { name: "JWT", icon: <SiJsonwebtokens size={14} /> },
    { name: "RBAC", icon: <FaUserShield size={14} /> },
    { name: "Schema Design", icon: <FaDatabase size={14} /> },
    { name: "RAG Systems", icon: <FaBrain size={14} /> },
    { name: "LangChain", icon: <SiLangchain size={14} /> },
    { name: "OCR Pipelines", icon: <FaEye size={14} /> },
    { name: "Agent Workflows", icon: <FaRobot size={14} /> },
    { name: "Context Optimization", icon: <FaLightbulb size={14} /> },
    { name: "MongoDB", icon: <SiMongodb size={14} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={14} /> },
    { name: "Docker", icon: <SiDocker size={14} /> },
    { name: "Nginx", icon: <SiNginx size={14} /> },
    { name: "VPS", icon: <FaServer size={14} /> },
    { name: "GitHub Actions", icon: <SiGithubactions size={14} /> },
    { name: "Linux", icon: <SiLinux size={14} /> },
    { name: "React.js", icon: <SiReact size={14} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={14} /> },
    { name: "Framer Motion", icon: <SiFramer size={14} /> },
];

export default function Skills() {
    const { theme } = useTheme();

    const headingColor = theme === "dark" ? "text-white" : "text-slate-900";
    const chipBg = theme === "dark" ? "bg-white text-black" : "bg-slate-900 text-slate-100";
    const sectionText = theme === "dark" ? "" : "text-slate-700";

    return (
        <section className={`w-full max-w-4xl mx-auto p-6 ${sectionText}`}>
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>Skills</h2>

            <div className="flex flex-wrap items-center">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-sm m-1 transition-transform hover:scale-105 ${chipBg}`}
                    >
                        <span className="flex items-center">
                            {skill.icon}
                        </span>
                        <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
