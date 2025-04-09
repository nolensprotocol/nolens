// pages/dashboard.js

import { useEffect, useState } from 'react'
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi'
import { parseEther } from 'viem'
import Head from 'next/head'

const NOL_TOKEN_ADDRESS = '0xd757e214eee2ded40cef024ce303c74d1739199d'
const NFT_CONTRACT_ADDRESS = '0x27f5121812516c812Ab986697f67cBD0EDD704Aa'

const NOL_TOKEN_ABI = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
  },
]

const NFT_CONTRACT_ABI = [
  {
    name: 'mint',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [],
    outputs: [],
  },
  {
    name: 'hasMinted',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'wallet', type: 'address' }],
    outputs: [{ name: '', type: 'bool' }],
  },
]

export default function Dashboard() {
  const { address, isConnected } = useAccount()
  const [eligible, setEligible] = useState(false)

  // Read $NOL token balance
  const { data: balance } = useContractRead({
    address: NOL_TOKEN_ADDRESS,
    abi: NOL_TOKEN_ABI,
    functionName: 'balanceOf',
    args: [address],
    watch: true,
    enabled: isConnected,
  })

  // Check if already minted
  const { data: hasMinted } = useContractRead({
    address: NFT_CONTRACT_ADDRESS,
    abi: NFT_CONTRACT_ABI,
    functionName: 'hasMinted',
    args: [address],
    watch: true,
    enabled: isConnected,
  })

  // Call the mint function
  const { write: mintNFT, data: txData, isLoading: isMinting } = useContractWrite({
    address: NFT_CONTRACT_ADDRESS,
    abi: NFT_CONTRACT_ABI,
    functionName: 'mint',
  })

  // Wait for mint tx confirmation
  const { isSuccess: txConfirmed } = useWaitForTransaction({
    hash: txData?.hash,
  })

  useEffect(() => {
    if (balance && balance >= parseEther('240')) {
      setEligible(true)
    } else {
      setEligible(false)
    }
  }, [balance])

  return (
    <>
      <Head>
        <title>Your $NOL Dashboard</title>
      </Head>

      <main className="min-h-screen bg-black text-white pt-32 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold">$NOL Dashboard</h1>

          <p className="text-white/70">
            {isConnected ? (
              <>Connected wallet: <span className="font-mono">{address}</span></>
            ) : (
              <>Please connect your wallet to view your status.</>
            )}
          </p>

          {isConnected && (
            <div className="border border-white/20 rounded-xl p-6 bg-white/5 shadow-md">
              <p className="text-xl mb-4">Your $NOL Balance:</p>
              <p className="text-3xl font-bold text-green-400">
                {balance ? `${Number(balance) / 1e18} NOL` : 'Loading...'}
              </p>

              {hasMinted ? (
                <p className="mt-6 text-green-400 font-medium">✅ NFT already minted</p>
              ) : eligible ? (
                <button
                  onClick={() => mintNFT()}
                  disabled={isMinting}
                  className="mt-6 bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200"
                >
                  {isMinting ? 'Minting...' : 'Mint Contributor NFT'}
                </button>
              ) : (
                <p className="mt-6 text-yellow-400">You need 240 $NOL to mint your Contributor NFT.</p>
              )}

              {txConfirmed && (
                <p className="mt-4 text-green-300">🎉 Transaction confirmed! Your NFT has been minted.</p>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  )
}
