import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DemoPreview() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs text-primary tracking-widest uppercase">Experience It Live</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Try the RIFT Interface
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            See how customers interact with RIFT. Click through a full transaction flow — from cash insertion to crypto delivery in seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            <iframe 
              src="https://media.base44.com/files/public/69bce5cb012b9c997937b65e/ffe206256_rift-atm-v7.html"
              className="w-full"
              style={{ height: '700px', background: 'transparent' }}
              title="RIFT Terminal Demo"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
          
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            <Link 
              to="/demo"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded font-heading text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg"
            >
              <Play className="w-4 h-4" />
              Full Interactive Demo
            </Link>
            <Link
              to="/admin-demo"
              className="bg-card border border-border text-foreground px-8 py-3.5 rounded font-heading text-sm font-semibold hover:bg-secondary transition-colors flex items-center gap-2 shadow-lg"
            >
              Admin Console
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-24"
        >
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center mx-auto mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-2">Real Interface</h3>
            <p className="font-body text-sm text-muted-foreground">Exact production UI — what customers see</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center mx-auto mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-2">Full Flow</h3>
            <p className="font-body text-sm text-muted-foreground">Complete buy/sell transactions + KYC</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center mx-auto mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-2">Interactive</h3>
            <p className="font-body text-sm text-muted-foreground">Click through every screen and feature</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}