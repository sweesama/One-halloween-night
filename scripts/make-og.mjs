// One-off generator for per-page Open Graph images (public/og/*.jpg, 1200x630).
// Not part of `npm run build`. Re-run manually if headlines change:
//   node scripts/make-og.mjs   (needs google-chrome and python3 + Pillow on PATH)
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { execFileSync } from 'node:child_process'

export const OG = {
  home: ['One Halloween Night', 'Free horror game · walkthrough · both endings'],
  walkthrough: ['Full Walkthrough', 'Every step, from the candy bowl to the 1:30 AM choice'],
  endings: ['Both Endings Explained', 'Hide or escape? What each choice leads to'],
  download: ['How to Download', 'Windows install guide · Steam, Mac & mobile'],
  gameplay: ['How to Play', 'Controls, length and beginner tips'],
  'games-like-one-halloween-night': ['Games Like It', '7 home-alone and Halloween horror games for PC'],
  videos: ['Gameplay Videos', 'Full playthroughs with timestamps for both endings'],
  reviews: ['Review', 'Is it worth playing? What players like and criticize'],
  faq: ['FAQ', 'Free? Steam? Mac? How many endings?'],
  default: ['One Halloween Night', 'Unofficial fan guide'],
}
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'og-'))
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
for (const [slug, [h, sub]] of Object.entries(OG)) {
  const kicker = slug === 'home' || slug === 'default' ? 'Unofficial fan guide' : 'One Halloween Night'
  const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Creepster&family=Poppins:wght@400;600&display=block" rel="stylesheet">
<style>html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{background:linear-gradient(180deg,#1A1A2E 0%,#6B2D5C 55%,#1A1A2E 100%);font-family:Poppins,sans-serif;color:#FFA559;
display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border:14px solid #FF6B35;box-sizing:border-box}
.k{font-size:38px;font-weight:600;letter-spacing:2px;text-transform:uppercase;opacity:.9}
h1{font-family:Creepster,cursive;font-weight:400;color:#FF6B35;font-size:${h.length > 18 ? 112 : 140}px;line-height:1.05;margin:18px 60px}
p{font-size:40px;margin:0 80px}.u{position:absolute;bottom:40px;font-size:30px;opacity:.85}.e{position:absolute;font-size:90px;opacity:.35}</style></head>
<body><div class="e" style="left:60px;top:50px">🎃</div><div class="e" style="right:60px;top:50px">👻</div>
<div class="k">${esc(kicker)}</div><h1>${esc(h)}</h1><p>${esc(sub)}</p><div class="u">onehalloweennight.net</div></body></html>`
  const f = path.join(tmp, `${slug}.html`), png = path.join(tmp, `${slug}.png`)
  fs.writeFileSync(f, html)
  execFileSync('google-chrome', ['--headless=new', '--no-sandbox', '--hide-scrollbars', '--virtual-time-budget=5000',
    '--window-size=1200,630', `--screenshot=${png}`, `file://${f}`], { stdio: 'ignore' })
  execFileSync('python3', ['-c', `from PIL import Image; Image.open("${png}").convert("RGB").save("public/og/${slug}.jpg", quality=82, optimize=True, progressive=True)`])
  console.log(`public/og/${slug}.jpg`)
}
