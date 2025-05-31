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
      duration: 2
    },
    {
      title: 'Happy Clients',
      value: 50,
      suffix: '+',
      icon: Users,
      color: '#ff00ff',
      duration: 2.5
    },
    {
      title: 'Success Rate',
      value: 100,
      suffix: '%',
      icon: Trophy,
      color: '#ffff00',
      duration: 3
    },
    {
      title: '24/7 Support',
      value: 365,
      suffix: ' days',
      icon: LifeBuoy,
      color: '#00FF9D',
      duration: 2.2
    },
  ];

  return (
    <section id="stats" className="py-20 px-6 bg-background-navy/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500/10"
            style={{
              width: Math.random() * 600 + 100,
              height: Math.random() * 600 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(60px)'
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8 }
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.2 }
            }}
            viewport={{ once: true }}
          >
            Our <span className="text-gradient neon-glow">Success</span> in Numbers
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.4 }
            }}
            viewport={{ once: true }}
          >
            We take pride in our achievements and the value we bring to our clients through innovative solutions and exceptional service.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                  damping: 12
                }
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-gradient-to-br from-background-navy/60 to-background-navy/30 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-neon-cyan/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10"
              style={{
                boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.05)`
              }}
            >
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col items-center text-center relative z-10">
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}30)`,
                    border: `1px solid ${stat.color}30`,
                    boxShadow: `0 0 20px ${stat.color}20`
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: `0 0 30px ${stat.color}40`
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <stat.icon 
                    className="w-7 h-7" 
                    style={{ 
                      color: stat.color,
                      filter: `drop-shadow(0 0 5px ${stat.color}80)`
                    }}
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-4xl md:text-5xl font-display font-bold mb-2 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${stat.color}, ${stat.color}cc)`,
                    textShadow: `0 0 10px ${stat.color}40`
                  }}
                >
                  <CounterAnimation 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    duration={stat.duration}
                    delay={index * 0.15}
                    className="font-display font-bold"
                  />
                </motion.h3>
                
                <motion.p 
                  className="text-sm md:text-base text-gray-300 font-medium"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {stat.title}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;