import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { experience } from '../../data/content';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Where I've been.">
      <div className="relative w-full">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ originY: 0 }}
          className="absolute left-2.5 md:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-[var(--border)] to-transparent"
        />
        <div className="space-y-4">
          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-9 md:pl-12 w-full"
            >
              <span className="absolute left-0 top-3.5 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-accent shadow-glow flex items-center justify-center text-white text-[9px] font-semibold">
                {i + 1}
              </span>
              <motion.div
                whileHover={{ y: -2 }}
                className="w-full p-4 md:p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-accent/40 hover:shadow-card transition-all"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display font-semibold text-sm md:text-base">{e.role}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">{e.period}</span>
                </div>
                <div className="text-accent font-medium text-xs mb-1.5">{e.company}</div>
                <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed">{e.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
