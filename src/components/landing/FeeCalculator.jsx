import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft, TrendingUp, TrendingDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const TOKENS = [
  { symbol: 'SOL', name: 'Solana', price: 142.50, change24h: 5.2, trend: 'up' },
  { symbol: 'USDC', name: 'USD Coin', price: 1.00, change24h: 0.0, trend: 'neutral' },
  { symbol: 'wBTC', name: 'Wrapped Bitcoin', price: 67850.00, change24h: 3.1, trend: 'up' },
  { symbol: 'wETH', name: 'Wrapped Ethereum', price: 2845.00, change24h: -1.8, trend: 'down' },
  { symbol: 'JUP', name: 'Jupiter', price: 0.85, change24h: 8.5, trend: 'up' },
];

const PRICE_TRENDS = {
  SOL: [
    { time: '0h', price: 135.20 },
    { time: '4h', price: 138.50 },
    { time: '8h', price: 140.10 },
    { time: '12h', price: 139.80 },
    { time: '16h', price: 141.30 },
    { time: '20h', price: 142.20 },
    { time: '24h', price: 142.50 },
  ],
  USDC: [
    { time: '0h', price: 1.00 },
    { time: '4h', price: 1.00 },
    { time: '8h', price: 1.00 },
    { time: '12h', price: 1.00 },
    { time: '16h', price: 1.00 },
    { time: '20h', price: 1.00 },
    { time: '24h', price: 1.00 },
  ],
  wBTC: [
    { time: '0h', price: 65800.00 },
    { time: '4h', price: 66200.00 },
    { time: '8h', price: 66950.00 },
    { time: '12h', price: 67100.00 },
    { time: '16h', price: 67500.00 },
    { time: '20h', price: 67750.00 },
    { time: '24h', price: 67850.00 },
  ],
  wETH: [
    { time: '0h', price: 2895.00 },
    { time: '4h', price: 2880.00 },
    { time: '8h', price: 2870.00 },
    { time: '12h', price: 2860.00 },
    { time: '16h', price: 2855.00 },
    { time: '20h', price: 2848.00 },
    { time: '24h', price: 2845.00 },
  ],
  JUP: [
    { time: '0h', price: 0.78 },
    { time: '4h', price: 0.79 },
    { time: '8h', price: 0.81 },
    { time: '12h', price: 0.80 },
    { time: '16h', price: 0.83 },
    { time: '20h', price: 0.84 },
    { time: '24h', price: 0.85 },
  ],
};

const BASE_COMMISSION = 2;
const SAFETY_BUFFER = 2;
const BASE_NETWORK_FEE = 0.01;

export default function FeeCalculator() {
  const [mode, setMode] = useState('buy');
  const [amount, setAmount] = useState('100');
  const [selectedToken, setSelectedToken] = useState('SOL');
  const [customCommission, setCustomCommission] = useState(BASE_COMMISSION);

  const token = TOKENS.find(t => t.symbol === selectedToken);
  const fiatAmount = parseFloat(amount) || 0;
  const tokenAmount = fiatAmount / token.price;

  const commissionFee = (fiatAmount * customCommission) / 100;
  const safetyBuffer = (fiatAmount * SAFETY_BUFFER) / 100;
  const networkFee = BASE_NETWORK_FEE;

  const totalFees = commissionFee + safetyBuffer + networkFee;
  const totalCost = fiatAmount + totalFees;
  const finalTokenAmount = totalCost / token.price;
  const effectiveRate = (totalCost / fiatAmount) * 100 - 100;

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-card via-card to-secondary border border-border/50 rounded-2xl p-8 backdrop-blur-sm"
        >
          {/* Mode Toggle */}
          <div className="flex gap-3 mb-8">
            {['buy', 'sell'].map(m => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-3 px-4 rounded-lg font-heading text-sm font-semibold transition-all ${
                  mode === m
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary text-muted-foreground hover:text-foreground border border-border'
                }`}
              >
                {mode === 'buy' ? 'Buy Crypto' : 'Sell Crypto'}
              </button>
            ))}
          </div>

          {/* Asset Select */}
          <div className="mb-8">
            <label className="font-heading text-xs text-muted-foreground uppercase tracking-wider mb-2.5 block">Asset</label>
            <Select value={selectedToken} onValueChange={setSelectedToken}>
              <SelectTrigger className="bg-secondary border-border h-11 font-heading">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TOKENS.map(t => (
                  <SelectItem key={t.symbol} value={t.symbol}>
                    {t.symbol} • €{t.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Trend Chart */}
            <div className="mt-4 p-4 bg-secondary/50 rounded-lg border border-border/50">
              <div className="flex justify-between items-center mb-3">
                <p className="font-heading text-xs text-muted-foreground uppercase tracking-wider">24h Price Trend</p>
                <div className="flex items-center gap-1.5">
                  {token.trend === 'up' ? (
                    <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                  ) : token.trend === 'down' ? (
                    <TrendingDown className="w-3.5 h-3.5 text-red-400" />
                  ) : null}
                  <span className={`font-heading text-xs font-semibold ${
                    token.trend === 'up' ? 'text-green-400' : token.trend === 'down' ? 'text-red-400' : 'text-muted-foreground'
                  }`}>
                    {token.change24h > 0 ? '+' : ''}{token.change24h.toFixed(1)}%
                  </span>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={80}>
                <AreaChart data={PRICE_TRENDS[selectedToken]}>
                  <defs>
                    <linearGradient id={`gradient-${selectedToken}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={token.trend === 'up' ? '#4ade80' : token.trend === 'down' ? '#ef4444' : '#888'} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={token.trend === 'up' ? '#4ade80' : token.trend === 'down' ? '#ef4444' : '#888'} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" style={{ opacity: 0.5 }} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '6px',
                    }}
                    formatter={(value) => `€${value.toLocaleString('en-US', { maximumFractionDigits: 2 })}`}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke={token.trend === 'up' ? '#4ade80' : token.trend === 'down' ? '#ef4444' : '#888'}
                    fillOpacity={1}
                    fill={`url(#gradient-${selectedToken})`}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Amount Input */}
          <div className="mb-8">
            <label className="font-heading text-xs text-muted-foreground uppercase tracking-wider mb-2.5 block">
              {mode === 'buy' ? 'Amount to spend' : 'Amount to receive'}
            </label>
            <div className="flex gap-2">
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="100"
                className="bg-secondary border-border h-11 font-heading text-lg"
              />
              <div className="flex items-center px-4 py-2 bg-secondary border border-border rounded-lg font-heading text-sm font-semibold text-foreground min-w-max">
                €
              </div>
            </div>
          </div>

          {/* Commission Slider */}
          <div className="mb-8 pb-8 border-b border-border/50">
            <div className="flex justify-between items-center mb-3">
              <label className="font-heading text-xs text-muted-foreground uppercase tracking-wider">
                Operator Commission
              </label>
              <span className="font-heading text-sm font-semibold text-primary">
                {customCommission.toFixed(1)}%
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={customCommission}
              onChange={(e) => setCustomCommission(parseFloat(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <p className="font-body text-xs text-muted-foreground mt-2">Configurable from 1–15%</p>
          </div>

          {/* Fee Breakdown */}
          <div className="space-y-2.5 mb-8">
            <div className="flex justify-between items-center py-2">
              <span className="font-body text-sm text-muted-foreground">Commission ({customCommission.toFixed(1)}%)</span>
              <span className="font-heading text-sm font-semibold text-foreground">€{commissionFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-body text-sm text-muted-foreground">Safety buffer (2%)</span>
              <span className="font-heading text-sm font-semibold text-foreground">€{safetyBuffer.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="font-body text-sm text-muted-foreground">Network fee</span>
              <span className="font-heading text-sm font-semibold text-foreground">€{networkFee.toFixed(2)}</span>
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary border border-primary/20 rounded-xl p-6 mb-6">
            <p className="font-body text-xs text-muted-foreground mb-4 uppercase tracking-wider">You get</p>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-4xl font-bold text-foreground">
                {finalTokenAmount.toFixed(6)}
              </span>
              <span className="font-heading text-xl font-semibold text-primary">
                {selectedToken}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-primary/20 flex justify-between items-center">
              <span className="font-body text-xs text-muted-foreground">Total with fees</span>
              <span className="font-heading text-sm font-semibold text-foreground">
                €{totalCost.toFixed(2)} <span className="text-primary">+{effectiveRate.toFixed(1)}%</span>
              </span>
            </div>
          </div>

          {/* Exchange Info */}
          <div className="bg-secondary/50 rounded-lg px-4 py-3 border border-border/50">
            <p className="font-body text-xs text-muted-foreground">
              Live rate: <span className="text-foreground font-semibold">€{token.price.toLocaleString('en-US', { maximumFractionDigits: 2 })} / {selectedToken}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}