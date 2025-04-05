import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Docs() {
  return (
    <>
      <Head>
        <title>Nolens Documentation</title>
        <meta name="description" content="Learn how Nolens works — shared, tokenized access for the next era." />
      </Head>

      {/* Interactive Logo */}
      <div className="absolute top-4 left-4 z-50">
        <Link href="/">
          <Image
            src="/nolens_icon.png"
            alt="Nolens Logo"
            width={48}
            height={48}
            className="cursor-pointer transition-transform hover:scale-110"
          />
        </Link>
      </div>

      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Nolens Documentation</h1>
          <p className="text-lg text-gray-600">
            Welcome to the early docs for Nolens. We’re building shared, tokenized access tools for the next era of onchain coordination.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-2">What is Nolens?</h2>
            <p className="text-gray-700">
              Nolens is a protocol that enables communities to share and tokenize access to real and digital spaces, services, and experiences. Designed for flexibility and modularity, Nolens supports new models of coordination beyond static ownership.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Shared co-living and resource access</li>
              <li>Tokenized access passes for services or experiences</li>
              <li>Network-driven contribution systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">How to Get Involved</h2>
            <p className="text-gray-700">
              Join our contributor network or Telegram group. We’re always looking for designers, developers, and onchain thinkers who want to shape the future of shared living and economic coordination.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
