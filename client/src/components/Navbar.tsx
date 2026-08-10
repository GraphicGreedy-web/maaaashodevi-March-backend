import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Upcoming Plans', path: '/upcoming-plans' },
    { name: 'Contact', path: '/contact' },
  ];

  const openRatingForm = () => {
    setIsOpen(false);

    if (location.pathname === '/') {
      window.dispatchEvent(new CustomEvent('open-rating-form'));
      return;
    }

    navigate('/#rating-form');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 ${
          scrolled ? 'nav-blur shadow-lg' : 'bg-transparent'
        } transition-all duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary"
            >
              Maa Aasho Devi
              <span className="block text-sm font-normal text-secondary">Dharma <i>Yatra</i></span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-[-5px] left-0 right-0  h-[3px] bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            <button
              type="button"
              onClick={openRatingForm}
              className="relative font-medium text-gray-700 transition-colors duration-300 hover:text-primary"
            >
              Rating
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg rounded-b-lg mt-4 overflow-hidden"
            >
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-6 py-3 ${
                      isActive(link.path)
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  type="button"
                  onClick={openRatingForm}
                  className="px-6 py-3 text-left text-gray-700 hover:bg-gray-100"
                >
                  Rating
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Spacer for fixed navbar */}
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;
