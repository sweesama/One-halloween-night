import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Gameplay from './pages/Gameplay'
import Endings from './pages/Endings'
import Videos from './pages/Videos'
import Reviews from './pages/Reviews'
import FAQ from './pages/FAQ'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-halloween-dark via-halloween-purple to-halloween-dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {['🎃', '👻', '🦇', '🕷️', '🕸️'][Math.floor(Math.random() * 5)]}
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
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App