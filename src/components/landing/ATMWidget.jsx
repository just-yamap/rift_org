import React, { useState } from 'react';
import { Terminal, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ATMWidget() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {expanded && (
        <div className="bg-card border border-border rounded-xl shadow-2xl p-4 w-64">
          <div className="flex items-center justify-between mb-3">
            <p className="font-body text-sm font-semibold text-foreground">Try RIFT Live</p>
            <button onClick={() => setExpanded(false)} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="font-body text-xs text-muted-foreground mb-4 leading-relaxed">
            Experience a full cash-to-crypto transaction in the interactive RIFT terminal demo.
          </p>
          <Link
            to="/demo"
            onClick={() => setExpanded(false)}
            className="flex items-center justify-center gap-2 w-full bg-foreground text-background px-4 py-2.5 rounded font-body text-xs font-semibold hover:opacity-80 transition-opacity"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open Full Demo
          </Link>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2.5 bg-foreground text-background px-4 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity font-body text-sm font-semibold"
      >
        <Terminal className="w-4 h-4" />
        {!expanded && <span>Try Demo</span>}
        {expanded && <X className="w-4 h-4" />}
      </button>
    </div>
  );
}