/**
 * All the words on the site live here.
 * Edit this file and nothing else to make the portfolio yours.
 */

export type Job = {
  company: string;
  role: string;
  tenure: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  highlights: string[];
  tech: string[];
};

export type Project = {
  name: string;
  tagline: string;
  year: string;
  description: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type SideQuest = {
  title: string;
  place: string;
  period: string;
  description: string[];
};

export type Post = {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
  url?: string; // optional: link to the full post elsewhere (Medium, dev.to, ...)
};

export const profile = {
  name: "Rakesh Paramanick",
  profession: "Full-stack developer",
  location: "Mumbai, India",
  email: "rakeshparamanick24@gmail.com",
  github: "https://github.com/Alexclansy24",
  linkedin: "https://www.linkedin.com/in/rakesh-paramanick-551a78229/",
  // Drop your photo in /public and point to it here, e.g. "/profile.jpg"
  photo: "/profile.jpeg",
  photoAlt: "Portrait of Rakesh Paramanick",
  siteDescription:
    "Portfolio of Rakesh Paramanick, a full-stack developer building quiet, well-made software.",
};

export const experience: Job[] = [
  {
  company: "Mythik Entertainment",
  role: "Jr Cinematic Artist",
  tenure: "Mar 2026 to Jul 2026",
  type: "Full-time",
  location: "Mumbai, India",
  summary:
    "Developed AI-powered creative workflows by combining generative AI, prompt engineering, custom GPTs, and AI agent automation to streamline image and video production. Collaborated with R&D to explore emerging AI technologies, automate repetitive creative tasks, and improve content quality, consistency, and production efficiency.",
  responsibilities: [
    "Designed and developed custom GPTs to automate prompt generation for image and video creation workflows",
    "Researched and developed AI agents to automate image-generation tasks, reduce manual effort, and improve workflow efficiency",
    "Built AI-assisted creative workflows by integrating prompt engineering, generative AI models, and automation techniques",
    "Experimented with emerging generative AI tools and models to enhance visual quality, consistency, and creative output",
    "Produced high-quality cinematic visuals and video content using generative AI models",
    "Collaborated with R&D to explore AI-driven solutions for streamlining creative production processes"
  ],
  highlights: [
    "Developed custom GPTs to standardize and streamline image and video prompt generation",
    "Contributed to AI agent development for automating repetitive image-generation tasks",
    "Improved creative workflow efficiency by reducing manual prompt-writing and content-generation efforts",
    "Explored and evaluated generative AI models to improve the quality and consistency of AI-generated content"
  ],
  tech: ["Generative AI", "Custom GPTs", "Prompt Engineering", "AI Agents", "Workflow Automation", "Image Generation", "Video Generation", "LLMs", "R&D"],
},
  {
  company: "Perfectlyokay",
  role: "Full Stack Developer Intern",
  tenure: "Jun 2025 to Oct 2025",
  type: "Internship",
  location: "Mumbai, India (On-site)",
  summary:
    "Built and optimized full-stack web applications using Next.js, TypeScript, and MongoDB, delivering responsive interfaces, efficient backend data processing, authentication, and performance improvements. Integrated an AI-powered chatbot using LLMs, Qdrant, and retrieval-augmented generation (RAG) to provide context-aware responses from existing application data.",
  responsibilities: [
    "Developed responsive product interfaces using Next.js and TypeScript, building reusable components to improve maintainability and user experience",
    "Optimized website SEO and automated sitemap generation to improve search engine discoverability",
    "Built web scrapers and MongoDB aggregation pipelines to extract, transform, and process application data",
    "Implemented on-demand cache revalidation across dynamic Next.js pages to deliver updated content efficiently",
    "Configured session and cookie management to handle authenticated user requests",
    "Integrated an AI-powered chatbot with LLMs, Qdrant vector database, and existing application data",
    "Engineered a RAG pipeline to retrieve relevant information and generate context-aware chatbot responses",
    "Diagnosed and resolved frontend and backend bugs to improve application stability and support production deployments"
  ],
  highlights: [
    "Delivered end-to-end features across frontend interfaces, backend services, and database operations",
    "Connected vector search with application data to enable context-aware AI-powered information retrieval",
    "Streamlined content delivery through cache revalidation and optimized data-processing workflows",
    "Improved code maintainability by modularizing UI components and structuring backend data-processing logic"
  ],
  tech: ["Next.js", "TypeScript", "React", "Node.js", "MongoDB", "Qdrant", "LLMs", "RAG", "Web Scraping", "SEO", "Caching", "Session Management", "REST APIs"],
},
];

export const projects: Project[] = [
  {
  name: "GitHub Profile Finder",
  tagline: "Explore GitHub developers, discover their projects, and analyze public repositories.",
  year: "2026",
  description: [
    "GitHub Profile Finder is an Angular-based web application that allows users to search for GitHub profiles and explore developer information, including profile details, public repositories, and programming languages. It integrates with the GitHub REST API to retrieve real-time public data through a responsive, user-friendly interface.",
    "Built with Angular standalone components and strict TypeScript, the application uses Angular Router for navigation, HttpClient for API communication, and RxJS and signals for reactive state management. Dedicated profile routes allow users to view individual developers at /users/:username, while skeleton loaders improve the experience during API requests.",
    "Implemented repository discovery features, including programming language filters, sorting by update date, and Load More pagination to help users explore repositories efficiently. Filtering and sorting operate on the repositories already loaded, keeping the application lightweight and avoiding unnecessary backend complexity.",
    "Structured the application using a feature-oriented architecture to improve code organization, maintainability, and separation of concerns. Used Tailwind CSS for responsive styling and Vitest for testing, while handling API loading states and errors to create a more reliable user experience.",
    "Designed the project as a frontend-only application without a custom backend, database, or authentication system, demonstrating practical skills in third-party API integration, component-based development, routing, reactive programming, and modern Angular application architecture."
  ],
  tech: ["Angular", "TypeScript", "Tailwind CSS", "Angular Router", "HttpClient", "RxJS", "Angular Signals", "GitHub REST API", "Vitest"],
  liveUrl: "https://github-profile-finder-ten-lilac.vercel.app/",
  githubUrl: "https://github.com/Alexclansy24/github-profile-finder",
},
  
];

export const sideQuests: SideQuest[] = [
  {
  title: "Volunteer",
  place: "Sharp NGO ",
  period: "Nov 2025 to Jan 2026",
  description: [
    "Independently conducted awareness sessions at various schools, addressing audiences of 200–500 students per session on misleading marketing practices and false advertising strategies used by companies.",
    "Explained common advertising tactics, exaggerated product claims, and promotional strategies that influence consumer behavior and purchasing decisions.",
    "Educated students on identifying deceptive advertisements, evaluating product claims critically, and distinguishing authentic information from misleading promotional content.",
    "Delivered presentations to large student audiences, simplifying marketing and consumer awareness concepts through clear explanations and relatable real-world examples.",
    "Encouraged students to make informed purchasing decisions, question misleading marketing claims, and develop critical thinking skills when evaluating advertisements."
  ],
},
{
  title: "Lecturer",
  place: "Computer Training Institute",
  period: "Jun 2022 to Dec 2023",
  description: [
    "Individually taught and mentored 50+ students in computer applications and programming, adapting teaching methods to different learning levels and student needs.",
    "Delivered practical training in Tally ERP, MS-CIT, Advanced Excel, Python, MySQL, HTML, and CSS, covering foundational concepts and hands-on applications.",
    "Designed and explained practical exercises to help students strengthen programming fundamentals, database management skills, spreadsheet proficiency, and web development knowledge.",
    "Guided students through coding practice, software tools, and problem-solving exercises to build confidence in applying technical concepts independently.",
    "Simplified complex computer and programming concepts through structured lessons, practical demonstrations, and real-world examples.",
    "Monitored individual student progress, clarified technical doubts, and provided personalized guidance to improve subject understanding and practical proficiency."
  ],
},
  
];

{/*export const posts: Post[] = [
  {
    title: "What I learned from deleting 4,000 lines of CSS",
    date: "Sep 2026",
    readTime: "6 min read",
    excerpt:
      "A cleanup week that changed how I think about styling, naming, and when a design system helps.",
    body: [
      "Last spring I spent a week deleting CSS from a project I had worked on for two years. I started with a hunch that most of it was dead. By Friday I had removed more than 4,000 lines and nothing visibly changed.",
      "The lesson was not about CSS. It was that every line I add is a line someone has to understand later, including me. Now I write less, name things by purpose, and delete without ceremony.",
    ],
  },
  {
    title: "Shipping a small app every month for a year",
    date: "Jun 2026",
    readTime: "8 min read",
    excerpt:
      "Twelve tiny projects, three that mattered, and why finishing beats polishing.",
    body: [
      "At the start of the year I promised myself one finished project a month. Finished meant deployed, usable, and shown to at least one other person.",
      "Most were forgettable. Three taught me something I could not have learned from a tutorial. The habit mattered more than any single project.",
    ],
  },
  {
    title: "Notes on reading other people's code",
    date: "Feb 2026",
    readTime: "5 min read",
    excerpt:
      "A short, practical routine for getting oriented in a codebase you did not write.",
    body: [
      "When I join a new codebase I follow one request from the browser to the database and back. It takes an hour and gives me a map I can add detail to for weeks.",
      "I write down every question I have. Most answer themselves within a few days, and the rest become my first useful conversations with the team.",
    ],
    url: "https://example.com",
  },
];
*/}
