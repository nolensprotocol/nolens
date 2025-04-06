// components/Navbar.jsx
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#f7f8fa] py-5 px-4 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/nolens_icon.png" alt="Nolens Logo" className="w-6 h-6" />
          <span className="text-xl font-bold text-gray-900">nolens</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm font-medium text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/tasks">Earn</Link></li>
          <li><Link href="/contribute">Contribute</Link></li>
          <li><Link href="/docs">About</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 text-gray-700 font-medium text-base">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/tasks" onClick={() => setMobileMenuOpen(false)}>Earn</Link>
          <Link href="/contribute" onClick={() => setMobileMenuOpen(false)}>Contribute</Link>
          <Link href="/docs" onClick={() => setMobileMenuOpen(false)}>About</Link>
        </div>
      )}
    </header>
  )
}
