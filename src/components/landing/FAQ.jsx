import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What cryptocurrencies does RIFT support?",
    a: "RIFT supports all Solana SPL tokens — including SOL, USDC, USDT, wrapped BTC (on Solana), memecoins, and any other token on the Solana network."
  },
  {
    q: "How fast are transactions?",
    a: "Solana transactions finalize in approximately 400 milliseconds. This means RIFT can process crypto deposits and withdrawals almost instantly, compared to 10-60 minute waits on Bitcoin-based ATMs."
  },
  {
    q: "Can RIFT do both cash-to-crypto and crypto-to-cash?",
    a: "Yes! RIFT can be configured as unidirectional (one direction only) or bidirectional (both directions). You choose the configuration that fits your business."
  },
  {
    q: "What if the customer doesn't have a wallet?",
    a: "RIFT can print a paper wallet with the tokens loaded on it. If the customer already has a wallet, tokens are sent directly to their address."
  },
  {
    q: "How does the early bird discount work?",
    a: "Sign up now to be notified when pre-orders launch. Early bird subscribers receive a 25% discount on the RIFT terminal. Limited spots available."
  },
  {
    q: "How does operator risk management work?",
    a: "RIFT can be configured to automatically sell collected cryptocurrency on connected exchanges in real-time, minimizing the operator's exposure to market volatility."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-heading text-xs text-primary tracking-widest uppercase">FAQ</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Questions & Answers
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="font-heading text-sm font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}