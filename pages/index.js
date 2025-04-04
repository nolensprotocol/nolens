import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nolens Protocol</title>
        <meta name="description" content="Own less. Access more. Nolens is building the protocol for the access-first economy." />
      </Head>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 px-6 flex items-center justify-between w-full">
        <div className="flex items-center space-x-1.5">
          <img src="/nolens_icon.png" alt="Nolens Logo" className="w-6 h-6" />
          <span className="mt-[-2px] text-gray-900 text-lg font-sans tracking-widest lowercase">nolens</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-800 font-medium">
          <a href="/" className="hover:text-black">Home</a>
          <a href="/docs" className="hover:text-black">Docs</a>
          <a href="https://t.me/nolensprotocol" target="_blank" className="hover:text-black">Telegram</a>
          <a href="https://x.com/nolensprotocol" target="_blank" className="hover:text-black">X</a>
          <a href="/contribute" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Contribute</a>
        </nav>
      </header>

    <section className="relative min-h-[90vh] pt-40 pb-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
              Own less. <br /> Access more.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Nolens is building flexible infrastructure for the on-demand, tokenized, and trustless access economy.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contribute" className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition">Contribute</a>
              <a href="https://t.me/nolensprotocol" className="border border-gray-400 text-gray-800 px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition">Join Telegram</a>
            </div>
          </div>
          <div className="relative h-80 md:h-full flex items-center justify-center">
            <img
              src="/nolens_social_globe.svg"
              alt="Nolens Mesh Globe"
              className="w-full max-w-md opacity-100 animate-spin-slow drop-shadow-xl"
            />
          </div>
        </div>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-10">
          <svg width="480" height="480" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow">
            <path d="M120,20 C170,20 220,70 220,120 C220,170 170,220 120,220 C70,220 20,170 20,120 C20,70 70,20 120,20 Z" stroke="white" strokeWidth="4" fill="none"/>
          </svg>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(240,240,255,0.25),_transparent_80%)] z-0"></div>
      </section>

      <section className="py-24 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-16">
            Nolens powers the access-first economy through modular infrastructure and trustless collaboration.
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Access & Payments */}
            <div className="text-center">
              <img src="/utility_access.png" alt="Access & Payments" className="mx-auto h-28 mb-6" />
              <h3 className="text-xl font-semibold mb-2">Access & Payments</h3>
              <p className="text-gray-600">
                Use $NOL to unlock rental, service, or digital experiences — tokenized and on-demand.
              </p>
            </div>

            {/* Escrow Deposits */}
            <div className="text-center">
              <img src="/utility_escrow.png" alt="Escrow Deposits" className="mx-auto h-28 mb-6" />
              <h3 className="text-xl font-semibold mb-2">Escrow Deposits</h3>
              <p className="text-gray-600">
                Rent securely using smart contract-based collateralization. Trustless and fair.
              </p>
            </div>

            {/* Staking & Reputation */}
            <div className="text-center">
              <img src="/utility_staking.png" alt="Staking & Reputation" className="mx-auto h-28 mb-6" />
              <h3 className="text-xl font-semibold mb-2">Staking & Reputation</h3>
              <p className="text-gray-600">
                Stake $NOL to build a verified reputation, earn benefits, and unlock higher tiers.
              </p>
            </div>
          </div>
        </div>
      </section>
              
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">Milestones</h2>

          <div className="relative h-60 flex items-start justify-between border-t-2 border-gray-300">
            <!-- Phase 1 -->
            <div className="relative text-center w-1/4 group">
              <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-5 h-5 bg-black rounded-full"></div>
              <img src="/milestone_icon1.png" alt="Phase 1" className="mx-auto mt-6 h-10 mb-2" />
              <div className="text-sm font-semibold">Phase 1</div>
              <div className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-500 mt-2">
                Branding, token identity, website, and community setup.
              </div>
            </div>

            <!-- Phase 2 -->
            <div className="relative text-center w-1/4 group">
              <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-5 h-5 bg-black rounded-full"></div>
              <img src="/milestone_icon2.png" alt="Phase 2" className="mx-auto mt-6 h-10 mb-2" />
              <div className="text-sm font-semibold">Phase 2</div>
              <div className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-500 mt-2">
                Infrastructure: smart contracts, staking logic, and contribute portal.
              </div>
            </div>

            <!-- Phase 3 -->
            <div className="relative text-center w-1/4 group">
              <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-5 h-5 bg-black rounded-full"></div>
              <img src="/milestone_icon3.png" alt="Phase 3" className="mx-auto mt-6 h-10 mb-2" />
              <div className="text-sm font-semibold">Phase 3</div>
              <div className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-500 mt-2">
                Pilot modules, shared utility demos, and ecosystem collaborations.
              </div>
            </div>

            <!-- Phase 4 -->
            <div className="relative text-center w-1/4 group">
              <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-5 h-5 bg-black rounded-full"></div>
              <img src="/milestone_icon4.png" alt="Phase 4" className="mx-auto mt-6 h-10 mb-2" />
              <div className="text-sm font-semibold">Phase 4</div>
              <div className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-500 mt-2">
                Protocol integrations, DAO contributions, and scaling adoption.
              </div>
            </div>
          </div>
        </div>
      </section>


      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>
    </>
  )
}
