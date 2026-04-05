import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection({ atmImageUrl }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

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

            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              <span className="text-foreground">RAPID</span>
              <br />
              <span className="text-foreground">INTEGRATED</span>
              <br />
              <span className="text-primary">FIAT TERMINAL</span>
            </h1>

            <p className="font-body text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              The world's first Solana-native ATM. Convert cash to ANY SPL token via Jupiter — or crypto to cash — at the speed of light.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#signup"
                className="bg-foreground text-background px-8 py-3.5 rounded font-heading text-sm font-semibold hover:opacity-80 transition-opacity text-center"
              >
                JOIN EARLY BIRD →
              </a>
              <a
                href="/demo"
                className="border border-border text-foreground px-8 py-3.5 rounded font-heading text-sm font-semibold hover:bg-secondary transition-colors text-center"
              >
                TRY LIVE DEMO
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10">
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">400ms</p>
                <p className="font-body text-xs text-muted-foreground">Transaction Speed</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">All SPL</p>
                <p className="font-body text-xs text-muted-foreground">Tokens Supported</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">$0.001</p>
                <p className="font-body text-xs text-muted-foreground">Avg. Fee</p>
              </div>
            </div>
          </motion.div>

          {/* Right ATM image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-xl" />
              <img 
                src={atmImageUrl}
                alt="RIFT Solana ATM - sleek futuristic cryptocurrency terminal"
                className="relative w-full max-w-md"
                style={{ mixBlendMode: 'screen' }}
              />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-lg px-4 py-2 shadow-lg"
              >
                <span className="font-heading text-xs font-bold">25% OFF</span>
                <p className="font-body text-[10px]">Early Bird</p>
              </motion.div>
            </div>
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