import { ethers } from 'ethers';
import { supabase } from '../../lib/supabaseClient';

const privateKey = process.env.SIGNER_PRIVATE_KEY;
const signerWallet = new ethers.Wallet(privateKey);

// ✅ Get current nonce (for replay protection)
const getNonce = async (wallet) => {
  const { data, error } = await supabase
    .from('claim_nonces')
    .select('nonce')
    .eq('wallet', wallet)
    .maybeSingle();

  if (error) throw new Error('Error checking nonce');
  return data?.nonce || 0;
};

// ✅ Increment nonce after issuing a signature
const incrementNonce = async (wallet, currentNonce) => {
  await supabase
    .from('claim_nonces')
    .upsert({ wallet, nonce: currentNonce + 1 });
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const { wallet } = req.body;

  if (!wallet || !ethers.utils.isAddress(wallet)) {
    return res.status(400).json({ error: 'Invalid wallet address' });
  }

  try {
    // ✅ Sum all verified task rewards
    const { data: rewards } = await supabase
      .from('verified_rewards')
      .select('points')
      .eq('wallet', wallet);

    const totalNOL = rewards?.reduce((sum, row) => sum + (row.points || 0), 0) || 0;

    if (totalNOL === 0) {
      return res.status(403).json({ error: 'No claimable $NOL found' });
    }

    const nonce = await getNonce(wallet);

    // ✅ Sign the claim payload
    const messageHash = ethers.utils.solidityKeccak256(
      ['address', 'uint256', 'uint256'],
      [wallet, totalNOL, nonce]
    );

    const signature = await signerWallet.signMessage(ethers.utils.arrayify(messageHash));

    // ✅ Save new nonce
    await incrementNonce(wallet, nonce);

    return res.status(200).json({
      wallet,
      amount: totalNOL,
      nonce,
      signature,
    });
  } catch (err) {
    console.error('❌ Error generating claim:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
