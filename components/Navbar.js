import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 px-6 w-full">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1.5">
          <img src="/nolens_icon.png" alt="Nolens Logo" className="w-6 h-6" />
          <span className="mt-[-2px] text-gray-900 text-lg font-sans tracking-widest lowercase">nolens</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-800 font-medium">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/docs" className="hover:text-black">Docs</Link>
          <a href="https://t.me/nolensprotocol" target="_blank" className="hover:text-black">Telegram</a>
          <a href="https://x.com/nolensprotocol" target="_blank" className="hover:text-black">X</a>
          <Link href="/contribute" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Contribute</Link>
        </div>

        {/* Mobile Right */}
        <div className="md:hidden flex items-center space-x-2">
          <Link
            href="/contribute"
            className="bg-black text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-800 transition"
          >
            Contribute
          </Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2 text-sm font-medium text-gray-800">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/docs" className="hover:text-black">Docs</Link>
          <a href="https://t.me/nolensprotocol" target="_blank" className="hover:text-black">Telegram</a>
          <a href="https://x.com/nolensprotocol" target="_blank" className="hover:text-black">X</a>
        </div>
      )}
    </header>
  )
}
