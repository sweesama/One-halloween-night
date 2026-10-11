// Writes a static HTML file per route (dist/<route>.html) with the page's
// rendered content and its own title/description/canonical, so crawlers and
// Vercel (cleanUrls) serve real HTML instead of a 404 for subpages.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const SITE = 'https://www.onehalloweennight.net'
const ROUTES = {
  '/': null,
  '/gameplay': {
    title: 'One Halloween Night Gameplay: How to Play, Controls & Length',
    description: 'How to play One Halloween Night: point-and-click controls, story choices, 20–40 minute playtime and gameplay features of the free indie horror game.',
  },
  '/endings': {
    title: 'One Halloween Night Endings: Multiple Endings Explained (No Spoilers)',
    description: 'One Halloween Night has multiple endings shaped by your choices. Learn how the endings work and tips for finding them, without spoilers.',
  },
  '/videos': {
    title: 'One Halloween Night Walkthrough & Gameplay Videos',
    description: 'Watch One Halloween Night gameplay and full walkthrough videos from YouTubers, then play the free horror game yourself on itch.io.',
  },
  '/reviews': {
    title: 'One Halloween Night Reviews: What Players Say (4.7★)',
    description: 'Player reviews of One Halloween Night, the free story-driven indie horror game rated 4.7★ on itch.io: atmosphere, story, length and scares.',
  },
  '/faq': {
    title: 'One Halloween Night FAQ: Download, Free, Length & Endings',
    description: 'Answers about One Halloween Night: is it free, can you play it in the browser, which platforms it runs on, how long it is and whether it has multiple endings.',
  },
}

const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
const { render } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const [route, meta] of Object.entries(ROUTES)) {
  const url = SITE + (route === '/' ? '/' : route)
  let html = template.replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)
  if (meta) {
    html = html
      .replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(meta.description)}"`)
      .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(meta.title)}"`)
      .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(meta.description)}"`)
      .replace(/(<meta property="twitter:title" content=")[^"]*"/, `$1${esc(meta.title)}"`)
      .replace(/(<meta property="twitter:description" content=")[^"]*"/, `$1${esc(meta.description)}"`)
  }
  html = html
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="twitter:url" content=")[^"]*"/, `$1${url}"`)
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`
  fs.writeFileSync(path.join(dist, file), html)
  if (!html.includes('<h1')) throw new Error(`prerender: no <h1> rendered for ${route}`)
  console.log(`prerendered ${route} -> dist/${file}`)
}
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true })
