import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    label: "On-Chain / Rust",
    color: "from-orange-500/20 to-orange-500/5",
    accent: "text-orange-400",
    border: "border-orange-500/20",
    items: [
      { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.png", desc: "L1 blockchain" },
      { name: "Anchor 0.31.1", logo: null, icon: "⚓", desc: "Rust smart contract framework" },
      { name: "SPL Token", logo: null, icon: "🔷", desc: "Token standard" },
      { name: "Jupiter v6", logo: "https://jup.ag/svg/jupiter-logo.svg", desc: "DEX aggregator" },
    ]
  },
  {
    label: "Backend",
    color: "from-green-500/20 to-green-500/5",
    accent: "text-green-400",
    border: "border-green-500/20",
    items: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", desc: "Runtime" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", desc: "HTTP server" },
      { name: "WebSocket", logo: null, icon: "⚡", desc: "NV200 + printer bridges" },
      { name: "Privy", logo: null, icon: "🔑", desc: "Operator wallet signing" },
    ]
  },
  {
    label: "Frontend",
    color: "from-blue-500/20 to-blue-500/5",
    accent: "text-blue-400",
    border: "border-blue-500/20",
    items: [
      { name: "React 19", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", desc: "UI framework" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", desc: "Styling" },
      { name: "9 Languages", logo: null, icon: "🌍", desc: "EN FR DE ES IT PT RU UA ZH" },
      { name: "Lucide Icons", logo: null, icon: "✦", desc: "Icon system" },
    ]
  },
  {
    label: "Privacy & Compliance",
    color: "from-purple-500/20 to-purple-500/5",
    accent: "text-purple-400",
    border: "border-purple-500/20",
    items: [
      { name: "Umbra SDK", logo: null, icon: "🛡", desc: "Confidential transfers" },
      { name: "Covalent GoldRush", logo: null, icon: "🔍", desc: "Wallet risk & sanctions" },
      { name: "KYC / AML", logo: null, icon: "✅", desc: "On-chain audit fields" },
      { name: "Kill Switches", logo: null, icon: "🔒", desc: "Platform + operator level" },
    ]
  },
  {
    label: "Data & Pricing",
    color: "from-yellow-500/20 to-yellow-500/5",
    accent: "text-yellow-400",
    border: "border-yellow-500/20",
    items: [
      { name: "Dune SIM", logo: null, icon: "📊", desc: "Live blockchain data" },
      { name: "Jupiter Price API", logo: "https://jup.ag/svg/jupiter-logo.svg", desc: "Live token pricing" },
      { name: "Pyth", logo: null, icon: "🐍", desc: "Oracle feeds (planned)" },
      { name: "Coinbase Feed", logo: null, icon: "💱", desc: "EUR/USD spot price" },
    ]
  },
  {
    label: "Hardware (Prototype)",
    color: "from-red-500/20 to-red-500/5",
    accent: "text-red-400",
    border: "border-red-500/20",
    note: "Prototype build — final hardware subject to change",
    items: [
      { name: "JCM NV200", logo: null, icon: "💵", desc: "Cash acceptor/dispenser" },
      { name: "Thermal Printer", logo: null, icon: "🖨", desc: "ESC/POS 80mm" },
      { name: "Tera 3100 QR Scanner", logo: null, icon: "📷", desc: "2D/QR fixed scan module" },
      { name: "Raspberry Pi 5", logo: null, icon: "🍓", desc: "Or x86 mini-PC host" },
      { name: "Chromium Kiosk", logo: null, icon: "🖥", desc: "1080p touchscreen" },
    ]
  },
];

const hackathons = [
  { name: "Colosseum Frontier", label: "Main Track", url: "https://arena.colosseum.org/", logo: "https://avatars.githubusercontent.com/u/106675373?s=200&v=4" },
  { name: "Jupiter", label: "Developer Platform", url: "https://jup.ag/", logo: "https://jup.ag/svg/jupiter-logo.svg" },
  { name: "Umbra", label: "Privacy Track", url: "https://app.umbra.cash/", logo: "https://avatars.githubusercontent.com/u/68905827?s=200&v=4" },
  { name: "Covalent GoldRush", label: "Data Track", url: "https://goldrush.dev/", logo: "https://avatars.githubusercontent.com/u/33249832?s=200&v=4" },
  { name: "Dune SIM", label: "Analytics Track", url: "https://dune.com/", logo: "https://avatars.githubusercontent.com/u/47568715?s=200&v=4" },
  { name: "RPC Fast", label: "Infra Track", url: "https://rpcfast.com/", logo: "https://rpcfast.com/favicon.ico" },
  { name: "Adevar Labs", label: "Security Audit", url: "https://www.adevarlabs.com/", logo: "https://avatars.githubusercontent.com/u/116872918?s=200&v=4" },
  { name: "100xDevs", label: "Open Track", url: "https://100xdevs.com/", logo: "https://avatars.githubusercontent.com/u/119992547?s=200&v=4" },
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
          <p className="font-heading text-xs text-muted-foreground tracking-widest uppercase mb-6 text-center">Ecosystem Tracks & Affiliations</p>
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