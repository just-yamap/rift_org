import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Coins, Banknote, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: QrCode,
    number: "01",
    title: "Scan Your Wallet",
    description: "Open any Solana-compatible wallet (Phantom, Solflare, Backpack...) and display your QR code or tap via NFC. RIFT reads your address instantly."
  },
  {
    icon: Coins,
    number: "02",
    title: "Select Your Token",
    description: "Browse the full list of SPL tokens on the touchscreen. SOL, USDC, BONK, WIF — any token available on Jupiter is supported."
  },
  {
    icon: Banknote,
    number: "03",
    title: "Insert Your Cash",
    description: "Feed banknotes into the NV200 bill acceptor. The terminal validates authenticity in real-time and displays the equivalent token amount at current market price."
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Receive & Confirm",
    description: "Confirm the transaction on screen. Jupiter executes the best swap route. Tokens land in your wallet in ~400ms. A receipt is printed automatically."
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
          className="mb-16"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">How It Works</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4 leading-tight">
            4 STEPS<br />TO CRYPTO
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl">
            From cash in hand to SPL token in wallet — the entire flow takes less than 30 seconds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <p className="font-heading text-5xl font-bold text-primary/20 leading-none mb-2">{step.number}</p>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
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