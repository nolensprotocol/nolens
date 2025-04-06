import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/nolens_original.png" alt="Nolens logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-gray-900">nolens</span>
        </Link>

        {/* Menu toggle button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-700"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-sm text-gray-700 hover:text-black transition">Home</Link>
          <Link href="/docs" className="text-sm text-gray-700 hover:text-black transition">Docs</Link>
          <a href="https://t.me/nolensprotocol" target="_blank" className="text-sm text-gray-700 hover:text-black transition">Telegram</a>
          <a href="https://x.com/nolensprotocol" target="_blank" className="text-sm text-gray-700 hover:text-black transition">X</a>
          <Link href="/contribute" className="text-sm text-gray-700 hover:text-black transition">Contribute</Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-6 space-y-4">
          <Link href="/" className="block text-sm text-gray-700 hover:text-black transition">Home</Link>
          <Link href="/docs" className="block text-sm text-gray-700 hover:text-black transition">Docs</Link>
          <a href="https://t.me/nolensprotocol" target="_blank" className="block text-sm text-gray-700 hover:text-black transition">Telegram</a>
          <a href="https://x.com/nolensprotocol" target="_blank" className="block text-sm text-gray-700 hover:text-black transition">X</a>
          <Link href="/contribute" className="block text-sm text-gray-700 hover:text-black transition">Contribute</Link>
        </div>
      )}
    </nav>
  );
}
