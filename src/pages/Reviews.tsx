function Reviews() {
  const handlePlayClick = () => {
    window.open('https://ollienoseworthy.itch.io/one-halloween-night', '_blank')
  }

  const reviews = [
    {
      text: "Loved the game its the perfect game for halloween night, havent ever been that scared of a old man before",
      author: "Bibbly",
      stars: 5,
      date: "Oct 2024"
    },
    {
      text: "Nicely made horror game. I had a lot of fun passing out candy and experiencing one halloween night. The ending was creepy and unexpected",
      author: "BizarreSpartan",
      stars: 5,
      date: "Oct 2024"
    },
    {
      text: "This was a really fun game to get into the halloween spirit! The realism and atmosphere were excellent.",
      author: "Zoozlebadoozle",
      stars: 5,
      date: "Oct 2024"
    },
    {
      text: "The graphics are top notch and the atmosphere is incredibly immersive. A must-play for horror fans!",
      author: "itch.io player",
      stars: 5,
      date: "Nov 2024"
    },
    {
      text: "Short but sweet! Perfect length for a spooky evening. The choices you make really impact the story.",
      author: "itch.io player",
      stars: 5,
      date: "Oct 2024"
    },
    {
      text: "Really enjoyed this! The ending surprised me. Definitely worth playing through multiple times for different outcomes.",
      author: "itch.io player",
      stars: 4,
      date: "Oct 2024"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-halloween-dark via-halloween-purple to-halloween-dark">
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h1 className="halloween-title text-5xl md:text-7xl text-halloween-orange text-center mb-8">
          Player Reviews
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-6xl">⭐⭐⭐⭐⭐</span>
            </div>
            <div className="text-halloween-light text-2xl mb-2">
              <span className="font-bold text-4xl text-halloween-orange">4.7</span> out of 5
            </div>
            <div className="text-halloween-light text-xl">
              Based on <span className="font-bold text-halloween-orange">239+</span> reviews on itch.io
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-halloween-purple bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-halloween-orange">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-halloween-orange text-xl">
                    {'⭐'.repeat(review.stars)}
                  </div>
                  <div className="text-halloween-light text-sm">{review.date}</div>
                </div>
                <p className="text-halloween-light mb-4 italic text-lg">"{review.text}"</p>
                <p className="text-halloween-orange font-semibold">— {review.author}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <a 
              href="https://ollienoseworthy.itch.io/one-halloween-night"
              target="_blank"
              rel="noopener noreferrer"
              className="text-halloween-orange hover:text-halloween-light underline text-xl"
            >
              Read all 239+ reviews on itch.io →
            </a>
          </div>

          <div className="text-center">
            <button
              onClick={handlePlayClick}
              className="bg-halloween-orange hover:bg-halloween-light text-white text-2xl font-bold px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              🎮 JOIN THE PLAYERS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
