import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function AdminDemo() {
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
              Admin Console Demo
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Explore the RIFT operator dashboard. Monitor transactions, manage hardware, configure commission tiers, and track performance in real-time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-xl font-semibold text-foreground">Live Demo</h2>
              <span className="text-xs font-body text-muted-foreground">Interactive simulation</span>
            </div>
            <iframe 
              src="https://media.base44.com/files/public/69bce5cb012b9c997937b65e/ffe206256_rift-atm-v7.html"
              className="w-full rounded-lg border border-border bg-background"
              style={{ height: '900px' }}
              title="RIFT Admin Console Demo"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Real-Time Analytics</h3>
              <p className="font-body text-sm text-muted-foreground">Track revenue, transaction volume, and commission rates across multiple terminals.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Hardware Monitoring</h3>
              <p className="font-body text-sm text-muted-foreground">Monitor cash levels, printer status, and component health with automated alerts.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Configuration Control</h3>
              <p className="font-body text-sm text-muted-foreground">Adjust commission tiers, KYC rules, and supported assets from anywhere.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}