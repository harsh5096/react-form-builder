import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative py-8 md:py-12 px-4 md:px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 md:mb-8 max-w-2xl"
          >
            {eyebrow && (
              <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-accent mb-4">
                <span className="w-6 h-px bg-accent" /> {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.15] text-[var(--text)]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
