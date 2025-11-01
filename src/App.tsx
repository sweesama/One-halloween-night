import { useState, useEffect } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handlePlayClick = () => {
    window.open('https://ollienoseworthy.itch.io/one-halloween-night', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-halloween-dark via-halloween-purple to-halloween-dark overflow-hidden">
      {/* Animated Background Elements */}
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

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <header className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="halloween-title text-6xl md:text-8xl lg:text-9xl text-halloween-orange mb-4 drop-shadow-2xl animate-pulse-slow">
            One Halloween Night
          </h1>
          <p className="text-xl md:text-2xl text-halloween-light font-semibold mb-4">
            🎃 Survive the Spookiest Night of Your Life 🎃
          </p>
          <div className="flex items-center justify-center gap-6 text-halloween-light">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐⭐⭐⭐⭐</span>
              <span className="font-bold">4.7/5</span>
            </div>
            <div className="border-l-2 border-halloween-orange h-6"></div>
            <div className="font-semibold">FREE Download</div>
            <div className="border-l-2 border-halloween-orange h-6"></div>
            <div className="font-semibold">250+ Players</div>
          </div>
        </header>

        {/* Hero Section */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Game Thumbnail Placeholder */}
          <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-halloween-orange">
            <div className="aspect-video bg-gradient-to-br from-halloween-purple to-halloween-dark flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4 animate-float">🎃</div>
                <p className="text-4xl halloween-title text-halloween-orange">One Halloween Night</p>
                <p className="text-xl text-halloween-light mt-2">A Thrilling Horror Adventure</p>
              </div>
            </div>
            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={handlePlayClick}
                className="bg-halloween-orange hover:bg-halloween-light text-white text-2xl font-bold px-12 py-6 rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl"
              >
                ▶️ PLAY NOW
              </button>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="text-center mb-12">
            <button
              onClick={handlePlayClick}
              className="bg-halloween-orange hover:bg-halloween-light text-white text-3xl md:text-4xl font-bold px-16 py-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse-slow halloween-title"
            >
              🎮 PLAY NOW - FREE! 🎮
            </button>
            <p className="text-halloween-light mt-4 text-lg">
              Click to download and start your Halloween adventure!
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: '💀', label: 'Genre', value: 'Horror Adventure' },
              { icon: '👤', label: 'Developer', value: 'Ollie Noseworthy' },
              { icon: '💻', label: 'Platform', value: 'PC / Mac / Linux' },
              { icon: '💰', label: 'Price', value: 'FREE' },
            ].map((info, idx) => (
              <div key={idx} className="bg-halloween-dark bg-opacity-60 backdrop-blur-sm p-4 rounded-xl border-2 border-halloween-orange text-center">
                <div className="text-3xl mb-2">{info.icon}</div>
                <div className="text-sm text-halloween-light">{info.label}</div>
                <div className="font-bold text-halloween-orange">{info.value}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '👻', title: 'Scary Atmosphere', desc: 'Immersive horror experience with spine-chilling sound design' },
              { icon: '🎮', title: 'Free to Play', desc: 'Download and play instantly - no hidden costs' },
              { icon: '🌙', title: 'Halloween Theme', desc: 'Perfect for spooky season with authentic October vibes' },
              { icon: '🎭', title: 'Story-Driven', desc: 'Engaging narrative with multiple mysteries to uncover' },
              { icon: '🔦', title: 'Exploration', desc: 'Navigate through haunted environments and dark corners' },
              { icon: '🎃', title: 'Indie Gem', desc: 'Crafted with passion by independent developer' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-halloween-dark bg-opacity-60 backdrop-blur-sm p-6 rounded-xl border-2 border-halloween-orange hover:border-halloween-light transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-3 text-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-halloween-orange mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-halloween-light text-center">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Game Description */}
          <div className="bg-halloween-dark bg-opacity-60 backdrop-blur-sm p-8 rounded-xl border-2 border-halloween-orange mb-8">
            <h2 className="halloween-title text-4xl text-halloween-orange mb-6">
              About One Halloween Night
            </h2>
            <p className="text-halloween-light text-lg leading-relaxed mb-4">
              Step into a world of terror and suspense in <span className="text-halloween-orange font-bold">One Halloween Night</span>. 
              This spine-chilling horror adventure will test your courage as you navigate through a haunted world filled with mysteries, frights, and unexpected scares.
            </p>
            <p className="text-halloween-light text-lg leading-relaxed mb-4">
              As darkness falls on Halloween night, you find yourself trapped in a sinister environment where every shadow hides a threat and every sound could be your last warning. 
              Will you survive until dawn?
            </p>
            <p className="text-halloween-light text-lg leading-relaxed">
              Perfect for Halloween enthusiasts and horror game fans alike. Created by indie developer <span className="text-halloween-orange font-bold">Ollie Noseworthy</span>, 
              this game captures the essence of classic horror while delivering a fresh, terrifying experience. Download now and face your fears!
            </p>
          </div>

          {/* Gameplay Features */}
          <div className="bg-halloween-dark bg-opacity-60 backdrop-blur-sm p-8 rounded-xl border-2 border-halloween-orange mb-8">
            <h2 className="halloween-title text-4xl text-halloween-orange mb-6">
              🎮 Gameplay Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                '🏚️ Explore haunted environments filled with secrets',
                '🎯 Solve puzzles to progress through the nightmare',
                '👁️ Hide from terrifying creatures lurking in darkness',
                '🔊 Atmospheric sound design that keeps you on edge',
                '📖 Uncover the dark story behind Halloween night',
                '⏱️ Fast-paced gameplay with multiple endings',
                '🎨 Stunning horror visuals and eerie atmosphere',
                '🎃 Perfect blend of scares and adventure',
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-halloween-light text-lg">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Information */}
          <div className="bg-halloween-dark bg-opacity-60 backdrop-blur-sm p-8 rounded-xl border-2 border-halloween-orange mb-8">
            <h2 className="halloween-title text-4xl text-halloween-orange mb-6">
              💾 Download & Play
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-halloween-orange mb-4">📥 How to Download</h3>
                <ol className="space-y-3 text-halloween-light text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-halloween-orange font-bold">1.</span>
                    <span>Click the download button to visit itch.io</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-halloween-orange font-bold">2.</span>
                    <span>Choose your platform (Windows/Mac/Linux)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-halloween-orange font-bold">3.</span>
                    <span>Download and extract the game files</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-halloween-orange font-bold">4.</span>
                    <span>Run the executable and start playing!</span>
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-halloween-orange mb-4">💡 Tips for Best Experience</h3>
                <ul className="space-y-3 text-halloween-light text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎧</span>
                    <span>Use headphones for immersive horror sound</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🌙</span>
                    <span>Play in a dark room for maximum scares</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <span>Check itch.io page for exact requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💾</span>
                    <span>Most modern PCs can run this indie game</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-halloween-dark bg-opacity-60 backdrop-blur-sm p-8 rounded-xl border-2 border-halloween-orange mb-8">
            <h2 className="halloween-title text-4xl text-halloween-orange mb-6">
              👥 What Players Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stars: 5, text: 'Absolutely terrifying! Best free horror game I\'ve played this year.', author: 'Horror Fan' },
                { stars: 5, text: 'Perfect atmosphere for Halloween. Jump scares got me every time!', author: 'Spooky Gamer' },
                { stars: 4, text: 'Great indie game! Love the story and scary moments throughout.', author: 'Indie Lover' },
              ].map((review, idx) => (
                <div key={idx} className="bg-halloween-purple bg-opacity-30 p-6 rounded-lg">
                  <div className="text-halloween-orange mb-3">
                    {'⭐'.repeat(review.stars)}
                  </div>
                  <p className="text-halloween-light mb-4 italic">"{review.text}"</p>
                  <p className="text-halloween-orange font-semibold">- {review.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Placeholder - Google AdSense 预留位置 */}
          <div className="bg-halloween-dark bg-opacity-40 backdrop-blur-sm p-8 rounded-xl border-2 border-dashed border-halloween-purple text-center mb-8">
            <p className="text-halloween-light text-sm">Advertisement Space</p>
            {/* Google AdSense 代码将在此处插入 */}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <button
              onClick={handlePlayClick}
              className="bg-halloween-orange hover:bg-halloween-light text-white text-2xl font-bold px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl mb-4"
            >
              🎃 Download One Halloween Night 🎃
            </button>
            <p className="text-halloween-light text-sm">
              Hosted on itch.io - Safe and secure download
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-halloween-light opacity-60">
          <p>© 2025 One Halloween Night - All Rights Reserved</p>
          <p className="text-sm mt-2">
            This is a fan page. Game created by Ollie Noseworthy.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
