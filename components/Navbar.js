// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-gray-50 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/nolens_original.png" alt="Nolens logo" width={32} height={32} />
            <span className="text-xl font-semibold">nolens</span>
          </div>
        </Link>

        <div className="flex items-center space-x-6">
          <button
            onClick={toggleMenu}
            className="block focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="w-full bg-white border-t border-gray-200 px-6 py-4 flex flex-col space-y-4 text-center animate-fade-in-down">
          <Link href="/">
            <span className="hover:text-indigo-600">Home</span>
          </Link>
          <Link href="/docs">
            <span className="hover:text-indigo-600">Docs</span>
          </Link>
          <a href="https://t.me/nolensprotocol" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-indigo-600">Telegram</span>
          </a>
          <a href="https://x.com/nolensprotocol" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-indigo-600">X</span>
          </a>
          <Link href="/contribute">
            <span className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 inline-block">Contribute</span>
          </Link>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
