import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-100 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img src="/nolens_original.png" alt="Nolens logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-gray-900">nolens</span>
        </Link>

        {/* Hamburger icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 p-2 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm text-gray-700 hover:text-black">Home</Link>
          <Link href="/docs" className="text-sm text-gray-700 hover:text-black">Docs</Link>
          <a href="https://t.me/nolensprotocol" target="_blank" className="text-sm text-gray-700 hover:text-black">Telegram</a>
          <a href="https://x.com/nolensprotocol" target="_blank" className="text-sm text-gray-700 hover:text-black">X</a>
          <Link href="/contribute" className="text-sm text-gray-700 hover:text-black">Contribute</Link>
        </div>
      </div>

      {/* Dropdown modal menu (for all sizes) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-sm text-gray-800 hover:text-black" onClick={toggleMenu}>Home</Link>
            <Link href="/docs" className="text-sm text-gray-800 hover:text-black" onClick={toggleMenu}>Docs</Link>
            <a href="https://t.me/nolensprotocol" target="_blank" className="text-sm text-gray-800 hover:text-black" onClick={toggleMenu}>Telegram</a>
            <a href="https://x.com/nolensprotocol" target="_blank" className="text-sm text-gray-800 hover:text-black" onClick={toggleMenu}>X</a>
            <Link href="/contribute" className="text-sm text-gray-800 hover:text-black" onClick={toggleMenu}>Contribute</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
