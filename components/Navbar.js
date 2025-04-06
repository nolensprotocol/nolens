import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">
          <Link href="/">nolens</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/tasks">Earn</Link>
          <Link href="/contribute">Contribute</Link>
          <Link href="/docs">About</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 pt-2">
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
