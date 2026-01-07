
import React from 'react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-4 text-center bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Let's build something together.</h2>
        <a 
          href={`mailto:${RESUME_DATA.contact.email}`}
          className="inline-block px-10 py-4 bg-white text-slate-950 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all shadow-xl hover:-translate-y-1"
        >
          Send me an Email
        </a>
        <div className="mt-16 pt-8">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} {RESUME_DATA.name}. Built with Precision & Performance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
