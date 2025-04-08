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

      <main className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* 🌠 Animated BG or subtle graphic */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800 via-black to-black animate-pulse" />
        </div>

        {/* ⚡ Hero Content */}
        <div className="z-10 max-w-5xl text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight animate-fade-in-up">
            Own less. <br className="hidden md:block" /> Access more.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 animate-fade-in-up delay-200">
            Nolens is a new protocol for shared living, tokenized coordination, and contribution-first access.
          </p>

          <div className="pt-6 flex flex-col md:flex-row justify-center items-center gap-4 animate-fade-in-up delay-300">
            <Link href="/contribute" className="w-48 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition text-center">
              Contribute
            </Link>
            <Link href="/earn" className="w-48 px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition text-center">
              Earn
            </Link>
            <Link href="/docs" className="w-48 px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition text-center">
              About
            </Link>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
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
          .delay-300 {
            animation-delay: 0.3s;
          }
        `}</style>
      </main>
    </>
  )
}
