import React from 'react';

export default function Button({ as = 'button', variant = 'primary', children, className = '', ...rest }) {
  const Tag = as;
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 will-change-transform';
  const styles = {
    primary:
      'bg-ink text-white hover:scale-[1.03] hover:shadow-glow dark:bg-white dark:text-ink',
    gradient:
      'bg-gradient-accent text-white hover:scale-[1.03] hover:shadow-glow',
    ghost:
      'border border-[var(--border)] text-[var(--text)] hover:border-accent hover:text-accent bg-transparent',
  };
  return (
    <Tag className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
