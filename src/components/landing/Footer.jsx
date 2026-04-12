import React from 'react';
import RiftLogo from './RiftLogo';
import { base44 } from '@/api/base44Client';
import { Download } from 'lucide-react';

async function downloadStyleGuide() {
  const response = await base44.functions.invoke('styleGuide', {});
  const text = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'RIFT_ATM_StyleGuide.txt';
  a.click();
  URL.revokeObjectURL(url);
}

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <RiftLogo size="sm" showText={true} />
          <span className="font-body text-xs text-muted-foreground ml-2">Rapid Integrated Fiat Terminal</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="/demo" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">ATM User Demo</a>
          <a href="/admin-demo" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Operator Dashboard Demo</a>
          <a href="#how-it-works" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#features" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="/setup" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Setup Guide</a>
        </div>

        <div className="flex items-center gap-6">
          <a href="mailto:atmrift@gmail.com" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            atmrift@gmail.com
          </a>
          <a href="https://x.com/riftatm" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            @riftatm
          </a>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} RIFT. All rights reserved.
        </p>
        <button
          onClick={downloadStyleGuide}
          className="flex items-center gap-1.5 font-body text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <Download className="w-3 h-3" />
          Download Style Guide
        </button>
      </div>
    </footer>
  );
}