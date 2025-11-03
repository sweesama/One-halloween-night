function Videos() {
  const handlePlayClick = () => {
    window.open('https://ollienoseworthy.itch.io/one-halloween-night', '_blank')
  }

  const videos = [
    {
      id: '9MrpcII2jcw',
      title: '🎮 One Halloween Night - Full Gameplay',
      description: 'Watch the complete gameplay walkthrough of One Halloween Night. Experience all the scares, choices, and endings in this story-driven horror game.',
      category: 'Full Walkthrough'
    },
    {
      id: '_9AySTJXnqw',
      title: '👻 One Halloween Night - Complete Walkthrough (No Commentary)',
      description: 'Full gameplay walkthrough without commentary. Perfect for those who want to experience the game\'s atmosphere and story without distractions.',
      category: 'No Commentary'
    },
    {
      id: 'ErXKdtXSztQ',
      title: '🏠 A Halloween Home Invasion Horror - Let\'s Play',
      description: 'Watch a thrilling let\'s play of One Halloween Night with live reactions. See how players experience the horror and make crucial story choices.',
      category: 'Let\'s Play'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-halloween-dark via-halloween-purple to-halloween-dark">
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="halloween-title text-5xl md:text-7xl text-halloween-orange mb-6">
            Gameplay & Walkthroughs
          </h1>
          <p className="text-halloween-light text-xl md:text-2xl max-w-3xl mx-auto mb-4">
            Watch One Halloween Night in action. See gameplay trailers, complete walkthroughs, and community let's plays.
          </p>
          <p className="text-halloween-light text-lg opacity-90">
            🎬 Experience the spooky story-driven indie horror game before you play
          </p>
        </div>

        {/* Videos Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-1 gap-12">
            {videos.map((video, idx) => (
              <div key={idx} className="bg-halloween-dark bg-opacity-60 backdrop-blur-sm p-6 rounded-2xl border-2 border-halloween-orange">
                {/* Video Category Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-halloween-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {video.category}
                  </span>
                </div>

                {/* Video Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-halloween-orange mb-4">
                  {video.title}
                </h2>

                {/* Video Player */}
                <div className="relative w-full mb-4" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Description */}
                <p className="text-halloween-light text-lg leading-relaxed">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-halloween-purple bg-opacity-30 backdrop-blur-sm p-8 rounded-2xl border border-halloween-orange text-center">
            <p className="text-halloween-light text-lg mb-4">
              💡 <span className="font-semibold">Pro Tip:</span> Videos are loaded on demand to improve page performance. Click the play button to start watching.
            </p>
            <p className="text-halloween-light text-sm opacity-80">
              All videos are hosted on YouTube and subject to their terms of service. We curate the best gameplay content for your viewing experience.
            </p>
          </div>
        </div>

        {/* More Videos Section */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-halloween-orange mb-4">
            Want to See More?
          </h3>
          <p className="text-halloween-light text-lg mb-6">
            Find hundreds of One Halloween Night gameplay videos, walkthroughs, and let's plays on YouTube.
          </p>
          <a
            href="https://www.youtube.com/results?search_query=one+halloween+night+game"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            🎬 Search on YouTube
          </a>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-halloween-dark to-halloween-purple p-12 rounded-2xl border-2 border-halloween-orange">
            <h3 className="halloween-title text-3xl md:text-4xl text-halloween-orange mb-4">
              Ready to Play?
            </h3>
            <p className="text-halloween-light text-xl mb-8">
              Don't just watch — experience the horror yourself! Download and play One Halloween Night for free on itch.io.
            </p>
            
            <button
              onClick={handlePlayClick}
              className="bg-halloween-orange hover:bg-halloween-light text-white text-2xl font-bold px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl mb-4"
            >
              🎮 PLAY NOW - FREE
            </button>
            
            <p className="text-halloween-light text-sm">
              ⭐ 4.7/5 from 239+ reviews • 20-40 minutes gameplay • Multiple endings
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videos
