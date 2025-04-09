import { useEffect, useState } from 'react'
import Head from 'next/head'
import { supabase } from '../lib/supabaseClient'
import { useAccount } from 'wagmi'

export default function TestWalletInsert() {
  const { address, isConnected } = useAccount()
  const [insertStatus, setInsertStatus] = useState(null)

  const handleTestInsert = async () => {
    if (!isConnected || !address) {
      setInsertStatus('⚠️ Please connect your wallet first.')
      return
    }

    const { data, error } = await supabase
      .from('wallet_connections')
      .insert([{ address, type: 'evm' }])
      .select()

    if (error) {
      console.error('❌ Insert failed:', error)
      setInsertStatus(`❌ Insert failed: ${error.message}`)
    } else {
      console.log('✅ Insert success:', data)
      setInsertStatus(`✅ Inserted wallet: ${address}`)
    }
  }

  return (
    <>
      <Head><title>Test Wallet Insert – Nolens</title></Head>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold mb-4">🧪 Wallet Insert Debug</h1>
        <p className="mb-6 text-white/70 text-center max-w-md">
          Use this test page to verify Supabase is working by inserting your connected wallet.
        </p>

        <button
          onClick={handleTestInsert}
          className="bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Insert Wallet to Supabase
        </button>

        {insertStatus && (
          <p className="mt-6 text-sm text-white/80">{insertStatus}</p>
        )}
      </main>
    </>
  )
}
