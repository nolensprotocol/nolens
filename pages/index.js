// pages/docs.js
import Head from 'next/head'

export default function Docs() {
  return (
    <>
      <Head>
        <title>Nolens Documentation</title>
        <meta name="description" content="Read about the Nolens Protocol, its mission, tokenomics, and roadmap." />
      </Head>

      <section className="min-h-screen py-24 px-6 bg-white text-gray-900">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Nolens Whitepaper</h1>

          <h2 className="text-2xl font-semibold mb-4">What is Nolens?</h2>
          <p className="mb-6">Nolens is a Web3 protocol designed for the next era of shared living. It enables a decentralized, token-powered infrastructure for rentals, access, and flexible consumption — without ownership friction. Powered by the $NOL token, Nolens gives users tools to stake, access, and interact with utility-driven assets in a decentralized way.</p>

          <h2 className="text-2xl font-semibold mb-4">Mission Statement</h2>
          <p className="mb-6">Own less. Access more. Designed for the next era of shared living.</p>

          <h2 className="text-2xl font-semibold mb-4">Token Utility</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Access & Payments:</strong> Pay for rental access, subscriptions, or on-demand services.</li>
            <li><strong>Escrow & Security:</strong> Use $NOL for peer-to-peer escrow and collateral on-chain.</li>
            <li><strong>Staking & Reputation:</strong> Stake tokens to build a profile and earn privileges across the ecosystem.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
          <ul className="list-disc list-inside mb-6">
            <li>30% – Community & Ecosystem (airdrop, rewards)</li>
            <li>20% – Growth Fund (partnerships, grants)</li>
            <li>15% – Liquidity & Listings</li>
            <li>15% – Team & Advisors (vesting)</li>
            <li>10% – Investors (optional)</li>
            <li>5% – DAO Treasury</li>
            <li>5% – Staking Incentives</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Roadmap (Phases)</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Phase 1:</strong> Branding, whitepaper, community</li>
            <li><strong>Phase 2:</strong> MVP product, token distribution</li>
            <li><strong>Phase 3:</strong> dApps, partnerships, governance</li>
            <li><strong>Phase 4:</strong> Full DAO transition, real-world expansion</li>
          </ul>
        </div>
      </section>
    </>
  )
}
