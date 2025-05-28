import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-background-dark relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="h-8 w-8 text-neon-cyan" />
              <h3 className="text-2xl font-display font-bold">
                <span className="text-gradient">Tricone</span>
              </h3>
            </div>
            <p className="text-white/70 mb-6">
              Transforming Your Digital Future with  Tricone. We create cutting-edge solutions that empower businesses in the digital landscape.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="hover-effect w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-neon-cyan transition-colors duration-300"
                >
                  <Icon size={18} className="text-white/70 hover:text-neon-cyan transition-colors duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'About Us', 'Projects', 'Testimonials'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-neon-magenta hover-effect transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Web Design & Development',
                'Social Media Automation',
                'Lead Generation',
                'Funnel Marketing',
                'Digital Strategy'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-white/70 hover:text-neon-yellow hover-effect transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-neon-cyan mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  123 Innovation Drive, Tech City, TC 10101
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-neon-magenta mr-3 flex-shrink-0" />
                <span className="text-white/70">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-neon-yellow mr-3 flex-shrink-0" />
                <span className="text-white/70">
                  info@triconedigital.com
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="bg-gradient-to-r from-neon-cyan to-neon-magenta hover-effect text-white px-6 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105 w-full">
                Send Message
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50">
            © {currentYear} Tricone Digital Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;