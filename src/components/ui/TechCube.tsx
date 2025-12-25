"use client";

import { SiReact, SiTailwindcss, SiNextdotjs, SiTypescript, SiJavascript, SiMysql } from "react-icons/si";

export const TechCube = () => {
  return (
    <div className={`cube-container relative block z-0 hover:opacity-100 transition-opacity duration-300`}>
      <div className="cube">
        <div className="face front bg-(--bg-surface)/90 border border-(--accent) flex items-center justify-center">
          <SiReact size={20} className="text-[#61DAFB]" />
        </div>
        <div className="face back bg-(--bg-surface)/90 border border-(--accent) flex items-center justify-center">
          <SiNextdotjs size={20} className="text-(--text-primary)" />
        </div>
        <div className="face right bg-(--bg-surface)/90 border border-(--accent) flex items-center justify-center">
          <SiTypescript size={20} className="text-[#3178C6]" />
        </div>
        <div className="face left bg-(--bg-surface)/90 border border-(--accent) flex items-center justify-center">
          <SiTailwindcss size={20} className="text-[#06B6D4]" />
        </div>
        <div className="face top bg-(--bg-surface)/90 border border-(--accent) flex items-center justify-center">
          <SiJavascript size={20} className="text-[#F7DF1E]" />
        </div>
        <div className="face bottom bg-(--bg-surface)/90 border border-(--accent) flex items-center justify-center">
          <SiMysql size={20} className="text-[#4479A1]" />
        </div>
      </div>
    </div>
  );
};
