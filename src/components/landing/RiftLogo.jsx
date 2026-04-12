import React from 'react';

const LOGO_URL = "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/bea1b2c82_image.png";

const sizes = { sm: 60, md: 90, lg: 140, xl: 220 };

export default function RiftLogo({ size = 'md', showText }) {
  const w = sizes[size];
  return (
    <img
      src={LOGO_URL}
      alt="RIFT"
      width={w}
      style={{ mixBlendMode: 'screen', display: 'inline-block' }}
    />
  );
}