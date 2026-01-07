
import React from 'react';
import { Mail, Github, Linkedin, Smartphone, ArrowDown } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4">
      {/* Background Flowing Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] right-[20%] w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="text-center max-w-4xl">
        <p className="text-blue-400 font-semibold tracking-wide uppercase mb-4 animate-bounce">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {RESUME_DATA.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-slate-400 mb-8">
          {RESUME_DATA.title}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href={`mailto:${RESUME_DATA.contact.email}`} className="glass p-3 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 shadow-sm">
            <Mail className="w-6 h-6 text-slate-300" />
          </a>
          <a href={RESUME_DATA.contact.linkedin} target="_blank" className="glass p-3 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 shadow-sm">
            <Linkedin className="w-6 h-6 text-slate-300" />
          </a>
          <a href={RESUME_DATA.contact.github} target="_blank" className="glass p-3 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 shadow-sm">
            <Github className="w-6 h-6 text-slate-300" />
          </a>
          <a href={`tel:${RESUME_DATA.contact.phone}`} className="glass p-3 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 shadow-sm">
            <Smartphone className="w-6 h-6 text-slate-300" />
          </a>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-slate-400 leading-relaxed mb-10">
            {RESUME_DATA.about}
          </p>
        </div>

        <a href="#about" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors cursor-pointer group">
          <span>Explore Work</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
