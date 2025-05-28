import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Tricone Digital has transformed our online presence completely. Their innovative approach and technical expertise have helped us achieve remarkable growth.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthX',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The automation solutions provided by Tricone have streamlined our marketing processes and significantly improved our lead generation results.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, Digital First',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with Tricone has been a game-changer for our business. Their attention to detail and commitment to excellence is unmatched.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-background-navy/30 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background-dark/80 z-0"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Client <span className="text-gradient neon-glow">Testimonials</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Tricone Digital Services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-neon-cyan/20" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-neon-cyan/30"
                />
                <div className="ml-4">
                  <h3 className="font-display font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-white/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-neon-yellow yellow-glow"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-white/80 italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;