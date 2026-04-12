import React from 'react';

const heights = { sm: 'text-lg', md: 'text-2xl', lg: 'text-4xl', xl: 'text-7xl' };

export default function RiftLogo({ size = 'md', showText }) {
  return (
    <span
      className={`font-logo font-bold tracking-widest text-foreground ${heights[size]}`}
      style={{ letterSpacing: '0.2em' }}
    >
      RIFT
    </span>
  );
}