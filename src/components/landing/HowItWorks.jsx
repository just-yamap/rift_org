import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Banknote, ScanLine, Coins, CheckCircle, Wallet, 
  Receipt, ArrowDownLeft, ArrowUpRight, ShieldCheck,
  Eye, CreditCard, Send, Printer, RefreshCw, LayoutGrid,
  Search, Clock, UserCheck, Smartphone
} from 'lucide-react';

// Step 0: shared menu screen for all flows
const menuSteps = [
  {
    number: '01',
    label: "Choose Your Action",
    desc: "Tap what you'd like to do",
    options: ["Buy Crypto", "Sell Crypto → Cash", "Check Pending"],
    icon: LayoutGrid,
    highlight: true,
  },
];

const cashInSteps = [
  { icon: Banknote,    label: "Insert Cash",             desc: "Feed EUR banknotes into the bill acceptor. Live total shown on screen." },
  { icon: Coins,       label: "Choose Asset",            desc: "Pick SOL, USDC, wBTC, wETH, BONK — or search any custom SPL token by name or mint address." },
  { icon: RefreshCw,   label: "Rate & Quote",            desc: "Best swap route via Jupiter. Live rate, commission, and net crypto amount displayed." },
  { icon: Wallet,      label: "Wallet",                  desc: "Scan QR or enter address to receive. No wallet? RIFT prints a paper wallet for you." },
  { icon: ShieldCheck, label: "KYC (if required)",       desc: "If the amount exceeds the threshold, enter ID manually or scan RIFT Connect for instant pre-validated KYC." },
  { icon: CheckCircle, label: "Confirm & Send",          desc: "Crypto lands in your wallet in ~400ms on Solana." },
  { icon: Receipt,     label: "Receipt Printed",         desc: "Full transaction record printed on the spot." },
];

const cashOutSteps = [
  { icon: CreditCard,  label: "Choose EUR Amount",       desc: "Select how much cash you want to receive. Live crypto equivalent shown in real time." },
  { icon: RefreshCw,   label: "Rate & Quote",            desc: "Live rate, commission, and exact crypto amount required is displayed." },
  { icon: ScanLine,    label: "Scan Wallet",             desc: "QR scan or NFC tap — RIFT reads your wallet address and verifies available balance." },
  { icon: ShieldCheck, label: "KYC (if required)",       desc: "If the EUR amount exceeds the threshold, enter ID manually or scan RIFT Connect for instant pre-validated KYC." },
  { icon: Send,        label: "Send Crypto",             desc: "Confirm on your wallet app. Transaction broadcasts to Solana." },
  { icon: Banknote,    label: "Cash Dispensed",          desc: "Banknotes issued instantly + receipt printed." },
];

export default function HowItWorks() {
  const [active, setActive] = useState('in');
  const steps = active === 'in' ? cashInSteps : cashOutSteps;

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
            RIFT handles the full cycle. Deposit cash to get crypto, or convert crypto back to cash. On the spot.
          </p>
        </motion.div>

        {/* Step 01 — shared menu */}
        <div className="mb-6">
          <div className="bg-card border border-primary/30 rounded-xl p-5 max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <LayoutGrid className="w-4 h-4 text-primary" />
              </div>
              <span className="font-heading text-xs text-muted-foreground">01</span>
            </div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Choose What You Want to Do</h3>
            <div className="flex flex-col gap-1.5">
              {["Buy Crypto", "Sell Crypto → Cash", "Check Pending"].map((opt, i) => (
                <div
                  key={opt}
                  onClick={() => { if (i === 0) setActive('in'); if (i === 1) setActive('out'); }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-heading cursor-pointer transition-all ${
                    (i === 0 && active === 'in') || (i === 1 && active === 'out')
                      ? 'bg-foreground text-background border-foreground'
                      : 'border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                  }`}
                >
                  <span className="text-muted-foreground/60 font-body">{i + 1}.</span> {opt}
                </div>
              ))}
            </div>
          </div>
          {/* Connector arrow */}
          <div className="mt-3 ml-9 flex items-center gap-2">
            <div className="w-px h-6 bg-border" />
            <span className="font-body text-xs text-muted-foreground">
              {active === 'in' ? 'Buy Crypto flow ↓' : 'Sell Crypto flow ↓'}
            </span>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex gap-3 mb-6">
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
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`bg-card border rounded-xl p-5 hover:border-primary/30 transition-all group ${
                step.label.includes('KYC') ? 'border-dashed border-muted' : 'border-border'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <step.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-heading text-xs text-muted-foreground">{String(i + 2).padStart(2, '0')}</span>
                {step.label.includes('KYC') && (
                  <span className="ml-auto font-heading text-xs text-muted-foreground/60 border border-dashed border-muted-foreground/30 rounded px-1.5 py-0.5">if required</span>
                )}
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{step.label}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Badges */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
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
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
            <Smartphone className="w-3.5 h-3.5 text-primary" />
            <span className="font-heading text-xs text-primary tracking-wider">RIFT CONNECT KYC</span>
          </div>
        </div>
      </div>
    </section>
  );
}