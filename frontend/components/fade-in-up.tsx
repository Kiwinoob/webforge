'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInUpProps {
  children: React.ReactNode;
  className?: string;
}

const FadeInUpSection: React.FC<FadeInUpProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`
        opacity-0
        ${inView ? 'animate-fade-in-up' : ''}
        ${className || ''}
      `}
    >
      {children}
    </div>
  );
};

export default FadeInUpSection;
