import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import { Search } from 'lucide-react';

const preselected = [
  { symbol: "SOL", name: "Solana", emoji: "🟣", chain: "Solana" },
  { symbol: "wBTC", name: "Wrapped Bitcoin", emoji: "🟠", chain: "Solana SPL" },
  { symbol: "wETH", name: "Wrapped Ethereum", emoji: "🔵", chain: "Solana SPL" },
  { symbol: "USDC", name: "USD Coin", emoji: "🔵", chain: "Solana SPL" },
  { symbol: "BSD", name: "Brazilian Stable Dollar", emoji: "🟢", chain: "Solana SPL" },
  { symbol: "JUP", name: "Jupiter", emoji: "🟢", chain: "Solana SPL" },
  { symbol: "BONK", name: "Bonk", emoji: "🟡", chain: "Solana SPL" },
  { symbol: "WIF", name: "dogwifhat", emoji: "🟤", chain: "Solana SPL" },
  { symbol: "RAY", name: "Raydium", emoji: "🔵", chain: "Solana SPL" },
];

const nativeAssets = [
  { symbol: "BTC", name: "Bitcoin", emoji: "🟠", chain: "Bitcoin" },
  { symbol: "ETH", name: "Ethereum", emoji: "🔵", chain: "Ethereum" },
  { symbol: "ETH", name: "Ethereum on Arbitrum", emoji: "🔵", chain: "Arbitrum" },
  { symbol: "ETH", name: "Ethereum on Optimism", emoji: "🔴", chain: "Optimism" },
  { symbol: "ETH", name: "Ethereum on Base", emoji: "🔵", chain: "Base" },
  { symbol: "ETH", name: "Ethereum on Polygon", emoji: "🟣", chain: "Polygon" },
  { symbol: "USDC", name: "USDC", emoji: "🔵", chain: "Ethereum" },
  { symbol: "USDC", name: "USDC", emoji: "🔵", chain: "Arbitrum" },
  { symbol: "USDC", name: "USDC", emoji: "🔵", chain: "Optimism" },
  { symbol: "USDC", name: "USDC", emoji: "🔵", chain: "Base" },
  { symbol: "USDC", name: "USDC", emoji: "🔵", chain: "Polygon" },
  { symbol: "USDT", name: "Tether", emoji: "🟢", chain: "Ethereum" },
  { symbol: "USDT", name: "Tether", emoji: "🟢", chain: "BNB Chain" },
  { symbol: "USDT", name: "Tether", emoji: "🟢", chain: "Tron" },
  { symbol: "BNB", name: "BNB", emoji: "🟡", chain: "BNB Chain" },
  { symbol: "MATIC", name: "Polygon", emoji: "🟣", chain: "Polygon" },
  { symbol: "AVAX", name: "Avalanche", emoji: "🔴", chain: "Avalanche" },
  { symbol: "TRX", name: "Tron", emoji: "🔴", chain: "Tron" },
  { symbol: "SUI", name: "Sui", emoji: "🔵", chain: "Sui" },
];

export default function Assets() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16">
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Supported Assets</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
            Buy any crypto with cash.<br />Sell any supported asset for cash.
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-2xl">
            Choose from preselected tokens, or search any verified Jupiter token. Native-chain delivery on every supported network.
          </p>
        </motion.div>

        {/* Preselected */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-heading text-lg font-bold text-foreground">Preselected on every kiosk</h2>
            <span className="font-heading text-xs bg-green-500/10 text-green-400 border border-green-500/30 rounded-full px-2 py-0.5">ONE-TAP BUY</span>
          </div>
          <p className="font-body text-sm text-muted-foreground mb-6">Solana SPL tokens, always visible on every Rift terminal.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {preselected.map((t, i) => (
              <motion.div key={`${t.symbol}-${i}`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card border border-border rounded-xl px-4 py-3 flex items-center gap-3 hover:border-primary/30 transition-colors">
                <span className="text-xl">{t.emoji}</span>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground">{t.symbol}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom SPL */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-heading text-lg font-bold text-foreground">Custom SPL tokens</h2>
            <span className="font-heading text-xs bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-full px-2 py-0.5">SEARCH</span>
          </div>
          <div className="bg-card border border-blue-500/20 rounded-xl p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5 max-w-xl">
            <div className="flex items-center gap-2 bg-background/50 border border-border rounded-lg px-3 py-2 mb-4">
              <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <span className="font-body text-xs text-muted-foreground">Search any verified Solana token…</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Search any verified SPL token on Jupiter. Rift integrates every token tagged <strong className="text-foreground">verified + strict</strong> with sufficient liquidity. If it trades on Solana with a real route, you can buy it at Rift.
            </p>
          </div>
        </div>

        {/* Native chain assets */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-heading text-lg font-bold text-foreground">Native assets on other chains</h2>
            <span className="font-heading text-xs bg-orange-500/10 text-orange-400 border border-orange-500/30 rounded-full px-2 py-0.5">BETA</span>
          </div>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Skip wrapped tokens. Walk away with <strong className="text-foreground">real</strong> BTC, ETH, USDC, and more — delivered to your actual wallet on the actual chain.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-6">
            {nativeAssets.map((t, i) => (
              <motion.div key={`native-${i}`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-card border border-orange-500/20 rounded-xl px-4 py-3 flex items-center gap-3 bg-gradient-to-br from-orange-500/5 to-transparent">
                <span className="text-xl">{t.emoji}</span>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground">{t.symbol}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.chain}</p>
                </div>
              </motion.div>
            ))}
            <div className="bg-card border border-border rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-xl">⛓</span>
              <div>
                <p className="font-heading text-sm font-bold text-foreground">+60 more</p>
                <p className="font-body text-xs text-muted-foreground">via LI.FI</p>
              </div>
            </div>
          </div>
          <p className="font-body text-xs text-muted-foreground bg-card border border-border rounded-lg px-4 py-3 max-w-2xl">
            Powered by <a href="https://li.fi" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">LI.FI's</a> universal liquidity router. Operator never holds multi-chain inventory — every cross-chain delivery is sourced just-in-time.
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}