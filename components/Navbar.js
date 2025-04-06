// components/Navbar.js
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const logoSrc = theme === "dark" ? "/nolens.png" : "/nolens_original.png";

  return (
    <header className="w-full bg-white dark:bg-black px-6 py-4 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logoSrc} alt="Nolens logo" width={120} height={32} priority />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-700 dark:text-gray-200">
          <Link href="/">Home</Link>
          <Link href="/docs">Docs</Link>
          <a href="https://t.me/nolensprotocol" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://x.com/nolensprotocol" target="_blank" rel="noopener noreferrer">X</a>
          <Link
            href="/contribute"
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-1.5 rounded-full hover:opacity-80 transition"
          >
            Contribute
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-sm font-medium text-gray-700 dark:text-gray-200 px-2">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/docs" onClick={() => setIsOpen(false)}>Docs</Link>
          <a href="https://t.me/nolensprotocol" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://x.com/nolensprotocol" target="_blank" rel="noopener noreferrer">X</a>
          <Link
            href="/contribute"
            onClick={() => setIsOpen(false)}
            className="block bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full hover:opacity-80 transition"
          >
            Contribute
          </Link>
        </div>
      )}
    </header>
  );
}
