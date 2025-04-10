// /pages/api/test-signature.js
import { privateKeyToAccount } from 'viem/accounts'
import { signTypedData } from 'viem'

export default async function handler(req, res) {
  const PRIVATE_KEY = process.env.NOLENS_CLAIM_SIGNER
  const VERIFYING_CONTRACT = process.env.NOLENS_CLAIM_ADDRESS

  if (!PRIVATE_KEY || !VERIFYING_CONTRACT) {
    return res.status(500).json({ error: 'Missing private key or contract address in env vars' })
  }

  const wallet = '0x1234567890abcdef1234567890abcdef12345678'
  const amount = 1000
  const nonce = 1

  const DOMAIN = {
    name: 'NolensClaim',
    version: '1',
    chainId: 80002, // Polygon Amoy
    verifyingContract: VERIFYING_CONTRACT,
  }

  const TYPES = {
    Claim: [
      { name: 'wallet', type: 'address' },
      { name: 'amount', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
    ]
  }

  try {
    const account = privateKeyToAccount(`0x${PRIVATE_KEY}`)

    const signature = await signTypedData({
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

    return res.status(200).json({
      signerAddress: account.address,
      message: { wallet, amount, nonce },
      signature,
    })
  } catch (err) {
    console.error('Signature test failed:', err)
    return res.status(500).json({ error: 'Signature generation failed', detail: err.message })
  }
}
