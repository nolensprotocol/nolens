import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Docs() {
  return (
    <>
      <Head>
        <title>Nolens Docs</title>
        <meta name="description" content="Developer documentation for Nolens Protocol." />
      </Head>

      <Navbar />

      <main className="pt-32 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Documentation</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to the Nolens developer documentation. This page will include smart contract specs,
          frontend integration examples, contributor guidelines, and audit planning materials.
        </p>
        <div className="mt-8 text-gray-500 text-sm">📘 Coming soon...</div>
      </main>
    </>
  )
}
