import React from 'react';
import { motion } from 'framer-motion';
import RiftLogo from './RiftLogo';

export default function Navbar() {
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
          <div className="flex items-center gap-1 border border-border rounded-lg overflow-hidden">
            <a href="/demo" className="text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors font-body text-xs px-3 py-1.5 flex items-center gap-1.5">
              <span>🖥️</span> ATM Demo
            </a>
            <div className="w-px h-5 bg-border" />
            <a href="/admin-demo" className="text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors font-body text-xs px-3 py-1.5 flex items-center gap-1.5">
              <span>📊</span> Operator Demo
            </a>
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