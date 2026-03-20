import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, Wrench, Wifi, Shield, Users, TrendingUp, BookOpen, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const steps = [
  {
    icon: Package,
    title: "Order & Delivery",
    description: "Place your order through the early bird program. Standard delivery is 4-6 weeks. White-glove installation available.",
    details: [
      "Secure payment processing",
      "Freight shipping included (US & EU)",
      "Unboxing and initial inspection",
      "Hardware warranty activated"
    ]
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Professional installation takes 2-4 hours. We handle mounting, power, network, and cash module calibration.",
    details: [
      "Mounting on floor or wall",
      "Power and network connections",
      "Cash handler calibration",
      "QR scanner and printer setup"
    ]
  },
  {
    icon: Wifi,
    title: "Network Configuration",
    description: "Connect RIFT to your network via Ethernet, WiFi, or 4G LTE. Redundant connectivity ensures 99.9% uptime.",
    details: [
      "Primary: Ethernet (recommended)",
      "Backup: WiFi or 4G LTE",
      "VPN support for security",
      "Remote monitoring enabled"
    ]
  },
  {
    icon: Shield,
    title: "Compliance & Licensing",
    description: "RIFT handles KYC/AML compliance. You'll need a local money transmitter license (we provide guidance).",
    details: [
      "Built-in KYC verification",
      "Transaction reporting tools",
      "AML compliance dashboard",
      "License application support"
    ]
  },
  {
    icon: Users,
    title: "Operator Training",
    description: "2-hour onsite training covers operations, maintenance, troubleshooting, and customer support best practices.",
    details: [
      "Daily operations walkthrough",
      "Cash replenishment procedures",
      "Basic troubleshooting",
      "Customer service scenarios"
    ]
  },
  {
    icon: TrendingUp,
    title: "Go Live & Optimize",
    description: "Launch your RIFT terminal and start generating revenue. Monitor performance via the operator dashboard.",
    details: [
      "Real-time transaction monitoring",
      "Revenue and fee analytics",
      "Customer usage patterns",
      "Inventory alerts and automation"
    ]
  }
];

const faqs = [
  {
    q: "What licenses do I need?",
    a: "Requirements vary by jurisdiction. Most locations require a money transmitter license or money services business (MSB) registration. RIFT provides compliance documentation and connects you with licensing consultants."
  },
  {
    q: "How much cash do I need on hand?",
    a: "We recommend starting with $5,000-$10,000 per machine. RIFT's smart inventory system alerts you before running low and can auto-sell collected crypto to minimize your exposure."
  },
  {
    q: "What are the ongoing costs?",
    a: "Expect $200-400/month per machine: network connectivity (~$50), cash-in-transit service (~$150), maintenance (~$100), and location rent (varies). RIFT charges a 1% software fee on transactions."
  },
  {
    q: "How do I handle collected crypto?",
    a: "RIFT automatically sells collected tokens via connected exchanges (Coinbase, Kraken, etc.) to USD. You can configure auto-sell thresholds or manual approval. This minimizes crypto price risk."
  },
  {
    q: "What if the machine breaks down?",
    a: "2-year warranty covers parts and labor. Remote diagnostics fix 80% of issues. For hardware failures, we ship replacement parts overnight and provide phone/video support for repairs."
  },
  {
    q: "Can I customize transaction fees?",
    a: "Yes. You set your own markup (typical range: 5-12%). RIFT takes 1% and you keep the rest. Higher-traffic locations can support lower fees."
  }
];

export default function Setup() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-body text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <BookOpen className="w-3 h-3 text-primary" />
              <span className="font-heading text-xs text-primary tracking-wider">OPERATOR GUIDE</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              How to Deploy RIFT
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Everything you need to know about setting up and operating a RIFT terminal network. From installation to compliance to revenue optimization.
            </p>
          </motion.div>

          {/* Setup Steps */}
          <div className="space-y-8 mb-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-heading text-xs text-muted-foreground tracking-wider">STEP {index + 1}</span>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-3">{step.title}</h2>
                    <p className="font-body text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="font-body text-sm text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Operator FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8">See It In Action</h2>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-lg font-semibold text-foreground">Interactive RIFT Interface</h3>
                <Link to="/demo" className="text-primary font-body text-sm hover:underline">Full Demo →</Link>
              </div>
              <iframe 
                src="https://media.base44.com/files/public/69bce5cb012b9c997937b65e/ffe206256_rift-atm-v7.html"
                className="w-full rounded-lg border border-border"
                style={{ height: '600px' }}
                title="RIFT Setup Demo"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
              <p className="font-body text-xs text-muted-foreground mt-4 text-center">
                Click through to experience the KYC flow, payment methods, and transaction processing
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="font-body text-muted-foreground mb-6">
              Join the early bird program and secure your 25% discount on RIFT terminals.
            </p>
            <Link
              to="/#signup"
              className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-heading text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              JOIN EARLY BIRD PROGRAM →
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}