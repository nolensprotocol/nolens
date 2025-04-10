import { createClient } from '@supabase/supabase-js'
import { signSync, utils, Signature } from '@noble/secp256k1'
import { hmac } from '@noble/hashes/hmac'
import { sha256 } from '@noble/hashes/sha256'
import { keccak256, encodeAbiParameters, encodePacked } from 'viem'
import { toBytes } from 'viem/utils'

utils.hmacSha256Sync = (key, ...msgs) => hmac(sha256, key, utils.concatBytes(...msgs))

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const PRIVATE_KEY = process.env.NOLENS_CLAIM_SIGNER
const CONTRACT = process.env.NOLENS_CLAIM_ADDRESS
const CHAIN_ID = 80002

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

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
    .maybeSingle()

  let nonce = 0
  if (nonceRes.data) {
    nonce = nonceRes.data.nonce + 1
    await supabase.from('claim_nonces').update({ nonce }).eq('wallet', wallet)
  } else {
    await supabase.from('claim_nonces').insert([{ wallet, nonce }])
  }

  try {
    const domainHash = keccak256(
      encodeAbiParameters(
        ['bytes32', 'bytes32', 'bytes32', 'uint256', 'address'],
        [
          keccak256(toBytes('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)')),
          keccak256(toBytes('NolensClaim')),
          keccak256(toBytes('1')),
          BigInt(CHAIN_ID),
          CONTRACT
        ]
      )
    )

    const structHash = keccak256(
      encodeAbiParameters(
        ['bytes32', 'address', 'uint256', 'uint256'],
        [
          keccak256(toBytes('Claim(address wallet,uint256 amount,uint256 nonce)')),
          wallet,
          BigInt(amount),
          BigInt(nonce)
        ]
      )
    )

    const digest = keccak256(
      encodePacked(['string', 'bytes32', 'bytes32'], ['\x19\x01', domainHash, structHash])
    )

    const [sig, recovery] = signSync(digest.slice(2), PRIVATE_KEY, { recovered: true, der: false })
    const signature = Signature.from({
      r: sig.slice(0, 64),
      s: sig.slice(64),
      v: recovery + 27
    }).serialized

    return res.status(200).json({
      amount: amount.toString(),
      nonce: nonce.toString(),
      signature
    })
  } catch (err) {
    console.error('❌ Signature generation failed:', err)
    return res.status(500).json({ error: 'Signature generation failed', detail: err.message })
  }
}