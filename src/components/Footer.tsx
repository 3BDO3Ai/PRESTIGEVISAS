'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContent } from '@/content/useContent';

const Footer = () => {
  const pathname = usePathname();
  const content = useContent();

  // hide footer for admin pages
  if (pathname && pathname.startsWith('/admin')) {
    return null;
  }
  function playClickAnimation() {
    if (typeof window === 'undefined') return;
    const el = document.querySelector('footer');
    if (!el) return;
    el.classList.remove('click-animate');
    // force reflow
    // eslint-disable-next-line no-unused-expressions
    void (el as HTMLElement).offsetWidth;
    el.classList.add('click-animate');
  }
  return (
    <footer id="contact" className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-2 animate-fade-in">
            <div className="flex items-center mb-6">
              <Image
                src="/Logo.svg"
                alt="Faz3a Logo"
                width={140}
                height={140}
                className="ml-4"
              />
            </div>
            <p className="text-light/80 text-lg leading-relaxed mb-6 arabic-text max-w-md">
              {content.footer.company.description}
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href={`https://wa.me/${content.footer.contact.phone}`} target="_blank" rel="noopener noreferrer" className="btn-modern bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold">
                {content.footer.contact.contactButton}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-left" style={{animationDelay: '200ms'}}>
            <h4 className="text-xl font-bold mb-6 text-accent">{content.footer.quickLinks.title}</h4>
            <ul className="space-y-4">
              <li><a href="#home" onClick={() => playClickAnimation()} className="text-light/80 hover:text-accent transition-colors duration-300 text-lg">{content.footer.quickLinks.home}</a></li>
              <li><a href="#prices" onClick={() => playClickAnimation()} className="text-light/80 hover:text-accent transition-colors duration-300 text-lg">{content.footer.quickLinks.products}</a></li>
              <li><a href="#features" onClick={() => playClickAnimation()} className="text-light/80 hover:text-accent transition-colors duration-300 text-lg">{content.footer.quickLinks.howItWorks}</a></li>
              <li><a href="#faq" onClick={() => playClickAnimation()} className="text-light/80 hover:text-accent transition-colors duration-300 text-lg">{content.footer.quickLinks.faq}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right" style={{animationDelay: '400ms'}}>
            <h4 className="text-xl font-bold mb-6 text-accent">{content.footer.contact.title}</h4>
            <ul className="space-y-4">
              <li className="text-light/80 text-lg">
                <span className="block font-semibold text-white mb-1">{content.footer.contact.whatsapp}</span>
                <a href={`https://wa.me/${content.footer.contact.phone}`} target="_blank" rel="noopener noreferrer" onClick={() => playClickAnimation()} className="underline">+{content.footer.contact.phone}</a>
              </li>
              <li className="text-light/80 text-lg">
                <span className="block font-semibold text-white mb-1">{content.footer.contact.email}</span>
                <a href={`mailto:${content.footer.contact.emailAddress}`} onClick={() => playClickAnimation()} className="underline">{content.footer.contact.emailAddress}</a>
              </li>
              <li className="text-light/80 text-lg">
                <span className="block font-semibold text-white mb-1">{content.footer.contact.address}</span>
                {content.footer.contact.addressValue}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-light/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/60 text-center md:text-right mb-4 md:mb-0">
            {content.footer.legal.copyright}
          </p>
          <div className="flex space-x-6 space-x-reverse">
            <a href="#" className="text-light/60 hover:text-accent transition-colors duration-300">{content.footer.legal.privacy}</a>
            <a href="#" className="text-light/60 hover:text-accent transition-colors duration-300">{content.footer.legal.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
