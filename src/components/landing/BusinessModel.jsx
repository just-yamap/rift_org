import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, MapPin, Monitor, Building2 } from 'lucide-react';

const streams = [
  {
    icon: DollarSign,
    title: "Transaction Fees",
    description: "Earn a percentage on every transaction processed through your terminal — cash-in or cash-out."
  },
  {
    icon: MapPin,
    title: "Location Revenue Share",
    description: "Split earnings with host locations — malls, hotels, convenience stores & more."
  },
  {
    icon: MapPin,
    title: "Increased Foot Traffic",
    description: "A RIFT terminal draws a new category of crypto-native customers to your location — people actively looking to convert cash or withdraw funds on the spot."
  },
  {
    icon: Building2,
    title: "White Label",
    description: "Brand the terminal for exchanges, banks or crypto companies — custom UI available."
  }
];

const stats = [
  { value: "1-15%", label: "Operator Commission Per TX" },
  { value: "$2K+", label: "Avg Monthly Revenue / Terminal" },
  { value: "~3mo", label: "Estimated ROI Period" }
];

export default function BusinessModel() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Business Model</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4 leading-tight">
            REVENUE &<br />OPPORTUNITY
          </h2>
          <p className="font-body text-muted-foreground max-w-xl text-lg">
            RIFT creates a win-win ecosystem for operators, location partners, and end users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 text-center"
            >
              <p className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">{s.value}</p>
              <p className="font-heading text-xs text-muted-foreground tracking-widest uppercase">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {streams.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}