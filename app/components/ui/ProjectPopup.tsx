'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/app/types';

interface ProjectPopupProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, isOpen, onClose }) => {
  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      // Calculate scrollbar width to prevent layout shift
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Store original values
      const originalStyle = window.getComputedStyle(document.body);
      const originalOverflow = originalStyle.overflow;
      const originalPaddingRight = originalStyle.paddingRight;
      
      // Apply styles to prevent background scroll
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${parseInt(originalPaddingRight) + scrollBarWidth}px`;
      
      // Cleanup function
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isOpen]);

  if (!project) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleProjectClick = (url: string, type: 'live' | 'github') => {
    console.log(`Opening ${type} demo for ${url}`);
    // In real implementation, you would open the actual URL
    // window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto overflow-x-hidden p-4 min-h-screen"
          style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          {/* Enhanced Backdrop */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/50 to-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Popup Content with Fixed Scroll */}
          <motion.div
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            style={{ 
              maxHeight: 'calc(100vh - 4rem)',
              minHeight: 'min-content'
            }}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed Position */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors shadow-lg"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-times text-lg"></i>
            </motion.button>

            {/* Scrollable Content Area */}
            <div 
              className="overflow-y-auto overflow-x-hidden"
              style={{ 
                maxHeight: 'calc(100vh - 4rem)',
                scrollbarWidth: 'thin',
                scrollbarColor: '#cbd5e1 #f1f5f9'
              }}
            >
              {/* Header Section - Fixed at top */}
              <div className="relative h-80 bg-gradient-to-br from-primary-500 to-primary-600 overflow-hidden flex-shrink-0">
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 2px, transparent 2px),
                      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 2px, transparent 2px),
                      radial-gradient(circle at 40% 60%, rgba(255,255,255,0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px, 60px 60px, 20px 20px'
                  }}></div>
                </div>

                {/* Floating Animated Elements */}
                <motion.div
                  className="absolute top-8 left-8 w-16 h-16 border-2 border-white/30 rounded-xl"
                  animate={{ 
                    rotate: [12, 25, 12],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-8 right-20 w-12 h-12 bg-white/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/4 w-8 h-8 border border-white/40 rotate-45"
                  animate={{ 
                    rotate: [45, 135, 45],
                    y: [-10, 10, -10]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                {/* Project Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <i className={`${project.icon} text-6xl text-white drop-shadow-lg`}></i>
                  </motion.div>
                </div>

                {/* Badges */}
                {project.category && (
                  <div className="absolute top-6 left-6">
                    <motion.span
                      className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white rounded-full font-medium border border-white/30"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>
                )}

                {project.status && (
                  <div className="absolute bottom-6 left-6">
                    <motion.span
                      className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-xl ${
                        project.status === 'Completed' 
                          ? 'bg-green-100/90 text-green-800 border border-green-200/50' 
                          : project.status === 'In Progress'
                          ? 'bg-blue-100/90 text-blue-800 border border-blue-200/50'
                          : 'bg-yellow-100/90 text-yellow-800 border border-yellow-200/50'
                      }`}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {project.status}
                    </motion.span>
                  </div>
                )}

                {project.year && (
                  <div className="absolute bottom-6 right-6">
                    <motion.span
                      className="px-3 py-1 bg-black/20 backdrop-blur-xl text-white rounded-full text-sm font-medium border border-white/20"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {project.year}
                    </motion.span>
                  </div>
                )}
              </div>

              {/* Scrollable Content Section */}
              <div className="p-8 space-y-8">
                {/* Title and Description */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="text-4xl font-bold text-slate-800 font-heading mb-4 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                {/* Technologies Grid */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                    <i className="fas fa-code text-primary-500"></i>
                    Technologies Used
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        className="group relative bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-4 text-center hover:from-primary-50 hover:to-primary-100 transition-all duration-300 border border-slate-200/50 hover:border-primary-200/50"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow">
                          <i className={`fab fa-${tech.toLowerCase().replace('.', '-').replace('js', 'js-square')} text-white text-lg`}></i>
                        </div>
                        <span className="font-medium text-slate-700 group-hover:text-primary-700 transition-colors text-sm">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Features Section */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200/50"
                >
                  <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                    <i className="fas fa-star text-yellow-500"></i>
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'User Authentication & Authorization',
                      'Responsive Design & Mobile Optimization',
                      'Real-time Data Processing',
                      'API Integration & Third-party Services',
                      'Database Management & Optimization',
                      'Security Implementation & Best Practices'
                    ].map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-check text-white text-xs"></i>
                        </div>
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Project Stats */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="grid grid-cols-3 gap-6"
                >
                  <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200/50">
                    <div className="text-3xl font-bold text-blue-600 font-heading mb-2">95%</div>
                    <div className="text-blue-700 text-sm font-medium">Performance Score</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border border-green-200/50">
                    <div className="text-3xl font-bold text-green-600 font-heading mb-2">100%</div>
                    <div className="text-green-700 text-sm font-medium">Accessibility</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200/50">
                    <div className="text-3xl font-bold text-purple-600 font-heading mb-2">A+</div>
                    <div className="text-purple-700 text-sm font-medium">Security Rating</div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4 pt-6 sticky bottom-0 bg-white/80 backdrop-blur-xl p-4 rounded-2xl border border-slate-200/50"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.button
                    onClick={() => handleProjectClick(project.liveUrl || '#', 'live')}
                    className="flex-1 min-w-[200px] flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    <span>View Live Demo</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={() => handleProjectClick(project.githubUrl || '#', 'github')}
                    className="flex-1 min-w-[200px] flex items-center justify-center gap-3 py-4 px-6 bg-slate-800 text-white rounded-2xl font-semibold text-lg hover:bg-slate-700 transition-colors shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fab fa-github text-xl"></i>
                    <span>View Source Code</span>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectPopup;
