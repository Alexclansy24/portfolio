'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useParams } from 'next/navigation';
import { allBlogs } from '@/app/data/blogs';
import type { BlogPost } from '@/app/types';

const SingleBlogPage: React.FC = () => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const blogId = params?.id as string;
    const foundBlog = allBlogs.find(b => b.id === blogId);
    
    if (foundBlog) {
      setBlog(foundBlog);
      setIsLoaded(true);
    } else {
      router.push('/blogs');
    }
  }, [params?.id, router]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
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

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50"
        style={{ width: `${readingProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${readingProgress}%` }}
      />

      {/* Artistic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="font-medium">Back to Blogs</span>
            </motion.button>

            <div className="flex items-center gap-4">
              <motion.button
                className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <i className="fas fa-arrow-up"></i>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Category Badge */}
          <motion.div
            className="inline-flex items-center gap-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryGradient(blog.category)} rounded-2xl flex items-center justify-center`}>
              <i className={`${blog.icon} text-2xl text-white`}></i>
            </div>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-xl text-white rounded-full font-medium">
              {blog.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-heading text-4xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {blog.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-white/70 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <i className="fas fa-calendar"></i>
              <span>{formatDate(blog.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock"></i>
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-user"></i>
              <span>{blog.author}</span>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {blog.tags.map((tag, index) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-white/10 backdrop-blur-xl text-white/80 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                #{tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Blog Content */}
        <motion.article
          className="prose prose-lg prose-invert max-w-none"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div 
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 text-white leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: blog.content.replace(/\n/g, '<br/>').replace(/``````/g, '<pre class="bg-black/30 rounded-xl p-4 overflow-x-auto"><code class="text-green-400">$2</code></pre>').replace(/`([^`]+)`/g, '<code class="bg-black/30 px-2 py-1 rounded text-yellow-400">$1</code>').replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mb-6 mt-8">$1</h1>').replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mb-4 mt-6">$1</h2>').replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mb-3 mt-4">$1</h3>')
            }}
          />
        </motion.article>

        {/* Related Actions */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h3>
            <p className="text-white/70 mb-6">Share your thoughts or explore more content</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-share"></i>
                Share Article
              </motion.button>
              
              <motion.button
                onClick={() => router.push('/blogs')}
                className="px-6 py-3 bg-white/10 backdrop-blur-xl text-white rounded-xl font-medium flex items-center gap-2 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-list"></i>
                More Articles
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center z-20"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-arrow-up"></i>
      </motion.button>
    </div>
  );
};

export default SingleBlogPage;
