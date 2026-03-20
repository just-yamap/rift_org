import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="6" fill="hsl(var(--primary))"/>
            <path d="M9 8H15C17.7614 8 20 10.2386 20 13C20 14.6568 19.1046 16.1046 17.7639 16.8292L21 24H17L14.5 17.5H13V24H9V8Z M13 11V14.5H15C16.1046 14.5 17 13.6046 17 12.5C17 11.3954 16.1046 10.5 15 10.5H13V11Z" fill="hsl(var(--primary-foreground))"/>
          </svg>
          <span className="font-heading font-bold text-sm tracking-wider text-foreground">RIFT</span>
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