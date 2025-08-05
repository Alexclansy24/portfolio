import type { Project } from '@/app/types';

export const allProjects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe','Bycrypt','jwt'],
      liveUrl: 'https://food-delivery-frontend-ihvh.onrender.com/',
      githubUrl: 'https://github.com/Alexclansy24/ecom',
      featured: true,
      icon: 'fas fa-shopping-cart',
      category: 'Full Stack',
      year: '2024',
      status: 'Completed'
    },
    {
      id: '2',
      title: 'Social Media App Design',
      description: 'Crafted a comprehensive social media application interface that prioritizes authentic human connection over digital noise. This design project demonstrates a deep understanding of how users naturally interact with social platforms, translating complex social dynamics into an intuitive, welcoming digital environment.',
      technologies: ['Figma'],
      liveUrl: 'https://www.behance.net/gallery/224371059/Social-media-app',    
      icon: 'fas fa-tasks',
      category: 'Design',
      year: '2025',
      status: 'Completed'
    },
    {
      id: '3',
      title: 'School Management System',
      description: 'Developed a comprehensive school management platform that addresses the real world challenges faced by educational institutions daily. This project represents a commitment to simplifying complex administrative processes while empowering educators to focus on what matters most student success and learning outcomes. Understanding Stakeholder Needs: Recognized that schools juggle multiple responsibilities simultaneously from tracking student progress to coordinating schedules and maintaining clear communication with parents Eliminating Administrative Burden: Created streamlined workflows that reduce time spent on repetitive tasks, allowing educators to dedicate more energy to teaching and student engagement',
      technologies: ['Next.js', 'Mongo', 'Express.js', 'Prisma', 'Tailwind CSS', 'Chart.js','Typescript'],
      featured: true,
      liveUrl: 'https://school-dashboard-ochre.vercel.app/',
      githubUrl: 'https://github.com/Alexclansy24/school-dashboard',
      icon: 'fas fa-chart-line',
      category: 'Full Stack',
      year: '2025',
      status: 'In Progress'
    },
  ];

export const projectCategories = [
  'All',
  'Full Stack',
  'SaaS',
  'AI/ML',
  'Mobile',
  'Design',
  'Data Visualization'
];
