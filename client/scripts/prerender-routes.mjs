import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { spawn } from "node:child_process";
import http from "node:http";

const projectRoot = process.cwd();
const distDir = resolve(projectRoot, "dist");
const sitemapPath = resolve(distDir, "sitemap.xml");
const previewPort = 4173;
const previewHost = "127.0.0.1";
const baseUrl = `http://${previewHost}:${previewPort}`;

const browserCandidates = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
];

const wait = (ms) => new Promise((resolvePromise) => setTimeout(resolvePromise, ms));

const requestOk = (url) =>
  new Promise((resolvePromise) => {
    const req = http.get(url, (res) => {
      res.resume();
      resolvePromise(res.statusCode && res.statusCode < 500);
    });

    req.on("error", () => resolvePromise(false));
  });

const waitForPreview = async () => {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    if (await requestOk(baseUrl)) {
      return;
    }

    await wait(500);
  }

  throw new Error("Timed out waiting for the preview server.");
};

const parseRoutesFromSitemap = () => {
  const xml = readFileSync(sitemapPath, "utf8");
  const routeMatches = [
    ...xml.matchAll(/<loc>https:\/\/maaaashodevidharmayatra\.in(.*?)<\/loc>/g),
  ];

  return [...new Set(routeMatches.map((match) => match[1] || "/"))];
};

const resolveBrowserPath = () => {
  const browserPath = browserCandidates.find((candidate) => existsSync(candidate));

  if (!browserPath) {
    throw new Error("Could not find a Chromium browser for prerendering.");
  }

  return browserPath;
};

const toDistFilePath = (routePath) => {
  if (routePath === "/") {
    return resolve(distDir, "index.html");
  }

  const cleanPath = routePath.replace(/^\//, "").replace(/\/$/, "");
  return resolve(distDir, cleanPath, "index.html");
};

const prerenderRoute = (browserPath, routePath) =>
  new Promise((resolvePromise, rejectPromise) => {
    const targetUrl = `${baseUrl}${routePath}`;
    const browser = spawn(
      browserPath,
      [
        "--headless",
        "--disable-gpu",
        "--run-all-compositor-stages-before-draw",
        "--virtual-time-budget=6000",
        "--dump-dom",
        targetUrl,
      ],
      { stdio: ["ignore", "pipe", "pipe"], windowsHide: true },
    );

    let stdout = "";
    let stderr = "";

    browser.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    browser.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    browser.on("close", (code) => {
      if (code !== 0 || !stdout.trim()) {
        rejectPromise(
          new Error(`Prerender failed for ${routePath}: ${stderr || `exit code ${code}`}`),
        );
        return;
      }

      const filePath = toDistFilePath(routePath);
      mkdirSync(dirname(filePath), { recursive: true });
      writeFileSync(filePath, stdout, "utf8");
      resolvePromise();
    });
  });

const run = async () => {
  const routes = parseRoutesFromSitemap();
  const browserPath = resolveBrowserPath();
  const previewProcess = spawn(
    "powershell.exe",
    [
      "-NoProfile",
      "-Command",
      `& 'C:\\Program Files\\nodejs\\npm.cmd' run preview -- --host ${previewHost} --port ${previewPort}`,
    ],
    { cwd: projectRoot, stdio: "ignore", windowsHide: true },
  );

  try {
    await waitForPreview();

    for (const routePath of routes) {
      await prerenderRoute(browserPath, routePath);
    }
  } finally {
    previewProcess.kill();
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
