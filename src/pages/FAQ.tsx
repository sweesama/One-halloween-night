import { PageShell, Section, In } from '../components/ui'
import { FAQ_GENERAL } from '../routes'

function FAQ() {
  return (
    <PageShell
      path="/faq"
      h1="One Halloween Night FAQ"
      intro={<p>Quick answers to the most common questions about One Halloween Night. For more detail, see the <In to="/download">download guide</In>, the <In to="/walkthrough">walkthrough</In> and the <In to="/endings">endings guide</In>.</p>}
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
