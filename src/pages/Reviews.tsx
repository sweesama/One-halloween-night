import { PageShell, Section, In, Ext, ItchButton } from '../components/ui'
import { ITCH_URL, ITCH_RATING, FACTS_CHECKED } from '../routes'

// Quotes are copied verbatim from public comments on the official itch.io page.
const PRAISE = [
  { text: 'Loved the game its the perfect game for halloween night, havent ever been that scared of a old man before', author: 'Bibbly' },
  { text: 'Nicely made horror game. I had a lot of fun passing out candy and experiencing one halloween night. The ending was creepy and unexpected', author: 'BizarreSpartan' },
  { text: 'I liked the game. Of all similar games, this one is the most atmospheric. The plot is banal, but I still give it a big thumbs up and wish you success', author: 'govnoezhkkka' },
  { text: 'This game was so fun, I really enjoyed it 😊 I liked the hide ending better.', author: 'BabidollRose' },
]
const CRITICISM = [
  { text: 'Having to get a drink everytime you get caught is very annoying. The checkpoint should be somewhere else.', author: 'Louki-Dev' },
  { text: 'I did wish there were light switches or a flash light as it was dark and difficult to see, especially when hiding', author: 'Hazzaween' },
  { text: 'I liked it, but it felt a lot like Home Alone from the Fears to Fathom series', author: 'Umbra Studio' },
]

function Quote({ q }: { q: { text: string; author: string } }) {
  return (
    <blockquote className="bg-halloween-purple bg-opacity-30 p-4 rounded-lg border border-halloween-orange">
      <p className="italic">"{q.text}"</p>
      <footer className="text-halloween-orange font-semibold mt-2">— {q.author}, itch.io comment</footer>
    </blockquote>
  )
}

function Reviews() {
  return (
    <PageShell
      path="/reviews"
      h1="One Halloween Night Review: Is It Worth Playing?"
      intro={<p>On itch.io, <In to="/">One Halloween Night</In> is rated <strong>{ITCH_RATING.value} out of 5 from {ITCH_RATING.count} ratings</strong> (checked {FACTS_CHECKED}). In short: it's free, short and very atmospheric. Players love the Halloween night setting and the creepy old man. The most common complaints are the slow start, the dark house and replaying the water scene after getting caught.</p>}
    >
      <Section id="verdict" title="Verdict">
        <ul>
          <li><strong>Play it if</strong> you like short, realistic, slow-burn horror in the style of Fears to Fathom, and want something for Halloween night itself.</li>
          <li><strong>Skip it if</strong> you want constant scares, combat or a long game. Most of the 25 minutes is calm build-up.</li>
          <li><strong>Cost:</strong> free, so the only cost is about half an hour.</li>
        </ul>
      </Section>

      <Section id="praise" title="What players like">
        <div className="grid gap-4">{PRAISE.map((q) => <Quote key={q.author} q={q} />)}</div>
      </Section>

      <Section id="criticism" title="What players criticize">
        <div className="grid gap-4">{CRITICISM.map((q) => <Quote key={q.author} q={q} />)}</div>
      </Section>

      <Section title="Read more or rate it yourself">
        <p>The rating and all comments live on the <Ext href={ITCH_URL}>official itch.io page</Ext>, where you can also leave your own. Curious how it ends? See the <In to="/endings">endings explained</In>.</p>
        <div className="text-center pt-2"><ItchButton /></div>
      </Section>
    </PageShell>
  )
}

export default Reviews
