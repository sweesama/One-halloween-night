function Gameplay() {
  const handlePlayClick = () => {
    window.open('https://ollienoseworthy.itch.io/one-halloween-night', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-halloween-dark via-halloween-purple to-halloween-dark">
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h1 className="halloween-title text-5xl md:text-7xl text-halloween-orange text-center mb-8">
          Gameplay
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-halloween-dark bg-opacity-60 backdrop-blur-sm p-8 rounded-xl border-2 border-halloween-orange mb-8">
            <h2 className="text-3xl font-bold text-halloween-orange mb-6">How to Play</h2>
            <div className="space-y-4 text-halloween-light text-lg">
              <p>🎮 <strong>Controls:</strong> Simple point-and-click interface. Navigate through the story using your mouse or keyboard.</p>
              <p>🕐 <strong>Duration:</strong> Each playthrough takes 20-40 minutes, perfect for a spooky evening session.</p>
              <p>🔀 <strong>Choices Matter:</strong> Your decisions shape the story. Choose wisely as each choice leads to different outcomes.</p>
              <p>👻 <strong>Horror Level:</strong> Atmospheric horror with psychological tension. Not overly reliant on jump scares.</p>
            </div>
          </div>

          <div className="bg-halloween-dark bg-opacity-60 backdrop-blur-sm p-8 rounded-xl border-2 border-halloween-orange mb-8">
            <h2 className="text-3xl font-bold text-halloween-orange mb-6">Gameplay Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                '🏚️ Explore haunted environments',
                '🎯 Make meaningful story choices',
                '👁️ Discover hidden secrets',
                '🔊 Immersive sound design',
                '📖 Rich narrative storytelling',
                '⏱️ Multiple endings to discover',
                '🎨 Atmospheric visuals',
                '🎃 Perfect Halloween experience'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-halloween-light text-lg">
                  <span className="text-2xl">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handlePlayClick}
              className="bg-halloween-orange hover:bg-halloween-light text-white text-2xl font-bold px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              🎮 PLAY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gameplay
