import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import Section from '../ui/Section';
import { experience } from '../../data/content';

const ExperienceItem = ({ e, i }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="relative pl-9 md:pl-12 w-full"
    >
      <span className="absolute left-0 top-3.5 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-accent shadow-glow flex items-center justify-center text-white text-[9px] font-semibold">
        {i + 1}
      </span>
      <div
        className="w-full p-4 md:p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-accent/40 hover:shadow-card transition-all cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="font-display font-semibold text-sm md:text-base group-hover:text-accent transition-colors">{e.role}</h3>
          <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">{e.period}</span>
        </div>
        <div className="text-accent font-medium text-xs mb-2">{e.company}</div>
        <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed mb-3">
          {e.description}
        </p>

        <div className="flex justify-end">
          <button
            className="flex items-center gap-1.5 text-[10px] md:text-xs font-semibold text-accent/80 hover:text-accent transition-colors uppercase tracking-wider"
          >
            {isExpanded ? 'Show Less' : 'View Details'}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <HiChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-3 border-t border-[var(--border)] space-y-3">
                {e.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-xs md:text-sm text-[var(--text-muted)]"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="leading-relaxed">{detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

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
        <div className="space-y-6">
          {experience.map((e, i) => (
            <ExperienceItem key={e.role} e={e} i={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

