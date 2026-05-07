import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { personal } from '../../data/content';

const stats = [
  { k: '3+', v: 'Years coding' },
  { k: '250+', v: 'DSA solved' },
  { k: '15+', v: 'Projects shipped' },
  { k: '7.96', v: 'MCA CGPA' },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A developer who cares about the details.">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-7 space-y-6"
        >
          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            {personal.longBio}
          </p>
          <Button as="a" href={personal.resume} download variant="gradient">
            <FaDownload /> Download Resume
          </Button>
        </motion.div>

        <div className="md:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-accent hover:-translate-y-1 transition-all"
            >
              <div className="font-display text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                {s.k}
              </div>
              <div className="text-sm text-[var(--text-muted)] mt-1">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
