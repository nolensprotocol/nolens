import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { readContract } from '@wagmi/core'
import { formatEther } from 'viem'
import Button from '../components/Button'
import PageSection from '../components/PageSection'
import {
  NOLENS_TOKEN_ADDRESS,
  NOLENS_TOKEN_ABI,
  NOLENS_NFT_ADDRESS,
  NOLENS_NFT_ABI,
} from '../lib/contractInfo'

export default function Dashboard() {
  const { address, isConnected } = useAccount()

  const [balance, setBalance] = useState(0)
  const [hasMinted, setHasMinted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isConnected || !address) return

    const fetchData = async () => {
      try {
        const rawBalance = await readContract({
          address: NOLENS_TOKEN_ADDRESS,
          abi: NOLENS_TOKEN_ABI,
          functionName: 'balanceOf',
          args: [address],
        })

        const minted = await readContract({
          address: NOLENS_NFT_ADDRESS,
          abi: NOLENS_NFT_ABI,
          functionName: 'hasMinted',
          args: [address],
        })

        setBalance(Number(formatEther(rawBalance)))
        setHasMinted(minted)
        setLoading(false)
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err)
        setLoading(false)
      }
    }

    fetchData()
  }, [isConnected, address])

  return (
    <>
      <Head><title>Dashboard – Nolens</title></Head>
      <main className="min-h-screen bg-black text-white pt-32 pb-24">
        <PageSection className="text-center mb-10 fade-in-up">
          <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

          {!isConnected ? (
            <p className="text-white/60">Connect your wallet to view your dashboard.</p>
          ) : loading ? (
            <p className="text-white/60">Loading...</p>
          ) : (
            <div className="space-y-6">
              <p className="text-lg">Your wallet: <span className="font-mono">{address}</span></p>
              <p className="text-lg">Your $NOL balance: <strong>{balance}</strong></p>

              {hasMinted ? (
                <div className="text-green-400 font-semibold">🎉 You already minted your Contributor NFT</div>
              ) : balance >= 240 ? (
                <a href="/claim">
                  <Button className="mt-4">Claim Contributor NFT</Button>
                </a>
              ) : (
                <p className="text-white/60">You need 240 $NOL to mint the Contributor NFT.</p>
              )}
            </div>
          )}
        </PageSection>
      </main>
    </>
  )
}
