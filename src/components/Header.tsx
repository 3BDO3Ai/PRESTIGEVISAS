"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useContent } from '@/content/useContent';

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  const pathname = usePathname();
  const content = useContent();
  const defaultTitle = title || content.footer.company.name;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    // don't attach scroll listener on admin pages
    if (pathname && pathname.startsWith('/admin')) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // hide header for admin pages - render nothing if on admin path
  if (pathname && pathname.startsWith('/admin')) {
    return null;
  }

  // small helper to play a click animation on the header
  function playClickAnimation() {
    if (typeof window === 'undefined') return;
    const el = document.querySelector('header');
    if (!el) return;
    el.classList.remove('click-animate');
    // force reflow
    // eslint-disable-next-line no-unused-expressions
    void (el as HTMLElement).offsetWidth;
    el.classList.add('click-animate');
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-light/50' 
        : 'bg-white shadow-sm border-b border-light'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center animate-slide-in-left">
            <Link href="/" className="inline-flex items-center">
              <Image src="/Logo.svg" alt={defaultTitle} width={120} height={40} className="object-contain" />
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8 animate-fade-in">
            <a href="#home" onClick={() => { playClickAnimation(); setMobileOpen(false); }} className="text-secondary/80 hover:text-accent transition-all duration-300 hover:scale-105 font-medium relative group">
              {content.header.navigation.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#prices" onClick={() => { playClickAnimation(); setMobileOpen(false); }} className="text-secondary/80 hover:text-accent transition-all duration-300 hover:scale-105 font-medium relative group">
              {content.header.navigation.products}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#features" onClick={() => { playClickAnimation(); setMobileOpen(false); }} className="text-secondary/80 hover:text-accent transition-all duration-300 hover:scale-105 font-medium relative group">
              {content.header.navigation.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#faq" onClick={() => { playClickAnimation(); setMobileOpen(false); }} className="text-secondary/80 hover:text-accent transition-all duration-300 hover:scale-105 font-medium relative group">
              {content.header.navigation.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link href="/admin" className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-105 font-medium relative group text-xs">
              إدارة
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-controls="mobile-menu" className="p-2 text-secondary/80 hover:text-accent transition-all duration-200 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                {mobileOpen ? (
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>

          {/* (cart intentionally removed) */}
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-light shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-2">
            <a href="#home" onClick={() => { playClickAnimation(); setMobileOpen(false); }} className="text-secondary/80 hover:text-accent transition-all duration-200 py-2">{content.header.navigation.home}</a>
            <a href="#prices" onClick={() => { playClickAnimation(); setMobileOpen(false); }} className="text-secondary/80 hover:text-accent transition-all duration-200 py-2">{content.header.navigation.products}</a>
            <a href="#features" onClick={() => { playClickAnimation(); setMobileOpen(false); }} className="text-secondary/80 hover:text-accent transition-all duration-200 py-2">{content.header.navigation.about}</a>
            <a href="#faq" onClick={() => { playClickAnimation(); setMobileOpen(false); }} className="text-secondary/80 hover:text-accent transition-all duration-200 py-2">{content.header.navigation.contact}</a>
          </div>
        </div>
      )}
    </header>
  );
}