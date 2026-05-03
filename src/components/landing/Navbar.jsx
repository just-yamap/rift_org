import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import RiftLogo from './RiftLogo';
import ContactForm from './ContactForm';

export default function Navbar() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <RiftLogo size="md" showText={true} />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">How It Works</a>
          <a href="/operator" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">Operators</a>
          <a href="/assets" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">Assets</a>
          <a href="/transparency" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">Transparency</a>
          <button onClick={() => setContactOpen(true)} className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">Contact</button>

          {/* Demo dropdown */}
          <div className="relative" onMouseEnter={() => setDemoOpen(true)} onMouseLeave={() => setDemoOpen(false)}>
            <button className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm flex items-center gap-1">
              Demo
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
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-card/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                >
                  <a href="/demo" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors">
                    <div>
                      <p className="font-heading text-xs font-semibold text-foreground">ATM Interface</p>
                      <p className="font-body text-xs text-muted-foreground">Customer-facing terminal</p>
                    </div>
                  </a>
                  <div className="h-px bg-white/5" />
                  <a href="/admin-demo" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors">
                    <div>
                      <p className="font-heading text-xs font-semibold text-foreground">Operator Dashboard</p>
                      <p className="font-body text-xs text-muted-foreground">Analytics & management</p>
                    </div>
                  </a>
                  <div className="h-px bg-white/5" />
                  <a href="/rift-connect-demo" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors">
                    <div>
                      <p className="font-heading text-xs font-semibold text-foreground">RIFT Connect</p>
                      <p className="font-body text-xs text-muted-foreground">Companion app walkthrough</p>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://rift-pass-link.base44.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
          >
            <Smartphone className="w-3.5 h-3.5" />
            Connect
          </a>
          <a
            href="#signup"
            className="bg-foreground text-background px-5 py-2 rounded font-heading text-sm font-semibold hover:opacity-80 transition-opacity"
          >
            EARLY BIRD →
          </a>
        </div>
      </div>
      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </motion.nav>
  );
}