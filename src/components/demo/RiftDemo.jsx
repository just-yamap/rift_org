import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RiftDemo() {
  const [screen, setScreen] = useState('home');

  const screens = {
    home: (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-background to-secondary p-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="hsl(var(--primary))"/>
              <path d="M9 8H15C17.7614 8 20 10.2386 20 13C20 14.6568 19.1046 16.1046 17.7639 16.8292L21 24H17L14.5 17.5H13V24H9V8Z M13 11V14.5H15C16.1046 14.5 17 13.6046 17 12.5C17 11.3954 16.1046 10.5 15 10.5H13V11Z" fill="hsl(var(--primary-foreground))"/>
            </svg>
            <h1 className="font-heading text-4xl font-bold text-foreground">RIFT</h1>
          </div>
          <p className="font-body text-sm text-muted-foreground mb-2">RAPID INTEGRATED FIAT TERMINAL</p>
          <p className="font-body text-xs text-muted-foreground">The world's first Solana-native ATM</p>
        </div>

        <div className="flex items-center gap-6 mb-12">
          <div className="text-center">
            <div className="text-2xl mb-1">◎</div>
            <p className="font-body text-xs text-muted-foreground">Solana Native</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">15</div>
            <p className="font-body text-xs text-muted-foreground">Assets</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">400ms</div>
            <p className="font-body text-xs text-muted-foreground">Settlement</p>
          </div>
        </div>

        <Button
          onClick={() => setScreen('menu')}
          size="lg"
          className="bg-primary text-primary-foreground px-12 py-6 text-lg font-heading font-bold hover:opacity-90"
        >
          TAP TO BEGIN
        </Button>

        <div className="mt-12 flex gap-6 text-xs font-body text-muted-foreground">
          <div>BTC $84,230 <span className="text-primary">▲2.4%</span></div>
          <div>ETH $3,847 <span className="text-primary">▲1.8%</span></div>
          <div>SOL $142.5 <span className="text-primary">▲5.2%</span></div>
        </div>
      </div>
    ),
    menu: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setScreen('home')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>

        <h2 className="font-heading text-3xl font-bold text-foreground mb-2">What would you like?</h2>
        <p className="font-body text-sm text-muted-foreground mb-8">Step 01</p>

        <div className="space-y-4 flex-1">
          <button
            onClick={() => setScreen('buy')}
            className="w-full bg-card border border-border rounded-xl p-6 text-left hover:border-primary/40 transition-all group"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-3xl mb-3">💵</div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Buy Crypto</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  Insert cash or pay by card. Receive BTC, ETH, SOL + 12 more.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs font-body text-primary">Instant settlement</span>
                  <span className="text-xs font-body text-muted-foreground">•</span>
                  <span className="text-xs font-body text-primary">15 assets</span>
                </div>
              </div>
              <div className="text-2xl text-muted-foreground group-hover:text-foreground transition-colors">›</div>
            </div>
          </button>

          <button
            onClick={() => setScreen('sell')}
            className="w-full bg-card border border-border rounded-xl p-6 text-left hover:border-primary/40 transition-all group"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-3xl mb-3">💶</div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Sell Crypto → Cash</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  Send crypto to our address. Receive EUR banknotes.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs font-body text-primary">Print ticket</span>
                  <span className="text-xs font-body text-muted-foreground">•</span>
                  <span className="text-xs font-body text-primary">Return to collect</span>
                </div>
              </div>
              <div className="text-2xl text-muted-foreground group-hover:text-foreground transition-colors">›</div>
            </div>
          </button>

          <button className="w-full bg-card border border-border rounded-xl p-6 text-left hover:border-primary/40 transition-all group">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Check Pending</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  Scan your ticket QR or enter reference to collect cash.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs font-body text-primary">Scan ticket</span>
                  <span className="text-xs font-body text-muted-foreground">•</span>
                  <span className="text-xs font-body text-primary">Collect cash</span>
                </div>
              </div>
              <div className="text-2xl text-muted-foreground group-hover:text-foreground transition-colors">›</div>
            </div>
          </button>
        </div>
      </div>
    ),
    buy: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setScreen('menu')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>

        <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Choose Asset</h2>
        <p className="font-body text-sm text-muted-foreground mb-8">Step 02</p>

        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Bitcoin', symbol: 'BTC', price: '$84,230', change: '+2.4%', emoji: '₿' },
            { name: 'Ethereum', symbol: 'ETH', price: '$3,847', change: '+1.8%', emoji: 'Ξ' },
            { name: 'Solana', symbol: 'SOL', price: '$142.50', change: '+5.2%', emoji: '◎' },
            { name: 'USDC', symbol: 'USDC', price: '$1.00', change: 'Stable', emoji: '💵' },
            { name: 'USDT', symbol: 'USDT', price: '$1.00', change: 'Stable', emoji: '💵' },
            { name: 'Dogecoin', symbol: 'DOGE', price: '$0.123', change: '+4.7%', emoji: '🐕' }
          ].map((asset) => (
            <button
              key={asset.symbol}
              onClick={() => setScreen('payment')}
              className="bg-card border border-border rounded-xl p-4 text-left hover:border-primary/40 transition-all"
            >
              <div className="text-2xl mb-2">{asset.emoji}</div>
              <h3 className="font-heading text-lg font-bold text-foreground">{asset.symbol}</h3>
              <p className="font-body text-xs text-muted-foreground mb-1">{asset.name}</p>
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-foreground">{asset.price}</span>
                <span className="font-body text-xs text-primary">{asset.change}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    ),
    sell: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setScreen('menu')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>

        <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Sell Details</h2>
        <p className="font-body text-sm text-muted-foreground mb-8">Step 03 · Sell</p>

        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="font-body text-xs text-muted-foreground mb-1">Live Rate</p>
              <p className="font-heading text-lg font-bold text-foreground">1 BTC = €77,892</p>
            </div>
            <div>
              <p className="font-body text-xs text-muted-foreground mb-1">Commission</p>
              <p className="font-heading text-lg font-bold text-foreground">5%</p>
            </div>
          </div>

          <h3 className="font-heading text-sm font-semibold text-foreground mb-3">How much EUR do you want?</h3>
          <div className="grid grid-cols-2 gap-3">
            {['€50', '€100', '€200', '€500'].map((amount) => (
              <button
                key={amount}
                onClick={() => setScreen('success')}
                className="bg-secondary border border-border rounded-lg py-3 font-heading font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                {amount}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <p className="font-body text-xs text-foreground">
            ⚠️ Send correct coin on correct network only. Wrong chain = permanent loss.
          </p>
        </div>
      </div>
    ),
    payment: (
      <div className="flex flex-col h-full bg-background p-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setScreen('buy')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>

        <h2 className="font-heading text-3xl font-bold text-foreground mb-2">How to Pay?</h2>
        <p className="font-body text-sm text-muted-foreground mb-8">Step 03 · Buy</p>

        <div className="space-y-4">
          <button
            onClick={() => setScreen('success')}
            className="w-full bg-card border-2 border-primary rounded-xl p-6 text-left hover:bg-primary/5 transition-all group"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-3xl mb-3">💵</div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Cash</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  EUR banknotes — €5 €10 €20 €50 €100 €200
                </p>
                <div className="flex gap-2">
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-body">No fee</span>
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-body">Anonymous &lt;€200</span>
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-body">Recommended</span>
                </div>
              </div>
              <div className="text-2xl text-primary">›</div>
            </div>
          </button>

          <button className="w-full bg-card border border-border rounded-xl p-6 text-left hover:border-primary/40 transition-all group">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Apple / Google Pay</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  Face ID / Fingerprint authentication
                </p>
                <span className="text-xs font-body text-muted-foreground">+1.5% fee</span>
              </div>
              <div className="text-2xl text-muted-foreground group-hover:text-foreground transition-colors">›</div>
            </div>
          </button>

          <button className="w-full bg-card border border-border rounded-xl p-6 text-left hover:border-primary/40 transition-all group">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-3xl mb-3">💳</div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Visa / Mastercard</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  Chip+PIN or contactless. Requires SMS OTP
                </p>
                <span className="text-xs font-body text-muted-foreground">+1.5% fee</span>
              </div>
              <div className="text-2xl text-muted-foreground group-hover:text-foreground transition-colors">›</div>
            </div>
          </button>
        </div>
      </div>
    ),
    success: (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-background to-secondary p-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8"
        >
          <Zap className="w-12 h-12 text-primary" />
        </motion.div>

        <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Transaction Complete</h2>
        <p className="font-body text-muted-foreground mb-2">Confirmed on Solana in &lt;400ms</p>
        <p className="font-body text-sm text-primary mb-8">◎ Solana · Jupiter DEX</p>

        <div className="bg-card border border-border rounded-xl p-6 mb-8 w-full max-w-md">
          <h3 className="font-heading text-sm font-semibold text-foreground mb-4">RIFT Receipt</h3>
          <div className="space-y-2 font-body text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Transaction</span>
              <span className="text-foreground">RIFT-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status</span>
              <span className="text-primary">✓ Confirmed</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Network</span>
              <span className="text-foreground">Solana</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Speed</span>
              <span className="text-foreground">387ms</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={() => setScreen('menu')}
            variant="outline"
          >
            New Transaction
          </Button>
          <Button
            onClick={() => setScreen('home')}
            className="bg-primary text-primary-foreground"
          >
            Return to Home
          </Button>
        </div>
      </div>
    )
  };

  return (
    <div className="w-full h-full min-h-[700px] bg-background border border-border rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="h-full min-h-[700px]"
        >
          {screens[screen]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}