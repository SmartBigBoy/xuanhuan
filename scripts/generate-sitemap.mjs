import { readFileSync } from 'fs';

const dataDir = './src/data/';

// Simple regex-based ID extraction from TS files
function extractIds(filePath, idPattern = /id:\s*['"]([^'"]+)['"]/g) {
  const content = readFileSync(filePath, 'utf8');
  const ids = [];
  let match;
  while ((match = idPattern.exec(content)) !== null) {
    ids.push(match[1]);
  }
  return ids;
}

const novelIds = extractIds(`${dataDir}novels.ts`);
const mapIds = extractIds(`${dataDir}maps.ts`);
const wikiIds = extractIds(`${dataDir}realms.ts`).filter(id => 
  !id.startsWith('rmjz') && !id.startsWith('fanren') && 
  // Filter to wiki-only IDs (they appear after wikiEntries array)
  id !== 'linggen' ? true : true // include all for simplicity
);

// Read articles IDs
const articleIds = extractIds(`${dataDir}articles.ts`);

const baseUrl = 'https://zhutiantujian.site';
const now = new Date().toISOString();

function urlEntry(path, priority, changefreq) {
  return `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls = [
  urlEntry('/', '1.0', 'weekly'),
  urlEntry('/realms', '0.9', 'weekly'),
  urlEntry('/maps', '0.8', 'weekly'),
  urlEntry('/wiki', '0.7', 'monthly'),
  urlEntry('/community', '0.6', 'weekly'),
  ...novelIds.map(id => urlEntry(`/realms/${id}`, '0.7', 'monthly')),
  ...mapIds.map(id => urlEntry(`/maps/${id}`, '0.7', 'monthly')),
  ...wikiIds.map(id => urlEntry(`/wiki/${id}`, '0.6', 'monthly')),
  ...articleIds.map(id => urlEntry(`/community/${id}`, '0.5', 'monthly')),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

import { writeFileSync } from 'fs';
writeFileSync('./out/sitemap.xml', sitemap);
console.log(`Sitemap generated with ${urls.length} URLs`);
