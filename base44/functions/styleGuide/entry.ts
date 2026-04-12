import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  const content = `
=====================================
  RIFT — ATM UI STYLE GUIDE
  Rapid Integrated Fiat Terminal
=====================================

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  COLORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background (main):     #0A0A0A  (hsl 0 0% 4%)
Background (card):     #141414  (hsl 0 0% 8%)
Background (secondary):#1F1F1F  (hsl 0 0% 12%)
Background (muted):    #242424  (hsl 0 0% 14%)

Foreground (text):     #F5F5F5  (hsl 0 0% 96%)
Muted text:            #808080  (hsl 0 0% 50%)
Accent text:           #D9D9D9  (hsl 0 0% 85%)

Border:                #292929  (hsl 0 0% 16%)
Primary (white):       #F5F5F5
Primary foreground:    #0A0A0A

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TYPOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Heading Font:   Poppins (weights: 400, 500, 600, 700, 800)
Body Font:      Inter   (weights: 300, 400, 500, 600, 700)
Google Fonts URL:
  https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800

Type Scale:
  Hero title:      64–72px, Poppins 800, #F5F5F5, letter-spacing: tight
  Section title:   48–60px, Poppins 700, #F5F5F5
  Card title:      18–20px, Poppins 600, #F5F5F5
  Body text:       14–16px, Inter 400, #808080, line-height: 1.6
  Labels/badges:   11–12px, Poppins 500, tracking: 0.1em, UPPERCASE
  Stat numbers:    40–48px, Poppins 700, #F5F5F5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  SPACING & RADIUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Border radius (cards):   12px
Border radius (buttons): 6px
Border radius (badges):  999px (pill)
Card padding:            24–32px
Section padding:         96px vertical, 24px horizontal
Gap between elements:    16–24px

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  BUTTONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Primary button:
  bg: #F5F5F5 | text: #0A0A0A | padding: 14px 32px
  font: Poppins 600 14px | radius: 6px
  hover: opacity 80%

Secondary button:
  bg: transparent | border: 1px solid #292929
  text: #F5F5F5 | hover: bg #1F1F1F

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ATM SCREEN COPY (from demo UI)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- HOME SCREEN --
Title:        RIFT
Subtitle:     RAPID INTEGRATED FIAT TERMINAL
Tagline:      The world's first Solana-native ATM
Stats:        "◎ Solana Native"  |  "15 Assets"  |  "400ms Settlement"
CTA button:   TAP TO BEGIN

-- MENU SCREEN --
Title:        What would you like?
Step label:   Step 01

Option 1:     Buy Crypto
  Body:       Insert cash or pay by card. Receive BTC, ETH, SOL + 12 more.
  Tags:       Instant settlement · 15 assets

Option 2:     Sell Crypto → Cash
  Body:       Send crypto to our address. Receive EUR banknotes.
  Tags:       Print ticket · Return to collect

Option 3:     Check Pending
  Body:       Scan your ticket QR or enter reference to collect cash.
  Tags:       Scan ticket · Collect cash

-- BUY CRYPTO — CHOOSE ASSET --
Title:        Choose Asset
Step label:   Step 02
Assets shown: BTC · ETH · SOL · USDC · USDT · DOGE

-- BUY CRYPTO — PAYMENT --
Title:        How to Pay?
Step label:   Step 03 › Buy

Option 1:     Cash
  Body:       EUR banknotes — €5 €10 €20 €50 €100 €200
  Tags:       No fee · Anonymous <€200 · Recommended

Option 2:     Apple / Google Pay
  Body:       Face ID / Fingerprint authentication
  Tags:       +1.5% fee

Option 3:     Visa / Mastercard
  Body:       Chip+PIN or contactless. Requires SMS OTP
  Tags:       +1.5% fee

-- SELL CRYPTO --
Title:        Sell Details
Step label:   Step 03 › Sell
Live Rate:    1 BTC = €77,892
Commission:   5%
Prompt:       How much EUR do you want?
Amounts:      €50 · €100 · €200 · €500
Warning:      ⚠️ Send correct coin on correct network only. Wrong chain = permanent loss.

-- SUCCESS SCREEN --
Title:        Transaction Complete
Line 1:       Confirmed on Solana in <400ms
Line 2:       ◎ Solana · Jupiter DEX
Receipt title:RIFT Receipt
Fields:       Transaction ID · Status: ✓ Confirmed · Network: Solana · Speed: 387ms
Buttons:      New Transaction · Return to Home

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  BRAND COPY (landing page)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tagline:      "POWERED BY SOLANA"
Full name:    Rapid Integrated Fiat Terminal
Hero sub:     Rapid  Integrated  Fiat  Terminal

Stats:
  400ms       — Transaction Speed
  All SPL     — Tokens Supported
  $0.001      — Avg. Fee
  99.9%       — Uptime SLA

Mission:      "Make crypto accessible to everyone, everywhere — one terminal at a time."

Info bar items:
  400ms           Transaction Speed / Average Solana confirmation time
  Cash → Crypto   Bidirectional / Buy or sell in one terminal
  All SPL Tokens  Token Support / SOL, USDC, BONK & every Solana token
  Built-in KYC    Compliance Ready / AML & identity verification included
  99.9%           Uptime SLA / Remote monitoring 24/7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  LOGO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Logo image URL:
  https://media.base44.com/images/public/69bce5cb012b9c997937b65e/d6fd69fe3_image.png
Usage:        White wordmark on dark/black background
Blend mode:   mix-blend-mode: screen (for transparent integration)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  CONTACT & SOCIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email:        atmrift@gmail.com
Twitter/X:    @riftatm  (https://x.com/riftatm)

=====================================
  © RIFT 2026 — All rights reserved
=====================================
`.trim();

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'attachment; filename="RIFT_ATM_StyleGuide.txt"',
    }
  });
});