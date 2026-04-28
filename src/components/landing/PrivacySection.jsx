import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: "Umbra confidential transfers",
    href: "https://umbra.cash",
    linkLabel: "Umbra",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/e9eaa355f_image.png",
    body: "Every buy can be delivered via Umbra's confidential SPL transfer protocol. Transaction amount and the link between the kiosk and your wallet stay encrypted on-chain. Regulators with a legitimate request can decrypt via a published viewing key. Nobody else can.",
  },
  {
    title: "Compliance built in",
    href: "https://goldrush.dev/",
    linkLabel: "Covalent GoldRush",
    logo: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/783905a66_image.png",
    body: "Every transaction gets a real-time wallet risk score via Covalent GoldRush. Sanctioned addresses, drainer-linked wallets, known mixer interactions are all refused automatically. Each kiosk operator can also designate a compliance officer who can veto suspicious claims before settlement. Privacy by default, transparency on subpoena.",
  },
];

export default function PrivacySection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Privacy</span>
          <h2 className="font-heading text-5xl md:text-6xl font-black text-foreground mt-4 mb-6 leading-tight">
            Privacy by design,<br />compliance by default.
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl text-base">
            How your money stays private.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl p-6 border border-border bg-card hover:border-primary/30 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                  <img
                    src={card.logo}
                    alt=""
                    className="w-7 h-7 object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground leading-snug">
                  {card.title}
                </h3>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {card.body}
              </p>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-heading text-xs text-muted-foreground hover:text-foreground transition-colors group/link"
              >
                Learn about {card.linkLabel}
                <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}