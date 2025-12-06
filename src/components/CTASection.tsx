import { CheckIcon, ArrowRightIcon, WhatsAppIcon } from './Icons';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left side - Image/Visual */}
            <div className="bg-gradient-to-br from-navy to-navy-800 p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="text-center lg:text-left relative z-10">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 border border-gold/30">
                  <div className="text-gold text-4xl font-serif">✦</div>
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">
                  Your Journey Starts Here
                </h3>
                <p className="text-white/60">
                  Connect with our British consultant for personalised guidance
                </p>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="text-gold"><CheckIcon /></span>
                    <span>Free eligibility assessment</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="text-gold"><CheckIcon /></span>
                    <span>Personalised visa strategy</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="text-gold"><CheckIcon /></span>
                    <span>Transparent fee structure</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - CTA */}
            <div className="p-12 flex flex-col justify-center">
              <h2 className="font-serif text-3xl text-navy mb-4">
                Begin Your Journey <span className="text-gold">With Confidence</span>
              </h2>
              <p className="text-charcoal/70 mb-8">
                Book a premium consultation or start your application today.
              </p>
              
              <div className="space-y-4">
                <a href="#" className="btn-gold w-full flex items-center justify-center gap-2 text-center">
                  Book a Consultation
                  <ArrowRightIcon />
                </a>
                <a href="#" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded flex items-center justify-center gap-2 transition-colors">
                  <WhatsAppIcon />
                  WhatsApp Now
                </a>
              </div>
              
              <p className="mt-6 text-sm text-charcoal/50 text-center">
                Typically respond within 2 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
