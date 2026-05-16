import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import Section from '../ui/Section';
import { achievements } from '../../data/content';

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Recognition" title="Key Achievements.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-accent/40 hover:shadow-card transition-all group"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
              <HiOutlineBadgeCheck className="w-6 h-6" />
            </div>
            <p className="text-sm md:text-base font-medium text-[var(--text)] leading-tight">
              {achievement}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
