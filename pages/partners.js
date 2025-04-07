// pages/partners.js
import Head from 'next/head'
import Link from 'next/link'

export default function Partners() {
  return (
    <>
      <Head>
        <title>Become a Partner – Nolens</title>
        <meta name="description" content="Join Nolens as a Pioneer Partner and help build the access-first economy." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-4">Become a Nolens Partner</h1>
          <p className="text-gray-600 text-lg">
            We're building a protocol for shared access. If you run a tool, space, or service aligned with our values — let's partner.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">What You Receive</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Featured as a Nolens Pioneer Partner</li>
              <li>Access to early contributors (designers, developers, builders)</li>
              <li>Visibility on our Earn page and social channels</li>
              <li>Optional recognition through a Partner NFT badge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">What We Look For</h2>
            <p>
              You might be a digital tool, a co-living space, a creative hub, or something we haven’t imagined yet.
              If you're open to offering access (even for just a few contributors), we’d love to connect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">How to Get Involved</h2>
            <p>
              Fill out our short interest form and we’ll reach out personally:
            </p>
            <a
              href="https://forms.gle/1qpzP2Foi6dGM99B8" // TODO: Replace with actual form URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
            >
              Apply to Partner
            </a>
          </section>
        </div>
      </main>
    </>
  )
}
