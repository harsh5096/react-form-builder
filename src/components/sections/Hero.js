import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personal } from '../../data/content';
import Button from '../ui/Button';

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-10 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-indigo-300/30 dark:bg-indigo-500/20 blur-3xl animate-blob" />
      <div className="absolute bottom-0 -right-32 w-[32rem] h-[32rem] rounded-full bg-fuchsia-300/30 dark:bg-fuchsia-500/20 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur text-xs font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight"
          >
            Crafting
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">digital products</span>
            <br />
            with code & care.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-[var(--text-muted)] max-w-xl leading-relaxed"
          >
            {personal.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button onClick={() => go('projects')} variant="primary">
              View Work <FaArrowRight />
            </Button>
            <Button onClick={() => go('contact')} variant="ghost">
              <FaEnvelope /> Get in touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center gap-5 text-[var(--text-muted)]"
          >
            <a href={personal.socials.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors text-xl"><FaGithub /></a>
            <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors text-xl"><FaLinkedin /></a>
            <a href={personal.socials.email} className="hover:text-accent transition-colors text-xl"><FaEnvelope /></a>
            <span className="h-px w-12 bg-[var(--border)]" />
            <span className="text-xs uppercase tracking-widest">Scroll</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-[var(--border)] shadow-soft bg-[var(--muted)]">
            <img
              src={personal.avatar}
              alt={personal.name}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-white/40 dark:border-white/10">
              <div className="text-xs uppercase tracking-widest text-[var(--text-muted)]">Currently</div>
              <div className="font-semibold mt-1">Full Stack @ Bitquark</div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-accent shadow-glow rotate-12 hidden md:block" />
        </motion.div>
      </div>
    </section>
  );
}
