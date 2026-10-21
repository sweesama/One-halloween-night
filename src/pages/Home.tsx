import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ITCH_URL, MIRROR_URL, ITCH_RATING, FACTS_CHECKED, FAQ_HOME } from '../routes'
import { RelatedGuides, In, Ext, YtThumb } from '../components/ui'

function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative z-10 container mx-auto px-4 py-16 md:py-20 text-center">
        <h1 className="text-halloween-orange mb-6">
          <span className="block text-xl md:text-2xl font-semibold tracking-wide mb-3">One Halloween, the free horror game</span>
          <span className="halloween-title block text-5xl md:text-7xl">One Halloween Night</span>
        </h1>
        <p className="text-xl md:text-2xl text-halloween-light mb-8 max-w-3xl mx-auto">
          Twenty-five minutes on Windows. You are home alone for one Halloween, with a bowl of candy and someone coming for more than candy. The short film also called One Halloween is a different work, explained below.
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
          <h2 className="halloween-title text-3xl md:text-4xl text-halloween-orange text-center mb-8">🎬 Watch One Halloween Night</h2>
          <div className="relative w-full rounded-2xl shadow-2xl border-4 border-halloween-orange overflow-hidden bg-black cursor-pointer" style={{ aspectRatio: '16/9' }} onClick={() => setIsVideoPlaying(true)}>
            {!isVideoPlaying ? (
              <>
                <YtThumb id="Cwfu69Y_EYQ" alt="One Halloween Night gameplay video by Thinknoodles: handing out candy on Halloween night" />
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
        <h2 id="what-is-one-halloween" className="halloween-title text-3xl md:text-4xl text-halloween-orange text-center">What is One Halloween?</h2>
        <p>
          <strong>One Halloween Night</strong> is a free first-person horror game about one Halloween spent home alone. Solo developer <Ext href="https://ollienoseworthy.itch.io/">ollienoseworthy</Ext> made it in Unity and released it on itch.io in October 2025. The developer calls it a <em>realistic home-invasion horror experience</em>. You play a teenage boy whose parents have to leave unexpectedly, so you look after the house and hand out candy. What should be a simple night turns into a nightmare.
        </p>
        <p>
          The shorter name is used by other works, and the one that leads a web search for "One Halloween" is a short film, not this download. <Ext href="http://www.rebeccamurga.com/one-halloween-latino-lens">Director Rebecca Murga</Ext> calls <em>One Halloween</em> an HBO short: a Colombian-born veteran, wounded in Afghanistan, spends one Halloween night trying to connect with his 10-year-old daughter on his first day home from the hospital. <Ext href="https://www.themoviedb.org/movie/573472-one-halloween">The Movie Database</Ext> lists it as One Halloween (2017), about 15 minutes, rated PG. The IMDb page is <Ext href="https://www.imdb.com/title/tt5839838/">tt5839838</Ext>. Search listings title that page as a 2016 short, so the year is listed both ways.
        </p>
        <p>
          Two Steam games are different as well. <Ext href="https://store.steampowered.com/app/1397960/One_Night_on_Halloween/">One Night on Halloween</Ext> (Cult Shock Games, October 29, 2020) is a visual novel. <Ext href="https://store.steampowered.com/app/3219630/Halloween_The_Game/">Halloween: The Game</Ext> (IllFonic, September 8, 2026) is the Michael Myers game. <Ext href="https://castalbums.org/songs/One-Halloween/257">One Hallowe'en</Ext>, a song from the 1970 musical <em>Applause</em>, is sometimes listed as "One Halloween". None of these is the itch.io horror game.
        </p>
        <p>
          Most of that night in the game is the build-up: odd trick-or-treaters, a stranger in the backyard, chores, leftover pizza, then bed. A VHS camera effect and 3D sound carry it, and the developer warns that the audio is quiet, so turn your volume up and wear headphones. One choice near the end decides which of the <In to="/endings">two endings</In> you get.
        </p>
        <h3 className="text-2xl font-bold text-halloween-orange mt-2">How one Halloween plays out</h3>
        <p>
          The game follows a single evening, and it moves on when you finish the current chore:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Answer the house phone. Your mom leaves you two jobs: clean up the candy wrappers, and smack the basement water pump if it starts.</li>
          <li>Carry the candy down from upstairs and throw it into the bowl by the front door.</li>
          <li>From about 7:40 PM, open the door and give each trick-or-treater a piece of candy.</li>
          <li>Check the backyard, where an old man has set up a candy stand. He leaves. Call your mom and tell her.</li>
          <li>Bag the wrappers, eat the leftover pizza and change for bed. The clock moves to 11:59 PM.</li>
          <li>After midnight the pump and a late doorbell get you up again. At 1:30 AM you fetch a glass of water, hear footsteps, and choose: escape the house, or hide.</li>
        </ol>
        <p>
          Every visitor, in order, is in the <In to="/walkthrough">walkthrough</In>. What hide and escape each lead to is in the <In to="/endings">endings guide</In>.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-base">
            <tbody>
              {[
                ['Price', 'Free'],
                ['Developer', 'ollienoseworthy'],
                ['Released', 'October 2025'],
                ['Platform', 'Windows PC (itch.io)'],
                ['Length', 'About 25 minutes'],
                ['Endings', '2 (hide or escape)'],
                ['Controls', 'WASD + mouse, left click interact, right click throw'],
                ['Build', 'One Halloween Night 1.2.zip (669 MB)'],
                ['itch.io rating', `${ITCH_RATING.value}/5 from ${ITCH_RATING.count} ratings`],
              ].map(([k, v]) => (
                <tr key={k}><th className="border border-halloween-orange p-2 text-left text-halloween-orange">{k}</th><td className="border border-halloween-orange p-2">{v}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm opacity-80 mt-2">Facts and rating from the <Ext href={ITCH_URL}>official itch.io page</Ext>, checked {FACTS_CHECKED}. The 1.2 zip name is the Windows build listed on that page.</p>
          <p className="text-sm opacity-80 mt-2">One Night on Halloween, the visual novel on Steam, is a different game. One Halloween Night itself is only on itch.io. The short film One Halloween is a different work too; see above.</p>
        </div>
      </section>

      {/* Why play it on Halloween night */}
      <section className="relative z-10 container mx-auto px-4 py-12 max-w-4xl text-halloween-light text-lg leading-relaxed">
        <h2 className="halloween-title text-3xl md:text-4xl text-halloween-orange text-center mb-6">A short game for one Halloween</h2>
        <p className="mb-4">
          Looking for one game to play on Halloween itself? One Halloween Night is built around that evening, and it fits into a single sitting:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Short:</strong> about 25 minutes from the first doorbell to the ending, so it works between trick-or-treaters or before a movie.</li>
          <li><strong>Free:</strong> no price and no in-game purchases. You only need a Windows PC (<In to="/download">install steps</In>).</li>
          <li><strong>Slow-burn:</strong> most of the night is candy, chores and odd visitors, with the scares saved for the end. Good to watch with friends or stream.</li>
          <li><strong>Two endings:</strong> one choice near the end decides how the night goes. Our <In to="/walkthrough">step-by-step walkthrough</In> covers both routes.</li>
        </ul>
        <p>
          Already finished it? See our list of <In to="/games-like-one-halloween-night">games like One Halloween Night</In> for more home-alone and Halloween horror games.
        </p>
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

      <section id="one-halloween-questions" className="relative z-10 container mx-auto px-4 py-12 max-w-4xl text-halloween-light text-lg leading-relaxed">
        <h2 className="halloween-title text-3xl md:text-4xl text-halloween-orange text-center mb-8">Questions about One Halloween</h2>
        <div className="space-y-6">
          {FAQ_HOME.map((f) => (
            <div key={f.q} className="bg-halloween-dark bg-opacity-60 p-6 rounded-xl border-2 border-halloween-orange">
              <h3 className="text-xl font-bold text-halloween-orange mb-2">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-6">More practical answers (controls, Mac, browser, how scary it is) are on the <In to="/faq">FAQ page</In>. Install steps are in the <In to="/download">download guide</In>.</p>
      </section>

      <section className="relative z-10 container mx-auto px-4 pb-8 max-w-4xl">
        <RelatedGuides current="/" />
      </section>
    </div>
  )
}

export default Home
