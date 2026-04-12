import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RiftLogo from './RiftLogo';

export default function Navbar() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RiftLogo size="md" showText={true} />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">How It Works</a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">Features</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">FAQ</a>

          {/* Try Demo dropdown */}
          <div className="relative" onMouseEnter={() => setDemoOpen(true)} onMouseLeave={() => setDemoOpen(false)}>
            <button className="border border-border text-foreground px-4 py-2 rounded font-heading text-sm font-semibold hover:bg-secondary transition-colors flex items-center gap-2">
              TRY DEMO
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${demoOpen ? 'rotate-180' : ''}`}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <AnimatePresence>
              {demoOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-52 bg-card border border-border rounded-xl overflow-hidden shadow-xl"
                >
                  <a href="/demo" className="flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <span className="text-sm">🖥️</span>
                    </div>
                    <div>
                      <p className="font-heading text-xs font-semibold text-foreground">ATM Interface</p>
                      <p className="font-body text-xs text-muted-foreground">Customer-facing terminal</p>
                    </div>
                  </a>
                  <div className="h-px bg-border" />
                  <a href="/admin-demo" className="flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <span className="text-sm">📊</span>
                    </div>
                    <div>
                      <p className="font-heading text-xs font-semibold text-foreground">Operator Dashboard</p>
                      <p className="font-body text-xs text-muted-foreground">Analytics & management</p>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <a 
          href="#signup"
          className="bg-foreground text-background px-5 py-2 rounded font-heading text-sm font-semibold hover:opacity-80 transition-opacity"
        >
          JOIN WAITLIST
        </a>
      </div>
    </motion.nav>
  );
}