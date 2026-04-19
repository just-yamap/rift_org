import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import { DollarSign, TrendingUp, Layers, ShieldCheck, Cpu, Zap } from 'lucide-react';

const steps = [
  { step: "01", title: "Apply", desc: "Fill out the operator application below. We review location, compliance capacity, and deployment plan." },
  { step: "02", title: "Hardware", desc: "Receive your Rift terminal — pre-configured with your branding, language settings, and commission tiers." },
  { step: "03", title: "Configure", desc: "Set your commission rates (1–15%), token list, safety buffer, and compliance officer via the admin dashboard." },
  { step: "04", title: "Go live", desc: "Your kiosk appears on the Rift Connect app map. Start earning on every transaction." },
];

const revenueStreams = [
  { icon: DollarSign, title: "Commission (1–15%)", desc: "Set per kiosk, tiered by transaction amount. Different rates for buys vs sells." },
  { icon: TrendingUp, title: "Safety buffer delta", desc: "Unused buffer from favorable price moves accrues as on-chain profit, automatically." },
  { icon: Layers, title: "Capital efficiency", desc: "Hold only USDC + SOL. LI.FI handles all cross-chain delivery JIT. No multi-chain inventory." },
];

const hwSpecs = [
  { label: "Cash unit", value: "JCM NV200 (accept + dispense)" },
  { label: "Printer", value: "ESC/POS 80mm thermal" },
  { label: "Host", value: "Raspberry Pi 5 or x86 mini-PC" },
  { label: "Display", value: "Touchscreen, Chromium kiosk mode" },
  { label: "Connectivity", value: "LTE / Ethernet / Wi-Fi" },
  { label: "Languages", value: "EN · FR · DE · ES · IT · PT · RU · UA · ZH" },
];

export default function Operator() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto">

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-20">
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Operate a Rift Kiosk</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3 mb-6 leading-tight">
            Deploy a Rift terminal.<br />Earn on every transaction.
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Rift operators run physical kiosks in their locations and earn commission on every buy and sell. You hold only USDC + SOL — no multi-chain inventory, no custody headache. Rift's on-chain program handles the rest.
          </p>
        </motion.div>

        {/* How to get started */}
        <div className="mb-20">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">How to get started</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-6">
                <p className="font-heading text-3xl font-bold text-primary/20 mb-3">{s.step}</p>
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Revenue */}
        <div className="mb-20">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Revenue streams</h2>
          <p className="font-body text-muted-foreground mb-8">Three stacking streams, all on-chain transparent.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {revenueStreams.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-6 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{r.title}</h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hardware specs */}
        <div className="mb-20">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Hardware specifications</h2>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            {hwSpecs.map((spec, i) => (
              <div key={spec.label} className={`flex items-center px-6 py-4 gap-6 ${i < hwSpecs.length - 1 ? 'border-b border-border' : ''}`}>
                <span className="font-heading text-xs tracking-widest uppercase text-muted-foreground min-w-[140px]">{spec.label}</span>
                <span className="font-body text-sm text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-muted-foreground/60 mt-3 italic">Prototype build — final hardware subject to change.</p>
        </div>

        {/* Application form CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-xl p-10 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Ready to operate a Rift kiosk?</h2>
          <p className="font-body text-muted-foreground mb-6 max-w-lg mx-auto">We're onboarding operators in Brazil, Portugal, the Balkans, and Georgia first. Apply now and we'll be in touch.</p>
          <a href="mailto:contact@riftatm.com?subject=Operator Application" className="inline-block bg-foreground text-background px-8 py-3.5 rounded font-heading text-sm font-semibold hover:opacity-80 transition-opacity">
            APPLY AS OPERATOR →
          </a>
          <p className="font-body text-xs text-muted-foreground mt-4">Or email us directly at <a href="mailto:contact@riftatm.com" className="text-foreground hover:underline">contact@riftatm.com</a></p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}