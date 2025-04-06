import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = (
    <>
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/docs" className="hover:underline">
        Docs
      </Link>
      <a href="https://t.me/nolensprotocol" target="_blank" className="hover:underline">
        Telegram
      </a>
      <a href="https://x.com/nolensprotocol" target="_blank" className="hover:underline">
        X
      </a>
      <Link
        href="/contribute"
        className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition"
      >
        Contribute
      </Link>
    </>
  );

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between shadow-sm">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Image
            src="/nolens.png"
            alt="Nolens logo"
            width={40}
            height={40}
            className="dark:hidden"
          />
          <Image
            src="/nolens_original.png"
            alt="Nolens logo"
            width={40}
            height={40}
            className="hidden dark:block"
          />
          <span className="text-xl font-semibold ml-2">nolens</span>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">{menuItems}</div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-6 px-6 flex flex-col space-y-6 md:hidden z-50">
          {menuItems}
        </div>
      )}
    </nav>
  );
}
