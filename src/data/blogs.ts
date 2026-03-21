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
  relativeTime?: string;
  thumbnail?: string;
  mediumLink?: string;
};

export const blogs: Blog[] = [
  {
    slug: "localhost-to-live-azure-vm-deployment",
    title: "From Localhost to Live: Production-Ready Deployment on Azure VM (Nodejs + React app)",
    type: "Blog",
    description: "A comprehensive, battle-tested guide to deploying your MERN stack application on an Azure Virtual Machine. Configure PM2, Nginx reverse proxy, and SSL.",
    content: [
      {
        type: 'paragraph',
        text: "Let’s be real for a second. We’ve all felt that specific kind of developer pain: your MERN app is running perfectly on localhost, you’re feeling like a 10x engineer, and then... it’s time to deploy. Suddenly, you're drowning in a sea of server configs, crashing processes, and blank screens."
      },
      {
        type: 'paragraph',
        text: "Take a deep breath. I’ve been exactly where you are, and I promise you, getting your app onto a live server doesn’t have to be a nightmare. I’ve battle-tested this exact setup over and over. If you follow this guide step-by-step, you will have a rock-solid, production-ready MERN app running securely on an Azure VM. No skipped steps, no “draw the rest of the owl” tutorials."
      },
      {
        type: 'paragraph',
        text: "Let’s build something cool and actually get it shipped."
      },
      {
        type: 'image',
        src: '/images/Blogs/Deployment.webp',
        alt: 'Azure Server Deployment Graphic',
        caption: 'Taking your app from localhost to the cloud'
      },
      {
        type: 'heading',
        level: 2,
        text: "Step 1: Spin Up Your Azure Playground:"
      },
      {
        type: 'paragraph',
        text: "First things first, we need a machine."
      },
      {
        type: 'list',
        items: [
          "Jump into the Azure Portal and hit “Create a Virtual Machine.”",
          "Select an Ubuntu image (Ubuntu 20.04 or 24.04 are great).",
          "Set your username and choose SSH public key for authentication. This is way more secure than a password.",
          "Download your private key and drop it into a dedicated folder on your local machine (like ~/CloudSSH)."
        ]
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Pro-tip for students',
        text: 'If you’re on the Azure for Students plan, regions like malaysiawest often have available resources when others are full. Choose whatever works for you!'
      },
      {
        type: 'paragraph',
        text: "Open your terminal and let’s SSH into your new server. It’s time to hack."
      },
      {
        type: 'code',
        language: 'bash',
        code: `# Don't forget to point to wherever you saved that .pem file!\nssh -i /path/to/your/key.pem azureuser@<your_vm_ip>`
      },
      {
        type: 'heading',
        level: 2,
        text: "Step 2: Equip Your Server:"
      },
      {
        type: 'paragraph',
        text: "Your brand-new Ubuntu server is a blank slate. Let’s give it the tools it needs to run your JavaScript code."
      },
      {
        type: 'paragraph',
        text: "First, always update the system. It’s just good hygiene:"
      },
      {
        type: 'code',
        language: 'bash',
        code: `sudo apt update && sudo apt upgrade -y`
      },
      {
        type: 'paragraph',
        text: "Next, let’s grab curl, Node.js, and Nginx. I highly recommend grabbing Node straight from NodeSource to ensure you get the exact version you want (we'll use v24 here)."
      },
      {
        type: 'code',
        language: 'bash',
        code: `# Get curl\nsudo apt-get install -y curl\n\n# Fetch Node.js 24.x and install Node & NPM\ncurl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -\nsudo apt-get install -y nodejs\n\n# Verify they actually installed. You should see version numbers print out!\nnode -v\nnpm -v\n\n# Install Nginx (our web server)\nsudo apt install nginx -y\n\n# Start Nginx and tell it to wake up automatically if the server restarts\nsudo systemctl start nginx\nsudo systemctl enable nginx`
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Quick check',
        text: 'Copy your VM’s public IP address and paste it into your browser. Do you see the “Welcome to nginx!” page? Heck yes. You’re already hosting a website.'
      },
      {
        type: 'heading',
        level: 2,
        text: "Step 3: Get Your Code on the Box"
      },
      {
        type: 'paragraph',
        text: "Let’s keep things organized. I like to make a projects folder right in the home directory."
      },
      {
        type: 'code',
        language: 'bash',
        code: `mkdir ~/projects\ncd ~/projects`
      },
      {
        type: 'paragraph',
        text: "Now, clone your repo."
      },
      {
        type: 'code',
        language: 'bash',
        code: `git clone <your_awesome_repo_url>\ncd <your_project_folder>`
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'THE MOST IMPORTANT STEP EVERYONE FORGETS',
        text: "Your .env files don't live on GitHub (or at least, they shouldn't). You need to recreate them on your server."
      },
      {
        type: 'code',
        language: 'bash',
        code: `# Set up frontend env vars\ncd client\ncp .env.example .env\nnano .env # Add your variables, then press Ctrl+X, Y, Enter to save\n\n# Set up backend env vars\ncd ../server\ncp .env.example .env\nnano .env`
      },
      {
        type: 'paragraph',
        text: "While you’re in those folders, run npm install for both, and run npm run build in your client folder to generate your static frontend files."
      },
      {
        type: 'heading',
        level: 2,
        text: "Step 4: Keep the Lights On with PM2"
      },
      {
        type: 'paragraph',
        text: "If you type node server.js and close your SSH terminal, your app instantly dies. Not exactly \"production-ready,\" right?"
      },
      {
        type: 'paragraph',
        text: "We use PM2 to keep your app alive forever. It will automatically restart your app if it crashes and keep it running in the background."
      },
      {
        type: 'code',
        language: 'bash',
        code: `# Install PM2 globally\nsudo npm install pm2 -g`
      },
      {
        type: 'paragraph',
        text: "Instead of starting the frontend and backend with separate messy commands, let’s use an ecosystem.config.js file. Create this file in the root of your project:"
      },
      {
        type: 'code',
        language: 'javascript',
        filename: 'ecosystem.config.js',
        code: `module.exports = {\n  apps: [\n    {\n      name: "backend",\n      script: "server.js",\n      cwd: "/home/azureuser/projects/your_project/server",\n      env_file: "/home/azureuser/projects/your_project/server/.env",\n      env: {\n        NODE_ENV: "production",\n      }\n    },\n    {\n      name: "frontend",\n      script: "serve",\n      env: {\n        PM2_SERVE_PATH: '/home/azureuser/projects/your_project/client/dist',\n        PM2_SERVE_PORT: 5173,\n        PM2_SERVE_SPA: 'true',\n        NODE_ENV: "production"\n      }\n    }\n  ]\n};`
      },
      {
        type: 'paragraph',
        text: "(Make sure to swap your_project with your actual folder name!)"
      },
      {
        type: 'paragraph',
        text: "Now, let PM2 do its magic:"
      },
      {
        type: 'code',
        language: 'bash',
        code: `pm2 start ecosystem.config.js\npm2 save\npm2 startup`
      },
      {
        type: 'heading',
        level: 2,
        text: "Step 5: Nginx — The Ultimate Traffic Cop"
      },
      {
        type: 'paragraph',
        text: "Your frontend is sitting on port 5173 and your backend is on 3000. But when users visit your website, they don't type ports; they just use standard port 80 (HTTP)."
      },
      {
        type: 'paragraph',
        text: "Nginx acts as a “Reverse Proxy.” It stands at the front door, takes requests on port 80, and says, \"Ah, you want the API? Let me quietly hand you over to port 3000.\""
      },
      {
        type: 'paragraph',
        text: "Open up the Nginx config file:"
      },
      {
        type: 'code',
        language: 'bash',
        code: `sudo nano /etc/nginx/nginx.conf`
      },
      {
        type: 'paragraph',
        text: "Delete everything in there and paste this exact configuration. It just works."
      },
      {
        type: 'code',
        language: 'nginx',
        filename: '/etc/nginx/nginx.conf',
        code: `events {}\n\nhttp {\n    server {\n        listen 80;\n        server_name your-frontend-domain.com; # Change this!\n\n        location / {\n            proxy_pass http://localhost:5173; \n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection 'upgrade';\n            proxy_set_header Host $host;\n            proxy_cache_bypass $http_upgrade;\n        }\n    }\n\n    server {\n        listen 80;\n        server_name api.your-backend-domain.com; # Change this!\n\n        location / {\n            proxy_pass http://localhost:3000; \n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection 'upgrade';\n            proxy_set_header Host $host;\n            proxy_cache_bypass $http_upgrade;\n        }\n    }\n}`
      },
      {
        type: 'paragraph',
        text: "Save the file. Now, run these two commands to make sure you didn’t make any typos and to restart Nginx:"
      },
      {
        type: 'code',
        language: 'bash',
        code: `sudo nginx -t\nsudo nginx -s reload`
      },
      {
        type: 'heading',
        level: 2,
        text: "Step 6: DNS Magic & Securing the Bag (SSL)"
      },
      {
        type: 'paragraph',
        text: "Almost there! Head over to wherever you bought your domain name (Namecheap, GoDaddy, etc.) and go to your DNS settings. You need to add two A Records that point your domains to your VM’s public IP address."
      },
      {
        type: 'code',
        language: 'plaintext',
        code: `Type: A | Host: @ (or www) | Value: Your VM IP\nType: A | Host: api | Value: Your VM IP`
      },
      {
        type: 'paragraph',
        text: "Give it a few minutes to propagate across the internet."
      },
      {
        type: 'paragraph',
        text: "Finally, no modern app should run on standard HTTP. Browsers will yell at your users. Let’s get a free SSL certificate using Certbot:"
      },
      {
        type: 'code',
        language: 'bash',
        code: `# Install Certbot\nsudo apt install certbot python3-certbot-nginx -y\n\n# Let Certbot do the heavy lifting\nsudo certbot --nginx -d your-frontend-domain.com -d api.your-backend-domain.com`
      },
      {
        type: 'paragraph',
        text: "Certbot will ask you a couple of questions, and then it will automatically edit your Nginx file to use secure HTTPS (port 443)."
      },
      {
        type: 'heading',
        level: 2,
        text: "Sheesh you did this man .."
      },
      {
        type: 'paragraph',
        text: "Take a step back and admire your work. You’ve successfully spun up a Linux server, configured a production process manager, set up a reverse proxy, and secured it all with SSL. That is serious engineering work, and it’s running smoothly."
      }
    ],
    status: "Complete",
    tags: ["Azure", "Deployment", "Node.js", "React", "Cloud"],
    readTime: "10 min read",
    date: "February 2026",
    thumbnail: "/images/Blogs/Deployment.webp",
    mediumLink: "https://medium.com/@0xsyn.dev/from-localhost-to-live-production-ready-deployment-on-azure-vm-nodejs-react-app-879c3e3f772c"
  },
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
    thumbnail: "/images/Blogs/DockerBlog.webp",
    content: [
      {
        type: 'image',
        src: '/images/Blogs/DockerBlog.webp',
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
const mongoUri = 'mongodb://admin:password@db:27017/testapp?authSource=admin';

mongoose.connect(mongoUri)
  .then(() => console.log(' MongoDB Connected!'))
  .catch(err => console.error('Connection error:', err));

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

app.listen(3000, () => console.log('Server running on port 3000'));`
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
      { type: 'heading', level: 2, text: '5. Deployment: Launch Sequence ' },
      { type: 'paragraph', text: "Time for the moment of truth. Run this in your root folder:" },
      {
        type: 'code',
        language: 'bash',
        code: "docker-compose up --build"
      },
      { type: 'paragraph', text: "You should see logs showing MongoDB starting up, followed by your Node app saying MongoDB Connected!." },
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
    ]
  },

];

export function findBlogBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return blogs.find((b) => b.slug === slug);
}
