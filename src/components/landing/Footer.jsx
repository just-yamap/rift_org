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

const columns = [
  {
    label: "PRODUCT",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Assets", href: "/assets" },
      { label: "Operators", href: "/operator" },
      { label: "Try Demo", href: "/demo" },
    ],
  },
  {
    label: "RESOURCES",
    links: [
      { label: "GitHub", href: "https://github.com/just-yamap/rift", external: true },
      { label: "Setup Guide", href: "/setup" },
      { label: "Transparency", href: "/transparency" },
    ],
  },
  {
    label: "COMMUNITY",
    links: [
      { label: "X / Twitter", href: "https://x.com/riftatm", external: true },
      { label: "Contact", href: "mailto:contact@riftatm.com" },
    ],
  },
  {
    label: "LEGAL",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Download Style Guide", onClick: downloadStyleGuide },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">

        {/* Top bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-10 border-b border-border/40">
          <div>
            <RiftLogo size="sm" showText={true} />
            <p className="font-body text-xs text-muted-foreground mt-1">Rapid Integrated Fiat Terminal</p>
          </div>
          <a
            href="#signup"
            className="self-start sm:self-auto font-body text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            Get early bird pricing →
          </a>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-10 border-b border-border/40">
          {columns.map((col) => (
            <div key={col.label}>
              <p className="font-heading text-xs tracking-widest text-muted-foreground mb-4">{col.label}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-start gap-4">
          <p className="font-body text-xs text-muted-foreground/50">© {new Date().getFullYear()} RIFT. All rights reserved.</p>
          <p className="font-body text-xs text-muted-foreground/40 sm:ml-auto max-w-xl leading-relaxed">
            RIFT ATM is a hardware and software manufacturer only. We do not operate machines, provide liquidity, custody funds, or perform swaps. The operator is fully responsible for all licensing, compliance, AML/KYC, and legal obligations in their jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  );
}