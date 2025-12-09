"use client";
import { PlayIcon, CheckIcon } from './Icons';
import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    const video = document.getElementById('intro-video') as HTMLVideoElement;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

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
          <div className="order-1 lg:order-2 video-container aspect-video bg-gradient-to-br from-navy to-navy-800 relative overflow-hidden group">
            <video
              id="intro-video"
              className="w-full h-full object-cover"
              controls={isPlaying}
              poster="/images/video-poster.jpg"
              onPlay={() => setIsPlaying(true)}
            >
              <source src="/Introduction.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play button overlay - hidden when playing */}
            {!isPlaying && (
              <div 
                onClick={handlePlayClick}
                className="absolute inset-0 bg-gradient-to-br from-navy/60 to-navy-800/60 flex items-center justify-center cursor-pointer"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_70%)]"></div>
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-gold/30 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-gold/30">
                    <PlayIcon />
                  </div>
                  <p className="text-white/70 mt-6 text-sm font-medium">Watch Our Introduction</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
