"use client";

import { Reveal } from '@/components/animations/Reveal';
import { useLanguage } from '@/context/LanguageContext';
import { getExperiences } from '@/data/portfolio';

export const Experience = () => {
    const { language, t } = useLanguage();
    const experiences = getExperiences(language);
    return (
        <section id="experience" className="py-24 bg-(--bg-surface)">
            <div className="max-w-4xl mx-auto px-6">
                <Reveal direction='up'>
                    <div className="text-center mb-16">
                        <span className="text-(--accent) font-bold tracking-widest uppercase text-sm">{t.sectionTitles.experienceSubtitle}</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) mt-2">{t.sectionTitles.experience}</h2>
                    </div>
                </Reveal>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <Reveal key={index} direction='up' delay={index * 0.1}>
                            <div className="bg-(--bg-main) p-8 rounded-2xl border border-(--border-color) hover:border-(--accent) transition-colors shadow-sm group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-(--text-primary) group-hover:text-(--accent) transition-colors">{exp.role}</h3>
                                        <div className="text-(--text-secondary) font-medium">{exp.company}</div>
                                    </div>
                                    <span className="mt-2 md:mt-0 px-3 py-1 bg-(--bg-surface) text-(--text-primary) text-sm font-medium rounded-full inline-block w-fit border border-(--border-color)">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-(--text-secondary) leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
