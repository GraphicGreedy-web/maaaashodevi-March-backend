import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";
import { packagePages } from "../data/packagePages";

const staticPages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Gallery", path: "/gallery" },
  { title: "Blog", path: "/blog" },
  { title: "Upcoming Plans", path: "/upcoming-plans" },
  { title: "Contact", path: "/contact" },
  { title: "Privacy Policy", path: "/privacy-policy" },
  { title: "Terms of Service", path: "/terms-of-service" },
];

const HtmlSitemap: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="HTML Sitemap | Maa Aasho Devi Tours"
        description="Browse all important pages, pilgrimage package pages, and blog guides from Maa Aasho Devi Tours."
        path="/sitemap"
        keywords={[
          "maa aasho devi sitemap",
          "travel agency bhopal sitemap",
          "pilgrimage package pages",
          "blog guide index",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "HTML Sitemap",
          url: "https://maaaashodevidharmayatra.in/sitemap",
          description:
            "A crawlable list of important pages, package pages, and pilgrimage guides.",
        }}
      />

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h1 className="text-4xl font-bold text-gray-900">HTML Sitemap</h1>
            <p className="mt-4 max-w-3xl text-gray-600">
              Browse the main sections, destination package pages, and planning
              guides published on the site.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <section className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Core Pages</h2>
              <div className="mt-5 space-y-3">
                {staticPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="flex items-center justify-between rounded-2xl border border-gray-200 px-4 py-3 text-gray-700 transition-colors hover:border-primary hover:text-primary"
                  >
                    <span>{page.title}</span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Package Pages</h2>
              <div className="mt-5 space-y-3">
                {packagePages.map((pkg) => (
                  <Link
                    key={pkg.slug}
                    to={`/${pkg.slug}`}
                    className="block rounded-2xl border border-gray-200 px-4 py-4 transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    <h3 className="font-semibold text-gray-900">{pkg.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{pkg.summary}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Blog Guides</h2>
              <div className="mt-5 space-y-3">
                {blogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="block rounded-2xl border border-gray-200 px-4 py-4 transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    <h3 className="font-semibold text-gray-900">{post.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HtmlSitemap;
