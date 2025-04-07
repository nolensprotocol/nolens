'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useConnect, useAccount, useDisconnect, useBalance } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Menu, X } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [phantomConnected, setPhantomConnected] = useState(false)
  const [phantomAddress, setPhantomAddress] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const { connect } = useConnect({ connector: new InjectedConnector() })
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: balance } = useBalance({ address })

  // MetaMask: Supabase logging
  useEffect(() => {
    if (isConnected && address && !submitted) {
      const payload = {
        address,
        type: 'evm',
      }

      supabase
        .from('wallet_connections')
        .insert([payload])
        .then(({ error }) => {
          if (error && !error.message.includes('duplicate')) {
            console.error('❌ Supabase insert error:', error.message)
          } else {
            console.log('✅ MetaMask wallet logged to Supabase')
            setSubmitted(true)
          }
        })
    }
  }, [isConnected, address, submitted])

  // Phantom wallet connect
  const connectPhantom = async () => {
    if (window.solana?.isPhantom) {
      try {
        const resp = await window.solana.connect()
        const phantomAddr = resp.publicKey.toString()

        setPhantomConnected(true)
        setPhantomAddress(phantomAddr)

        const payload = {
          address: phantomAddr,
          type: 'solana',
        }

        supabase
          .from('wallet_connections')
          .insert([payload])
          .then(({ error }) => {
            if (error) {
              console.error('❌ Supabase insert error:', error.message)
            } else {
              console.log('✅ Phantom wallet logged to Supabase')
            }
          })

        window.location.reload()
      } catch (err) {
        console.error('Phantom connection error', err)
      }
    } else {
      alert('Phantom Wallet not found. Install from phantom.app')
    }
  }

  const disconnectPhantom = () => {
    setPhantomConnected(false)
    setPhantomAddress(null)
    window.location.reload()
  }

  const handleConnect = async () => {
    await connect()
    window.location.reload()
  }

  const handleDisconnect = () => {
    disconnect()
    window.location.reload()
  }

  const renderWalletDisplay = () => {
    if (isConnected) {
      return (
        <button
          onClick={handleDisconnect}
          className="ml-4 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 text-sm"
        >
          {balance?.formatted.slice(0, 6)} {balance?.symbol} • {address.slice(0, 4)}...{address.slice(-4)}
        </button>
      )
    }

    if (phantomConnected) {
      return (
        <button
          onClick={disconnectPhantom}
          className="ml-4 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 text-sm"
        >
          {phantomAddress.slice(0, 6)}...{phantomAddress.slice(-4)}
        </button>
      )
    }

    return (
      <div className="ml-4 flex space-x-2">
        <button
          onClick={handleConnect}
          className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 text-sm"
        >
          🦊 MetaMask
        </button>
        <button
          onClick={connectPhantom}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm"
        >
          👻 Phantom
        </button>
      </div>
    )
  }

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-extrabold tracking-wide text-gray-900">
          nolens
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/earn">Earn</Link>
          <Link href="/contribute">Contribute</Link>
          <Link href="/docs">About</Link>
          {renderWalletDisplay()}
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 pt-2">
          <nav className="flex flex-col space-y-4 text-sm font-medium text-gray-800">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/earn" onClick={() => setMenuOpen(false)}>Earn</Link>
            <Link href="/contribute" onClick={() => setMenuOpen(false)}>Contribute</Link>
            <Link href="/docs" onClick={() => setMenuOpen(false)}>About</Link>

            <div className="mt-4">{renderWalletDisplay()}</div>
          </nav>
        </div>
      )}
    </header>
  )
}
