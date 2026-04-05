import React from 'react';

const LOGO_URL = "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/47faa9ecb_image.png";

export default function RiftLogo({ size = 'md' }) {
  const heights = { sm: 18, md: 24, lg: 36 };
  const h = heights[size];

  return (
    <img
      src={LOGO_URL}
      alt="RIFT"
      style={{ height: h, filter: 'invert(1)', display: 'block' }}
    />
  );
}