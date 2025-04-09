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

export const NOLENS_TOKEN_ADDRESS = "0x5fBfd4ffFACedFb87bA8aD6410a918bfD39950C6";
export const NOLENS_TOKEN_ABI = [
  {
    name: "balanceOf",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "account", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
  }
]

export const NOLENS_NFT_ADDRESS = "0xb1f38b88150E01b0232942E1CB2D4017CE33d037";
export const NOLENS_NFT_ABI = [
  {
    name: "hasMinted",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "user", type: "address" }],
    outputs: [{ name: "", type: "bool" }],
  }
]
