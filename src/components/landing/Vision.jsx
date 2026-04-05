import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Lock, Globe, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: "Instant Conversion",
    description: "Insert cash, receive any SPL token in under 400ms. No app, no account, no waiting."
  },
  {
    icon: Lock,
    title: "Non-Custodial",
    description: "Your keys, your crypto. RIFT never holds your funds — everything goes directly to your wallet."
  },
  {
    icon: Globe,
    title: "Universal Access",
    description: "Deploy anywhere — malls, airports, offices. Any location becomes a crypto on-ramp."
  },
  {
    icon: TrendingUp,
    title: "Jupiter-Powered",
    description: "Best swap rates via Jupiter aggregator. Every transaction is optimized for maximum value."
  }
];

export default function Vision() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Our Vision</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3 mb-6 leading-tight">
            BRIDGING THE PHYSICAL<br />& DIGITAL
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Crypto has transformed finance — but the barrier between physical cash and digital assets remains massive. RIFT was built to eliminate that gap, permanently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 bg-card/50 border border-border rounded-xl p-6"
        >
          <p className="font-heading text-xs text-muted-foreground tracking-widest uppercase mb-2">Mission Statement</p>
          <p className="font-heading text-lg md:text-xl text-foreground italic">
            "Make crypto accessible to everyone, everywhere — one terminal at a time."
          </p>
        </motion.div>
      </div>
    </section>
  );
}