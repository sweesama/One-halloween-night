// Single source of truth for per-route SEO metadata. Used by the client (document.title
// on navigation) and by prerender.mjs (static <head>, JSON-LD, sitemap).
// Facts used across the site were checked against the official itch.io page
// (https://ollienoseworthy.itch.io/one-halloween-night) on 2026-10-12.

export const SITE = 'https://www.onehalloweennight.net'
export const ITCH_URL = 'https://ollienoseworthy.itch.io/one-halloween-night'
export const MIRROR_URL = 'https://download.onehalloweennight.net/game.zip'
export const FACTS_CHECKED = 'October 12, 2026'
export const ITCH_RATING = { value: '4.2', count: 118 }

export interface FaqItem { q: string; a: string }
export interface RouteMeta {
  path: string
  title: string
  description: string
  /** Short label used in breadcrumbs and nav. */
  label: string
  priority: string
  changefreq: string
  faq?: FaqItem[]
}

export const FAQ_GENERAL: FaqItem[] = [
  { q: 'Is One Halloween Night free?', a: 'Yes. One Halloween Night is a free download on itch.io from its developer, ollienoseworthy. There are no in-game purchases.' },
  { q: 'How long is One Halloween Night?', a: 'The developer says a full playthrough takes about 25 minutes. Seeing both endings takes a little longer, because you replay the final choice.' },
  { q: 'How many endings does One Halloween Night have?', a: 'Two. Near the end the game asks you to "Escape the house" or "Hide". Hiding leads to the ending where you are rescued; trying to escape ends with the intruder catching you.' },
  { q: 'Is One Halloween Night on Steam, PS5, Xbox or mobile?', a: 'No. As of October 2026 the game is only released on itch.io, and the only official build is for Windows PC. It is not on Steam, PlayStation, Xbox, Android or iOS.' },
  { q: 'Can I play One Halloween Night online or in a browser?', a: 'No. There is no official browser version. You download a zip file (about 669 MB), extract it and run the .exe on Windows. Sites offering an "unblocked" or online version are not official.' },
  { q: 'Does One Halloween Night work on Mac?', a: 'There is no official Mac build. The itch.io page lists Windows as the only platform.' },
  { q: 'What are the controls?', a: 'W, A, S, D to move, mouse to look, left mouse button to interact and advance dialogue, and right mouse button to throw or drop an object.' },
  { q: 'Is One Halloween Night scary?', a: 'It is a slow-burn, realistic home-invasion horror game. Most of the playtime is calm Halloween chores and conversations, with the tension building toward a few scares near the end. It has jumpscares and an intruder, so it may not suit young children.' },
  { q: 'Who made One Halloween Night?', a: 'It was made in the Unity engine by the solo developer ollienoseworthy and released on itch.io in October 2025.' },
]

export const FAQ_ENDINGS: FaqItem[] = [
  { q: 'How do you get the good ending in One Halloween Night?', a: 'When the old man appears in your bedroom and the game asks "Escape the house or hide?", choose Hide. You hide under the bed, police sirens arrive, and the epilogue explains that the neighbor across the street saw the intruder and called the police.' },
  { q: 'Can you escape the house in One Halloween Night?', a: 'Based on the playthroughs and player reports so far, no. If you choose to escape, the downstairs doors will not open and the old man catches you. Players treat this as the bad ending.' },
  { q: 'Do I have to replay the whole game to see the other ending?', a: 'No. After the hide ending the game offers an option to play the other ending, which puts you back at the choice. If you are caught while escaping, you restart from the glass of water in the kitchen just before the choice.' },
  { q: 'Who is the old man in One Halloween Night?', a: 'In the hide ending the epilogue reveals that he was an escaped patient from a nearby secure facility. He is the same man who set up a candy stand in your backyard earlier that night.' },
]

export const ROUTES: RouteMeta[] = [
  {
    path: '/',
    label: 'Home',
    title: 'One Halloween Night Game: Free Download, Walkthrough & Endings',
    description: 'One Halloween Night is a free 25-minute home-invasion horror game for Windows on itch.io. How to download it, the full walkthrough, both endings and similar games.',
    priority: '1.0', changefreq: 'weekly',
  },
  {
    path: '/walkthrough',
    label: 'Walkthrough',
    title: 'One Halloween Night Walkthrough: Full Guide, Step by Step',
    description: 'Complete One Halloween Night walkthrough: every task from the candy bowl to the 1:30 AM choice, all the trick-or-treaters, the old man, and tips to avoid replaying.',
    priority: '0.9', changefreq: 'monthly',
  },
  {
    path: '/endings',
    label: 'Endings',
    title: 'One Halloween Night Endings: Both Endings Explained (Hide vs Escape)',
    description: 'One Halloween Night has two endings. How to get the hide (rescue) ending and the escape (caught) ending, what the epilogue reveals, and how to see both fast.',
    priority: '0.9', changefreq: 'monthly',
    faq: FAQ_ENDINGS,
  },
  {
    path: '/download',
    label: 'Download',
    title: 'How to Download One Halloween Night on PC (Steam, Mac & Mobile?)',
    description: 'How to download and install One Halloween Night for free on Windows, plus whether it is on Steam, Mac, PS5, mobile or playable online. Install steps and fixes.',
    priority: '0.9', changefreq: 'monthly',
  },
  {
    path: '/gameplay',
    label: 'How to Play',
    title: 'How to Play One Halloween Night: Controls, Length & Tips',
    description: 'How to play One Halloween Night: WASD and mouse controls, how long it takes, how the candy, chores and choice work, and beginner tips for a smoother first run.',
    priority: '0.8', changefreq: 'monthly',
  },
  {
    path: '/games-like-one-halloween-night',
    label: 'Similar Games',
    title: 'Games Like One Halloween Night: 7 Home-Alone Horror Games',
    description: 'Liked One Halloween Night? Seven similar home-alone and Halloween horror games for PC, including free picks, with what each one plays like and where to get it.',
    priority: '0.8', changefreq: 'monthly',
  },
  {
    path: '/videos',
    label: 'Videos',
    title: 'One Halloween Night Gameplay Videos: Full Playthroughs & Both Endings',
    description: 'Watch One Halloween Night full playthroughs on YouTube, including no-commentary videos with timestamps for both endings and popular let\'s plays.',
    priority: '0.7', changefreq: 'monthly',
  },
  {
    path: '/reviews',
    label: 'Reviews',
    title: 'One Halloween Night Review: Is It Worth Playing? Player Opinions',
    description: 'One Halloween Night is rated 4.2 out of 5 from 118 ratings on itch.io. What players like, what they criticize, and who the game is for.',
    priority: '0.7', changefreq: 'monthly',
  },
  {
    path: '/faq',
    label: 'FAQ',
    title: 'One Halloween Night FAQ: Free? Steam? Mac? How Many Endings?',
    description: 'Quick answers about One Halloween Night: price, length, endings, controls, Steam, Mac, mobile and browser availability, and who made it.',
    priority: '0.7', changefreq: 'monthly',
    faq: FAQ_GENERAL,
  },
]

export const routeByPath = (p: string): RouteMeta | undefined =>
  ROUTES.find((r) => r.path === (p.replace(/\/+$/, '') || '/'))
