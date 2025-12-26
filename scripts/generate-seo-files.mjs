// scripts/generate-seo-files.mjs
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

// ✅ 여기만 네 도메인으로 바꾸면 됨 (https 포함, 끝에 / 없이)
const SITE_URL = "https://blisshouse.info";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

// --- data modules (ESM import)
const areasModulePath = path.join(rootDir, "src", "data", "areas.js");
const listingsModulePath = path.join(rootDir, "src", "data", "listings.js");

const { areas } = await import(pathToFileUrl(areasModulePath));
let listings = [];
try {
  ({ listings } = await import(pathToFileUrl(listingsModulePath)));
} catch (e) {
  // listings.js가 아직 없을 수 있으니, 없으면 그냥 스킵
  listings = [];
}

// --- static paths
const staticPaths = ["/", "/areas"];

// --- dynamic paths from areas
const areaPaths = (areas || []).map((a) => `/areas/${a.slug}`);

// --- dynamic paths from listings
const propertyPaths = (listings || []).map((l) => `/properties/${l.slug}`);

// sitemap 최종 URL
const allPaths = [...staticPaths, ...areaPaths, ...propertyPaths];

// lastmod (전체 동일하게 넣고 싶으면 이렇게)
const now = new Date().toISOString();

// sitemap.xml 생성
const urlset = allPaths
  .map((p) => {
    const loc = `${SITE_URL}${p}`;

    // 간단 priority 전략
    const priority =
      p === "/" ? "1.0" : p === "/areas" ? "0.8" : p.startsWith("/areas/") ? "0.7" : "0.6";

    // changefreq 전략
    const changefreq =
      p === "/" || p === "/areas" ? "weekly" : p.startsWith("/areas/") ? "monthly" : "weekly";

    return `
  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("");

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>
`;

// robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });

writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
writeFileSync(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");

console.log(
  `[SEO] Generated sitemap.xml (${allPaths.length} URLs) and robots.txt in /public`
);

function escapeXml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function pathToFileUrl(p) {
  const resolved = path.resolve(p);
  return new URL(`file://${resolved.replace(/\\/g, "/")}`);
}
