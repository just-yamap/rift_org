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
          <a href="/setup" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">Setup Guide</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">FAQ</a>
        </div>

        <a 
          href="#signup"
          className="bg-foreground text-background px-5 py-2 rounded font-heading text-sm font-semibold hover:opacity-80 transition-opacity"
        >
          GET EARLY ACCESS
        </a>
      </div>
    </motion.nav>
  );
}