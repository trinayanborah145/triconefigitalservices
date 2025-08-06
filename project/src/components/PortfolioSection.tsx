import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Website for Room Editors',
    description: 'Professional website for Room Editors, an Interior Design business',
    image: '/images/Screenshot 2025-06-20 135237.png',
    link: 'https://rroomedditors.netlify.app/',
    location: 'Guwahati, Assam'
  },
  {
    title: 'Heritage Home Restoration',
    description: 'Restored traditional Assamese home with modern amenities while preserving its cultural heritage and architectural integrity.',
    image: '/images/portfolio2.jpg',
    link: '#',
    location: 'Jorhat, Assam'
  },
  {
    title: 'Contemporary Office Space',
    description: 'Modern office interior with ergonomic design, natural lighting, and collaborative workspaces for enhanced productivity.',
    image: '/images/portfolio3.jpg',
    link: '#',
    location: 'Dibrugarh, Assam'
  },
  {
    title: 'Boutique Hotel Lobby',
    description: 'Luxurious hotel lobby design blending contemporary style with local Assamese craftsmanship and materials.',
    image: '/images/portfolio4.jpg',
    link: '#',
    location: 'Kaziranga, Assam'
  }
];

// Removed unused constant

const PortfolioSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? portfolioItems.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === portfolioItems.length - 1 ? 0 : c + 1));

  return (
    <section id="portfolio" className="py-20 bg-background-dark text-white relative">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Room Editors</h2>
        <p className="text-center text-white/70 max-w-3xl mx-auto mb-12 px-4">Transforming spaces across Assam with innovative interior design solutions that blend tradition and modernity.</p>
        
        {/* Navigation Buttons */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 pl-2">
          <button
            aria-label="Previous portfolio"
            onClick={prev}
            className="p-3 rounded-full bg-white/10 hover:bg-neon-cyan/40 transition-colors z-10"
          >
            <ChevronLeft size={28} />
          </button>
        </div>
          <div className="relative flex items-center justify-center w-full max-w-[1800px] mx-auto px-12 overflow-visible">
            <div className="relative w-full flex items-center justify-center gap-2 md:gap-4">
              {/* Left Preview Card */}
              <div
                className="flex-shrink-0 transition-all duration-500 z-0"
                style={{
                  transform: 'scale(0.85)',
                  opacity: 0.7,
                  width: '32%',
                  height: '500px',
                  aspectRatio: '3/4',
                  pointerEvents: 'none',
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)'
                }}
              >
                <a href={portfolioItems[(current === 0 ? portfolioItems.length - 1 : current - 1)].link} target="_blank" rel="noopener noreferrer" className="block w-full h-full bg-background-navy rounded-xl overflow-hidden">
                  <img
                    src={portfolioItems[(current === 0 ? portfolioItems.length - 1 : current - 1)].image}
                    alt={portfolioItems[(current === 0 ? portfolioItems.length - 1 : current - 1)].title}
                    className="w-full h-3/4 object-cover object-left transition-transform duration-300 hover:scale-105"
                    style={{ aspectRatio: '4/3', maxHeight: '75%', objectPosition: 'left center' }}
                  />
                  <div className="p-4 h-1/4 overflow-hidden">
                    <h3 className="text-lg font-semibold mb-1 line-clamp-1">{portfolioItems[(current === 0 ? portfolioItems.length - 1 : current - 1)].title}</h3>
                    <p className="text-neon-cyan/80 text-xs mb-1">{portfolioItems[(current === 0 ? portfolioItems.length - 1 : current - 1)].location}</p>
                    <p className="text-white/70 text-xs line-clamp-2">{portfolioItems[(current === 0 ? portfolioItems.length - 1 : current - 1)].description}</p>
                  </div>
                </a>
              </div>
              
              {/* Center Active Card */}
              <div
                className="flex-shrink-0 transition-all duration-500 z-10"
                style={{
                  transform: 'scale(1)',
                  opacity: 1,
                  width: '36%',
                  height: '550px',
                  aspectRatio: '3/4',
                  pointerEvents: 'auto',
                  boxShadow: '0 4px 32px 0 rgba(0,255,255,0.15)'
                }}
              >
                <a href={portfolioItems[current].link} target="_blank" rel="noopener noreferrer" className="block w-full h-full bg-background-navy rounded-xl overflow-hidden">
                  <img
                    src={portfolioItems[current].image}
                    alt={portfolioItems[current].title}
                    className="w-full h-3/4 object-cover object-left transition-transform duration-300 hover:scale-105"
                    style={{ aspectRatio: '4/3', maxHeight: '75%', objectPosition: 'left center' }}
                  />
                  <div className="p-6 h-1/4 overflow-hidden">
                    <h3 className="text-2xl font-bold mb-2">{portfolioItems[current].title}</h3>
                    <p className="text-neon-cyan/90 text-sm mb-2">{portfolioItems[current].location}</p>
                    <p className="text-white/80 text-sm">{portfolioItems[current].description}</p>
                  </div>
                </a>
              </div>
              
              {/* Right Preview Card */}
              <div
                className="flex-shrink-0 transition-all duration-500 z-0"
                style={{
                  transform: 'scale(0.85)',
                  opacity: 0.7,
                  width: '32%',
                  height: '500px',
                  aspectRatio: '3/4',
                  pointerEvents: 'none',
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)'
                }}
              >
                <a href={portfolioItems[(current === portfolioItems.length - 1 ? 0 : current + 1)].link} target="_blank" rel="noopener noreferrer" className="block w-full h-full bg-background-navy rounded-xl overflow-hidden">
                  <img
                    src={portfolioItems[(current === portfolioItems.length - 1 ? 0 : current + 1)].image}
                    alt={portfolioItems[(current === portfolioItems.length - 1 ? 0 : current + 1)].title}
                    className="w-full h-3/4 object-cover object-left transition-transform duration-300 hover:scale-105"
                    style={{ aspectRatio: '4/3', maxHeight: '75%', objectPosition: 'left center' }}
                  />
                  <div className="p-4 h-1/4 overflow-hidden">
                    <h3 className="text-xl font-semibold mb-2 line-clamp-1">{portfolioItems[(current === portfolioItems.length - 1 ? 0 : current + 1)].title}</h3>
                    <p className="text-white/70 text-sm line-clamp-2">{portfolioItems[(current === portfolioItems.length - 1 ? 0 : current + 1)].description}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 pr-2">
          <button
            aria-label="Next portfolio"
            onClick={next}
            className="p-3 rounded-full bg-white/10 hover:bg-neon-cyan/40 transition-colors z-10"
          >
            <ChevronRight size={28} />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {portfolioItems.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-neon-cyan' : 'bg-white/20'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Show portfolio ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
