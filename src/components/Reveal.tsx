'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up";
  className?: string;
}

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0,
  duration = 0.5,
  variant = "fade-up",
  className = ""
}: RevealProps) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const variants = {
    "fade-up": { initial: "translate-y-8 opacity-0", animate: "translate-y-0 opacity-100" },
    "fade-down": { initial: "-translate-y-8 opacity-0", animate: "translate-y-0 opacity-100" },
    "fade-left": { initial: "translate-x-8 opacity-0", animate: "translate-x-0 opacity-100" },
    "fade-right": { initial: "-translate-x-8 opacity-0", animate: "translate-x-0 opacity-100" },
    "scale-up": { initial: "scale-90 opacity-0", animate: "scale-100 opacity-100" }
  };

  const currentVariant = variants[variant];

  return (
    <div 
      ref={ref} 
      style={{ width }} 
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className={`transition-all ease-out`}
        style={{
          transitionDuration: `${duration}s`,
          transitionDelay: `${delay}ms`,
          transform: isVisible ? currentVariant.animate.split(' ')[0] : currentVariant.initial.split(' ')[0],
          opacity: isVisible ? 1 : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};
