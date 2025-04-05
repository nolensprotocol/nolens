import Head from 'next/head'
import { useState } from 'react'

export default function Contribute() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic for submitting email (e.g. to backend or third-party service)
    console.log('Email submitted:', email);
    setSubmitted(true);
  }

  return (
    <>
      <Head>
        <title>Contribute to Nolens</title>
        <meta name="description" content="Join Nolens and help build the future of access-first economies." />
      </Head>

      <main className="relative min-h-screen bg-white text-gray-900 pt-28 pb-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-normal opacity-0 animate-fade-in-up">
            <span className="inline-block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-transparent bg-clip-text">
              Contribute to Nolens
            </span>
          </h1>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in-up delay-200">
            Nolens is for those building beyond ownership.
            <br />
            A protocol for shared, tokenized access. If you're rethinking how we live, create, and coordinate—you're early.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 z-10 relative mb-24">
          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <h3 className="text-xl font-semibold mb-2">🛠️ Development</h3>
            <p className="text-sm text-gray-600 mb-4">Smart contracts, DApp UI, integrations, GitHub PRs — builders welcome.</p>
            <a href="https://github.com/nolensprotocol" target="_blank" className="text-indigo-600 hover:underline font-medium text-sm">Explore GitHub</a>
          </div>

          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <h3 className="text-xl font-semibold mb-2">🎨 Design</h3>
            <p className="text-sm text-gray-600 mb-4">Help define the identity of Nolens — UI/UX, visual systems, and storytelling.</p>
            <a href="https://t.me/nolensprotocol" target="_blank" className="text-indigo-600 hover:underline font-medium text-sm">Join Telegram</a>
          </div>

          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <h3 className="text-xl font-semibold mb-2">📣 Community</h3>
            <p className="text-sm text-gray-600 mb-4">Curate conversations, translate key ideas, and help grow the Nolens network.</p>
            <a href="https://x.com/nolensprotocol" target="_blank" className="text-indigo-600 hover:underline font-medium text-sm">Follow us on X</a>
          </div>
        </div>

        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Become an Early Contributor</h2>
          <p className="text-sm text-gray-600 mb-6">Leave your email below and let us know what role you're interested in — we'll reach out as we grow the Nolens contributor circle.</p>
          {submitted ? (
            <div className="text-green-600 font-medium">Thanks for your interest — we'll be in touch soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
              >
                Submit Interest
              </button>
            </form>
          )}
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 opacity-5 pointer-events-none">
          <img src="/nolens_icon.png" alt="Nolens Logo Subtle Background" className="w-[480px]" />
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </>
  );
}
