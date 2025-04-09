'use client'
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi'
import { parseEther } from 'viem'
import Head from 'next/head'
import { useState } from 'react'

// Update with your deployed contract addresses
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
    name: 'claim',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [],
    outputs: [],
  },
  {
    name: 'hasClaimed',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'user', type: 'address' }],
    outputs: [{ name: '', type: 'bool' }],
  },
]

export default function ClaimPage() {
  const { address, isConnected } = useAccount()
  const [txHash, setTxHash] = useState(null)

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

  const { write: claimNFT, data: txData, isLoading: isClaiming } = useContractWrite({
    address: NFT_CONTRACT_ADDRESS,
    abi: NFT_ABI,
    functionName: 'claim',
    onSuccess: (data) => {
      setTxHash(data.hash)
    },
  })

  const { isSuccess: isConfirmed } = useWaitForTransaction({
    hash: txHash,
  })

  const nolBalance = balanceData ? parseFloat(balanceData.toString()) / 1e18 : 0
  const eligible = nolBalance >= 10 && !hasClaimed

  return (
    <>
      <Head>
        <title>Claim Contributor NFT – Nolens</title>
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Claim Contributor NFT</h1>

        {!isConnected ? (
          <p className="text-gray-600">Please connect your wallet first.</p>
        ) : (
          <div className="max-w-xl mx-auto space-y-4">
            <p className="text-lg">
              Your $NOL Balance: <strong>{nolBalance.toFixed(2)}</strong>
            </p>
            <p>
              NFT Status:{' '}
              {hasClaimed ? (
                <span className="text-green-600 font-medium">Already Claimed ✅</span>
              ) : eligible ? (
                <span className="text-blue-600 font-medium">Eligible to Claim 🎉</span>
              ) : (
                <span className="text-red-500 font-medium">Not eligible</span>
              )}
            </p>

            <button
              onClick={() => claimNFT()}
              disabled={!eligible || isClaiming}
              className={`mt-6 px-6 py-3 text-white rounded-md font-semibold transition ${
                eligible ? 'bg-black hover:bg-gray-800' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {hasClaimed ? 'Claimed' : isClaiming ? 'Claiming...' : 'Claim NFT'}
            </button>

            {txHash && !isConfirmed && (
              <p className="text-sm text-gray-500 mt-2">Transaction sent... waiting for confirmation</p>
            )}
            {isConfirmed && (
              <p className="text-green-600 mt-2 font-medium">✅ NFT successfully claimed!</p>
            )}
          </div>
        )}
      </main>
    </>
  )
}
