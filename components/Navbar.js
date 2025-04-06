import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={theme === 'dark' ? '/nolens.png' : '/nolens_original.png'}
            alt="Nolens logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link href="/docs" className="hover:text-indigo-600 transition">Docs</Link>
          <a href="https://t.me/nolensprotocol" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">Telegram</a>
          <a href="https://x.com/nolensprotocol" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">X</a>
          <Link href="/contribute" className="bg-black text-white px-4 py-1.5 rounded-md hover:bg-gray-800 transition text-sm">
            Contribute
          </Link>
        </div>
      </div>
    </nav>
  );
}
