import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowLeftRight, Coins, ShieldCheck, Clock } from 'lucide-react';

const items = [
  {
    icon: Zap,
    value: "400ms",
    label: "Transaction Speed",
    detail: "Average Solana confirmation time"
  },
  {
    icon: ArrowLeftRight,
    value: "Cash → Crypto",
    label: "Bidirectional",
    detail: "Buy or sell in one terminal"
  },
  {
    icon: Coins,
    value: "All SPL Tokens",
    label: "Token Support",
    detail: "SOL, USDC, BONK & every Solana token"
  },
  {
    icon: ShieldCheck,
    value: "Built-in KYC",
    label: "Compliance Ready",
    detail: "AML & identity verification included"
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime SLA",
    detail: "Remote monitoring 24/7"
  }
];

export default function InfoBar() {
  return (
    <motion.div
      className="w-full bg-card border-y border-border py-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap md:flex-nowrap divide-y md:divide-y-0 md:divide-x divide-border">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 px-6 py-4 flex-1 min-w-[160px] group"
            >
              <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-foreground leading-tight">{item.value}</p>
                <p className="font-body text-xs text-muted-foreground leading-tight">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}