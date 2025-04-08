'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useConnect, useAccount, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Menu, X } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useIsMounted } from '../lib/useIsMounted'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [walletType, setWalletType] = useState(null)
  const [totalPoints, setTotalPoints] = useState(0)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const mounted = useIsMounted()
  const { connect } = useConnect({ connector: new InjectedConnector() })
  const { address, isConnected, status } = useAccount()
  const { disconnect } = useDisconnect()
  const router = useRouter()
  const currentPath = router.pathname

  useEffect(() => {
    const savedType = localStorage.getItem('walletType')
    if (!walletType && savedType === 'evm' && isConnected && address) {
      setWalletType('evm')
    }
  }, [isConnected, address, walletType])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (status !== 'connected' || !address || walletType !== 'evm') return

    const localKey = `walletLogged:${address}`
    const alreadyLogged = localStorage.getItem(localKey)
    if (alreadyLogged) return

    supabase
      .from('wallet_connections')
      .select('id')
      .eq('address', address)
      .eq('type', 'evm')
      .maybeSingle()
      .then(({ data, error }) => {
        if (!data && !error) {
          supabase
            .from('wallet_connections')
            .insert([{ address, type: 'evm' }])
            .then(({ error }) => {
              if (!error) {
                localStorage.setItem(localKey, 'true')
              }
            })
        } else {
          localStorage.setItem(localKey, 'true')
        }
      })
  }, [status, address, walletType])

  useEffect(() => {
    if (address && isConnected) {
      supabase
        .from('verified_rewards')
        .select('points')
        .eq('wallet', address)
        .then(({ data }) => {
          const sum = data?.reduce((acc, row) => acc + (row.points || 0), 0) || 0
          setTotalPoints(sum)
        })
    }
  }, [address, isConnected])

  const connectWallet = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    if (typeof window.ethereum !== 'undefined') {
      localStorage.setItem('walletType', 'evm')
      setWalletType('evm')
      try {
        await connect()
      } catch (err) {
        console.error('❌ connect() error:', err)
      }
    } else {
      window.open('/install-metamask', '_self', 'noopener,noreferrer')
    }
  }

  const disconnectWallet = () => {
    localStorage.removeItem('walletType')
    setWalletType(null)
    disconnect()
    setDropdownOpen(false)
  }

  const navLink = (href, label) => (
    <Link
      href={href}
      className={`hover:text-black transition ${
        currentPath === href ? 'text-black font-semibold underline' : 'text-gray-600'
      }`}
    >
      {label}
    </Link>
  )

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-extrabold tracking-wide text-gray-900">
          nolens
        </Link>

        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium">
          {navLink('/', 'Home')}
          {navLink('/earn', 'Earn')}
          {navLink('/contribute', 'Contribute')}
          {navLink('/docs', 'About')}
          {navLink('/partners', 'Partners')}

          {mounted && walletType === 'evm' && isConnected ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="ml-4 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 text-sm"
              >
                {address.slice(0, 6)}...{address.slice(-4)} ⌄
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg text-sm z-50">
                  <div className="px-4 py-2 text-gray-800 border-b">🏆 {totalPoints} points</div>
                  <button
                    onClick={disconnectWallet}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800"
                  >
                    Disconnect
                  </button>
                </div>
              )}
            </div>
          ) : mounted ? (
            <button
              onClick={connectWallet}
              className="ml-4 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 text-sm"
            >
              Connect Wallet
            </button>
          ) : null}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 pt-2">
          <nav className="flex flex-col space-y-4 text-sm font-medium text-gray-800">
            {navLink('/', 'Home')}
            {navLink('/earn', 'Earn')}
            {navLink('/contribute', 'Contribute')}
            {navLink('/docs', 'About')}
            {navLink('/partners', 'Partners')}

            {mounted && walletType === 'evm' && isConnected ? (
              <button
                onClick={disconnectWallet}
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md"
              >
                {address.slice(0, 6)}...{address.slice(-4)}
              </button>
            ) : mounted ? (
              <button
                onClick={connectWallet}
                className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              >
                Connect Wallet
              </button>
            ) : null}
          </nav>
        </div>
      )}
    </header>
  )
}
