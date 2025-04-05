import Head from 'next/head'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Nolens Protocol</title>
        <meta name="description" content="Own less. Access more. Nolens is building the protocol for the access-first economy." />
      </Head>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 px-6 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1.5">
            <img src="/nolens_icon.png" alt="Nolens Logo" className="w-6 h-6" />
            <span className="mt-[-2px] text-gray-900 text-lg font-sans tracking-widest lowercase">nolens</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-800 font-medium">
            <a href="/" className="hover:text-black">Home</a>
            <a href="/docs" className="hover:text-black">Docs</a>
            <a href="https://t.me/nolensprotocol" target="_blank" className="hover:text-black">Telegram</a>
            <a href="https://x.com/nolensprotocol" target="_blank" className="hover:text-black">X</a>
            <a href="/contribute" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Contribute</a>
          </div>

          {/* Mobile Nav Right Side */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href="/contribute"
              className="bg-black text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-800 transition"
            >
              Contribute
            </a>
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2 text-sm font-medium text-gray-800">
            <a href="/" className="hover:text-black">Home</a>
            <a href="/docs" className="hover:text-black">Docs</a>
            <a href="https://t.me/nolensprotocol" target="_blank" className="hover:text-black">Telegram</a>
            <a href="https://x.com/nolensprotocol" target="_blank" className="hover:text-black">X</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <main>
        <section className="relative min-h-[90vh] pt-40 pb-20 px-6 overflow-hidden bg-black text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
          >
            <source src="/nolens_particles_background_v3.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Own less. <br /> Access more.
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                Nolens is building flexible infrastructure for the on-demand, tokenized, and trustless access economy.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contribute" className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition">Contribute</a>
                <a href="https://t.me/nolensprotocol" className="border border-gray-300 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition">Join Telegram</a>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones with hover glow */}
        <section className="pt-36 pb-28 bg-gradient-to-b from-white to-gray-50 text-gray-900">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-16">Milestones</h2>

            {[1, 2, 3, 4].map((phase, index) => (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="mb-28 relative group"
              >
                {/* Glow */}
                <div className="absolute inset-0 scale-95 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-500 rounded-2xl z-0 blur-xl bg-gradient-to-br from-blue-800/40 to-indigo-900/40 pointer-events-none"></div>

                <div className="relative z-10 bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl px-6 py-10 shadow-xl transition duration-300 group-hover:scale-[1.02]">
                  <img
                    src={`/milestone_icon${phase}.png`}
                    alt={`Phase ${phase}`}
                    className="mx-auto h-48 mb-8 bg-white rounded-full"
                  />
                  <div className="text-2xl font-bold mb-3">{`Phase ${phase}`}</div>
                  <div className="text-lg text-gray-700 max-w-xl mx-auto">
                    {phase === 1
                      ? 'Branding, token identity, website, and community setup.'
                      : phase === 2
                      ? 'Infrastructure: smart contracts, staking logic, and contribute portal.'
                      : phase === 3
                      ? 'Pilot modules, shared utility demos, and ecosystem collaborations.'
                      : 'Protocol integrations, DAO contributions, and scaling adoption.'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>
    </>
  )
}
