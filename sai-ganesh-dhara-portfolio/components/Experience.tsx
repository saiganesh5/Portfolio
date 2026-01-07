
import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-white/10 rounded-2xl">
              <GraduationCap className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-8">
            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l border-white/10 group">
                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-blue-500 rounded-full group-hover:scale-150 transition-transform" />
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                <div className="flex items-center gap-4 text-slate-400 text-sm">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {edu.period}</span>
                  {edu.score && <span className="px-2 py-0.5 bg-white/5 rounded-md">{edu.score}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-white/10 rounded-2xl">
              <Award className="w-8 h-8 text-amber-400" />
            </div>
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>

          <div className="space-y-6">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="dark-glass p-6 rounded-3xl hover:border-amber-400/50 transition-colors">
                <h3 className="text-lg font-bold mb-1">{cert.name}</h3>
                <div className="flex justify-between items-center text-slate-400 text-sm">
                  <span>{cert.issuer}</span>
                  <span className="text-amber-400/80 font-medium">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
