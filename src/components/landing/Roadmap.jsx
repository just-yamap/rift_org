import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    quarter: "Phase 01",
    title: "Letter of Intent — Now Open",
    description: "Submit your Letter of Intent to secure your operator allocation. LOI holders are first in line when RIFT goes live — locking in priority pricing, dedicated onboarding, and early access to the terminal. No commitment required.",
    active: true
  },
  {
    quarter: "Phase 02",
    title: "Production & Deployment",
    description: "Hardware enters production. LOI operators receive purchase agreements, finalise configurations, and coordinate installation. RIFT terminals ship and go live at operator venues worldwide.",
    active: false
  },
  {
    quarter: "Phase 03",
    title: "Global GTM — Underserved Markets First",
    description: "RIFT executes an aggressive go-to-market strategy targeting underbanked and underserved regions across Africa, Southeast Asia, Latin America, and Eastern Europe. Presence at key crypto and fintech conferences. Operator network expands market-by-market.",
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
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border/30" />
          <motion.div 
            className="absolute left-4 top-0 w-px bg-primary"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: false, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.quarter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "0px 0px -60px 0px" }}
                transition={{ duration: 0.5 }}
                className="flex gap-8 pl-12 relative"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, margin: "0px 0px -60px 0px" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center ${m.active ? 'bg-primary border-primary' : 'bg-background border-border'}`}>
                  {m.active && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "0px 0px -60px 0px" }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className={`flex-1 bg-card border rounded-xl p-6 hover:border-primary/50 transition-colors ${m.active ? 'border-primary/40' : 'border-border'}`}>
                  <p className={`font-heading text-xs tracking-widest uppercase mb-1 ${m.active ? 'text-primary' : 'text-muted-foreground'}`}>{m.quarter}</p>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{m.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{m.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}