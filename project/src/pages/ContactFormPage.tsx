import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactFormPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    'CRM Automation',
    'Marketing Automation',
    'Sales Automation',
    'Customer Support Automation',
    'Workflow Automation',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Format the message with better spacing
      let whatsappMessage = `*NEW CONTACT FORM SUBMISSION*%0A`;
      whatsappMessage += `%0A`; // Extra line break
      whatsappMessage += `*Name:*%0A${formData.name}%0A%0A`;
      whatsappMessage += `*Email:*%0A${formData.email}%0A%0A`;
      
      if (formData.phone) {
        whatsappMessage += `*Phone:*%0A${formData.phone}%0A%0A`;
      }
      
      if (formData.service) {
        whatsappMessage += `*Interested In:*%0A${formData.service}%0A%0A`;
      }
      
      whatsappMessage += `*Message:*%0A${formData.message}%0A%0A`;
      whatsappMessage += `_I've come from your website_`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Open WhatsApp with the pre-filled message
      window.open(`https://wa.me/918474076850?text=${encodedMessage}`, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Show success message
      alert('Thank you for your message! You will be redirected to WhatsApp.');
      
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      setSubmitError('Failed to open WhatsApp. Please make sure you have WhatsApp installed or try again later.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white pt-24 px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-neon-cyan hover:text-neon-magenta mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 rounded-2xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-white/70 mb-8">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-navy/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent outline-none transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-navy/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent outline-none transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background-navy/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent outline-none transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background-navy/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent outline-none transition-all duration-300 appearance-none"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-navy/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-transparent outline-none transition-all duration-300 resize-none"
                placeholder="Tell us more about your project..."
              ></textarea>
            </div>

            <div className="pt-2">
              <div className="space-y-4">
                {submitError && (
                  <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-200">
                    {submitError}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full md:w-auto bg-gradient-to-r from-neon-cyan to-neon-magenta hover-effect text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        Send Message
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-neon-magenta to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactFormPage;
