"use client";

import Image from 'next/image';

interface LoadingSplashProps {
  isLoading: boolean;
}

export default function LoadingSplash({ isLoading }: LoadingSplashProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-white via-light/20 to-accent/5 flex items-center justify-center">
      {/* Background decoration elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-10 w-18 h-18 bg-light/30 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Main splash content */}
      <div className="relative z-10 text-center">
        {/* Logo with enhanced animation */}
        <div className="mb-8 transition-all duration-300">
          <div className="relative inline-block animate-fade-in-up">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse-glow"></div>
            <Image
              src="/Logo.svg"
              alt="Faz3a Logo"
              width={200}
              height={200}
              priority
              className="relative z-10 drop-shadow-2xl animate-smooth-bounce"
            />
          </div>
        </div>

        {/* Loading spinner */}
        <div className="mt-8 flex justify-center">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-secondary/30 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-6 flex justify-center space-x-2 space-x-reverse">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
        </div>
      </div>
    </div>
  );
}