import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, ShieldCheck, QrCode, ScanLine, MapPin } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const screens = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
    image: 'https://media.base44.com/images/public/69bce5cb012b9c997937b65e/74575f2ce_2ACD8D22-C6C3-4F56-8945-B893CAA92315.jpg',
    title: 'Home Dashboard',
    description: 'Your RIFT identity card is front and centre — shows your KYC verification status, issuer, and creation date. Three quick-action tiles let you jump directly to KYC, scan the ATM QR code, or find a nearby terminal. Key stats (400ms speed, 15+ assets, $0.001 fee) are pinned at the bottom.',
  },
  {
    id: 'kyc',
    label: 'KYC',
    icon: ShieldCheck,
    image: 'https://media.base44.com/images/public/69bce5cb012b9c997937b65e/785bb8081_3E30335F-545D-449F-83D1-3576BFE3E505.jpg',
    title: 'KYC Verification',
    description: 'A guided identity check that meets eIDAS QeS (Qualified electronic Signature) standards. Four collapsible sections walk you through Registration, Signing, Verifiable Credentials, and Safety & Security. You verify once — RIFT never stores raw biometric data outside encrypted storage — and your credential is reusable at every RIFT terminal worldwide.',
  },
  {
    id: 'qrcode',
    label: 'QR Code',
    icon: QrCode,
    image: 'https://media.base44.com/images/public/69bce5cb012b9c997937b65e/bcb3602d2_86CA910E-115F-44AA-B125-469EF3B92A3F.jpg',
    title: 'Your RIFT KYC Code',
    description: 'Once verified, a unique QR code is generated and tied to your identity credential. Scan it at any RIFT ATM to skip manual KYC entry at the terminal — your tier (Basic / Advanced) and verification status are confirmed instantly. The code also displays your RIFT-KYC reference ID for support queries.',
  },
  {
    id: 'scan',
    label: 'Scan',
    icon: ScanLine,
    image: 'https://media.base44.com/images/public/69bce5cb012b9c997937b65e/27c61456a_5870FF82-DED8-4DDF-95D8-B0A65DEE139B.jpg',
    title: 'Scan ATM Ticket',
    description: 'If the ATM printed you a paper wallet ticket, this screen lets you scan its QR code to extract the private key and import it directly into Phantom, Solflare, or Backpack. Step-by-step instructions guide you through the process, with a clear security warning reminding you never to share your private key.',
  },
  {
    id: 'atmmap',
    label: 'ATM Map',
    icon: MapPin,
    image: 'https://media.base44.com/images/public/69bce5cb012b9c997937b65e/ce4aa637b_IMG_9485.png',
    title: 'Find RIFT ATMs',
    description: 'Switch between a list view and a full map view of every RIFT terminal worldwide. The map pins show live locations across Europe and beyond. Filter by Online, Offline, Maintenance, or Near Me. Each listing shows real-time cash availability, supported operations (Buy / Sell), maximum transaction limit, and opening hours.',
  },
];

export default function RiftConnectDemo() {
  const [active, setActive] = useState(0);
  const screen = screens[active];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Back link */}
          <a href="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Interactive Demo</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 leading-tight">
              RIFT Connect App
            </h1>
            <p className="font-body text-muted-foreground text-lg max-w-2xl">
              The companion app for every RIFT terminal. Verify your identity once, scan your QR at any kiosk, locate ATMs in real time — no waiting, no paperwork.
            </p>
          </motion.div>

          {/* Tab nav */}
          <div className="flex flex-wrap gap-2 mb-10">
            {screens.map((s, i) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-4 py-2 rounded font-heading text-xs font-semibold transition-all ${
                    active === i
                      ? 'bg-foreground text-background'
                      : 'bg-secondary text-muted-foreground hover:text-foreground border border-border'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {s.label}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            {/* Phone mockup */}
            <div className="flex justify-center">
              <div className="relative w-64">
                <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-2xl">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                {screen.title}
              </h2>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
                {screen.description}
              </p>

              {/* Mini nav dots */}
              <div className="flex gap-2">
                {screens.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      active === i ? 'bg-foreground w-6' : 'bg-border hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* All screens strip */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {screens.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`group rounded-xl overflow-hidden border transition-all ${
                  active === i ? 'border-primary/50 ring-1 ring-primary/30' : 'border-border hover:border-primary/30'
                }`}
              >
                <img src={s.image} alt={s.label} className="w-full object-cover" />
                <div className="px-2 py-2 bg-card">
                  <p className={`font-heading text-xs font-semibold text-center ${active === i ? 'text-foreground' : 'text-muted-foreground'}`}>{s.label}</p>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}