import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { experience } from '../../data/content';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title="Where I've been."
      className="bg-[var(--muted)]/40"
    >
      <div className="relative max-w-3xl">
        <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-[var(--border)] to-transparent" />
        <div className="space-y-10">
          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              <span className="absolute left-0 top-2 w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-accent shadow-glow flex items-center justify-center text-white text-xs font-bold">
                {i + 1}
              </span>
              <div className="p-6 md:p-7 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display font-semibold text-xl">{e.role}</h3>
                  <span className="text-xs uppercase tracking-widest text-[var(--text-muted)]">{e.period}</span>
                </div>
                <div className="text-accent font-medium text-sm mb-3">{e.company}</div>
                <p className="text-[var(--text-muted)] leading-relaxed">{e.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
