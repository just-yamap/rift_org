import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Banknote, ScanLine, Coins, CheckCircle, Wallet, 
  Receipt, ArrowDownLeft, ArrowUpRight, ShieldCheck,
  Eye, CreditCard, Send, Printer, RefreshCw
} from 'lucide-react';

const cashInSteps = [
  { icon: Banknote,    label: "Insert Cash",           desc: "Feed EUR banknotes into the bill acceptor" },
  { icon: Eye,         label: "Live Amount Display",   desc: "Real-time fiat value shown on screen" },
  { icon: Coins,       label: "Select Crypto",         desc: "Pick any SPL token — SOL, USDC, BONK & more" },
  { icon: RefreshCw,   label: "Rate & Quote",          desc: "Best swap route via Jupiter aggregator" },
  { icon: Wallet,      label: "Connect Wallet",        desc: "Scan QR code or enter address manually" },
  { icon: ShieldCheck, label: "KYC Verification",      desc: "App-based or on-device identity check" },
  { icon: CheckCircle, label: "Confirm & Send",        desc: "Crypto lands in your wallet in ~400ms" },
  { icon: Receipt,     label: "Receipt Printed",       desc: "Full transaction record printed on the spot" },
];

const cashOutSteps = [
  { icon: ScanLine,    label: "Scan Wallet",           desc: "QR scan or NFC tap to read your address" },
  { icon: Eye,         label: "View Balances",         desc: "All your SPL token balances displayed live" },
  { icon: Coins,       label: "Choose Crypto & Amount",desc: "Select token and how much to convert" },
  { icon: CreditCard,  label: "Select Denominations",  desc: "Pick the banknote mix you want dispensed" },
  { icon: RefreshCw,   label: "Fees & Conversion",     desc: "Live rate, commission, and net EUR shown" },
  { icon: ShieldCheck, label: "KYC / AML Check",       desc: "App-based or on-device compliance check" },
  { icon: Send,        label: "Send Crypto",           desc: "Confirm on your wallet — transaction broadcasts" },
  { icon: Banknote,    label: "Cash Dispensed",        desc: "Banknotes issued + receipt printed instantly" },
];

export default function HowItWorks() {
  const [active, setActive] = useState('in');

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">How It Works</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4 leading-tight">
            BOTH<br />DIRECTIONS
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl">
            RIFT handles the full cycle — deposit cash to get crypto, or convert crypto back to cash. On the spot.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex gap-3 mb-10">
          <button
            onClick={() => setActive('in')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded font-heading text-sm font-semibold transition-all ${
              active === 'in' 
                ? 'bg-foreground text-background' 
                : 'bg-secondary text-muted-foreground hover:text-foreground border border-border'
            }`}
          >
            <ArrowDownLeft className="w-4 h-4" />
            CASH IN — Fiat → Crypto
          </button>
          <button
            onClick={() => setActive('out')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded font-heading text-sm font-semibold transition-all ${
              active === 'out' 
                ? 'bg-foreground text-background' 
                : 'bg-secondary text-muted-foreground hover:text-foreground border border-border'
            }`}
          >
            <ArrowUpRight className="w-4 h-4" />
            CASH OUT — Crypto → Fiat
          </button>
        </div>

        {/* Steps grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {(active === 'in' ? cashInSteps : cashOutSteps).map((step, i) => (
            <div
              key={step.label}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <step.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-heading text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{step.label}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Direction badge */}
        <div className="mt-8 flex items-center gap-4">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span className="font-heading text-xs text-primary tracking-wider">KYC / AML COMPLIANT</span>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
            <RefreshCw className="w-3.5 h-3.5 text-primary" />
            <span className="font-heading text-xs text-primary tracking-wider">JUPITER-POWERED SWAPS</span>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
            <Receipt className="w-3.5 h-3.5 text-primary" />
            <span className="font-heading text-xs text-primary tracking-wider">PRINTED RECEIPT</span>
          </div>
        </div>
      </div>
    </section>
  );
}