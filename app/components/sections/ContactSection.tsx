'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';
import type { ContactForm, Notification } from '@/app/types';

const ContactSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showNotification = (message: string, type: Notification['type']) => {
    const id = Date.now().toString();
    setNotification({ id, message, type });
    
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showNotification('Please fill in all fields', 'error');
      return;
    }

    if (!validateEmail(formData.email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
        console.error('Form submission error:', err);
      showNotification('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: 'fab fa-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/rakesh-paramanick-551a78229/' },
    { icon: 'fab fa-github', label: 'GitHub', url: 'https://github.com/Alexclansy24' },
    { icon: 'fab fa-twitter', label: 'Twitter', url: 'https://x.com/syncwithRakesh' },
  ];

  return (
    <>
      <section ref={ref as React.RefObject<HTMLElement>} id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Artistic Heading */}
              <div className="relative mb-8">
                <h2 className="relative font-heading text-6xl lg:text-7xl font-bold text-primary-500/5 leading-none">
                  Connect
                </h2>
                <h3 className="absolute bottom-0 left-0 font-heading text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                  Let&apos;s Create
                </h3>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                Ready to bring your ideas to life? Let&apos;s collaborate on something amazing.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                {[
                  { icon: 'fas fa-envelope', label: 'Email', value: 'rakeshparamanick24@gmail.com' },
                  { icon: 'fas fa-phone', label: 'Phone', value: '+91-9763348661' },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    className="flex items-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                      <i className={contact.icon}></i>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-medium">{contact.label}</div>
                      <div className="text-lg text-slate-800 font-semibold">{contact.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target='_blank'
                    className="flex items-center gap-3 px-4 py-3 bg-white text-slate-600 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 hover:text-white group"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-primary-500 transition-all duration-300 peer"
                    required
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      formData.name 
                        ? 'top-2 text-xs text-primary-600 font-medium' 
                        : 'top-4 text-slate-500'
                    }`}
                  >
                    Your Name
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-primary-500 transition-all duration-300"
                    required
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      formData.email 
                        ? 'top-2 text-xs text-primary-600 font-medium' 
                        : 'top-4 text-slate-500'
                    }`}
                  >
                    Email Address
                  </label>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-primary-500 transition-all duration-300 resize-vertical"
                    required
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      formData.message 
                        ? 'top-2 text-xs text-primary-600 font-medium' 
                        : 'top-4 text-slate-500'
                    }`}
                  >
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-secondary-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notification */}
      {notification && (
        <motion.div
          className={`fixed top-25 right-6 p-4 rounded-2xl shadow-lg z-50 max-w-sm ${
            notification.type === 'success' 
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
              : notification.type === 'error'
              ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
              : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
          }`}
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <i className={`fas ${
              notification.type === 'success' ? 'fa-check-circle' :
              notification.type === 'error' ? 'fa-exclamation-circle' :
              'fa-info-circle'
            }`}></i>
            <span className="font-medium">{notification.message}</span>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ContactSection;
