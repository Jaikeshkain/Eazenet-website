// Generates one real page per product (/qr-connect/index.html, ...) plus 404.html, sitemap.xml and robots.txt.
// Each product page is a copy of index.html with its own title, description and share-preview tags, so a link
// sent on WhatsApp, LinkedIn, email etc. shows that product. The router in assets/site.js renders the product view.
//
// Run after editing index.html or the product data in assets/site.js:   node scripts/build-pages.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://eazenet.online";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const home = readFileSync(join(root, "index.html"), "utf8");
const js = readFileSync(join(root, "assets/site.js"), "utf8");

const order = JSON.parse(js.match(/const ORDER = (\[[^\]]*\])/)[1]);
const field = (block, key) => (block.match(new RegExp(`\\b${key}:"((?:[^"\\\\]|\\\\.)*)"`)) || [])[1];
const products = order.map(slug => {
  const start = js.indexOf(`"${slug}": {`);
  const block = js.slice(start, start + 4000);
  return { slug, name: field(block, "name"), desc: field(block, "one"), cat: field(block, "cat") };
});

const esc = s => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
function page({ title, desc, url, robots }) {
  let h = home
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(desc)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(desc)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`);
  if (robots) h = h.replace("<title>", `<meta name="robots" content="${robots}">\n<title>`);
  return h;
}

for (const p of products) {
  if (!p.name || !p.desc) throw new Error(`Could not read product data for ${p.slug}`);
  mkdirSync(join(root, p.slug), { recursive: true });
  writeFileSync(join(root, p.slug, "index.html"),
    page({ title: `${p.name} · Eazenet.online`, desc: p.desc, url: `${SITE}/${p.slug}/` }));
  console.log(`wrote ${p.slug}/index.html`);
}

writeFileSync(join(root, "404.html"),
  page({ title: "Page not found · Eazenet.online", desc: "This page doesn't exist. Explore Eazenet.online products instead.", url: `${SITE}/`, robots: "noindex" }));

const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  ["", ...products.map(p => p.slug + "/")].map(u => `  <url><loc>${SITE}/${u}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
  `\n</urlset>\n`);
writeFileSync(join(root, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log("wrote 404.html, sitemap.xml, robots.txt");
