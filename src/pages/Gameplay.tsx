import { PageShell, Section, In, ItchButton } from '../components/ui'

function Gameplay() {
  return (
    <PageShell
      path="/gameplay"
      h1="How to Play One Halloween Night"
      intro={<p><strong>One Halloween Night</strong> is a short first-person horror game. You walk around a house, talk to people and pick things up. There is no combat and no inventory. A run takes about 25 minutes, and one choice at the end decides between two endings.</p>}
    >
      <Section id="controls" title="Controls">
        <table>
          <thead><tr><th>Key</th><th>Action</th></tr></thead>
          <tbody>
            <tr><td>W, A, S, D</td><td>Move</td></tr>
            <tr><td>Mouse</td><td>Look around</td></tr>
            <tr><td>Left mouse button</td><td>Interact, continue dialogue</td></tr>
            <tr><td>Right mouse button</td><td>Throw or drop the object you are holding</td></tr>
          </tbody>
        </table>
        <p>These are the controls listed by the developer, and they are also shown in-game. There is no sprint button and no flashlight.</p>
      </Section>

      <Section id="how-it-works" title="How the game works">
        <ul>
          <li><strong>The story moves on through chores.</strong> Fill the candy bowl, answer the door, clean the yard, eat, go to bed. Each finished task triggers the next part of the night. The <In to="/walkthrough">walkthrough</In> lists them in order.</li>
          <li><strong>Talking matters.</strong> Most of the story comes from what the trick-or-treaters and your mom (on the house phone) tell you.</li>
          <li><strong>Physical objects.</strong> You carry things by hand: candy, a garbage bag, food. Right-click to throw. Throwing candy to the trick-or-treaters works.</li>
          <li><strong>One real choice.</strong> Near the end you decide to escape the house or hide. That decides the ending. See <In to="/endings">both endings explained</In>.</li>
          <li><strong>Checkpoint.</strong> If you are caught, you restart at the glass of water just before the choice, not at the very beginning.</li>
        </ul>
      </Section>

      <Section id="length" title="How long is it?">
        <p>The developer says a full playthrough takes about 25 minutes. Recorded playthroughs typically run 25 to 40 minutes, depending on how much players explore and whether they go back for the second ending.</p>
      </Section>

      <Section id="scary" title="How scary is it?">
        <p>It's a slow burn. The first two-thirds are mostly a cosy, slightly odd Halloween evening with funny trick-or-treaters. The tension builds after midnight and peaks with an intruder in the house. Players mention a few jumpscares rather than constant ones. The developer describes it as a <em>realistic home-invasion horror experience</em> and the itch.io tags include Psychological Horror and Creepy.</p>
      </Section>

      <Section id="tips" title="Beginner tips">
        <ul>
          <li>Play at night with headphones. The developer warns that the audio is quiet, so turn up your system and in-game volume.</li>
          <li>Raise your screen brightness, because the house is dark.</li>
          <li>Learn the house layout while handing out candy. You will need it later in the dark.</li>
          <li>To see both endings with the least replaying, choose <strong>Hide</strong> first.</li>
          <li>Found a bug? The developer asks for bug reports in the itch.io comments.</li>
        </ul>
        <p>Haven't installed it yet? See the <In to="/download">download and install guide</In>.</p>
        <div className="text-center pt-2"><ItchButton /></div>
      </Section>
    </PageShell>
  )
}

export default Gameplay
