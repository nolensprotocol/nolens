// pages/index.js
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nolens – Own Less. Access More.</title>
        <meta name="description" content="Designed for the next era of shared living." />
      </Head>

      <main className="relative bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="flex items-center justify-center px-6 min-h-screen">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute w-[520px] h-[520px] bg-white/10 rounded-full blur-[160px] top-1/4 left-1/4 animate-pulse-slow" />
            <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] bottom-1/4 right-1/4 animate-pulse-slower" />
          </div>

          <div className="z-10 max-w-4xl text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Own Less. <span className="text-white/80">Access More.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Nolens. The protocol for shared living.<br />
              Fueled by real contribution.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contribute" className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                Get Started
              </Link>
              <Link href="/earn" className="px-6 py-3 border border-white rounded-full font-semibold text-white hover:bg-white hover:text-black transition">
                Earn $NOL
              </Link>
              <Link href="/docs" className="px-6 py-3 border border-white rounded-full font-semibold text-white hover:bg-white hover:text-black transition">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Nolens</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contribute</h3>
              <p className="text-white/60">Earn access by helping the ecosystem grow — not by paying upfront.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Coordinate</h3>
              <p className="text-white/60">Use $NOL to coordinate, unlock value, and build together.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Access</h3>
              <p className="text-white/60">Unlock shared spaces, tools, and experiences through verified contribution.</p>
            </div>
          </div>
        </section>

        {/* Early Ecosystem */}
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Access Economy is Forming</h2>
          <p className="text-white/60">A new generation of renters, sharers, and contributors are building a decentralized future together. Nolens is how we coordinate it.</p>
        </section>

        {/* CTA Banner */}
        <section className="bg-neutral-900 py-16 px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the early movement</h2>
          <p className="text-white/60 mb-6">Be one of the first contributors helping shape the Nolens protocol.</p>
          <Link href="/contribute" className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Contribute Now
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-black py-12 text-center text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Nolens Protocol. All rights reserved.
        </footer>

        <style jsx>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.05); }
          }
          @keyframes pulse-slower {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.03); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 7s ease-in-out infinite;
          }
          .animate-pulse-slower {
            animation: pulse-slower 10s ease-in-out infinite;
          }
        `}</style>
      </main>
    </>
  )
}
