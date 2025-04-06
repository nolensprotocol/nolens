import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect screen size once at mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <header className="bg-white fixed top-0 w-full z-50 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">nolens</Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav className="flex space-x-8 text-sm font-medium text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/tasks">Earn</Link>
            <Link href="/contribute">Contribute</Link>
            <Link href="/docs">About</Link>
          </nav>
        )}

        {/* Hamburger Button (Mobile Only) */}
        {isMobile && (
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Dropdown */}
      {isMobile && isOpen && (
        <div className="bg-white px-6 pb-6">
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
