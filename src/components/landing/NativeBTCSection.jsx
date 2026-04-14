import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Insert cash.",
    body: "The kiosk accepts euros, dollars, reais — any supported fiat. No account, no app, no seed phrase.",
  },
  {
    num: "02",
    title: "Settle on Solana.",
    body: "Your transaction clears on Solana in under 400ms. Sub-cent fees, on-chain transparency, zero intermediaries.",
    link: null,
  },
  {
    num: "03",
    title: "Reach any chain.",
    body: "Want native BTC or ETH delivered cross-chain? Powered by LI.FI, Rift routes your asset just-in-time — no wrapped tokens, no bridge UI.",
    link: "https://li.fi",
    linkLabel: "LI.FI",
  },
];

const floatingChips = ["SOL", "USDC", "JUP", "BONK", "wBTC", "wETH", "RAY"];

export default function NativeBTCSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent" />

      {/* Floating chip animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingChips.map((chip, i) => (
          <motion.div
            key={chip}
            className="absolute font-heading text-xs font-semibold text-foreground/10 border border-white/5 rounded-full px-3 py-1 bg-white/2"
            style={{
              left: `${10 + (i * 13) % 80}%`,
              top: `${15 + (i * 17) % 65}%`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            {chip}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Interoperability</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 leading-tight">
            Solana at the core.<br />Every asset in reach.
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Every Rift transaction settles on Solana — the fastest, cheapest settlement layer in crypto. Need to reach another chain? Rift handles the routing invisibly.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-white/3 border border-white/8 backdrop-blur-sm rounded-xl p-6 hover:bg-white/5 hover:border-white/15 transition-all duration-200 overflow-hidden"
            >
              {/* Big background number */}
              <span className="absolute -bottom-3 -right-1 font-heading text-8xl font-black text-white/4 select-none leading-none">
                {step.num}
              </span>
              <div className="relative">
                <p className="font-heading text-xs tracking-widest text-muted-foreground mb-4">{step.num}</p>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.body}
                  {step.link && (
                    <> Powered by <a href={step.link} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">{step.linkLabel}</a>.</>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-white/8 bg-white/3 rounded-xl p-6 max-w-3xl"
        >
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Capital-efficient for operators:</strong> no pre-funded multi-chain inventory. Every cross-chain delivery is sourced just-in-time through LI.FI's solver network, with the operator's safety buffer protecting against slippage.{' '}
            <strong className="text-foreground">The operator never loses on a price move.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}