import React from 'react';
import { motion } from 'framer-motion';

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
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="6" fill="hsl(var(--primary))"/>
            <path d="M9 8H15C17.7614 8 20 10.2386 20 13C20 14.6568 19.1046 16.1046 17.7639 16.8292L21 24H17L14.5 17.5H13V24H9V8Z M13 11V14.5H15C16.1046 14.5 17 13.6046 17 12.5C17 11.3954 16.1046 10.5 15 10.5H13V11Z" fill="hsl(var(--primary-foreground))"/>
          </svg>
          <span className="font-heading font-bold text-xl tracking-wider text-foreground">RIFT</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">How It Works</a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">Features</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">FAQ</a>
        </div>

        <a 
          href="#signup"
          className="bg-primary text-primary-foreground px-5 py-2 rounded font-heading text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          GET EARLY ACCESS
        </a>
      </div>
    </motion.nav>
  );
}