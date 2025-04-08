import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nolens – Own Less. Access More.</title>
        <meta name="description" content="Designed for the next era of shared living." />
      </Head>

      <main className="relative bg-gray-950 text-white min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
        {/* 👈 Hero Text */}
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

        {/* 👉 Animated Wave Bars */}
        <div className="absolute right-24 top-1/2 transform -translate-y-1/2 flex gap-3 h-[28rem] z-0 opacity-30">
          {[...Array(48)].map((_, i) => (
            <div
              key={i}
              className="w-[5px] bg-gray-300 animate-wave"
              style={{
                animationDelay: `${i * 0.12}s`,
                animationDuration: '2.2s'
              }}
            />
          ))}
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

        @keyframes wave {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(2.2);
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

        .animate-wave {
          animation-name: wave;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  )
}
