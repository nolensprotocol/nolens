// components/Navbar.js

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="w-full bg-gray-50 px-6 py-4 flex justify-between items-center shadow-sm z-50">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/nolens_original.png" alt="Nolens logo" width={32} height={32} />
        <span className="text-xl font-bold text-gray-900">nolens</span>
      </Link>

      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
        </button>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:flex lg:items-center lg:space-x-8 space-y-6 lg:space-y-0 absolute lg:relative top-20 left-0 w-full lg:w-auto bg-white lg:bg-transparent px-6 lg:px-0 py-4 lg:py-0 shadow lg:shadow-none z-40`}
      >
        <Link href="/" className="block text-sm font-medium text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link href="/docs" className="block text-sm font-medium text-gray-700 hover:text-gray-900">
          Docs
        </Link>
        <a href="https://t.me/nolensprotocol" target="_blank" className="block text-sm font-medium text-gray-700 hover:text-gray-900">
          Telegram
        </a>
        <a href="https://x.com/nolensprotocol" target="_blank" className="block text-sm font-medium text-gray-700 hover:text-gray-900">
          X
        </a>
        <Link
          href="/contribute"
          className="block bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition"
        >
          Contribute
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
