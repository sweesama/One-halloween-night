import { PageShell, Section, Spoiler, In, Ext, ItchButton } from '../components/ui'
import { ITCH_URL } from '../routes'

const STEPS: { id: string; title: string; body: JSX.Element }[] = [
  {
    id: 'phone-call', title: '1. The phone call (early evening)',
    body: (<>
      <p>You play a 14-year-old left home alone: your grandmother had a sudden injury and your parents are staying the night with her. Answer the ringing house phone. Your mom gives you the two jobs that matter later:</p>
      <ul>
        <li><strong>Clean up the candy wrappers</strong> the kids leave in the front yard.</li>
        <li>The <strong>old water pump in the basement</strong> has been making noises. If it starts up, go down and give it a smack.</li>
      </ul>
    </>),
  },
  {
    id: 'candy-bowl', title: '2. Fill the candy bowl',
    body: (<>
      <p>The game tells you the candy is upstairs in a bedroom. Look through the upstairs rooms for the small box of candy, carry it back down and <strong>throw it into the bowl by the front door</strong> (right mouse button throws). You can switch on the TV with the remote while you wait.</p>
      <p>Tip: the house is dark and there is no flashlight, so use this quiet time to learn the layout: front door, kitchen, living room couch, the stairs, your bedroom and the basement door. You will walk these routes again later.</p>
    </>),
  },
  {
    id: 'trick-or-treaters', title: '3. Hand out candy to the trick-or-treaters',
    body: (<>
      <p>Around 7:40 PM the doorbell starts ringing. Open the door, talk to each visitor (left click advances dialogue), then pick up a piece of candy from the bowl and give it to them. The visitors include:</p>
      <ul>
        <li>A masked kid who says he is too old for this and just wants the candy.</li>
        <li>A kid in skeleton face paint who promises to stop haunting your dreams if he gets good candy, followed by his older brother in a skull mask, who is looking for him.</li>
        <li>A small kid in costume, and a kid in a ghost costume.</li>
        <li>A very convincing clown who calls himself a huge Halloween enthusiast.</li>
        <li>A grown man in a vampire costume who is clearly too old to be trick-or-treating.</li>
        <li>A masked kid who mentions that an old man in <strong>your backyard</strong> is handing out full-size chocolate bars.</li>
      </ul>
    </>),
  },
  {
    id: 'old-man', title: '4. Check the backyard',
    body: (<>
      <p>Go out the back door. An old man in ordinary clothes has set up a candy stand on your lawn. He says he is "just spreading the Halloween spirit" and leaves, but his setup stays behind.</p>
      <p>Back inside, call your mom and tell her about it. She reassures you that he is probably just a lonely man and tells you to call again if anything else happens. Remember this old man.</p>
    </>),
  },
  {
    id: 'clean-up', title: '5. Clean up the front yard',
    body: (<>
      <p>Once the visitors stop coming, take a garbage bag from the kitchen counter, pick up the wrappers on the front lawn and throw the bag away. Notice that the old man's stand in the backyard is now gone.</p>
    </>),
  },
  {
    id: 'pizza', title: '6. Eat the leftover pizza',
    body: (<>
      <p>You get hungry. Take the leftover pizza from the fridge, heat it up and eat it on the couch in front of the TV (you click repeatedly to eat each slice). The character notices a strange aftertaste and suddenly feels very sleepy.</p>
    </>),
  },
  {
    id: 'bed', title: '7. Pajamas and bed',
    body: (<>
      <p>Go upstairs, change into the pajamas in your bedroom closet and get into bed. The clock moves to 11:59 PM.</p>
    </>),
  },
  {
    id: 'water-pump', title: '8. Smack the water pump',
    body: (<>
      <p>A noise starts up: it is the water pump your mom warned you about. Walk down to the basement and hit the flashing pump to stop it, then go back to bed.</p>
    </>),
  },
  {
    id: 'midnight-visitor', title: '9. The midnight doorbell',
    body: (<>
      <p>The doorbell rings even though it is almost midnight. A kid at the door insists that you snatched his candy and ran, even though you were in bed. Tell him to go home and return to bed.</p>
    </>),
  },
  {
    id: 'water', title: '10. 1:30 AM: get a glass of water (checkpoint)',
    body: (<>
      <p>At 1:30 AM your throat is dry. Go downstairs, get water from the fridge, drink it and head back up to bed. <strong>This is effectively the checkpoint:</strong> if you are caught later, the game sends you back here, which is why many players complain about drinking water again and again.</p>
    </>),
  },
  {
    id: 'choice', title: '11. Footsteps and the final choice',
    body: (<>
      <p>Lying in bed you hear footsteps. A strangely hunched figure creeps into your bedroom: it is the old man from the backyard, and he is inside the house. The game now asks you to <strong>Escape the house</strong> or <strong>Hide</strong>.</p>
      <ul>
        <li><strong>Hide</strong>: leads to the rescue ending. This is the one most players call the good ending.</li>
        <li><strong>Escape the house</strong>: the downstairs doors will not open and the old man catches you.</li>
      </ul>
      <p>Both outcomes, and how to see them quickly, are on the <In to="/endings">endings guide</In>.</p>
    </>),
  },
]

function Walkthrough() {
  return (
    <PageShell
      path="/walkthrough"
      h1="One Halloween Night Walkthrough"
      intro={<p>This is a step-by-step walkthrough of <In to="/">One Halloween Night</In>, the free home-invasion horror game by ollienoseworthy. A full run takes about 25 minutes. Follow the steps in order: the game moves on when you finish each task, and the last choice decides which of the two endings you get. New to the name? <In to="/#what-is-one-halloween">What One Halloween refers to</In> is on the game page.</p>}
    >
      <Spoiler>this walkthrough covers the whole story. Play it blind first if you can.</Spoiler>

      <Section id="contents" title="Contents">
        <ol>
          {STEPS.map((s) => <li key={s.id}><a href={`#${s.id}`} className="underline hover:text-halloween-orange">{s.title.replace(/^\d+\.\s*/, '')}</a></li>)}
          <li><a href="#tips" className="underline hover:text-halloween-orange">Tips and little secrets</a></li>
          <li><a href="#characters" className="underline hover:text-halloween-orange">Characters</a></li>
        </ol>
      </Section>

      {STEPS.map((s) => <Section key={s.id} id={s.id} title={s.title}>{s.body}</Section>)}

      <Section id="tips" title="Tips and little secrets">
        <ul>
          <li><strong>Choose Hide first.</strong> If you pick Escape and get caught, you replay from the glass of water. If you pick Hide first, the game offers to play the other ending afterwards, so you see both with the least repetition.</li>
          <li><strong>Turn the volume up and wear headphones.</strong> The developer warns that the audio is quiet, and knocks and footsteps are your main warnings.</li>
          <li><strong>Raise your monitor brightness.</strong> There is no flashlight or sprint, and several players found the house hard to see, especially while hiding.</li>
          <li><strong>The endless candy bowl.</strong> Players have found that repeatedly clicking the candy bowl keeps spawning candy, so you can bury the porch in it. It is a harmless bug, though one player joked they nearly crashed the game with it, so don't overdo it.</li>
          <li><strong>Talk to everyone.</strong> The visitor who mentions the backyard and your mom's warning about the pump both set up what happens after midnight.</li>
          <li><strong>Stuck?</strong> The story only moves on after each chore, so a "stuck" moment usually means one is unfinished. Check that you threw away the trash bag, finished the pizza and went back to bed after each event.</li>
        </ul>
      </Section>

      <Section id="characters" title="Characters">
        <ul>
          <li><strong>You</strong>: a 14-year-old boy home alone on Halloween night.</li>
          <li><strong>Mom</strong>: only heard on the house phone. She sets your chores and reassures you about the old man.</li>
          <li><strong>The trick-or-treaters</strong>: masked kids, a skeleton kid and his older brother, a clown, an adult vampire and more. Most are comic relief, a few are unsettling.</li>
          <li><strong>The old man</strong>: sets up a candy stand in your backyard and later appears inside the house. The rescue ending reveals who he is.</li>
          <li><strong>The neighbor across the street</strong>: you find out in the ending that your parents asked him to keep an eye on the house.</li>
        </ul>
      </Section>

      <Section title="Sources and version">
        <p>This guide is based on the game's <Ext href={ITCH_URL}>official itch.io page</Ext> and on several complete recorded playthroughs (see the <In to="/videos">videos page</In>). The developer has said in the itch.io comments that he keeps updating the game, so small details may change in newer versions.</p>
        <div className="text-center pt-2"><ItchButton /></div>
      </Section>
    </PageShell>
  )
}

export default Walkthrough
