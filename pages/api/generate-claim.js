// /pages/api/generate-claim.js
import { createClient } from '@supabase/supabase-js'
import { privateKeyToAccount } from 'viem/accounts'
import { signMessage } from 'viem'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const PRIVATE_KEY = process.env.NOLENS_CLAIM_SIGNER
const SIGNER_ADDRESS = process.env.NOLENS_SIGNER_ADDRESS
const DOMAIN = {
  name: 'NolensClaim',
  version: '1',
  chainId: 80002, // Polygon Amoy
  verifyingContract: process.env.NOLENS_CLAIM_ADDRESS,
}

const TYPES = {
  Claim: [
    { name: 'wallet', type: 'address' },
    { name: 'amount', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
  ]
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { wallet } = req.body
  if (!wallet) return res.status(400).json({ error: 'Missing wallet address' })

  const rewards = await supabase
    .from('verified_rewards')
    .select('points')
    .eq('wallet', wallet)
    .eq('approved', true)

  if (!rewards.data || rewards.data.length === 0) {
    return res.status(400).json({ error: 'No approved rewards to claim' })
  }

  const amount = rewards.data.reduce((acc, r) => acc + (r.points || 0), 0)

  const nonceRes = await supabase
    .from('claim_nonces')
    .select('nonce')
    .eq('wallet', wallet)
    .single()

  let nonce = 0
  if (nonceRes.data) {
    nonce = nonceRes.data.nonce + 1
    await supabase
      .from('claim_nonces')
      .update({ nonce })
      .eq('wallet', wallet)
  } else {
    await supabase
      .from('claim_nonces')
      .insert([{ wallet, nonce }])
  }

  try {
    const account = privateKeyToAccount(`0x${PRIVATE_KEY}`)
    const signature = await signMessage({
      account,
      types: TYPES,
      domain: DOMAIN,
      primaryType: 'Claim',
      message: {
        wallet,
        amount,
        nonce,
      },
    })

    return res.status(200).json({ amount, nonce, signature })
  } catch (err) {
    console.error('Signer error:', err)
    return res.status(500).json({ error: 'Signature generation failed' })
  }
}
