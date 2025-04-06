import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { supabase } from '../lib/supabaseClient'

const TASKS = [
  { id: 1, name: 'Follow @nolensprotocol on X', action: 'follow', points: 10, link: 'https://x.com/nolensprotocol' },
  { id: 2, name: 'Quote retweet our pinned tweet', action: 'retweet', points: 20, link: 'https://x.com/nolensprotocol' },
  { id: 3, name: 'Join our email waitlist', action: 'email', points: 10, link: '/contribute' },
  { id: 4, name: 'Refer a friend with your link', action: 'refer', points: 40 },
  { id: 5, name: 'Vote on a feature idea', action: 'vote', points: 10, link: '/vote' },
  { id: 6, name: 'Complete the Nolens quiz', action: 'quiz', points: 10, link: '/quiz' },
]

export default function Earn() {
  const { isConnected, address } = useAccount()
  const [claimedIds, setClaimedIds] = useState([])
  const [points, setPoints] = useState(0)

  // Fetch claimed task IDs for this wallet
  useEffect(() => {
    if (!isConnected || !address) return

    const fetchClaims = async () => {
      const { data, error } = await supabase
        .from('task_claims')
        .select('task_id, points')
        .eq('wallet', address)

      if (error) {
        console.error('Error fetching claimed tasks:', error.message)
      } else {
        setClaimedIds(data.map(d => d.task_id))
        const total = data.reduce((sum, d) => sum + d.points, 0)
        setPoints(total)
      }
    }

    fetchClaims()
  }, [isConnected, address])

  const handleClaim = async (task) => {
    if (!address) return

    const alreadyClaimed = claimedIds.includes(task.id)
    const isReferral = task.action === 'refer'

    if (alreadyClaimed && !isReferral) return

    if (isReferral) {
      const shareUrl = `${window.location.origin}/?ref=${address}`
      if (navigator.share) {
        navigator.share({
          title: 'Nolens',
          text: 'Join Nolens early and earn $NOL!',
          url: shareUrl,
        }).catch((err) => console.error('Sharing failed', err))
      } else {
        alert(`Copy and share this link:\n${shareUrl}`)
      }
    } else if (task.link) {
      window.open(task.link, '_blank')
    }

    if (!alreadyClaimed && task.action !== 'refer') {
      const { error } = await supabase
        .from('task_claims')
        .insert([{ wallet: address, task_id: task.id, points: task.points }])

      if (error) {
        console.error('Supabase insert error:', error.message)
      } else {
        setClaimedIds(prev => [...prev, task.id])
        setPoints(prev => prev + task.points)
      }
    }
  }

  if (!isConnected) {
    return (
      <main className="min-h-screen flex items-center justify-center text-center pt-40 px-4">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Connect your wallet</h1>
          <p className="text-gray-600">You must connect a wallet to participate in the campaign and earn $NOL.</p>
        </div>
      </main>
    )
  }

  return (
    <>
      <Head>
        <title>Earn $NOL – Nolens</title>
        <meta name="description" content="Complete tasks and earn mock points in Nolens MVP." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Earn</h1>
          <p className="text-gray-600">Complete tasks that support the Nolens ecosystem and earn mock $NOL points.</p>
          <div className="mt-4 font-semibold">Your points: <span className="text-indigo-600">{points}</span></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {TASKS.map(task => {
            const isClaimed = claimedIds.includes(task.id)
            const isReferral = task.action === 'refer'
            return (
              <div
                key={task.id}
                onClick={() => handleClaim(task)}
                className={`border rounded-2xl p-6 flex flex-col justify-between shadow-md transition-all duration-200 bg-white relative group ${
                  isClaimed && !isReferral ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-xl hover:ring-2 hover:ring-indigo-200 hover:scale-[1.01]'
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{task.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">+{task.points} points</p>
                  </div>
                  <button
                    disabled={isClaimed && !isReferral}
                    className={`mt-auto px-4 py-2 text-sm rounded-md font-medium transition ${
                      isClaimed && !isReferral
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    {isClaimed && !isReferral ? 'Claimed' : 'Claim'}
                  </button>
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-r from-purple-500 via-white to-purple-500 pointer-events-none transition duration-300" />
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}
