import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import BookingSection from '../components/BookingSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <BookingSection />
    </>
  );
};

export default HomePage;
