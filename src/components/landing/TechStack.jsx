import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    label: "On-Chain / Settlement",
    color: "from-orange-500/20 to-orange-500/5",
    accent: "text-orange-400",
    border: "border-orange-500/20",
    items: [
      { name: "Solana (mainnet-beta)", logo: "https://cryptologos.cc/logos/solana-sol-logo.png", desc: "L1 blockchain" },
      { name: "Anchor 0.31.1", logo: null, icon: "⚓", desc: "Rust smart contract framework" },
      { name: "SPL Token Standard", logo: null, icon: "🔷", desc: "Token standard" },
      { name: "Associated Token Program", logo: null, icon: "🔗", desc: "ATA management" },
      { name: "Jupiter v6 / Swap V2", logo: "https://jup.ag/svg/jupiter-logo.svg", desc: "Developer Platform swap" },
      { name: "LI.FI cross-chain router", logo: null, icon: "🔀", desc: "Native BTC / ETH / other-chain delivery" },
    ],
    note: "Program ID (devnet): EC2FRmq3gQSXB27V2XjwDGke8AcE3nURfXbFTW3cU9vm"
  },
  {
    label: "Privacy + Compliance",
    color: "from-purple-500/20 to-purple-500/5",
    accent: "text-purple-400",
    border: "border-purple-500/20",
    items: [
      { name: "Umbra SDK", logo: null, icon: "🛡", desc: "Confidential SPL transfers, viewing-key regulatory decryption" },
      { name: "Encrypt (REFHE)", logo: null, icon: "🔒", desc: "Fully-homomorphic-encrypted vault balances" },
      { name: "Ika 2PC-MPC", logo: null, icon: "🔐", desc: "dWallet multi-party custody + cross-chain signing" },
      { name: "Covalent GoldRush", logo: null, icon: "🔍", desc: "Real-time wallet risk scoring, sanctions screening" },
    ]
  },
  {
    label: "Performance",
    color: "from-yellow-500/20 to-yellow-500/5",
    accent: "text-yellow-400",
    border: "border-yellow-500/20",
    items: [
      { name: "MagicBlock Ephemeral Rollups", logo: null, icon: "⚡", desc: "Sub-200ms session finality" },
      { name: "RPC Fast", logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/038d8f03e_image.png", desc: "Dedicated low-latency Solana RPC (Frankfurt region)" },
    ]
  },
  {
    label: "Backend Services",
    color: "from-green-500/20 to-green-500/5",
    accent: "text-green-400",
    border: "border-green-500/20",
    items: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", desc: "Runtime" },
      { name: "@coral-xyz/anchor", logo: null, icon: "⚓", desc: "Anchor client SDK" },
      { name: "@solana/web3.js + spl-token", logo: null, icon: "🔷", desc: "Solana JS stack" },
      { name: "Privy server SDK", logo: null, icon: "🔑", desc: "Operator wallet signing" },
      { name: "WebSocket bridges", logo: null, icon: "⚙", desc: "NV200 cash unit + ESC/POS thermal printer" },
    ]
  },
  {
    label: "Frontend",
    color: "from-blue-500/20 to-blue-500/5",
    accent: "text-blue-400",
    border: "border-blue-500/20",
    items: [
      { name: "React 19", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", desc: "UI framework" },
      { name: "9-language i18n", logo: null, icon: "🌍", desc: "EN FR DE ES IT PT RU UA ZH" },
      { name: "Chromium kiosk mode", logo: null, icon: "🖥", desc: "Production terminal display" },
      { name: "Framer Motion", logo: null, icon: "🎞", desc: "Animations & transitions" },
    ]
  },
  {
    label: "Hardware (Prototype)",
    color: "from-red-500/20 to-red-500/5",
    accent: "text-red-400",
    border: "border-red-500/20",
    note: "Prototype build — final hardware subject to change",
    items: [
      { name: "JCM NV200", logo: null, icon: "💵", desc: "Cash acceptor/dispenser (SSP over RS-232)" },
      { name: "ESC/POS 80mm Printer", logo: null, icon: "🖨", desc: "Thermal receipt printer" },
      { name: "Raspberry Pi 5", logo: null, icon: "🍓", desc: "Or x86 mini-PC host" },
    ]
  },
  {
    label: "Security",
    color: "from-gray-500/20 to-gray-500/5",
    accent: "text-gray-400",
    border: "border-gray-500/20",
    items: [
      { name: "Adevar Labs", logo: null, icon: "🔬", desc: "Scheduled protocol audit (Colosseum Frontier security track)" },
      { name: "5-min claim TTL", logo: null, icon: "⏱", desc: "Auto-refund on timeout" },
      { name: "Hard-capped commissions", logo: null, icon: "🔒", desc: "1–15%, operator-configurable" },
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

function LogoOrIcon({ item, accent }) {
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
  return <span className={`text-xl leading-none ${accent}`}>{item.icon}</span>;
}

export default function TechStack() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent" />
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
            Every layer of RIFT is built with production-grade tools — from Rust smart contracts on Solana to physical cash hardware integration.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
              className={`bg-card border ${cat.border} rounded-xl p-6 bg-gradient-to-br ${cat.color}`}
            >
              <p className={`font-heading text-xs tracking-widest uppercase mb-1 ${cat.accent}`}>{cat.label}</p>
              {cat.note && <p className="font-body text-xs text-muted-foreground/60 italic mb-4">{cat.note}</p>}
              {!cat.note && <div className="mb-4" />}
              <div className="space-y-3">
                {cat.items.map(item => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center flex-shrink-0">
                      <LogoOrIcon item={item} accent={cat.accent} />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground leading-tight">{item.name}</p>
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
                className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 hover:border-primary/40 hover:bg-secondary transition-colors"
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