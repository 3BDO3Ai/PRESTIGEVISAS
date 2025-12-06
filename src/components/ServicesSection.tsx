import { GlobeIcon, AcademicCapIcon, UsersIcon, ArrowRightIcon } from './Icons';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-4">What We Offer</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">
            Our Signature <span className="text-gold">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gold mt-6 mx-auto"></div>
          <p className="mt-6 text-charcoal/70 max-w-2xl mx-auto">
            Comprehensive visa and immigration solutions tailored to your unique requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="premium-card group">
            <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300 text-white">
              <GlobeIcon />
            </div>
            <h3 className="font-serif text-xl text-navy mb-4">Visitor & Tourist Visas</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Stress-free, accurate documentation for global travel. We handle every detail with precision.
            </p>
            <div className="mt-6 pt-6 border-t border-gold/20">
              <a href="#contact" className="text-gold font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon />
              </a>
            </div>
          </div>
          
          {/* Service Card 2 */}
          <div className="premium-card group">
            <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300 text-white">
              <AcademicCapIcon />
            </div>
            <h3 className="font-serif text-xl text-navy mb-4">Student Visas & Admissions</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Native-English SOPs, course matching & full visa preparation for your educational journey.
            </p>
            <div className="mt-6 pt-6 border-t border-gold/20">
              <a href="#contact" className="text-gold font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon />
              </a>
            </div>
          </div>
          
          {/* Service Card 3 */}
          <div className="premium-card group">
            <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300 text-white">
              <UsersIcon />
            </div>
            <h3 className="font-serif text-xl text-navy mb-4">PR & Skilled Migration</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Strategic PR advisory for Canada, Australia & Europe. Your pathway to permanent residency.
            </p>
            <div className="mt-6 pt-6 border-t border-gold/20">
              <a href="#contact" className="text-gold font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
