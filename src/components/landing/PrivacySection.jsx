import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: "Umbra confidential transfers",
    href: "https://umbra.cash",
    linkLabel: "Umbra",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/e9eaa355f_image.png",
    body: "Every buy can be delivered via Umbra's confidential SPL transfer protocol. Transaction amount and the link between the kiosk and your wallet stay encrypted on-chain. Regulators with a legitimate request can decrypt via a published viewing key — nobody else can.",
  },
  {
    title: "Squads multi-sig custody",
    href: "https://squads.so",
    linkLabel: "Squads",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/4ead2372c_generated_image.png",
    body: "Every operator's Solana vault is secured by a Squads 2-of-3 multi-signature wallet. No single key can drain the kiosk. Any meaningful action needs approval from two independent parties.",
  },
  {
    title: "Ika MPC for cross-chain receives",
    href: "https://ika.xyz",
    linkLabel: "Ika",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/20a44efd1_generated_image.png",
    body: "When you sell native BTC or ETH, your deposit goes to an address controlled by Ika's 2PC-MPC protocol. Even if the kiosk's software is compromised, attackers only ever hold a single share. The received asset stays safe.",
  },
  {
    title: "Compliance built in",
    href: "https://goldrush.dev/",
    linkLabel: "Covalent GoldRush",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/783905a66_image.png",
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
              className="rounded-xl p-6 border border-white/10 bg-white/4 backdrop-blur-sm hover:bg-white/7 hover:border-white/20 transition-all duration-200 relative overflow-hidden"
            >
              {/* Logo background watermark */}
              <div className="absolute top-2 right-2 opacity-5 pointer-events-none">
                <img
                  src={card.logo}
                  alt=""
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-3">{card.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {card.body}
              </p>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 font-heading text-xs text-muted-foreground hover:text-foreground transition-colors hover:underline"
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