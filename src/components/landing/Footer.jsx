import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
            <span className="font-heading font-bold text-primary-foreground text-xs">R</span>
          </div>
          <span className="font-heading font-bold text-sm tracking-wider text-foreground">RIFT</span>
          <span className="font-body text-xs text-muted-foreground ml-2">Rapid Integrated Fiat Terminal</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#how-it-works" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#features" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#faq" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        </div>

        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} RIFT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}