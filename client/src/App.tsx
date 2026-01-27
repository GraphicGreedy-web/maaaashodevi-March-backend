import React, { useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; //
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import UpcomingPlans from './pages/UpcomingPlans';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            {/* <a href="maaaashodevidharmayatra.in/about"> Abt </a> */}
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/upcoming-plans" element={<UpcomingPlans />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/destinations/:destination"
              element={<UpcomingPlans />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* Add more routes as needed */}
            </Routes> 
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
