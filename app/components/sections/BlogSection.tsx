'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';
import { allBlogs } from '@/app/data/blogs';

const BlogSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const router = useRouter();

  // Get featured blogs
  const featuredBlogs = allBlogs.filter(blog => blog.featured).slice(0, 6);

  const navigateToAllBlogs = () => {
    router.push('/blogs');
  };

  const navigateToBlog = (blogId: string) => {
    router.push(`/blogs/${blogId}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Frontend': 'from-blue-500 to-blue-600',
      'Backend': 'from-green-500 to-green-600',
      'DevOps': 'from-purple-500 to-purple-600',
      'Architecture': 'from-orange-500 to-orange-600',
      'Security': 'from-red-500 to-red-600',
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>} 
      id="blogs" 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block mb-6">
            <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-200/20 leading-none select-none">
              INSIGHTS
            </h2>
            <h3 className="absolute inset-0 flex items-center justify-center font-heading text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              Latest Blogs
            </h3>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover insights, tutorials, and thoughts on modern web development
          </p>
        </motion.div>

        {/* Blog Grid - Fixed Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {featuredBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(blog.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => navigateToBlog(blog.id)}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Blog Header */}
              <div className={`relative h-48 bg-gradient-to-br ${getCategoryColor(blog.category)} overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  ></div>
                </div>

                {/* Blog Icon */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <motion.div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={`${blog.icon} text-2xl text-white`}></i>
                  </motion.div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 text-slate-700 rounded-full text-xs font-medium shadow-sm">
                    {blog.category}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-black/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                    {formatDate(blog.date)}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col h-auto">
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 font-heading leading-tight mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium hover:bg-slate-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded-md text-xs font-medium">
                      +{blog.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-slate-500 text-sm flex items-center gap-1">
                    <i className="fas fa-clock text-xs"></i>
                    {blog.readTime}
                  </span>
                  
                  <motion.div
                    className="flex items-center gap-2 text-slate-600 group-hover:text-blue-600 transition-colors text-sm font-medium"
                    animate={hoveredCard === blog.id ? { x: [0, 3, 0] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <span>Read More</span>
                    <i className="fas fa-arrow-right text-xs"></i>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={navigateToAllBlogs}
            className="group relative px-8 sm:px-12 py-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-full font-semibold text-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore All Articles
              <motion.i 
                className="fas fa-arrow-right"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </span>
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>

          {/* Blog Stats */}
          <motion.div
            className="flex justify-center items-center gap-8 mt-8 text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 font-heading">{allBlogs.length}+</div>
              <div className="text-sm">Articles</div>
            </div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 font-heading">5</div>
              <div className="text-sm">Categories</div>
            </div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 font-heading">∞</div>
              <div className="text-sm">Ideas</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
