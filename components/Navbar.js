import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#f7f8fa] fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          nolens
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/tasks">Earn</Link>
          <Link href="/contribute">Contribute</Link>
          <Link href="/docs">About</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f7f8fa] px-6 pb-6">
          <ul className="space-y-4 text-sm font-medium text-gray-800 pt-4">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/tasks" onClick={() => setIsOpen(false)}>Earn</Link>
            </li>
            <li>
              <Link href="/contribute" onClick={() => setIsOpen(false)}>Contribute</Link>
            </li>
            <li>
              <Link href="/docs" onClick={() => setIsOpen(false)}>About</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
