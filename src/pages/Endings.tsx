import { PageShell, Section, Spoiler, In, Ext, ItchButton } from '../components/ui'
import { FAQ_ENDINGS, ITCH_URL } from '../routes'

function Endings() {
  return (
    <PageShell
      path="/endings"
      h1="One Halloween Night Endings Explained"
      intro={<p><strong><In to="/">One Halloween Night</In> has two endings.</strong> Both come from a single choice at about 1:30 AM, when the old man creeps into your bedroom and the game asks: <em>"Escape the house or hide?"</em> Choose <strong>Hide</strong> for the rescue ending, or <strong>Escape the house</strong> for the ending where he catches you. The game itself, and how the name differs from the short film One Halloween, is explained in <In to="/#what-is-one-halloween">what One Halloween refers to</In>.</p>}
    >
      <Spoiler />

      <Section id="summary" title="Both endings at a glance">
        <table>
          <thead><tr><th>Ending</th><th>How to get it</th><th>What happens</th></tr></thead>
          <tbody>
            <tr><td><strong>Hide ending</strong> (rescued, the "good" ending)</td><td>Choose <strong>Hide</strong> at the final choice</td><td>You hide under the bed while the old man searches. Police sirens arrive and he is captured.</td></tr>
            <tr><td><strong>Escape ending</strong> (caught, the "bad" ending)</td><td>Choose <strong>Escape the house</strong></td><td>You try to reach the neighbor across the street, but the doors downstairs will not open and the old man gets you.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="reach-the-choice" title="How to reach the choice">
        <p>Play through the night as normal: hand out candy, check the backyard, clean the yard, eat the pizza, go to bed, smack the water pump, deal with the midnight doorbell and get a glass of water at 1:30 AM. Back in bed you hear footsteps, and the choice appears. The <In to="/walkthrough">full walkthrough</In> covers each step.</p>
      </Section>

      <Section id="hide-ending" title="Ending 1: Hide (the rescue ending)">
        <p>Pick <strong>Hide</strong> and you slip under the bed. The old man wanders the room calling <em>"Where are you, kiddo? I've got some treats for you"</em> and offering a chocolate bar and a bag of candy. Stay put. Police sirens arrive, and once it is quiet you can come out.</p>
        <p><strong>What the epilogue reveals:</strong> the man across the street, the neighbor you always found a little creepy because of how long he stared, could not sleep and was watching the street. Your parents had asked him to keep an eye on the house. He saw a second figure moving behind you inside the house and called the police. The old man was caught and turned out to be an escaped patient from a nearby secure facility. He wasn't after anyone in particular, but you were in real danger.</p>
        <p>Most players and most "good ending" labels on YouTube treat this as the main, canon ending.</p>
      </Section>

      <Section id="escape-ending" title="Ending 2: Escape the house (the caught ending)">
        <p>Pick <strong>Escape the house</strong> and your character decides to run to the neighbor across the street for help. There is no sprint button, and the doors downstairs will not open. The old man bursts out of the basement and you are caught.</p>
        <p>Players regularly ask whether you can actually escape. Based on the playthroughs and player comments so far, you can't: being caught is this ending. In the itch.io comments the developer called letting the player escape "a very good idea", so a future update may change this route.</p>
      </Section>

      <Section id="see-both" title="How to see both endings quickly">
        <ol>
          <li><strong>Choose Hide first.</strong> When the rescue epilogue finishes, the game offers to play the other ending and puts you straight back at the choice.</li>
          <li>Then choose <strong>Escape the house</strong> to see the caught ending.</li>
          <li>If you pick Escape first and retry, the game restarts you at the glass of water in the kitchen, so you have to replay a few minutes before the choice every time. Many players have complained about this.</li>
        </ol>
      </Section>

      <Section id="faq" title="Endings FAQ">
        {FAQ_ENDINGS.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </Section>

      <Section title="Sources">
        <p>Checked against several complete recorded playthroughs that show both endings (listed on the <In to="/videos">videos page</In>) and the comments on the <Ext href={ITCH_URL}>official itch.io page</Ext>. The game is still being updated, so details may change.</p>
        <div className="text-center pt-2"><ItchButton label="Play it and pick your ending" /></div>
      </Section>
    </PageShell>
  )
}

export default Endings
