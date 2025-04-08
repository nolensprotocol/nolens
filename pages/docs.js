import Head from 'next/head'
import Card from '../components/Card'

export default function Docs() {
  return (
    <>
      <Head>
        <title>About Nolens</title>
        <meta name="description" content="Learn about the Nolens protocol, its vision, and the idea of access-first economies." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold mb-4">What is Nolens?</h1>
          <p className="text-gray-600 text-lg">
            Nolens is a protocol built for the rent economy — enabling contribution-based access, tokenized usage, and a new model of shared value.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12 text-gray-700 text-base leading-relaxed">
          <Card className="animate-fade-in-up delay-100">
            <h2 className="text-xl font-semibold mb-2">🌱 Who we are</h2>
            <p>
              Nolens began as a small, independent effort — not backed by VCs or hype, but by a simple belief: that value should come from contribution, not speculation.
              We are builders, designers, and contributors who care about coordination, not domination.
            </p>
            <p className="mt-2">
              We call ourselves <strong>Noleners</strong>. And we’re building for those who want to help — not just hold.
            </p>
          </Card>

          <Card className="animate-fade-in-up delay-200">
            <h2 className="text-xl font-semibold mb-2">🔑 Access-first design</h2>
            <p>
              Nolens shifts focus from ownership to contribution. You earn access by helping others — not by buying in.
            </p>
          </Card>

          <Card className="animate-fade-in-up delay-300">
            <h2 className="text-xl font-semibold mb-2">🏗️ Built for coordination</h2>
            <p>
              The protocol is designed to support decentralized groups that share, rent, and use assets together — from housing to tools to digital goods.
            </p>
          </Card>

          <Card className="animate-fade-in-up delay-400">
            <h2 className="text-xl font-semibold mb-2">🪙 The $NOL token</h2>
            <p>
              $NOL is earned through verifiable contributions. It’s used to unlock access, gain reputation, and shape governance — not for speculation.
            </p>
          </Card>

          <Card className="animate-fade-in-up delay-500">
            <h2 className="text-xl font-semibold mb-2">🛤️ Where we’re headed</h2>
            <p>
              Our goal is to make contribution the most powerful way to participate in a network.
              In the future, Nolens aims to support identity, governance, and utility layers that power collective ownership — without the need to own.
            </p>
          </Card>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </>
  )
}
