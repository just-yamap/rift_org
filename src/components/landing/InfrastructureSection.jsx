import React, { useState } from 'react';
import { motion } from 'framer-motion';

const infra = [
  {
    name: "Solana",
    href: "https://solana.com",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
    desc: "Settlement layer. Millisecond confirmations, sub-cent fees at any scale.",
    accent: "border-purple-500/20",
    gradient: "from-purple-500/8 to-transparent",
  },
  {
    name: "Anchor",
    href: "https://www.anchor-lang.com",
    logo: null,
    icon: "⚓",
    desc: "The Rust framework securing Rift's on-chain program. 18 instructions deployed on devnet.",
    accent: "border-orange-500/20",
    gradient: "from-orange-500/8 to-transparent",
  },
  {
    name: "Jupiter",
    href: "https://jup.ag",
    logo: "https://jup.ag/svg/jupiter-logo.svg",
    desc: "Best-price SPL swap aggregator. Integrated via the Developer Platform Swap V2 API.",
    accent: "border-green-500/20",
    gradient: "from-green-500/8 to-transparent",
  },
  {
    name: "LI.FI",
    href: "https://li.fi",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/bcae33013_image.png",
    desc: "Universal liquidity infrastructure. Aggregates 20+ bridges across 60+ chains. Native BTC + ETH delivery.",
    accent: "border-blue-500/20",
    gradient: "from-blue-500/8 to-transparent",
  },
  {
    name: "MagicBlock",
    href: "https://magicblock.gg",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/ec75713f1_image.png",
    desc: "Ephemeral Rollups give the kiosk flow sub-200ms finality, then commit back to mainnet.",
    accent: "border-yellow-500/20",
    gradient: "from-yellow-500/8 to-transparent",
  },
  {
    name: "RPC Fast",
    href: "https://rpcfast.com",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/038d8f03e_image.png",
    desc: "Dedicated low-latency Solana RPC (Frankfurt region). 500 req/s baseline.",
    accent: "border-gray-500/20",
    gradient: "from-gray-500/8 to-transparent",
  },
  {
    name: "Privy",
    href: "https://privy.io",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/c43ddd9fe_image.png",
    desc: "Operator wallet authentication. Email/social/passkey login — no seed phrase on a Post-it.",
    accent: "border-indigo-500/20",
    gradient: "from-indigo-500/8 to-transparent",
  },
  {
    name: "Umbra",
    href: "https://app.umbra.cash",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/e9eaa355f_image.png",
    desc: "Confidential SPL transfers with viewing-key-based regulatory decryption.",
    accent: "border-purple-500/20",
    gradient: "from-purple-500/8 to-transparent",
  },
  {
    name: "Squads",
    href: "https://squads.so",
    logo: null,
    icon: "🔐",
    desc: "Solana-native 2-of-3 multi-sig for operator + platform custody. No single key can drain a kiosk.",
    accent: "border-green-500/20",
    gradient: "from-green-500/8 to-transparent",
  },
  {
    name: "Ika",
    href: "https://ika.xyz",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/c442bd152_image.png",
    desc: "2PC-MPC dWallets for secure native BTC/ETH/other-chain custody.",
    accent: "border-pink-500/20",
    gradient: "from-pink-500/8 to-transparent",
  },
  {
    name: "Covalent",
    href: "https://goldrush.dev",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/783905a66_image.png",
    desc: "Real-time wallet risk scoring and sanctions screening on every transaction.",
    accent: "border-red-500/20",
    gradient: "from-red-500/8 to-transparent",
  },
];

function LogoOrIcon({ item }) {
  const [imgError, setImgError] = React.useState(false);
  if (item.logo && !imgError) {
    return (
      <img
        src={item.logo}
        alt={item.name}
        className="w-6 h-6 object-contain"
        onError={() => setImgError(true)}
        style={{ filter: 'brightness(0) invert(1) opacity(0.7)' }}
      />
    );
  }
  return <span className="text-lg leading-none">{item.icon || '🔗'}</span>;
}

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
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`bg-card border ${item.accent} rounded-xl p-5 bg-gradient-to-br ${item.gradient} hover:border-primary/40 transition-colors group block`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center flex-shrink-0">
                  <LogoOrIcon item={item} />
                </div>
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