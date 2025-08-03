'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavItem } from '@/app/types';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = useMemo(() => [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#blogs', label: 'Blogs' },
    { href: '#contact', label: 'Contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg' 
          : 'bg-white/70 backdrop-blur-md'
      }`}
      style={{ maxWidth: '100vw', overflowX: 'hidden' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Fixed width container */}
      <div className="navbar-container-fixed">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - Constrained width */}
          <motion.div 
            className="font-heading text-lg sm:text-xl lg:text-2xl font-bold flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-slate-800">Your</span>
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Name
            </span>
          </motion.div>

          {/* Desktop Menu - Hidden overflow */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-shrink-0">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 font-medium text-sm xl:text-base transition-colors duration-300 whitespace-nowrap ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary-600'
                    : 'text-slate-600 hover:text-primary-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button - Fixed size */}
          <button
            className="lg:hidden flex flex-col gap-1 p-2 w-10 h-10 items-center justify-center flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ minWidth: '40px', minHeight: '40px' }}
          >
            <motion.span
              className="w-5 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 block"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 block"
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 block"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full width contained */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50"
            style={{ maxWidth: '100vw', overflowX: 'hidden' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="navbar-container-fixed py-4">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-3 px-4 text-slate-600 hover:text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-base">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
