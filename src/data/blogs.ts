export type BlogContentBlock =
    | { type: 'paragraph'; text: string }
    | { type: 'heading'; level: 1 | 2 | 3; text: string }
    | { type: 'code'; language: string; code: string; filename?: string }
    | { type: 'image'; src: string; alt: string; caption?: string }
    | { type: 'list'; items: string[] }
    | { type: 'callout'; title?: string; text: string; variant: 'tip' | 'warning' | 'info' };

export type Blog = {
    slug: string;
    title: string;
    type: "Blog" | "Gist";
    status: "Complete" | "In Progress";
    tags: string[];
    readTime: string;
    description: string;
    content?: BlogContentBlock[];
    date: string;
};

export const blogs: Blog[] = [
    {
        slug: "dockerizing-nodejs-mongodb-persistent-storage",
        title: "Dockerizing a Node.js + MongoDB App with Persistent Storage",
        type: "Blog",
        description:
            "Step-by-step setup of a Dockerized Express + MongoDB backend with persistent data volumes, inter-container networking, and Compass integration.",
        status: "Complete",
        tags: ["Docker", "Node.js", "MongoDB", "Backend", "DevOps"],
        readTime: "7 min read",
        date: "February 2026",
        content: [
            {
                type: 'image',
                src: '/images/docker.png',
                alt: 'Docker Containers',
                caption: 'Containerize everything!'
            },
            {
                type: 'paragraph',
                text: "Yo! Let’s get real—there is nothing more satisfying than seeing a cluster of containers spring to life with a single command. Today, we’re not just containerizing a \"Hello World\"; we’re building a living, breathing Node.js + MongoDB stack that actually remembers data."
            },
            { type: 'heading', level: 2, text: '1. The Setup: "Construction Site"' },
            { type: 'paragraph', text: "First, let's build our workspace. Open your terminal and run:" },
            {
                type: 'code',
                language: 'bash',
                code: "mkdir docker-mongo-app && cd docker-mongo-app\nnpm init -y\nnpm install express mongoose dotenv"
            },
            { type: 'heading', level: 3, text: 'The Folder Structure' },
            {
                type: 'code',
                language: 'plaintext',
                code: "docker-mongo-app/\n├── src/\n│   └── index.js       # The heart of the app\n├── .dockerignore      # What Docker should ignore\n├── Dockerfile         # The Node app's DNA\n├── docker-compose.yml # The Master Orchestrator\n└── package.json"
            },
            { type: 'heading', level: 2, text: '2. The Code: Express meets Mongoose' },
            { type: 'paragraph', text: "We need a simple API that can Save a user and Get all users." },
            {
                type: 'code',
                language: 'javascript',
                filename: 'src/index.js',
                code: `const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// 1. Database Connection
// Notice 'db' instead of 'localhost' - this is Docker magic!
const mongoUri = process.env.MONGO_URI || 'mongodb://admin:password@db:27017/testapp?authSource=admin';

mongoose.connect(mongoUri)
  .then(() => console.log('🔥 MongoDB Connected!'))
  .catch(err => console.error('❌ Connection error:', err));

// 2. Simple Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model('User', UserSchema);

// 3. Routes
// GET: Fetch all users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// POST: Add a new user
app.post('/users', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
});

app.listen(3000, () => console.log('🚀 Server running on port 3000'));`
            },
            { type: 'heading', level: 2, text: '3. The Docker Blueprint' },
            { type: 'paragraph', text: "We need to tell Docker how to package our Node app." },
            { type: 'heading', level: 3, text: '.dockerignore (Crucial! Keeps your image small)' },
            {
                type: 'code',
                language: 'plaintext',
                filename: '.dockerignore',
                code: "node_modules\nnpm-debug.log\n.git\nDockerfile"
            },
            { type: 'heading', level: 3, text: 'Dockerfile' },
            {
                type: 'code',
                language: 'dockerfile',
                filename: 'Dockerfile',
                code: `FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]`
            },
            { type: 'heading', level: 2, text: '4. The Orchestrator: Docker Compose' },
            { type: 'paragraph', text: "This file links the Node app to the MongoDB database and ensures the data never vanishes." },
            {
                type: 'code',
                language: 'yaml',
                filename: 'docker-compose.yml',
                code: `version: '3.8'

services:
  db:
    image: mongo:latest
    restart: always
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
    volumes:
      - mongo-data:/data/db # <--- Persistent storage!

  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGO_URI=mongodb://admin:password@db:27017/testapp?authSource=admin
    depends_on:
      - db

volumes:
  mongo-data:`
            },
            { type: 'heading', level: 2, text: '5. Deployment: Launch Sequence 🚀' },
            { type: 'paragraph', text: "Time for the moment of truth. Run this in your root folder:" },
            {
                type: 'code',
                language: 'bash',
                code: "docker-compose up --build"
            },
            { type: 'paragraph', text: "You should see logs showing MongoDB starting up, followed by your Node app saying 🔥 MongoDB Connected!." },
            { type: 'heading', level: 2, text: '6. Testing Guide (Step-by-Step with Postman)' },
            { type: 'paragraph', text: "Now let's prove it works. Open Postman and follow these steps:" },
            { type: 'heading', level: 3, text: 'Step A: Insert Data (POST)' },
            { type: 'list', items: ["URL: http://localhost:3000/users", "Method: POST", "Body: Select raw, then JSON."] },
            {
                type: 'code',
                language: 'json',
                code: `{\n  "name": "Sayoun",\n  "email": "sayoun@example.com"\n}`
            },
            { type: 'paragraph', text: "Click Send. You should get a 201 Created response with your data and a MongoDB _id." },
            { type: 'heading', level: 3, text: 'Step B: Fetch Data (GET)' },
            { type: 'list', items: ["URL: http://localhost:3000/users", "Method: GET"] },
            { type: 'paragraph', text: "Click Send. You should see an array containing the user you just added!" },
            { type: 'heading', level: 3, text: 'Step C: The "Survival" Test (Persistence)' },
            { type: 'paragraph', text: "Stop the containers: Ctrl + C and then run docker-compose down." },
            { type: 'paragraph', text: "Now, start them again: docker-compose up." },
            { type: 'paragraph', text: "Run the GET request in Postman again." },
            { type: 'callout', variant: 'info', title: "The Result", text: "Your data is still there! That’s the power of the named volume we set up." },
            { type: 'heading', level: 2, text: 'Wrapping Up' },
            { type: 'paragraph', text: "You just built a production-ready development environment. Your code is isolated, your database is secure, and your data is persistent." },
            { type: 'callout', variant: 'tip', title: "Pro Tip", text: "If you ever want to clear the database entirely, run docker-compose down -v. The -v flag wipes the volumes too." },
            { type: 'paragraph', text: "Would you like me to show you how to add Environment Variables (.env) to this setup to keep your passwords secret?" },
            { type: 'paragraph', text: "Written by - Sayoun" }
        ]
    },
    {
        slug: "jwt-auth-flow-access-refresh-expressjs",
        title: "JWT Auth Flow with Access & Refresh Tokens in Express.js",
        type: "Gist",
        description:
            "A concise, production-ready snippet showing how to implement secure JWT authentication with access and refresh tokens in Express.",
        content: [
            { type: 'paragraph', text: "Coming soon..." }
        ],
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
        content: [
            { type: 'paragraph', text: "Coming soon..." }
        ],
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
