import Head from 'next/head'
import Card from '../../components/Card'
import DocsBackLink from '../../components/DocsBackLink'

export default function TokenDocs() {
  return (
    <>
      <Head>
        <title>$NOL Token Design – Nolens</title>
        <meta name="description" content="Explore how the Nolens protocol uses non-transferable tokens and NFTs to align contribution, recognition, and access." />
      </Head>

      <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-6">$NOL Token Design</h1>
          <p className="text-lg text-white/60 mb-12">
            Nolens is built to resist speculation — and reward contribution. Here's how our 3-layer system works.
          </p>

          <div className="space-y-10">
            <Card className="fade-in-up delay-100">
              <h2 className="text-2xl font-semibold mb-3">1. $NOL — The Non-Transferable Core</h2>
              <p className="text-white/70 text-base leading-relaxed">
                $NOL is earned through verified contributions. It cannot be bought, sold, or transferred. 
                It acts like on-chain reputation — used to unlock access, vote on features, and mint utility NFTs.
                <br /><br />
                Think of it as <strong>"proof of help"</strong> — not speculation.
              </p>
            </Card>

            <Card className="fade-in-up delay-200">
              <h2 className="text-2xl font-semibold mb-3">2. Soulbound Contributor NFTs</h2>
              <p className="text-white/70 text-base leading-relaxed">
                Contributors and early aligned partners receive non-transferable NFTs tied to their wallet. 
                These SBTs represent impact, role, and recognition — and can unlock deeper rights in the protocol.
                <br /><br />
                They serve as a kind of <strong>on-chain resume</strong> for Noleners.
              </p>
            </Card>

            <Card className="fade-in-up delay-300">
              <h2 className="text-2xl font-semibold mb-3">3. Utility NFTs (Minted via $NOL)</h2>
              <p className="text-white/70 text-base leading-relaxed">
                Users can mint NFTs using their earned $NOL. These NFTs may represent access rights, tools, services, or perks — and <strong>are tradable</strong>.
                <br /><br />
                It’s our way of turning real contribution into usable value, without opening the protocol to pure speculation.
              </p>
            </Card>

            <Card className="fade-in-up delay-400">
              <h2 className="text-xl font-bold mb-2">Why this model?</h2>
              <ul className="list-disc pl-5 mt-2 text-white/70 space-y-1 leading-relaxed">
                <li>Keep speculation out of the core protocol</li>
                <li>Reward real contributors, not early buyers</li>
                <li>Create meaningful access and incentives — without needing ownership</li>
              </ul>
            </Card>
          </div>

          <DocsBackLink />
        </div>
      </main>
    </>
  )
}
