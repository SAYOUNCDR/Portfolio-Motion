export type Blog = {
    slug: string;
    title: string;
    type: "Blog" | "Gist";
    status: "Complete" | "In Progress";
    tags: string[];
    readTime: string;
    description: string;
    content?: string;
    date: string;
};

export const blogs: Blog[] = [
    {
        slug: "dockerizing-nodejs-mongodb-persistent-storage",
        title: "Dockerizing a Node.js + MongoDB App with Persistent Storage",
        type: "Blog",
        description:
            "Step-by-step setup of a Dockerized Express + MongoDB backend with persistent data volumes, inter-container networking, and Compass integration.",
        content:
            "Coming soon — this post will walk through a complete Dockerization of an Express + MongoDB app. Sections will include: project layout and Dockerfile best practices; creating a multi-service setup with docker-compose; configuring named volumes for persistent MongoDB storage; environment variables and secrets handling; inter-container networking and linking the API to the database; using MongoDB Compass for debugging; and tips for local development vs production. Code snippets, compose files, and troubleshooting notes will be included.",
        status: "Complete",
        tags: ["Docker", "Node.js", "MongoDB", "Backend", "DevOps"],
        readTime: "7 min read",
        date: "Coming Soon",
    },
    {
        slug: "jwt-auth-flow-access-refresh-expressjs",
        title: "JWT Auth Flow with Access & Refresh Tokens in Express.js",
        type: "Gist",
        description:
            "A concise, production-ready snippet showing how to implement secure JWT authentication with access and refresh tokens in Express.",
        content:
            "Coming soon — a focused, production-ready guide that explains the access + refresh token pattern in Express. It will cover: the threat model; how to create short-lived access tokens and long-lived refresh tokens; secure storage strategies (httpOnly cookies vs local storage); refresh endpoints and token rotation; storing refresh tokens server-side (DB or Redis) and invalidation; middleware for protecting routes; and sample endpoint implementations with code snippets you can drop into an Express app.",
        status: "Complete",
        tags: ["JWT", "Auth", "Express.js", "Security", "API"],
        readTime: "4 min read",
        date: "Coming Soon",
    },
    {
        slug: "smart-classroom-timetable-scheduler-mern-ai",
        title: "Building a Smart Classroom & Timetable Scheduler (MERN + AI)",
        type: "Blog",
        description: "Deep dive into designing an AI-assisted timetable scheduler that resolves classroom and faculty clashes using intelligent allocation logic.",
        content: "Coming soon — a technical walk-through of a Smart Classroom & Timetable Scheduler built with the MERN stack and AI-assisted allocation. The article will define the problem and constraints, present the data model (rooms, faculty availability, course requirements), explain algorithmic approaches (constraint satisfaction, graph-coloring, greedy heuristics) and where ML can help (ranking candidate allocations). It will include architecture diagrams, API design, example React scheduler UI patterns, and evaluation strategies for measuring clash resolution quality.",
        status: "In Progress",
        tags: ["AI", "MERN", "Scheduling", "React", "Node.js"],
        readTime: "9 min read",
        date: "Coming Soon",
    },

];

export function findBlogBySlug(slug: string | undefined) {
    if (!slug) return undefined;
    return blogs.find((b) => b.slug === slug);
}
