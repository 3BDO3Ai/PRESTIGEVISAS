'use client';
import { ReactNode } from 'react';
import { ShieldCheckIcon, LockClosedIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: 'accent' | 'secondary' | 'primary';
  delay?: number;
}

const FeatureCard = ({ icon, title, description, color, delay = 0 }: FeatureCardProps) => {
  const iconClasses = {
    accent: 'bg-accent/10 text-accent',
    secondary: 'bg-secondary/10 text-secondary',
    primary: 'bg-primary/10 text-primary',
  };

  const hoverClasses = {
    accent: 'hover:shadow-accent/20',
    secondary: 'hover:shadow-secondary/20',
    primary: 'hover:shadow-primary/20',
  };

  return (
    <div 
      className={`card-hover bg-white p-8 rounded-2xl text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in ${hoverClasses[color]}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300 hover:scale-110 ${iconClasses[color]}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-secondary mb-4 arabic-text">{title}</h3>
      <p className="text-primary/80 text-lg leading-relaxed arabic-text">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 arabic-text">
            لماذا تختارنا؟
          </h2>
          <p className="text-xl text-primary/70 max-w-3xl mx-auto arabic-text">
            نقدم لك خدمات مالية مبتكرة تلبي احتياجاتك بكل سهولة وأمان
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<ShieldCheckIcon className="w-10 h-10" />}
            title="التزام وشفافية"
            description="الأسعار والدفعات موضحة بوضوح قبل الإرسال، مع ضمان كامل للشفافية في جميع المعاملات."
            color="accent"
            delay={100}
          />
          <FeatureCard
            icon={<LockClosedIcon className="w-10 h-10" />}
            title="سهل وآمن"
            description="عملية بسيطة وآمنة مع توضيح الدفعة الأولى وخياراتها، وحماية كاملة لمعلوماتك الشخصية."
            color="secondary"
            delay={200}
          />
          <FeatureCard
            icon={<ChatBubbleLeftRightIcon className="w-10 h-10" />}
            title="دعم سريع"
            description="تواصل فوري عبر واتساب لأي استفسار، مع فريق دعم متخصص متاح على مدار الساعة."
            color="primary"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;