// Writes a static HTML file per route (dist/<route>.html) with the page's rendered
// content, its own title/description/canonical, per-route JSON-LD, and generates
// dist/sitemap.xml from the same route list (src/routes.ts).
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
const { render, ROUTES, SITE, ITCH_URL } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const urlFor = (p) => SITE + (p === '/' ? '/' : p)
const today = new Date().toISOString().slice(0, 10)

function jsonLd(route) {
  const blocks = []
  if (route.path === '/') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'VideoGame',
      name: 'One Halloween Night',
      description: 'A free, realistic first-person home-invasion horror game made in Unity. A teenage boy left home alone on Halloween night hands out candy to trick-or-treaters until the night turns into a nightmare. About 25 minutes long with two endings.',
      url: urlFor('/'),
      sameAs: ITCH_URL,
      author: { '@type': 'Person', name: 'ollienoseworthy', url: 'https://ollienoseworthy.itch.io/' },
      genre: ['Horror', 'Psychological Horror'],
      gamePlatform: 'Windows',
      operatingSystem: 'Windows',
      applicationCategory: 'Game',
      playMode: 'SinglePlayer',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', url: ITCH_URL },
    })
    blocks.push({ '@context': 'https://schema.org', '@type': 'WebSite', name: 'One Halloween Night (fan guide)', url: urlFor('/') })
  } else {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: urlFor('/') },
        { '@type': 'ListItem', position: 2, name: route.label, item: urlFor(route.path) },
      ],
    })
  }
  if (route.faq?.length) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: route.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    })
  }
  return blocks.map((b) => `<script type="application/ld+json">${JSON.stringify(b).replace(/</g, '\\u003c')}</script>`).join('\n    ')
}

for (const route of ROUTES) {
  const url = urlFor(route.path)
  const t = esc(route.title)
  const d = esc(route.description)
  let html = template.replace('<div id="root"></div>', `<div id="root">${render(route.path)}</div>`)
  html = html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${d}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${t}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${d}"`)
    .replace(/(<meta property="twitter:title" content=")[^"]*"/, `$1${t}"`)
    .replace(/(<meta property="twitter:description" content=")[^"]*"/, `$1${d}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="twitter:url" content=")[^"]*"/, `$1${url}"`)
    .replace('<!-- JSON-LD is injected per route by prerender.mjs -->', jsonLd(route))
  if (route.path !== '/') html = html.replace(/(<meta property="og:type" content=")[^"]*"/, '$1article"')
  const file = route.path === '/' ? 'index.html' : `${route.path.slice(1)}.html`
  if (!html.includes('<h1')) throw new Error(`prerender: no <h1> rendered for ${route.path}`)
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) throw new Error(`prerender: expected exactly one <h1> for ${route.path}`)
  if (html.includes('aggregateRating')) throw new Error(`prerender: aggregateRating must not be emitted (${route.path})`)
  fs.writeFileSync(path.join(dist, file), html)
  console.log(`prerendered ${route.path} -> dist/${file}`)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => `  <url>
    <loc>${urlFor(r.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log(`sitemap.xml: ${ROUTES.length} urls`)
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true })
