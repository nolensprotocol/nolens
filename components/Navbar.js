// components/Navbar.jsx
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="bg-[#f7f8fa] fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">nolens</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/tasks">Earn</Link>
          <Link href="/contribute">Contribute</Link>
          <Link href="/docs">About</Link>
        </nav>

        {/* Hamburger */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#f7f8fa] px-6 pb-6 space-y-4 text-sm font-medium text-gray-800 animate-fade-in">
          <Link href="/" onClick={closeMenu} className="block">Home</Link>
          <Link href="/tasks" onClick={closeMenu} className="block">Earn</Link>
          <Link href="/contribute" onClick={closeMenu} className="block">Contribute</Link>
          <Link href="/docs" onClick={closeMenu} className="block">About</Link>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.25s ease-out;
        }
      `}</style>
    </header>
  )
}
