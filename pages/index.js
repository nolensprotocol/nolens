import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nolens – Own Less. Access More.</title>
        <meta name="description" content="Designed for the next era of shared living." />
      </Head>

      <main className="relative bg-gray-950 text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden">
        {/* Decorative corner diamond grid */}
        <div className="absolute top-0 right-0 hidden md:block opacity-10">
          <div className="grid grid-cols-3 gap-3 m-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 rotate-45 bg-white/10 border border-white/10"
              />
            ))}
          </div>
        </div>

        {/* Hero text */}
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Own Less. <br className="md:hidden" /> Access More.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto">
            Nolens, designed for the next era of shared living.
          </p>
          <div className="mt-12">
            <a href="/docs" className="text-sm text-gray-500 hover:text-white transition">
              ↓ Learn more
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
