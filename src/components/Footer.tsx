import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="relative z-10 bg-halloween-dark bg-opacity-90 backdrop-blur-sm border-t-2 border-halloween-orange mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-halloween-orange font-bold text-xl mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-halloween-light hover:text-halloween-orange transition-colors">Home</Link>
              <Link to="/gameplay" className="text-halloween-light hover:text-halloween-orange transition-colors">Gameplay</Link>
              <Link to="/endings" className="text-halloween-light hover:text-halloween-orange transition-colors">Endings</Link>
              <Link to="/reviews" className="text-halloween-light hover:text-halloween-orange transition-colors">Reviews</Link>
              <Link to="/faq" className="text-halloween-light hover:text-halloween-orange transition-colors">FAQ</Link>
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
                Read Reviews →
              </a>
              <a 
                href="https://ollienoseworthy.itch.io/one-halloween-night"
                target="_blank"
                rel="noopener noreferrer"
                className="text-halloween-light hover:text-halloween-orange transition-colors"
              >
                Developer Page →
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-halloween-orange font-bold text-xl mb-4">About</h3>
            <p className="text-halloween-light mb-4">
              One Halloween Night is a spooky story-driven indie horror game created by Ollie Noseworthy.
            </p>
            <p className="text-halloween-light text-sm">
              100% Free • No Ads • Play Now on itch.io
            </p>
          </div>
        </div>

        <div className="border-t border-halloween-orange pt-8 text-center text-halloween-light">
          <p className="mb-2">
            © 2025 One Halloween Night • All Rights Reserved
          </p>
          <p className="text-sm opacity-60">
            This is a fan site. Game created by Ollie Noseworthy. Not affiliated with itch.io.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
