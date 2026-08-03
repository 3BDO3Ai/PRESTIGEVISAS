'use client';

import { useState, useEffect } from 'react';

const FloatingContactWidgets = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulse, setIsPulse] = useState(true);
  const [showWeChatQR, setShowWeChatQR] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Create pulse animation interval
    const pulseInterval = setInterval(() => {
      setIsPulse(true);
      setTimeout(() => setIsPulse(false), 1000);
    }, 3000);

    return () => {
      clearInterval(pulseInterval);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "61449849914";
    const message = "Hello Prestige Visas team, I am interested in your visa and immigration consultancy services. Could you please assist me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Action Buttons Container */}
      <div
        className={`fixed bottom-6 left-6 z-50 flex flex-col gap-3 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        {/* WeChat Button */}
        <div className="relative group">
          <button
            onClick={() => setShowWeChatQR(!showWeChatQR)}
            className="relative w-14 h-14 bg-[#07C160] hover:bg-[#06b057] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-white"
            title="Contact via WeChat"
            aria-label="WeChat"
          >
            {/* WeChat Icon */}
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
              <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
            </svg>
          </button>

          {/* WeChat Tooltip / QR Modal */}
          <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap relative shadow-md flex items-center gap-2">
              <span>Chat with us on WeChat (+61 449 849 914)</span>
              <div className="absolute right-0 top-1/2 transform -translate-x-full -translate-y-1/2">
                <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="relative group">
          {/* Pulse Animation Ring */}
          <div
            className={`absolute inset-0 rounded-full bg-[#25D366] transition-all duration-1000 ${
              isPulse ? 'animate-ping opacity-75' : 'opacity-0'
            }`}
          />

          <button
            onClick={handleWhatsAppClick}
            className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-white"
            title="Chat with us on WhatsApp"
            aria-label="WhatsApp"
          >
            {/* WhatsApp Icon */}
            <svg 
              className="w-9 h-9" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <g transform="translate(2, 2)">
                <path d="M17.472 2.59a10.01 10.01 0 00-7.065-2.929C4.671-.339-.341 4.671-.341 10.407c0 1.832.478 3.627 1.387 5.203L0 20l4.503-1.018a10.02 10.02 0 005.033 1.371c5.736 0 10.407-4.672 10.407-10.408A10.364 10.364 0 0017.472 2.59zM10.436 18.48c-1.552 0-3.066-.42-4.389-1.21l-.314-.186-3.26.854.87-3.178-.204-.326a8.353 8.353 0 01-1.28-4.458c0-4.62 3.758-8.379 8.379-8.379 2.238 0 4.34.872 5.921 2.454a8.325 8.325 0 012.454 5.921c-.001 4.621-3.759 8.508-8.377 8.508zm4.594-6.272c-.252-.126-1.49-.735-1.72-.82-.231-.084-.4-.126-.568.127-.168.252-.65.82-.797.987-.147.168-.294.19-.546.063-.252-.126-1.064-.392-2.026-1.25-.749-.668-1.255-1.492-1.403-1.744-.147-.252-.016-.388.111-.513.114-.113.252-.294.378-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.568-1.367-.778-1.871-.204-.49-.412-.424-.568-.432a10.89 10.89 0 00-.484-.009c-.168 0-.441.063-.672.315-.231.252-.882.862-.882 2.101s.903 2.434 1.029 2.602c.126.168 1.832 2.797 4.437 3.921.62.267 1.105.426 1.483.546.623.198 1.19.17 1.638.103.5-.075 1.49-.609 1.7-1.196.21-.588.21-1.092.147-1.196-.063-.105-.231-.168-.483-.294z"/>
              </g>
            </svg>
          </button>

          {/* WhatsApp Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap relative shadow-md">
              Chat on WhatsApp
              <div className="absolute right-0 top-1/2 transform -translate-x-full -translate-y-1/2">
                <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WeChat Modal / Card (Shown when clicked or tapped) */}
      {showWeChatQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowWeChatQR(false)}>
          <div 
            className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl relative text-center border border-gray-100 animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowWeChatQR(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-12 h-12 bg-[#07C160]/10 text-[#07C160] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
                <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Connect on WeChat</h3>
            <p className="text-sm text-gray-600 mb-4">Add us on WeChat for instant visa guidance & consultation</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 mb-4">
              <span className="text-xs text-gray-500 block mb-1">WeChat ID / Phone</span>
              <span className="text-lg font-mono font-semibold text-gray-900 select-all">+61 449 849 914</span>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText("+61449849914");
                alert("WeChat ID (+61449849914) copied to clipboard!");
              }}
              className="w-full bg-[#07C160] hover:bg-[#06b057] text-white font-medium py-2.5 rounded-xl transition-colors text-sm shadow-sm"
            >
              Copy WeChat ID
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContactWidgets;
