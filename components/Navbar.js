// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-3 flex justify-between items-center shadow-sm">
      <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
        Nolens
      </Link>

      <div className="flex gap-6 text-sm font-medium">
        <Link href="/contribute" className="text-gray-700 hover:text-black transition">
          Contribute
        </Link>
        <Link href="/tasks" className="text-gray-700 hover:text-black transition">
          Tasks
        </Link>
        <a
          href="https://x.com/nolensprotocol"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition"
        >
          X
        </a>
        <a
          href="https://t.me/nolensprotocol"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition"
        >
          Telegram
        </a>
      </div>
    </nav>
  );
}
