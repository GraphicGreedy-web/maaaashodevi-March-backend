import React, { Suspense, lazy, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { trackVisit } from "./utils/visitTracker";
import { packagePages } from "./data/packagePages";
import { servicePages } from "./data/servicePages";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const UpcomingPlans = lazy(() => import("./pages/UpcomingPlans"));
const PackagePage = lazy(() => import("./pages/PackagePage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));
const HtmlSitemap = lazy(() => import("./pages/HtmlSitemap"));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const currentPath = `${location.pathname}${location.search}`;
    void trackVisit(currentPath);
  }, [location.pathname, location.search]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Suspense
          fallback={
            <div className="flex min-h-[50vh] items-center justify-center px-4">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
            </div>
          }
        >
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            {/* <a href="maaaashodevidharmayatra.in/about"> Abt </a> */}
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/upcoming-plans" element={<UpcomingPlans />} />
            {packagePages.map((pkg) => (
              <Route
                key={pkg.slug}
                path={`/${pkg.slug}`}
                element={<PackagePage packageSlug={pkg.slug} />}
              />
            ))}
            {servicePages.map((service) => (
              <Route
                key={service.slug}
                path={`/${service.slug}`}
                element={<ServicePage serviceSlug={service.slug} />}
              />
            ))}
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/destinations/:destination"
              element={<UpcomingPlans />}
            />
            <Route path="/sitemap" element={<HtmlSitemap />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
