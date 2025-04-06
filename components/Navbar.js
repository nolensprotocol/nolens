import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/nolens_original.png" alt="Nolens logo" width={36} height={36} />
          <span className="text-xl font-bold text-gray-900">nolens</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/tasks" className="hover:text-black transition">Tasks</Link>
          <Link href="/contribute" className="hover:text-black transition">Contribute</Link>
          <Link href="/docs" className="hover:text-black transition">About</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-2 space-y-2 text-sm font-medium text-gray-700">
          <Link href="/" className="block hover:text-black transition">Home</Link>
          <Link href="/tasks" className="block hover:text-black transition">Tasks</Link>
          <Link href="/contribute" className="block hover:text-black transition">Contribute</Link>
          <Link href="/docs" className="block hover:text-black transition">About</Link>
        </div>
      )}
    </nav>
  );
}
