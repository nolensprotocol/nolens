import Head from 'next/head'

export default function Contribute() {
  return (
    <>
      <Head>
        <title>Contribute to Nolens</title>
        <meta name="description" content="Join Nolens and help build the future of access-first economies." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Help Build Nolens</h1>
          <p className="text-lg text-gray-600">
            Nolens is an open protocol. We welcome contributors across design, development, and community to build the access-first economy together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Dev */}
          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <h3 className="text-xl font-semibold mb-2">🛠️ Development</h3>
            <p className="text-sm text-gray-600 mb-4">Smart contracts, DApp UI, integrations, GitHub PRs — builders welcome.</p>
            <a href="https://github.com/nolensprotocol" target="_blank" className="text-indigo-600 hover:underline font-medium text-sm">Explore GitHub</a>
          </div>

          {/* Design */}
          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <h3 className="text-xl font-semibold mb-2">🎨 Design</h3>
            <p className="text-sm text-gray-600 mb-4">Help craft the identity of Nolens — UI/UX, visuals, animations, storytelling.</p>
            <a href="https://t.me/nolensprotocol" target="_blank" className="text-indigo-600 hover:underline font-medium text-sm">Join Telegram</a>
          </div>

          {/* Community */}
          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <h3 className="text-xl font-semibold mb-2">📣 Community</h3>
            <p className="text-sm text-gray-600 mb-4">Spread the word, translate, create educational content, or moderate.</p>
            <a href="https://x.com/nolensprotocol" target="_blank" className="text-indigo-600 hover:underline font-medium text-sm">Follow us on X</a>
          </div>
        </div>
      </main>
    </>
  )
}
