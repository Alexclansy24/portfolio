'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';
import { useRouter } from 'next/navigation';
import ProjectPopup from '@/app/components/ui/ProjectPopup';
import type { Project } from '@/app/types';

const ProjectsSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const router = useRouter();

  const projects: Project[] = [
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
      category: 'Full Stack',
      year: '2025',
      status: 'Completed'
    },
    {
      id: '3',
      title: 'School Management System',
      description: 'Developed a comprehensive school management platform that addresses the real-world challenges faced by educational institutions daily. This project represents a commitment to simplifying complex administrative processes while empowering educators to focus on what matters most—student success and learning outcomes. Understanding Stakeholder Needs: Recognized that schools juggle multiple responsibilities simultaneously—from tracking student progress to coordinating schedules and maintaining clear communication with parents Eliminating Administrative Burden: Created streamlined workflows that reduce time spent on repetitive tasks, allowing educators to dedicate more energy to teaching and student engagement Building Trust Through Reliability: Designed robust systems for sensitive data like student records and attendance, ensuring information accuracy and security that parents and administrators can depend on',
      technologies: ['Next.js', 'Mongo', 'Express.js', 'Prisma', 'Tailwind CSS', 'Chart.js','Typescript'],
      liveUrl: 'https://school-dashboard-ochre.vercel.app/',
      githubUrl: 'https://github.com/Alexclansy24/school-dashboard',
      icon: 'fas fa-chart-line',
      category: 'Data Visualization, Full Stack',
      year: '2025',
      status: 'In Progress'
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  const navigateToAllProjects = () => {
    router.push('/projects');
  };

  return (
    <>
      <section ref={ref as React.RefObject<HTMLElement>} id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Artistic Heading */}
          <motion.div
            className="relative mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="relative font-heading text-6xl lg:text-8xl font-bold text-primary-500/5 leading-none">
              Work
            </h2>
            <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 font-heading text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Featured Projects
            </h3>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer ${
                  project.featured ? 'md:col-span-2 xl:col-span-2 xl:row-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleProjectClick(project)}
                whileHover={{ y: -10 }}
              >
                {/* Project Visual */}
                <div className={`relative bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white overflow-hidden ${
                  project.featured ? 'h-64 lg:h-80' : 'h-48'
                }`}>
                  <motion.i 
                    className={`${project.icon} text-6xl opacity-90`}
                    animate={hoveredCard === project.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Tech Overlay */}
                  <AnimatePresence>
                    {hoveredCard === project.id && (
                      <motion.div
                        className="absolute inset-0 bg-black/80 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center">
                          <motion.div
                            className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-full font-medium mb-4"
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                          >
                            Click to view details
                          </motion.div>
                          <div className="flex flex-wrap gap-2 justify-center px-4">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className="px-3 py-1 bg-white text-slate-800 rounded-full text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: techIndex * 0.1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8 space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-800 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* See All Projects Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={navigateToAllProjects}
              className="group relative px-12 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                See All Projects
                <motion.div
                  className="flex items-center"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <i className="fas fa-arrow-right"></i>
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-secondary-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Project Popup */}
      <ProjectPopup 
        project={selectedProject}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default ProjectsSection;
