import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const cards = [
  {
    title: "Umbra confidential transfers",
    href: "https://umbra.cash",
    linkLabel: "Umbra",
    accent: "border-purple-500/30",
    gradient: "from-purple-500/10 to-purple-500/5",
    accentText: "text-purple-400",
    icon: "🛡",
    body: "When you buy crypto at a Rift kiosk, your transaction doesn't broadcast your purchase to the world. Using Umbra, the amount and the link between the kiosk and your wallet stay encrypted on-chain. Regulators with a legitimate request can decrypt via a published viewing key — nobody else can.",
  },
  {
    title: "Ika MPC custody",
    href: "https://ika.xyz",
    linkLabel: "Ika",
    accent: "border-blue-500/30",
    gradient: "from-blue-500/10 to-blue-500/5",
    accentText: "text-blue-400",
    icon: "🔐",
    body: "Every Rift kiosk operator's wallet is secured by Ika multi-party computation. Your transactions need approval from multiple independent parties — not just one. A single key compromise can't drain a kiosk. Institutional-grade security for a consumer-grade experience.",
  },
  {
    title: "Compliance co-signer",
    href: "https://goldrush.dev/",
    linkLabel: "Covalent GoldRush",
    accent: "border-green-500/30",
    gradient: "from-green-500/10 to-green-500/5",
    accentText: "text-green-400",
    icon: "✅",
    body: "Every kiosk can designate a compliance officer who can veto suspicious transactions before they settle. Combined with real-time wallet risk scoring via Covalent GoldRush, Rift refuses transactions from sanctioned addresses, known mixers, or drainer-linked wallets — protecting both operators and legitimate users.",
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
            Privacy by design,<br />compliance by default.
          </h2>
          <p className="font-body text-muted-foreground max-w-xl text-lg">
            How your money stays private.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
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