import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: "Umbra confidential transfers",
    href: "https://umbra.cash",
    linkLabel: "Umbra",
    accent: "border-purple-500/30",
    gradient: "from-purple-500/10 to-purple-500/5",
    accentText: "text-purple-400",
    icon: "🛡",
    body: "Every buy can be delivered via Umbra's confidential SPL transfer protocol. Transaction amount and the link between the kiosk and your wallet stay encrypted on-chain. Regulators with a legitimate request can decrypt via a published viewing key — nobody else can.",
  },
  {
    title: "Squads multi-sig custody",
    href: "https://squads.so",
    linkLabel: "Squads",
    accent: "border-green-500/30",
    gradient: "from-green-500/10 to-green-500/5",
    accentText: "text-green-400",
    icon: "🔐",
    body: "Every operator's Solana vault is secured by a Squads 2-of-3 multi-signature wallet. No single key can drain the kiosk. Any meaningful action needs approval from two independent parties.",
  },
  {
    title: "Ika MPC for cross-chain receives",
    href: "https://ika.xyz",
    linkLabel: "Ika",
    accent: "border-blue-500/30",
    gradient: "from-blue-500/10 to-blue-500/5",
    accentText: "text-blue-400",
    icon: "⛓",
    body: "When you sell native BTC or ETH, your deposit goes to an address controlled by Ika's 2PC-MPC protocol. Even if the kiosk's software is compromised, attackers only ever hold a single share. The received asset stays safe.",
  },
  {
    title: "Compliance built in",
    href: "https://goldrush.dev/",
    linkLabel: "Covalent GoldRush",
    accent: "border-yellow-500/30",
    gradient: "from-yellow-500/10 to-yellow-500/5",
    accentText: "text-yellow-400",
    icon: "✅",
    body: "Every transaction gets a real-time wallet risk score via Covalent GoldRush. Sanctioned addresses, drainer-linked wallets, known mixer interactions — all refused automatically. Each kiosk operator can also designate a compliance officer who can veto suspicious claims before settlement. Privacy-by-default; transparency-on-subpoena.",
  },
];

export default function PrivacySection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Privacy</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 leading-tight">
            Privacy by design.<br />Compliance by default.
          </h2>
          <p className="font-body text-muted-foreground max-w-xl text-lg">
            How your money stays private.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-card border ${card.accent} rounded-xl p-6 bg-gradient-to-br ${card.gradient}`}
            >
              <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center mb-4 text-xl">
                {card.icon}
              </div>
              <h3 className={`font-heading text-base font-bold ${card.accentText} mb-1`}>{card.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">
                {card.body}
              </p>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 mt-4 font-heading text-xs ${card.accentText} hover:underline`}
              >
                Learn about {card.linkLabel} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}