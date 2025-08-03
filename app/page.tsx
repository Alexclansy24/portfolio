'use client';

import BackgroundShapes from './components/ui/BackgroundShapes';
import Navigation from './components/layout/Navigation';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import BlogSection from './components/sections/BlogSection';

export default function Home() {
  return (
    <main className="relative">
      <BackgroundShapes />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-slate-300">
            &copy; 2025 Your Name. Crafted with passion.
          </p>
        </div>
        
        {/* Footer Art Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-24 h-24 bg-white rounded-full top-4 left-[10%] animate-float"></div>
          <div className="absolute w-16 h-16 bg-white rounded-full top-8 right-[15%] animate-float" style={{ animationDelay: '-5s' }}></div>
          <div className="absolute w-20 h-20 bg-white rounded-full bottom-6 left-[80%] animate-float" style={{ animationDelay: '-10s' }}></div>
        </div>
      </footer>
    </main>
  );
}
