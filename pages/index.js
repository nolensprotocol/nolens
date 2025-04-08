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

      <main className="relative bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-white min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background blur/glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute w-[480px] h-[480px] bg-purple-600 rounded-full blur-[160px] opacity-30 top-1/4 left-1/4 animate-pulse-slow" />
          <div className="absolute w-[360px] h-[360px] bg-indigo-500 rounded-full blur-[120px] opacity-20 bottom-1/4 right-1/4 animate-pulse-slower" />
        </div>

        {/* Hero Content */}
        <div className="z-10 max-w-4xl text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Own less. <span className="text-purple-400">Access more.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Nolens is building a protocol for the access-first economy —
            powered by contribution, not consumption.
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

        <style jsx>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }

          @keyframes pulse-slower {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.03); }
          }

          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }

          .animate-pulse-slower {
            animation: pulse-slower 9s ease-in-out infinite;
          }
        `}</style>
      </main>
    </>
  )
}
