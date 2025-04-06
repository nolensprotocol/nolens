import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useState } from 'react'

export default function Contribute() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [points, setPoints] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch('/api/submitEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const text = await res.text()
      let data
      try {
        data = JSON.parse(text)
      } catch {
        data = { message: text }
      }
      if (!res.ok) throw new Error(data.message || 'Something went wrong')
      setSubmitted(true)
      setEmail('')
    } catch (err) {
      console.error('❌ Error submitting email:', err)
      setError(err.message)
    }
  }

  const handleAction = (type) => {
    let earned = 0
    if (type === 'submit') earned = 10
    if (type === 'share') earned = 7
    if (type === 'refer') earned = 5
    setPoints(points + earned)
  }

  return (
    <>
      <Head>
        <title>Contribute to Nolens</title>
        <meta
          name="description"
          content="Join Nolens and help build the future of access-first economies."
        />
      </Head>

      <Navbar />

      <main className="relative min-h-screen bg-white text-gray-900 pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-normal opacity-0 animate-fade-in-up">
            <span className="inline-block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-transparent bg-clip-text">
              Contribute to Nolens
            </span>
          </h1>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in-up delay-200">
            Nolens is for those building beyond ownership.
            <br />
            A protocol for shared, tokenized access. If you're rethinking how
            we live, create, and coordinate — you're early.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 mb-12">
          {!isConnected ? (
            <button
              onClick={() => connect()}
              className="bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Connect Wallet
            </button>
          ) : (
            <>
              <div className="text-sm text-gray-500">
                Connected as <span className="font-mono">{address}</span>
              </div>
              <button
                onClick={() => disconnect()}
                className="text-red-600 text-sm hover:underline"
              >
                Disconnect
              </button>
            </>
          )}
        </div>

        {isConnected && (
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">Mock Contributions</h2>
            <p className="text-sm text-gray-600 mb-4">
              Click to simulate contributing to Nolens:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <button
                onClick={() => handleAction('submit')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
              >
                📝 Submit
              </button>
              <button
                onClick={() => handleAction('share')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
              >
                📤 Share
              </button>
              <button
                onClick={() => handleAction('refer')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
              >
                🤝 Refer
              </button>
            </div>
            <p className="text-sm font-medium">
              You’ve earned: <span className="font-bold">{points}</span> points
            </p>
          </div>
        )}

        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Become an Early Contributor</h2>
          <p className="text-sm text-gray-600 mb-6">
            Leave your email below and let us know what role you're interested
            in — we'll reach out as we grow the Nolens contributor circle.
          </p>
          {submitted ? (
            <div className="text-green-600 font-medium">
              Thanks for your interest — we'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <button
                type="submit"
                className="w-full bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
              >
                Submit Interest
              </button>
            </form>
          )}
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 opacity-5 pointer-events-none">
          <img
            src="/nolens_icon.png"
            alt="Nolens Logo Subtle Background"
            className="w-[480px]"
          />
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
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
      `}</style>
    </>
  )
}
