import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, DollarSign, Printer, Scan, MonitorPlay, Usb, Zap, Box } from 'lucide-react';

const specs = [
  {
    icon: DollarSign,
    name: "NV200 + Smart Payout",
    description: "Cash validator and dispenser module",
    price: "€260.93"
  },
  {
    icon: Printer,
    name: "Epson TM-T20II",
    description: "Thermal receipt printer for QR code tickets",
    price: "€95.90"
  },
  {
    icon: Scan,
    name: "Tera 2D Scan Module",
    description: "QR code scanner for wallet addresses",
    price: "€34.13"
  },
  {
    icon: Usb,
    name: "Atolla USB Hub",
    description: "Multi-port connectivity for peripherals",
    price: "€15.99"
  },
  {
    icon: MonitorPlay,
    name: "LAFVIN Touchscreen",
    description: "7-inch capacitive touch display",
    price: "€68.99"
  },
  {
    icon: Box,
    name: "Thermal Paper Roll",
    description: "Receipt paper for ticket printing",
    price: "€15.99"
  },
  {
    icon: Cpu,
    name: "CN00392 Cable",
    description: "Internal connectivity cable",
    price: "~€10.00"
  },
  {
    icon: Zap,
    name: "LEICKE 12V PSU",
    description: "Power supply unit for stable operation",
    price: "€30.99"
  }
];

export default function TechSpecs() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs text-primary tracking-widest uppercase">Hardware</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What's Inside
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            RIFT is built with industrial-grade components. Here's the complete bill of materials.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <spec.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-heading text-xs text-accent font-semibold">{spec.price}</span>
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{spec.name}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{spec.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-baseline gap-3 bg-secondary border border-border rounded-xl px-8 py-4">
            <span className="font-body text-sm text-muted-foreground">Total Build Cost:</span>
            <span className="font-heading text-2xl font-bold text-foreground">~€532.92</span>
          </div>
          <p className="font-body text-xs text-muted-foreground mt-4">
            * Component pricing may vary by supplier and region
          </p>
        </motion.div>
      </div>
    </section>
  );
}