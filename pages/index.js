import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [connected, setConnected] = useState(false); // simulate wallet connect

  return (
    <motion.div
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4 tracking-tight">
        Own Less. Access More.
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 mb-8 text-center max-w-xl">
        Designed for the next era of shared living. Nolens is contribution-first protocol for the rent economy.
      </p>

      <div className="flex gap-4 mb-12 flex-wrap justify-center">
        <Link href="/contribute" className="px-5 py-3 bg-white text-black rounded-xl text-sm font-semibold hover:bg-gray-200 transition">
          Contribute
        </Link>
        <Link href="/tasks" className="px-5 py-3 border border-white text-white rounded-xl text-sm font-semibold hover:bg-white hover:text-black transition">
          Tasks
        </Link>
        <Link href="/docs" className="px-5 py-3 border border-white text-white rounded-xl text-sm font-semibold hover:bg-white hover:text-black transition">
          Docs
        </Link>
      </div>

      <button
        className="mt-4 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition"
        onClick={() => setConnected(!connected)}
      >
        {connected ? 'Wallet Connected' : 'Connect Wallet'}
      </button>
    </motion.div>
  );
}
