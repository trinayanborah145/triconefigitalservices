import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If we're not on the home page, navigate there first
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 w-full z-40 py-4 px-6 transition-all duration-300 ${
        isScrolled ? 'bg-background-blue/70 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-3 hover-effect"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="/images/TRICONE (1).jpg" 
            alt="Tricone Digital Services Logo" 
            className="h-10 w-10 rounded-full object-cover"
          />
          <h1 className="text-2xl font-display font-bold">
            <span className="text-gradient">Tricone</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Home', id: 'home' },
            { name: 'About', id: 'about' },
            { name: 'Services', id: 'services' },
            { name: 'Stats', id: 'stats' },
            { name: 'Testimonials', id: 'testimonials' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <Link 
              key={item.id} 
              to={`#${item.id}`} 
              className="text-white/80 hover:text-white hover-effect font-medium transition-colors duration-300 relative group"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Link 
            to="#contact" 
            className="bg-gradient-to-r from-neon-cyan to-neon-magenta hover-effect text-white px-6 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg inline-block"
            onClick={() => scrollToSection('contact')}
          >
            <span className="flex items-center gap-2">
              <MessageSquare size={16} />
              Get in Touch
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover-effect p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
          className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-background-navy/95 backdrop-blur-xl z-50 shadow-2xl md:hidden"
        >
          <div className="flex flex-col h-full py-20 px-8">
            <div className="flex justify-end mb-10">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="hover-effect p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <nav className="flex flex-col space-y-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Stats', id: 'stats' },
                { name: 'Testimonials', id: 'testimonials' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-xl text-white/80 hover:text-white hover-effect font-medium transition-colors duration-300 relative group bg-transparent border-none cursor-pointer p-0 text-left"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-magenta group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-magenta hover-effect text-white px-6 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105 mt-4 text-center"
              >
                <span className="flex items-center gap-2 justify-center">
                  <MessageSquare size={20} />
                  Get in Touch
                </span>
              </button>
            </nav>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;