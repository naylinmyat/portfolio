"use client";

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { useLanguage } from '@/context/LanguageContext';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: `${t.nav.experience}`, href: '#experience' },
        { name: `${t.nav.projects}`, href: '#projects' },
        { name: `${t.nav.skills}`, href: '#skills' },
        { name: `${t.nav.contact}`, href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-(--bg-nav) backdrop-blur-md border-b border-(--border-color) shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Reveal direction='down' delay={0.1}>
                        <a href="#" className="shrink-0 font-bold text-2xl tracking-tighter text-(--text-primary) cursor-pointer">
                            NLM<span className="text-(--accent)">.</span>
                        </a>
                    </Reveal>

                    {/* Desktop Menu */}
                    <Reveal direction='left' delay={0.1}>
                        <div className="hidden md:flex items-center gap-8">
                            <div className="flex items-baseline space-x-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-(--text-secondary) hover:text-(--text-primary) px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wide"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 pl-6 border-l border-(--border-color)">
                                {/* Theme Toggle */}
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-full hover:bg-(--bg-surface) text-(--text-primary) transition-colors"
                                    aria-label="Toggle Theme"
                                >
                                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                                </button>

                                {/* Language Toggle (Dropdown) */}
                                <div className="relative group">
                                    <Globe size={16} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-(--text-secondary) z-10" />
                                    <select
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value as any)}
                                        className="appearance-none bg-transparent border border-(--border-color) text-(--text-primary) text-sm font-bold py-2 pl-8 pr-7 rounded-full focus:outline-none focus:border-(--accent) cursor-pointer"
                                    >
                                        <option value="en" className="bg-(--bg-main)">EN</option>
                                        <option value="ja" className="bg-(--bg-main)">JP</option>
                                        <option value="my" className="bg-(--bg-main)">MY</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-(--text-secondary) pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-(--text-primary)"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Mobile Language Toggle (Dropdown) */}
                        <div className="relative group">
                            <Globe size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-(--text-secondary) z-10" />
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value as any)}
                                className="appearance-none bg-transparent border border-(--border-color) text-(--text-primary) text-xs font-bold py-2 pl-8 pr-7 rounded-full focus:outline-none focus:border-(--accent) cursor-pointer"
                            >
                                <option value="en" className="bg-(--bg-main)">EN</option>
                                <option value="ja" className="bg-(--bg-main)">JP</option>
                                <option value="my" className="bg-(--bg-main)">MY</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-(--text-secondary) pointer-events-none" />
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-(--text-primary) p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-(--bg-main) border-b border-(--border-color) h-screen">
                    <div className="px-4 pt-8 pb-3 space-y-4 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-(--text-primary) block px-3 py-2 text-2xl font-bold"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};