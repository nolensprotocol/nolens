import Head from 'next/head'
import Card from '../../components/Card'
import DocsBackLink from '../../components/DocsBackLink'

export default function RoadmapDocs() {
  return (
    <>
      <Head>
        <title>Roadmap – Nolens</title>
        <meta name="description" content="Explore the Nolens roadmap — from early contribution tools to protocol-level utility and governance." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-6">Roadmap</h1>
          <p className="text-lg text-gray-600 mb-12">
            Nolens is unfolding in phases — each unlocking deeper utility, contribution loops, and protocol alignment.
          </p>

          <div className="space-y-10">
            <Card className="fade-in-up delay-100">
              <h2 className="text-2xl font-bold mb-3">🛠️ Phase 1: Foundation</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Launch early contributor program</li>
                <li>Establish the $NOL non-transferable logic</li>
                <li>Build MVP of the Earn → Unlock flow</li>
                <li>Reward-based wallet tracking via Supabase</li>
                <li>Launch docs, partner form, and waitlist</li>
              </ul>
            </Card>

            <Card className="fade-in-up delay-200">
              <h2 className="text-2xl font-bold mb-3">🔓 Phase 2: Access Utility</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mint the first contributor SBTs (soulbound NFTs)</li>
                <li>Launch utility NFTs minted via $NOL</li>
                <li>Enable access gates for partner tools or perks</li>
                <li>Early access for top contributors</li>
                <li>Referral upgrades, point streaks, and shareable rep</li>
              </ul>
            </Card>

            <Card className="fade-in-up delay-300">
              <h2 className="text-2xl font-bold mb-3">🪙 Phase 3: Protocol Logic</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Introduce SBT-based governance or feature voting</li>
                <li>Public leaderboard of top contributors</li>
                <li>Permissionless integrations for shared resources</li>
                <li>On-chain tracking for reputation & unlocks</li>
                <li>Protocol-level access logic using $NOL balance</li>
              </ul>
            </Card>

            <Card className="fade-in-up delay-400">
              <h2 className="text-2xl font-bold mb-3">🧭 Phase 4: Decentralized Coordination</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Community stewards & council-based proposals</li>
                <li>Open applications for aligned ecosystems</li>
                <li>Retroactive rewards for high-impact contributors</li>
                <li>DAO-lite contributor governance (based on rep, not stake)</li>
                <li>Partner-powered unlocks and co-hosted campaigns</li>
              </ul>
            </Card>
          </div>
        </div>
       <DocsBackLink />
      </main>
    </>
  )
}
