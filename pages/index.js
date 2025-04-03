import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nolens</title>
        <meta name="description" content="Own less. Access more. Nolens is building the protocol for the access-first economy." />
      </Head>

      <header className="flex items-center justify-between px-6 py-4 bg-transparent absolute top-0 left-0 right-0 z-50">
        <div className="flex items-center space-x-2">
          <img src="/nolens_icon.png" alt="Nolens Logo" className="w-6 h-6" />
          <span className="text-white text-lg font-semibold tracking-widest uppercase">nolens</span>
        </div>
        <nav className="space-x-4 hidden md:flex">
          <a href="/" className="text-white hover:underline">Home</a>
          <a href="/docs" className="text-white hover:underline">Docs</a>
          <a href="https://t.me/nolensprotocol" target="_blank" className="text-white hover:underline">Telegram</a>
          <a href="https://x.com/nolensprotocol" target="_blank" className="text-white hover:underline">X</a>
        </nav>
      </header>

      <section className="relative overflow-hidden py-48 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-4 animate-slide-up">Own less. Access more.</h1>
          <p className="text-lg text-gray-300 mb-6 animate-slide-up delay-100">Designed for the next era of shared living.</p>
          <div className="space-x-4 animate-fade-in delay-200">
            <a href="https://t.me/nolensprotocol" className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition">Telegram</a>
            <a href="https://x.com/nolensprotocol" className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition">Twitter</a>
            <Link href="/docs" passHref>
              <a className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition">Learn More</a>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-fuchsia-500/20 via-indigo-500/10 to-transparent opacity-30 blur-3xl z-0"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-10">
          <svg width="480" height="480" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow">
            <path d="M120,20 C170,20 220,70 220,120 C220,170 170,220 120,220 C70,220 20,170 20,120 C20,70 70,20 120,20 Z" stroke="white" strokeWidth="4" fill="none"/>
          </svg>
        </div>
      </section>

      <section className="py-24 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Token Utility</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="transition duration-700 ease-out bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 hover:bg-white animate-fade-in">
              <h3 className="font-semibold text-lg mb-2">Access & Payments</h3>
              <p>Use $NOL to unlock rental, service, or on-demand experiences on-chain.</p>
            </div>
            <div className="transition duration-700 ease-out bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 hover:bg-white animate-fade-in delay-100">
              <h3 className="font-semibold text-lg mb-2">Escrow Deposits</h3>
              <p>Secure peer-to-peer rentals using $NOL as trustless collateral.</p>
            </div>
            <div className="transition duration-700 ease-out bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 hover:bg-white animate-fade-in delay-200">
              <h3 className="font-semibold text-lg mb-2">Staking & Reputation</h3>
              <p>Stake $NOL to boost your on-chain profile, credibility, and access.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
