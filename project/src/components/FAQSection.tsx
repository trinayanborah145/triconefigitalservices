import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Most websites are completed within 2-3 weeks, depending on complexity and features required. Simple websites can be delivered faster, while complex e-commerce or custom functionality may take longer. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      question: 'What\'s included in your website design packages?',
      answer: 'Our packages include custom design, responsive development, content management system, basic SEO setup, SSL certificate, domain setup assistance, and 30 days of free support after launch. We also provide training on how to manage your website content.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer comprehensive maintenance packages that include regular updates, security monitoring, backup services, performance optimization, and technical support. Our team is available 24/7 for any urgent issues that may arise.'
    },
    {
      question: 'Can you help with search engine optimization (SEO)?',
      answer: 'Absolutely! All our websites are built with SEO best practices in mind. We include basic on-page SEO setup, and we also offer advanced SEO services including keyword research, content optimization, and ongoing SEO management to help improve your search rankings.'
    },
    {
      question: 'What if I need changes after the website is launched?',
      answer: 'We provide 30 days of free minor revisions after launch. For major changes or additional features, we offer flexible hourly rates or can create a custom quote. Our goal is to ensure your website continues to meet your evolving business needs.'
    },
    {
      question: 'Do you work with small businesses and startups?',
      answer: 'Yes! We love working with businesses of all sizes, from startups to established enterprises. We offer flexible packages and payment plans to accommodate different budgets while delivering the same high-quality service to every client.'
    },
    {
      question: 'What platforms and technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, WordPress, Shopify, and custom HTML/CSS/JavaScript solutions. We choose the best platform based on your specific needs, budget, and long-term goals.'
    },
    {
      question: 'How much does a website cost?',
      answer: 'Website costs vary based on complexity, features, and specific requirements. Simple websites start from ₹3,000, while complex e-commerce or custom solutions can range from ₹5000-₹10000+. We provide detailed quotes after understanding your specific needs.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Find answers to common questions about our web design services and process.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4 overflow-hidden"
            >
              <button
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 flex justify-between items-center ${
                  activeIndex === index 
                    ? 'bg-gradient-to-r from-neon-cyan/10 to-neon-magenta/10 border-l-4 border-neon-cyan' 
                    : 'bg-gray-800 hover:bg-gray-750'
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp className="text-neon-cyan" />
                ) : (
                  <ChevronDown className="text-neon-magenta" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 py-6' : 'max-h-0 py-0'
                }`}
              >
                <div className="p-6 pt-0 text-white/80">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
