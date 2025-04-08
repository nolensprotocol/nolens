import Head from 'next/head'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
import animationData from '../lib/lotties/nolens_wave_animation.json'


export default function Home() {
  return (
    <>
      <Head>
        <title>Nolens – Own Less. Access More.</title>
        <meta name="description" content="Designed for the next era of shared living." />
      </Head>

      <main className="relative bg-gray-950 text-white min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
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

        {/* 🎨 Right-side Lottie animation */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[40vw] h-[40vw] pointer-events-none z-0 opacity-40">
          <Lottie animationData={animationData} loop autoplay />
        </div>
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

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
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

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
