import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import { ExternalLink, GitBranch, ShieldCheck } from 'lucide-react';

const PROGRAM_ID = "E5HjBarH8ns7qu9qzrsgkGxkWHNcSzxCZ9aNW93PXCSg";

export default function Transparency() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24 px-6 max-w-4xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16">
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Transparency</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
            Security & Transparency
          </h1>
          <p className="font-body text-muted-foreground text-lg">
            Everything we can show you about Rift's code, on-chain deployment, and security posture.
          </p>
        </motion.div>

        {/* On-chain */}
        <div className="space-y-4 mb-12">
          <h2 className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-4">On-Chain Deployment</h2>

          <div className="bg-card border border-border rounded-xl p-5">
            <p className="font-heading text-xs tracking-widest uppercase text-muted-foreground mb-2">Devnet Program ID</p>
            <code className="font-mono text-sm bg-secondary px-3 py-2 rounded text-muted-foreground break-all block mb-3">{PROGRAM_ID}</code>
            <a href={`https://explorer.solana.com/address/${PROGRAM_ID}?cluster=devnet`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-heading text-xs text-primary hover:underline">
              <ExternalLink className="w-3 h-3" /> View on Solana Explorer (devnet)
            </a>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <p className="font-heading text-xs tracking-widest uppercase text-muted-foreground mb-1">Mainnet</p>
            <p className="font-body text-sm text-muted-foreground">Contingent on completing the Adevar Labs security audit (Colosseum Frontier track). Currently in end-to-end devnet testing.</p>
          </div>
        </div>

        {/* GitHub */}
        <div className="mb-12">
          <h2 className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-4">Open Source</h2>
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div>
              <p className="font-body text-sm text-foreground mb-2">The Anchor program, kiosk UI, and backend connector are fully open source.</p>
              <a href="https://github.com/just-yamap/rift" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-foreground hover:text-primary transition-colors">
                <img src="https://media.base44.com/images/public/69bce5cb012b9c997937b65e/1ce797349_image.png" alt="GitHub" className="w-4 h-4 object-contain" style={{ filter: 'brightness(0) invert(1) opacity(0.8)' }} />
                github.com/just-yamap/rift
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://github.com/just-yamap/rift/tree/user_interface" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-secondary border border-border rounded-lg px-4 py-3 hover:border-primary/40 transition-colors">
                <GitBranch className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <div>
                  <p className="font-heading text-xs font-semibold text-foreground">user_interface</p>
                  <p className="font-body text-xs text-muted-foreground">React kiosk UI</p>
                </div>
              </a>
              <a href="https://github.com/just-yamap/rift/tree/solana_program" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-secondary border border-border rounded-lg px-4 py-3 hover:border-primary/40 transition-colors">
                <GitBranch className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <div>
                  <p className="font-heading text-xs font-semibold text-foreground">solana_program</p>
                  <p className="font-body text-xs text-muted-foreground">Anchor program + backend</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Tests */}
        <div className="mb-12">
          <h2 className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-4">Test Coverage</h2>
          <div className="bg-card border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm text-muted-foreground">End-to-end test sweep passing on every commit — 11 on-chain instructions exercised per run.</p>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm text-muted-foreground">13-case negative-path unit suite covering: quote replay, tier boundary, double-settle, authority bypass, bad royalty recipient, and more.</p>
            </div>
          </div>
        </div>

        {/* Audit */}
        <div className="mb-12">
          <h2 className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-4">Security Audit</h2>
          <div className="bg-card border border-border rounded-xl p-5">
            <p className="font-body text-sm text-muted-foreground">Planned with <strong className="text-foreground">Adevar Labs</strong> — contingent on Colosseum Frontier Hackathon results ($50,000 credits). Mainnet deployment will not happen before the audit is complete.</p>
          </div>
        </div>

        {/* Hackathon */}
        <div className="bg-card border border-border rounded-xl p-5 text-center">
          <p className="font-body text-sm text-muted-foreground">
            Rift is a proud participant in the{' '}
            <a href="https://www.colosseum.com/frontier" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline font-semibold">
              Solana Frontier Hackathon
            </a>{' '}
            by Colosseum.
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}