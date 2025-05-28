import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  shadowColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  id, 
  title, 
  description, 
  icon: Icon, 
  color, 
  shadowColor 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setRotation({
      x: y * 20,
      y: -x * 20,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <Link to={`/services/${id}`} className="block h-full group">
      <motion.div
        ref={cardRef}
        className="glass-card p-6 h-full"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.2s ease-out',
          boxShadow: isHovered 
            ? `0 10px 30px -5px ${shadowColor}` 
            : '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        }}
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center" 
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon size={16} color={color} />
            </div>
          </div>
          <p className="text-white/70 mb-6 flex-grow">
            {description}
          </p>
          <div className="flex items-center">
            <span className="text-sm font-medium flex items-center" style={{ color }}>
              Learn more
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;