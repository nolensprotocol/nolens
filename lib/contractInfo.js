export const NOLENS_CLAIM_ADDRESS = "0x3Fd2A4DF1b4E7F9Cd4495b4423987a0FF0370b7d";

export const NOLENS_CLAIM_ABI = [
  {
    "inputs": [
      { "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "internalType": "uint256", "name": "nonce", "type": "uint256" },
      { "internalType": "bytes", "name": "signature", "type": "bytes" }
    ],
    "name": "claim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
