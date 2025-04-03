export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20 text-center animate-fade-in">
      <img src="/nolens_icon.png" alt="Nolens Logo" className="w-20 mx-auto mb-4" />
      <h1 className="text-4xl font-bold mb-2">Own less. Access more.</h1>
      <p className="mb-6 text-lg text-gray-600">Designed for the next era of shared living.</p>
      <div className="space-x-4 mb-12">
        <a href="https://t.me/nolensprotocol" className="px-6 py-2 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition">Telegram</a>
        <a href="https://x.com/nolensprotocol" className="px-6 py-2 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition">Twitter</a>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">What is Nolens?</h2>
        <p>Nolens is building the infrastructure for the access economy — a future where living, working, and moving are all on-demand, tokenized, and community-owned.</p>
        <p className="font-semibold mt-2">Web3 has built finance. Nolens is building flexibility.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Token Utility</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 text-left">
          <div><h3 className="font-bold">Access & Payments</h3><p>Use $NOL for rentals, services, and digital access.</p></div>
          <div><h3 className="font-bold">Escrow Deposits</h3><p>Secure rentals with trustless collateral on-chain.</p></div>
          <div><h3 className="font-bold">Staking & Reputation</h3><p>Stake $NOL to earn trust, reputation and perks.</p></div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
        <table className="table-auto w-full text-left text-sm">
          <thead><tr><th>Category</th><th>Allocation</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td>Community & Ecosystem</td><td>30%</td><td>Airdrops, reputation rewards</td></tr>
            <tr><td>Protocol Growth Fund</td><td>20%</td><td>Grants, partnerships</td></tr>
            <tr><td>Liquidity & Listings</td><td>15%</td><td>DEX/CEX provisioning</td></tr>
            <tr><td>Team & Advisors</td><td>15%</td><td>3-year vesting</td></tr>
            <tr><td>Investors</td><td>10%</td><td>Optional, 2-year vesting</td></tr>
            <tr><td>DAO Treasury</td><td>5%</td><td>Governance pool</td></tr>
            <tr><td>Staking Incentives</td><td>5%</td><td>Yield & growth</td></tr>
          </tbody>
        </table>
      </section>

      <footer className="mt-20 text-sm text-gray-500">
        © 2025 Nolens Protocol — All rights reserved. | <a href="#">Disclaimer</a>
      </footer>
    </main>
  )
}
