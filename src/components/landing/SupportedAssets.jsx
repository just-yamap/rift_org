import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ASSETS = [
  // Solana SPL Tokens
  { symbol: 'SOL', name: 'Solana', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png', network: 'Solana', category: 'SPL' },
  { symbol: 'USDC', name: 'USD Coin', logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png', network: 'Solana', category: 'SPL' },
  { symbol: 'JUP', name: 'Jupiter', logo: 'https://jup.ag/svg/jupiter-logo.svg', network: 'Solana', category: 'SPL' },
  { symbol: 'BONK', name: 'Bonk', logo: 'https://cryptologos.cc/logos/bonk1-bonk-logo.png', network: 'Solana', category: 'SPL' },
  { symbol: 'BSD', name: 'Brazilian Stable Dollar', logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png', network: 'Solana', category: 'SPL' },
  
  // Wrapped Assets
  { symbol: 'wBTC', name: 'Wrapped Bitcoin', logo: 'https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png', network: 'Solana', category: 'Wrapped' },
  { symbol: 'wETH', name: 'Wrapped Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png', network: 'Solana', category: 'Wrapped' },
  
  // Native Assets (Coming Soon)
  { symbol: 'BTC', name: 'Bitcoin', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', network: 'Bitcoin', category: 'Native', soon: true },
  { symbol: 'ETH', name: 'Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png', network: 'Ethereum', category: 'Native', soon: true },
];

export default function SupportedAssets() {
  const [hoveredAsset, setHoveredAsset] = useState(null);

  const categories = [
    { label: 'SPL Tokens', value: 'SPL', color: 'text-primary' },
    { label: 'Wrapped Assets', value: 'Wrapped', color: 'text-accent' },
    { label: 'Native Assets', value: 'Native', color: 'text-orange-400' },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Supported</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Trade Everything
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl text-lg">
            Buy and sell from a growing list of verified Solana tokens, wrapped assets, and native chains.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <div key={cat.value}>
              <p className={`font-heading text-xs tracking-widest uppercase font-semibold ${cat.color} mb-3`}>
                {cat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {ASSETS.map((asset, i) => (
            <motion.div
              key={asset.symbol}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onMouseEnter={() => setHoveredAsset(asset.symbol)}
              onMouseLeave={() => setHoveredAsset(null)}
              className="relative"
            >
              <motion.div
                className={`relative w-full aspect-square rounded-xl border transition-all cursor-pointer flex flex-col items-center justify-center ${
                  hoveredAsset === asset.symbol
                    ? 'bg-primary/10 border-primary/40 shadow-lg'
                    : 'bg-card border-border hover:border-primary/20'
                } ${asset.soon ? 'opacity-60' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {/* Logo */}
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img
                    src={asset.logo}
                    alt={asset.symbol}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Symbol */}
                <p className="font-heading text-sm font-bold text-foreground text-center">
                  {asset.symbol}
                </p>

                {/* Soon Badge */}
                {asset.soon && (
                  <span className="absolute top-2 right-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-2 py-1 rounded-full">
                    BETA
                  </span>
                )}

                {/* Hover Info */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={
                    hoveredAsset === asset.symbol
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 8 }
                  }
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 rounded-xl bg-background/95 backdrop-blur-sm border border-primary/30 flex flex-col items-center justify-center p-3 pointer-events-none"
                >
                  <p className="font-heading text-xs font-semibold text-foreground text-center mb-1">
                    {asset.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground text-center">
                    {asset.network}
                  </p>
                  <div className="mt-2 pt-2 border-t border-border/50 w-full text-center">
                    <span className={`font-heading text-xs font-bold ${
                      asset.category === 'SPL' ? 'text-primary' :
                      asset.category === 'Wrapped' ? 'text-accent' :
                      'text-orange-400'
                    }`}>
                      {asset.category}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Info callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-6 max-w-3xl"
        >
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Want to trade something else?</strong> Search any verified SPL token on Jupiter at the kiosk. If it has sufficient liquidity, you can buy it instantly. Native BTC and ETH delivery coming soon via LI.FI cross-chain routing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}