import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import TextWritingAnimation from './TextWritingAnimation';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after initial animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const container = containerRef.current;
      if (!container) return;

      const { width, height, left, top } = container.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      container.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    };

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
      }
    };

    const element = containerRef.current;
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <AnimatePresence>
        {!showContent && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center bg-gray-900 z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-center">
              <TextWritingAnimation 
                text="TRICONE AGENCY" 
                duration={3}
                className="text-neon-cyan"
              />
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`w-full transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          ref={containerRef}
          className="container mx-auto max-w-5xl z-10 transition-transform duration-300 ease-out"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-10 leading-tight"
            >
              <span className="block text-gradient">Your Website Should Sell While You Sleep</span>
              <span className="block text-2xl md:text-4xl text-gradient-reverse mt-6">We Make That Happen</span>
            </motion.h1>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <a href="#services" className="w-full sm:w-auto">
                <button className="bg-gradient-animated hover-effect text-white px-8 py-4 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full">
                  Explore Our Services
                </button>
              </a>
              <a href="/about" className="w-full sm:w-auto">
                <button className="w-full border border-white/20 hover:border-neon-cyan hover-effect text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/5">
                  Learn More
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hover-effect"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showContent ? 1 : 0, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <a href="#services" className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;