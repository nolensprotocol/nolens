// pages/install-metamask.js
import Head from 'next/head'
import Link from 'next/link'

export default function InstallMetaMask() {
  return (
    <>
      <Head>
        <title>Install MetaMask - Nolens</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">MetaMask Not Detected</h1>
        <p className="text-lg mb-6 max-w-md">
          To connect your wallet and participate in Nolens, please install the MetaMask browser extension.
        </p>
        <a
          href="https://metamask.io/download"
          target="_blank"
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Install MetaMask
        </a>
        <Link href="/" className="mt-4 text-indigo-600 hover:underline block text-sm">
          ← Go back home
        </Link>
      </main>
    </>
  )
}
