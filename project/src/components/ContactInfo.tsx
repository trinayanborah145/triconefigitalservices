import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-display font-bold mb-6">Get In Touch</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-neon-cyan/10 p-3 rounded-full mr-4">
              <Mail className="w-5 h-5 text-neon-cyan" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Email Us</h4>
              <a href="mailto:triconedigitalservices@gmail.com" className="text-white/70 hover:text-neon-cyan transition-colors">
                triconedigitalservices@gmail.com
              </a>
              <p className="text-sm text-white/50 mt-1">Send us an email anytime</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-neon-magenta/10 p-3 rounded-full mr-4">
              <Phone className="w-5 h-5 text-neon-magenta" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Call Us</h4>
              <a href="tel:+15551234567" className="text-white/70 hover:text-neon-magenta transition-colors">
                +91 8474076850
              </a>
              <p className="text-sm text-white/50 mt-1">Mon-Sunday 24/7 EST</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-neon-yellow/10 p-3 rounded-full mr-4">
              <MapPin className="w-5 h-5 text-neon-yellow" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Visit Us</h4>
              <p className="text-white/70">by lane 6/7 Bongalpukhuri Jorhat 785001</p>
              <a href="#" className="text-sm text-neon-cyan hover:underline mt-1 inline-block">
                Schedule an appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10">
        <h4 className="text-white font-semibold mb-4 flex items-center">
          <Clock className="w-5 h-5 text-neon-cyan mr-2" />
          Business Hours
        </h4>
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/70">Monday - Sunday</span>
          <span className="text-white">24/7n o EST</span>
        </div>
        <div className="mt-6 bg-gradient-to-r from-neon-cyan/10 to-neon-magenta/10 p-4 rounded-lg">
          <h5 className="font-semibold text-white mb-2">Need Immediate Help?</h5>
          <p className="text-sm text-white/70 mb-4">Schedule a free 30-minute consultation call with our team.</p>
          <a 
            href="https://wa.me/918474076850?text=I%20want%20to%20schedule%20an%20appointment.%20I've%20came%20from%20your%20website" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-neon-cyan to-neon-magenta hover-effect text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 text-center"
          >
            Schedule Free Call
          </a>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10">
        <h4 className="text-2xl font-display font-bold mb-6">What Happens Next?</h4>
        <div className="space-y-6">
          {[
            {
              number: '1',
              title: 'We Respond',
              description: "You'll hear back from us within 24 hours to schedule your consultation."
            },
            {
              number: '2',
              title: 'We Discuss',
              description: "We'll discuss your project requirements and provide expert recommendations."
            },
            {
              number: '3',
              title: 'We Deliver',
              description: "You'll receive a detailed proposal and timeline for your project."
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-gradient-to-br from-neon-cyan to-neon-magenta w-8 h-8 rounded-full flex items-center justify-center text-black font-bold mr-4 mt-1 flex-shrink-0">
                {item.number}
              </div>
              <div>
                <h5 className="font-semibold text-white">{item.title}</h5>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
