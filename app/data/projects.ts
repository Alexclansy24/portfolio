import type { Project } from '@/app/types';

export const allProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI, secure payment processing, inventory management, and comprehensive admin dashboard. Built with scalability in mind.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'JWT'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    icon: 'fas fa-shopping-cart',
    category: 'Full Stack',
    year: '2024',
    status: 'Completed'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative workspace with real-time updates, drag-and-drop functionality, team collaboration, time tracking, and project analytics.',
    technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    icon: 'fas fa-tasks',
    category: 'Full Stack',
    year: '2024',
    status: 'Completed'
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    description: 'Real-time business intelligence platform with interactive charts, custom reporting, data visualization, and automated insights generation.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    icon: 'fas fa-chart-line',
    category: 'Data Visualization',
    year: '2024',
    status: 'Completed'
  },
  {
    id: '4',
    title: 'Social Media Dashboard',
    description: 'Comprehensive social media management platform for scheduling posts, analyzing engagement, and managing multiple accounts from one interface.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    icon: 'fas fa-share-alt',
    category: 'SaaS',
    year: '2024',
    status: 'In Progress'
  },
  {
    id: '5',
    title: 'AI Content Generator',
    description: 'Intelligent content creation tool powered by AI for generating blog posts, social media content, and marketing copy with SEO optimization.',
    technologies: ['Python', 'OpenAI', 'Flask', 'React', 'TensorFlow'],
    liveUrl: '#',
    githubUrl: '#',
    icon: 'fas fa-robot',
    category: 'AI/ML',
    year: '2024',
    status: 'Completed'
  },
  {
    id: '6',
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness application with workout tracking, nutrition logging, progress analytics, and social features for motivation.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    icon: 'fas fa-dumbbell',
    category: 'Mobile',
    year: '2023',
    status: 'Completed'
  },
  {
    id: '7',
    title: 'Crypto Portfolio Tracker',
    description: 'Real-time cryptocurrency portfolio management with price alerts, market analysis, news integration, and tax reporting features.',
    technologies: ['Vue.js', 'Express', 'CoinGecko API', 'Chart.js', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
    icon: 'fab fa-bitcoin',
    category: 'FinTech',
    year: '2023',
    status: 'Completed'
  },
  {
    id: '8',
    title: 'Online Learning Platform',
    description: 'Comprehensive e-learning system with video streaming, interactive quizzes, progress tracking, and certification management.',
    technologies: ['React', 'Node.js', 'AWS S3', 'Stripe', 'MongoDB', 'WebRTC'],
    liveUrl: '#',
    githubUrl: '#',
    icon: 'fas fa-graduation-cap',
    category: 'EdTech',
    year: '2023',
    status: 'Completed'
  },
  {
    id: '9',
    title: 'Restaurant POS System',
    description: 'Point-of-sale system for restaurants with order management, inventory tracking, staff management, and sales analytics.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Thermal Printer API'],
    liveUrl: '#',
    githubUrl: '#',
    icon: 'fas fa-cash-register',
    category: 'Business',
    year: '2023',
    status: 'Completed'
  },
  {
    id: '10',
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with accurate forecasts, interactive maps, severe weather alerts, and location-based recommendations.',
    technologies: ['React', 'OpenWeather API', 'Mapbox', 'PWA', 'Service Worker'],
    liveUrl: '#',
    githubUrl: '#',
    icon: 'fas fa-cloud-sun',
    category: 'Utility',
    year: '2023',
    status: 'Completed'
  },
  {
    id: '11',
    title: 'Blog CMS Platform',
    description: 'Headless content management system with markdown support, SEO optimization, comment system, and multi-author collaboration.',
    technologies: ['Next.js', 'Sanity', 'TypeScript', 'Tailwind', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
    icon: 'fas fa-blog',
    category: 'CMS',
    year: '2022',
    status: 'Completed'
  },
  {
    id: '12',
    title: 'Real Estate Platform',
    description: 'Property listing and management platform with advanced search, virtual tours, mortgage calculator, and agent dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Cloudinary', 'Mapbox', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    icon: 'fas fa-home',
    category: 'Real Estate',
    year: '2022',
    status: 'Completed'
  }
];

export const projectCategories = [
  'All',
  'Full Stack',
  'SaaS',
  'AI/ML',
  'Mobile',
  'FinTech',
  'EdTech',
  'Business',
  'Utility',
  'CMS',
  'Real Estate',
  'Data Visualization'
];
