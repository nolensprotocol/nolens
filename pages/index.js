// In your main landing page (e.g. index.js)
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nolens – Own Less. Access More.</title>
        <meta name="description" content="Designed for the next era of shared living." />
      </Head>

      <main className="relative bg-black text-white min-h-screen flex items-center justify-center px-6">
        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute w-[600px] h-[600px] bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse-slow top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Hero content */}
        <div className="z-10 max-w-3xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Own less. <br className="hidden md:block" /> Access more.
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Designed for the next era of shared living. <br />
            A protocol for contribution-first access and tokenized coordination.
          </p>

          <div className="pt-6 flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="/contribute" className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
              Contribute
            </a>
            <a href="/tasks" className="px-6 py-3 border border-white rounded-md font-semibold hover:bg-white hover:text-black transition">
              Earn
            </a>
            <a href="/docs" className="px-6 py-3 border border-white rounded-md font-semibold hover:bg-white hover:text-black transition">
              About
            </a>
          </div>
        </div>

        {/* Custom animation */}
        <style jsx>{`
          .animate-pulse-slow {
            animation: pulse 8s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.2;
            }
            50% {
              transform: scale(1.15);
              opacity: 0.4;
            }
          }
        `}</style>
      </main>
    </>
  )
}
