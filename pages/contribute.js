'use client'
import Head from 'next/head'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { supabase } from '../lib/supabaseClient'

export default function Contribute() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const { address, isConnected } = useAccount()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!isConnected || !address) {
      setError('Please connect your wallet first.')
      return
    }

    if (!role) {
      setError('Please select a contributor role.')
      return
    }

    try {
      const { error: emailError } = await supabase
        .from('email_signups')
        .insert([{ email, wallet: address, type: 'contribute', role }])
      if (emailError) throw new Error(emailError.message)

      await fetch('/api/submitEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      setSubmitted(true)
      setEmail('')
      setRole('')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <Head>
        <title>Contribute to Nolens</title>
        <meta name="description" content="Join Nolens and help build the future of access-first economies." />
      </Head>

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
            A protocol for shared, tokenized access. If you're rethinking how we live, create, and coordinate — you're early.
          </p>
        </div>

        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Become an Early Contributor</h2>
          <p className="text-sm text-gray-600 mb-6">Leave your email and let us know how you'd like to help. We'll reach out as we grow the Nolens contributor circle.</p>

          {submitted ? (
            <div className="text-green-600 font-medium">Thanks for your interest — we'll be in touch soon.</div>
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

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select your role</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="promoter">Promoter / Marketer</option>
                <option value="translator">Translator / Community</option>
                <option value="other">Other</option>
              </select>

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
          <img src="/nolens_icon.png" alt="Nolens Logo Subtle Background" className="w-[480px]" />
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
