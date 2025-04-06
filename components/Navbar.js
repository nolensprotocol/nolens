import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="bg-[#f7f8fa] py-5 px-6 shadow-sm fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/nolens_original.png" alt="Nolens Logo" className="w-5 h-5 object-contain" />
          <span className="text-xl font-bold text-gray-900">nolens</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm font-medium text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/tasks">Earn</Link></li>
          <li><Link href="/contribute">Contribute</Link></li>
          <li><Link href="/docs">About</Link></li>
        </ul>

        {/* Mobile Hamburger (only visible on mobile) */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-gray-700"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-[#f7f8fa] space-y-4 text-gray-800 text-base font-medium animate-fade-in">
          <Link href="/" onClick={closeMenu} className="block">Home</Link>
          <Link href="/tasks" onClick={closeMenu} className="block">Earn</Link>
          <Link href="/contribute" onClick={closeMenu} className="block">Contribute</Link>
          <Link href="/docs" onClick={closeMenu} className="block">About</Link>
        </div>
      )}

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  )
}
