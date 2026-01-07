
import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {RESUME_DATA.projects.map((project, idx) => (
            <div key={idx} className="glass rounded-[2rem] p-8 flex flex-col h-full hover:border-indigo-500/30 transition-all duration-300 shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-2xl">
                  <Layers className="w-6 h-6 text-indigo-400" />
                </div>
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a href={project.githubUrl} target="_blank" className="text-slate-500 hover:text-indigo-400 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-white/5 text-slate-400 rounded-lg border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-slate-400 flex gap-3 text-sm leading-relaxed">
                    <div className="mt-1.5 w-1.5 h-1.5 bg-indigo-500/50 rounded-full flex-shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>
              
              <a 
                href={project.githubUrl !== "#" ? project.githubUrl : undefined} 
                target="_blank"
                className="flex items-center gap-2 text-indigo-400 font-semibold hover:gap-3 transition-all text-sm group no-underline"
              >
                View Repository
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
