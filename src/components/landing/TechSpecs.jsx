import React from 'react';
import { motion } from 'framer-motion';

const components = [
  {
    id: "screen",
    name: "Touchscreen",
    abbr: "LCD",
    purpose: "User interface & transaction control",
    position: { top: '12%', left: '50%', translate: '-50%' },
    size: { width: '70%', height: '28%' }
  },
  {
    id: "scanner",
    name: "QR Scanner",
    abbr: "QR",
    purpose: "Wallet address & ticket scanning",
    position: { top: '42%', left: '50%', translate: '-50%' },
    size: { width: '40%', height: '8%' }
  },
  {
    id: "printer",
    name: "Receipt Printer",
    abbr: "PRT",
    purpose: "Ticket & wallet printing",
    position: { top: '52%', left: '50%', translate: '-50%' },
    size: { width: '60%', height: '6%' }
  },
  {
    id: "validator",
    name: "Cash Handler",
    abbr: "NV200",
    purpose: "Validate & dispense cash",
    position: { top: '62%', left: '50%', translate: '-50%' },
    size: { width: '65%', height: '12%' }
  },
  {
    id: "hub",
    name: "USB Hub",
    abbr: "USB",
    purpose: "Peripheral connectivity",
    position: { top: '77%', left: '25%', translate: '-50%' },
    size: { width: '20%', height: '5%' }
  },
  {
    id: "cable",
    name: "Cables",
    abbr: "CBL",
    purpose: "Internal wiring",
    position: { top: '77%', left: '50%', translate: '-50%' },
    size: { width: '20%', height: '5%' }
  },
  {
    id: "psu",
    name: "Power Supply",
    abbr: "PSU",
    purpose: "12V power distribution",
    position: { top: '77%', left: '75%', translate: '-50%' },
    size: { width: '20%', height: '5%' }
  },
  {
    id: "paper",
    name: "Paper Roll",
    abbr: "PPR",
    purpose: "Thermal receipt stock",
    position: { top: '86%', left: '50%', translate: '-50%' },
    size: { width: '30%', height: '5%' }
  }
];

export default function TechSpecs() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      <div className="relative max-w-6xl mx-auto">
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
            Industrial-grade components designed for 24/7 operation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* ATM Diagram */}
          <div className="flex-1 max-w-md mx-auto lg:mx-0">
            <div className="relative bg-card border-2 border-border rounded-2xl p-8 aspect-[9/16]">
              {/* ATM Shell */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-secondary/50 to-card" />
              
              {/* Component Blocks */}
              {components.map((component, index) => (
                <motion.div
                  key={component.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="absolute group cursor-pointer"
                  style={{
                    top: component.position.top,
                    left: component.position.left,
                    transform: component.position.translate,
                    width: component.size.width,
                    height: component.size.height
                  }}
                >
                  <div className="relative w-full h-full bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all">
                    <span className="font-heading text-xs font-bold text-primary tracking-wider">
                      {component.abbr}
                    </span>
                    
                    {/* Hover tooltip */}
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-xl">
                      <p className="font-heading text-xs font-semibold text-foreground">{component.name}</p>
                      <p className="font-body text-[10px] text-muted-foreground mt-0.5">{component.purpose}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Logo at top */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                    <span className="font-heading font-bold text-primary-foreground text-xs">R</span>
                  </div>
                  <span className="font-heading font-bold text-sm tracking-wider text-foreground">RIFT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Component List */}
          <div className="flex-1 space-y-4">
            {components.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.06 }}
                className="flex items-start gap-4 bg-card/50 border border-border/50 rounded-xl p-4 hover:border-primary/30 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="font-heading text-xs font-bold text-primary">{component.abbr}</span>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{component.name}</h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{component.purpose}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="font-body text-xs text-muted-foreground">
            Hover over components in the diagram to see details
          </p>
        </motion.div>
      </div>
    </section>
  );
}