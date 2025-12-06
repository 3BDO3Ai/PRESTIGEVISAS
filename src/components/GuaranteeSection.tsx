import { LockIcon, PenIcon, TargetIcon, StarIcon } from './Icons';

export default function GuaranteeSection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-4">Our Commitment</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Our Premium <span className="text-gold">Guarantee</span>
          </h2>
          <div className="w-20 h-1 bg-gold mt-6 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Guarantee 1 */}
          <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-colors">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold guarantee-icon">
              <LockIcon />
            </div>
            <h3 className="font-serif text-lg text-white mb-2">Confidential Handling</h3>
            <p className="text-white/50 text-sm">Your information is secure</p>
          </div>
          
          {/* Guarantee 2 */}
          <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-colors">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold guarantee-icon">
              <PenIcon />
            </div>
            <h3 className="font-serif text-lg text-white mb-2">Western-standard Writing</h3>
            <p className="text-white/50 text-sm">Native English documentation</p>
          </div>
          
          {/* Guarantee 3 */}
          <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-colors">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold guarantee-icon">
              <TargetIcon />
            </div>
            <h3 className="font-serif text-lg text-white mb-2">Case Accuracy</h3>
            <p className="text-white/50 text-sm">Meticulous attention to detail</p>
          </div>
          
          {/* Guarantee 4 */}
          <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-colors">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold guarantee-icon">
              <StarIcon />
            </div>
            <h3 className="font-serif text-lg text-white mb-2">Professional Presentation</h3>
            <p className="text-white/50 text-sm">Officer-ready files</p>
          </div>
        </div>
      </div>
    </section>
  );
}
