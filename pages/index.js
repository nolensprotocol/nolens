import Head from 'next/head'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// ✅ Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function Home() {
  const [animationData, setAnimationData] = useState(null)

  // ✅ Load Lottie JSON from public folder on client-side
  useEffect(() => {
    fetch('nolens-connectivity.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
  }, [])

  return (
    <>
      <Head>
        <title>Nolens – Own Less. Access More.</title>
        <meta name="description" content="Designed for the next era of shared living." />
      </Head>

      <main className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* ✅ Lottie background animation */}
        {animationData && (
          <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* 🧤 Hero content */}
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
            <a href="/earn" className="px-6 py-3 border border-white rounded-md font-semibold hover:bg-white hover:text-black transition">
              Earn
            </a>
            <a href="/docs" className="px-6 py-3 border border-white rounded-md font-semibold hover:bg-white hover:text-black transition">
              About
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
