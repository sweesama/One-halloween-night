import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ITCH_URL, MIRROR_URL, ITCH_RATING, FACTS_CHECKED } from '../routes'
import { RelatedGuides, In, Ext } from '../components/ui'

function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative z-10 container mx-auto px-4 py-16 md:py-20 text-center">
        <h1 className="halloween-title text-5xl md:text-7xl text-halloween-orange mb-6">One Halloween Night Game</h1>
        <p className="text-xl md:text-2xl text-halloween-light mb-8 max-w-3xl mx-auto">
          A free, 25-minute home-invasion horror game for Windows. You're 14, home alone on Halloween night with a bowl of candy, and someone is coming for more than candy.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10 text-halloween-light text-lg">
          <span>✓ Free on itch.io</span>
          <span>✓ Windows PC</span>
          <span>✓ About 25 minutes</span>
          <span>✓ 2 endings</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-6">
          <a href={ITCH_URL} target="_blank" rel="noopener noreferrer"
            className="bg-halloween-orange hover:bg-halloween-light text-halloween-dark text-2xl md:text-3xl font-bold px-12 md:px-16 py-5 rounded-full transition-all duration-300 shadow-2xl halloween-title">
            ⬇️ Download free on itch.io
          </a>
          <a href={MIRROR_URL}
            className="bg-halloween-purple border-2 border-halloween-orange hover:bg-halloween-orange text-white text-xl font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl">
            Direct download (668 MB zip)
          </a>
        </div>
        <p className="text-halloween-light text-sm opacity-90">
          Windows only · not on Steam, Mac, mobile or browser · <Link to="/download" className="underline">install guide</Link>
        </p>
      </section>

      {/* Guides */}
      <section className="relative z-10 container mx-auto px-4 pb-8 max-w-5xl">
        <h2 className="halloween-title text-3xl md:text-4xl text-halloween-orange text-center mb-8">One Halloween Night guides</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { to: '/walkthrough', t: '🗺️ Walkthrough', d: 'Every step of the night in order, from the candy bowl to the 1:30 AM choice.' },
            { to: '/endings', t: '🔀 Both endings', d: 'Hide or escape? What each choice leads to and how to see both quickly.' },
            { to: '/download', t: '💾 Download & install', d: 'How to install on Windows, and the truth about Steam, Mac, PS5 and mobile.' },
          ].map((g) => (
            <Link key={g.to} to={g.to} className="block bg-halloween-dark bg-opacity-60 p-6 rounded-xl border-2 border-halloween-orange hover:border-halloween-light transition-colors">
              <h3 className="text-2xl font-bold text-halloween-orange mb-2">{g.t}</h3>
              <p className="text-halloween-light">{g.d}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="halloween-title text-3xl md:text-4xl text-halloween-orange text-center mb-8">🎬 Watch the game in action</h2>
          <div className="relative w-full rounded-2xl shadow-2xl border-4 border-halloween-orange overflow-hidden bg-black cursor-pointer" style={{ aspectRatio: '16/9' }} onClick={() => setIsVideoPlaying(true)}>
            {!isVideoPlaying ? (
              <>
                <img src="https://img.youtube.com/vi/Cwfu69Y_EYQ/hqdefault.jpg" alt="One Halloween Night gameplay by Thinknoodles" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <div className="w-20 h-20 bg-halloween-orange rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                  </div>
                </div>
              </>
            ) : (
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/Cwfu69Y_EYQ?autoplay=1" title="One Halloween Night gameplay"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            )}
          </div>
          <p className="text-halloween-light text-center mt-4">Gameplay by Thinknoodles on YouTube. More playthroughs on the <In to="/videos">videos page</In>.</p>
        </div>
      </section>

      {/* About */}
      <section className="relative z-10 container mx-auto px-4 py-12 max-w-4xl text-halloween-light text-lg leading-relaxed space-y-6">
        <h2 className="halloween-title text-3xl md:text-4xl text-halloween-orange text-center">What is One Halloween Night?</h2>
        <p>
          <strong>One Halloween Night</strong> is a free first-person horror game made in Unity by the solo developer <Ext href="https://ollienoseworthy.itch.io/">ollienoseworthy</Ext> and released on itch.io in October 2025. The developer calls it a <em>realistic home-invasion horror experience</em>. You play a teenage boy whose parents have to leave unexpectedly for the night, so you're left alone to look after the house and hand out candy. What should be a simple, relaxing night slowly turns into a nightmare.
        </p>
        <p>
          Most of the game is the build-up: answering the door to a parade of odd trick-or-treaters, checking out a stranger in your backyard, cleaning up wrappers, eating leftover pizza and trying to sleep. The VHS camera effect, 3D sound and a deliberately quiet soundtrack make every knock count. One choice near the end decides which of the <In to="/endings">two endings</In> you get.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-base">
            <tbody>
              {[
                ['Price', 'Free'],
                ['Platform', 'Windows PC (itch.io)'],
                ['Length', 'About 25 minutes'],
                ['Endings', '2 (hide or escape)'],
                ['Controls', 'WASD + mouse, left click interact, right click throw'],
                ['Download size', '669 MB zip'],
                ['itch.io rating', `${ITCH_RATING.value}/5 from ${ITCH_RATING.count} ratings`],
              ].map(([k, v]) => (
                <tr key={k}><th className="border border-halloween-orange p-2 text-left text-halloween-orange">{k}</th><td className="border border-halloween-orange p-2">{v}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm opacity-80 mt-2">Facts and rating from the <Ext href={ITCH_URL}>official itch.io page</Ext>, checked {FACTS_CHECKED}.</p>
        </div>
      </section>

      {/* Player quotes */}
      <section className="relative z-10 container mx-auto px-4 py-12">
        <h2 className="halloween-title text-3xl md:text-4xl text-halloween-orange text-center mb-8">What players say</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {[
            { text: 'Loved the game its the perfect game for halloween night, havent ever been that scared of a old man before', author: 'Bibbly' },
            { text: 'Nicely made horror game. I had a lot of fun passing out candy and experiencing one halloween night. The ending was creepy and unexpected', author: 'BizarreSpartan' },
            { text: 'This was a really fun game to get into the halloween spirit!', author: 'Zoozlebadoozle' },
          ].map((r) => (
            <blockquote key={r.author} className="bg-halloween-purple bg-opacity-30 p-6 rounded-lg border border-halloween-orange">
              <p className="text-halloween-light mb-4 italic text-lg">"{r.text}"</p>
              <footer className="text-halloween-orange font-semibold">— {r.author}, itch.io comment</footer>
            </blockquote>
          ))}
        </div>
        <p className="text-center text-halloween-light"><In to="/reviews">Read our review and more player opinions →</In></p>
      </section>

      <section className="relative z-10 container mx-auto px-4 pb-8 max-w-4xl">
        <RelatedGuides current="/" />
      </section>
    </div>
  )
}

export default Home
