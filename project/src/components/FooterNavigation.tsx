import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FooterNavigation: React.FC = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed with:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'Services', path: '/#services' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Process', path: '/process' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'WordPress Website Development', path: '/services/wordpress-development' },
    { name: 'Custom Coded Website', path: '/services/custom-coded-website' },
    { name: 'E-commerce Website', path: '/services/ecommerce-website' },
    { name: 'Landing Page Design & Funnels', path: '/services/landing-page-funnels' },
    { name: 'Portfolio/Resume Websites', path: '/services/portfolio-resume' },
    { name: 'Basic SEO Setup & Analytics', path: '/services/seo-analytics' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="md:col-span-3"
      >
        <div className="flex items-center gap-3 mb-6">
          <img 
            src="/images/TRICONE (1).jpg" 
            alt="Tricone Digital Services Logo" 
            className="h-12 w-12 rounded-full object-cover"
          />
          <h3 className="text-2xl font-display font-bold">
            <span className="text-gradient">TRICONE</span>DIGITAL
          </h3>
        </div>
        <p className="text-white/70 mb-6">
          We create stunning, conversion-focused websites that drive results for your business. Your success is our mission.
        </p>
        <div className="flex items-center space-x-4 mb-6">
          <a href="mailto:triconedigitalservices@gmail.com" className="text-white/70 hover:text-neon-cyan transition-colors">
            triconedigitalservices@gmail.com
          </a>
          <span className="text-white/30">|</span>
          <a href="tel:+918474076850" className="text-white/70 hover:text-neon-magenta transition-colors">
            +91 8474076850
          </a>
        </div>
        <p className="text-white/70">by lane 6/7 Bongalpukhuri Jorhat 785001</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <Link 
                to={link.path}
                className="text-white/70 hover:text-neon-cyan hover-effect transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index}>
              <Link 
                to={service.path}
                className="text-white/70 hover:text-neon-magenta hover-effect transition-colors"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
        <p className="text-white/70 mb-4">
          Subscribe to our newsletter for web design tips and industry insights.
        </p>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-neon-cyan to-neon-magenta hover-effect text-white font-semibold py-2 px-4 rounded-r-lg transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
          </div>
        </form>
        <div>
          <p className="text-white/70 mb-2">Follow us:</p>
          <div className="flex space-x-4">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-white/70 hover:text-neon-cyan transition-colors"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="md:col-span-3 pt-8 border-t border-white/10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {currentYear} TRICONE Digital Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm hover:underline">
              Cookie Policy
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FooterNavigation;
