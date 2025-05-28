import React from 'react';
import { motion } from 'framer-motion';
import CounterAnimation from './CounterAnimation';
import { Rocket, Users, Trophy, LifeBuoy } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Projects Completed',
      value: 10,
      suffix: '+',
      icon: Rocket,
      color: '#00ffff',
    },
    {
      title: 'Happy Clients',
      value: 6,
    
      icon: Users,
      color: '#ff00ff',
    },
    {
      title: 'Success Rate',
      value: 100,
      suffix: '%',
      icon: Trophy,
      color: '#ffff00',
    },
    {
      title: '24/7 Support',
      value: 365,
      suffix: ' days',
      icon: LifeBuoy,
      color: '#00FF9D',
    },
  ];

  return (
    <section id="stats" className="py-20 px-6 bg-background-navy/30 relative">
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
            Our <span className="text-gradient neon-glow">Success</span> in Numbers
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We're proud of our achievements and the trust our clients place in us to deliver exceptional digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 flex flex-col items-center text-center"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ 
                    background: `linear-gradient(135deg, ${stat.color}40, transparent)`,
                    border: `2px solid ${stat.color}80` 
                  }}
                >
                  <Icon style={{ color: stat.color }} className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold mb-2" style={{ color: stat.color }}>
                  <CounterAnimation 
                    end={stat.value} 
                    suffix={stat.suffix || ''} 
                  />
                </div>
                <h3 className="text-xl font-medium text-white">
                  {stat.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;