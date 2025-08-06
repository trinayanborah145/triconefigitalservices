import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: 'Advanced Technology',
      description: 'Using cutting-edge tools and frameworks to build modern digital solutions.',
      color: '#00ffff',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Rapid development and deployment without compromising on quality.',
      color: '#ff00ff',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Putting our clients\' needs first and delivering personalized solutions.',
      color: '#ffff00',
    },
    {
      icon: Target,
      title: 'Result-Driven',
      description: 'Focused on achieving measurable results and exceeding expectations.',
      color: '#00FF9D',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            About <span className="text-gradient neon-glow">Tricone</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We're a team of passionate digital innovators committed to transforming businesses through cutting-edge technology and creative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Driving Digital <span className="text-neon-magenta magenta-glow">Innovation</span>
            </h3>
            <p className="text-white/80 mb-6">
            At Tricone, we’ve helped a growing number of businesses establish a strong online presence through clean, fast, and high-converting websites.

Though we’re a young agency, we’ve quickly built a reputation for delivering quality work that drives real results. In a short period of time, we’ve earned the trust of clients from different industries — not just because of how our websites look, but because of how they perform.
            </p>
            <p className="text-white/80">
            Our approach is simple:
We listen, understand your business goals, and then design digital experiences that help you grow — whether that’s attracting more customers, improving your brand’s image, or creating a seamless user journey.

At the core of everything we do is a commitment to creativity, clarity, and client success. Tricone isn’t just a service provider — we’re a digital growth partner for brands that are ready to level up.


            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                      style={{ 
                        background: `linear-gradient(135deg, ${feature.color}40, transparent)`,
                        border: `2px solid ${feature.color}80` 
                      }}
                    >
                      <Icon style={{ color: feature.color }} className="w-8 h-8" />
                    </div>
                    <h4 className="font-display font-bold mb-2" style={{ color: feature.color }}>
                      {feature.title}
                    </h4>
                    <p className="text-sm text-white/70">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;