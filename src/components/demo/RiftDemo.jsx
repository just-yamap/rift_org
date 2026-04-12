import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Zap, ArrowDownLeft, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RiftDemo() {
  const [screen, setScreen] = useState('home');

  const go = (s) => setScreen(s);

  const screens = {
    home: (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-background to-secondary p-8">
        <div className="text-center mb-10">
          <p className="font-heading text-xs tracking-widest text-muted-foreground uppercase mb-6">◎ POWERED BY SOLANA</p>
          <h1 className="font-heading text-5xl font-bold text-foreground mb-2">RIFT</h1>
          <p className="font-body text-xs text-muted-foreground mb-1">RAPID INTEGRATED FIAT TERMINAL</p>
          <p className="font-body text-xs text-muted-foreground">The world's first Solana-native ATM</p>
        </div>
        <div className="flex items-center gap-8 mb-10 text-center">
          <div><p className="font-heading text-xl font-bold text-foreground">400ms</p><p className="font-body text-xs text-muted-foreground">Settlement</p></div>
          <div><p className="font-heading text-xl font-bold text-foreground">All SPL</p><p className="font-body text-xs text-muted-foreground">Tokens</p></div>
          <div><p className="font-heading text-xl font-bold text-foreground">$0.001</p><p className="font-body text-xs text-muted-foreground">Avg. Fee</p></div>
        </div>
        <Button onClick={() => go('menu')} size="lg" className="bg-primary text-primary-foreground px-12 py-6 text-lg font-heading font-bold hover:opacity-90">
          TAP TO BEGIN
        </Button>
      </div>
    ),

    menu: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-6"><Button variant="ghost" size="sm" onClick={() => go('home')} className="gap-2"><ArrowLeft className="w-4 h-4" />Back</Button></div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-1">What would you like?</h2>
        <p className="font-body text-xs text-muted-foreground mb-8 uppercase tracking-widest">Step 01</p>
        <div className="space-y-4 flex-1">
          <button onClick={() => go('cashin_insert')} className="w-full bg-card border-2 border-primary/40 rounded-xl p-6 text-left hover:border-primary transition-all group">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ArrowDownLeft className="w-6 h-6 text-primary" />
                  <span className="font-heading text-xl font-bold text-foreground">Cash In</span>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-2">Deposit cash — receive crypto in your wallet</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-body text-primary bg-primary/10 px-2 py-0.5 rounded-full">Fiat → Crypto</span>
                  <span className="text-xs font-body text-primary bg-primary/10 px-2 py-0.5 rounded-full">All SPL tokens</span>
                  <span className="text-xs font-body text-primary bg-primary/10 px-2 py-0.5 rounded-full">400ms</span>
                </div>
              </div>
              <span className="text-2xl text-muted-foreground group-hover:text-foreground transition-colors">›</span>
            </div>
          </button>

          <button onClick={() => go('cashout_scan')} className="w-full bg-card border border-border rounded-xl p-6 text-left hover:border-primary/40 transition-all group">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ArrowUpRight className="w-6 h-6 text-foreground" />
                  <span className="font-heading text-xl font-bold text-foreground">Cash Out</span>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-2">Send crypto — receive EUR banknotes instantly</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-body text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">Crypto → Fiat</span>
                  <span className="text-xs font-body text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">Print ticket</span>
                  <span className="text-xs font-body text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">Collect cash</span>
                </div>
              </div>
              <span className="text-2xl text-muted-foreground group-hover:text-foreground transition-colors">›</span>
            </div>
          </button>
        </div>
      </div>
    ),

    // ── CASH IN FLOW ─────────────────────────────────
    cashin_insert: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-6"><Button variant="ghost" size="sm" onClick={() => go('menu')} className="gap-2"><ArrowLeft className="w-4 h-4" />Back</Button></div>
        <div className="flex items-center gap-2 mb-1">
          <ArrowDownLeft className="w-4 h-4 text-primary" />
          <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Cash In · Step 01</p>
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Insert Cash</h2>
        <div className="bg-card border border-border rounded-xl p-8 text-center mb-6 flex-1 flex flex-col items-center justify-center">
          <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-4">Amount inserted</p>
          <p className="font-heading text-6xl font-bold text-foreground mb-2">€ 100</p>
          <p className="font-body text-xs text-muted-foreground">Feed banknotes — €5 €10 €20 €50 €100 €200</p>
        </div>
        <Button onClick={() => go('cashin_selectcrypto')} className="bg-primary text-primary-foreground w-full h-12 font-heading font-semibold">
          CONFIRM AMOUNT →
        </Button>
      </div>
    ),

    cashin_selectcrypto: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-6"><Button variant="ghost" size="sm" onClick={() => go('cashin_insert')} className="gap-2"><ArrowLeft className="w-4 h-4" />Back</Button></div>
        <div className="flex items-center gap-2 mb-1">
          <ArrowDownLeft className="w-4 h-4 text-primary" />
          <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Cash In · Step 02</p>
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Select Crypto</h2>
        <div className="grid grid-cols-2 gap-3 flex-1">
          {[
            { s: 'SOL', name: 'Solana',   price: '$142.50', ch: '+5.2%', e: '◎' },
            { s: 'USDC', name: 'USD Coin', price: '$1.00',   ch: 'Stable', e: '💵' },
            { s: 'BTC',  name: 'Bitcoin',  price: '$84,230', ch: '+2.4%', e: '₿' },
            { s: 'BONK', name: 'Bonk',     price: '$0.0000X',ch: '+12%',  e: '🐕' },
          ].map(a => (
            <button key={a.s} onClick={() => go('cashin_rate')} className="bg-card border border-border rounded-xl p-4 text-left hover:border-primary/40 transition-all">
              <div className="text-2xl mb-2">{a.e}</div>
              <h3 className="font-heading text-lg font-bold text-foreground">{a.s}</h3>
              <p className="font-body text-xs text-muted-foreground">{a.name}</p>
              <div className="flex justify-between mt-1">
                <span className="font-body text-sm text-foreground">{a.price}</span>
                <span className="font-body text-xs text-primary">{a.ch}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    ),

    cashin_rate: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-6"><Button variant="ghost" size="sm" onClick={() => go('cashin_selectcrypto')} className="gap-2"><ArrowLeft className="w-4 h-4" />Back</Button></div>
        <div className="flex items-center gap-2 mb-1">
          <ArrowDownLeft className="w-4 h-4 text-primary" />
          <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Cash In · Step 03</p>
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Rate & Quote</h2>
        <div className="bg-card border border-border rounded-xl p-6 mb-4 space-y-4">
          <div className="flex justify-between"><span className="font-body text-sm text-muted-foreground">You insert</span><span className="font-heading font-bold text-foreground">€ 100.00</span></div>
          <div className="flex justify-between"><span className="font-body text-sm text-muted-foreground">Rate (Jupiter)</span><span className="font-heading font-bold text-foreground">1 SOL = €126.40</span></div>
          <div className="flex justify-between"><span className="font-body text-sm text-muted-foreground">Commission</span><span className="font-heading font-bold text-foreground">3%</span></div>
          <div className="h-px bg-border" />
          <div className="flex justify-between"><span className="font-body text-sm text-foreground font-semibold">You receive</span><span className="font-heading text-xl font-bold text-primary">◎ 0.7675 SOL</span></div>
        </div>
        <Button onClick={() => go('cashin_kyc')} className="bg-primary text-primary-foreground w-full h-12 font-heading font-semibold mt-auto">
          CONFIRM →
        </Button>
      </div>
    ),

    cashin_kyc: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-6"><Button variant="ghost" size="sm" onClick={() => go('cashin_rate')} className="gap-2"><ArrowLeft className="w-4 h-4" />Back</Button></div>
        <div className="flex items-center gap-2 mb-1">
          <ArrowDownLeft className="w-4 h-4 text-primary" />
          <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Cash In · Step 04</p>
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-2">KYC Verification</h2>
        <p className="font-body text-sm text-muted-foreground mb-8">Required for transactions above €200. Fast, secure, encrypted.</p>
        <div className="space-y-3 mb-8">
          {['Scan QR on your phone — open RIFT app', 'Complete identity check in-app (< 2 min)', 'OR verify directly on this screen'].map((s, i) => (
            <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
              <ShieldCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="font-body text-sm text-foreground">{s}</span>
            </div>
          ))}
        </div>
        <Button onClick={() => go('cashin_wallet')} className="bg-primary text-primary-foreground w-full h-12 font-heading font-semibold">
          VERIFIED — CONTINUE →
        </Button>
      </div>
    ),

    cashin_wallet: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-6"><Button variant="ghost" size="sm" onClick={() => go('cashin_kyc')} className="gap-2"><ArrowLeft className="w-4 h-4" />Back</Button></div>
        <div className="flex items-center gap-2 mb-1">
          <ArrowDownLeft className="w-4 h-4 text-primary" />
          <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Cash In · Step 05</p>
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Connect Wallet</h2>
        <div className="space-y-4 flex-1">
          <button onClick={() => go('cashin_success')} className="w-full bg-card border-2 border-primary/40 rounded-xl p-5 text-left hover:border-primary transition-all">
            <h3 className="font-heading text-base font-semibold text-foreground mb-1">📷 Scan QR Code</h3>
            <p className="font-body text-xs text-muted-foreground">Open Phantom, Solflare or Backpack — display your QR</p>
          </button>
          <button onClick={() => go('cashin_success')} className="w-full bg-card border border-border rounded-xl p-5 text-left hover:border-primary/40 transition-all">
            <h3 className="font-heading text-base font-semibold text-foreground mb-1">⌨️ Enter Address</h3>
            <p className="font-body text-xs text-muted-foreground">Type or paste your Solana wallet address manually</p>
          </button>
          <button onClick={() => go('cashin_success')} className="w-full bg-card border border-border rounded-xl p-5 text-left hover:border-primary/40 transition-all">
            <h3 className="font-heading text-base font-semibold text-foreground mb-1">🖨️ Print Paper Wallet</h3>
            <p className="font-body text-xs text-muted-foreground">No wallet? RIFT generates and prints one for you</p>
          </button>
        </div>
      </div>
    ),

    // ── CASH OUT FLOW ─────────────────────────────────
    cashout_scan: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-6"><Button variant="ghost" size="sm" onClick={() => go('menu')} className="gap-2"><ArrowLeft className="w-4 h-4" />Back</Button></div>
        <div className="flex items-center gap-2 mb-1">
          <ArrowUpRight className="w-4 h-4 text-foreground" />
          <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Cash Out · Step 01</p>
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Scan Your Wallet</h2>
        <div className="bg-card border border-border rounded-xl p-8 text-center mb-6 flex-1 flex flex-col items-center justify-center">
          <div className="w-32 h-32 bg-secondary rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-border">
            <span className="text-4xl">📷</span>
          </div>
          <p className="font-heading text-sm font-semibold text-foreground mb-1">Display wallet QR</p>
          <p className="font-body text-xs text-muted-foreground">Phantom · Solflare · Backpack · or NFC tap</p>
        </div>
        <Button onClick={() => go('cashout_balances')} className="bg-primary text-primary-foreground w-full h-12 font-heading font-semibold">
          WALLET DETECTED →
        </Button>
      </div>
    ),

    cashout_balances: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-6"><Button variant="ghost" size="sm" onClick={() => go('cashout_scan')} className="gap-2"><ArrowLeft className="w-4 h-4" />Back</Button></div>
        <div className="flex items-center gap-2 mb-1">
          <ArrowUpRight className="w-4 h-4 text-foreground" />
          <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Cash Out · Step 02</p>
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Your Balances</h2>
        <div className="space-y-3 flex-1">
          {[
            { e: '◎', s: 'SOL',  bal: '4.20 SOL',   eur: '≈ €530' },
            { e: '💵', s: 'USDC', bal: '250.00 USDC', eur: '≈ €230' },
            { e: '₿',  s: 'BTC',  bal: '0.002 BTC',  eur: '≈ €155' },
          ].map(t => (
            <button key={t.s} onClick={() => go('cashout_amount')} className="w-full bg-card border border-border rounded-xl p-4 text-left hover:border-primary/40 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{t.e}</span>
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">{t.s}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.bal}</p>
                </div>
              </div>
              <span className="font-heading text-sm text-foreground">{t.eur}</span>
            </button>
          ))}
        </div>
      </div>
    ),

    cashout_amount: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-6"><Button variant="ghost" size="sm" onClick={() => go('cashout_balances')} className="gap-2"><ArrowLeft className="w-4 h-4" />Back</Button></div>
        <div className="flex items-center gap-2 mb-1">
          <ArrowUpRight className="w-4 h-4 text-foreground" />
          <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Cash Out · Step 03</p>
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-2">How much EUR?</h2>
        <p className="font-body text-xs text-muted-foreground mb-6">Rate: 1 SOL = €126.40 · Commission: 5%</p>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {['€50', '€100', '€200', '€500'].map(a => (
            <button key={a} onClick={() => go('cashout_kyc')} className="bg-secondary border border-border rounded-lg py-4 font-heading text-lg font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              {a}
            </button>
          ))}
        </div>
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mt-auto">
          <p className="font-body text-xs text-foreground">⚠️ Send correct token on correct network only. Wrong chain = permanent loss.</p>
        </div>
      </div>
    ),

    cashout_kyc: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-6"><Button variant="ghost" size="sm" onClick={() => go('cashout_amount')} className="gap-2"><ArrowLeft className="w-4 h-4" />Back</Button></div>
        <div className="flex items-center gap-2 mb-1">
          <ArrowUpRight className="w-4 h-4 text-foreground" />
          <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Cash Out · Step 04</p>
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-2">KYC / AML Check</h2>
        <p className="font-body text-sm text-muted-foreground mb-8">Compliance verification required for cash withdrawals.</p>
        <div className="space-y-3 mb-8">
          {['Scan QR — complete check on RIFT app', 'Identity + AML screening (< 2 min)', 'OR verify directly on this screen'].map((s, i) => (
            <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
              <ShieldCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="font-body text-sm text-foreground">{s}</span>
            </div>
          ))}
        </div>
        <Button onClick={() => go('cashout_success')} className="bg-primary text-primary-foreground w-full h-12 font-heading font-semibold">
          VERIFIED — CONTINUE →
        </Button>
      </div>
    ),

    // ── SUCCESS (shared) ─────────────────────────────
    cashin_success: (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-background to-secondary p-8 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, type: 'spring' }}
          className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Zap className="w-10 h-10 text-primary" />
        </motion.div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Crypto Sent!</h2>
        <p className="font-body text-muted-foreground mb-1">Confirmed on Solana in &lt;400ms</p>
        <p className="font-body text-sm text-primary mb-6">◎ 0.7675 SOL → your wallet</p>
        <div className="bg-card border border-border rounded-xl p-5 mb-6 w-full text-left space-y-2">
          <h3 className="font-heading text-sm font-semibold text-foreground mb-3">RIFT Receipt</h3>
          <div className="flex justify-between font-body text-sm"><span className="text-muted-foreground">Type</span><span className="text-foreground">Cash In</span></div>
          <div className="flex justify-between font-body text-sm"><span className="text-muted-foreground">Deposited</span><span className="text-foreground">€ 100.00</span></div>
          <div className="flex justify-between font-body text-sm"><span className="text-muted-foreground">Received</span><span className="text-foreground">◎ 0.7675 SOL</span></div>
          <div className="flex justify-between font-body text-sm"><span className="text-muted-foreground">Status</span><span className="text-primary">✓ Confirmed</span></div>
          <div className="flex justify-between font-body text-sm"><span className="text-muted-foreground">Speed</span><span className="text-foreground">387ms</span></div>
        </div>
        <div className="flex gap-3 w-full">
          <Button onClick={() => go('menu')} variant="outline" className="flex-1">New TX</Button>
          <Button onClick={() => go('home')} className="flex-1 bg-primary text-primary-foreground">Home</Button>
        </div>
      </div>
    ),

    cashout_success: (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-background to-secondary p-8 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, type: 'spring' }}
          className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Zap className="w-10 h-10 text-primary" />
        </motion.div>
        <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Collect Your Cash!</h2>
        <p className="font-body text-muted-foreground mb-1">Crypto received · Banknotes dispensed</p>
        <p className="font-body text-sm text-primary mb-6">€ 100.00 → dispensed now</p>
        <div className="bg-card border border-border rounded-xl p-5 mb-6 w-full text-left space-y-2">
          <h3 className="font-heading text-sm font-semibold text-foreground mb-3">RIFT Receipt</h3>
          <div className="flex justify-between font-body text-sm"><span className="text-muted-foreground">Type</span><span className="text-foreground">Cash Out</span></div>
          <div className="flex justify-between font-body text-sm"><span className="text-muted-foreground">Sent</span><span className="text-foreground">◎ 0.8212 SOL</span></div>
          <div className="flex justify-between font-body text-sm"><span className="text-muted-foreground">Dispensed</span><span className="text-foreground">€ 100.00</span></div>
          <div className="flex justify-between font-body text-sm"><span className="text-muted-foreground">Status</span><span className="text-primary">✓ Complete</span></div>
        </div>
        <div className="flex gap-3 w-full">
          <Button onClick={() => go('menu')} variant="outline" className="flex-1">New TX</Button>
          <Button onClick={() => go('home')} className="flex-1 bg-primary text-primary-foreground">Home</Button>
        </div>
      </div>
    ),
  };

  return (
    <div className="w-full h-full min-h-[700px] bg-background border border-border rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="h-full min-h-[700px]"
        >
          {screens[screen]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}