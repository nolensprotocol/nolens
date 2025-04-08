import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { supabase } from '../lib/supabaseClient'
import Card from '../components/Card'
import Button from '../components/Button'

const initialTasks = [
  { id: 'follow', label: 'Follow @nolensprotocol on X', points: 10 },
  { id: 'retweet', label: 'Quote our pinned tweet', points: 20 },
  { id: 'email', label: 'Join our email waitlist', points: 10 },
  { id: 'refer', label: 'Refer a friend with your link', points: 40 },
  { id: 'vote', label: 'Vote on a feature idea', points: 10 },
  { id: 'quiz', label: 'Complete the Nolens quiz', points: 10 }
]

export default function Earn() {
  const { address, isConnected } = useAccount()
  const [claimed, setClaimed] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [totalPoints, setTotalPoints] = useState(0)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [emailError, setEmailError] = useState(null)
  const [pending, setPending] = useState([])
  const [referralCount, setReferralCount] = useState(0)

  useEffect(() => {
    if (!isConnected || !address) return

    const fetchData = async () => {
      const pendingTasks = []

      const rewardsRes = await supabase
        .from('verified_rewards')
        .select('task_id, points')
        .eq('wallet', address)

      if (rewardsRes.data) {
        const claimedTaskIds = rewardsRes.data.map(row => row.task_id)
        const sum = rewardsRes.data.reduce((acc, row) => acc + (row.points || 0), 0)
        setClaimed(claimedTaskIds)
        setTotalPoints(sum)
      }

      const refCountRes = await supabase
        .from('referrals')
        .select('id', { count: 'exact' })
        .eq('referrer', address)

      if (refCountRes.count !== null) setReferralCount(refCountRes.count)

      const followPending = await supabase
        .from('twitter_claims')
        .select('*')
        .eq('address', address)
        .eq('verified', false)

      if (followPending.data?.length > 0) pendingTasks.push('follow')

      const rtPending = await supabase
        .from('quote_retweet_claims')
        .select('*')
        .eq('wallet', address)
        .eq('verified', false)

      if (rtPending.data?.length > 0) pendingTasks.push('retweet')

      setPending(pendingTasks)
    }

    fetchData()
  }, [isConnected, address])

  const handleClaim = async (task) => {
    if (!isConnected || !address || (task.id !== 'refer' && claimed.includes(task.id))) return
    setSubmitting(true)

    if (task.id === 'follow') {
      const userHandle = prompt('Enter your X (Twitter) handle:')
      if (!userHandle) return setSubmitting(false)
      await supabase.from('twitter_claims').insert([{ address, x_handle: userHandle, verified: false }])
      if (window.trackFollowX) window.trackFollowX()
      setPending(prev => [...prev, task.id])
    } else if (task.id === 'retweet') {
      const tweetUrl = prompt('Paste the URL of your quote tweet:')
      if (!tweetUrl || (!tweetUrl.includes('twitter.com') && !tweetUrl.includes('x.com'))) {
        alert('❌ Invalid URL')
        return setSubmitting(false)
      }
      await supabase.from('quote_retweet_claims').insert([{ wallet: address, tweet_url: tweetUrl, verified: false }])
      if (window.trackQuoteTweet) window.trackQuoteTweet()
      setPending(prev => [...prev, task.id])
    } else if (task.id === 'email') {
      setShowEmailModal(true)
    } else if (task.id === 'refer') {
      navigator.clipboard.writeText(`https://nolens.xyz/earn?ref=${address}`)
      alert('🔗 Referral link copied!')
    } else if (task.action) {
      window.open(task.action, '_blank')
    }

    setSubmitting(false)
  }

  const handleEmailSubmit = async () => {
    if (!emailInput) return setEmailError('Email required')

    const { error } = await supabase.from('email_signups_earn').insert([{ email: emailInput, wallet: address }])
    if (!error) {
      await supabase.from('verified_rewards').insert([{ wallet: address, task_id: 'email', points: 10 }])
      if (window.trackEmailEarn) window.trackEmailEarn()
      setClaimed(prev => [...prev, 'email'])
      setShowEmailModal(false)
      setEmailInput('')
    } else {
      setEmailError(error.message)
    }
  }

  const isComingSoon = (id) => id === 'vote' || id === 'quiz'
  const isPending = (id) => pending.includes(id)

  const getReferralButtonState = () => {
    if (referralCount >= 25) return 'Maxed Out ✅'
    if (referralCount >= 10) return 'Keep Going'
    if (referralCount >= 5) return 'Tier 1 Complete 🎉'
    if (referralCount >= 1) return 'Keep Sharing'
    return 'Get Link'
  }

  return (
    <>
      <Head><title>Earn $NOL – Nolens</title></Head>
      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Earn</h1>
          <p className="text-gray-600">Complete simple tasks to support Nolens and earn points toward future rewards.</p>
          <div className="mt-4 text-indigo-600 font-semibold text-lg">
            You have earned: <span className="font-bold">{totalPoints}</span> points
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {initialTasks.map((task) => {
            const isClaimed = claimed.includes(task.id)
            const pendingState = isPending(task.id)
            const comingSoon = isComingSoon(task.id)

            const buttonLabel = task.id === 'refer'
              ? getReferralButtonState()
              : comingSoon ? 'Coming Soon' : pendingState ? 'Pending' : isClaimed ? 'Claimed' : 'Claim'

            const referralSubtext = task.id === 'refer'
              ? [`${referralCount} / 25 referrals`, 'Up to 1300 points']
              : [`+${task.points} points`]

            return (
              <Card key={task.id} className={`flex flex-col justify-between min-h-[220px] ${comingSoon && 'border-dashed opacity-60 grayscale'}`}>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{task.label}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex flex-wrap items-center justify-center gap-2">
                    {referralSubtext.map((text, i) => (
                      <span key={i} className="inline-block bg-indigo-100 text-indigo-600 text-xs font-bold px-2 py-1 rounded-full">
                        {text}
                      </span>
                    ))}
                  </p>
                </div>
                <Button
                  onClick={() => handleClaim(task)}
                  disabled={comingSoon || (task.id !== 'refer' && (isClaimed || pendingState || submitting))}
                >
                  {buttonLabel}
                </Button>
              </Card>
            )
          })}
        </div>

        {showEmailModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center">
              <h3 className="text-xl font-semibold mb-4">Enter your email</h3>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
                placeholder="you@example.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              {emailError && <p className="text-sm text-red-600 mb-2">{emailError}</p>}
              <div className="flex gap-2">
                <Button onClick={handleEmailSubmit}>Submit</Button>
                <Button variant="secondary" onClick={() => setShowEmailModal(false)}>Cancel</Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
