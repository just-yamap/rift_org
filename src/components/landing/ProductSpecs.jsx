import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Camera, Printer, Banknote, Cpu, Wifi, Shield, Zap } from 'lucide-react';

const specs = [
  { icon: Monitor, label: "21.5\" Touchscreen Display", detail: "Full HD, 10-point multi-touch" },
  { icon: Camera, label: "QR Code Scanner", detail: "High-speed 2D barcode reader" },
  { icon: Printer, label: "Thermal Receipt Printer", detail: "80mm, 250mm/sec print speed" },
  { icon: Banknote, label: "Cash Handler Module", detail: "Bi-directional, multi-currency support" },
  { icon: Cpu, label: "Industrial Computer", detail: "Intel i5, 8GB RAM, 256GB SSD" },
  { icon: Wifi, label: "Connectivity", detail: "Ethernet, WiFi, 4G LTE backup" },
  { icon: Shield, label: "Security Features", detail: "Encrypted storage, tamper detection" },
  { icon: Zap, label: "Power Supply", detail: "110-240V AC, UPS battery backup" }
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
          className="text-center mb-16"
        >
          <span className="font-heading text-xs text-primary tracking-widest uppercase">Product Details</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Technical Specifications
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            <div>
              <p className="font-body text-sm text-muted-foreground mb-2">Retail Price</p>
              <p className="font-heading text-4xl font-bold text-foreground">$12,999</p>
              <p className="font-body text-xs text-muted-foreground mt-1">per unit</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border" />
            <div>
              <p className="font-body text-sm text-muted-foreground mb-2">Early Bird Price</p>
              <p className="font-heading text-4xl font-bold text-primary">$9,749</p>
              <p className="font-body text-xs text-accent mt-1">Save $3,250 (25% off)</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <spec.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{spec.label}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{spec.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-card/50 border border-border rounded-xl p-8 text-center"
        >
          <p className="font-body text-sm text-muted-foreground mb-4">
            <span className="font-heading text-foreground font-semibold">Dimensions:</span> 1850mm (H) × 650mm (W) × 450mm (D) | 
            <span className="font-heading text-foreground font-semibold ml-4">Weight:</span> 185kg | 
            <span className="font-heading text-foreground font-semibold ml-4">Warranty:</span> 2 years parts & labor
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Installation, training, and ongoing support included with purchase. Compliance certified for US, EU, and international markets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}