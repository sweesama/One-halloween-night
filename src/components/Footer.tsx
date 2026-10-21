import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="relative z-10 bg-halloween-dark bg-opacity-90 backdrop-blur-sm border-t-2 border-halloween-orange mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-halloween-orange font-bold text-xl mb-4">Guides</h3>
            <div className="flex flex-col gap-2">
              {[
                ['/', 'One Halloween Night'],
                ['/walkthrough', 'Walkthrough'], ['/endings', 'Endings explained'], ['/download', 'Download & install'],
                ['/gameplay', 'How to play'], ['/games-like-one-halloween-night', 'Games like One Halloween Night'],
                ['/videos', 'Videos'], ['/reviews', 'Review'], ['/faq', 'FAQ'],
              ].map(([to, label]) => (
                <Link key={to} to={to} className="text-halloween-light hover:text-halloween-orange transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-halloween-orange font-bold text-xl mb-4">Play Now</h3>
            <div className="flex flex-col gap-2">
              <a 
                href="https://ollienoseworthy.itch.io/one-halloween-night"
                target="_blank"
                rel="noopener noreferrer"
                className="text-halloween-light hover:text-halloween-orange transition-colors"
              >
                Play on itch.io →
              </a>
              <a 
                href="https://ollienoseworthy.itch.io/one-halloween-night"
                target="_blank"
                rel="noopener noreferrer"
                className="text-halloween-light hover:text-halloween-orange transition-colors"
              >
                Ratings & comments →
              </a>
              <a 
                href="https://ollienoseworthy.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-halloween-light hover:text-halloween-orange transition-colors"
              >
                Developer page →
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-halloween-orange font-bold text-xl mb-4">About</h3>
            <p className="text-halloween-light mb-4">
              One Halloween Night is a free home-invasion horror game for Windows by the indie developer ollienoseworthy.
            </p>
            <p className="text-halloween-light text-sm">
              Free • Windows • Download on itch.io
            </p>
          </div>
        </div>

        <div className="border-t border-halloween-orange pt-8 text-center text-halloween-light">
          <p className="mb-2">
            © 2025–2026 onehalloweennight.net
          </p>
          <p className="text-sm opacity-60">
            This is an unofficial fan site. The game is created by ollienoseworthy. Not affiliated with the developer or itch.io.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
