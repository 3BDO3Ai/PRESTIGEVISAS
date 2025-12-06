export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center stat-item">
            <p className="text-4xl md:text-5xl font-serif text-navy font-bold">98%</p>
            <p className="text-charcoal/60 text-sm mt-2">Success Rate</p>
          </div>
          <div className="text-center stat-item" style={{animationDelay: '0.1s'}}>
            <p className="text-4xl md:text-5xl font-serif text-navy font-bold">1000+</p>
            <p className="text-charcoal/60 text-sm mt-2">Visas Approved</p>
          </div>
          <div className="text-center stat-item" style={{animationDelay: '0.2s'}}>
            <p className="text-4xl md:text-5xl font-serif text-navy font-bold">50+</p>
            <p className="text-charcoal/60 text-sm mt-2">Countries Covered</p>
          </div>
          <div className="text-center stat-item" style={{animationDelay: '0.3s'}}>
            <p className="text-4xl md:text-5xl font-serif text-navy font-bold">7+</p>
            <p className="text-charcoal/60 text-sm mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
