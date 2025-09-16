"use client";
import Image from 'next/image';

const Hero = () => {

  return (
    <section id="home" className="relative w-full pt-20 pb-16 bg-gradient-to-br from-white via-light/20 to-accent/5 overflow-hidden">
      {/* Floating decoration elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-light/30 rounded-full animate-float"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Logo with animation */}
          <div className="mb-4 transition-all duration-300 animate-slide-up opacity-100">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl"></div>
              <Image
                src="/Logo.svg"
                alt="Faz3a Logo"
                width={280}
                height={280}
                priority
                className="relative z-10 drop-shadow-2xl animate-float"
              />
            </div>
          </div>

          {/* Main heading with staggered animation */}
          <div className="max-w-3xl mx-auto transition-all duration-300 animate-fade-in opacity-100">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 arabic-text leading-tight">
              <span className="block text-secondary mb-1">سيولة مالية</span>
              <span className="block text-gray-700 text-base md:text-lg lg:text-xl mb-1">عبارة عن سلع تشتريها أقساط</span>
              <span className="block text-accent text-base md:text-lg lg:text-xl mb-1">من تابي او تمارا</span>
              <span className="block text-secondary text-sm md:text-base lg:text-lg mb-1">ونوفر لك اعادة بيعها</span>
              <span className="block text-gray-800 text-sm md:text-base lg:text-lg">ويتحولك المبلغ كاش لحسابك بشكل فوري</span>
            </h1>
          
            {/* Subtitle with emphasis */}
            <p className="text-sm md:text-base lg:text-lg font-semibold text-accent mb-4">
              بدون كفيل وبدون شروط
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-modern bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                ابدأ الآن
              </button>
              <button className="btn-modern bg-white border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                تعرف أكثر
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
