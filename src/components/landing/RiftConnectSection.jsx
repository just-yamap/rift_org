import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MapPin, ShieldCheck, Zap } from 'lucide-react';

export default function RiftConnectSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Icon and Description */}
          <div>
            <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Smartphone className="w-3.5 h-3.5 text-primary" />
              <span className="font-heading text-xs text-primary tracking-wider">RIFT CONNECT APP</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Setup in<br />Seconds
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              Download RIFT Connect to locate nearby ATMs, complete your KYC verification, and start transacting instantly. When you arrive at a RIFT terminal, you're already verified — fast, secure, and immediate.
            </p>

            <a
              href="https://rift-pass-link.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <img src="https://media.base44.com/images/public/69bce5cb012b9c997937b65e/320d15ebb_image.png" alt="RIFT Connect" className="w-5 h-5" />
              DOWNLOAD RIFT CONNECT
            </a>
          </div>

          {/* Right: Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Find ATMs</h3>
              <p className="font-body text-xs text-muted-foreground">
                Discover all RIFT locations near you in real-time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Verify Once</h3>
              <p className="font-body text-xs text-muted-foreground">
                Complete KYC once, use everywhere. No wait at the ATM.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Instant Access</h3>
              <p className="font-body text-xs text-muted-foreground">
                Fast & secure transactions the moment you arrive.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">iOS & Android</h3>
              <p className="font-body text-xs text-muted-foreground">
                Available on all platforms. Add to home screen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Solana Phone</h3>
              <p className="font-body text-xs text-muted-foreground">
                Will be available on Seeker.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}