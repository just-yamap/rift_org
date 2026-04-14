import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const sections = [
  {
    id: "umbra",
    title: "Umbra — Confidential SPL Transfers",
    href: "https://umbra.cash",
    accent: "border-purple-500/30",
    gradient: "from-purple-500/10 to-transparent",
    accentText: "text-purple-400",
    icon: "🛡",
    body: [
      "When you buy crypto at a Rift kiosk, the default delivery uses Umbra's confidential SPL transfer protocol. Instead of a plain on-chain transfer that anyone can trace, Umbra encrypts the transaction amount and the link between the kiosk address and your wallet.",
      "The only parties who can see the full transaction detail are you (holding your private key) and any regulator with a legitimate request — who can decrypt via a published viewing key embedded in the on-chain record.",
      "This means Rift can be privacy-by-default without being compliance-resistant. There is no hidden data, no backdoor — the decryption key is public and auditable. But accessing it requires a specific, deliberate action — not a casual blockchain explorer search.",
    ],
  },
  {
    id: "squads",
    title: "Squads — Multi-Sig Operator Custody",
    href: "https://squads.so",
    accent: "border-green-500/30",
    gradient: "from-green-500/10 to-transparent",
    accentText: "text-green-400",
    icon: "🔐",
    body: [
      "Every Rift operator's Solana vault is secured by a Squads 2-of-3 multi-signature wallet. No single key — not the operator's, not Rift's — can authorize a withdrawal or meaningful action unilaterally.",
      "The three seats in a typical kiosk's Squads wallet are: (1) the operator's daily-driver signing key via Privy, (2) Rift's platform co-signer, and (3) an offline backup key held by the operator.",
      "This means even if an attacker fully compromises the kiosk's software — extracting one key — they still cannot drain the vault. A second independent approval is always required.",
    ],
  },
  {
    id: "ika",
    title: "Ika — MPC Custody for Cross-Chain Receives",
    href: "https://ika.xyz",
    accent: "border-blue-500/30",
    gradient: "from-blue-500/10 to-transparent",
    accentText: "text-blue-400",
    icon: "⛓",
    body: [
      "When you sell native BTC, ETH, or any other non-Solana asset at a Rift kiosk, you send the asset to a receiving address. That address is controlled by Ika's 2PC-MPC (two-party computation / multi-party computation) protocol.",
      "Unlike a standard single-key address, the private key for an Ika-controlled address is never assembled in one place. It is split into shares held by independent parties. Spending from the address requires coordinated computation across those parties — a compromised kiosk only ever sees one share.",
      "After the deposit confirms and the kiosk dispenses cash, Ika's custody protocol liquidates the received asset back to USDC on Solana (via Coinbase or LI.FI), returning capital to the operator's Squads vault.",
    ],
  },
  {
    id: "covalent",
    title: "Covalent GoldRush — Compliance & Risk Screening",
    href: "https://goldrush.dev",
    accent: "border-yellow-500/30",
    gradient: "from-yellow-500/10 to-transparent",
    accentText: "text-yellow-400",
    icon: "✅",
    body: [
      "Every Rift transaction is scored in real time against Covalent GoldRush's wallet risk database before funds move. This catches sanctioned addresses, wallets linked to known drainers or mixers, and addresses flagged in OFAC / EU / UN lists.",
      "The kiosk refuses the transaction automatically if the risk score exceeds the operator-configured threshold. No manual review required for the most obvious cases.",
      "For edge cases, each kiosk operator can also designate a compliance officer who can veto a specific claim before it settles on-chain. The veto is recorded in the on-chain audit trail along with the signed price quote, risk score, and Umbra commitment.",
      "This gives Rift the property of privacy-by-default, transparency-on-subpoena: regular users transact without their details exposed publicly, while legitimate law enforcement can access the full audit trail through proper channels.",
    ],
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24 px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16">
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Privacy</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
            Privacy by design.<br />Compliance by default.
          </h1>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Rift integrates four independent systems to give users genuine financial privacy without sacrificing regulatory compliance. Here's exactly how each one works.
          </p>
        </motion.div>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-card border ${s.accent} rounded-xl p-8 bg-gradient-to-br ${s.gradient}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{s.icon}</span>
                <h2 className={`font-heading text-xl font-bold ${s.accentText}`}>{s.title}</h2>
              </div>
              <div className="space-y-4">
                {s.body.map((para, j) => (
                  <p key={j} className="font-body text-sm text-muted-foreground leading-relaxed">{para}</p>
                ))}
              </div>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 mt-5 font-heading text-xs ${s.accentText} hover:underline`}>
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}