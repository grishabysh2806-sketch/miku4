'use client';

import React, { useEffect, useState } from 'react';

interface RollingTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  stagger?: number;
  duration?: number;
}

export const RollingText: React.FC<RollingTextProps> = ({ 
  text, 
  as: Tag = 'div', 
  className = "",
  stagger = 0.02,
  duration = 0.6
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    const FallbackTag = Tag as any;
    return <FallbackTag className={className}>{text}</FallbackTag>;
  }

  const ContainerTag = Tag as any;

  return (
    <ContainerTag className={`${className} flex flex-wrap`}>
      {text.split('').map((char: string, i: number) => (
        <span
          key={i}
          className="inline-block animate-[rollIn_0.5s_ease-out_forwards]"
          style={{ 
            animationDelay: `${i * stagger}s`,
            animationDuration: `${duration}s`,
            whiteSpace: char === ' ' ? 'pre' : 'normal'
          }}
        >
          {char}
        </span>
      ))}
    </ContainerTag>
  );
};
