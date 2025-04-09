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

      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Your Nolens Dashboard</h1>

        {!isConnected ? (
          <p className="text-gray-600">Please connect your wallet to view your dashboard.</p>
        ) : (
          <div className="max-w-xl mx-auto space-y-6">
            <div className="border rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Wallet Address</h2>
              <p className="text-sm text-gray-600">{address}</p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">$NOL Balance</h2>
              <p className="text-2xl font-bold">{nolBalance.toFixed(2)} $NOL</p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Contributor NFT</h2>
              {hasClaimed ? (
                <p className="text-green-600 font-medium">Already Claimed ✅</p>
              ) : eligible ? (
                <Link
                  href="/claim"
                  className="inline-block mt-2 px-6 py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition"
                >
                  Claim Contributor NFT
                </Link>
              ) : (
                <p className="text-gray-500">Not yet eligible to claim</p>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  )
}
