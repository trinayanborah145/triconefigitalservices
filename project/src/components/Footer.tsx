import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

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
              <img 
                src="/images/TRICONE (1).jpg" 
                alt="Tricone Digital Services Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <h3 className="text-2xl font-display font-bold">
                <span className="text-gradient">Tricone</span>
              </h3>
            </div>
            <p className="text-white/70 mb-6">
              Transforming Your Digital Future with  Tricone. We create cutting-edge solutions that empower businesses in the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:triconedigitalservices@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-effect w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-neon-cyan transition-colors duration-300"
                title="Email Us"
              >
                <Mail size={18} className="text-white/70 hover:text-neon-cyan transition-colors duration-300" />
              </a>
              <a 
                href="https://wa.me/918474076850"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-effect w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-green-400 transition-colors duration-300"
                title="Chat on WhatsApp"
              >
                <MessageCircle size={18} className="text-white/70 hover:text-green-400 transition-colors duration-300" />
              </a>
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
              {[
                { name: 'Home', href: '/', isRouterLink: true },
                { name: 'Services', href: '/#services', isRouterLink: false },
                { name: 'About Us', href: '/about', isRouterLink: true },
                { name: 'Testimonials', href: '#testimonials' }
              ].map((item, index) => (
                <li key={index}>
                  {item.isRouterLink ? (
                    <Link 
                      to={item.href}
                      className="text-white/70 hover:text-neon-magenta hover-effect transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2">›</span> {item.name}
                    </Link>
                  ) : (
                    <a 
                      href={item.href}
                      className="text-white/70 hover:text-neon-magenta hover-effect transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2">›</span> {item.name}
                    </a>
                  )}
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
                { name: 'Web Development', id: 'web-development' },
                { name: 'CRM Automation', id: 'crm-automation' },
                { name: 'Social Media Automation', id: 'social-media-automation' },
                { name: 'Business Automation', id: 'end-to-end-business-automation' }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={`/services/${item.id}`}
                    onClick={(e) => {
                      // If we're already on the services page, scroll to the section
                      if (window.location.pathname.startsWith('/services/')) {
                        e.preventDefault();
                        // Navigate to the service page first
                        window.location.href = `/services/${item.id}`;
                        // Then scroll to the service details section after a short delay
                        setTimeout(() => {
                          const element = document.getElementById('service-details');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }
                    }}
                    className="text-white/70 hover:text-neon-yellow hover-effect transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> {item.name}
                  </Link>
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
                  Jorhat, Assam, 785001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-neon-magenta mr-3 flex-shrink-0" />
                <a href="tel:+918474076850" className="text-white/70 hover:text-neon-magenta transition-colors duration-300">
                  +91 84740 76850
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-neon-yellow mr-3 flex-shrink-0" />
                <a href="mailto:triconedigitalservices@gmail.com" className="text-white/70 hover:text-neon-yellow transition-colors duration-300">
                  triconedigitalservices@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <a 
                  href="https://wa.me/918474076850" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-green-400 transition-colors duration-300 flex items-center"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                to="/contact" 
                className="block bg-gradient-to-r from-neon-cyan to-neon-magenta hover-effect text-white px-6 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105 text-center"
              >
                Send Message
              </Link>
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