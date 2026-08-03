import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import VideoSection from '@/components/VideoSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import DestinationsSection from '@/components/DestinationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <TrustBadges />
      <VideoSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <DestinationsSection />
      <TestimonialsSection />
      <ProcessSection />
      <GuaranteeSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
