import Head from 'next/head'
import Card from '../components/Card'
import Button from '../components/Button'
import PageSection from '../components/PageSection'

export default function Partners() {
  return (
    <>
      <Head>
        <title>Become a Partner – Nolens</title>
        <meta name="description" content="Join Nolens as a Pioneer Partner and help build the access-first economy." />
      </Head>

      <main className="min-h-screen bg-black text-white pt-32 pb-24">
        <PageSection className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl font-extrabold mb-4">Become a Nolens Partner</h1>
          <p className="text-white/60 text-lg">
            We're building a protocol for shared access. If you run a tool, space, or service aligned with our values — let's partner.
          </p>
        </PageSection>

        <PageSection className="space-y-10 text-white/70 text-base leading-relaxed fade-in-up delay-200">
          <Card>
            <h2 className="text-xl font-semibold mb-3">What You Receive</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Featured as a Nolens Pioneer Partner</li>
              <li>Access to early contributors (designers, developers, builders)</li>
              <li>Visibility on our Earn page and social channels</li>
              <li>Optional recognition through a Partner NFT badge</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-3">What We Look For</h2>
            <p>
              You might be a digital tool, a co-living space, a creative hub, or something we haven’t imagined yet.
              If you're open to offering access (even for just a few contributors), we’d love to connect.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-3">How to Get Involved</h2>
            <p>Fill out our short interest form and we’ll reach out personally:</p>
            <div className="mt-4">
              <a
                href="https://forms.gle/1qpzP2Foi6dGM99B8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full md:w-auto">Apply to Partner</Button>
              </a>
            </div>
          </Card>
        </PageSection>
      </main>
    </>
  )
}
