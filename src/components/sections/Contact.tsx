"use client";

import { Reveal } from '@/components/animations/Reveal';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LuLinkedin } from "react-icons/lu";
import { useLanguage } from '@/context/LanguageContext';

export const Contact = () => {
    const { t } = useLanguage();
    return (
        <section id="contact" className="py-24 bg-(--bg-main)">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <Reveal direction='up'>
                    <h2 className="text-4xl md:text-6xl font-bold text-(--text-primary) mb-8">{t.sectionTitles.contact}</h2>
                    <p className="text-xl text-(--text-secondary) mb-12 max-w-2xl mx-auto">
                        {t.sectionTitles.contactSubtitle}
                    </p>
                </Reveal>

                <Reveal direction='up' delay={0.2}>
                    <div className="bg-(--bg-surface) p-8 md:p-12 rounded-3xl border border-(--border-color)">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                            <a href="mailto:naylinmyat04@gmail.com" className="flex flex-col items-center group min-w-40">
                                <div className="w-16 h-16 bg-(--bg-main) rounded-full flex items-center justify-center text-(--text-primary) mb-4 border border-(--border-color) group-hover:border-(--accent) transition-colors group-hover:scale-110">
                                    <Mail size={28} />
                                </div>
                                <span className="text-(--text-primary) font-bold text-lg">Email Me</span>
                                <span className="text-(--text-secondary) text-sm mt-1">naylinmyat04@gmail.com</span>
                            </a>
                            <div className="hidden md:block w-px h-24 bg-(--border-color)"></div>
                            <a href="tel:+817090541490" className="flex flex-col items-center group min-w-40">
                                <div className="w-16 h-16 bg-(--bg-main) rounded-full flex items-center justify-center text-(--text-primary) mb-4 border border-(--border-color) group-hover:border-(--accent) transition-colors group-hover:scale-110">
                                    <Phone size={28} />
                                </div>
                                <span className="text-(--text-primary) font-bold text-lg">Call Me</span>
                                <span className="text-(--text-secondary) text-sm mt-1">+81 70-9054-1490</span>
                            </a>
                            <div className="hidden md:block w-px h-24 bg-(--border-color)"></div>
                            <a href="https://www.linkedin.com/in/nay-lin-myat-b60127224/" target='_blank' className="flex flex-col items-center group min-w-40">
                                <div className="w-16 h-16 bg-(--bg-main) rounded-full flex items-center justify-center text-(--text-primary) mb-4 border border-(--border-color) group-hover:border-(--accent) transition-colors group-hover:scale-110">
                                    <LuLinkedin size={28} />
                                </div>
                                <span className="text-(--text-primary) font-bold text-lg">LinkedIn</span>
                                <span className="text-(--text-secondary) text-sm mt-1">Connect Profile</span>
                            </a>
                        </div>
                    </div>
                </Reveal>

                <Reveal direction='up' delay={0.4}>
                    <div className="mt-16 text-(--text-secondary) flex items-center justify-center gap-2">
                        <MapPin size={18} /> Tokyo, Japan
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
