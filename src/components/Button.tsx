import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  href,
  onClick,
  disabled,
  type = 'button',
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-charcoal text-white dark:bg-white dark:text-black hover:bg-brown dark:hover:bg-neon hover:text-white dark:hover:text-black",
    secondary: "bg-brown text-white hover:bg-charcoal dark:bg-neon dark:text-black dark:hover:bg-white",
    outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
    ghost: "text-charcoal dark:text-white hover:bg-charcoal/5 dark:hover:bg-white/10",
    neon: "bg-neon text-black hover:shadow-[0_0_20px_rgba(204,255,0,0.5)]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  };

  const fullClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={fullClassName}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={fullClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type}
      className={fullClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
