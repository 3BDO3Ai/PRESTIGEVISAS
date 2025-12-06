'use client';

import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/Logo.png" alt="Prestige Visas" className="h-10 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/80 hover:text-gold transition-colors">Home</a>
            <a href="#services" className="text-white/80 hover:text-gold transition-colors">Services</a>
            <a href="#destinations" className="text-white/80 hover:text-gold transition-colors">Destinations</a>
            <a href="#about" className="text-white/80 hover:text-gold transition-colors">About</a>
            <a href="#contact" className="btn-gold text-sm">Book Consultation</a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy border-t border-gold/20">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-white/80 hover:text-gold py-2">Home</a>
            <a href="#services" className="block text-white/80 hover:text-gold py-2">Services</a>
            <a href="#destinations" className="block text-white/80 hover:text-gold py-2">Destinations</a>
            <a href="#about" className="block text-white/80 hover:text-gold py-2">About</a>
            <a href="#contact" className="btn-gold inline-block text-sm mt-2">Book Consultation</a>
          </div>
        </div>
      )}
    </nav>
  );
}
