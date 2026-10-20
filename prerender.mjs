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
const ogSlug = (p) => (p === '/' ? 'home' : p.slice(1))
const ogImage = (p) => {
  const slug = fs.existsSync(path.join(dist, 'og', `${ogSlug(p)}.jpg`)) ? ogSlug(p) : 'default'
  return `${SITE}/og/${slug}.jpg`
}

function jsonLd(route) {
  const blocks = []
  if (route.path === '/') {
    // This page is a guide. The game entity points at the itch.io release, not this URL.
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${urlFor('/')}#webpage`,
      url: urlFor('/'),
      name: route.title,
      description: route.description,
      inLanguage: 'en',
      isPartOf: { '@id': `${urlFor('/')}#website` },
      about: { '@id': `${ITCH_URL}#game` },
      mainEntity: { '@id': `${ITCH_URL}#game` },
      dateModified: today,
    })
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'VideoGame',
      '@id': `${ITCH_URL}#game`,
      name: 'One Halloween Night',
      description: 'A free first-person home-invasion horror game about one Halloween spent home alone. Made in Unity by ollienoseworthy and released on itch.io in October 2025. About 25 minutes long, with two endings. Windows only.',
      url: ITCH_URL,
      image: ogImage('/'),
      datePublished: '2025-10',
      softwareVersion: '1.2',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'ollienoseworthy', url: 'https://ollienoseworthy.itch.io/' },
      genre: ['Horror', 'Psychological Horror', 'Simulation'],
      gamePlatform: 'Windows',
      operatingSystem: 'Windows',
      applicationCategory: 'Game',
      playMode: 'SinglePlayer',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', url: ITCH_URL, availability: 'https://schema.org/InStock' },
    })
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${urlFor('/')}#website`,
      name: 'One Halloween Night',
      url: urlFor('/'),
      description: 'Unofficial fan guide to One Halloween Night, a free home-invasion horror game for Windows.',
    })
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

function renderPage(route, { notFound = false } = {}) {
  const url = urlFor(route.path)
  const t = esc(route.title)
  const d = esc(route.description)
  const img = ogImage(route.path)
  let html = template.replace('<div id="root"></div>', `<div id="root">${render(route.path)}</div>`)
  html = html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${d}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${t}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${d}"`)
    .replace(/(<meta property="og:image" content=")[^"]*"/, `$1${img}"`)
    .replace(/(<meta property="og:image:alt" content=")[^"]*"/, `$1${t}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${t}"`)
    .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${d}"`)
    .replace(/(<meta name="twitter:image" content=")[^"]*"/, `$1${img}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta name="twitter:url" content=")[^"]*"/, `$1${url}"`)
    .replace('<!-- JSON-LD is injected per route by prerender.mjs -->', notFound ? '' : jsonLd(route))
  if (route.path !== '/') html = html.replace(/(<meta property="og:type" content=")[^"]*"/, '$1article"')
  if (notFound) {
    html = html
      .replace(/(<meta name="robots" content=")[^"]*"/, '$1noindex, follow"')
      .replace(/\s*<link rel="canonical"[^>]*>/, '')
  }
  const where = notFound ? '404' : route.path
  if (!notFound && route.title.length > 60) throw new Error(`prerender: title over 60 chars (${route.title.length}) for ${where}`)
  if (!notFound && route.description.length > 155) throw new Error(`prerender: description over 155 chars (${route.description.length}) for ${where}`)
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) throw new Error(`prerender: expected exactly one <h1> for ${where}`)
  if (html.includes('aggregateRating')) throw new Error(`prerender: aggregateRating must not be emitted (${where})`)
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(m[1])
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\salt="[^"]+"/.test(m[0])) throw new Error(`prerender: <img> without alt on ${where}: ${m[0]}`)
  return html
}

for (const route of ROUTES) {
  const file = route.path === '/' ? 'index.html' : `${route.path.slice(1)}.html`
  fs.writeFileSync(path.join(dist, file), renderPage(route))
  console.log(`prerendered ${route.path} -> dist/${file}`)
}

// Vercel serves dist/404.html (with a 404 status) for any unknown URL.
fs.writeFileSync(path.join(dist, '404.html'), renderPage({
  path: '/404-not-found', label: 'Page not found',
  title: 'Page Not Found | One Halloween Night',
  description: 'This page does not exist. Find the One Halloween Night walkthrough, both endings, download guide and FAQ here.',
}, { notFound: true }))
console.log('prerendered 404 -> dist/404.html')

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
