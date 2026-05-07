import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { skills } from '../../data/content';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Technologies I build with."
      subtitle="A curated stack honed across full-stack engineering and AI/ML projects."
      className="bg-[var(--muted)]/40"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((g, i) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="group p-7 rounded-3xl border border-[var(--border)] bg-[var(--surface)] hover:shadow-soft transition-all"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center text-white text-xs font-bold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display font-semibold text-lg">{g.group}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--border)] bg-[var(--bg)] hover:border-accent hover:text-accent transition-colors"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
