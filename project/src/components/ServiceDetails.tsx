import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Service } from '../data/services';

interface ServiceDetailsProps {
  service: Service;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 3D tilt effect
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
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
      container.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
      `;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Animate when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  // Use features, steps, and tools from the service prop
  const { features = [], steps = [], tools: techStack = [] } = service;

  return (
    <div className="min-h-screen bg-background-dark text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-cyan filter blur-3xl opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-magenta filter blur-3xl opacity-30 animate-pulse-slow animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: `${service.color}20`, color: service.color }}>
              <service.icon className="w-5 h-5 mr-2" />
              {service.title}
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            {service.tagline}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/80 max-w-3xl mb-12">
            {service.description}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-neon-cyan to-neon-magenta hover:opacity-90 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Book a Free Consultation
            </button>
            <button className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:bg-white/5">
              View Case Studies
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-background-darker/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-blue/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/30 transition-all duration-300"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}20`, color: service.color }}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">Our streamlined process ensures a smooth transition to automated workflows</p>
          </motion.div>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-yellow"></div>
            
            <div className="space-y-20">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="lg:w-1/2 lg:px-8 mb-8 lg:mb-0">
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4"
                        style={{ backgroundColor: `${service.color}20`, color: service.color }}
                      >
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-white/80 pl-20">{step.description}</p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-background-blue/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                      <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center">
                        <span className="text-white/30">Visualization for {step.title}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-background-darker/50 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">We use industry-leading tools to build powerful automation solutions</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-background-blue/30 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-neon-cyan/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center text-neon-cyan">
                  <span className="text-xl font-bold">{tech.name.charAt(0)}</span>
                </div>
                <h4 className="font-medium">{tech.name}</h4>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                  <span>{tech.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-neon-magenta/5"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/80 mb-10">Schedule a free consultation with our automation experts and discover how we can streamline your workflows.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-neon-cyan to-neon-magenta hover:opacity-90 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
                Book a Free Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:bg-white/5 flex items-center justify-center">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
