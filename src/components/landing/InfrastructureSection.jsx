import React from 'react';
import { motion } from 'framer-motion';

const infra = [
  {
    name: "Solana",
    href: "https://solana.com",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
    desc: "Settlement layer. Every transaction clears in under a second. Sub-cent fees at any scale.",
    accent: "border-purple-500/20",
    gradient: "from-purple-500/8 to-transparent",
  },
  {
    name: "Jupiter",
    href: "https://jup.ag",
    logo: "https://jup.ag/svg/jupiter-logo.svg",
    desc: "Best-price swap aggregator. Rift routes every buy and sell through Jupiter's unified Developer Platform, finding the best execution across every liquidity pool on Solana.",
    accent: "border-green-500/20",
    gradient: "from-green-500/8 to-transparent",
  },
  {
    name: "MagicBlock",
    href: "https://magicblock.gg",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/ec75713f1_image.png",
    desc: "Ephemeral Rollups run the cash-insertion-to-delivery flow off the main chain for genuine sub-200ms finality, then commit back to mainnet. Your customer sees 'confirmed' before they lift their hand off the screen.",
    accent: "border-yellow-500/20",
    gradient: "from-yellow-500/8 to-transparent",
  },
  {
    name: "LI.FI",
    href: "https://li.fi",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/bcae33013_image.png",
    desc: "Universal liquidity infrastructure. One API that aggregates Jupiter, DFlow, Titan, OKX, Fly, Stargate, Hop, Across, cBridge, Wormhole, and 10+ more across 60+ chains. Capital-efficient for operators (no multi-chain inventory); zero-friction for users (one-tap cross-chain).",
    accent: "border-blue-500/20",
    gradient: "from-blue-500/8 to-transparent",
  },
  {
    name: "RPC Fast",
    href: "https://rpcfast.com",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/038d8f03e_image.png",
    desc: "Dedicated Solana RPC infrastructure. Frankfurt data centers, 500 req/s baseline, ShredStream-grade latency.",
    accent: "border-gray-500/20",
    gradient: "from-gray-500/8 to-transparent",
  },
  {
    name: "Privy",
    href: "https://privy.io",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/c43ddd9fe_image.png",
    desc: "Operator wallet authentication. Email, social, or passkey login — no seed phrase on a Post-it.",
    accent: "border-indigo-500/20",
    gradient: "from-indigo-500/8 to-transparent",
  },
  {
    name: "Encrypt",
    href: "https://encrypt.gg",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/d25d559cf_image.png",
    desc: "Fully-homomorphic-encrypted vault balances so competitors can't scrape operator volume to copy kiosk locations.",
    accent: "border-red-500/20",
    gradient: "from-red-500/8 to-transparent",
  },
  {
    name: "Ika",
    href: "https://ika.xyz",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/c442bd152_image.png",
    desc: "2PC-MPC dWallet multi-party custody and cross-chain signing. Every kiosk operator wallet secured by multiple independent parties.",
    accent: "border-pink-500/20",
    gradient: "from-pink-500/8 to-transparent",
  },
];

export default function InfrastructureSection() {
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
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Infrastructure</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 leading-tight">
            Sub-second finality.<br />Sub-cent fees.
          </h2>
          <p className="font-body text-muted-foreground max-w-xl text-lg">
            Built on the fastest infrastructure in crypto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {infra.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`bg-card border ${item.accent} rounded-xl p-5 bg-gradient-to-br ${item.gradient} hover:border-primary/40 transition-colors group block`}
            >
              <div className="flex items-center gap-2 mb-3">
                <img src={item.logo} alt={item.name} className="w-6 h-6 object-contain rounded" onError={e => e.target.style.display='none'} />
                <span className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</span>
              </div>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}