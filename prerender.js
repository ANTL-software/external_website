import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const routes = [
  "/",
  "/about_us",
  "/team",
  "/contact_us",
  "/join_us",
  "/legal"
];

async function run() {
  console.log("Starting static prerendering (SSG)...");

  // 1. Read index.html template from the client build output
  const templatePath = toAbsolute("dist/static/index.html");
  if (!fs.existsSync(templatePath)) {
    console.error(`Error: Client build template not found at ${templatePath}`);
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf-8");

  // 2. Import the render function from the server build output
  const serverEntryPath = toAbsolute("dist/server/entry-server.js");
  if (!fs.existsSync(serverEntryPath)) {
    console.error(`Error: Server entry bundle not found at ${serverEntryPath}`);
    process.exit(1);
  }
  const { render } = await import(serverEntryPath);

  // 3. Render each route
  for (const url of routes) {
    const appHtml = render({ path: url });

    const canonicalUrl = `https://antl.fr${url === "/" ? "" : url}`;

    // Replace canonical tags, Open Graph URL, and app HTML in the template
    let html = template
      .replace("<!--app-html-->", appHtml)
      .replace('<link rel="canonical" href="https://antl.fr/" />', `<link rel="canonical" href="${canonicalUrl}" />`)
      .replace('<meta property="og:url" content="https://antl.fr/" />', `<meta property="og:url" content="${canonicalUrl}" />`);

    // Determine output directory
    const outputDir = toAbsolute(`dist/static${url === "/" ? "" : url}`);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputFilePath = path.join(outputDir, "index.html");
    fs.writeFileSync(outputFilePath, html, "utf-8");
    console.log(`✓ Prerendered: ${url} -> ${outputFilePath}`);
  }

  // 4. Move static assets to the final dist folder and clean up
  console.log("Cleaning up and restructuring output...");
  const tempStaticDir = toAbsolute("dist/static");
  const finalDistDir = toAbsolute("dist");
  const tempServerDir = toAbsolute("dist/server");

  // Move files recursively from dist/static to dist
  function copyFolderRecursive(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        copyFolderRecursive(srcPath, destPath);
      } else {
        fs.renameSync(srcPath, destPath);
      }
    }
  }

  copyFolderRecursive(tempStaticDir, finalDistDir);

  // Remove temporary folders
  fs.rmSync(tempStaticDir, { recursive: true, force: true });
  fs.rmSync(tempServerDir, { recursive: true, force: true });

  console.log("Static Site Generation completed successfully!");
}

run().catch((err) => {
  console.error("Prerendering failed:", err);
  process.exit(1);
});
