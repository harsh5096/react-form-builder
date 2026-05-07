import React from 'react';
import { motion } from 'framer-motion';
import { personal } from '../../data/content';

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 px-4 md:px-10 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#dcebe9 0%,#eaf4f2 60%,#f5faf9 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute top-24 left-10 w-16 h-16 rounded-full border-2 border-white/70" />
      <div className="absolute bottom-16 left-24 w-10 h-10 rounded-full bg-white/50" />
      <div className="absolute top-10 right-1/3 text-[10rem] font-black text-white/30 select-none pointer-events-none hidden md:block">
        H
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10"
        >
          <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Hello, I'm <span className="text-teal-700">{personal.name}</span>
          </h1>
          <h2 className="mt-3 text-xl md:text-2xl font-semibold text-teal-700">
            {personal.role}
          </h2>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-md">
            {personal.shortBio}
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <button
              onClick={() => go('about')}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white transition-colors"
            >
              Learn More
            </button>
            <button
              onClick={() => go('contact')}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded bg-teal-700 text-white hover:bg-teal-800 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative flex justify-center items-end"
        >
          <div className="relative w-[280px] h-[340px] md:w-[360px] md:h-[440px]">
            <div className="absolute inset-0 rounded-full bg-white/60 blur-sm" />
            <div className="absolute inset-3 rounded-full border-2 border-white/80" />
            <img
              src={personal.avatar}
              alt={personal.name}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="relative w-full h-full object-cover object-top"
              style={{ clipPath: 'inset(0 0 0 0 round 0)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
