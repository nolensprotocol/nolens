import Head from 'next/head'
import Card from '../../components/Card'
import DocsBackLink from '../../components/DocsBackLink'

export default function GovernanceDocs() {
  return (
    <>
      <Head>
        <title>Governance & Alignment – Nolens</title>
        <meta name="description" content="How Nolens stays aligned: reputation-based governance, soulbound recognition, and contribution-first control." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-6">Governance & Alignment</h1>
          <p className="text-lg text-gray-600 mb-12">
            Governance at Nolens is about **contribution, not speculation**. We’re building a system that aligns with those who help — not those who hold.
          </p>

          <div className="space-y-10">
            <Card className="fade-in-up delay-100">
              <h2 className="text-2xl font-semibold mb-3">🧠 Why Not a Token-Only DAO?</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Most token-voting DAOs reward capital, not contribution. We’re taking a different path — one where high-impact contributors are recognized through action, not accumulation.
                $NOL is non-transferable by design — so governance can’t be bought.
              </p>
            </Card>

            <Card className="fade-in-up delay-200">
              <h2 className="text-2xl font-semibold mb-3">🏷️ Reputation Through $NOL</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Every $NOL token represents verifiable contribution. Wallets with more $NOL have demonstrated more help — and can earn priority in shaping protocol direction.
                Over time, this will unlock on-chain permissions, access levels, and proposal rights.
              </p>
            </Card>

            <Card className="fade-in-up delay-300">
              <h2 className="text-2xl font-semibold mb-3">🪪 Soulbound Contributor Roles</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Select contributors may receive soulbound NFTs that serve as governance keys — tied to specific domains (design, dev, community). 
                These roles can propose upgrades, vote on expansions, or unlock additional capabilities based on scope and trust.
              </p>
            </Card>

            <Card className="fade-in-up delay-400">
              <h2 className="text-2xl font-semibold mb-3">🛡️ Long-Term Alignment</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Nolens will always favor real work over wealth. We’ll publish proposal rules, maintain open-source logic, and expand governance 
                as contributors grow. Stewards will be elected by reputation — and core updates will require multi-sig or community review.
              </p>
            </Card>
          </div>
        </div>
       <DocsBackLink />
      </main>
    </>
  )
}
