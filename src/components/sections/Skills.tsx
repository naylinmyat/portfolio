"use client";

import { Reveal } from '@/components/animations/Reveal';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { getSkills } from '@/data/portfolio';
import Image from 'next/image';

export const Skills = () => {
    const { language, t } = useLanguage();
    const skills = getSkills(language);
    const { isDark } = useTheme();

    return (
        <section id="skills" className="py-24 bg-(--bg-main)">
            <div className="max-w-7xl mx-auto px-6">
                <Reveal direction='up'>
                    <div className="text-center mb-16">
                        <span className="text-(--accent) font-bold tracking-widest uppercase text-sm">{t.sectionTitles.skillsSubtitle}</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) mt-2">{t.sectionTitles.skills}</h2>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {skills.map((category, idx) => (
                        <Reveal key={idx} direction='up' delay={idx * 0.1}>
                            <div className="bg-(--bg-surface) h-full p-8 rounded-3xl border border-(--border-color)">
                                <h3 className="text-xl font-bold text-(--text-primary) mb-8 text-center uppercase tracking-wide border-b border-(--border-color) pb-4">
                                    {category.category}
                                </h3>

                                <div className="grid grid-cols-3 gap-6">
                                    {category.items.map((skill, i) => (
                                        <div key={i} className="flex flex-col items-center group cursor-pointer">
                                            <div className="w-16 h-16 bg-(--bg-main) rounded-2xl flex items-center justify-center mb-3 shadow-sm border border-(--border-color) transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg group-hover:border-(--accent)">
                                                <Image
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    width={32}
                                                    height={32}
                                                    className={`transition-transform duration-300 group-hover:scale-110 ${skill.name === 'WebSocket' && isDark ? 'dark:invert' : ''}`}
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-(--text-secondary) group-hover:text-(--text-primary) transition-colors text-center">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
