// pages/admin.js
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { supabase } from '../lib/supabaseClient'

const ADMIN_ADDRESS = '0x76d3B4D5715df66792129196578De2993F034916'

export default function AdminPage() {
  const { address, isConnected } = useAccount()
  const [activeTab, setActiveTab] = useState('handles')
  const [handles, setHandles] = useState([])
  const [retweets, setRetweets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isConnected || address.toLowerCase() !== ADMIN_ADDRESS.toLowerCase()) return
    fetchPending()
  }, [isConnected, address])

  const fetchPending = async () => {
    setLoading(true)
    const { data: handleRows } = await supabase
      .from('twitter_claims')
      .select('*')
      .eq('verified', false)

    const { data: tweetRows } = await supabase
      .from('quote_retweet_claims')
      .select('*')
      .eq('verified', false)

    setHandles(handleRows || [])
    setRetweets(tweetRows || [])
    setLoading(false)
  }

  const approveHandle = async (id, wallet) => {
    await supabase.from('twitter_claims').update({ verified: true }).eq('id', id)
    await supabase.from('verified_rewards').insert([{ wallet, task_id: 'follow', points: 10 }])
    fetchPending()
  }

  const approveRetweet = async (id, wallet) => {
    await supabase.from('quote_retweet_claims').update({ verified: true }).eq('id', id)
    await supabase.from('verified_rewards').insert([{ wallet, task_id: 'retweet', points: 20 }])
    fetchPending()
  }

  if (!isConnected || address.toLowerCase() !== ADMIN_ADDRESS.toLowerCase()) {
    return <div className="text-center pt-40 text-red-500 font-semibold">Access denied. Admins only.</div>
  }

  return (
    <main className="min-h-screen pt-32 px-8 pb-24 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab('handles')}
          className={`px-4 py-2 rounded-md font-semibold ${activeTab === 'handles' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          X Handles
        </button>
        <button
          onClick={() => setActiveTab('retweets')}
          className={`px-4 py-2 rounded-md font-semibold ${activeTab === 'retweets' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Quote Tweets
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {activeTab === 'handles' && handles.map(row => (
            <div key={row.id} className="border p-4 rounded-md flex items-center justify-between">
              <div>
                <div className="font-medium">{row.x_handle}</div>
                <div className="text-xs text-gray-500">{row.address}</div>
              </div>
              <button
                onClick={() => approveHandle(row.id, row.address)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Verify & Reward
              </button>
            </div>
          ))}

          {activeTab === 'retweets' && retweets.map(row => (
            <div key={row.id} className="border p-4 rounded-md flex items-center justify-between">
              <div>
                <a href={row.tweet_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  View Quote Tweet
                </a>
                <div className="text-xs text-gray-500">{row.wallet}</div>
              </div>
              <button
                onClick={() => approveRetweet(row.id, row.wallet)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Verify & Reward
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
