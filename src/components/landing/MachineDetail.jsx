import React from 'react';
import { motion } from 'framer-motion';

const IMAGE = 'https://media.base44.com/images/public/69bce5cb012b9c997937b65e/a744eb9ea_image.png';
const DESCRIPTION = 'Compact desktop form factor with 7" touchscreen, thermal printer slot, card reader and cash dispenser.';

export default function MachineDetail() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Engineering</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Inside the Machine
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Every component selected for industrial reliability. Built to run 24/7 in high-traffic environments.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <img
                src={IMAGE}
                alt="RIFT Front View"
                className="w-full object-cover"
                style={{ maxHeight: '520px' }}
              />
            </div>
            <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed text-center">
              {DESCRIPTION}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}