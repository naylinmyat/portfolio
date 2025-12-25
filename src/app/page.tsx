"use client";

import { useState, useEffect, createContext, useContext } from 'react';
import {
  Mail,
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  MapPin,
  FileInput,
  Phone,
  Award,
  BookOpen,
  Cpu
} from 'lucide-react';

import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMysql
} from "react-icons/si";

import {
  LuGithub,
  LuLinkedin
} from "react-icons/lu";

// --- Types & Interfaces ---

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  role: string;
  year: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface Certification {
  name: string,
  fullName: string,
  issuer: string,
  icon: any,
  color: string,
  bg: string,
  border: string
}

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// --- Context ---

const ThemeContext = createContext<ThemeContextType>({
  isDark: false, // Default context value matched to initial state
  toggleTheme: () => { },
});

const useTheme = () => useContext(ThemeContext);

// --- Data ---

const EXPERIENCES: Experience[] = [
  {
    company: "Laconic (Thai Comapny)",
    role: "Mid Level Frontend Developer",
    period: "2024 - Present",
    description: "Rebuilding the core products using Next.js, TypeScript and ReactNative. Improved load times by 40%."
  },
  {
    company: "Cyber Missions Myanmar(Japan Company)",
    role: "Programmer (Intern)",
    period: "2024 - 2024",
    description: "Developed chatting app by using Flutter and Docker."
  },
  {
    company: "Digit House (Myanmar Company)",
    role: "Junior Developer",
    period: "2022 - 2022",
    description: "Collaborated on web app development using HTML, CSS and JS. Created too many web templates."
  }
];

const PROJECTS: Project[] = [
  {
    title: "Payni",
    description: "PayNi provides a financial platform allowing users to securely store, manage, and transact both Fiat (like THB, USD) and Crypto funds globally, 24/7. It functions as a digital wallet and facilitates buying/selling of assets. Additionally, PayNi offers a payment gateway API, enabling businesses to integrate PayNi's payment processing capabilities into their own websites or applications.",
    tags: ["Next.js", "Websocket"],
    role: "Mid Level Frontend Developer",
    year: "2024",
    link: "https://payni.io/",
  },
  {
    title: "Jobonic",
    description: "Jobonic is a dynamic platform designed to connect skilled freelancers (Service Offers) with individuals and businesses seeking services (Service Requests). It aims to bridge the gap between talent and opportunity, providing a user-friendly marketplace for a wide range of freelance services, facilitating efficient collaboration and project completion.",
    tags: ["Next.js", "Typescript", "Supabase"],
    role: "Mid Level Frontend Developer",
    year: "2025",
    link: "https://jobonic.io/",
  },
  {
    title: "Laconic Website",
    description: "Laconic - Enterprise ERP, ERPaaS solution has been implemented for more than 15 years, successfully supporting the regional operations of large-scale small and medium-sized enterprises engaged in manufacturing in Thailand and covering a wide range of professional industry clusters.",
    tags: ["Next.js", "Typescript", "Payload CMS"],
    role: "Mid Level Frontend Developer",
    year: "2025",
    link: "https://laconic.co.th/",
  },
  {
    title: "Food Recipe Website",
    description: "This intuitive food recipe application provides users with a seamless way to discover new dishes. Users can search for specific meals or browse by categories such as Beef, Seafood, or Vegetarian. Each recipe entry is comprehensive, offering detailed ingredient lists with measurements, clear cooking instructions, and an embedded YouTube video tutorial to ensure culinary success for cooks of all levels.",
    tags: ["React.js"],
    role: "Solo Developer",
    year: "2024",
    link: "https://food-recipe-app-omega.vercel.app/",
  },
];

const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "WebSocket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" }
    ]
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" }
    ]
  },
];

const CERTIFICATIONS: Certification[] = [
  {
    name: "JLPT N4",
    fullName: "Japanese Language Proficiency Test",
    issuer: "The Japan Foundation",
    icon: BookOpen,
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "group-hover:border-red-500"
  },
  {
    name: "ITPEC FE",
    fullName: "Fundamental Information Technology Engineer",
    issuer: "ITPEC (Information Technology Professionals Examination Council)",
    icon: Cpu,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500"
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-(--bg-nav) backdrop-blur-md border-b border-(--border-color) shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 font-bold text-2xl tracking-tighter text-(--text-primary)">
            NLM<span className="text-(--accent)">.</span>
          </div>

          {/* Desktop Menu */}
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

            <div className="flex items-center gap-4 pl-8 border-l border-(--border-color)">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-(--bg-surface) text-(--text-primary) transition-colors"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-(--text-primary)"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
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

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 pb-10 bg-(--bg-main)">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Text */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="inline-block px-4 py-2 mb-6 border border-(--accent) text-(--accent) font-bold uppercase tracking-widest text-xs rounded-full animate-fade-in">
            Available for Hire
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-(--text-primary) mb-6 tracking-tight leading-none">
            NAY LIN <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--text-secondary) to-(--text-primary)">MYAT</span>
          </h1>

          <p className="text-xl md:text-2xl text-(--text-secondary) max-w-lg mx-auto md:mx-0 mb-10 font-light leading-relaxed">
            Building robust <span className="text-(--accent) font-medium">Next.js</span> applications and scalable mobile solutions with modern aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4 mb-12">
            <a href="#contact" className="px-8 py-4 bg-(--text-primary) text-(--bg-main) font-bold rounded-full hover:opacity-90 transition-all flex items-center gap-2">
              Work With Me <ArrowRight size={20} />
            </a>
            <a href="https://registry.jsonresume.org/naylinmyat?theme=stackoverflow" target='_blank' className="px-8 py-4 border border-(--border-color) text-(--text-primary) font-bold rounded-full hover:bg-(--bg-surface) transition-all flex items-center gap-2">
              <FileInput size={20} /> View CV
            </a>
          </div>

          <div className="flex items-center md:justify-start justify-center gap-6 text-(--text-secondary)">
            <a href="https://github.com/naylinmyat" target='_blank' className="hover:text-(--accent) transition-colors transform hover:scale-110"><LuGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/nay-lin-myat-b60127224/" target='_blank' className="hover:text-(--accent) transition-colors transform hover:scale-110"><LuLinkedin size={24} /></a>
            <a href="mailto:naylinmyat04@gmail.com" className="hover:text-(--accent) transition-colors transform hover:scale-110"><Mail size={24} /></a>
          </div>
        </div>

        {/* Right Side: Avatar */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <div className="relative w-72 h-72 md:w-125 md:h-125">
            {/* Decorative Circle Behind */}
            <div className="absolute -inset-8 md:-inset-12 rounded-full animate-[spin_20s_linear_infinite]">

              {/* 1. React (Top Center) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-(--bg-surface) p-3 rounded-full border border-(--border-color) shadow-sm">
                <SiReact
                  size={24}
                  className="text-[#61DAFB]"
                  style={{ animation: 'spin 20s linear infinite reverse' }}
                />
              </div>

              {/* 2. Tailwind (Top Right) */}
              <div className="absolute top-[25%] right-[6.7%] translate-x-1/2 -translate-y-1/2 bg-(--bg-surface) p-3 rounded-full border border-(--border-color) shadow-sm">
                <SiTailwindcss
                  size={24}
                  className="text-[#06B6D4]"
                  style={{ animation: 'spin 20s linear infinite reverse' }}
                />
              </div>

              {/* 3. Next.js (Bottom Right) */}
              <div className="absolute bottom-[25%] right-[6.7%] translate-x-1/2 translate-y-1/2 bg-(--bg-surface) p-3 rounded-full border border-(--border-color) shadow-sm">
                <SiNextdotjs
                  size={24}
                  className="text-(--text-primary)"
                  style={{ animation: 'spin 20s linear infinite reverse' }}
                />
              </div>

              {/* 4. TypeScript (Bottom Center) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-(--bg-surface) p-3 rounded-full border border-(--border-color) shadow-sm">
                <SiTypescript
                  size={24}
                  className="text-[#3178C6]"
                  style={{ animation: 'spin 20s linear infinite reverse' }}
                />
              </div>

              {/* 5. JavaScript (Bottom Left) */}
              <div className="absolute bottom-[25%] left-[6.7%] -translate-x-1/2 translate-y-1/2 bg-(--bg-surface) p-3 rounded-full border border-(--border-color) shadow-sm">
                <SiJavascript
                  size={24}
                  className="text-[#F7DF1E]"
                  style={{ animation: 'spin 20s linear infinite reverse' }}
                />
              </div>

              {/* 6. MySQL (Top Left) */}
              <div className="absolute top-[25%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 bg-(--bg-surface) p-3 rounded-full border border-(--border-color) shadow-sm">
                <SiMysql
                  size={24}
                  className="text-[#4479A1]"
                  style={{ animation: 'spin 20s linear infinite reverse' }}
                />
              </div>

            </div>

            {/* Main Avatar Container */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-(--bg-surface) shadow-2xl transition-transform duration-500 hover:scale-[1.03]">
              <img
                src="/my-avatar-2.png"
                alt="Nay Lin Myat"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-4 md:bottom-20 md:-left-10 bg-transparent border border-(--border-color) p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce delay-700">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-(--text-primary) text-sm">Open To Work</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-(--bg-surface)">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-(--accent) font-bold tracking-widest uppercase text-sm">Career Path</span>
          <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) mt-2">Professional Experience</h2>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="bg-(--bg-main) p-8 rounded-2xl border border-(--border-color) hover:border-(--accent) transition-colors shadow-sm group">
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
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  return (
    <section className="py-12 bg-(--bg-surface) border-t border-(--border-color)">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Award className="text-(--accent)" size={24} />
          <h2 className="text-2xl font-bold text-(--text-primary)">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className={`group bg-(--bg-main) p-6 rounded-2xl border border-(--border-color) transition-all duration-300 ${cert.border} hover:shadow-lg flex items-start gap-4`}>
              <div className={`p-3 rounded-xl ${cert.bg} ${cert.color}`}>
                <cert.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-(--text-primary)">{cert.name}</h3>
                <p className="text-sm font-medium text-(--text-primary) opacity-90">{cert.fullName}</p>
                <p className="text-xs text-(--text-secondary) mt-1">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-(--bg-main)">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-(--accent) font-bold tracking-widest uppercase text-sm">Tech Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) mt-2">Tools & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="bg-(--bg-surface) p-8 rounded-3xl border border-(--border-color)">
              <h3 className="text-xl font-bold text-(--text-primary) mb-8 text-center uppercase tracking-wide border-b border-(--border-color) pb-4">
                {category.category}
              </h3>

              <div className="grid grid-cols-3 gap-6">
                {category.items.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 bg-(--bg-main) rounded-2xl flex items-center justify-center mb-3 shadow-sm border border-(--border-color) transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg group-hover:border-(--accent)">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-sm font-medium text-(--text-secondary) group-hover:text-(--text-primary) transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-(--bg-surface)">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-(--border-color) pb-8">
          <div>
            <span className="text-(--accent) font-bold tracking-widest uppercase text-sm">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold text-(--text-primary) mt-2">Selected Works</h2>
          </div>
          <a href="https://github.com/naylinmyat" target='_blank' className="hidden md:flex items-center gap-2 text-(--text-primary) font-bold hover:text-(--accent) transition-colors">
            View GitHub <ExternalLink size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group flex flex-col h-full">
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
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="https://github.com/naylinmyat" target='_blank' className="inline-flex items-center gap-2 text-(--text-primary) font-bold border-b-2 border-(--text-primary) pb-1">
            View GitHub <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-(--bg-main)">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-(--text-primary) mb-8">Let's build something amazing.</h2>
        <p className="text-xl text-(--text-secondary) mb-12 max-w-2xl mx-auto">
          Currently based in Tokyo, Japan and open for opportunities.
        </p>

        <div className="bg-(--bg-surface) p-8 md:p-12 rounded-3xl border border-(--border-color)">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">

            {/* 1. Email */}
            <a href="mailto:naylinmyat04@gmail.com" className="flex flex-col items-center group min-w-40">
              <div className="w-16 h-16 bg-(--bg-main) rounded-full flex items-center justify-center text-(--text-primary) mb-4 border border-(--border-color) group-hover:border-(--accent) transition-colors group-hover:scale-110">
                <Mail size={28} />
              </div>
              <span className="text-(--text-primary) font-bold text-lg">Email Me</span>
              <span className="text-(--text-secondary) text-sm mt-1">naylinmyat04@gmail.com</span>
            </a>

            {/* Divider 1 */}
            <div className="hidden md:block w-px h-24 bg-(--border-color)"></div>

            {/* 2. Phone (New) */}
            <a href="tel:+817090541490" className="flex flex-col items-center group min-w-40">
              <div className="w-16 h-16 bg-(--bg-main) rounded-full flex items-center justify-center text-(--text-primary) mb-4 border border-(--border-color) group-hover:border-(--accent) transition-colors group-hover:scale-110">
                <Phone size={28} />
              </div>
              <span className="text-(--text-primary) font-bold text-lg">Call Me</span>
              <span className="text-(--text-secondary) text-sm mt-1">+81 70-9054-1490</span>
            </a>

            {/* Divider 2 */}
            <div className="hidden md:block w-px h-24 bg-(--border-color)"></div>

            {/* 3. LinkedIn */}
            <a href="https://www.linkedin.com/in/nay-lin-myat-b60127224/" target='_blank' className="flex flex-col items-center group min-w-40">
              <div className="w-16 h-16 bg-(--bg-main) rounded-full flex items-center justify-center text-(--text-primary) mb-4 border border-(--border-color) group-hover:border-(--accent) transition-colors group-hover:scale-110">
                <LuLinkedin size={28} />
              </div>
              <span className="text-(--text-primary) font-bold text-lg">LinkedIn</span>
              <span className="text-(--text-secondary) text-sm mt-1">Connect Profile</span>
            </a>

          </div>
        </div>

        <div className="mt-16 text-(--text-secondary) flex items-center justify-center gap-2">
          <MapPin size={18} /> Tokyo, Japan
        </div>
      </div>
    </section>
  );
};

// --- Main App Component ---

const App = () => {
  // FIXED: Explicitly set initial state to false (Light Mode)
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <style>{`
        :root {
          /* Professional Monochromatic with Sharp Blue Accent */
          --bg-main: ${isDark ? '#020617' : '#ffffff'};       /* Slate-950 vs White */
          --bg-surface: ${isDark ? '#0f172a' : '#f8fafc'};    /* Slate-900 vs Slate-50 */
          --bg-nav: ${isDark ? 'rgba(2, 6, 23, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
          
          --text-primary: ${isDark ? '#ffffff' : '#0f172a'};  /* White vs Slate-900 */
          --text-secondary: ${isDark ? '#94a3b8' : '#64748b'};/* Slate-400 vs Slate-500 */
          
          --border-color: ${isDark ? '#1e293b' : '#e2e8f0'};  /* Slate-800 vs Slate-200 */
          --accent: ${isDark ? '#3b82f6' : '#2563eb'};        /* Blue-500 vs Blue-600 */
        }
      `}</style>

      <div className="min-h-screen bg-(--bg-main) text-(--text-primary) font-sans selection:bg-(--accent) selection:text-white transition-colors duration-300 overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Certifications />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="py-8 text-center text-(--text-secondary) text-sm border-t border-(--border-color) bg-(--bg-main)">
          © {new Date().getFullYear()} Nay Lin Myat. All Rights Reserved.
        </footer>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;