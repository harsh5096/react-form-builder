import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personal } from '../../data/content';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center pt-20 pb-10 px-4 md:px-6 overflow-hidden bg-[var(--bg)] bg-gradient-soft dark:bg-none">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-72 h-72 rounded-full bg-teal-200/40 dark:bg-teal-500/10 blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full bg-violet-200/30 dark:bg-violet-500/10 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-8 items-center"
      >
        {/* RIGHT — Avatar (Shown on top in mobile) */}
        <motion.div
          variants={item}
          className="relative flex justify-center md:justify-end order-1 md:order-2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-[240px] h-[240px] md:w-[340px] md:h-[340px]"
          >
            <div className="absolute -inset-6 rounded-full bg-gradient-accent opacity-20 blur-2xl" />
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-accent shadow-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-[var(--surface)]">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* LEFT — Text Content */}
        <div className="z-10 order-2 md:order-1">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur text-[11px] font-medium tracking-wide text-[var(--text-muted)] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-[var(--text)]"
          >
            Hi, I'm <span className="bg-gradient-accent bg-clip-text text-transparent">{personal.name.split(' ')[0]}</span>.
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-[var(--text-muted)] font-medium mt-2 block leading-tight">
              {personal.role}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-sm md:text-base text-[var(--text-muted)] leading-relaxed max-w-md"
          >
            {personal.shortBio}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => go('projects')}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--text)] text-[var(--bg)] text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-card"
            >
              View my work
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => go('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--border)] text-sm font-medium text-[var(--text)] hover:border-accent hover:text-accent transition-colors"
            >
              Get in touch
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4 text-[var(--text-muted)]">
            <a href={personal.socials.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FaGithub /></a>
            <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FaLinkedin /></a>
            <span className="text-xs">{personal.location}</span>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
