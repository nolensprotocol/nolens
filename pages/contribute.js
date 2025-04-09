'use client'
import Head from 'next/head'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { supabase } from '../lib/supabaseClient'
import Button from '../components/Button'
import PageSection from '../components/PageSection'

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
        .from('contributor_emails')
        .insert([{ email, wallet: address, role }])
      if (emailError) throw new Error(emailError.message)

      await fetch('/api/submitEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (window.trackEmailContribute) window.trackEmailContribute()

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

      <main className="relative min-h-screen bg-black text-white pt-32 pb-24 px-6 overflow-hidden">
        <PageSection className="text-center mb-20 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
            Contribute to Nolens
          </h1>
          <p className="text-lg text-white/60 fade-in-up delay-200">
            Nolens is for those building beyond ownership.
            <br />
            A protocol for shared, tokenized access. If you're rethinking how we live, create, and coordinate — you're early.
          </p>
        </PageSection>

        <PageSection className="max-w-xl text-center fade-in-up delay-300">
          <h2 className="text-2xl font-bold mb-4">Become an Early Contributor</h2>
          <p className="text-sm text-white/60 mb-6">Leave your email and let us know how you'd like to help. We'll reach out as we grow the Nolens contributor circle.</p>

          {submitted ? (
            <div className="text-green-400 font-medium">Thanks for your interest — we'll be in touch soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 text-sm border border-white/20 bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white/40"
              />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full px-4 py-2 text-sm border border-white/20 bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <option value="">Select your role</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="promoter">Promoter / Marketer</option>
                <option value="translator">Translator / Community</option>
                <option value="other">Other</option>
              </select>

              {error && <div className="text-red-400 text-sm">{error}</div>}

              <Button type="submit">Submit Interest</Button>
            </form>
          )}
        </PageSection>
      </main>
    </>
  )
}
