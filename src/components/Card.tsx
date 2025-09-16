'use client';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  hover = false,
  onClick
}: CardProps) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white shadow-md',
    elevated: 'bg-white shadow-lg hover:shadow-xl',
    outlined: 'bg-white border-2 border-light shadow-sm hover:border-accent/50',
    filled: 'bg-light/30 border border-light/50'
  };

  const hoverClasses = hover ? 'card-hover cursor-pointer' : '';
  const clickable = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${clickable} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
