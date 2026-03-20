import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Search, QrCode, Send, Smartphone, ArrowRightLeft } from 'lucide-react';

const steps = [
  {
    icon: DollarSign,
    title: "Select Amount",
    description: "The customer indicates how much cash they'd like to withdraw or deposit at the RIFT terminal."
  },
  {
    icon: Search,
    title: "Inventory Check",
    description: "RIFT checks its cash inventory to ensure it can dispense the requested amount."
  },
  {
    icon: QrCode,
    title: "Scan & Send",
    description: "A redeem ticket with QR code is printed. The customer sends crypto to the displayed address."
  },
  {
    icon: Smartphone,
    title: "SMS Notification",
    description: "Once crypto is received, the customer gets an automatic SMS that the withdrawal is ready."
  },
  {
    icon: Send,
    title: "Cash Dispensed",
    description: "The customer scans the redeemed ticket and RIFT dispenses the cash instantly."
  },
  {
    icon: ArrowRightLeft,
    title: "Auto Exchange",
    description: "RIFT automatically sells collected crypto on connected exchanges, reducing operator risk."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs text-primary tracking-widest uppercase">Process</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            How It Works
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Convert cash to crypto or crypto to cash in six simple steps. Configure RIFT as unidirectional or bidirectional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-heading text-[10px] text-muted-foreground tracking-wider">STEP {index + 1}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}