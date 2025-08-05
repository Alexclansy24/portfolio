'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Creative Full Stack Developer';

  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const orbitItems = [
    { icon: 'fab fa-react', delay: 0, color: 'text-blue-500' },
    { icon: 'fab fa-node-js', delay: 3, color: 'text-green-500' },
    { icon: 'fas fa-database', delay: 6, color: 'text-orange-500' },
    { icon: 'fab fa-js', delay: 9, color: 'text-yellow-500' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-slate-50/80 to-slate-100/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-25 md:mt-0">
          {/* Text Content */}
          <div className="space-y-8 z-10 relative">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="font-heading text-4xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                
                <span className="block bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
                <span className="block text-slate-600 text-3xl lg:text-4xl">Developer</span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting digital experiences that blend art with technology
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Explore Work Button */}
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl font-semibold overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work
                  <motion.i 
                    className="fas fa-arrow-right"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-secondary-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Let's Talk Button - Fixed */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-600 rounded-2xl font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white  transition-colors duration-300">
                   Let&apos;s Talk
                  <motion.i 
                    className="fas fa-comment-dots"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600"
                  initial={{ scale: 0, borderRadius: '50%' }}
                  whileHover={{ 
                    scale: 1, 
                    borderRadius: '1rem',
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  style={{ transformOrigin: 'center' }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Creative Avatar - Fixed Orbiting */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-primary-500 to-primary-600 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-white rounded-full" />
              </motion.div>

              {/* Avatar Content */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 lg:w-60 lg:h-60 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-6xl lg:text-7xl shadow-2xl z-10">
                <motion.i 
                  className="fas fa-code"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Fixed Orbiting Elements */}
              <div className="absolute inset-0 w-full h-full">
                {orbitItems.map((item, index) => {
                  const angle = (index * 90) * (Math.PI / 180); // 90 degrees apart
                  const radius = 180; // Distance from center
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute w-16 h-16 lg:w-18 lg:h-18 bg-white rounded-full shadow-xl flex items-center justify-center text-2xl border-2 border-slate-100"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: '0 0',
                      }}
                      animate={{
                        rotate: 360,
                        x: Math.cos(angle) * radius,
                        y: Math.sin(angle) * radius,
                      }}
                      transition={{
                        rotate: {
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                          delay: item.delay,
                        },
                        x: {
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                          delay: item.delay,
                        },
                        y: {
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                          delay: item.delay,
                        }
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        zIndex: 20
                      }}
                    >
                      <motion.i
                        className={`${item.icon} ${item.color}`}
                        animate={{ 
                          rotate: -360,
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          rotate: {
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                            delay: item.delay,
                          },
                          scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: item.delay * 0.5,
                          }
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Additional Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-60"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    x: [-5, 5, -5],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 text-slate-500 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={() => scrollToSection('about')}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-0.5 h-10 bg-gradient-to-b from-primary-500 to-transparent"
            animate={{
              scaleY: [0.5, 1, 0.5],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="text-sm font-medium">Scroll</span>
          <motion.i 
            className="fas fa-chevron-down"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
