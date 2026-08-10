import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import { blogPosts } from "./src/data/blogPosts";
import { packagePages } from "./src/data/packagePages";
import { servicePages } from "./src/data/servicePages";

const staticRoutes = [
  "/about",
  "/gallery",
  "/blog",
  "/upcoming-plans",
  "/contact",
  "/sitemap",
  "/privacy-policy",
  "/terms-of-service",
];

const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
const packageRoutes = packagePages.map((pkg) => `/${pkg.slug}`);
const serviceRoutes = servicePages.map((service) => `/${service.slug}`);

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://maaaashodevidharmayatra.in",
      dynamicRoutes: [...staticRoutes, ...blogRoutes, ...packageRoutes, ...serviceRoutes],
    }),
  ],
});
