import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/walkthrough', label: 'Walkthrough' },
    { to: '/endings', label: 'Endings' },
    { to: '/download', label: 'Download' },
    { to: '/gameplay', label: 'How to Play' },
    { to: '/videos', label: 'Videos' },
    { to: '/faq', label: 'FAQ' },
  ]

  return (
    <nav className="relative z-50 bg-halloween-dark bg-opacity-90 backdrop-blur-sm border-b-2 border-halloween-orange">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="halloween-title text-2xl md:text-3xl text-halloween-orange hover:text-halloween-light transition-colors">
            🎃 One Halloween Night
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-halloween-light hover:text-halloween-orange transition-colors font-semibold text-lg"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://ollienoseworthy.itch.io/one-halloween-night"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-halloween-orange hover:bg-halloween-light text-white font-bold px-6 py-2 rounded-full transition-all duration-300"
            >
              DOWNLOAD FREE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu" className="lg:hidden text-halloween-orange text-3xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-halloween-light hover:text-halloween-orange transition-colors font-semibold text-lg"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://ollienoseworthy.itch.io/one-halloween-night"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-halloween-orange hover:bg-halloween-light text-white font-bold px-6 py-2 rounded-full transition-all duration-300 text-center"
              >
                PLAY NOW
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
