import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const BrandMarquee = () => {
  // Array of brand names to be displayed in the marquee
  const brands = [
    'Vertias Media',
    'Room Editors',
    'Skyline Pvt Ltd',
    'Trinayan Builders',
    'Pine Villa',
    'Bihar Walle Sirji',
  ];

  // Duplicate the brands array to create a seamless loop
  const duplicatedBrands = [...brands, ...brands];
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-8 relative">
      {/* Gradient fade effect on the sides */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <motion.div
        ref={containerRef}
        className="flex py-4"
        initial={{ x: 0 }}
        animate={{
          x: ['0%', '-50%'],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear'
            }
          }
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="flex-shrink-0 px-8 md:px-12"
          >
            <div className="flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-medium text-white whitespace-nowrap">
                {brand}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandMarquee;
