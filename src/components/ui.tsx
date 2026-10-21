import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { ITCH_URL, routeByPath } from '../routes'

export function Breadcrumbs({ path }: { path: string }) {
  const meta = routeByPath(path)
  return (
    <nav aria-label="Breadcrumb" className="text-halloween-light text-sm mb-6 opacity-90">
      <ol className="flex flex-wrap gap-2">
        <li><Link to="/" className="underline hover:text-halloween-orange">One Halloween Night</Link></li>
        <li aria-hidden="true">›</li>
        <li aria-current="page">{meta?.label}</li>
      </ol>
    </nav>
  )
}

export function PageShell({ path, h1, intro, children }: { path: string; h1: string; intro?: ReactNode; children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <article className="relative z-10 container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <Breadcrumbs path={path} />
        <h1 className="halloween-title text-4xl md:text-6xl text-halloween-orange mb-6">{h1}</h1>
        {intro && <div className="text-halloween-light text-lg md:text-xl leading-relaxed mb-10">{intro}</div>}
        <div className="space-y-10">{children}</div>
        <RelatedGuides current={path} />
      </article>
    </div>
  )
}

export function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="bg-halloween-dark bg-opacity-60 backdrop-blur-sm p-6 md:p-8 rounded-xl border-2 border-halloween-orange scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold text-halloween-orange mb-4">{title}</h2>
      <div className="prose-ohn text-halloween-light text-lg leading-relaxed space-y-4">{children}</div>
    </section>
  )
}

export function Spoiler({ children }: { children?: ReactNode }) {
  return (
    <p className="bg-halloween-purple bg-opacity-50 border border-halloween-orange rounded-lg p-4 text-halloween-light">
      ⚠️ <strong>Spoiler warning:</strong> {children ?? 'this page describes the story and both endings in detail.'}
    </p>
  )
}

export function Ext({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-halloween-orange hover:text-white">{children}</a>
}

export function In({ to, children }: { to: string; children: ReactNode }) {
  return <Link to={to} className="underline text-halloween-orange hover:text-white">{children}</Link>
}

export function ItchButton({ label = 'Get it free on itch.io' }: { label?: string }) {
  return (
    <a href={ITCH_URL} target="_blank" rel="noopener noreferrer"
      className="inline-block bg-halloween-orange hover:bg-halloween-light text-halloween-dark text-xl font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl">
      🎮 {label}
    </a>
  )
}

const GUIDES = [
  { to: '/', t: 'One Halloween Night', d: 'What the free horror game is, plus facts and where to download it' },
  { to: '/walkthrough', t: 'Full walkthrough', d: 'Every step from the candy bowl to the final choice' },
  { to: '/endings', t: 'Both endings explained', d: 'How to get the hide and escape endings' },
  { to: '/download', t: 'Download & install', d: 'Windows install steps, Steam, Mac and mobile' },
  { to: '/gameplay', t: 'How to play', d: 'Controls, length and beginner tips' },
  { to: '/games-like-one-halloween-night', t: 'Games like One Halloween Night', d: '7 similar home-alone horror games' },
  { to: '/faq', t: 'FAQ', d: 'Quick answers to common questions' },
]

export function RelatedGuides({ current }: { current?: string }) {
  const items = GUIDES.filter((g) => g.to !== current)
  return (
    <aside className="mt-14">
      <h2 className="text-2xl font-bold text-halloween-orange mb-4">More One Halloween Night guides</h2>
      <ul className="grid sm:grid-cols-2 gap-4">
        {items.map((g) => (
          <li key={g.to}>
            <Link to={g.to} className="block h-full bg-halloween-purple bg-opacity-30 border border-halloween-orange rounded-lg p-4 hover:bg-opacity-60 transition-colors">
              <span className="block text-halloween-orange font-bold text-lg">{g.t}</span>
              <span className="block text-halloween-light">{g.d}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

/** YouTube thumbnail: WebP (about 30% smaller) with JPEG fallback, fixed size, lazy-loaded. */
export function YtThumb({ id, alt }: { id: string; alt: string }) {
  return (
    <picture>
      <source type="image/webp" srcSet={`https://i.ytimg.com/vi_webp/${id}/hqdefault.webp`} />
      <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={alt} width={480} height={360}
        className="w-full h-full object-cover" loading="lazy" decoding="async" />
    </picture>
  )
}
