import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
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
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 hover:-translate-y-1 hover:shadow-soft transition-all"
          >
            <div className={`absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${p.accent} opacity-10 group-hover:opacity-25 blur-2xl transition-opacity`} />
            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <span className={`w-10 h-10 rounded-full bg-gradient-to-br ${p.accent} flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all`}>
                  <FaArrowRight />
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 leading-tight">{p.title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed mb-6">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--muted)] text-[var(--text)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
