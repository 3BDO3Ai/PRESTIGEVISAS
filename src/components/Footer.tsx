'use client';
import Image from 'next/image';

const Footer = () => {
  function playClickAnimation() {
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
              نوفر لك سيولة مالية فورية من خلال حلول مبتكرة وآمنة، 
              بدون كفيل وبدون شروط معقدة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://wa.me/966504428580" target="_blank" rel="noopener noreferrer" className="btn-modern bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold">
                تواصل معنا
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-left" style={{animationDelay: '200ms'}}>
            <h4 className="text-xl font-bold mb-6 text-accent">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#home" onClick={() => playClickAnimation()} className="text-light/80 hover:text-accent transition-colors duration-300 text-lg">الرئيسية</a></li>
              <li><a href="#prices" onClick={() => playClickAnimation()} className="text-light/80 hover:text-accent transition-colors duration-300 text-lg">المنتجات</a></li>
              <li><a href="#features" onClick={() => playClickAnimation()} className="text-light/80 hover:text-accent transition-colors duration-300 text-lg">كيف يعمل</a></li>
              <li><a href="#faq" onClick={() => playClickAnimation()} className="text-light/80 hover:text-accent transition-colors duration-300 text-lg">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right" style={{animationDelay: '400ms'}}>
            <h4 className="text-xl font-bold mb-6 text-accent">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="text-light/80 text-lg">
                <span className="block font-semibold text-white mb-1">واتساب</span>
                <a href="https://wa.me/966504428580" target="_blank" rel="noopener noreferrer" onClick={() => playClickAnimation()} className="underline">+966504428580</a>
              </li>
              <li className="text-light/80 text-lg">
                <span className="block font-semibold text-white mb-1">البريد الإلكتروني</span>
                <a href="mailto:info@faz3a.com" onClick={() => playClickAnimation()} className="underline">info@faz3a.com</a>
              </li>
              <li className="text-light/80 text-lg">
                <span className="block font-semibold text-white mb-1">العنوان</span>
                الرياض, المملكة العربية السعودية
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-light/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/60 text-center md:text-right mb-4 md:mb-0">
            © 2025. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-6 space-x-reverse">
            <a href="#" className="text-light/60 hover:text-accent transition-colors duration-300">سياسة الخصوصية</a>
            <a href="#" className="text-light/60 hover:text-accent transition-colors duration-300">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
