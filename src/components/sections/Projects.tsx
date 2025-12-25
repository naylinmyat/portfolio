"use client";

import { Reveal } from '@/components/animations/Reveal';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getProjects } from '@/data/portfolio';

export const Projects = () => {
  const { language, t } = useLanguage();
  const projects = getProjects(language);
  return (
    <section id="projects" className="py-24 bg-(--bg-surface)">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal direction='up'>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-(--border-color) pb-8">
            <div>
              <span className="text-(--accent) font-bold tracking-widest uppercase text-sm">{t.sectionTitles.projectsSubtitle}</span>
              <h2 className="text-3xl md:text-5xl font-bold text-(--text-primary) mt-2">{t.sectionTitles.projects}</h2>
            </div>
            <a href="https://github.com/naylinmyat" target='_blank' className="hidden md:flex items-center gap-2 text-(--text-primary) font-bold hover:text-(--accent) transition-colors">
              View GitHub <ExternalLink size={20} />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <Reveal key={idx} direction='up' delay={idx * 0.1}>
              <div className="group flex flex-col h-full">
                <div className="bg-(--bg-main) border border-(--border-color) p-8 rounded-3xl h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-between items-center mb-8">
                    <a href={project.link} target='_blank' className="flex items-center gap-2 text-(--text-primary) font-bold hover:text-(--accent) transition-colors">
                      <div className="p-3 bg-(--bg-surface) rounded-xl text-(--text-primary) border border-(--border-color)">
                        <ExternalLink size={24} />
                      </div>
                      View
                    </a>
                    <span className="text-sm font-bold text-(--text-secondary) uppercase tracking-wider">{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-(--text-primary) mb-3 group-hover:text-(--accent) transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-(--text-secondary) mb-8 grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-4 py-2 bg-(--bg-surface) text-(--text-primary) rounded-lg text-sm font-medium border border-(--border-color)">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="https://github.com/naylinmyat" target='_blank' className="inline-flex items-center gap-2 text-(--text-primary) font-bold border-b-2 border-(--text-primary) pb-1">
            View GitHub <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
