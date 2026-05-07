import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { navItems } from '../data/content';

export default function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const offsets = navItems.map((n) => {
        const el = document.getElementById(n.id);
        return el ? { id: n.id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);
      const current = offsets.reverse().find((o) => o.top <= 120);
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2 backdrop-blur-xl bg-[var(--bg)]/70 border-b border-[var(--border)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <button onClick={() => go('home')} className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-accent flex items-center justify-center text-white font-bold shadow-glow">H</span>
          <span className="font-display font-bold tracking-tight text-lg hidden sm:block">Harsh.</span>
        </button>

        <ul className="hidden md:flex items-center gap-1 p-1 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur">
          {navItems.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => go(n.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  active === n.id ? 'text-white' : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-accent rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {n.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center hover:border-accent transition-colors"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="md:hidden w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-6 mt-3 p-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-soft"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium ${
                      active === n.id ? 'bg-gradient-accent text-white' : 'hover:bg-[var(--muted)]'
                    }`}
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
