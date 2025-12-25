"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <style>{`
        :root {
          --bg-main: ${isDark ? '#020617' : '#ffffff'};
          --bg-surface: ${isDark ? '#0f172a' : '#f8fafc'};
          --bg-nav: ${isDark ? 'rgba(2, 6, 23, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
          --text-primary: ${isDark ? '#ffffff' : '#0f172a'};
          --text-secondary: ${isDark ? '#94a3b8' : '#64748b'};
          --border-color: ${isDark ? '#1e293b' : '#e2e8f0'};
          --accent: ${isDark ? '#3b82f6' : '#2563eb'};
        }
        
        /* 3D CUBE ANIMATIONS */
        .cube-container {
          width: 50px;
          height: 50px;
          perspective: 600px;
        }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: spin-cube 15s infinite linear;
        }
        .face {
          position: absolute;
          width: 50px;
          height: 50px;
          opacity: 0.9;
        }
        .front  { transform: rotateY(0deg) translateZ(25px); }
        .back   { transform: rotateY(180deg) translateZ(25px); }
        .right  { transform: rotateY(90deg) translateZ(25px); }
        .left   { transform: rotateY(-90deg) translateZ(25px); }
        .top    { transform: rotateX(90deg) translateZ(25px); }
        .bottom { transform: rotateX(-90deg) translateZ(25px); }

        @keyframes spin-cube {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
      {children}
    </ThemeContext.Provider>
  );
};