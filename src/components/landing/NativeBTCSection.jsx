import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "1",
    title: "You insert cash.",
    body: "The kiosk sees euros, dollars, or reais — doesn't matter.",
  },
  {
    num: "2",
    title: "Rift quotes cross-chain in real time.",
    body: "Powered by LI.FI, the universal liquidity infrastructure that aggregates 20+ bridges and every major DEX across 60+ chains.",
    link: "https://li.fi",
    linkLabel: "LI.FI",
  },
  {
    num: "3",
    title: "You walk away with native BTC.",
    body: "Not wrapped. Not on Solana. Real Bitcoin on the real Bitcoin network, delivered to your own wallet address within minutes.",
  },
];

export default function NativeBTCSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/3 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Cross-Chain</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 leading-tight">
            Built on Solana.<br />Reach every chain.
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Rift is a Solana-native ATM — sub-cent fees, 400ms settlement. Insert cash and walk away with <strong className="text-foreground">native BTC, ETH, or any supported asset</strong> delivered directly to your wallet. No bridge UI, no custody handoff.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="w-9 h-9 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-4">
                <span className="font-heading text-sm font-bold text-orange-400">{step.num}</span>
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.body}
                {step.link && (
                  <> Powered by <a href={step.link} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">{step.linkLabel}</a>.</>
                )}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6 max-w-3xl"
        >
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Operator capital-efficient:</strong> no pre-funded BTC inventory. Every native-asset delivery is sourced just-in-time through LI.FI's solver network, with the operator's safety buffer protecting against price slippage.{' '}
            <strong className="text-foreground">The operator never loses money on a price move — and the user never overpays.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}