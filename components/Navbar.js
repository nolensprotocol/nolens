import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [flashBg, setFlashBg] = useState(false)

  const handleMenuClick = () => {
    setIsOpen(false)
    setFlashBg(true)
    setTimeout(() => setFlashBg(false), 300)
  }

  return (
    <>
      <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl tracking-wide font-extrabold text-gray-900"
          >
            nolens
          </Link>

          {/* Desktop Nav + Wallet */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/tasks">Earn</Link>
            <Link href="/contribute">Contribute</Link>
            <Link href="/docs">About</Link>

            {/* Desktop Connect Wallet */}
            <button className="ml-6 px-4 py-2 rounded-md bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition">
              Connect Wallet
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white px-6 pb-6 pt-2">
            <nav className="flex flex-col space-y-4 text-sm font-medium text-gray-800">
              <Link href="/" onClick={handleMenuClick}>Home</Link>
              <Link href="/tasks" onClick={handleMenuClick}>Earn</Link>
              <Link href="/contribute" onClick={handleMenuClick}>Contribute</Link>
              <Link href="/docs" onClick={handleMenuClick}>About</Link>

              {/* Mobile Connect Wallet */}
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 px-4 py-2 rounded-md bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition"
              >
                Connect Wallet
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Flash overlay */}
      {flashBg && (
        <div className="fixed inset-0 bg-black opacity-40 z-40 animate-fade-out pointer-events-none" />
      )}

      <style jsx>{`
        @keyframes fadeOut {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 0;
          }
        }
        .animate-fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}
