import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import Section from '../ui/Section';
import { personal } from '../../data/content';

const stats = [
  { k: 1.5, suffix: '+', v: 'Years coding', decimal: true },
  { k: 250, suffix: '+', v: 'DSA solved' },
  { k: 5, suffix: '+', v: 'Projects shipped' },
  { k: 7.96, suffix: '', v: 'MCA CGPA', decimal: true },
];

function Counter({ to, decimal, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(decimal ? +(to * eased).toFixed(2) : Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, decimal]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Split bio into paragraphs
  const paragraphs = personal.longBio.split('\n\n');
  const firstParagraph = paragraphs[0];
  const remainingParagraphs = paragraphs.slice(1);

  return (
    <Section id="about" eyebrow="About" title="A developer who cares about the details.">
      <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-7 space-y-6"
        >
          <div className="text-sm md:text-base leading-[1.8] text-[var(--text-muted)] space-y-4">
            <p>{firstParagraph}</p>
            
            <div className={`${isExpanded ? 'block' : 'hidden md:block'} space-y-4`}>
              {remainingParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden flex items-center gap-2 text-sm font-semibold text-accent"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
              <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
              </motion.span>
            </button>

          </div>
        </motion.div>

        <div className="md:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-accent hover:shadow-card transition-all"
            >
              <div className="font-display text-3xl md:text-4xl font-semibold bg-gradient-accent bg-clip-text text-transparent">
                <Counter to={s.k} decimal={s.decimal} suffix={s.suffix} />
              </div>
              <div className="text-xs md:text-sm text-[var(--text-muted)] mt-1">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
