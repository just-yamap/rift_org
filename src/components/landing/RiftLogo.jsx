import React from 'react';

const LOGO_URL = "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/47faa9ecb_image.png";

export default function RiftLogo({ size = 'md', showText }) {
  const heights = { sm: 18, md: 24, lg: 36, xl: 80 };
  const h = heights[size];

  return (
    <img
      src={LOGO_URL}
      alt="RIFT"
      style={{ height: h, display: 'block', mixBlendMode: 'screen', filter: 'brightness(10)' }}
    />
  );
}