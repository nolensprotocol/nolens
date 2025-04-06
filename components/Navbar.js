import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          nolens
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-10 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/tasks">Earn</Link>
          <Link href="/contribute">Contribute</Link>
          <Link href="/docs">About</Link>
        </nav>

        {/* Hamburger icon (only on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6">
          <nav className="flex flex-col space-y-4 text-sm font-medium text-gray-800">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/tasks" onClick={() => setIsOpen(false)}>Earn</Link>
            <Link href="/contribute" onClick={() => setIsOpen(false)}>Contribute</Link>
            <Link href="/docs" onClick={() => setIsOpen(false)}>About</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
