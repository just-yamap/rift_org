import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    label: "On-Chain / Settlement",
    accent: "text-orange-400",
    items: [
      { name: "Solana (mainnet-beta)", logo: "https://cryptologos.cc/logos/solana-sol-logo.png", desc: "L1 blockchain" },
      { name: "Anchor 0.31.1", logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/863ec5eab_generated_image.png", desc: "Rust smart contract framework" },
      { name: "SPL Token Standard", logo: null, icon: "🔷", desc: "Token standard" },
      { name: "Associated Token Program", logo: null, icon: "🔗", desc: "ATA management" },
      { name: "Jupiter v6 / Swap V2", logo: "https://jup.ag/svg/jupiter-logo.svg", desc: "Developer Platform swap" },
      { name: "LI.FI cross-chain router", logo: null, icon: "🔀", desc: "Native BTC / ETH / other-chain delivery" },
    ],
    note: null
  },
  {
    label: "Privacy + Compliance",
    accent: "text-purple-400",
    items: [
      { name: "Umbra SDK", logo: null, icon: "🛡", desc: "Confidential SPL transfers, viewing-key regulatory decryption" },
      { name: "Encrypt (REFHE)", logo: null, icon: "🔒", desc: "Fully-homomorphic-encrypted vault balances" },
      { name: "Ika 2PC-MPC", logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/20a44efd1_generated_image.png", desc: "dWallet multi-party custody + cross-chain signing" },
      { name: "Covalent GoldRush", logo: null, icon: "🔍", desc: "Real-time wallet risk scoring, sanctions screening" },
    ]
  },
  {
    label: "Performance",
    accent: "text-yellow-400",
    items: [
      { name: "MagicBlock Ephemeral Rollups", logo: null, icon: "⚡", desc: "Sub-200ms session finality" },
      { name: "RPC Fast", logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/038d8f03e_image.png", desc: "Dedicated low-latency Solana RPC (Frankfurt region)" },
    ]
  },
  {
    label: "Backend Services",
    accent: "text-green-400",
    items: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", desc: "Runtime" },
      { name: "@coral-xyz/anchor", logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/5e13c286e_image.png", desc: "Anchor client SDK" },
      { name: "@solana/web3.js + spl-token", logo: null, icon: "🔷", desc: "Solana JS stack" },
      { name: "Privy server SDK", logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/61e96c881_generated_image.png", icon: null, desc: "Operator wallet signing" },
      { name: "WebSocket bridges", logo: null, icon: "⚙", desc: "NV200 cash unit + ESC/POS thermal printer" },
    ]
  },
  {
    label: "Frontend",
    accent: "text-blue-400",
    items: [
      { name: "React 19", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", desc: "UI framework" },
      { name: "9-language i18n", logo: null, icon: "🌍", desc: "EN FR DE ES IT PT RU UA ZH" },
      { name: "Chromium kiosk mode", logo: null, icon: "🖥", desc: "Production terminal display" },
      { name: "Framer Motion", logo: null, icon: "🎞", desc: "Animations & transitions" },
    ]
  },
  {
    label: "Hardware (Prototype)",
    accent: "text-red-400",
    note: "Prototype build. Final hardware subject to change.",
    items: [
      { name: "JCM NV200", logo: null, icon: "💵", desc: "Cash acceptor/dispenser (SSP over RS-232)" },
      { name: "ESC/POS 80mm Printer", logo: null, icon: "🖨", desc: "Thermal receipt printer" },
      { name: "Raspberry Pi 5", logo: null, icon: "🍓", desc: "Or x86 mini-PC host" },
    ]
  },
  {
    label: "Security",
    accent: "text-gray-400",
    items: [
      { name: "Adevar Labs", logo: null, icon: "🔬", desc: "Scheduled protocol audit (Colosseum Frontier security track)" },
      { name: "5-min claim TTL", logo: null, icon: "⏱", desc: "Auto-refund on timeout" },
      { name: "Hard-capped commissions", logo: null, icon: "🔒", desc: "1-15%, operator-configurable" },
      { name: "Hard-capped safety buffer", logo: null, icon: "🛡", desc: "≤ 5% max" },
      { name: "Kill Switches", logo: null, icon: "⛔", desc: "Platform-side + operator-side" },
    ]
  },
];

const hackathons = [
  { name: "Colosseum Frontier", label: "Main Track", url: "https://arena.colosseum.org/", logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/5b67011fc_image.png" },
  { name: "Jupiter", label: "Developer Platform", url: "https://jup.ag/", logo: "https://jup.ag/svg/jupiter-logo.svg" },
  { name: "Umbra", label: "Privacy Track", url: "https://app.umbra.cash/", logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/e9eaa355f_image.png" },
  { name: "Covalent GoldRush", label: "Data Track", url: "https://goldrush.dev/", logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/783905a66_image.png" },
  { name: "Dune SIM", label: "Analytics Track", url: "https://dune.com/", logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/60237420b_image.png" },
  { name: "RPC Fast", label: "Infra Track", url: "https://rpcfast.com/", logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/038d8f03e_image.png" },
  { name: "Adevar Labs", label: "Security Audit", url: "https://www.adevarlabs.com/", logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/c442bd152_image.png" },
  { name: "100xDevs", label: "Open Track", url: "https://100xdevs.com/", logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/4ccbd670c_image.png" },
];

function LogoOrIcon({ item }) {
  const [imgError, setImgError] = React.useState(false);

  if (item.logo && !imgError) {
    return (
      <img
        src={item.logo}
        alt={item.name}
        className="w-5 h-5 object-contain"
        onError={() => setImgError(true)}
        style={{ filter: 'brightness(0) invert(1) opacity(0.75)' }}
      />
    );
  }
  return <span className="text-base leading-none">{item.icon}</span>;
}

export default function TechStack() {
  return (
    <section className="py-24 px-6 relative">
      <div className="relative max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Built With</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4 leading-tight">
            ENTERPRISE-GRADE<br />TECH STACK
          </h2>
          <p className="font-body text-muted-foreground max-w-xl text-lg">
            Every layer of RIFT is built with production-grade tools, from Rust smart contracts on Solana to physical cash hardware integration.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              {/* Card header */}
              <div className="px-5 pt-5 pb-3 border-b border-white/6">
                <p className={`font-heading text-xs tracking-widest uppercase font-semibold ${cat.accent}`}>{cat.label}</p>
              </div>
              {/* Items */}
              <div className="divide-y divide-white/5">
                {cat.items.map(item => (
                  <div key={item.name} className="flex items-center gap-3 px-5 py-3">
                    <div className="w-7 h-7 rounded-md bg-white/6 flex items-center justify-center flex-shrink-0">
                      <LogoOrIcon item={item} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading text-sm font-semibold text-foreground leading-tight truncate">{item.name}</p>
                      <p className="font-body text-xs text-muted-foreground leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathon / Ecosystem affiliations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-heading text-xs text-muted-foreground tracking-widest uppercase mb-2 text-center">Colosseum Frontier Hackathon</p>
          <p className="font-body text-xs text-muted-foreground/60 mb-6 text-center">Participating in the Main Track + selected side tracks</p>
          <div className="flex flex-wrap justify-center gap-3">
            {hackathons.map((h, i) => (
              <motion.a
                key={h.name}
                href={h.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-2 border border-white/10 bg-white/4 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/8 hover:border-white/20 transition-colors"
              >
                {h.logo ? (
                  <img src={h.logo} alt={h.name} className="w-4 h-4 rounded-full object-cover flex-shrink-0" onError={e => e.target.style.display='none'} />
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                )}
                <span className="font-heading text-xs font-semibold text-foreground">{h.name}</span>
                <span className="font-body text-xs text-muted-foreground">· {h.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}