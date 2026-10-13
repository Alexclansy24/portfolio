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
{
  name: "Duplicate Image Finder",
  tagline: "Find exact and visually similar images with perceptual hashing.",
  year: "2026",
  description: [
    "Duplicate Image Finder is a local desktop application built with Python to identify and manage duplicate images on a computer. It scans selected directories, detects exact duplicates using SHA-256 hashing, and identifies visually similar images using perceptual hashing (pHash).",
    "Implemented a two-stage duplicate detection system that groups identical files based on their SHA-256 hashes and detects near-duplicates using perceptual hash distances. Configurable similarity thresholds allow users to control how closely images must match to be considered duplicates.",
    "Developed a graphical user interface using Tkinter to display scan results, organize duplicate groups, and simplify image management. Added functionality to open selected images, delete unwanted duplicates, and refresh results after file operations.",
    "Implemented corrupted-image detection to identify files that cannot be processed correctly, helping users distinguish problematic images from valid files during scanning.",
    "Built the application as a lightweight, offline utility without AI, cloud services, or external hosting. The project demonstrates practical image-processing algorithms, file-system operations, hashing techniques, and desktop application development."
  ],
  tech: ["Python", "Tkinter", "Pillow", "Perceptual Hashing (pHash)", "SHA-256", "Image Processing", "File System Operations"],
  liveUrl: "",
  githubUrl: "https://github.com/Alexclansy24/duplicate-image-finder",
},
{
  name: "AI PDF Chatbot",
  tagline: "Upload documents and ask questions to get context-aware answers from their content.",
  year: "2026",
  description: [
    "AI PDF Chatbot is a full-stack application that allows authenticated users to upload PDF documents and interact with their content through natural-language questions. It uses retrieval-augmented generation (RAG) to retrieve relevant document passages and generate answers grounded in the uploaded content.",
    "Built the frontend using Next.js, TypeScript, Tailwind CSS, Shadcn UI, TanStack Query, Axios, React Hook Form, and Zod. Implemented login and dashboard functionality, reusable UI components, and structured API communication to provide a responsive document-chat experience.",
    "Developed a FastAPI backend with versioned REST endpoints, JWT-based authentication, and user-specific access control. Integrated PostgreSQL with Alembic migrations for persistent application data and implemented password authentication using Python-JOSE and Passlib.",
    "Integrated Qdrant as the vector database to store and retrieve document embeddings based on semantic similarity. Combined vector retrieval with a large language model to generate context-aware responses using relevant document chunks.",
    "Implemented local file storage through a dedicated storage provider abstraction, keeping document uploads on the local filesystem rather than relying on cloud object storage. Organized backend components to separate authentication, storage, database operations, and vector retrieval responsibilities.",
    "Designed the application around a modular architecture that connects the frontend, FastAPI services, PostgreSQL, local document storage, Qdrant, and the language model into an end-to-end document question-answering workflow."
  ],
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "TanStack Query", "FastAPI", "Python", "PostgreSQL", "Alembic", "Qdrant", "RAG", "LLMs", "JWT", "Docker"],
  liveUrl: "",
  githubUrl: "https://github.com/Alexclansy24/pdf-chatbot",
},
{
  name: "Air Draw - AI Pictionary",
  tagline: "Draw in the air with your fingertips and let a machine learning model recognize your sketches.",
  year: "2026",
  description: [
    "Air Draw is a webcam-based drawing application that lets users draw on a virtual canvas using hand gestures, without touching a screen or using a physical drawing device. Built with MediaPipe hand tracking, it detects fingertip movements in real time and translates them into smooth strokes on the canvas.",
    "Developed an interactive drawing interface using JavaScript, HTML Canvas, and MediaPipe Tasks Vision to track hand landmarks and recognize drawing gestures. Implemented stroke smoothing, movement thresholds, and adjustable line width to create a more natural drawing experience.",
    "Built a machine learning pipeline to recognize hand-drawn shapes using a custom convolutional neural network (CNN). Trained the model on an eight-class drawing dataset and achieved approximately 94% validation accuracy during model evaluation.",
    "Integrated a Python FastAPI backend to receive canvas drawings and return predictions from the trained model. Connected the frontend and backend through a prediction API, enabling users to submit sketches and receive shape-recognition results.",
    "Developed the project as an interactive AI Pictionary experience with drawing challenges involving shapes and everyday objects. Designed the system to run locally, combining real-time computer vision, browser-based drawing, and machine learning inference.",
    "Implemented drawing input validation to handle blank canvas submissions and prevent empty sketches from being processed as valid predictions."
  ],
  tech: ["JavaScript", "HTML Canvas", "MediaPipe Tasks Vision", "Python", "FastAPI", "NumPy", "TensorFlow/Keras", "Convolutional Neural Networks (CNN)", "Computer Vision", "Machine Learning"],
  liveUrl: "",
  githubUrl: "https://github.com/Alexclansy24/air-draw",
},
{
  name: "E-Commerce Food Delivery Web App",
  tagline: "A full-stack food ordering platform with secure payments, order management, and delivery tracking.",
  year: "2024",
  description: [
    "Developed a full-stack food delivery web application that enables customers to browse food items, place orders, make online payments, and track order progress. Structured the project into three independent applications: a customer-facing frontend, an Express.js backend API, and an admin dashboard for managing food items and orders.",
    "Built the customer frontend using React, Vite, and React Router to support page navigation and food ordering workflows. Integrated Axios for API communication and implemented a responsive interface for browsing food items, managing orders, and accessing customer account features.",
    "Developed REST APIs using Node.js and Express.js, with MongoDB and Mongoose for data persistence. Implemented user authentication using JSON Web Tokens (JWT), password hashing with bcrypt, and input validation with Validator to support secure account access and authenticated requests.",
    "Integrated Stripe to support online payment processing and connect payment workflows with order placement. Used environment variables to manage sensitive configuration and implemented backend middleware and API communication to support the application's core operations.",
    "Created a separate admin dashboard using React and Vite to manage food listings and orders. Integrated the backend using Axios and added toast notifications with React Toastify to provide feedback for administrative actions and API operations.",
    "Designed the order management workflow to support order creation, order listing, and delivery-status updates. The platform is intended to provide customers with visibility into their order progress while enabling administrators to manage incoming orders and update their status."
  ],
  tech: ["React", "Vite", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt", "Stripe", "Axios", "React Router", "Multer", "CORS", "dotenv", "Validator"],
  liveUrl: "https://food-delivery-frontend-ihvh.onrender.com/",
  githubUrl: "https://github.com/Alexclansy24/ecom",
},
{
  name: "School Management Dashboard",
  tagline: "A modern school dashboard for managing academics, attendance, schedules, and school activities.",
  year: "2025",
  description: [
    "Designed and developed a responsive school management dashboard using Next.js, React, TypeScript, and Tailwind CSS, focusing on a clean interface, intuitive navigation, and organized presentation of academic information.",
    "Created separate dashboard interfaces for administrators, parents, and students, tailoring the navigation, dashboard widgets, and information displayed to each user role. The project focuses on frontend UI development and uses mock data to demonstrate the intended user experience without a backend.",
    "Designed attendance management screens to display attendance records, attendance summaries, and student attendance information through structured tables, status indicators, and dashboard statistics.",
    "Built interactive timetable and academic schedule interfaces using calendar components to present class schedules, subjects, and upcoming academic activities in an organized calendar-based layout.",
    "Developed UI screens for examination schedules, exam-related information, class management, announcements, and upcoming school events, helping users access important academic updates from a centralized dashboard.",
    "Implemented data visualization components using Recharts to present attendance summaries and other academic statistics through charts and visual indicators. Used React Hook Form and Zod to structure form interfaces and demonstrate client-side input validation.",
    "Integrated calendar libraries, reusable React components, and responsive layouts to create consistent dashboard experiences across different screen sizes. Prioritized visual hierarchy, component reusability, and maintainable frontend architecture."
  ],
  tech: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "React Big Calendar", "React Calendar", "Recharts", "React Hook Form", "Zod", "Moment.js"],
  liveUrl: "https://school-dashboard-ochre.vercel.app/",
  githubUrl: "https://github.com/Alexclansy24/school-dashboard",
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

export const posts: Post[] = [
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
];

