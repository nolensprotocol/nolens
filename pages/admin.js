import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Admin() {
  const [claims, setClaims] = useState([])

  useEffect(() => {
    const fetchClaims = async () => {
      const { data } = await supabase
        .from('verified_rewards')
        .select('*')
        .eq('approved', false)
        .eq('rejected', false)

      setClaims(data || [])
    }

    fetchClaims()
  }, [])

  const handleApprove = async (claim) => {
    await supabase
      .from('verified_rewards')
      .update({ approved: true, rejected: false })
      .eq('wallet', claim.wallet)
      .eq('task_id', claim.task_id)

    if (claim.task_id === 'follow') {
      await supabase
        .from('twitter_claims')
        .update({ verified: true })
        .eq('address', claim.wallet)
    }

    if (claim.task_id === 'retweet') {
      await supabase
        .from('quote_retweet_claims')
        .update({ verified: true })
        .eq('wallet', claim.wallet)
    }

    setClaims(prev => prev.filter(c => !(c.wallet === claim.wallet && c.task_id === claim.task_id)))
  }

  const handleReject = async (claim) => {
    await supabase
      .from('verified_rewards')
      .update({ rejected: true, approved: false })
      .eq('wallet', claim.wallet)
      .eq('task_id', claim.task_id)

    setClaims(prev => prev.filter(c => !(c.wallet === claim.wallet && c.task_id === claim.task_id)))
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      {claims.length === 0 ? (
        <p className="text-white/60">No pending claims.</p>
      ) : (
        <ul className="space-y-4">
          {claims.map((claim) => (
            <li key={`${claim.wallet}-${claim.task_id}`} className="bg-neutral-800 p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-semibold">{claim.task_id}</p>
                <p className="text-sm text-white/60">{claim.wallet}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleApprove(claim)}
                  className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(claim)}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}