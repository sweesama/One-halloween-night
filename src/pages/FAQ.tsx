function FAQ() {
  const faqs = [
    {
      q: "Is One Halloween Night really free?",
      a: "Yes! The game is 100% free to play on itch.io. No hidden costs, no ads, no in-app purchases."
    },
    {
      q: "Can I play in my browser?",
      a: "Yes! You can play directly in your browser on itch.io, or download the game for Windows/Mac."
    },
    {
      q: "How long does it take to complete?",
      a: "Each playthrough takes approximately 20-40 minutes, perfect for a spooky evening session."
    },
    {
      q: "Are there multiple endings?",
      a: "Yes! Your choices throughout the game affect the outcome, leading to multiple possible endings."
    },
    {
      q: "Is it scary?",
      a: "It's atmospheric horror with psychological tension. Not overly reliant on jump scares, but definitely spooky!"
    },
    {
      q: "What platforms is it available on?",
      a: "The game is available on itch.io for Windows and Mac. You can also play in your browser."
    },
    {
      q: "Can I play it more than once?",
      a: "Absolutely! The game has high replay value with multiple endings and hidden secrets to discover."
    },
    {
      q: "Who made this game?",
      a: "One Halloween Night was created by indie developer Ollie Noseworthy using Unity Engine."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-halloween-dark via-halloween-purple to-halloween-dark">
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h1 className="halloween-title text-5xl md:text-7xl text-halloween-orange text-center mb-8">
          Frequently Asked Questions
        </h1>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 mb-12">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-halloween-dark bg-opacity-60 backdrop-blur-sm p-6 rounded-xl border-2 border-halloween-orange">
                <h3 className="text-xl font-bold text-halloween-orange mb-3">
                  Q: {faq.q}
                </h3>
                <p className="text-halloween-light text-lg">
                  A: {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-halloween-purple bg-opacity-30 backdrop-blur-sm p-8 rounded-xl border border-halloween-orange text-center">
            <h2 className="text-2xl font-bold text-halloween-orange mb-4">Still have questions?</h2>
            <p className="text-halloween-light text-lg mb-6">
              Check out the official itch.io page for more information and community discussions.
            </p>
            <a
              href="https://ollienoseworthy.itch.io/one-halloween-night"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-halloween-orange hover:bg-halloween-light text-white text-xl font-bold px-10 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Visit itch.io Page →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
