import React from 'react';
import { motion } from 'framer-motion';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
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
          <main>{children}</main>
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default MainLayout;
