import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = process.cwd();
const distDir = resolve(projectRoot, "dist");
const sitemapPath = resolve(distDir, "sitemap.xml");
const sourceRobotsPath = resolve(projectRoot, "public", "robots.txt");
const distRobotsPath = resolve(distDir, "robots.txt");
const nonContentUrlPattern =
  /https:\/\/maaaashodevidharmayatra\.in\/google[a-z0-9-]*($|\.html$)/i;

if (existsSync(sitemapPath)) {
  const sitemapXml = readFileSync(sitemapPath, "utf8");
  const seen = new Set();

  const dedupedXml = sitemapXml.replace(/<url>([\s\S]*?)<\/url>/g, (match) => {
    const locMatch = match.match(/<loc>(.*?)<\/loc>/);

    if (!locMatch) {
      return match;
    }

    const loc = locMatch[1];

    if (seen.has(loc) || nonContentUrlPattern.test(loc)) {
      return "";
    }

    seen.add(loc);
    return match;
  });

  writeFileSync(sitemapPath, dedupedXml, "utf8");
}

if (existsSync(sourceRobotsPath)) {
  copyFileSync(sourceRobotsPath, distRobotsPath);
}
