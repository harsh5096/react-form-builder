import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { experience } from '../../data/content';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Where I've been.">
      <div className="relative max-w-3xl">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ originY: 0 }}
          className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-[var(--border)] to-transparent"
        />
        <div className="space-y-8">
          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative pl-12 md:pl-16"
            >
              <span className="absolute left-0 top-3 w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-accent shadow-glow flex items-center justify-center text-white text-[10px] font-semibold">
                {i + 1}
              </span>
              <motion.div
                whileHover={{ y: -3 }}
                className="p-5 md:p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-accent/40 hover:shadow-card transition-all"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display font-semibold text-base md:text-lg">{e.role}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">{e.period}</span>
                </div>
                <div className="text-accent font-medium text-xs md:text-sm mb-2">{e.company}</div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{e.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
