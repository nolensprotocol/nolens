import Head from 'next/head'
import Card from '../../components/Card'
import PageSection from '../../components/PageSection'
import Link from 'next/link'

export default function Docs() {
  return (
    <>
      <Head>
        <title>About Nolens</title>
        <meta name="description" content="Learn about the Nolens protocol, its vision, and the idea of access-first economies." />
      </Head>

      <main className="min-h-screen bg-black text-white pt-32 pb-24">
        <PageSection className="text-center mb-20 fade-in-up">
          <h1 className="text-4xl font-extrabold mb-4">What is Nolens?</h1>
          <p className="text-white/60 text-lg">
            Nolens is a protocol built for the rent economy — enabling contribution-based access, tokenized usage, and a new model of shared value.
          </p>
        </PageSection>

        <PageSection className="space-y-12 text-white/70 text-base leading-relaxed">
          <Card className="fade-in-up delay-100">
            <h2 className="text-xl font-semibold mb-2">Who we are</h2>
            <p>
              Nolens began as a small, independent effort — not backed by VCs or hype, but by a simple belief: that value should come from contribution, not speculation.
              We are builders, designers, and contributors who care about coordination, not domination.
            </p>
            <p className="mt-2">
              We call ourselves <strong>Noleners</strong>. And we’re building for those who want to help — not just hold.
            </p>
          </Card>

          <Card className="fade-in-up delay-200">
            <h2 className="text-xl font-semibold mb-2">Access-first design</h2>
            <p>
              Nolens shifts focus from ownership to contribution. You earn access by helping others — not by buying in.
            </p>
          </Card>

          <Card className="fade-in-up delay-300">
            <h2 className="text-xl font-semibold mb-2">Built for coordination</h2>
            <p>
              The protocol is designed to support decentralized groups that share, rent, and use assets together — from housing to tools to digital goods.
            </p>
          </Card>

          <Card className="fade-in-up delay-400">
            <h2 className="text-xl font-semibold mb-2">The $NOL token</h2>
            <p>
              $NOL is earned through verifiable contributions. It’s used to unlock access, gain reputation, and shape governance — not for speculation.
            </p>
          </Card>

          <Card className="fade-in-up delay-500">
            <h2 className="text-xl font-semibold mb-2">Where we’re headed</h2>
            <p>
              Our goal is to make contribution the most powerful way to participate in a network.
              In the future, Nolens aims to support identity, governance, and utility layers that power collective ownership — without the need to own.
            </p>
          </Card>
        </PageSection>

        {/* Learn More Section */}
        <PageSection className="mt-24 text-center fade-in-up delay-600">
          <h2 className="text-2xl font-bold mb-4">Learn More</h2>
          <p className="text-white/60 mb-6">Dive deeper into how Nolens works:</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/docs/token" className="text-white hover:underline font-medium">
              $NOL Token Design
            </Link>
            <Link href="/docs/utility" className="text-white hover:underline font-medium">
              What You Can Unlock
            </Link>
            <Link href="/docs/roadmap" className="text-white hover:underline font-medium">
              Roadmap & Milestones
            </Link>
            <Link href="/docs/governance" className="text-white hover:underline font-medium">
              Governance & Alignment
            </Link>
          </div>
        </PageSection>
      </main>
    </>
  )
}
