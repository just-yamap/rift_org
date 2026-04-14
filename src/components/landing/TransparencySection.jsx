import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const items = [
  {
    label: "Devnet deployment",
    content: "EC2FRmq3gQSXB27V2XjwDGke8AcE3nURfXbFTW3cU9vm",
    href: "https://explorer.solana.com/address/EC2FRmq3gQSXB27V2XjwDGke8AcE3nURfXbFTW3cU9vm?cluster=devnet",
    linkLabel: "View on Explorer",
  },
  {
    label: "Open source",
    content: "The Anchor program, kiosk UI, and backend connector are public on GitHub.",
    href: "https://github.com/just-yamap/rift",
    linkLabel: "View on GitHub",
    linkIcon: "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/1ce797349_image.png",
  },
  {
    label: "Audit",
    content: "Planned with Adevar Labs — contingent on Colosseum Frontier Hackathon results.",
    href: null,
  },
  {
    label: "Mainnet",
    content: "Contingent on completing the audit. Currently in end-to-end devnet testing.",
    href: null,
  },
];

export default function TransparencySection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Transparency</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Status & Transparency
          </h2>
        </motion.div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-3"
            >
              <span className="font-heading text-xs tracking-widest uppercase text-muted-foreground min-w-[160px] pt-0.5">{item.label}</span>
              <div className="flex-1">
                <p className="font-body text-sm text-foreground leading-relaxed">
                  {item.label === "Devnet deployment" ? (
                    <code className="font-mono text-xs bg-secondary px-2 py-1 rounded text-muted-foreground break-all">{item.content}</code>
                  ) : item.content}
                </p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 font-heading text-xs text-primary hover:underline"
                  >
                    {item.linkIcon
                      ? <img src={item.linkIcon} alt="" className="w-3.5 h-3.5 object-contain rounded-sm" style={{ filter: 'brightness(0) invert(1) opacity(0.8)' }} />
                      : <ExternalLink className="w-3 h-3" />
                    }
                    {item.linkLabel}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}