import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-100 px-6 py-4 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src="/nolens_original.png"
              alt="Nolens logo"
              width={32}
              height={32}
              priority
            />
            <span className="font-extrabold text-xl text-gray-900">nolens</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/docs">Docs</Link>
          <a href="https://t.me/nolensprotocol" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://x.com/nolensprotocol" target="_blank" rel="noopener noreferrer">X</a>
          <Link href="/contribute" className="text-gray-900 hover:text-black">Contribute</Link>
        </nav>

        {/* Mobile toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-800 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 md:hidden z-40">
          <nav className="flex flex-col items-center space-y-4 text-sm font-medium text-gray-700">
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <Link href="/docs" onClick={toggleMenu}>Docs</Link>
            <a href="https://t.me/nolensprotocol" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Telegram</a>
            <a href="https://x.com/nolensprotocol" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>X</a>
            <Link href="/contribute" onClick={toggleMenu}>Contribute</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
