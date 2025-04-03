import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nolens Protocol</title>
        <meta name="description" content="Own less. Access more. Nolens is building the protocol for the access-first economy." />
      </Head>

      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <img src="/nolens_icon.png" alt="Nolens Logo" className="w-20 mx-auto mb-4 animate-fade-in" />
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-4 animate-slide-up">Own less. Access more.</h1>
          <p className="text-lg text-gray-300 mb-6 animate-slide-up delay-100">Designed for the next era of shared living.</p>
          <div className="space-x-4 animate-fade-in delay-200">
            <a href="https://t.me/nolensprotocol" className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition">Telegram</a>
            <a href="https://x.com/nolensprotocol" className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition">Twitter</a>
          </div>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-fuchsia-500/20 via-indigo-500/10 to-transparent opacity-30 blur-3xl z-0"></div>
      </section>
    </>
  )
}
