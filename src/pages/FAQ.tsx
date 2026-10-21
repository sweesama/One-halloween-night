import { PageShell, Section, In } from '../components/ui'
import { FAQ_GENERAL } from '../routes'

function FAQ() {
  return (
    <PageShell
      path="/faq"
      h1="One Halloween Night FAQ"
      intro={<><p>Quick answers to the most common questions about <In to="/">One Halloween Night</In>, the free Windows horror game. For more detail, see the <In to="/download">download guide</In>, the <In to="/walkthrough">walkthrough</In> and the <In to="/endings">endings guide</In>.</p><p className="mt-4">The words One Halloween also name a short film by Rebecca Murga, plus a song from the musical Applause. Those are not this game. <In to="/#what-is-one-halloween">What One Halloween refers to</In> is explained on the game page, which is the page to open for the game itself.</p></>}
    >
      <Section title="Frequently asked questions">
        {FAQ_GENERAL.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </Section>
    </PageShell>
  )
}

export default FAQ
