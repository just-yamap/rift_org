import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    quarter: "Q1 2025 — NOW",
    title: "Launch & Early Bird",
    description: "First terminals deployed. Early Bird program active — 25% discount for founding operators. Live demo available online.",
    active: true
  },
  {
    quarter: "Q2 2025",
    title: "Network Expansion",
    description: "50 terminals deployed across major European cities. Partnership program launched for location hosts.",
    active: false
  },
  {
    quarter: "Q3 2025",
    title: "Multi-Chain Support",
    description: "Integration of Ethereum, Base, and Arbitrum chains. NFT purchases and staking directly from terminal.",
    active: false
  },
  {
    quarter: "Q4 2025",
    title: "Crypto-to-Cash Mode",
    description: "Reverse flow — convert SPL tokens to fiat cash. Full two-way ATM experience launched globally.",
    active: false
  },
  {
    quarter: "Q1–Q2 2026",
    title: "Global Scale",
    description: "500+ terminals worldwide. RIFT API open for third-party integrations. White label program fully launched.",
    active: false
  }
];

export default function Roadmap() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Roadmap</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4 leading-tight">
            THE PATH<br />FORWARD
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            RIFT is on an aggressive expansion trajectory. Here's what's coming.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.quarter}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-8 pl-12 relative"
              >
                <div className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center ${m.active ? 'bg-primary border-primary' : 'bg-background border-border'}`}>
                  {m.active && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
                </div>
                <div className={`flex-1 bg-card border rounded-xl p-6 ${m.active ? 'border-primary/40' : 'border-border'}`}>
                  <p className={`font-heading text-xs tracking-widest uppercase mb-1 ${m.active ? 'text-primary' : 'text-muted-foreground'}`}>{m.quarter}</p>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{m.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}