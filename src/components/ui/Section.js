import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 px-6 md:px-10 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 md:mb-20 max-w-2xl"
          >
            {eyebrow && (
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
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
