import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Section from '../ui/Section';
import { personal } from '../../data/content';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Invalid email';
    if (form.message.trim().length < 10) e.message = 'Min 10 characters';
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    try {
      await fetch('https://formspree.io/f/mwkzwelq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
    } catch {}
    setLoading(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const items = [
    { icon: <FaEnvelope />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: <FaPhone />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: personal.location },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something great." subtitle="Open to roles, freelance, and collaborations. I usually reply within 24 hours.">
      <div className="grid md:grid-cols-12 gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 space-y-3"
        >
          {items.map((i) => (
            <motion.a
              key={i.label}
              href={i.href || '#'}
              whileHover={{ y: -2 }}
              className="flex items-start gap-4 p-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-accent hover:shadow-card transition-all group"
            >
              <span className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center text-white text-sm shrink-0">
                {i.icon}
              </span>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">{i.label}</div>
                <div className="text-sm font-medium truncate group-hover:text-accent transition-colors">{i.value}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-7 p-6 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-5 shadow-card"
        >
          {['name', 'email'].map((f) => (
            <div key={f} className="group">
              <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">{f}</label>
              <input
                type={f === 'email' ? 'email' : 'text'}
                value={form[f]}
                onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                className="mt-1.5 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-sm outline-none focus:border-accent transition-colors"
                placeholder={f === 'email' ? 'you@domain.com' : 'Your name'}
              />
              {errors[f] && <span className="text-xs text-rose-500 mt-1 block">{errors[f]}</span>}
            </div>
          ))}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1.5 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-sm outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
            {errors.message && <span className="text-xs text-rose-500 mt-1 block">{errors.message}</span>}
          </div>
          <div className="flex items-center justify-between gap-4 pt-2">
            <span className="text-xs md:text-sm text-[var(--text-muted)]">
              {sent ? "✓ Thanks — I'll get back soon." : 'I read every message personally.'}
            </span>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-accent text-white text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-60 shadow-glow"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <>Send <FaPaperPlane className="text-xs" /></>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
