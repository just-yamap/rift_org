import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import RiftLogo from './RiftLogo';

export default function HeroSection({ atmImageUrl }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glow with parallax */}
      <motion.div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-heading text-xs text-primary tracking-wider">POWERED BY SOLANA</span>
            </div>

            <div className="mb-6">
              <RiftLogo size="xl" showText={false} />
            </div>

            <p className="font-heading text-base md:text-lg font-semibold text-foreground mb-2 leading-snug">
              The first bidirectional, multi-chain, privacy-preserving crypto ATM — built on Solana.
            </p>
            <p className="font-body text-sm text-muted-foreground mb-1">Insert cash, walk away with native BTC, ETH, SOL, or any verified SPL token.</p>
            <p className="font-body text-sm text-muted-foreground mb-8">Sell any supported asset back to cash, instantly. No account required. No wrapped tokens. No compromises.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#signup"
                className="bg-foreground text-background px-8 py-3.5 rounded font-heading text-sm font-semibold hover:opacity-80 transition-opacity text-center"
              >
                FIND A KIOSK →
              </a>
              <a
                href="/operator"
                className="border border-border text-foreground px-8 py-3.5 rounded font-heading text-sm font-semibold hover:bg-secondary transition-colors text-center"
              >
                OPERATE A KIOSK
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10">
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">400ms</p>
                <p className="font-body text-xs text-muted-foreground">Transaction Speed</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">All SPL</p>
                <p className="font-body text-xs text-muted-foreground">+ BTC, ETH & more <span className="text-primary/70">(beta)</span></p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">$0.001</p>
                <p className="font-body text-xs text-muted-foreground">Avg. Fee</p>
              </div>
            </div>
          </motion.div>

          {/* Right ATM image with mouse tracking */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <motion.div 
              className="relative"
              animate={{ x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
            >
              <motion.div 
                className="absolute -inset-4 bg-primary/5 rounded-2xl blur-xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img 
                src={atmImageUrl}
                alt="RIFT Solana ATM - sleek futuristic cryptocurrency terminal"
                className="relative w-full max-w-md"
                style={{ mixBlendMode: 'screen' }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}