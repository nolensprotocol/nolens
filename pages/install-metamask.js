// pages/install-metamask.js
import Head from 'next/head'
import Link from 'next/link'

export default function InstallMetaMask() {
  return (
    <>
      <Head>
        <title>Install MetaMask - Nolens</title>
        <meta name="description" content="Install MetaMask to use Nolens features." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold mb-4">MetaMask Not Detected</h1>
        <p className="text-lg text-gray-700 max-w-xl text-center mb-6">
          To use Nolens and connect your wallet, you need the MetaMask browser extension.
          Download it from the official site and then refresh this page.
        </p>

        <a
          href="https://metamask.io/download/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition"
        >
          Download MetaMask
        </a>

        <Link
          href="/"
          className="mt-6 text-indigo-600 hover:underline text-sm"
        >
          ← Go back home
        </Link>
      </main>
    </>
  )
}
