import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Phone, MapPin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-4">Maa Aasho Devi</h3>
            <p>Dharma <i>Yatra</i></p>
            <p className="text-gray-400">
              Connecting devotees with sacred destinations across India. Experience spiritual journeys with comfort and care.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://wa.me/message/AGFJTGPLJOE7N1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors"
              >
                <ExternalLink size={20} />
                <span className="sr-only">JustDial</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-primary transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/upcoming-plans" className="text-gray-400 hover:text-primary transition-colors">Upcoming Plans</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact us</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations/vrindavan" className="text-gray-400 hover:text-primary transition-colors">Vrindavan</Link>
              </li>
              <li>
                <Link to="/destinations/ujjain" className="text-gray-400 hover:text-primary transition-colors">Ujjain</Link>
              </li>
              <li>
                <Link to="/destinations/uttarakhand-char-dham" className="text-gray-400 hover:text-primary transition-colors">Uttarakhand Char Dham <i>Yatra</i></Link>
              </li>
              <li>
                <Link to="/destinations/dakshin-yatra" className="text-gray-400 hover:text-primary transition-colors">Dakshin <i>Yatra</i></Link>
              </li>
              <li>
                <Link to="/destinations/nepal" className="text-gray-400 hover:text-primary transition-colors">Nepal</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary mt-1" />
                <p className="text-gray-400">Om Shiva Nagar, Lal Ghati, Bhopal (MP)</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-primary" />
                <p className="text-gray-400">+91 9131714171</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-1 text-primary" />
                <p className="text-gray-400"> Maaaashodevidharmayatra@gmail.com</p>
              </div>
              <Link to="/contact" className="inline-block mt-2 bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-full transition-all duration-300">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Maa Asho Devi Dharam <i>Yatra</i>. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-500 text-sm hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;