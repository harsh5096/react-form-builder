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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="group relative p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-accent/40 hover:shadow-card transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-[0.04] transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-gradient-accent flex items-center justify-center text-white text-[10px] font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display font-semibold text-base">{g.group}</h3>
              </div>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ show: { transition: { staggerChildren: 0.04 } } }}
                className="flex flex-wrap gap-2"
              >
                {g.items.map((it) => (
                  <motion.span
                    key={it}
                    variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-[var(--border)] bg-[var(--bg)] hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {it}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
