import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Coins, Globe, Printer } from 'lucide-react';

const features = [
  {
    icon: Coins,
    title: "All SPL Tokens",
    description: "Supports every Solana SPL token: SOL, USDC, wrapped BTC, memecoins, and everything in between."
  },
  {
    icon: Zap,
    title: "Solana Speed",
    description: "Transactions confirm in ~400ms. No more waiting 10+ minutes like legacy crypto ATMs."
  },
  {
    icon: Shield,
    title: "Jupiter Integration",
    description: "Auto-buy or sell ANY SPL token via Jupiter aggregator. Instant liquidity for every token on Solana."
  },
  {
    icon: Printer,
    title: "Wallet Printing",
    description: "No wallet? No problem. RIFT prints a paper wallet or sends tokens directly to an existing address."
  },
  {
    icon: Globe,
    title: "Bidirectional",
    description: "Cash → Crypto or Crypto → Cash. Configure RIFT as unidirectional or bidirectional per your needs."
  },
  {
    icon: Shield,
    title: "Built-in KYC Verification",
    description: "Full identity verification at the kiosk, or remotely via the RIFT Connect app before you arrive. Compliant with regulatory requirements."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs text-primary tracking-widest uppercase">Capabilities</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Built Different
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            RIFT isn't just another crypto ATM. It's the first terminal built from the ground up for Solana's speed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
              className="group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed pl-11">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}