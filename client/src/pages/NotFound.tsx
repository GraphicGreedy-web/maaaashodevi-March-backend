import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Page Not Found | Maa Asho Devi Dharam Yatra"
        description="The page you are looking for could not be found."
        path="/404"
        robots="noindex, nofollow"
      />
      <div className="min-h-screen bg-gray-50 px-4 py-24">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-10 text-center shadow-lg">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            404
          </p>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Page not found
          </h1>
          <p className="mb-8 text-gray-600">
            The page may have moved, the link may be outdated, or the URL may be incorrect.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="rounded-full bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-primary/90"
            >
              Go to homepage
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-primary px-6 py-3 font-medium text-primary transition-all duration-300 hover:bg-primary/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
