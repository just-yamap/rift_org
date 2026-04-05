import React from 'react';
import { motion } from 'framer-motion';

const hardware = [
  { label: "Processor", value: "Raspberry Pi 5 — 4-Core ARM" },
  { label: "Display", value: "10\" Capacitive Touchscreen" },
  { label: "Bill Reader", value: "NV200 — Multi-currency" },
  { label: "Connectivity", value: "4G LTE + Ethernet + WiFi" },
  { label: "Printer", value: "Thermal receipt — 58mm" },
  { label: "Housing", value: "Steel enclosure — IP54" },
  { label: "Power", value: "220V — 85W consumption" },
  { label: "Dimensions", value: "45 × 35 × 130 cm" }
];

const software = [
  { label: "Blockchain", value: "Solana Mainnet", highlight: true },
  { label: "DEX", value: "Jupiter Aggregator", highlight: true },
  { label: "Tokens", value: "All SPL Tokens" },
  { label: "TX Speed", value: "~400ms average", highlight: true },
  { label: "Avg Fee", value: "$0.001 per swap", highlight: true },
  { label: "Wallet", value: "QR scan / NFC tap" },
  { label: "KYC", value: "Optional (per jurisdiction)" },
  { label: "Uptime", value: "99.9% guaranteed", highlight: true }
];

const highlights = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<2s", label: "Full Transaction" },
  { value: "256-bit", label: "Encryption" },
  { value: "24/7", label: "Remote Monitoring" }
];

export default function ProductSpecs() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Technical Specs</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4 leading-tight">
            BUILT FOR<br />PERFORMANCE
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-8 mt-8">
            <div>
              <p className="font-body text-sm text-muted-foreground mb-2">Retail Price</p>
              <p className="font-heading text-4xl font-bold text-foreground">$12,999</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border" />
            <div>
              <p className="font-body text-sm text-muted-foreground mb-2">Early Bird Price</p>
              <p className="font-heading text-4xl font-bold text-primary">$9,749</p>
              <p className="font-body text-xs text-muted-foreground mt-1">Save $3,250 — 25% off</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Hardware */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-border">
              <p className="font-heading text-xs tracking-widest uppercase text-muted-foreground">Hardware</p>
            </div>
            <div className="divide-y divide-border">
              {hardware.map((row) => (
                <div key={row.label} className="flex items-center justify-between px-6 py-3">
                  <span className="font-heading text-xs text-muted-foreground tracking-wider uppercase">{row.label}</span>
                  <span className="font-body text-sm text-foreground">{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Software */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-border">
              <p className="font-heading text-xs tracking-widest uppercase text-muted-foreground">Software</p>
            </div>
            <div className="divide-y divide-border">
              {software.map((row) => (
                <div key={row.label} className="flex items-center justify-between px-6 py-3">
                  <span className="font-heading text-xs text-muted-foreground tracking-wider uppercase">{row.label}</span>
                  <span className={`font-body text-sm ${row.highlight ? 'text-primary font-semibold' : 'text-foreground'}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {highlights.map((h, i) => (
            <div key={h.label} className="bg-card border border-border rounded-xl p-6 text-center">
              <p className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">{h.value}</p>
              <p className="font-heading text-xs text-muted-foreground tracking-widest uppercase">{h.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}