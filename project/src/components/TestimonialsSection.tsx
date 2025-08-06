import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const controls = useAnimation();

  const testimonials = [
    {
      name: 'Aayan Siddiqi',
      role: 'Content Creator & Educator',
      image: '/images/497751075_17883513012279224_2355383755071420757_n.jpg',
      content: 'Working with Tricone Digital was a fantastic experience. They created a stunning website for my online course that perfectly captures my brand.',
      rating: 5,
    },
    { 
      name: 'Kingkar Choudhury',
      role: 'Managing Director, Room Editors',
      image: '/images/470171225_1087660569807250_3287768468292283575_n.jpg',
      content: 'Tricone Digital did an outstanding job designing our interior design brand website. They perfectly captured our vision.',
      rating: 5,
    },
    {
      name: 'Ananya Patel',
      role: 'Founder, Digital First',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with Tricone has been a game-changer for our business. Their attention to detail is unmatched.',
      rating: 5, 
    },
    {
      name: 'Rahul Verma',
      role: 'CEO, TechStart',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The team at Tricone transformed our online presence completely. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Head, StyleHub',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Their creative approach and technical expertise delivered beyond our expectations.',
      rating: 5,
    },
  ];

  // Split testimonials into two rows
  const row1 = [...testimonials, ...testimonials]; // Duplicate for seamless loop
  const row2 = [...testimonials].reverse().concat([...testimonials].reverse()); // Reverse for different direction

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => (
    <div className="flex-shrink-0 w-80 md:w-96 px-4">
      <div className="glass-card p-6 h-full relative group">
        <Quote className="absolute top-4 right-4 w-6 h-6 text-neon-cyan/20 group-hover:text-neon-cyan/40 transition-colors" />
        
        <div className="flex items-center mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-neon-cyan/30"
          />
          <div className="ml-3">
            <h3 className="font-display font-bold text-white text-sm">
              {testimonial.name}
            </h3>
            <p className="text-xs text-white/70">
              {testimonial.role}
            </p>
          </div>
        </div>

        <div className="flex mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-neon-yellow yellow-glow"
              fill="currentColor"
            />
          ))}
        </div>

        <p className="text-sm text-white/80 italic line-clamp-3">
          "{testimonial.content}"
        </p>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-16 px-6 bg-background-navy/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background-dark/80 z-0"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Client <span className="text-gradient neon-glow">Testimonials</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative mb-8">
          {/* First row - scrolls left to right */}
          <div className="overflow-hidden py-4">
            <motion.div
              ref={containerRef}
              className="flex"
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
              {row1.map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Second row - scrolls right to left */}
          <div className="overflow-hidden py-4">
            <motion.div
              className="flex"
              animate={{
                x: [-containerWidth, 0],
                transition: {
                  x: {
                    repeat: Infinity,
                    duration: 45,
                    ease: 'linear',
                  },
                },
              }}
            >
              {row2.map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background-navy to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background-navy to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;