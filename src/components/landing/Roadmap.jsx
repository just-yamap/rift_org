import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    quarter: "Phase 01",
    title: "Waitlist Sign Up",
    description: "Join the RIFT waitlist. Secure your spot and get notified as soon as early access opens.",
    active: true
  },
  {
    quarter: "Phase 02",
    title: "Open Early Bird Access",
    description: "Waitlist members get first access when pre-orders open. Pricing will be announced exclusively to early bird subscribers.",
    active: false
  },
  {
    quarter: "Phase 03",
    title: "Public Access",
    description: "Full public launch. RIFT terminals available globally at standard pricing.",
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