// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nolens – Own Less. Access More.</title>
        <meta name="description" content="Designed for the next era of shared living." />
      </Head>

      <main className="relative bg-black text-white min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
        <div className="z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-left animate-slide-in">
            Own less. <br />Access more.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-xl text-left animate-fade-in delay-300">
            Nolens is a protocol for shared, tokenized access — built for the next era of contribution-first living.
          </p>

          <div className="mt-12">
            <a href="/docs" className="text-sm text-gray-500 hover:text-white transition">
              ↓ Learn more
            </a>
          </div>
        </div>

        {/* Optional subtle texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/grain.png')] bg-cover"></div>
      </main>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </>
  )
}
