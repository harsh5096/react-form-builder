import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import Section from '../ui/Section';
import { projects } from '../../data/content';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects I'm proud of."
      subtitle="A mix of AI-driven products, real-time apps and polished clones — each shipped end-to-end."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:shadow-card hover:border-accent/40 transition-all"
          >
            <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${p.accent} opacity-10 group-hover:opacity-25 blur-2xl transition-opacity`} />
            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
                  {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <motion.span
                  whileHover={{ rotate: 45 }}
                  className={`w-7 h-7 rounded-full bg-gradient-to-br ${p.accent} flex items-center justify-center text-white text-[10px] opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  <FaArrowUpRightFromSquare />
                </motion.span>
              </div>
              <h3 className="font-display text-base font-semibold mb-1.5 leading-tight">{p.title}</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[var(--muted)] text-[var(--text-muted)] border border-[var(--border)]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="overflow-hidden h-0 group-hover:h-6 transition-all duration-300">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-accent translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  View Project <FaArrowUpRightFromSquare className="text-[9px]" />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
