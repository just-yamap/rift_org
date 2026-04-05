import React from 'react';

export default function RiftLogo({ size = 'md', showText = true }) {
  const sizes = {
    sm: { icon: 20, text: 'text-sm', gap: 'gap-1.5' },
    md: { icon: 28, text: 'text-xl', gap: 'gap-2' },
    lg: { icon: 40, text: 'text-3xl', gap: 'gap-3' },
  };
  const s = sizes[size];

  return (
    <div className={`flex items-center ${s.gap}`}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="10" height="24" rx="1.5" fill="white"/>
        <rect x="16" y="2" width="10" height="24" rx="1.5" fill="white"/>
        <rect x="4" y="4" width="2.5" height="20" rx="1" fill="rgba(0,0,0,0.25)"/>
        <rect x="18" y="4" width="2.5" height="20" rx="1" fill="rgba(0,0,0,0.25)"/>
        <rect x="8.5" y="4" width="1.5" height="20" rx="0.75" fill="rgba(255,255,255,0.5)"/>
        <rect x="22.5" y="4" width="1.5" height="20" rx="0.75" fill="rgba(255,255,255,0.5)"/>
      </svg>
      {showText && (
        <span className={`font-heading font-bold ${s.text} tracking-widest text-foreground`}>RIFT</span>
      )}
    </div>
  );
}