import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TOKENS = [
  { symbol: 'SOL', name: 'Solana', price: 142.50 },
  { symbol: 'USDC', name: 'USD Coin', price: 1.00 },
  { symbol: 'wBTC', name: 'Wrapped Bitcoin', price: 67850.00 },
  { symbol: 'wETH', name: 'Wrapped Ethereum', price: 2845.00 },
  { symbol: 'JUP', name: 'Jupiter', price: 0.85 },
];

const BASE_COMMISSION = 2; // 2% default
const SAFETY_BUFFER = 2; // 2% default
const BASE_NETWORK_FEE = 0.01; // $0.01 per transaction

export default function FeeCalculator() {
  const [mode, setMode] = useState('buy'); // buy or sell
  const [amount, setAmount] = useState('100');
  const [selectedToken, setSelectedToken] = useState('SOL');
  const [customCommission, setCustomCommission] = useState(BASE_COMMISSION);

  const token = TOKENS.find(t => t.symbol === selectedToken);
  const fiatAmount = parseFloat(amount) || 0;
  const tokenAmount = fiatAmount / token.price;
  
  // Calculate fees for buy
  const commissionFee = (fiatAmount * customCommission) / 100;
  const safetyBuffer = (fiatAmount * SAFETY_BUFFER) / 100;
  const networkFee = BASE_NETWORK_FEE;
  
  const totalFees = commissionFee + safetyBuffer + networkFee;
  const totalCost = fiatAmount + totalFees;
  const finalTokenAmount = totalCost / token.price;
  const effectiveRate = (totalCost / fiatAmount) * 100 - 100;

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-transparent to-primary/3">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-2xl p-8"
        >
          {/* Header */}
          <div className="mb-8">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Fee Estimator</h3>
            <p className="font-body text-sm text-muted-foreground">See exactly what you'll pay before you visit</p>
          </div>

          {/* Buy/Sell Toggle */}
          <div className="flex gap-3 mb-6">
            {['buy', 'sell'].map(m => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2.5 px-4 rounded-lg font-heading text-sm font-semibold transition-all ${
                  mode === m
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {m.charAt(0).toUpperCase() + m.slice(1)} {mode === 'buy' ? 'Crypto' : 'Crypto'}
              </button>
            ))}
          </div>

          {/* Token Select */}
          <div className="mb-6">
            <label className="font-heading text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Asset</label>
            <Select value={selectedToken} onValueChange={setSelectedToken}>
              <SelectTrigger className="bg-secondary border-border h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TOKENS.map(t => (
                  <SelectItem key={t.symbol} value={t.symbol}>
                    {t.symbol} • ${t.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Amount Input */}
          <div className="mb-6">
            <label className="font-heading text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
              {mode === 'buy' ? 'I want to spend' : 'I want to receive'}
            </label>
            <div className="flex gap-2">
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="100"
                className="bg-secondary border-border h-11"
              />
              <span className="flex items-center px-4 py-2 bg-secondary border border-border rounded-lg font-heading text-sm font-semibold text-foreground">
                €
              </span>
            </div>
          </div>

          {/* Commission Slider */}
          <div className="mb-8 pb-8 border-b border-border">
            <label className="font-heading text-xs text-muted-foreground uppercase tracking-wider mb-3 block">
              Operator Commission (1–15%)
            </label>
            <input
              type="range"
              min="1"
              max="15"
              value={customCommission}
              onChange={(e) => setCustomCommission(parseFloat(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between items-center mt-2">
              <span className="font-body text-xs text-muted-foreground">{customCommission.toFixed(1)}%</span>
              <span className="font-heading text-sm font-semibold text-primary">€{commissionFee.toFixed(2)}</span>
            </div>
          </div>

          {/* Fee Breakdown */}
          <div className="space-y-3 mb-8">
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-muted-foreground">Commission ({customCommission.toFixed(1)}%)</span>
              <span className="font-heading text-sm font-semibold text-foreground">€{commissionFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-muted-foreground">Safety buffer (2%)</span>
              <span className="font-heading text-sm font-semibold text-foreground">€{safetyBuffer.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="font-body text-sm text-muted-foreground">Network fee</span>
              <span className="font-heading text-sm font-semibold text-foreground">€{networkFee.toFixed(2)}</span>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-secondary/50 rounded-xl p-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-body text-xs text-muted-foreground mb-1">You spend</p>
                <p className="font-heading text-2xl font-bold text-foreground">€{fiatAmount.toFixed(2)}</p>
              </div>
              <ArrowRightLeft className="w-5 h-5 text-muted-foreground" />
              <div className="text-right">
                <p className="font-body text-xs text-muted-foreground mb-1">You get</p>
                <p className="font-heading text-2xl font-bold text-primary">{finalTokenAmount.toFixed(6)} {selectedToken}</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-border/50">
              <span className="font-body text-xs text-muted-foreground">Total with fees</span>
              <span className="font-heading text-sm font-semibold text-foreground">€{totalCost.toFixed(2)} (+{effectiveRate.toFixed(1)}%)</span>
            </div>
          </div>

          {/* Rate info */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-3">
            <p className="font-body text-xs text-muted-foreground">
              Exchange rate: <span className="text-foreground font-semibold">€{token.price.toLocaleString('en-US', { maximumFractionDigits: 2 })} per {selectedToken}</span> 
              <span className="text-primary/70"> (live estimates)</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}