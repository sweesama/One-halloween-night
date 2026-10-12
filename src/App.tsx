import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { routeByPath } from './routes'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Gameplay from './pages/Gameplay'
import Endings from './pages/Endings'
import Videos from './pages/Videos'
import Reviews from './pages/Reviews'
import FAQ from './pages/FAQ'
import Walkthrough from './pages/Walkthrough'
import Download from './pages/Download'
import SimilarGames from './pages/SimilarGames'
import NotFound from './pages/NotFound'

// Decorative floating emoji. Positions come from a fixed-seed generator (not Math.random)
// so the prerendered HTML and the client render are identical and React can hydrate
// the static HTML instead of throwing it away and repainting (that repaint was ~4 s of LCP).
const DECOR = (() => {
  let seed = 31
  const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646
  return Array.from({ length: 20 }, () => ({
    left: `${(rnd() * 100).toFixed(2)}%`,
    top: `${(rnd() * 100).toFixed(2)}%`,
    delay: `${(rnd() * 3).toFixed(2)}s`,
    duration: `${(3 + rnd() * 2).toFixed(2)}s`,
    emoji: ['🎃', '👻', '🦇', '🕷️', '🕸️'][Math.floor(rnd() * 5)],
  }))
})()

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    const meta = routeByPath(pathname)
    if (meta) document.title = meta.title
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-halloween-dark via-halloween-purple to-halloween-dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {DECOR.map((d, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-20 animate-float"
              style={{ left: d.left, top: d.top, animationDelay: d.delay, animationDuration: d.duration }}
            >
              {d.emoji}
            </div>
          ))}
        </div>

        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gameplay" element={<Gameplay />} />
          <Route path="/endings" element={<Endings />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/walkthrough" element={<Walkthrough />} />
          <Route path="/download" element={<Download />} />
          <Route path="/games-like-one-halloween-night" element={<SimilarGames />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App