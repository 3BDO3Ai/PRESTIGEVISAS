"use client";
import { CheckIcon } from './Icons';

export default function VideoSection() {
  return (
    <section id="video" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video description */}
          <div className="order-2 lg:order-1">
            <p className="text-gold font-medium text-sm uppercase tracking-wider mb-4">Welcome to Our Consultancy</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-tight">
              Expert Guidance, Delivered with
              <span className="text-gold block mt-1">British Professionalism</span>
            </h2>
            <div className="w-20 h-1 bg-gold mt-6"></div>
            <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
              We review every application with the precision and clarity international officers expect.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-gold">
                  <CheckIcon />
                </div>
                <p className="text-charcoal/80">Native English documentation & communication</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-gold">
                  <CheckIcon />
                </div>
                <p className="text-charcoal/80">Personal consultation with British consultant</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-gold">
                  <CheckIcon />
                </div>
                <p className="text-charcoal/80">Strategic approach to every case</p>
              </div>
            </div>
          </div>
          
          {/* Video Container */}
          <div className="order-1 lg:order-2 video-container aspect-video relative overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
            >
              <source src="/Introduction.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
