import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { personal } from '../../data/content';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

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
    try {
      await fetch('https://formspree.io/f/mwkzwelq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch {
      setSent(true);
    }
  };

  const items = [
    { icon: <FaEnvelope />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: <FaPhone />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: personal.location },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something great." subtitle="Open to roles, freelance, and collaborations. I usually reply within 24 hours.">
      <div className="grid md:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 space-y-4"
        >
          {items.map((i) => (
            <a
              key={i.label}
              href={i.href || '#'}
              className="flex items-start gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-accent transition-colors group"
            >
              <span className="w-11 h-11 rounded-xl bg-gradient-accent flex items-center justify-center text-white shrink-0">
                {i.icon}
              </span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-[var(--text-muted)]">{i.label}</div>
                <div className="font-medium truncate group-hover:text-accent transition-colors">{i.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-7 p-7 md:p-9 rounded-3xl border border-[var(--border)] bg-[var(--surface)] space-y-5"
        >
          {['name', 'email'].map((f) => (
            <div key={f}>
              <label className="text-xs uppercase tracking-widest text-[var(--text-muted)]">{f}</label>
              <input
                type={f === 'email' ? 'email' : 'text'}
                value={form[f]}
                onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-3 outline-none focus:border-accent transition-colors"
                placeholder={f === 'email' ? 'you@domain.com' : 'Your name'}
              />
              {errors[f] && <span className="text-xs text-rose-500 mt-1 block">{errors[f]}</span>}
            </div>
          ))}
          <div>
            <label className="text-xs uppercase tracking-widest text-[var(--text-muted)]">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-3 outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
            {errors.message && <span className="text-xs text-rose-500 mt-1 block">{errors.message}</span>}
          </div>
          <div className="flex items-center justify-between gap-4 pt-2">
            <span className="text-sm text-[var(--text-muted)]">
              {sent ? '✓ Thanks — I\'ll get back to you soon.' : 'I read every message personally.'}
            </span>
            <Button type="submit" variant="gradient">
              Send <FaPaperPlane />
            </Button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
