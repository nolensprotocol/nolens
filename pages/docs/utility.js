import Head from 'next/head'
import Card from '../../components/Card'
import DocsBackLink from '../../components/DocsBackLink'

export default function UtilityDocs() {
  return (
    <>
      <Head>
        <title>What You Can Unlock – Nolens</title>
        <meta name="description" content="Discover what you can unlock with $NOL — from digital tools to access rights and partner benefits." />
      </Head>

      <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-6">What You Can Unlock</h1>
          <p className="text-lg text-white/60 mb-12">
            Nolens rewards contribution with access — not hype. Here's what $NOL can unlock over time:
          </p>

          <div className="space-y-10">
            <Card className="fade-in-up delay-100">
              <h2 className="text-2xl font-semibold mb-3">Access NFTs</h2>
              <p className="text-white/70 text-base leading-relaxed">
                Use $NOL to mint utility NFTs that represent specific rights or perks — access to events, tools, services, or gated communities.
                These NFTs are tradable and can evolve based on the reputation tied to your $NOL activity.
              </p>
            </Card>

            <Card className="fade-in-up delay-200">
              <h2 className="text-2xl font-semibold mb-3">Contributor Tools</h2>
              <p className="text-white/70 text-base leading-relaxed">
                Certain tools and platforms will become unlockable to verified contributors — design assets, dev kits, shared infra, or curated spaces.
                These tools are permissionless to explore, but $NOL gives you <em>enhanced access or coordination rights</em>.
              </p>
            </Card>

            <Card className="fade-in-up delay-300">
              <h2 className="text-2xl font-semibold mb-3">Community Utility</h2>
              <p className="text-white/70 text-base leading-relaxed">
                Partner communities or creators may offer special access for $NOL holders — including collab drops, co-hosted events, and ecosystem benefits.
                Nolens is designed as a protocol that connects effort with value across ecosystems.
              </p>
            </Card>

            <Card className="fade-in-up delay-400">
              <h2 className="text-2xl font-semibold mb-3">Future Unlocks</h2>
              <p className="text-white/70 text-base leading-relaxed">
                In time, $NOL may unlock governance participation, protocol features, or experimental access to shared physical/digital resources.
                We’re just getting started — but the core principle remains: <strong>contribute first, access next</strong>.
              </p>
            </Card>
          </div>
        </div>
        <DocsBackLink />
      </main>
    </>
  )
}
