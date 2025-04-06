// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm py-4 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src={theme === 'dark' ? "/nolens.png" : "/nolens_original.png"}
              alt="Nolens logo"
              width={140}
              height={40}
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-700 dark:text-gray-200">
          <Link href="/">
            <span className="hover:text-black dark:hover:text-white transition">Home</span>
          </Link>
          <Link href="/docs">
            <span className="hover:text-black dark:hover:text-white transition">Docs</span>
          </Link>
          <a
            href="https://t.me/nolensprotocol"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            Telegram
          </a>
          <a
            href="https://x.com/nolensprotocol"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            X
          </a>
          <Link href="/contribute">
            <span className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 transition">
              Contribute
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
