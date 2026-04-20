import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function UserDemo() {
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
              Experience the RIFT kiosk interface. Buy crypto with cash, sell crypto for banknotes, and verify identity — all in under 400ms on Solana.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-xl font-semibold text-foreground">Interactive Kiosk Demo</h2>
              <span className="text-xs font-body text-muted-foreground">Click to interact • Full transaction flow</span>
            </div>
            <div className="w-full rounded-xl overflow-hidden border border-border shadow-2xl" style={{ height: '750px' }}>
              <iframe
                src="https://just-yamap.github.io/rift-demo/atm/"
                title="RIFT ATM Kiosk Demo"
                className="w-full h-full"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}