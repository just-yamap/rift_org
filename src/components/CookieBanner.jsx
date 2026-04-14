import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('rift_cookie_consent');
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('rift_cookie_consent', 'essentials');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 flex justify-center pointer-events-none"
        >
          <div className="bg-card border border-border rounded-xl shadow-2xl px-6 py-4 flex flex-col sm:flex-row items-center gap-4 max-w-2xl w-full pointer-events-auto">
            <p className="font-body text-sm text-muted-foreground flex-1">
              We use essential cookies only — no tracking, no third-party analytics.
            </p>
            <button
              onClick={accept}
              className="bg-foreground text-background px-5 py-2 rounded font-heading text-xs font-semibold hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
            >
              Accept essentials only
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}