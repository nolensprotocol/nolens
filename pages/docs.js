// pages/docs.js
import Head from 'next/head'

export default function Docs() {
  return (
    <>
      <Head>
        <title>About Nolens</title>
        <meta name="description" content="Learn about the Nolens protocol, its vision, and the idea of access-first economies." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-4">What is Nolens?</h1>
          <p className="text-gray-600 text-lg">
            Nolens is a protocol built for the rent economy — enabling contribution-based access, tokenized usage, and a new model of shared value.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">🔑 Access-first design</h2>
            <p>
              Nolens shifts focus from ownership to contribution. You earn access by helping others — not by buying in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">🏗️ Built for coordination</h2>
            <p>
              The protocol is designed to support decentralized groups that share, rent, and use assets together — from housing to tools to digital goods.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">🪙 The $NOL token</h2>
            <p>
              $NOL is earned through verifiable contributions. It’s used to unlock access, gain reputation, and shape governance — not for speculation.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

