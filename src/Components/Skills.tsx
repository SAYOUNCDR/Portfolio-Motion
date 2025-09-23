// Skills.tsx
import type { JSX } from "react";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiReact,
    SiFigma,
    SiVercel,
    SiPostman,
    SiBun,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

type Skill = {
    name: string;
    icon: JSX.Element;
};

const skills: Skill[] = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Bun", icon: <SiBun /> },
    {name: "Shitpost", icon: null as unknown as JSX.Element},
];

export default function Skills() {
    return (
        <section className="w-full max-w-3xl mx-auto p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Technologies</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex items-center gap-2 border border-dashed border-gray-500 bg-gray-800/40 text-gray-200 px-3 py-2 rounded-lg shadow-sm backdrop-blur-md"
                    >
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
