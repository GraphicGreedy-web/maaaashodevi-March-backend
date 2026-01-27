import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Heart,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { blogPosts, BlogPost as BlogPostType } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the post with the matching slug
    const foundPost = blogPosts.find((p) => p.slug === slug);

    if (foundPost) {
      setPost(foundPost);

      // Find related posts (same category, excluding current post)
      const related = blogPosts
        .filter(
          (p) => p.category === foundPost.category && p.id !== foundPost.id
        )
        .slice(0, 3);

      setRelatedPosts(related);
    }

    setIsLoading(false);

    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-6">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/blog"
          className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
        >
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>

          {/* Hero Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="relative h-96">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </div>
            </div>
            <div className="p-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {post.title}
              </motion.h1>

              <div className="flex flex-wrap items-center text-gray-500 mb-6">
                <span className="flex items-center mr-6 mb-2">
                  <Calendar size={16} className="mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center mr-6 mb-2">
                  <User size={16} className="mr-1" />
                  {post.author}
                </span>
                <span className="flex items-center mb-2">
                  <Clock size={16} className="mr-1" />
                  {post.readTime}
                </span>
              </div>

              <div className="flex space-x-4 mb-8">
                <button className="flex items-center text-gray-500 hover:text-primary transition-colors">
                  <Share2 size={18} className="mr-1" />
                  Share
                </button>
                <button className="flex items-center text-gray-500 hover:text-primary transition-colors">
                  <Bookmark size={18} className="mr-1" />
                  Save
                </button>
                <button className="flex items-center text-gray-500 hover:text-primary transition-colors">
                  <Heart size={18} className="mr-1" />
                  Like
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>

                {/* Author Bio */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary text-2xl font-bold mr-4">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        About {post.author}
                      </h3>
                      <p className="text-gray-600">
                        {post.author} is an experienced travel writer
                        specializing in spiritual journeys across India. With a
                        deep understanding of Hindu traditions and sacred sites,
                        they bring authentic insights to their writing about
                        pilgrimage destinations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Spirituality
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    India
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Travel
                  </span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Posts */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex items-start">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <Link
                            to={`/blog/${relatedPost.slug}`}
                            className="font-medium hover:text-primary transition-colors line-clamp-2"
                          >
                            {relatedPost.title}
                          </Link>
                          <p className="text-sm text-gray-500 mt-1">
                            {relatedPost.date}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">No related articles found.</p>
                  )}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/blog"
                      className="flex justify-between items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <span>All</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {blogPosts.length}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="flex justify-between items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <span>Destinations</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {
                          blogPosts.filter((p) => p.category === 'Destinations')
                            .length
                        }
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="flex justify-between items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <span>Travel Tips</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {
                          blogPosts.filter((p) => p.category === 'Travel Tips')
                            .length
                        }
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="flex justify-between items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <span>Mythology</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {
                          blogPosts.filter((p) => p.category === 'Mythology')
                            .length
                        }
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="flex justify-between items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <span>Personal Stories</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {
                          blogPosts.filter(
                            (p) => p.category === 'Personal Stories'
                          ).length
                        }
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="flex justify-between items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <span>Culture</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {
                          blogPosts.filter((p) => p.category === 'Culture')
                            .length
                        }
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="flex justify-between items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <span>Festivals</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {
                          blogPosts.filter((p) => p.category === 'Festivals')
                            .length
                        }
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-primary/5 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-600 mb-4">
                  Get the latest updates on spiritual journeys and travel tips
                  delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 rounded-lg transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 text-center text-white mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience These Sacred Journeys?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Turn the stories you've read into your own spiritual adventure.
              Contact us to plan your next pilgrimage.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-white/90 font-medium py-3 px-8 rounded-full transition-all duration-300 inline-block"
            >
              Plan Your Journey
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogPost;
