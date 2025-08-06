import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const DesignShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const controls = useAnimation();

  // Design projects using the screenshot images from public/images
  const designProjects = [
    {
      id: 1,
      title: 'Modern Website for Blossom Homestay',
      image: '/images/Screenshot 2025-06-20 140334.png',
      category: 'Homestay'
    },
    {
      id: 2,
      title: 'Website for Room Editors',
      image: '/images/Screenshot 2025-08-06 142813.png',
      category: 'Interior Business'
    },
    {
      id: 3,
      title: 'Portfolio site for Inteior Pvt Ltd',
      image: '/images/Screenshot 2025-08-06 142846.png',
      category: 'Interior Business'
    },
    {
      id: 4,
      title: 'Website for Pine Villa Homestay',
      image: '/images/Screenshot 2025-08-06 142945.png',
      category: 'Homestay'
    },
    {
      id: 5,
      title: 'Pine Villa Homestay Website',
      image: '/images/Screenshot 2025-08-06 143027.png',
      category: 'Homestay'
    },
    {
      id: 6,
      title: 'Website for NE Interior Designers',
      image: '/images/Screenshot 2025-08-06 143642.png',
      category: 'Interior Business'
    },
    {
      id: 7,
      title: 'Modern Website for Skyline Estates ',
      image: '/images/Screenshot 2025-08-06 143834.png',
      category: 'Real Estates'
    },
    {
      id: 8,
      title: 'Sky Line Estates Website',
      image: '/images/Screenshot 2025-08-06 143902.png',
      category: 'Real Estates'
    },
    {
      id: 9,
      title: 'Website for Vertias Media',
      image: '/images/Screenshot 2025-08-06 143956.png',
      category: 'Marketing Agency'
    },
    {
      id: 10,
      title: 'Website for Vertias Media ',
      image: '/images/Screenshot 2025-08-06 144017.png',
      category: 'Marketing Agency'
    },
    {
      id: 11,
      title: 'Marketing Agencies Website',
      image: '/images/Screenshot 2025-08-06 144036.png',
      category: 'Marketing Agency'
    },
    {
      id: 12,
      title: 'Website for Biharwale Sirji',
      image: '/images/Screenshot 2025-08-06 145459.png',
      category: 'Edtech Platform'
    }
  ];

  // Duplicate the projects for seamless looping
  const projects = [...designProjects, ...designProjects];

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background-darker to-background-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="text-gradient">Design Work</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore our portfolio of stunning designs that bring ideas to life
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Gradient fade effect on the sides */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={containerRef}
          className="flex py-8"
          animate={{
            x: [0, -containerWidth],
            transition: {
              x: {
                repeat: Infinity,
                duration: 40,
                ease: 'linear',
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 px-4 group"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative overflow-hidden rounded-xl bg-background-darker border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-neon-cyan/10">
                <div className="w-[500px] h-[350px] lg:w-[600px] lg:h-[450px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 lg:p-6 bg-gradient-to-t from-black/90 to-transparent absolute bottom-0 w-full">
                  <div>
                    <h3 className="font-semibold text-white text-lg lg:text-xl">{project.title}</h3>
                    <span className="text-sm text-neon-cyan">{project.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DesignShowcase;
