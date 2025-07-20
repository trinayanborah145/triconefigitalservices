import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import FooterNavigation from './FooterNavigation';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-background-dark relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <ContactForm />
          </motion.div>
          
          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <ContactInfo />
          </motion.div>
        </div>
        
        {/* Footer Navigation */}
        <div className="py-16">
          <FooterNavigation />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-neon-cyan/10 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-magenta/10 rounded-full filter blur-3xl opacity-30"></div>
    </footer>
  );
};

export default Footer;