// pages/contribute.js
import Head from 'next/head'

export default function Contribute() {
  return (
    <>
      <Head>
        <title>Contribute to Nolens</title>
        <meta name="description" content="Join Nolens as an early contributor. Help build the protocol for the shared access economy." />
      </Head>

      <section className="min-h-screen py-24 px-6 bg-white text-gray-900">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Contribute to Nolens</h1>

          <p className="mb-6 text-lg text-gray-700 text-center">
            Nolens is an early-stage protocol redefining access, ownership, and trust in the digital and physical world. If you align with our mission — we want to build with you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-2">🧑‍💻 Developer</h2>
              <p>Help us build smart contracts, token utilities, and dApps. Solidity, EVM, or frontend skills welcome.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-2">🌐 Community</h2>
              <p>Manage Telegram, create memes, run campaigns, or grow the Nolens voice online.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-2">🎨 Design / Branding</h2>
              <p>Love web3 aesthetics? Help shape the visual language of Nolens — interfaces, merch, or memes.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-2">🤝 Partnerships</h2>
              <p>Know DAOs, protocols, or builders? Help us find early collabs, exchanges, or shared missions.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="https://t.me/nolensprotocol" className="inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              Join Our Telegram to Start →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
