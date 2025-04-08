// pages/docs/token.js
import Head from 'next/head'

export default function TokenDocs() {
  return (
    <>
      <Head>
        <title>$NOL Token Design – Nolens</title>
        <meta name="description" content="Explore how the Nolens protocol uses non-transferable tokens and NFTs to align contribution, recognition, and access." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-6">$NOL Token Design</h1>
          <p className="text-lg text-gray-600 mb-12">
            Nolens is built to resist speculation — and reward contribution. Here's how our 3-layer system works.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">1. $NOL — The Non-Transferable Core</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              $NOL is earned through verified contributions. It cannot be bought, sold, or transferred. 
              It acts like on-chain reputation — used to unlock access, vote on features, and mint utility NFTs.
              <br /><br />
              Think of it as <strong>"proof of help"</strong> — not speculation.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">2. Soulbound Contributor NFTs</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Contributors and early aligned partners receive non-transferable NFTs tied to their wallet. 
              These SBTs represent impact, role, and recognition — and can unlock deeper rights in the protocol.
              <br /><br />
              They serve as a kind of <strong>on-chain resume</strong> for Noleners.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">3. Utility NFTs (Minted via $NOL)</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Users can mint NFTs using their earned $NOL. These NFTs may represent access rights, tools, services, or perks — and <strong>are tradable</strong>.
              <br /><br />
              It’s our way of turning real contribution into usable value, without opening the protocol to pure speculation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-gray-800">Why this model?</h2>
            <p className="text-gray-700 leading-relaxed">
              This 3-layer system allows us to:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Keep speculation out of the core protocol</li>
                <li>Reward real contributors, not early buyers</li>
                <li>Create meaningful access and incentives — without needing ownership</li>
              </ul>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
