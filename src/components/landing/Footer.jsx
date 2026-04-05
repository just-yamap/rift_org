import React from 'react';
import RiftLogo from './RiftLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <RiftLogo size="sm" showText={true} />
          <span className="font-body text-xs text-muted-foreground ml-2">Rapid Integrated Fiat Terminal</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="/demo" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Demo</a>
          <a href="#how-it-works" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#features" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="/setup" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Setup Guide</a>
          <a href="/admin-demo" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Admin</a>
        </div>

        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} RIFT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}