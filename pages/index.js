import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nolens – Own Less. Access More.</title>
        <meta name="description" content="Designed for the next era of shared living." />
      </Head>

      <main className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* 🔥 Background placeholder */}
        {/* Replace below with <video> or remove for static background */}
        {/* <video ...> or <div className="bg-gradient-to-b ..."> */}
        {/* You can also leave this empty if no background is needed */}

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
            <a href="/contribute" className="w-48 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition text-center">
              Contribute
            </a>
            <a href="/earn" className="w-48 px-6 py-3 border border-white rounded-md font-semibold hover:bg-white hover:text-black transition text-center">
              Earn
            </a>
            <a href="/docs" className="w-48 px-6 py-3 border border-white rounded-md font-semibold hover:bg-white hover:text-black transition text-center">
              About
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
