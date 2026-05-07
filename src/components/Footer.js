import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personal } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-gradient-accent flex items-center justify-center text-white font-bold">H</span>
          <div>
            <div className="font-display font-semibold">{personal.name}</div>
            <div className="text-xs text-[var(--text-muted)]">© {new Date().getFullYear()} — All rights reserved.</div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[var(--text-muted)]">
          <a href={personal.socials.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors text-lg"><FaGithub /></a>
          <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors text-lg"><FaLinkedin /></a>
          <a href={personal.socials.email} className="hover:text-accent transition-colors text-lg"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}
