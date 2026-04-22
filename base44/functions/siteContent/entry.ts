import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  const user = await base44.auth.me();
  if (!user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const content = `
================================================================================
RIFT ATM — COMPLETE WEBSITE CONTENT BRIEF
For AI-assisted redesign. All copy, structure, and data from A to Z.
================================================================================

BRAND
-----
Full name: RIFT — Rapid Integrated Fiat Terminal
Tagline: The first bidirectional, multi-chain, privacy-preserving crypto ATM — built on Solana.
Mission: "Make crypto accessible to everyone, everywhere — one terminal at a time."
Twitter/X: https://x.com/riftatm
Email: contact@riftatm.com
GitHub: https://github.com/just-yamap/rift
App: https://rift-pass-link.base44.app
Design: Dark theme, near-black background (#0A0A0A), white text, Poppins (headings), Inter (body)

================================================================================
SECTION 1 — NAVBAR
================================================================================
Logo: RIFT wordmark
Nav links: How It Works | Operators | Assets | Transparency | Contact | Demo (dropdown: ATM Interface / Operator Dashboard)
CTA buttons: "Connect" (RIFT Connect app) | "EARLY BIRD →" (scrolls to signup)

================================================================================
SECTION 2 — HERO
================================================================================
Badge: "POWERED BY SOLANA" (with pulsing dot)
Main headline: RIFT (large logo/wordmark)
Subheadline: The first bidirectional, multi-chain, privacy-preserving crypto ATM — built on Solana.
Body:
  - Insert cash, walk away with native BTC, ETH, SOL, or any verified SPL token.
  - Sell any supported asset back to cash, instantly. No account required. No wrapped tokens. No compromises.
CTAs:
  - "FIND A KIOSK →" (primary)
  - "OPERATE A KIOSK" (secondary, links to /operator)
Stats:
  - 400ms — Transaction Speed
  - All SPL — + BTC, ETH & more (beta)
  - $0.001 — Avg. Fee
Visual: ATM machine photo (sleek, futuristic, dark terminal)

================================================================================
SECTION 3 — INFO BAR (metrics strip)
================================================================================
• 400ms — Transaction Speed — Average Solana confirmation time
• Cash → Crypto — Bidirectional — Buy or sell in one terminal
• All SPL Tokens — Token Support — SOL, USDC, BONK, BTC, ETH & more
• Built-in KYC — Compliance Ready — AML & identity verification included
• 99.9% — Uptime SLA — Remote monitoring 24/7

================================================================================
SECTION 4 — EARLY BIRD SIGNUP
================================================================================
Badge: "EARLY BIRD PRICING"
Headline: Be First In Line
Body: Sign up now to get notified when pre-orders go live. Early birds get exclusive pricing on the RIFT terminal.
Form fields:
  - Your Name
  - your@email.com
  - ATM location — city, country or venue (e.g. Paris, France)
  - How many machines? (1 / 2 / 3 / 5 / 10+)
CTA button: "SECURE MY SPOT"
Progress bar: [X] signed up | Goal: 500 | [X] spots remaining for early bird pricing
Post-submit: "You're on the list! We'll notify you when pre-orders open." + confirmation email sent note

================================================================================
SECTION 5 — VISION / CORE PILLARS
================================================================================
Label: "Our Vision"
Headline: BRIDGING THE PHYSICAL & DIGITAL
Body: Crypto has transformed finance — but the barrier between physical cash and digital assets remains massive. RIFT was built to eliminate that gap, permanently.

4 Pillars:
1. Instant Conversion — Insert cash, receive any SPL token in under 400ms. No app, no account, no waiting.
2. Non-Custodial — Your keys, your crypto. RIFT never holds your funds — everything goes directly to your wallet.
3. Universal Access — Deploy anywhere — malls, airports, offices. Any location becomes a crypto on-ramp.
4. Jupiter-Powered — Best swap rates via Jupiter aggregator. Every transaction is optimized for maximum value.

Mission callout: "Make crypto accessible to everyone, everywhere — one terminal at a time."

================================================================================
SECTION 6 — RIFT CONNECT APP
================================================================================
Badge: "RIFT CONNECT APP"
Headline: Setup in Seconds
Body: Download RIFT Connect to locate nearby ATMs, complete your KYC verification, and start transacting instantly. When you arrive at a RIFT terminal, you're already verified — fast, secure, and immediate.
CTA: "DOWNLOAD RIFT CONNECT" → https://rift-pass-link.base44.app

Features:
1. Find ATMs — Discover all RIFT locations near you in real-time.
2. Verify Once — Complete KYC once, use everywhere. No wait at the ATM.
3. Instant Access — Fast & secure transactions the moment you arrive.
4. iOS & Android — Available on all platforms. Add to home screen.
5. Solana Phone — Will be available on Seeker.

================================================================================
SECTION 7 — HOW IT WORKS (Bidirectional)
================================================================================
Label: "How It Works"
Headline: BOTH DIRECTIONS
Body: RIFT handles the full cycle — deposit cash to get crypto, or convert crypto back to cash. On the spot.

CASH IN (Fiat → Crypto) — 8 steps:
01. Insert Cash — Feed EUR banknotes into the bill acceptor
02. Live Amount Display — Real-time fiat value shown on screen
03. Select Crypto — Pick any SPL token — SOL, USDC, BONK & more
04. Rate & Quote — Best swap route via Jupiter aggregator
05. Connect Wallet — Scan QR, enter address — or RIFT prints a paper wallet for you
06. KYC Verification — App-based or on-device identity check
07. Confirm & Send — Crypto lands in your wallet in ~400ms
08. Receipt Printed — Full transaction record printed on the spot

CASH OUT (Crypto → Fiat) — 8 steps:
01. Scan Wallet — QR scan or NFC tap to read your address
02. View Balances — All your SPL token balances displayed live
03. Choose Crypto & Amount — Select token and how much to convert
04. Select Denominations — Pick the banknote mix you want dispensed
05. Fees & Conversion — Live rate, commission, and net EUR shown
06. KYC / AML Check — App-based or on-device compliance check
07. Send Crypto — Confirm on your wallet — transaction broadcasts
08. Cash Dispensed — Banknotes issued + receipt printed instantly

Badges: KYC / AML COMPLIANT | JUPITER-POWERED SWAPS | PRINTED RECEIPT

================================================================================
SECTION 8 — FEATURES
================================================================================
Label: "Capabilities"
Headline: Built Different
Body: RIFT isn't just another crypto ATM. It's the first terminal built from the ground up for Solana's speed.

6 Features:
1. All SPL Tokens — Supports every Solana SPL token — SOL, USDC, wrapped BTC, memecoins, and everything in between.
2. Solana Speed — Transactions confirm in ~400ms. No more waiting 10+ minutes like legacy crypto ATMs.
3. Jupiter Integration — Auto-buy or sell ANY SPL token via Jupiter aggregator. Instant liquidity for every token on Solana.
4. Wallet Printing — No wallet? No problem. RIFT prints a paper wallet or sends tokens directly to an existing address.
5. Bidirectional — Cash → Crypto or Crypto → Cash. Configure RIFT as unidirectional or bidirectional per your needs.
6. Built-in KYC Verification — Full identity verification at the kiosk — or remotely via the RIFT Connect app before you arrive. Compliant with regulatory requirements.

================================================================================
SECTION 9 — SUPPORTED ASSETS
================================================================================
Label: "Supported"
Headline: Trade Everything
Body: Buy and sell from a growing list of verified Solana tokens, wrapped assets, and native chains.

SPL Tokens:
- SOL (Solana)
- USDC (USD Coin)
- JUP (Jupiter)
- BONK (Bonk)
- BSD (Brazilian Stable Dollar)

Wrapped Assets:
- wBTC (Wrapped Bitcoin — on Solana)
- wETH (Wrapped Ethereum — on Solana)

Native Assets (BETA — Coming Soon):
- BTC (Bitcoin — native, via LI.FI cross-chain routing)
- ETH (Ethereum — native on Ethereum mainnet)

Callout: "Want to trade something else? Search any verified SPL token on Jupiter at the kiosk. If it has sufficient liquidity, you can buy it instantly. Native BTC and ETH delivery coming soon via LI.FI cross-chain routing."

================================================================================
SECTION 10 — INTEROPERABILITY / NATIVE CHAINS
================================================================================
Label: "Interoperability"
Headline: Solana at the core. Every asset in reach.
Body: Every Rift transaction settles on Solana — the fastest, cheapest settlement layer in crypto. Need to reach another chain? Rift handles the routing invisibly.

3 Steps:
01. Insert cash. — The kiosk accepts euros, dollars, reais — any supported fiat. No account, no app, no seed phrase.
02. Settle on Solana. — Your transaction clears on Solana in under 400ms. Sub-cent fees, on-chain transparency, zero intermediaries.
03. Reach any chain. — Want native BTC or ETH delivered cross-chain? Powered by LI.FI, Rift routes your asset just-in-time — no wrapped tokens, no bridge UI.

Callout: "Capital-efficient for operators: no pre-funded multi-chain inventory. Every cross-chain delivery is sourced just-in-time through LI.FI's solver network, with the operator's safety buffer protecting against slippage. The operator never loses on a price move."

================================================================================
SECTION 11 — PRIVACY BY DESIGN
================================================================================
Label: "Privacy"
Headline: Privacy by design, compliance by default.
Body: How your money stays private.

4 Cards:
1. Umbra confidential transfers
   Partner: Umbra (umbra.cash)
   Body: Every buy can be delivered via Umbra's confidential SPL transfer protocol. Transaction amount and the link between the kiosk and your wallet stay encrypted on-chain. Regulators with a legitimate request can decrypt via a published viewing key — nobody else can.

2. Squads multi-sig custody
   Partner: Squads (squads.so)
   Body: Every operator's Solana vault is secured by a Squads 2-of-3 multi-signature wallet. No single key can drain the kiosk. Any meaningful action needs approval from two independent parties.

3. Ika MPC for cross-chain receives
   Partner: Ika (ika.xyz)
   Body: When you sell native BTC or ETH, your deposit goes to an address controlled by Ika's 2PC-MPC protocol. Even if the kiosk's software is compromised, attackers only ever hold a single share. The received asset stays safe.

4. Compliance built in
   Partner: Covalent GoldRush (goldrush.dev)
   Body: Every transaction gets a real-time wallet risk score via Covalent GoldRush. Sanctioned addresses, drainer-linked wallets, known mixer interactions — all refused automatically. Each kiosk operator can also designate a compliance officer who can veto suspicious claims before settlement. Privacy-by-default; transparency-on-subpoena.

================================================================================
SECTION 12 — INFRASTRUCTURE
================================================================================
Label: "Infrastructure"
Headline: Sub-second finality. Sub-cent fees.
Body: Built on the fastest infrastructure in crypto.

11 Infrastructure Partners:
1. Solana — Settlement layer. Millisecond confirmations, sub-cent fees at any scale.
2. Anchor — The Rust framework securing Rift's on-chain program. 18 instructions deployed on devnet.
3. Jupiter — Best-price SPL swap aggregator. Integrated via the Developer Platform Swap V2 API.
4. LI.FI — Universal liquidity infrastructure. Aggregates 20+ bridges across 60+ chains. Native BTC + ETH delivery.
5. MagicBlock — Ephemeral Rollups give the kiosk flow sub-200ms finality, then commit back to mainnet.
6. RPC Fast — Dedicated low-latency Solana RPC (Frankfurt region). 500 req/s baseline.
7. Privy — Operator wallet authentication. Email/social/passkey login — no seed phrase on a Post-it.
8. Umbra — Confidential SPL transfers with viewing-key-based regulatory decryption.
9. Squads — Solana-native 2-of-3 multi-sig for operator + platform custody. No single key can drain a kiosk.
10. Ika — 2PC-MPC dWallets for secure native BTC/ETH/other-chain custody.
11. Covalent — Real-time wallet risk scoring and sanctions screening on every transaction.

================================================================================
SECTION 13 — TECH STACK
================================================================================
Label: "Built With"
Headline: ENTERPRISE-GRADE TECH STACK
Body: Every layer of RIFT is built with production-grade tools — from Rust smart contracts on Solana to physical cash hardware integration.

ON-CHAIN / SETTLEMENT:
- Solana (mainnet-beta) — L1 blockchain
- Anchor 0.31.1 — Rust smart contract framework
- SPL Token Standard — Token standard
- Associated Token Program — ATA management
- Jupiter v6 / Swap V2 — Developer Platform swap
- LI.FI cross-chain router — Native BTC / ETH / other-chain delivery

PRIVACY + COMPLIANCE:
- Umbra SDK — Confidential SPL transfers, viewing-key regulatory decryption
- Encrypt (REFHE) — Fully-homomorphic-encrypted vault balances
- Ika 2PC-MPC — dWallet multi-party custody + cross-chain signing
- Covalent GoldRush — Real-time wallet risk scoring, sanctions screening

PERFORMANCE:
- MagicBlock Ephemeral Rollups — Sub-200ms session finality
- RPC Fast — Dedicated low-latency Solana RPC (Frankfurt region)

BACKEND SERVICES:
- Node.js — Runtime
- @coral-xyz/anchor — Anchor client SDK
- @solana/web3.js + spl-token — Solana JS stack
- Privy server SDK — Operator wallet signing
- WebSocket bridges — NV200 cash unit + ESC/POS thermal printer

FRONTEND:
- React 19 — UI framework
- 9-language i18n — EN FR DE ES IT PT RU UA ZH
- Chromium kiosk mode — Production terminal display
- Framer Motion — Animations & transitions

HARDWARE (Prototype):
- JCM NV200 — Cash acceptor/dispenser (SSP over RS-232)
- ESC/POS 80mm Printer — Thermal receipt printer
- Raspberry Pi 5 — Or x86 mini-PC host

SECURITY:
- Adevar Labs — Scheduled protocol audit (Colosseum Frontier security track)
- 5-min claim TTL — Auto-refund on timeout
- Hard-capped commissions — 1–15%, operator-configurable
- Hard-capped safety buffer — ≤ 5% max
- Kill Switches — Platform-side + operator-side

HACKATHON TRACKS (Colosseum Frontier):
- Colosseum Frontier — Main Track
- Jupiter — Developer Platform
- Umbra — Privacy Track
- Covalent GoldRush — Data Track
- Dune SIM — Analytics Track
- RPC Fast — Infra Track
- Adevar Labs — Security Audit
- 100xDevs — Open Track

================================================================================
SECTION 14 — BUSINESS MODEL
================================================================================
Label: "Business Model"
Headline: THREE REVENUE STREAMS
Body: Three stacking revenue streams, on-chain transparent, operator-controlled.

3 Revenue Streams:
1. Commission (1–15%)
   Operator-set per kiosk, tiered by transaction amount. Different tiers for buys vs sells. Adjustable in real time from the admin dashboard.

2. Delta profit from the safety buffer
   Every transaction reserves 0–5% against adverse price moves between the UI quote and the cash drop. Any unused buffer is recorded on-chain as accrued_delta_usdc — pure profit on favorable ticks. Operator never loses on slippage.

3. Capital efficiency
   Hold only USDC + SOL. No multi-chain inventory. Every native-asset delivery (BTC, ETH, etc.) is sourced just-in-time by LI.FI solvers. Every native-asset receipt is liquidated back to USDC on-chain automatically.

On-chain counters:
- total_buy_volume_usdc
- total_sell_volume_usdc
- accrued_commission_usdc
- accrued_delta_usdc

================================================================================
SECTION 15 — ROADMAP
================================================================================
Label: "Roadmap"
Headline: THE PATH FORWARD
Body: RIFT is on an aggressive expansion trajectory. Here's what's coming.

Phase 01 — Waitlist Sign Up [ACTIVE]
Join the RIFT waitlist. Secure your spot and get notified as soon as early access opens.

Phase 02 — Open Early Bird Access
Waitlist members get first access when pre-orders open. Pricing will be announced exclusively to early bird subscribers.

Phase 03 — Public Access
Full public launch. RIFT terminals available globally at standard pricing.

================================================================================
SECTION 16 — TRANSPARENCY / SECURITY
================================================================================
Label: "Transparency"
Headline: Security & Transparency

Items:
- Devnet deployment: E5HjBarH8ns7qu9qzrsgkGxkWHNcSzxCZ9aNW93PXCSg → View on Solana Explorer
- Open source: Anchor program, kiosk UI, and backend connector public on GitHub (github.com/just-yamap/rift)
  - Branch: user_interface
  - Branch: solana_program
- Test coverage: End-to-end sweep passing on every commit (11 on-chain instructions). 13-case negative-path unit suite covering quote replay, tier boundary, double-settle, authority bypass, bad royalty recipient, and more.
- Audit: Planned with Adevar Labs — contingent on Colosseum Frontier Hackathon results ($50,000 credits).
- Mainnet: Contingent on completing the Adevar Labs audit. Currently in end-to-end devnet testing.

Hackathon banner: "Rift is a proud participant in the Solana Frontier Hackathon by Colosseum."

================================================================================
SECTION 17 — FAQ
================================================================================
Q: What cryptocurrencies does RIFT support?
A: RIFT supports all Solana SPL tokens — including SOL, USDC, USDT, wrapped BTC (on Solana), memecoins, and any other token on the Solana network.

Q: How fast are transactions?
A: Solana transactions finalize in approximately 400 milliseconds. This means RIFT can process crypto deposits and withdrawals almost instantly, compared to 10-60 minute waits on Bitcoin-based ATMs.

Q: Can RIFT do both cash-to-crypto and crypto-to-cash?
A: Yes! RIFT can be configured as unidirectional (one direction only) or bidirectional (both directions). You choose the configuration that fits your business.

Q: What if the customer doesn't have a wallet?
A: RIFT can print a paper wallet with the tokens loaded on it. If the customer already has a wallet, tokens are sent directly to their address.

Q: How does the early bird discount work?
A: Sign up now to be notified when pre-orders launch. Early bird subscribers receive a 25% discount on the RIFT terminal. Limited spots available.

Q: How does Jupiter integration work?
A: RIFT is connected to Jupiter aggregator, allowing automatic buying or selling of ANY SPL token at the best rates across all Solana DEXs. This means instant liquidity for every token, from SOL to the newest memecoins.

Q: Is KYC verification required?
A: Yes, RIFT has built-in KYC verification for both cash-in and cash-out transactions to ensure regulatory compliance. The verification process is quick and seamless.

================================================================================
SECTION 18 — FOOTER
================================================================================
Tagline: Rapid Integrated Fiat Terminal
CTA: "Get early bird pricing →"

Links:
PRODUCT: How It Works | Assets | Operators | Try Demo
RESOURCES: GitHub | Setup Guide | Transparency
COMMUNITY: X / Twitter | Contact (contact@riftatm.com)
LEGAL: Privacy

Legal disclaimer: RIFT ATM is a hardware and software manufacturer only. We do not operate machines, provide liquidity, custody funds, or perform swaps. The operator is fully responsible for all licensing, compliance, AML/KYC, and legal obligations in their jurisdiction.

================================================================================
ADDITIONAL PAGES
================================================================================

OPERATOR PAGE (/operator)
--------------------------
Headline: Run The Future of Crypto ATMs
Body: Join a growing network of RIFT operators. Deploy at hotels, malls, offices, or public venues. We provide the hardware, software, and full operational support.

Deployment Steps:
1. Apply & Get Approved — Fill out our operator form. We review your location(s) and use case.
2. Order Your Machine(s) — Reserve units at early bird pricing. Hardware ships within 4-6 weeks of production.
3. Install the Hardware — Wall-mount or freestanding. Connects to standard power + internet. Setup in under 2 hours.
4. Configure Your Network — Admin dashboard: set commission %, choose assets, configure compliance thresholds.
5. Activate & Go Live — Complete remote QA. RIFT team signs off. Your machine is live.
6. Monitor & Earn — Real-time analytics. Commission + buffer profits appear on-chain. Withdraw anytime.

Revenue Streams for Operators:
- Commission (1–15%) — Configurable per transaction type and tier
- Safety buffer delta — Profit from favorable price moves (up to 5%)
- Capital efficient — Hold USDC + SOL only, no multi-chain inventory required

Hardware Specs:
- Cash acceptor: JCM NV200 (SSP over RS-232)
- Printer: ESC/POS 80mm thermal receipt printer
- Host: Raspberry Pi 5 or x86 mini-PC
- Display: Touchscreen (Chromium kiosk mode)
- Connectivity: Standard internet (ethernet/WiFi)
- Languages: 9 — EN FR DE ES IT PT RU UA ZH

ASSETS PAGE (/assets)
----------------------
Headline: Every Asset. Every Chain.

TRANSPARENCY PAGE (/transparency)
-----------------------------------
Same content as Section 16 above, but as a full standalone page.

DEMO PAGE (/demo)
------------------
Headline: Try RIFT Live
Body: Experience the full RIFT terminal flow in your browser — no hardware needed.
Embedded interactive demo (GitHub Pages iframe)
Features: Insert Cash | Choose Asset | Instant Settlement | Print Wallet

ADMIN DEMO PAGE (/admin-demo)
------------------------------
Headline: Operator Dashboard — Live Demo
Body: Explore the full RIFT admin console — analytics, hardware status, and configuration.
Features: Real-Time Analytics | Hardware Monitoring | Configuration Control

================================================================================
DESIGN TOKENS / BRAND COLORS
================================================================================
Background: #0A0A0A (near-black)
Foreground: #F5F5F5 (near-white)
Card: #141414
Border: ~#292929
Muted foreground: #808080
Primary: foreground (white on dark)
Accent tones: purple, blue, green, orange (for privacy/infra section cards)
Font heading: Poppins (400–800)
Font body: Inter (300–700)
Border radius: 0.5rem (cards, badges), pill (tags)

================================================================================
END OF CONTENT BRIEF
================================================================================
`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'attachment; filename="RIFT_Website_Content_Brief.txt"',
    },
  });
});