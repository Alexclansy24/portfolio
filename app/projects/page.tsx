'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { allProjects, projectCategories } from '@/app/data/projects';
import ProjectPopup from '@/app/components/ui/ProjectPopup';
import type { Project } from '@/app/types';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let filtered = allProjects;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, searchTerm]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors"
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-arrow-left"></i>
                <span className="font-medium">Back to Portfolio</span>
              </motion.button>

              <motion.div 
                className="font-heading text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                All Projects
              </motion.div>
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
              <h1 className="font-heading text-6xl lg:text-8xl font-bold text-primary-500/10 leading-none">
                PROJECTS
              </h1>
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-heading text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                My Work Collection
              </h2>
            </div>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of {allProjects.length} projects spanning various technologies and industries. 
              Click on any project to see detailed information.
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            className="mb-12 bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-slate-200/50"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-slate-400"></i>
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border-2 border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-primary-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {projectCategories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                  {category !== 'All' && (
                    <span className="ml-2 text-xs opacity-70">
                      ({allProjects.filter(p => p.category === category).length})
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-slate-200/50 transition-all duration-500 cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleProjectClick(project)}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Project Header */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-600 overflow-hidden">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 2px, transparent 2px),
                                         radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 2px, transparent 2px)`,
                        backgroundSize: '30px 30px'
                      }}></div>
                    </div>

                    {/* Project Icon */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                      <motion.div
                        className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <i className={`${project.icon} text-3xl text-white`}></i>
                      </motion.div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status || 'Completed')}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-xl text-white rounded-full text-xs font-medium">
                        {project.year}
                      </span>
                    </div>

                    {/* Click Indicator */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <motion.div
                        className="px-4 py-2 bg-white/90 text-slate-800 rounded-full font-medium"
                        initial={{ scale: 0.8, y: 20 }}
                        whileHover={{ scale: 1, y: 0 }}
                      >
                        Click for details
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold text-slate-800 font-heading group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      {project.category && (
                        <span className="px-2 py-1 bg-primary-50 text-primary-600 rounded-lg text-xs font-medium whitespace-nowrap">
                          {project.category}
                        </span>
                      )}
                    </div>

                    <p className="text-slate-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded-lg text-xs font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-search text-3xl text-slate-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-700 mb-3">No projects found</h3>
              <p className="text-slate-500 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <motion.button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}

          {/* Back to Top Button */}
          <motion.button
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full shadow-xl flex items-center justify-center z-20"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-arrow-up"></i>
          </motion.button>
        </div>
      </div>

      {/* Project Popup */}
      <ProjectPopup 
        project={selectedProject}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
};

export default ProjectsPage;
