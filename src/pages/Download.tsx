import { PageShell, Section, In, Ext, ItchButton } from '../components/ui'
import { ITCH_URL, MIRROR_URL, FACTS_CHECKED } from '../routes'

function Download() {
  return (
    <PageShell
      path="/download"
      h1="How to Download One Halloween Night"
      intro={<p><strong>One Halloween Night is a free download for Windows PC on itch.io.</strong> You get a zip file of about 669 MB: extract it and run the .exe. There is no Steam, console, Mac, mobile or browser version. Install steps, platform answers and common fixes are below.</p>}
    >
      <Section id="facts" title="Quick facts">
        <table>
          <tbody>
            <tr><th>Price</th><td>Free</td></tr>
            <tr><th>Official store</th><td><Ext href={ITCH_URL}>itch.io (ollienoseworthy)</Ext></td></tr>
            <tr><th>Platform</th><td>Windows PC only</td></tr>
            <tr><th>Download</th><td>"One Halloween Night 1.2.zip", 669 MB</td></tr>
            <tr><th>Engine</th><td>Unity</td></tr>
            <tr><th>Length</th><td>About 25 minutes</td></tr>
            <tr><th>Released</th><td>October 2025, still receiving updates</td></tr>
          </tbody>
        </table>
        <p className="text-sm opacity-80">Checked on the official itch.io page on {FACTS_CHECKED}.</p>
      </Section>

      <Section id="install" title="Install on Windows, step by step">
        <ol>
          <li>Open the <Ext href={ITCH_URL}>One Halloween Night page on itch.io</Ext> and click <strong>Download</strong>. If itch.io offers an optional way to support the developer, you can skip it; the game is free.</li>
          <li>Download <strong>One Halloween Night 1.2.zip</strong> (669 MB).</li>
          <li>Right-click the zip and choose <strong>Extract All</strong>. Don't run the game from inside the zip.</li>
          <li>Open the extracted folder and double-click the game's <strong>.exe</strong> file. This is exactly what the developer's install instructions say: "download the file, extract it, then run the .exe".</li>
          <li>Turn your volume up or wear headphones before you start. The developer notes that the in-game audio is quiet.</li>
        </ol>
        <p>You can also install and launch the game through the free <Ext href="https://itch.io/app">itch.io desktop app</Ext>, which handles extraction and updates for you.</p>
        <div className="text-center pt-2"><ItchButton label="Download free on itch.io" /></div>
      </Section>

      <Section id="mirror" title="Alternative download">
        <p>If itch.io is slow for you, this site also hosts a copy of the Windows zip: <a href={MIRROR_URL} className="underline text-halloween-orange hover:text-white">direct download (about 668 MB)</a>. It was uploaded in November 2025, so it may be older than the latest update on itch.io. For the newest version, use itch.io.</p>
      </Section>

      <Section id="platforms" title="Steam, Mac, PS5, mobile, browser: where can you play?">
        <table>
          <thead><tr><th>Platform</th><th>Available?</th></tr></thead>
          <tbody>
            <tr><td>Windows PC (itch.io)</td><td>✅ Yes, free</td></tr>
            <tr><td>Steam</td><td>❌ No. "One Night on Halloween" on Steam is a different game (a visual novel).</td></tr>
            <tr><td>Mac / macOS</td><td>❌ No official Mac build</td></tr>
            <tr><td>Linux</td><td>❌ No official Linux build</td></tr>
            <tr><td>PS5 / PS4 / Xbox / Switch</td><td>❌ No</td></tr>
            <tr><td>Android / iPhone</td><td>❌ No</td></tr>
            <tr><td>Browser / online / "unblocked"</td><td>❌ No official browser version. Sites claiming to run it online are not from the developer.</td></tr>
          </tbody>
        </table>
        <p>This is accurate as of {FACTS_CHECKED}. If the developer adds a platform, it will appear on the itch.io page first.</p>
      </Section>

      <Section id="requirements" title="System requirements">
        <p>The developer has not published minimum or recommended specs. What we know: it is a 3D Unity game for Windows with realistic graphics, and the download is 669 MB. Keep at least a couple of gigabytes free so you have room for both the zip and the extracted files. Older or low-power laptops may struggle with the graphics.</p>
      </Section>

      <Section id="troubleshooting" title="Common problems and fixes">
        <ul>
          <li><strong>"Windows protected your PC" (SmartScreen):</strong> Windows shows this for many small indie games that aren't code-signed. If you downloaded from itch.io, click <em>More info</em> and then <em>Run anyway</em>.</li>
          <li><strong>The game won't start:</strong> make sure you fully extracted the zip and are running the .exe from the extracted folder, not from inside the zip.</li>
          <li><strong>Can't hear anything:</strong> the audio is quiet by design. Raise both your system volume and the in-game volume.</li>
          <li><strong>Too dark to see:</strong> there is no flashlight, so raise your monitor brightness and play in a dark room.</li>
          <li><strong>Found a bug:</strong> the developer asks players to report bugs in the comments on the itch.io page.</li>
        </ul>
      </Section>

      <Section title="After installing">
        <p>New to the game? Read <In to="/gameplay">how to play</In> for controls and tips, follow the <In to="/walkthrough">walkthrough</In> if you get stuck, or check the <In to="/endings">endings guide</In> once you finish.</p>
      </Section>
    </PageShell>
  )
}

export default Download
