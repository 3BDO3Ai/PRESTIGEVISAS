export default function ProcessSection() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-4">How It Works</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">
            Our <span className="text-gold">Process</span>
          </h2>
          <div className="w-20 h-1 bg-gold mt-6 mx-auto"></div>
          <p className="mt-6 text-charcoal/70 max-w-2xl mx-auto">
            A clear, structured approach to your immigration journey
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold/30 via-gold to-gold/30"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Step 1 */}
            <div className="relative text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-navy to-navy-700 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-cream shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-gold font-serif text-2xl font-bold">01</span>
              </div>
              <h3 className="font-serif text-xl text-navy mb-3">Consultation</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed px-4">
                Eligibility check + personalised roadmap for your journey
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="relative text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-navy to-navy-700 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-cream shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-gold font-serif text-2xl font-bold">02</span>
              </div>
              <h3 className="font-serif text-xl text-navy mb-3">Document Strategy</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed px-4">
                Checklist, financial planning, risk mitigation
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="relative text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-navy to-navy-700 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-cream shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-gold font-serif text-2xl font-bold">03</span>
              </div>
              <h3 className="font-serif text-xl text-navy mb-3">File Preparation</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed px-4">
                Native-English letters, organised documents, forms
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="relative text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-cream shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-navy font-serif text-2xl font-bold">04</span>
              </div>
              <h3 className="font-serif text-xl text-navy mb-3">Submission & Tracking</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed px-4">
                Continuous updates until decision
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
