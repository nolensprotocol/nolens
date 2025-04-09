'use client'
import Head from 'next/head'
import Link from 'next/link'
import { useAccount, useContractRead } from 'wagmi'

const NOL_TOKEN_ADDRESS = '0x5fBfd4ffFACedFb87bA8aD6410a918bfD39950C6'
const NFT_CONTRACT_ADDRESS = '0xb1f38b88150E01b0232942E1CB2D4017CE33d037'

const ERC20_ABI = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'owner', type: 'address' }],
    outputs: [{ name: 'balance', type: 'uint256' }],
  },
]

const NFT_ABI = [
  {
    name: 'hasClaimed',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'user', type: 'address' }],
    outputs: [{ name: '', type: 'bool' }],
  },
]

export default function Dashboard() {
  const { address, isConnected } = useAccount()

  const { data: balanceData } = useContractRead({
    address: NOL_TOKEN_ADDRESS,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: [address],
    watch: true,
  })

  const { data: hasClaimed } = useContractRead({
    address: NFT_CONTRACT_ADDRESS,
    abi: NFT_ABI,
    functionName: 'hasClaimed',
    args: [address],
    watch: true,
  })

  const nolBalance = balanceData ? parseFloat(balanceData.toString()) / 1e18 : 0
  const eligible = nolBalance >= 10 && !hasClaimed

  return (
    <>
      <Head>
        <title>Your Dashboard – Nolens</title>
      </Head>

      <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-10 leading-tight">Your Nolens Dashboard</h1>

          {!isConnected ? (
            <p className="text-gray-400">Please connect your wallet to view your dashboard.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow hover:shadow-lg transition-all">
                <h2 className="text-sm font-medium text-gray-400 uppercase mb-2">Wallet</h2>
                <p className="text-lg font-semibold break-all">{address}</p>
              </div>

              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow hover:shadow-lg transition-all">
                <h2 className="text-sm font-medium text-gray-400 uppercase mb-2">$NOL Balance</h2>
                <p className="text-3xl font-bold">{nolBalance.toFixed(2)}</p>
              </div>

              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow hover:shadow-lg transition-all">
                <h2 className="text-sm font-medium text-gray-400 uppercase mb-2">Contributor NFT</h2>
                {hasClaimed ? (
                  <p className="text-green-400 font-semibold mt-1">Already Claimed ✅</p>
                ) : eligible ? (
                  <Link
                    href="/claim"
                    className="inline-block mt-2 px-5 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
                  >
                    Claim Contributor NFT
                  </Link>
                ) : (
                  <p className="text-red-400 mt-1">Not eligible yet</p>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
