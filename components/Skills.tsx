
import React from 'react';
import { Wrench, Terminal, Cpu } from 'lucide-react';
import { RESUME_DATA } from '../constants';

interface SkillInfo {
  slug: string;
  color: string;
  textColor?: string;
}

const skillMeta: Record<string, SkillInfo> = {
  "JAVA": { slug: "oracle", color: "#E76F00" },
  "PYTHON": { slug: "python", color: "#3776AB" },
  "JAVASCRIPT": { slug: "javascript", color: "#F7DF1E", textColor: "#000000" },
  "SPRING BOOT": { slug: "springboot", color: "#6DB33F" },
  "REST APIS": { slug: "postman", color: "#166E85" },
  "OAUTH": { slug: "auth0", color: "#000000" },
  "MICROSERVICES": { slug: "kubernetes", color: "#444444" },
  "NODE.JS": { slug: "nodedotjs", color: "#339933" },
  "REACT": { slug: "react", color: "#61DAFB", textColor: "#000000" },
  "HTML5": { slug: "html5", color: "#E34F26" },
  "CSS3": { slug: "css3", color: "#1572B6" },
  "BOOTSTRAP": { slug: "bootstrap", color: "#7952B3" },
  "TAILWIND CSS": { slug: "tailwindcss", color: "#06B6D4" },
  "GIT": { slug: "git", color: "#F05032" },
  "GITHUB": { slug: "github", color: "#181717" },
  "AWS": { slug: "amazonaws", color: "#232F3E" },
  "KAFKA": { slug: "apachekafka", color: "#231F20" },
  "DOCKER": { slug: "docker", color: "#2496ED" },
  "CI/CD PIPELINES": { slug: "githubactions", color: "#4285F4" },
  "MYSQL": { slug: "mysql", color: "#4479A1" },
  "MONGODB": { slug: "mongodb", color: "#47A248" },
  "POSTGRESQL": { slug: "postgresql", color: "#4169E1" },
  "EDA": { slug: "jupyter", color: "#3776AB" },
  "TABLEAU": { slug: "tableau", color: "#E97627" },
  "PANDAS": { slug: "pandas", color: "#150458" },
  "NUMPY": { slug: "numpy", color: "#013243" }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
          <Wrench className="w-8 h-8 text-slate-400 rotate-[-45deg]" />
          <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
        </div>

        <div className="space-y-12">
          {RESUME_DATA.skills.map((category) => (
            <div key={category.name} className="animate-in fade-in duration-700">
              <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const meta = skillMeta[skill];
                  if (!meta) return (
                    <div key={skill} className="px-4 py-2 bg-slate-800 rounded text-sm font-bold text-white uppercase border border-white/5">
                      {skill}
                    </div>
                  );

                  return (
                    <div
                      key={skill}
                      style={{ backgroundColor: meta.color }}
                      className="flex items-center gap-2 px-3 py-2 rounded-sm shadow-lg hover:brightness-110 transition-all cursor-default group border-b-4 border-black/20"
                    >
                      <div className="bg-white/90 p-1 rounded-sm">
                        <img 
                          src={`https://cdn.simpleicons.org/${meta.slug}/${meta.color.replace('#','')}`} 
                          alt={skill} 
                          className="w-4 h-4"
                        />
                      </div>
                      <span 
                        style={{ color: meta.textColor || '#FFFFFF' }}
                        className="text-[11px] md:text-xs font-black tracking-wider uppercase drop-shadow-sm"
                      >
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
