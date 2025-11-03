function Endings() {
  const handlePlayClick = () => {
    window.open('https://ollienoseworthy.itch.io/one-halloween-night', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-halloween-dark via-halloween-purple to-halloween-dark">
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h1 className="halloween-title text-5xl md:text-7xl text-halloween-orange text-center mb-8">
          Multiple Endings
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-halloween-light text-xl text-center mb-12">
            Your choices matter! One Halloween Night features multiple endings based on your decisions throughout the game. Each playthrough can lead to a different outcome.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: '🎭 Story Branches',
                desc: 'Key decisions create branching narrative paths that lead to unique story experiences.'
              },
              {
                title: '🔍 Hidden Secrets',
                desc: 'Discover hidden clues and make unexpected choices to unlock secret endings.'
              },
              {
                title: '⏱️ Replay Value',
                desc: 'High replay value with each playthrough revealing new details and outcomes.'
              },
              {
                title: '🎃 Multiple Outcomes',
                desc: 'Experience different conclusions based on how you interact with characters and situations.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-halloween-dark bg-opacity-60 backdrop-blur-sm p-6 rounded-xl border-2 border-halloween-orange">
                <h3 className="text-2xl font-bold text-halloween-orange mb-3">{item.title}</h3>
                <p className="text-halloween-light text-lg">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-halloween-purple bg-opacity-30 backdrop-blur-sm p-8 rounded-xl border border-halloween-orange mb-8">
            <h2 className="text-3xl font-bold text-halloween-orange mb-4 text-center">⚠️ No Spoilers!</h2>
            <p className="text-halloween-light text-lg text-center">
              We won't spoil the endings here. Part of the fun is discovering them yourself! 
              Play through multiple times to experience all possible outcomes.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={handlePlayClick}
              className="bg-halloween-orange hover:bg-halloween-light text-white text-2xl font-bold px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              🎮 DISCOVER THE ENDINGS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Endings
