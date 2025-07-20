import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    Calendly: any;
  }
}

const BookingSection: React.FC = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly script if not already loaded
    const loadCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/iamtrinayanborah',
          text: 'Schedule a free consultation',
          color: '#00a2ff',
          textColor: '#ffffff',
          branding: true,
        });
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/iamtrinayanborah',
          text: 'Schedule a free consultation',
          color: '#00a2ff',
          textColor: '#ffffff',
          branding: true,
        });
      };
      document.body.appendChild(script);
    };

    loadCalendly();

    // Cleanup function
    return () => {
      if (window.Calendly) {
        window.Calendly.destroyBadgeWidget();
      }
    };
  }, []);

  return (
    <section id="booking" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Schedule a <span className="text-gradient">Free Consultation</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Book a time that works for you and let's discuss how we can help grow your business.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-2xl p-4"
        >
          <div 
            ref={calendlyRef}
            className="calendly-inline-widget" 
            data-url="https://calendly.com/iamtrinayanborah" 
            style={{ minWidth: '320px', height: '700px' }}
            data-page-settings='{"hideEventTypeDetails": false, "hideLandingPageDetails": false, "primaryColor": "00a2ff"}'
          ></div>
          <p className="text-center text-white/70 mt-4 text-sm">
            Having trouble with the booking widget?{' '}
            <a 
              href="https://calendly.com/iamtrinayanborah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neon-cyan hover:underline"
            >
              Click here to book directly on Calendly
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
