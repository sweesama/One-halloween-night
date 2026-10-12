import { PageShell, Section, In, Ext } from '../components/ui'
import { FACTS_CHECKED } from '../routes'

interface Game { name: string; url: string; store: string; price: string; dev: string; year: string; why: string; desc: string }

const GAMES: Game[] = [
  {
    name: 'Fears to Fathom – Home Alone', url: 'https://store.steampowered.com/app/1671340/', store: 'Steam', price: 'Free', dev: 'Rayll', year: '2021',
    desc: 'The free first episode of an episodic psychological horror series. You play Miles, a 14-year-old home alone while his parents are out of town, and the choices you make decide whether he gets through the night.',
    why: 'The closest match, and free. Several itch.io commenters say One Halloween Night feels a lot like it: a 14-year-old home alone, a VHS look, and a slow build to a very real threat.',
  },
  {
    name: 'Fears to Fathom – Norwood Hitchhike', url: 'https://store.steampowered.com/app/1763050/', store: 'Steam', price: 'Paid', dev: 'Rayll', year: '2022',
    desc: 'A 19-year-old on an interstate drive ends up at a motel after strange events on the road.',
    why: 'The same realistic, slow-burn style as Home Alone, if you want another hour of "this could really happen" horror.',
  },
  {
    name: "That's not my Neighbor", url: 'https://store.steampowered.com/app/3431040/', store: 'Steam', price: 'Paid (low price)', dev: 'Nachosama Games', year: '2025',
    desc: 'You are the doorman of a 1955 apartment building and must decide whether the people at the door are your neighbors or doppelgangers.',
    why: 'If the best part for you was nervously opening the door to strange visitors, this whole game is that feeling.',
  },
  {
    name: 'Home Safety Hotline', url: 'https://store.steampowered.com/app/2357910/', store: 'Steam', price: 'Paid', dev: 'Night Signal Entertainment', year: '2024',
    desc: 'An analog-horror telephone operator simulator: you take calls on a 90s home safety hotline and work out what is lurking in callers\' homes, from pests to much worse.',
    why: 'Ordinary houses that slowly stop feeling safe, with a retro feel and dread instead of non-stop chases.',
  },
  {
    name: "[Chilla's Art] The Closing Shift", url: 'https://store.steampowered.com/app/1843090/', store: 'Steam', price: 'Paid', dev: "Chilla's Art", year: '2022',
    desc: 'A short Japanese psychological horror "walking simulator" about a girl working a closing shift, with a VHS film look and light puzzles.',
    why: 'Another short, first-person story about one ordinary night going wrong, with the same VHS-style picture.',
  },
  {
    name: 'Murder House', url: 'https://store.steampowered.com/app/1064460/', store: 'Steam', price: 'Paid', dev: 'Puppet Combo', year: '2020',
    desc: 'A news crew breaks into the abandoned home of an executed serial killer, the "Easter Ripper", and finds he may not be dead. A PS1-style survival horror game with tank controls and an 80s slasher plot.',
    why: 'For when you want the intruder part turned all the way up: you are stalked through a house by a killer. It is very gory, so it is not for younger players.',
  },
  {
    name: 'Halloween: The Game', url: 'https://store.steampowered.com/app/3219630/', store: 'Steam', price: 'Paid (full price)', dev: 'IllFonic', year: '2026',
    desc: 'Based on the 1978 film: on Halloween night in Haddonfield, play as Michael Myers or fight back against him.',
    why: 'The big-budget option if you want a full Halloween night of horror rather than a 25-minute short.',
  },
]

function SimilarGames() {
  return (
    <PageShell
      path="/games-like-one-halloween-night"
      h1="Games Like One Halloween Night"
      intro={<p>If you finished <strong>One Halloween Night</strong> and want more of the same, home alone at night with a stranger getting a little too close, these seven PC horror games are the best next picks. We start with the closest match, and the first one is free.</p>}
    >
      <Section id="list" title="Quick list">
        <table>
          <thead><tr><th>Game</th><th>Price</th><th>Best if you liked…</th></tr></thead>
          <tbody>
            {GAMES.map((g) => (
              <tr key={g.name}><td><a href={`#${slug(g.name)}`} className="underline">{g.name}</a></td><td>{g.price}</td><td>{g.why.split('.')[0]}.</td></tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm opacity-80">Store details checked on Steam on {FACTS_CHECKED}. Prices and sales change, so check the store page.</p>
      </Section>

      {GAMES.map((g, i) => (
        <Section key={g.name} id={slug(g.name)} title={`${i + 1}. ${g.name}`}>
          <p><strong>{g.store}</strong> · {g.price} · {g.dev} · {g.year}</p>
          <p>{g.desc}</p>
          <p><strong>Why it's like One Halloween Night:</strong> {g.why}</p>
          <p><Ext href={g.url}>View {g.name} on {g.store} →</Ext></p>
        </Section>
      ))}

      <Section id="haven-t-played" title="Haven't played One Halloween Night yet?">
        <p>It's free, about 25 minutes long, and a good one to play on Halloween night itself. See <In to="/download">how to download it</In>, then use the <In to="/walkthrough">walkthrough</In> and the <In to="/endings">endings guide</In> if you need them.</p>
      </Section>
    </PageShell>
  )
}

function slug(s: string) {
  return s.toLowerCase().replace(/\[.*?\]\s*/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export default SimilarGames
