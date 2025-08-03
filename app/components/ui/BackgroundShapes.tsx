'use client';

import { motion } from 'framer-motion';

const BackgroundShapes: React.FC = () => {
  const shapes = [
    {
      size: 'w-[300px] h-[300px]',
      position: 'top-[10%] left-[-10%]',
      gradient: 'bg-gradient-to-br from-primary-500 to-primary-600',
      delay: -5,
    },
    {
      size: 'w-[200px] h-[200px]',
      position: 'top-[60%] right-[-5%]',
      gradient: 'bg-gradient-to-br from-secondary-500 to-secondary-600',
      delay: -10,
    },
    {
      size: 'w-[150px] h-[150px]',
      position: 'bottom-[20%] left-[10%]',
      gradient: 'bg-gradient-to-br from-accent-500 to-accent-600',
      delay: -15,
    },
    {
      size: 'w-[100px] h-[100px]',
      position: 'top-[30%] right-[20%]',
      gradient: 'bg-gradient-to-br from-slate-600 to-slate-800',
      delay: -2,
    },
  ];

  const floatingElements = Array.from({ length: 3 }, (_, i) => ({
    left: `${20 + i * 30}%`,
    delay: -(3 + i * 4),
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      {/* Animated Shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full opacity-10 ${shape.size} ${shape.position} ${shape.gradient}`}
          animate={{
            x: [0, 30, -20, -30, 0],
            y: [0, -30, 20, -10, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}

      {/* Floating Particles */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
          style={{ left: element.left }}
          animate={{
            y: ['100vh', '-10vh'],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundShapes;
