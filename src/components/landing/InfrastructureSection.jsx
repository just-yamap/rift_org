import React, { useState } from 'react';
import { motion } from 'framer-motion';

const infra = [
  {
    name: "Solana",
    href: "https://solana.com",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
    desc: "Settlement layer. Millisecond confirmations, sub-cent fees at any scale.",
  },
  {
    name: "Anchor",
    href: "https://www.anchor-lang.com",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/863ec5eab_generated_image.png",
    desc: "The Rust framework securing Rift's on-chain program. 18 instructions deployed on devnet.",
  },
  {
    name: "Jupiter",
    href: "https://jup.ag",
    logo: "https://jup.ag/svg/jupiter-logo.svg",
    desc: "Best-price SPL swap aggregator. Integrated via the Developer Platform Swap V2 API.",
  },
  {
    name: "LI.FI",
    href: "https://li.fi",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/bcae33013_image.png",
    desc: "Universal liquidity infrastructure. Aggregates 20+ bridges across 60+ chains. Native BTC + ETH delivery.",
  },
  {
    name: "MagicBlock",
    href: "https://magicblock.gg",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/7c4d76708_generated_image.png",
    desc: "Ephemeral Rollups give the kiosk flow sub-200ms finality, then commit back to mainnet.",
  },
  {
    name: "RPC Fast",
    href: "https://rpcfast.com",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/038d8f03e_image.png",
    desc: "Dedicated low-latency Solana RPC (Frankfurt region). 500 req/s baseline.",
  },
  {
    name: "Privy",
    href: "https://privy.io",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/61e96c881_generated_image.png",
    desc: "Operator wallet authentication. Email/social/passkey login — no seed phrase on a Post-it.",
  },
  {
    name: "Umbra",
    href: "https://app.umbra.cash",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/e9eaa355f_image.png",
    desc: "Confidential SPL transfers with viewing-key-based regulatory decryption.",
  },
  {
    name: "Squads",
    href: "https://squads.so",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/4ead2372c_generated_image.png",
    desc: "Solana-native 2-of-3 multi-sig for operator + platform custody. No single key can drain a kiosk.",
  },
  {
    name: "Ika",
    href: "https://ika.xyz",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/20a44efd1_generated_image.png",
    desc: "2PC-MPC dWallets for secure native BTC/ETH/other-chain custody.",
  },
  {
    name: "Covalent",
    href: "https://goldrush.dev",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/783905a66_image.png",
    desc: "Real-time wallet risk scoring and sanctions screening on every transaction.",
  },
];

function Logo({ item }) {
  const [err, setErr] = useState(false);
  if (item.logo && !err) {
    return (
      <img
        src={item.logo}
        alt={item.name}
        className="w-10 h-10 object-contain"
        onError={() => setErr(true)}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    );
  }
  return <span className="text-base font-bold text-muted-foreground">{item.name.charAt(0)}</span>;
}

export default function InfrastructureSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Infrastructure</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-3 leading-tight">
            Sub-second finality.<br />Sub-cent fees.
          </h2>
          <p className="font-body text-muted-foreground max-w-xl text-base">
            Built on the fastest infrastructure in crypto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {infra.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group block rounded-xl p-5 border border-white/8 bg-white/3 backdrop-blur-sm hover:bg-white/6 hover:border-white/15 transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <Logo item={item} />
                <span className="font-heading text-sm font-semibold text-foreground/90 group-hover:text-foreground transition-colors">{item.name}</span>
              </div>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}