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
      <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {skills.map((g, i) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-4 md:py-5 group"
          >
            <div className="md:col-span-4 flex items-center gap-3">
              <span className="text-[11px] font-mono text-accent tracking-widest">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-lg md:text-xl font-medium tracking-tight text-[var(--text)] group-hover:text-accent transition-colors">
                {g.group}
              </h3>
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ show: { transition: { staggerChildren: 0.03 } } }}
              className="md:col-span-8 flex flex-wrap gap-x-6 gap-y-2 items-center"
            >
              {g.items.map((it) => (
                <motion.span
                  key={it}
                  variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                  className="text-sm md:text-[15px] text-[var(--text-muted)] hover:text-accent transition-colors cursor-default relative
                  after:content-[''] after:absolute after:-right-3 after:top-1/2 after:w-1 after:h-1 after:rounded-full after:bg-[var(--border)] last:after:hidden"
                >
                  {it}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
