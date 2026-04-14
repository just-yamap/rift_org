import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Layers } from 'lucide-react';

const streams = [
  {
    icon: DollarSign,
    title: "Commission (1–15%)",
    description: "Operator-set per kiosk, tiered by transaction amount. Different tiers for buys vs sells. Adjustable in real time from the admin dashboard."
  },
  {
    icon: TrendingUp,
    title: "Delta profit from the safety buffer",
    description: "Every transaction reserves 0–5% against adverse price moves between the UI quote and the cash drop. Any unused buffer is recorded on-chain as accrued_delta_usdc — pure profit on favorable ticks. Operator never loses on slippage."
  },
  {
    icon: Layers,
    title: "Capital efficiency",
    description: "Hold only USDC + SOL. No multi-chain inventory. Every native-asset delivery (BTC, ETH, etc.) is sourced just-in-time by LI.FI solvers. Every native-asset receipt is liquidated back to USDC on-chain automatically."
  },
];

const onChainCounters = [
  "total_buy_volume_usdc",
  "total_sell_volume_usdc",
  "accrued_commission_usdc",
  "accrued_delta_usdc",
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
            Three stacking revenue streams, on-chain transparent, operator-controlled.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {streams.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* On-chain counters callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <p className="font-body text-xs text-muted-foreground mb-3">On-chain counters visible on the admin dashboard:</p>
          <div className="flex flex-wrap gap-2">
            {onChainCounters.map(c => (
              <code key={c} className="font-mono text-xs bg-secondary border border-border rounded px-2 py-1 text-muted-foreground">{c}</code>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}