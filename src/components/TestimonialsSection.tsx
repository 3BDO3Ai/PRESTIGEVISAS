import { QuoteIcon } from './Icons';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-4">Client Reviews</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">
            Success <span className="text-gold">Stories</span>
          </h2>
          <div className="w-20 h-1 bg-gold mt-6 mx-auto"></div>
          <p className="mt-6 text-charcoal/70 max-w-2xl mx-auto">
            Trusted by Professionals, Families & Students Across South Asia
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <QuoteIcon />
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              &ldquo;My UK visa was approved in 12 days — flawless file. The attention to detail was remarkable.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold font-serif">
                AK
              </div>
              <div>
                <p className="font-semibold text-navy">Ahmed Khan</p>
                <p className="text-sm text-charcoal/60">Business Visitor Visa</p>
              </div>
            </div>
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <QuoteIcon />
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              &ldquo;The best SOP and cover letter we&apos;ve seen. My daughter got admission to her dream university.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold font-serif">
                SM
              </div>
              <div>
                <p className="font-semibold text-navy">Sarah Malik</p>
                <p className="text-sm text-charcoal/60">Student Visa - Canada</p>
              </div>
            </div>
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <QuoteIcon />
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              &ldquo;British professionalism throughout. They made the PR process clear and manageable.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold font-serif">
                RJ
              </div>
              <div>
                <p className="font-semibold text-navy">Raj Patel</p>
                <p className="text-sm text-charcoal/60">PR - Australia</p>
              </div>
            </div>
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
