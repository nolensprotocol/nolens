import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useAccount, useContractWrite } from 'wagmi'
import { supabase } from '../lib/supabaseClient'
import { NOLENS_CLAIM_ADDRESS, NOLENS_CLAIM_ABI } from '../lib/contractInfo'
import Card from '../components/Card'
import Button from '../components/Button'
import PageSection from '../components/PageSection'

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
  const { writeAsync: claimOnChain } = useContractWrite({
    address: NOLENS_CLAIM_ADDRESS,
    abi: NOLENS_CLAIM_ABI,
    functionName: 'claim',
  })

  const [claimed, setClaimed] = useState([])
  const [pending, setPending] = useState([])
  const [rejected, setRejected] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [earnedNOL, setEarnedNOL] = useState(0)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [emailError, setEmailError] = useState(null)
  const [referralCount, setReferralCount] = useState(0)

  useEffect(() => {
    if (!isConnected || !address) return

    const fetchData = async () => {
      const claimedTaskIds = []
      const pendingTasks = []
      const rejectedTasks = []

      const rewardsRes = await supabase
        .from('verified_rewards')
        .select('task_id, points, approved, rejected')
        .eq('wallet', address)

      if (rewardsRes.data) {
        for (const row of rewardsRes.data) {
          if (row.approved) claimedTaskIds.push(row.task_id)
          else if (row.rejected) rejectedTasks.push(row.task_id)
          else pendingTasks.push(row.task_id)
        }

        const sum = rewardsRes.data
          .filter(row => row.approved)
          .reduce((acc, row) => acc + (row.points || 0), 0)

        setClaimed(claimedTaskIds)
        setPending(pendingTasks)
        setRejected(rejectedTasks)
        setEarnedNOL(sum)
      }

      const refCountRes = await supabase
        .from('referrals')
        .select('id', { count: 'exact' })
        .eq('referrer', address)

      if (refCountRes.count !== null) setReferralCount(refCountRes.count)
    }

    fetchData()
  }, [isConnected, address])

  const handleClaim = async (task) => {
    if (!isConnected || !address || (task.id !== 'refer' && (claimed.includes(task.id) || pending.includes(task.id)))) return
    setSubmitting(true)

    if (task.id === 'follow') {
      const userHandle = prompt('Enter your X (Twitter) handle:')
      if (!userHandle) return setSubmitting(false)
      await supabase.from('twitter_claims').insert([{ address, x_handle: userHandle, verified: false }])
      await supabase.from('verified_rewards').insert([{ wallet: address, task_id: 'follow', points: 10 }])
      setPending(prev => [...prev, task.id])
    } else if (task.id === 'retweet') {
      const tweetUrl = prompt('Paste the URL of your quote tweet:')
      if (!tweetUrl || (!tweetUrl.includes('twitter.com') && !tweetUrl.includes('x.com'))) {
        alert('Invalid URL')
        return setSubmitting(false)
      }
      await supabase.from('quote_retweet_claims').insert([{ wallet: address, tweet_url: tweetUrl, verified: false }])
      await supabase.from('verified_rewards').insert([{ wallet: address, task_id: 'retweet', points: 20 }])
      setPending(prev => [...prev, task.id])
    } else if (task.id === 'email') {
      setShowEmailModal(true)
    } else if (task.id === 'refer') {
      navigator.clipboard.writeText(`https://nolens.xyz/earn?ref=${address}`)
      alert('Referral link copied!')
    }

    setSubmitting(false)
  }

  const handleEmailSubmit = async () => {
    if (!emailInput) return setEmailError('Email required')
    const { error } = await supabase.from('email_signups_earn').insert([{ email: emailInput, wallet: address }])
    if (!error) {
      await supabase.from('verified_rewards').insert([{ wallet: address, task_id: 'email', points: 10, approved: true }])
      setClaimed(prev => [...prev, 'email'])
      setShowEmailModal(false)
      setEmailInput('')
    } else {
      setEmailError(error.message)
    }
  }

  const handleClaimNOL = async () => {
    try {
      const response = await fetch('/api/generate-claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet: address }),
      })

      const result = await response.json()
      if (!result.amount || !result.nonce || !result.signature) throw new Error('Missing claim payload')

      await claimOnChain({
        args: [BigInt(result.amount), BigInt(result.nonce), result.signature],
      })

      alert('✅ Claimed $NOL successfully!')
    } catch (err) {
      console.error('❌ Claim failed:', err)
      alert('❌ Claim failed')
    }
  }

  const isComingSoon = (id) => id === 'vote' || id === 'quiz'
  const isPending = (id) => pending.includes(id)
  const isRejected = (id) => rejected.includes(id)

  const getReferralButtonState = () => {
    if (referralCount >= 25) return 'Maxed Out'
    if (referralCount >= 10) return 'Keep Going'
    if (referralCount >= 5) return 'Tier 1 Complete'
    if (referralCount >= 1) return 'Keep Sharing'
    return 'Get Link'
  }

  return (
    <>
      <Head><title>Earn $NOL – Nolens</title></Head>
      <main className="min-h-screen bg-black text-white pt-32 pb-24">
        <PageSection className="text-center mb-10 fade-in-up">
          <h1 className="text-4xl font-bold mb-4">Earn</h1>
          <p className="text-white/60">Complete simple tasks to support Nolens and earn $NOL for early utility.</p>
          <div className="mt-4 text-white font-semibold text-lg">
            You have earned: <span className="font-bold">{earnedNOL}</span> $NOL
          </div>

          {earnedNOL > 0 && (
            <div className="mt-6">
              <Button onClick={handleClaimNOL}>Claim $NOL</Button>
            </div>
          )}
        </PageSection>

        {/* ... Task cards and email modal unchanged ... */}
      </main>
    </>
  )
}
