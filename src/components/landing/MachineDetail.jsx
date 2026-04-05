import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VIEWS = [
  {
    label: 'Front View',
    img: 'https://media.base44.com/images/public/69bce5cb012b9c997937b65e/a744eb9ea_image.png',
    description: 'Compact desktop form factor with 7" touchscreen, thermal printer slot, card reader and cash dispenser.'
  },
  {
    label: '3D View',
    img: 'https://media.base44.com/images/public/69bce5cb012b9c997937b65e/a744eb9ea_image.png',
    description: 'Brushed steel enclosure with ventilation grille, QR scanner, and embossed RIFT branding.'
  },
  {
    label: 'Internal Components',
    img: 'https://media.base44.com/images/public/69bce5cb012b9c997937b65e/0858dca61_image.png',
    description: 'Raspberry Pi compute module, EPSON thermal printer, NV200 cash payout module, 12V power supply, USB hub and QR reader — all in a sealed enclosure.'
  },
];

const COMPONENTS = [
  { name: 'Lauri 7" Touchscreen', detail: 'Capacitive multi-touch display' },
  { name: 'NV200 Smart Payout', detail: 'Bi-directional cash module' },
  { name: 'EPSON TM-T20 Printer', detail: 'Thermal receipt & wallet print' },
  { name: 'QR Code Reader', detail: 'High-speed 2D scanner' },
  { name: 'Raspberry Pi 4', detail: 'ARM compute, 8GB RAM' },
  { name: 'Atolla USB Hub', detail: '7-port industrial USB' },
  { name: 'Icicle 12V PSU', detail: '60W regulated power supply' },
  { name: 'NFC / Card Reader', detail: 'ISO 14443A/B contactless' },
];

export default function MachineDetail() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Engineering</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Inside the Machine
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Every component selected for industrial reliability. Built to run 24/7 in high-traffic environments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image viewer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-2 mb-4">
              {VIEWS.map((v, i) => (
                <button
                  key={v.label}
                  onClick={() => setActive(i)}
                  className={`font-heading text-xs px-4 py-2 rounded border transition-all ${
                    active === i
                      ? 'bg-foreground text-background border-foreground'
                      : 'border-border text-muted-foreground hover:border-foreground/30'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <motion.img
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                src={VIEWS[active].img}
                alt={VIEWS[active].label}
                className="w-full object-cover"
                style={{ maxHeight: '480px' }}
              />
            </div>
            <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">
              {VIEWS[active].description}
            </p>
          </motion.div>

          {/* Component list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading text-lg font-bold text-foreground mb-6 tracking-wider uppercase">Bill of Materials</h3>
            <div className="space-y-3">
              {COMPONENTS.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center justify-between py-4 border-b border-border group hover:border-foreground/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-heading text-xs text-muted-foreground w-5 text-right">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-heading text-sm font-semibold text-foreground">{c.name}</span>
                  </div>
                  <span className="font-body text-xs text-muted-foreground">{c.detail}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-card border border-border rounded-xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-heading text-2xl font-bold text-foreground">~3kg</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">Weight</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-foreground">35×25cm</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">Footprint</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-foreground">60W</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">Power</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}