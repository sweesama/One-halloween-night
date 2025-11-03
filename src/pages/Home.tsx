import { useState, useEffect } from 'react'

function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handlePlayClick = () => {
    window.open('https://ollienoseworthy.itch.io/one-halloween-night', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-halloween-dark via-halloween-purple to-halloween-dark">
      {/* Hero Section - 极简首屏（参考竞品）*/}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="halloween-title text-5xl md:text-7xl text-halloween-orange mb-6">
            One Halloween Night Game
          </h1>
          
          <p className="text-xl md:text-2xl text-halloween-light mb-8 max-w-3xl mx-auto">
            Play the FREE story-driven indie horror game on itch.io<br/>
            Experience a haunting Halloween night full of secrets, choices, and multiple endings.
          </p>

          {/* 3个核心卖点（参考竞品）*/}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-10 text-halloween-light text-lg">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Available on itch.io (not on Steam)</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Play in browser or download for Windows/Mac</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">✓</span>
              <span>100% Free • No ads</span>
            </div>
          </div>

          {/* 大按钮CTA（参考竞品）*/}
          <button
            onClick={handlePlayClick}
            className="bg-halloween-orange hover:bg-halloween-light text-white text-3xl font-bold px-16 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl halloween-title inline-block mb-4"
          >
            PLAY NOW
          </button>
          
          <p className="text-halloween-light text-sm">
            on itch.io • Free Forever
          </p>
        </div>
      </section>

      {/* YouTube视频预览区域 */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="halloween-title text-3xl md:text-4xl text-halloween-orange text-center mb-8">
            🎬 Watch the Game in Action
          </h2>
          
          {/* 响应式YouTube嵌入 */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl border-4 border-halloween-orange"
              src="https://www.youtube.com/embed/9MrpcII2jcw"
              title="One Halloween Night - Full Gameplay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <p className="text-halloween-light text-center mt-6 text-lg">
            Experience the spooky atmosphere and story-driven gameplay
          </p>
        </div>
      </section>

      {/* 评分区域（添加社会证明）*/}
      <section className="relative z-10 container mx-auto px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 text-halloween-light text-lg mb-4">
            <div className="flex items-center gap-2">
              <span className="text-4xl">⭐⭐⭐⭐⭐</span>
              <span className="font-bold text-2xl">4.7/5</span>
            </div>
            <div className="border-l-2 border-halloween-orange h-12 hidden md:block"></div>
            <div className="text-center">
              <div className="font-bold text-3xl">239+</div>
              <div>Player Reviews</div>
            </div>
            <div className="border-l-2 border-halloween-orange h-12 hidden md:block"></div>
            <div className="text-center">
              <div className="font-bold text-3xl">20-40</div>
              <div>Minutes Gameplay</div>
            </div>
          </div>
          <p className="text-halloween-light text-sm opacity-80">
            ⭐ All data from <a href="https://ollienoseworthy.itch.io/one-halloween-night" target="_blank" rel="noopener noreferrer" className="underline hover:text-halloween-orange">itch.io official page</a> • Updated Nov 2024
          </p>
        </div>
      </section>

      {/* What Makes This Game Special（参考竞品）*/}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="halloween-title text-4xl md:text-5xl text-halloween-orange text-center mb-12">
          What Makes This Game Special
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: '📖 Story-Driven Experience',
              desc: 'Immerse yourself in a gripping narrative with meaningful choices that shape the outcome. Every decision you make influences the story\'s direction.'
            },
            {
              title: '🔀 Multiple Endings',
              desc: 'Your decisions matter. Discover different endings and hidden secrets on each playthrough. High replay value with unique outcomes.'
            },
            {
              title: '🎃 Halloween Atmosphere',
              desc: 'Experience the perfect blend of spooky ambiance and captivating storytelling. Atmospheric horror without excessive jump scares.'
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-halloween-dark bg-opacity-60 backdrop-blur-sm p-8 rounded-xl border-2 border-halloween-orange hover:border-halloween-light transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-halloween-orange mb-4">
                {feature.title}
              </h3>
              <p className="text-halloween-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Thousands of Players（用户评论）*/}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="halloween-title text-4xl md:text-5xl text-halloween-orange text-center mb-4">
          Join Thousands of Players
        </h2>
        <p className="text-halloween-light text-center text-xl mb-12">
          See what the community is saying about One Halloween Night
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {[
            {
              text: "Loved the game its the perfect game for halloween night, havent ever been that scared of a old man before",
              author: "Bibbly",
              stars: 5
            },
            {
              text: "Nicely made horror game. I had a lot of fun passing out candy and experiencing one halloween night. The ending was creepy and unexpected",
              author: "BizarreSpartan",
              stars: 5
            },
            {
              text: "This was a really fun game to get into the halloween spirit! The realism and atmosphere were excellent.",
              author: "Zoozlebadoozle",
              stars: 5
            }
          ].map((review, idx) => (
            <div key={idx} className="bg-halloween-purple bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-halloween-orange">
              <div className="text-halloween-orange mb-3 text-2xl">
                {'⭐'.repeat(review.stars)}
              </div>
              <p className="text-halloween-light mb-4 italic text-lg">"{review.text}"</p>
              <p className="text-halloween-orange font-semibold">— {review.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://ollienoseworthy.itch.io/one-halloween-night"
            target="_blank"
            rel="noopener noreferrer"
            className="text-halloween-orange hover:text-halloween-light underline text-lg"
          >
            View all 239+ reviews on itch.io →
          </a>
        </div>
      </section>

      {/* Ready to Experience（第二个CTA）*/}
      <section className="relative z-10 container mx-auto px-4 py-16 text-center">
        <h2 className="halloween-title text-4xl md:text-5xl text-halloween-orange mb-6">
          Ready to Experience the Mystery?
        </h2>
        <p className="text-halloween-light text-xl mb-4">
          Join <span className="text-halloween-orange font-bold">thousands of players</span> who have already uncovered the secrets of One Halloween Night.
        </p>
        <p className="text-halloween-light text-lg mb-8 opacity-90">
          ⭐ <span className="font-bold">4.7/5</span> from <span className="font-bold">239+ reviews</span> on itch.io
        </p>
        
        <button
          onClick={handlePlayClick}
          className="bg-halloween-orange hover:bg-halloween-light text-white text-2xl font-bold px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl mb-4"
        >
          🎮 PLAY NOW - FREE 🎮
        </button>
        
        <p className="text-halloween-light">
          100% Free • Play in Browser • 20-40 Minutes per Playthrough
        </p>
      </section>
    </div>
  )
}

export default Home
