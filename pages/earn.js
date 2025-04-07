// pages/earn.js
'use client'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { supabase } from '../lib/supabaseClient'

const initialTasks = [
  { id: 'follow', label: 'Follow @nolensprotocol on X', points: 10, action: 'https://x.com/nolensprotocol' },
  { id: 'retweet', label: 'Quote Retweet our pinned tweet', points: 20, action: 'https://x.com/nolensprotocol' },
  { id: 'email', label: 'Join our email waitlist', points: 10, action: '/contribute' },
  { id: 'refer', label: 'Refer a friend with your link', points: 40, action: 'referral' },
  { id: 'vote', label: 'Vote on a feature idea', points: 10, action: null },
  { id: 'quiz', label: 'Complete the Nolens quiz', points: 10, action: null }
]

export default function Earn() {
  const { address, isConnected } = useAccount()
  const [claimed, setClaimed] = useState([])
  const [submitting, setSubmitting] = useState(false)

  // Load claimed tasks from task_claims
  useEffect(() => {
    if (!isConnected || !address) return

    const fetchClaims = async () => {
      const { data, error } = await supabase
        .from('task_claims')
        .select('task_id')
        .eq('wallet', address)

      if (data) {
        setClaimed(data.map(row => row.task_id))
      }
    }

    fetchClaims()
  }, [isConnected, address])

  const handleClaim = async (task) => {
    if (!isConnected || !address || claimed.includes(task.id)) return

    if (task.id === 'follow') {
      const xHandle = prompt('Enter your X (Twitter) handle:')
      if (!xHandle) return
      setSubmitting(true)

      // Insert into both twitter_claims and task_claims
      const { error: twitterErr } = await supabase
        .from('twitter_claims')
        .insert([{ address, x_handle: xHandle }])

      if (!twitterErr) {
        await supabase.from('task_claims').insert([{ wallet: address, task_id: 'follow' }])
        setClaimed(prev => [...prev, task.id])
      }

      setSubmitting(false)
    } else if (task.id === 'email') {
      window.location.href = '/contribute'
    } else if (task.id === 'refer') {
      alert('Share this page with your referral link!')
    } else if (task.action) {
      window.open(task.action, '_blank')
      await supabase.from('task_claims').insert([{ wallet: address, task_id: task.id }])
      setClaimed(prev => [...prev, task.id])
    }
  }

  return (
    <>
      <Head>
        <title>Earn $NOL – Nolens</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Earn</h1>
          <p className="text-gray-600">Complete simple tasks to support Nolens and earn points toward future rewards.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {initialTasks.map(task => (
            <div
              key={task.id}
              className="border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition relative group"
            >
              <h3 className="text-lg font-semibold mb-2">{task.label}</h3>
              <p className="text-gray-500 text-sm mb-4">+{task.points} points</p>

              {task.id === 'vote' || task.id === 'quiz' ? (
                <button
                  disabled
                  className="w-full px-4 py-2 bg-gray-300 text-gray-600 font-semibold rounded-md cursor-not-allowed"
                >
                  Coming Soon
                </button>
              ) : (
                <button
                  onClick={() => handleClaim(task)}
                  disabled={claimed.includes(task.id) || submitting}
                  className={`w-full px-4 py-2 rounded-md font-semibold transition ${
                    claimed.includes(task.id)
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {claimed.includes(task.id) ? 'Claimed' : 'Claim'}
                </button>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
