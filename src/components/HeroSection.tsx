import { ArrowRightIcon } from './Icons';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient pt-20">
      {/* Background overlay with city silhouette effect */}
      <div className="absolute inset-0 bg-[url('/city-silhouette.png')] bg-bottom bg-no-repeat bg-contain opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight animate-fade-in-up">
              Your Trusted Partner in
              <span className="block text-gold mt-2">Global Visa & Immigration Excellence</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl animate-fade-in-up stagger-2">
              Premium, personalised guidance for UK, Canada, Schengen, USA, Australia & beyond.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up stagger-3">
              <a href="#contact" className="btn-gold flex items-center justify-center gap-2">
                Start Your Application
                <ArrowRightIcon />
              </a>
              <a href="#video" className="btn-outline flex items-center justify-center gap-2">
                Speak with a British Consultant
              </a>
            </div>
          </div>
          
          {/* Hero image/visual placeholder */}
          <div className="hidden lg:flex justify-center animate-fade-in-up stagger-4">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gold/30 via-gold/10 to-transparent flex items-center justify-center animate-pulse-slow">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-navy-700 to-navy border-2 border-gold/40 flex items-center justify-center shadow-2xl">
                  <div className="text-center px-6">
                    <div className="text-gold text-6xl font-serif mb-3">✦</div>
                    <p className="text-white/70 text-sm font-medium">British-Led Excellence</p>
                    <p className="text-gold/60 text-xs mt-1">Since 2018</p>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 bg-white rounded-xl px-5 py-3 shadow-2xl border border-gold/20">
                <p className="text-gold font-bold text-2xl">98%</p>
                <p className="text-navy/70 text-xs font-medium">Success Rate</p>
              </div>
              <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-gold to-gold-400 rounded-xl px-5 py-3 shadow-2xl">
                <p className="text-navy font-bold text-2xl">1000+</p>
                <p className="text-navy/70 text-xs font-medium">Visas Approved</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
