"use client";

import { useState, useEffect, useRef } from 'react';

interface RevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    className?: string;
}

export const Reveal = ({ children, direction = 'up', delay = 0, className = "" }: RevealProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.disconnect();
        };
    }, []);

    const getTransform = () => {
        if (!isVisible) {
            switch (direction) {
                case 'up': return 'translateY(50px)';
                case 'down': return 'translateY(-50px)';
                case 'left': return 'translateX(50px)';
                case 'right': return 'translateX(-50px)';
                default: return 'translateY(50px)';
            }
        }
        return 'translate(0)';
    };

    return (
        <div
            ref={ref}
            className={`${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
            }}
        >
            {children}
        </div>
    );
};