import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
export default function Demo() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-body text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Try RIFT Live
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Experience the RIFT terminal interface. See how customers buy crypto with cash, sell crypto for banknotes, and verify identity — all in under 400ms on Solana.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-xl font-semibold text-foreground">Interactive Demo</h2>
              <span className="text-xs font-body text-muted-foreground">Click to interact • Full transaction flow</span>
            </div>
            <div className="w-full rounded-xl overflow-hidden border border-border shadow-2xl" style={{ height: '700px' }}>
              <iframe
                src="https://just-yamap.github.io/rift/"
                title="RIFT ATM Terminal Demo"
                className="w-full h-full"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Insert Cash</h3>
              <p className="font-body text-xs text-muted-foreground">Euro banknotes accepted</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Choose Asset</h3>
              <p className="font-body text-xs text-muted-foreground">15 cryptocurrencies supported</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Instant Settlement</h3>
              <p className="font-body text-xs text-muted-foreground">Solana confirms in 400ms</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Print Wallet</h3>
              <p className="font-body text-xs text-muted-foreground">Paper wallet or scan QR</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}