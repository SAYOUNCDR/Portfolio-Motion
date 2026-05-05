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
    details?: {
        overview?: string[];
        links?: { label: string; url: string }[];
        gallery?: { label: string; url: string }[];
        sections?: {
            title: string;
            items: { title: string; description: string }[];
        }[];
        stack?: { label: string; value: string }[];
        snippet?: { title: string; code: string };
    };
};

const projects: Project[] = [
    {
        title: "OpenDesk",
        period: "In Progress",
        description:
            "An open-source, self-hostable Intercom alternative with AI-powered support agents using RAG to automate repetitive customer queries and escalate complex cases to humans.",
        video: {
            src: "",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "",
        tags: ["TypeScript", "Helpdesk", "Self-hosted", "AI Agents", "RAG", "Real-time Chat", "Turborepo", "Omnichannel"],
        website: { label: "Website", url: "" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/OpenDesk" },
        category: "AI",
    },
    {
        title: "Pebble",
        period: "April 2026",
        description:
            "Pebble turns technical manuals into structured, editable checklists with citation-aware AI support, helping teams reason through manuals instead of relying on keyword search.",
        video: {
            src: "",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "/images/ProjectImage/Pebble.png",
        tags: ["React + Vite", "Node.js + Express", "Python + FastAPI", "BullMQ", "MongoDB", "Redis"],
        website: { label: "Website", url: "" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/Pebble" },
        category: "AI",
        details: {
            overview: [
                "Pebble helps teams transform dense maintenance and operations manuals into practical, auditable checklist workflows.",
                "It is built for reasoning through manuals rather than keyword searching them, with citation-aware AI support and editable generated checklists.",
            ],
            links: [
                { label: "GitHub Repository", url: "https://github.com/SAYOUNCDR/Pebble" },
                { label: "Docs Index", url: "https://github.com/SAYOUNCDR/Pebble/blob/main/docs/README.md" },
                { label: "Local Setup", url: "https://github.com/SAYOUNCDR/Pebble/blob/main/docs/setup-local.md" },
                { label: "Architecture", url: "https://github.com/SAYOUNCDR/Pebble/blob/main/docs/architecture.md" },
                { label: "API Reference", url: "https://github.com/SAYOUNCDR/Pebble/blob/main/docs/api-reference.md" },
                { label: "Operations Runbook", url: "https://github.com/SAYOUNCDR/Pebble/blob/main/docs/operations-runbook.md" },
                { label: "Troubleshooting", url: "https://github.com/SAYOUNCDR/Pebble/blob/main/docs/troubleshooting.md" },
            ],
            gallery: [
                { label: "Pebble Overview", url: "https://raw.githubusercontent.com/SAYOUNCDR/Pebble/main/docs/github.png" },
            ],
            sections: [
                {
                    title: "Core Workflow",
                    items: [
                        { title: "Manual Upload", description: "Users upload technical manuals and manage them from the web app before starting checklist generation." },
                        { title: "Checklist Jobs", description: "Generation runs as tracked background jobs, with status updates flowing back into the product experience." },
                        { title: "Checklist Editing", description: "Generated checklist items can be opened, reviewed, updated, and exported as PDFs." },
                    ],
                },
                {
                    title: "AI Pipeline",
                    items: [
                        { title: "PDF Ingest", description: "The FastAPI service parses manuals and prepares document context for downstream generation." },
                        { title: "Retrieval Modes", description: "Supports local or page-index based indexing, plus heuristic or tree-search retrieval for checklist generation." },
                        { title: "Citation Verification", description: "Checklist output is verified with strict citation behavior so generated steps remain auditable." },
                    ],
                },
                {
                    title: "Product Features",
                    items: [
                        { title: "Auth", description: "Register, login, and current-user flows protect the manual and checklist workspace." },
                        { title: "Manual Chat", description: "Each manual can keep persisted chat history for follow-up reasoning and support." },
                        { title: "Operational Health", description: "Health endpoints cover both the API and dependency checks for services like MongoDB and Redis." },
                    ],
                },
            ],
            stack: [
                { label: "Frontend", value: "React and Vite in apps/web" },
                { label: "API", value: "Express and TypeScript in services/api" },
                { label: "AI Service", value: "Python FastAPI service in services/ai" },
                { label: "Worker", value: "BullMQ worker consumes checklist jobs and runs the AI pipeline" },
                { label: "Data Stores", value: "MongoDB for users, manuals, jobs, checklists, exports, and chats; Redis for BullMQ queues" },
                { label: "Request Flow", value: "Browser -> Express /api/* -> FastAPI /v1/*" },
            ],
            snippet: {
                title: "Quick Start",
                code: `cd apps/web && npm install
cd ../../services/api && npm install
cd ../ai && pip install -r requirements.txt

# AI service
cd services/ai
uvicorn app.main:app --reload --port 8001

# API service
cd services/api
npm run dev

# Worker service
cd services/api
npm run worker:dev

# Web app
cd apps/web
npm run dev`,
            },
        },
    },
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
            "A lightweight, privacy-focused analytics engine for modern web applications, with real-time telemetry, route analytics, and self-hostable infrastructure.",
        video: {
            src: "",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "/images/ProjectImage/Okunix.webp",
        tags: ["React.js", "Tailwind CSS", "Chart.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
        website: { label: "Website", url: "https://okunix.tech" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/okunix" },
        category: "Web2",
        details: {
            overview: [
                "Okunix Analytics is a self-hostable web analytics platform designed to track, aggregate, and visualize key telemetry metrics in real time.",
                "It focuses on simplicity, performance, and privacy, giving developers immediate insight into application traffic without relying on heavy third-party analytics suites.",
            ],
            links: [
                { label: "Website 1", url: "https://okunix.tech" },
                { label: "Website 2", url: "https://okunix.sayoun.studio" },
                { label: "GitHub Repository", url: "https://github.com/SAYOUNCDR/okunix" },
                { label: "API Reference", url: "https://github.com/SAYOUNCDR/okunix/blob/main/API.md" },
            ],
            sections: [
                {
                    title: "Telemetry & Metrics",
                    items: [
                        { title: "Live Viewers", description: "Tracks concurrent active sessions in real time through WebSocket-based presence updates." },
                        { title: "Traffic Analytics", description: "Aggregates unique visitors, total visits, and high-level application traffic trends." },
                        { title: "Engagement Tracking", description: "Calculates bounce rate and session duration to show how visitors actually use the product." },
                    ],
                },
                {
                    title: "Data Visualization",
                    items: [
                        { title: "Geographic Distribution", description: "Shows traffic by country, region, and city with map and table views." },
                        { title: "Traffic Heatmaps", description: "Visualizes activity intensity by day and 24-hour operational windows." },
                        { title: "Environment Profiling", description: "Extracts device, operating system, and browser telemetry for debugging audience patterns." },
                    ],
                },
                {
                    title: "Deep Routing Analytics",
                    items: [
                        { title: "Referrer Attribution", description: "Classifies incoming traffic from direct, organic search, social, and other channels." },
                        { title: "Path Analysis", description: "Monitors route-level performance with pageviews, entry nodes, and exit nodes." },
                        { title: "Privacy-first Tracking", description: "Uses a lightweight async beacon approach to keep analytics fast and unobtrusive." },
                    ],
                },
            ],
            stack: [
                { label: "Frontend", value: "React.js, Tailwind CSS, Chart.js, Lucide Icons" },
                { label: "Backend", value: "Node.js, Express.js, WebSocket telemetry" },
                { label: "Database", value: "MongoDB and Mongoose aggregation pipelines" },
                { label: "Authentication", value: "JWT-based stateless authentication" },
                { label: "Self-hosting", value: "Node.js 18+, MongoDB 6+, npm or yarn" },
            ],
            snippet: {
                title: "Tracking Script",
                code: `<script
  defer
  src="https://okunix.tech/api/tracker/script.js"
  data-website-id="YOUR_WEBSITE_ID"
></script>`,
            },
        },
    },
    {
        title: "Auto-Timetable",
        period: "December 2025",
        description:
            "A full-stack academic scheduling system that uses Google OR-Tools to generate conflict-free timetables across faculty availability, rooms, labs, batches, and curriculum constraints.",
        video: {
            src: "",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "h-40 w-full object-cover object-top rounded-t-lg",
        },
        imageLink: "/images/ProjectImage/auto-timetable.webp",
        tags: ["React 19", "Vite", "Tailwind CSS", "Node.js", "Express 5", "MongoDB", "FastAPI", "Google OR-Tools", "JWT"],
        website: { label: "Website", url: "" },
        github: { label: "GitHub", url: "https://github.com/SAYOUNCDR/auto-timetable" },
        category: "Web2",
        details: {
            overview: [
                "The TimeTable Management & Generation System automates academic scheduling for institutions that need to coordinate faculty, rooms, labs, subjects, and batches without manual conflict checking.",
                "Its scheduler service uses Google OR-Tools to solve constraint-heavy timetable generation, while the React dashboard gives admins, faculty, and students role-specific views of the final schedules.",
            ],
            links: [
                { label: "GitHub Repository", url: "https://github.com/SAYOUNCDR/auto-timetable" },
                { label: "Visual Guide", url: "https://mapmyrepo.vasudev.live/?user=SAYOUNCDR&repo=auto-timetable" },
                { label: "API Documentation", url: "https://github.com/SAYOUNCDR/auto-timetable/blob/main/docs/API-Documentation.md" },
            ],
            gallery: [
                { label: "Landing Page", url: "https://github.com/user-attachments/assets/7231f9c7-e979-4566-8b92-a16065fe8de9" },
                { label: "Admin Login", url: "https://github.com/user-attachments/assets/7ba7dbeb-8138-4d05-a571-cc5708345326" },
                { label: "Admin Dashboard", url: "https://github.com/user-attachments/assets/ea3338da-5f4d-43e4-ba4e-53e1ea632562" },
                { label: "Data Management", url: "https://github.com/user-attachments/assets/74470195-b2e5-4151-b995-0fa861b028e7" },
                { label: "Generator", url: "https://github.com/user-attachments/assets/154c7208-eb45-4945-8624-37ac56f4bc0a" },
                { label: "Generated Timetable", url: "https://github.com/user-attachments/assets/f140e2a5-a150-41ad-8b57-05ad7266c1ae" },
                { label: "Faculty View", url: "https://github.com/user-attachments/assets/9743a986-db22-4e8c-bf4a-cdc294d9ece5" },
                { label: "Student View", url: "https://github.com/user-attachments/assets/04fdc96c-5b62-4906-a3c5-483121ad0c5e" },
            ],
            sections: [
                {
                    title: "Key Features",
                    items: [
                        { title: "Automated Scheduling", description: "Generates conflict-free timetables with AI-assisted constraint programming instead of manual slot allocation." },
                        { title: "Role-Based Access", description: "Provides separate portals for admins, faculty, and students so each role gets the right operational view." },
                        { title: "Resource Management", description: "Manages classrooms, labs, subjects, batches, faculty, and other timetable inputs from one dashboard." },
                    ],
                },
                {
                    title: "Constraint Handling",
                    items: [
                        { title: "Faculty Availability", description: "Respects unavailable slots, teaching load limits, and assignment boundaries while generating schedules." },
                        { title: "Room and Lab Fit", description: "Accounts for room capacity, lab requirements, and resource availability before assigning sessions." },
                        { title: "Curriculum Requirements", description: "Balances subjects, batches, and academic structure so generated timetables match institutional rules." },
                    ],
                },
                {
                    title: "User Views",
                    items: [
                        { title: "Admin View", description: "Central dashboard for managing data, running the generator, and reviewing generated timetables." },
                        { title: "Faculty View", description: "Faculty-facing timetable view focused on teaching assignments and schedule visibility." },
                        { title: "Student View", description: "Student-facing schedule view for quickly checking batch-wise timetable information." },
                    ],
                },
            ],
            stack: [
                { label: "Client Layer", value: "React 19 SPA built with Vite and Tailwind CSS" },
                { label: "API Layer", value: "Node.js and Express 5 REST API for auth, business logic, and persistence" },
                { label: "Scheduler", value: "Python FastAPI service using Google OR-Tools for constraint solving" },
                { label: "Data Layer", value: "MongoDB with Mongoose for institutional data and generated schedules" },
                { label: "Auth", value: "JWT and bcrypt for secure authentication and authorization" },
            ],
            snippet: {
                title: "Local Setup",
                code: `cd backend
npm install
npm start

cd scheduler_core
python -m venv venv
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

cd frontend
npm install
npm run dev`,
            },
        },
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
        imageLink: "/images/ProjectImage/DevCalander.webp",
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
        imageLink: "/images/ProjectImage/better-sidebar.webp",
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
    featuredTitles?: string[];
};

const Projects = ({ limit, showViewAll = true, featuredTitles }: ProjectsProps) => {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState<ProjectCategory | "All">("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const categories: (ProjectCategory | "All")[] = ["All", "Web2", "AI", "Extensions", "Developer Tools"];

    const visibleProjects = featuredTitles?.length
        ? featuredTitles
            .map((title) => projects.find((project) => project.title.toLowerCase() === title.toLowerCase()))
            .filter((project): project is Project => Boolean(project))
        : projects;

    const filteredProjects = activeTab === "All"
        ? visibleProjects
        : visibleProjects.filter(project => project.category === activeTab);

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
