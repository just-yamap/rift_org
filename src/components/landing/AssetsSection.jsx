import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const preselected = [
  { symbol: "SOL", name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.png" },
  { symbol: "USDC", name: "USD Coin", logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png" },
  { symbol: "wBTC", name: "Wrapped Bitcoin", logo: "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png" },
  { symbol: "wETH", name: "Wrapped Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
  { symbol: "JUP", name: "Jupiter", logo: "https://jup.ag/svg/jupiter-logo.svg" },
  { symbol: "BONK", name: "Bonk", logo: "https://cryptologos.cc/logos/bonk1-bonk-logo.png" },
  { symbol: "WIF", name: "dogwifhat", logo: "https://cryptologos.cc/logos/dogwifhat-wif-logo.png" },
  { symbol: "RAY", name: "Raydium", logo: "https://cryptologos.cc/logos/raydium-ray-logo.png" },
];

const nativeChains = [
  { symbol: "BTC", name: "Native Bitcoin — real BTC, not wrapped — delivered to your Bitcoin wallet via LI.FI cross-chain routing", emoji: "🟠" },
  { symbol: "ETH", name: "Native Ethereum (real ETH on Ethereum mainnet)", emoji: "🔵" },
  { symbol: "More", name: "Any chain LI.FI supports (Polygon, Base, Arbitrum, Optimism, etc.)", emoji: "⛓" },
];

export default function AssetsSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Supported Assets</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 leading-tight">
            Assets you can buy and sell<br />at Rift distributors
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Preselected */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <p className="font-heading text-xs tracking-widest uppercase text-green-400 mb-4">Preselected</p>
            <p className="font-body text-xs text-muted-foreground mb-5">Always visible on every kiosk.</p>
            <div className="space-y-2">
              {preselected.map((token) => (
                <div key={token.symbol} className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 hover:border-primary/30 transition-colors">
                  <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img src={token.logo} alt={token.symbol} className="w-5 h-5 object-contain" onError={e => e.target.style.display='none'} />
                  </div>
                  <div>
                    <span className="font-heading text-sm font-bold text-foreground">{token.symbol}</span>
                    <span className="font-body text-xs text-muted-foreground ml-2">{token.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Custom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <p className="font-heading text-xs tracking-widest uppercase text-blue-400 mb-4">Custom</p>
            <p className="font-body text-xs text-muted-foreground mb-5">Search-and-select by the operator.</p>
            <div className="bg-card border border-blue-500/20 rounded-xl p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5">
              <div className="flex items-center gap-2 bg-background/50 border border-border rounded-lg px-3 py-2 mb-4">
                <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="font-body text-xs text-muted-foreground">Search any verified SPL token…</span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Search any verified SPL token on Jupiter. We support every token with a <strong className="text-foreground">verified-and-strict</strong> tag and sufficient liquidity. If it trades on Solana with a real route, you can buy it at Rift.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3 bg-background/50 border border-green-500/20 rounded-lg px-3 py-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-xs font-bold">$</span>
                  </div>
                  <span className="font-heading text-sm font-bold text-foreground">BSD</span>
                  <span className="font-body text-xs text-muted-foreground">Brazilian Stable Dollar</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["PYTH", "ORCA", "MNGO", "SAMO"].map(t => (
                    <span key={t} className="font-heading text-xs bg-secondary border border-border rounded-full px-3 py-1 text-muted-foreground">{t}</span>
                  ))}
                  <span className="font-heading text-xs bg-secondary border border-border rounded-full px-3 py-1 text-muted-foreground">+ thousands more</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Native chains */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <p className="font-heading text-xs tracking-widest uppercase text-orange-400">Native Chains</p>
              <span className="font-heading text-xs bg-orange-500/10 text-orange-400 border border-orange-500/30 rounded-full px-2 py-0.5">BETA</span>
            </div>
            <p className="font-body text-xs text-muted-foreground mb-5">Coming soon — real assets on their native chains.</p>
            <div className="space-y-2">
              {nativeChains.map((token) => (
                <div key={token.symbol} className="flex items-start gap-3 bg-card border border-orange-500/20 rounded-lg px-4 py-3 bg-gradient-to-br from-orange-500/5 to-transparent">
                  <span className="text-lg mt-0.5">{token.emoji}</span>
                  <div>
                    <span className="font-heading text-sm font-bold text-foreground">{token.symbol}</span>
                    <p className="font-body text-xs text-muted-foreground mt-0.5 leading-relaxed">{token.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}