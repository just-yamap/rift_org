import React from 'react';
import { motion } from 'framer-motion';

const components = [
  { name: "Touchscreen Display", position: { top: '20%', left: '50%' }, anchor: 'center' },
  { name: "QR Code Scanner", position: { top: '42%', left: '50%' }, anchor: 'center' },
  { name: "Thermal Printer", position: { top: '55%', left: '50%' }, anchor: 'center' },
  { name: "Cash Handler", position: { top: '68%', left: '50%' }, anchor: 'center' },
  { name: "USB Hub", position: { top: '80%', left: '25%' }, anchor: 'left' },
  { name: "Power Supply", position: { top: '80%', left: '75%' }, anchor: 'right' }
];

export default function TechSpecs({ atmImageUrl }) {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs text-primary tracking-widest uppercase">Hardware</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What's Inside
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-2xl mx-auto"
        >
          {/* ATM Image */}
          <div className="relative">
            <img 
              src={atmImageUrl}
              alt="RIFT ATM internal components"
              className="w-full max-w-md mx-auto"
            />

            {/* Component Labels */}
            {components.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="absolute"
                style={{
                  top: component.position.top,
                  left: component.position.left,
                  transform: component.anchor === 'center' ? 'translate(-50%, -50%)' :
                             component.anchor === 'left' ? 'translate(0, -50%)' :
                             'translate(-100%, -50%)'
                }}
              >
                {/* Line connector */}
                <div className={`absolute top-1/2 ${
                  component.anchor === 'center' ? 'left-1/2 -translate-x-1/2' :
                  component.anchor === 'left' ? 'left-0' : 'right-0'
                } w-px h-8 bg-primary/30`} />
                
                {/* Label */}
                <div className={`absolute top-[calc(50%+2rem)] ${
                  component.anchor === 'center' ? 'left-1/2 -translate-x-1/2' :
                  component.anchor === 'left' ? 'left-0' : 'right-0'
                } whitespace-nowrap`}>
                  <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-1.5">
                    <span className="font-heading text-xs font-semibold text-primary">{component.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}