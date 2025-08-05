'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';
import type { Skill } from '@/app/types';

const AboutSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, years: 0, clients: 0 });

  const skills: Skill[] = [
    { name: 'Next.js', category: 'Framework' },
    { name: 'Express.js', category: 'Framework' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'MySql', category: 'Database' },
    { name: 'Git', category: 'Tools' },
    { name: 'Figma', category: 'Tools' },
  ];

  const skillCategories = ['Framework', 'Frontend', 'Backend', 'Tools', 'Database'] as const;
  const stats = useMemo(() => [
    { label: 'Projects', value: 3, key: 'projects' as keyof typeof animatedStats },
    { label: 'Years', value: 1, key: 'years' as keyof typeof animatedStats },
    { label: 'Clients', value: 2, key: 'clients' as keyof typeof animatedStats },
  ], []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach(stat => {
        const duration = 2000;
        const increment = stat.value / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }));
        }, 16);
      });
    }
  },[isVisible, stats]);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Artistic Heading */}
            <motion.div
              className="relative mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="relative font-heading text-6xl lg:text-8xl font-bold text-primary-500/5 leading-none">
                About
              </h2>
              <h3 className="absolute bottom-0 left-0 font-heading text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                My Journey
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-6 text-lg text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>Dedicated Problem Solver and Digital Innovator with a proven commitment to transforming complex challenges into elegant, user-centered solutions. Currently advancing expertise through formal education while building a track record of delivering reliable, high-quality digital experiences that exceed expectations.</p>
                <h2><b>Reliability First:</b></h2> 
                <p>Consistently deliver projects on time with meticulous attention to detail and long-term maintainability</p>
                <h2><b>User-Centered Thinking:</b></h2>
                <p>Prioritize genuine user needs and experiences over technical complexity, ensuring solutions that truly serve their intended purpose</p>
                <h2><b>Continuous Growth:</b></h2>
                <p>Embrace challenges as opportunities to expand capabilities and deliver increasingly sophisticated solutions</p>
                <h2><b>Collaborative Spirit:</b></h2>
                <p>Foster trust through transparent communication, active listening, and a genuine commitment to shared success</p>
                <h2><b>What Sets Me Apart:</b></h2>
                <p>I believe technology should empower, not complicate. My approach combines analytical thinking with creative problem-solving to build solutions that not only work flawlessly today but adapt and scale for tomorrow&rsquo;s needs. Whether developing comprehensive management systems or crafting intuitive user interfaces, I bring the same unwavering dedication to excellence and user satisfaction.</p>


            </motion.div>

            {/* Skills */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {skillCategories.map((category, categoryIndex) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-xl font-semibold text-slate-800">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, skillIndex) => (
                        <motion.span
                          key={skill.name}
                          className="px-4 py-2 bg-white rounded-full text-slate-600 font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-default hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 hover:text-white hover:-translate-y-1"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Stats Card */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl sticky top-24 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-4xl lg:text-5xl font-bold font-heading bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                    {animatedStats[stat.key as keyof typeof animatedStats]}+
                  </div>
                  <div className="text-slate-500 font-medium mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
