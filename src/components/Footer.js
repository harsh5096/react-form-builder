import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personal } from '../data/content';

const links = [
  { icon: <FaGithub />, href: personal.socials.github },
  { icon: <FaLinkedin />, href: personal.socials.linkedin },
  { icon: <FaEnvelope />, href: personal.socials.email },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 px-5 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center text-white text-sm font-semibold">H</span>
          <div>
            <div className="font-display text-sm font-semibold">{personal.name}</div>
            <div className="text-[11px] text-[var(--text-muted)]">© {new Date().getFullYear()} — All rights reserved.</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[var(--text-muted)]">
          {links.map((l, i) => (
            <motion.a
              key={i}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-sm"
            >
              {l.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
