"use client";
import { CheckIcon, ArrowRightIcon, WhatsAppIcon } from './Icons';
import { useState } from 'react';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    visaType: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*New Consultation Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Destination:* ${formData.destination}%0A` +
      `*Visa Type:* ${formData.visaType}`;
    
    // Replace with your WhatsApp business number (format: country code + number, no + or spaces)
    const whatsappNumber = '447123456789'; // Update this with actual number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      visaType: ''
    });
    setShowForm(false);
  };

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
              
              {!showForm ? (
                <div className="space-y-4">
                  <button 
                    onClick={() => setShowForm(true)}
                    className="btn-gold w-full flex items-center justify-center gap-2 text-center"
                  >
                    Book a Consultation
                    <ArrowRightIcon />
                  </button>
                  <a href="https://wa.me/447123456789" target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded flex items-center justify-center gap-2 transition-colors">
                    <WhatsAppIcon />
                    WhatsApp Now
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal/20 rounded focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal/20 rounded focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal/20 rounded focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal/20 rounded focus:outline-none focus:border-gold transition-colors bg-white"
                    >
                      <option value="">Select Destination</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Schengen">Schengen</option>
                      <option value="USA">USA</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="visaType"
                      placeholder="Visa Type (e.g., Tourist, Student, Business)"
                      value={formData.visaType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-charcoal/20 rounded focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded flex items-center justify-center gap-2 transition-colors"
                    >
                      <WhatsAppIcon />
                      Send via WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-6 py-3 border border-charcoal/20 rounded hover:bg-charcoal/5 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
              
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
