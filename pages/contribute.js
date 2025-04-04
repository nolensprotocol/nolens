import Head from 'next/head'

export default function Contribute() {
  return (
    <>
      <Head>
        <title>Contribute to Nolens</title>
        <meta name="description" content="Join Nolens and help build the future of access-first economies." />
      </Head>

      <main className="relative min-h-screen bg-white text-gray-900 py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-20 -mt-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 opacity-0 animate-fade-in-up leading-tight">
            <span className="inline-block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-transparent bg-clip-text">
              Help Build Nolens
            </span>
          </h1>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in-up delay-200">
            Nolens is an open protocol. We welcome contributors across design, development, and community to build the access-first economy together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 z-10 relative">
          {/* Dev */}
          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <h3 className="text-xl font-semibold mb-2">🛠️ Development</h3>
            <p className="text-sm text-gray-600 mb-4">Smart contracts, DApp UI, integrations, GitHub PRs — builders welcome.</p>
            <a href="https://github.com/nolensprotocol" target="_blank" className="text-indigo-600 hover:underline font-medium text-sm">Explore GitHub</a>
          </div>

          {/* Design */}
          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <h3 className="text-xl font-semibold mb-2">🎨 Design</h3>
            <p className="text-sm text-gray-600 mb-4">Help craft the identity of Nolens — UI/UX, visuals, animations, storytelling.</p>
            <a href="https://t.me/nolensprotocol" target="_blank" className="text-indigo-600 hover:underline font-medium text-sm">Join Telegram</a>
          </div>

          {/* Community */}
          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <h3 className="text-xl font-semibold mb-2">📣 Community</h3>
            <p className="text-sm text-gray-600 mb-4">Spread the word, translate, create educational content, or moderate.</p>
            <a href="https://x.com/nolensprotocol" target="_blank" className="text-indigo-600 hover:underline font-medium text-sm">Follow us on X</a>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 opacity-5 pointer-events-none">
          <img src="/nolens_icon.png" alt="Nolens Logo Subtle Background" className="w-[480px]" />
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
          animation: fade-in-up 1.2s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </>
  );
}
