import { ShieldCheckIcon, UserIcon, DocumentCheckIcon, CurrencyIcon } from './Icons';

export default function WhyChooseUsSection() {
  return (
    <section id="about" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-4">Our Difference</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Why Choose <span className="text-gold">Us</span>
          </h2>
          <div className="w-20 h-1 bg-gold mt-6 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pillar 1 */}
          <div className="text-center p-8 border-r-0 lg:border-r border-gold/20">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
              <ShieldCheckIcon />
            </div>
            <h3 className="font-serif text-xl text-white mb-3">British-led Expertise</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Western-standard documentation & communication
            </p>
          </div>
          
          {/* Pillar 2 */}
          <div className="text-center p-8 border-r-0 lg:border-r border-gold/20">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
              <UserIcon />
            </div>
            <h3 className="font-serif text-xl text-white mb-3">One-to-One Advisory</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Every case personally reviewed
            </p>
          </div>
          
          {/* Pillar 3 */}
          <div className="text-center p-8 border-r-0 lg:border-r border-gold/20">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
              <DocumentCheckIcon />
            </div>
            <h3 className="font-serif text-xl text-white mb-3">Error-Free Documentation</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Seamlessly structured files for officers
            </p>
          </div>
          
          {/* Pillar 4 */}
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
              <CurrencyIcon />
            </div>
            <h3 className="font-serif text-xl text-white mb-3">Transparent Pricing</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              No hidden costs. No shortcuts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
