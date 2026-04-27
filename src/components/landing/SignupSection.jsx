import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import LOIModal from './LOIModal';

export default function SignupSection() {
  const [loiOpen, setLoiOpen] = useState(false);

  return (
    <section id="signup" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-primary/3" />
      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Become an Operator
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            Submit a Letter of Intent to secure your allocation. Early operators receive priority pricing, dedicated onboarding, and first access to new features.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setLoiOpen(true)}
              className="bg-primary text-primary-foreground px-8 py-4 rounded font-heading text-sm font-bold hover:opacity-90 transition-opacity flex items-center gap-2.5 shadow-lg"
            >
              <FileText className="w-4 h-4" />
              POST A LETTER OF INTENT
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="font-body text-xs text-muted-foreground mt-6">
            Non-binding · Takes 3 minutes · Our team will follow up within 48h
          </p>
        </motion.div>
      </div>

      <LOIModal isOpen={loiOpen} onClose={() => setLoiOpen(false)} />
    </section>
  );
}