import { motion } from 'framer-motion';
import { Check, Rocket, Star, Users, Trophy, Zap } from 'lucide-react';
import CounterAnimation from '../components/CounterAnimation';

const stats = [
  { value: 10, suffix: '+', label: 'Projects Completed', icon: <Rocket className="w-8 h-8" />, duration: 2 },
  { value: 100, suffix: '%', label: 'Client Satisfaction', icon: <Star className="w-8 h-8" />, duration: 2.5 },
  { value: 50, suffix: '+', label: 'Happy Clients', icon: <Users className="w-8 h-8" />, duration: 2.2 },
  { value: 5, suffix: '+', label: 'Years Experience', icon: <Trophy className="w-8 h-8" />, duration: 1.8 },
];

const testimonials = [
  {
    quote: "Tricone Digital transformed our online presence completely. Their team delivered beyond our expectations!",
    author: "Sarah Johnson",
    role: "CEO, TechNova"
  },
  {
    quote: "The level of creativity and technical expertise is unmatched. Highly recommended for any digital solution.",
    author: "Michael Chen",
    role: "Marketing Director, InnovateX"
  },                                                                                                                                
  {
    quote: "Working with Tricone was a game-changer for our business. Their solutions are innovative and effective.",
    author: "Emily Rodriguez",
    role: "Founder, GreenScape"
  }
];

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-purple-500/10 z-0">
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-purple-400"
          >
            About Tricone Digital
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Pioneering the future of digital innovation with cutting-edge solutions that drive results.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background-dark to-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-neon-cyan/50 transition-all duration-300"
              >
                <div className="text-neon-cyan mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  <CounterAnimation 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    duration={stat.duration}
                    delay={index * 0.15}
                    className="font-display font-bold"
                  />
                </h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">What We Do?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We create immersive digital experiences that blend cutting-edge technology with stunning design to help businesses thrive in the digital age.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Solutions",
                description: "We craft custom digital solutions tailored to your unique business needs, leveraging the latest technologies and industry best practices.",
                icon: <Zap className="w-6 h-6 text-neon-cyan" />
              },
              {
                title: "Seamless Experiences",
                description: "Our focus is on creating intuitive, user-friendly interfaces that deliver exceptional experiences across all devices and platforms.",
                icon: <Check className="w-6 h-6 text-neon-cyan" />
              },
              {
                title: "Future-Proof Technology",
                description: "We implement scalable and maintainable solutions that grow with your business, ensuring long-term success in a rapidly evolving digital landscape.",
                icon: <Rocket className="w-6 h-6 text-neon-cyan" />
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-neon-cyan/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-background-dark">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">How We Do It?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven process ensures that every project is delivered with precision, efficiency, and excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We begin by understanding your business goals, target audience, and project requirements to create a comprehensive strategy.",
                color: "from-neon-cyan to-cyan-400"
              },
              {
                step: "02",
                title: "Design & Development",
                description: "Our team of experts brings your vision to life with stunning designs and robust development practices.",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "Launch & Growth",
                description: "We ensure a smooth launch and provide ongoing support to help your business grow and succeed.",
                color: "from-yellow-400 to-orange-500"
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl opacity-70 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200`}></div>
                <div className="relative bg-gray-900 p-8 rounded-2xl h-full border border-gray-800">
                  <span className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.color} mb-4 inline-block`}>
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-neon-cyan/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan to-purple-500 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
