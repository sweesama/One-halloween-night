import { PageShell, Section, In, ItchButton } from '../components/ui'
import { FAQ_HORROR_NIGHT } from '../routes'

function HalloweenHorrorNightGame() {
  return (
    <PageShell
      path="/halloween-horror-night-game"
      h1="A Halloween Horror Night Game You Can Play"
      intro={<p>A search for a Halloween horror night game usually means someone wants a horror game to play at home, not a ticket to a theme park. <In to="/">One Halloween Night</In> is a free first-person game for Windows about one evening spent handing out candy, until the night turns into a home invasion. A full run takes about 25 minutes. This page is that short answer. The full guide to the game stays on the homepage, which is the page for the name One Halloween Night.</p>}
    >
      <Section id="not-the-park-event" title="Not Universal's Halloween Horror Nights">
        <p>
          Halloween Horror Nights is Universal's seasonal event at its theme parks: haunted houses and scare zones you walk through in person. One Halloween Night is not that event, this site is not a Universal page, and nothing here is a ticket, a map, or an official download for the parks.
        </p>
        <p>
          If you wanted a horror game you can start at home, keep reading. Solo developer ollienoseworthy made this one in Unity and released it free on itch.io in October 2025. The developer calls it a realistic home-invasion horror experience.
        </p>
      </Section>

      <Section id="what-you-play" title="What you actually play">
        <p>
          You play a teenage boy whose parents leave him home alone on Halloween. The jobs start out ordinary: answer the phone, fill the candy bowl, open the door for trick-or-treaters, check the backyard, then get ready for bed. After midnight the house stops feeling empty. One choice, escape or hide, decides which of the <In to="/endings">two endings</In> you get.
        </p>
        <p>That shape is why it works as a game for Halloween night:</p>
        <ul>
          <li><strong>Free.</strong> No price and no in-game purchases. The Windows zip is on itch.io. <In to="/download">Install steps</In> are a separate page.</li>
          <li><strong>Short.</strong> The developer says about 25 minutes from the first doorbell to an ending, so it fits between other plans.</li>
          <li><strong>Slow, then sharp.</strong> Most of the night is candy, chores and odd visitors. The scares, including an intruder and a few jumpscares, are saved for the end.</li>
          <li><strong>Windows only.</strong> There is no official Steam, Mac, console, mobile or browser build. Sites offering an "unblocked" version are not official.</li>
        </ul>
        <p>
          Controls are WASD and the mouse. <In to="/gameplay">How to play</In> lists them. The <In to="/walkthrough">walkthrough</In> is there if you get stuck, and you do not need it for a first run.
        </p>
      </Section>

      <Section id="tonight" title="How to start tonight">
        <ol>
          <li>Use a Windows PC. The download is a zip of about 669 MB named One Halloween Night 1.2.zip.</li>
          <li>Extract the zip and run the .exe. Do not launch the game from inside the archive. The <In to="/download">download guide</In> has the full steps and the common fixes.</li>
          <li>Turn the volume up and wear headphones. The developer warns that the audio is quiet. A darker room helps, because the house has no flashlight.</li>
        </ol>
        <p>
          Recorded playthroughs usually run 25 to 40 minutes. To see both endings without starting over, choose Hide first, then use the in-game option to play the other ending. What each choice leads to is on the <In to="/endings">endings page</In>. Gameplay videos are on the <In to="/videos">videos page</In>.
        </p>
        <div className="text-center pt-2"><ItchButton label="Download the free game" /></div>
      </Section>

      <Section id="if-you-wanted-something-else" title="If you wanted a different Halloween night">
        <ul>
          <li><strong>More games after this one.</strong> Seven other home-alone and Halloween horror games for PC are listed under <In to="/games-like-one-halloween-night">games like One Halloween Night</In>. The closest match is also free.</li>
          <li><strong>The short film called One Halloween.</strong> That is a different work, not a download. The homepage explains <In to="/#what-is-one-halloween">what the name One Halloween refers to</In>.</li>
          <li><strong>A longer Halloween game on Steam.</strong> Halloween: The Game (IllFonic) and the visual novel One Night on Halloween are separate releases. Neither is this itch.io game. Whether this one is worth the half hour is covered in the <In to="/reviews">review</In>.</li>
        </ul>
      </Section>

      <Section id="questions" title="Questions about a Halloween horror night game">
        {FAQ_HORROR_NIGHT.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </Section>
    </PageShell>
  )
}

export default HalloweenHorrorNightGame
