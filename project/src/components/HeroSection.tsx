import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const container = containerRef.current;
      if (!container) return;

      const { width, height, left, top } = container.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      container.style.transform = `
        perspective(1000px)
        rotateY(${x * 5}deg)
        rotateX(${-y * 5}deg)
      `;
    };

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.transform = `
          perspective(1000px)
          rotateY(0deg)
          rotateX(0deg)
        `;
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
    hidden: { opacity: 0 },
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
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    >
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
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-6 py-2 rounded-full border border-neon-cyan/30 text-neon-cyan font-medium text-sm md:text-base mb-6">
              WELCOME TO THE FUTURE OF DIGITAL SERVICES
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            <span className="block text-gradient neon-glow">Transforming Your</span>
            <span className="block">Digital Future with <span className="text-neon-magenta magenta-glow">
              Tricone</span></span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10"
          >
            We create cutting-edge digital solutions that empower businesses to thrive in the modern era. 
            Our advanced technologies and creative approach set new standards in the digital landscape.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <button className="bg-gradient-animated hover-effect text-white px-8 py-4 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto">
              Explore Our Services
            </button>
            <button className="border border-white/20 hover:border-neon-cyan hover-effect text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/5 w-full sm:w-auto">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hover-effect"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 2.5,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5 
        }}
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