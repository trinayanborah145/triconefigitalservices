import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-3xl font-display font-bold mb-2">Let's Start Your Project</h3>
      <p className="text-white/80 mb-6">
        Ready to transform your digital presence? Get in touch with us today for a free consultation and let's discuss how we can help your business grow online.
      </p>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
        />
      </div>
      
      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-white/80 mb-1">Project Type *</label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
          required
        >
          <option value="">Select project type</option>
          <option value="website">Website Development</option>
          <option value="ecommerce">E-commerce Website</option>
          <option value="redesign">Website Redesign</option>
          <option value="seo">SEO & Digital Marketing</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="details" className="block text-sm font-medium text-white/80 mb-1">Project Details *</label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your project requirements, goals, timeline, and any specific features you need..."
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
          required
        ></textarea>
      </div>
      
      <div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-neon-cyan to-neon-magenta hover-effect text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
