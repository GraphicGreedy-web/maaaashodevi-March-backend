import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedCard from '../components/AnimatedCard';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Destinations',
    'Travel Tips',
    'Personal Stories',
    'Culture',
    'Festivals'
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              Our <span className="text-primary">Blog</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Insights, stories, and guides to enhance your spiritual journey
            </motion.p>
          </div>

          {/* Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Post */}
          {activeCategory === 'All' && (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={blogPosts[0].image} 
                      alt="Featured Post" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="flex items-center mr-4">
                        <Calendar size={16} className="mr-1" />
                        {blogPosts[0].date}
                      </span>
                      <span className="flex items-center">
                        <User size={16} className="mr-1" />
                        {blogPosts[0].author}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
                    <p className="text-gray-600 mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <Link 
                      to={`/blog/${blogPosts[0].slug}`} 
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Read Full Article <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(activeCategory === 'All' ? 1 : 0).map((post, index) => (
              <AnimatedCard key={post.id} delay={index * 0.1}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="flex items-center mr-4">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-2">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="text-primary font-medium hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to experience these sacred journeys?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Turn the stories you've read into your own spiritual adventure. Contact us to plan your next pilgrimage.
            </p>
            <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
              Contact Us Today <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded-full bg-white text-gray-700 flex items-center justify-center hover:bg-gray-100">
                2
              </button>
              <button className="w-10 h-10 rounded-full bg-white text-gray-700 flex items-center justify-center hover:bg-gray-100">
                3
              </button>
              <button className="w-10 h-10 rounded-full bg-white text-gray-700 flex items-center justify-center hover:bg-gray-100">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;