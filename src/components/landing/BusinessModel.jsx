import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, MapPin, Monitor, Building2 } from 'lucide-react';

const streams = [
  {
    icon: DollarSign,
    title: "Operator commission (1–15%)",
    description: "You set the rate from your admin dashboard, with optional tiered pricing (e.g. 5% up to €200, 4% up to €1,000, 3% above). Different tiers for buys vs. sells. Changeable in real time."
  },
  {
    icon: Monitor,
    title: "Delta profit from the safety buffer",
    description: "Every transaction reserves a small safety margin (0–5%) against adverse price moves between the UI quote and the physical cash drop. Any unused buffer is recorded on-chain as your accrued_delta_usdc — pure profit on favorable price moves. You never lose on a bad tick."
  },
  {
    icon: Building2,
    title: "Capital efficiency",
    description: "You hold only USDC + SOL. No multi-chain inventory management. Every cross-chain delivery (native BTC, ETH, etc.) is fulfilled in real time by LI.FI solvers, with the cost deducted from the user's transaction — not from your treasury."
  },
];

const stats = [
  { value: "1–15%", label: "Operator Commission Per TX" },
  { value: "0–5%", label: "Safety Buffer (accrues to operator)" }
];

export default function BusinessModel() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Business Model</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4 leading-tight">
            THREE REVENUE<br />STREAMS
          </h2>
          <p className="font-body text-muted-foreground max-w-xl text-lg">
            How operators make money on every transaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 text-center"
            >
              <p className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">{s.value}</p>
              <p className="font-heading text-xs text-muted-foreground tracking-widest uppercase">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {streams.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}