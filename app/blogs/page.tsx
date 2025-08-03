'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { allBlogs } from '@/app/data/blogs';

const BlogsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCategoryGradient = (category: string) => {
    const gradients = {
      'Frontend': 'from-blue-500 to-purple-600',
      'Backend': 'from-green-500 to-teal-600',
      'DevOps': 'from-purple-500 to-pink-600',
      'Architecture': 'from-orange-500 to-red-600',
      'Security': 'from-red-500 to-rose-600',
    };
    return gradients[category as keyof typeof gradients] || 'from-gray-500 to-gray-600';
  };


  // Create artistic card layouts with different sizes and positions
  const getCardClass = (index: number) => {
    const patterns = [
      'col-span-1 row-span-1', // Regular
      'col-span-2 row-span-1', // Wide
      'col-span-1 row-span-2', // Tall
      'col-span-2 row-span-2', // Large
      'col-span-1 row-span-1', // Regular
      'col-span-1 row-span-1', // Regular
    ];
    return patterns[index % patterns.length];
  };

  const handleBlogClick = (blogId: string) => {
    router.push(`/blogs/${blogId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Artistic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, -80, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, delay: 10 }}
        />

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rotate-45 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rotate-12 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.button
              onClick={() => router.back()}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/40 transition-colors"
                whileHover={{ rotate: -180 }}
                transition={{ duration: 0.3 }}
              >
                <i className="fas fa-arrow-left"></i>
              </motion.div>
              <span className="font-medium">Back</span>
            </motion.button>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-heading text-2xl font-bold text-white">
                Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Thoughts</span>
              </h1>
              <p className="text-white/60 text-sm">A collection of insights & ideas</p>
            </motion.div>

            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Artistic Header */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Large Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="font-heading text-[12rem] lg:text-[16rem] font-black text-white/5 select-none leading-none">
              BLOG
            </h1>
          </div>

          {/* Floating Number */}
          <motion.div
            className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity }
            }}
          >
            {allBlogs.length}
          </motion.div>

          {/* Main Title */}
          <div className="relative z-10 space-y-6">
            <motion.h2 
              className="font-heading text-5xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Discover
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                My Thoughts
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Journey through my latest insights, tutorials, and deep dives into the world of technology and development
            </motion.p>
          </div>
        </motion.div>

        {/* Artistic Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {allBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${getCardClass(index)}`}
              initial={{ opacity: 0, y: 100, rotate: Math.random() * 10 - 5 }}
              animate={isLoaded ? { 
                opacity: 1, 
                y: 0, 
                rotate: 0 
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              onMouseEnter={() => setHoveredCard(blog.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleBlogClick(blog.id)}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(blog.category)} opacity-90`}>
                {/* Overlay Pattern */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 1px, transparent 1px),
                                   radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}></div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 border border-white/30 rotate-45"
                  animate={hoveredCard === blog.id ? { rotate: 225, scale: 1.2 } : { rotate: 45, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full"
                  animate={hoveredCard === blog.id ? { scale: [1, 1.5, 1] } : {}}
                  transition={{ duration: 1, repeat: hoveredCard === blog.id ? Infinity : 0 }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                {/* Header */}
                <div className="space-y-3">
                  {/* Icon and Category */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <i className={`${blog.icon} text-xl`}></i>
                    </motion.div>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                      {blog.category}
                    </span>
                  </div>

                  {/* Title */}
                  <motion.h3 
                    className="font-heading text-lg lg:text-xl font-bold leading-tight line-clamp-3"
                    animate={hoveredCard === blog.id ? { y: -5 } : { y: 0 }}
                  >
                    {blog.title}
                  </motion.h3>
                </div>

                {/* Footer */}
                <div className="space-y-4">
                  {/* Excerpt (only for larger cards) */}
                  {(getCardClass(index).includes('col-span-2') || getCardClass(index).includes('row-span-2')) && (
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                      {blog.excerpt}
                    </p>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-2 py-1 bg-black/20 backdrop-blur-sm rounded-lg text-xs"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.1) + (tagIndex * 0.05) }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <span>{formatDate(blog.date)}</span>
                    <span className="flex items-center gap-1">
                      <i className="fas fa-clock"></i>
                      {blog.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay with Read More */}
              <AnimatePresence>
                {hoveredCard === blog.id && (
                  <motion.div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[99]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
                      initial={{ scale: 0.8, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.8, y: 20 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBlogClick(blog.id);
                      }}
                    >
                      <span>Read More</span>
                      <i className="fas fa-arrow-right"></i>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>

        {/* No Results - if needed */}
        {allBlogs.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-search text-3xl text-slate-400"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">No blogs found</h3>
            <p className="text-white/60 mb-6">
              Something went wrong loading the blogs
            </p>
          </motion.div>
        )}

        {/* Floating Action Elements */}
        <div className="fixed bottom-8 right-8 space-y-4">
          {/* Back to Top */}
          <motion.button
            className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-arrow-up"></i>
          </motion.button>

          {/* Surprise Me Button */}
          <motion.button
            className="w-14 h-14 bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-full shadow-2xl flex items-center justify-center"
            onClick={() => {
              const randomBlog = allBlogs[Math.floor(Math.random() * allBlogs.length)];
              handleBlogClick(randomBlog.id);
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2 }}
            whileHover={{ 
              scale: 1.1,
              rotate: 180
            }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-random"></i>
          </motion.button>
        </div>

        {/* Artistic Footer Element */}
        <motion.div
          className="mt-32 text-center relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="relative inline-block">
            <motion.div
              className="w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl absolute -inset-4"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative bg-black/20 backdrop-blur-xl rounded-full p-8 border border-white/10">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                Stay Inspired
              </h3>
              <p className="text-white/60 text-sm">
                More thoughts coming soon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogsPage;
