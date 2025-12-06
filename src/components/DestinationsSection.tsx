import { ArrowRightIcon } from './Icons';

const destinations = [
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    gradient: 'from-blue-900 to-blue-700',
    landmarkImage: '/images/uk-landmark.jpg' // Big Ben or London Eye
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    gradient: 'from-red-800 to-red-600',
    landmarkImage: '/images/canada-landmark.jpg' // CN Tower or Niagara Falls
  },
  {
    country: 'Schengen',
    flag: '🇪🇺',
    gradient: 'from-indigo-900 to-indigo-700',
    landmarkImage: '/images/schengen-landmark.jpg' // Eiffel Tower or Colosseum
  },
  {
    country: 'USA',
    flag: '🇺🇸',
    gradient: 'from-blue-800 to-blue-600',
    landmarkImage: '/images/usa-landmark.jpg' // Statue of Liberty or Golden Gate
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    gradient: 'from-amber-800 to-amber-600',
    landmarkImage: '/images/australia-landmark.jpg' // Sydney Opera House or Harbour Bridge
  }
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-4">Global Coverage</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">
            Featured <span className="text-gold">Destinations</span>
          </h2>
          <div className="w-20 h-1 bg-gold mt-6 mx-auto"></div>
          <p className="mt-6 text-charcoal/70 max-w-2xl mx-auto">
            Expert visa services for the world&apos;s most sought-after destinations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {destinations.map((destination, index) => (
            <div 
              key={destination.country}
              className={`group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${
                index === 4 ? 'lg:col-span-1 md:col-span-2' : ''
              }`}
            >
              {/* Background Image - Landmark */}
              <div 
                className="absolute inset-0 bg-navy bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${destination.landmarkImage})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${destination.gradient} opacity-60 group-hover:opacity-50 transition-opacity duration-500`}></div>
              </div>

              {/* Overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Flag at top */}
                <div className="text-5xl drop-shadow-lg">
                  {destination.flag}
                </div>

                {/* Country name and CTA at bottom */}
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    {destination.country}
                  </h3>
                  
                  {/* Hover CTA */}
                  <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
                    <p className="text-gold font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Explore Visa Options 
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </p>
                  </div>
                </div>
              </div>

              {/* Premium border effect on hover */}
              <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
