'use client';

import React, { useEffect, useState } from 'react';

interface RollingTextProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  stagger?: number;
  duration?: number;
}

export const RollingText: React.FC<RollingTextProps> = ({ 
  text, 
  as: TagName = 'div', 
  className = "",
  stagger = 0.02,
  duration = 0.6
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const Tag = TagName as React.ElementType;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Tag className={className}>{text}</Tag>;

  return (
    <Tag className={`${className} flex flex-wrap`}>
      {text.split('').map((char, i) => (
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
    </Tag>
  );
};
