import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useAccount } from 'wagmi'
import { supabase } from '../lib/supabaseClient'

const ADMIN_WALLET = '0x2d207059F9EF9452f8542F8Ebe175f18d3779f9E'.toLowerCase()

export default function Admin() {
  const { address, isConnected } = useAccount()
  const isAdmin = address?.toLowerCase() === ADMIN_WALLET

  const [pendingRewards, setPendingRewards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isAdmin) fetchPending()
  }, [isAdmin])

  const fetchPending = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('verified_rewards')
      .select('*')
      .eq('approved', false)
      .eq('rejected', false)
      .neq('task_id', 'email')

    if (data) setPendingRewards(data)
    setLoading(false)
  }

  const handleApprove = async (id) => {
    const { error, data } = await supabase
      .from('verified_rewards')
      .update({ approved: true })
      .eq('id', id)

    console.log('Approve result:', { error, data })

    if (!error) {
      setPendingRewards(prev => prev.filter(r => r.id !== id))
    }
  }

  const handleReject = async (id) => {
    const { error, data } = await supabase
      .from('verified_rewards')
      .update({ rejected: true })
      .eq('id', id)

    console.log('Reject result:', { error, data })

    if (!error) {
      setPendingRewards(prev => prev.filter(r => r.id !== id))
    }
  }

  return (
    <>
      <Head><title>Admin Panel – Nolens</title></Head>
      <main className="min-h-screen bg-black text-white pt-32 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🛡 Admin Rewards Panel</h1>

          {!isConnected ? (
            <p className="text-red-400">Please connect your wallet.</p>
          ) : !isAdmin ? (
            <p className="text-red-500">Access denied. Admin wallet only.</p>
          ) : loading ? (
            <p className="text-white/60">Loading pending rewards...</p>
          ) : pendingRewards.length === 0 ? (
            <p className="text-white/50">No pending rewards to approve.</p>
          ) : (
            <div className="space-y-4">
              {pendingRewards.map(r => (
                <div key={r.id} className="bg-neutral-900 border border-white/10 rounded-xl p-4 flex justify-between items-start">
                  <div>
                    <p className="font-mono text-sm text-white/70">{r.wallet}</p>
                    <p className="text-white font-semibold mt-1">{r.task_id} → +{r.points} $NOL</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApprove(r.id)}
                      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md font-medium text-white"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(r.id)}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-medium text-white"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  )
}
