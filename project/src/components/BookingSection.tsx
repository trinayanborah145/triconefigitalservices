import React from 'react';
import { motion } from 'framer-motion';

const BookingSection: React.FC = () => {
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
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to start your project? Contact us today to discuss how we can help grow your business.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <a 
            href="#contact"
            className="inline-block bg-gradient-to-r from-neon-cyan to-neon-magenta hover-effect text-white px-8 py-4 rounded-full font-semibold text-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contact Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
