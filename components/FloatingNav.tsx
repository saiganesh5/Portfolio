
import React from 'react';

const FloatingNav: React.FC = () => {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="glass px-6 py-3 rounded-full flex items-center gap-6 shadow-2xl border border-white/10">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNav;
