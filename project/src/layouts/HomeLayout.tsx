import React from 'react';
import { motion } from 'framer-motion';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

interface HomeLayoutProps {
  children?: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background-dark relative overflow-hidden">

      <ParticleBackground />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header />
          <main>
            {children || (
              <>
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <StatsSection />
                <TestimonialsSection />
              </>
            )}
          </main>
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeLayout;
