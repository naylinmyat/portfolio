"use client";

import { Reveal } from '@/components/animations/Reveal';
import { getCertifications } from '@/data/portfolio';
import { Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Certifications = () => {
    const { language, t } = useLanguage();
    const certifications = getCertifications(language);

    return (
        <section className="py-12 bg-(--bg-surface) border-t border-(--border-color)">
            <div className="max-w-4xl mx-auto px-6">
                <Reveal direction='right'>
                    <div className="flex items-center gap-3 mb-8">
                        <Award className="text-(--accent)" size={24} />
                        <h2 className="text-2xl font-bold text-(--text-primary)">{t.sectionTitles.certifications}</h2>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <Reveal key={index} direction='up' delay={index * 0.1}>
                            <div className={`group bg-(--bg-main) h-full p-6 rounded-2xl border border-(--border-color) transition-all duration-300 ${cert.border} hover:shadow-lg flex items-start gap-4`}>
                                <div className={`p-3 rounded-xl ${cert.bg} ${cert.color}`}>
                                    <cert.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-(--text-primary)">{cert.name}</h3>
                                    <p className="text-sm font-medium text-(--text-primary) opacity-90">{cert.fullName}</p>
                                    <p className="text-xs text-(--text-secondary) mt-1">{cert.issuer}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
