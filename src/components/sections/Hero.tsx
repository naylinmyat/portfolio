"use client";

import { Reveal } from '@/components/animations/Reveal';
import { Mail, ArrowRight, FileInput } from 'lucide-react';
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { SiReact, SiTailwindcss, SiNextdotjs, SiTypescript, SiJavascript, SiMysql } from "react-icons/si";
import { useLanguage } from '@/context/LanguageContext';
import { TechCube } from '../ui/TechCube';
import Image from 'next/image';

export const Hero = () => {
    const { language, t } = useLanguage();

    const getAvatarImage = () => {
        switch (language) {
            case 'ja': return "/my-avatar-2.png";
            case 'my': return "/my-avatar-3.png";
            default: return "/my-avatar-1.png";
        }
    };

    return (
        <section className="relative min-h-screen flex items-center px-6 pt-20 pb-10 bg-(--bg-main) overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <Reveal direction='right' delay={0.2}>
                        <div className='flex items-center justify-center lg:justify-start lg:mt-0 gap-8 mt-6 mb-6'>
                            <div className="px-4 py-2 border border-(--accent) text-(--accent) font-bold uppercase tracking-widest text-xs rounded-full">
                                {t.hero.badge}
                            </div>
                            <TechCube />
                        </div>
                    </Reveal>

                    <Reveal direction='right' delay={0.3}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-(--text-primary) mb-6 tracking-tight leading-none">
                            NAY LIN <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--text-secondary) to-(--text-primary)">MYAT</span>
                        </h1>
                    </Reveal>

                    <Reveal direction='right' delay={0.4}>
                        <p className="text-xl md:text-2xl text-(--text-secondary) max-w-lg mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
                            {t.hero.description.split('Next.js').map((part, index, array) => (
                                <span key={index}>
                                    {part}
                                    {index < array.length - 1 && (
                                        <span className="text-(--accent) font-medium">Next.js</span>
                                    )}
                                </span>
                            ))}
                        </p>
                    </Reveal>

                    <Reveal direction='up' delay={0.5}>
                        <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-12">
                            <a href="#contact" className="px-8 py-4 bg-(--text-primary) text-(--bg-main) font-bold rounded-full hover:opacity-90 transition-all flex items-center gap-2">
                                {t.hero.cta} <ArrowRight size={20} />
                            </a>
                            <a href="https://registry.jsonresume.org/naylinmyat?theme=stackoverflow" target='_blank' className="px-8 py-4 border border-(--border-color) text-(--text-primary) font-bold rounded-full hover:bg-(--bg-surface) transition-all flex items-center gap-2">
                                <FileInput size={20} /> {t.hero.cv}
                            </a>
                        </div>
                    </Reveal>

                    <Reveal direction='up' delay={0.6}>
                        <div className="flex items-center lg:justify-start justify-center gap-6 text-(--text-secondary)">
                            <a href="https://github.com/naylinmyat" target='_blank' className="hover:text-(--accent) transition-colors transform hover:scale-110"><LuGithub size={24} /></a>
                            <a href="https://www.linkedin.com/in/nay-lin-myat-b60127224/" target='_blank' className="hover:text-(--accent) transition-colors transform hover:scale-110"><LuLinkedin size={24} /></a>
                            <a href="mailto:naylinmyat04@gmail.com" className="hover:text-(--accent) transition-colors transform hover:scale-110"><Mail size={24} /></a>
                        </div>
                    </Reveal>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                    <Reveal direction='left' delay={0.3}>
                        <div className="relative w-72 h-72 lg:w-125 lg:h-125">
                            <div className="absolute -inset-8 lg:-inset-12 rounded-full animate-[spin_20s_linear_infinite]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-(--bg-surface) p-3 rounded-full border border-(--border-color) shadow-sm">
                                    <SiReact size={30} className="text-[#61DAFB]" style={{ animation: 'spin 20s linear infinite reverse' }} />
                                </div>
                                <div className="absolute top-[25%] right-[6.7%] translate-x-1/2 -translate-y-1/2 bg-(--bg-surface) p-3 rounded-full border border-(--border-color) shadow-sm">
                                    <SiTailwindcss size={30} className="text-[#06B6D4]" style={{ animation: 'spin 20s linear infinite reverse' }} />
                                </div>
                                <div className="absolute bottom-[25%] right-[6.7%] translate-x-1/2 translate-y-1/2 bg-(--bg-surface) p-3 rounded-full border border-(--border-color) shadow-sm">
                                    <SiNextdotjs size={30} className="text-(--text-primary)" style={{ animation: 'spin 20s linear infinite reverse' }} />
                                </div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-(--bg-surface) p-3 rounded-full border border-(--border-color) shadow-sm">
                                    <SiTypescript size={30} className="text-[#3178C6]" style={{ animation: 'spin 20s linear infinite reverse' }} />
                                </div>
                                <div className="absolute bottom-[25%] left-[6.7%] -translate-x-1/2 translate-y-1/2 bg-(--bg-surface) p-3 rounded-full border border-(--border-color) shadow-sm">
                                    <SiJavascript size={30} className="text-[#F7DF1E]" style={{ animation: 'spin 20s linear infinite reverse' }} />
                                </div>
                                <div className="absolute top-[25%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 bg-(--bg-surface) p-3 rounded-full border border-(--border-color) shadow-sm">
                                    <SiMysql size={30} className="text-[#4479A1]" style={{ animation: 'spin 20s linear infinite reverse' }} />
                                </div>
                            </div>

                            <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-(--bg-surface) shadow-2xl transition-transform duration-500 hover:scale-[1.03] z-10">
                                <Image 
                                    key={language}
                                    src={getAvatarImage()}
                                    alt="Nay Lin Myat" 
                                    fill
                                    className="object-cover animate-fade-in transition-opacity duration-500"
                                    priority
                                />
                            </div>

                            <div className="absolute bottom-10 -left-4 lg:bottom-20 lg:-left-10 bg-transparent border border-(--border-color) md:p-4 p-2.5 rounded-xl shadow-xl flex items-center gap-3 animate-bounce delay-700 z-20">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-bold text-(--text-primary) md:text-sm text-xs">{t.hero.status}</span>
                            </div>
                        </div>
                    </Reveal>
                </div>

            </div>
        </section>
    );
};