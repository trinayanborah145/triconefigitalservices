import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.classList.contains('service-card') || 
          target.classList.contains('hover-effect')) {
        setIsHovering(true);
        setCursorVariant('hover');
      } else {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(0, 255, 255, 0.3)',
      borderColor: '#00ffff',
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(255, 0, 255, 0.3)',
      borderColor: '#ff00ff',
      mixBlendMode: 'difference' as const,
    },
  };

  const trailingVariants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      opacity: 0.5,
      backgroundColor: 'rgba(255, 255, 0, 0.3)',
      borderColor: '#ffff00',
      transition: {
        type: 'spring',
        mass: 0.6,
        stiffness: 80,
        damping: 15,
      }
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      opacity: 0.7,
      backgroundColor: 'rgba(255, 255, 0, 0.4)',
      borderColor: '#ffff00',
      transition: {
        type: 'spring',
        mass: 0.6,
        stiffness: 80,
        damping: 15,
      }
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        style={{ 
          boxShadow: isHovering 
            ? '0 0 15px rgba(255, 0, 255, 0.7), 0 0 30px rgba(255, 0, 255, 0.4)' 
            : '0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.4)' 
        }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-50"
        variants={trailingVariants}
        animate={cursorVariant}
      />
    </>
  );
};

export default CustomCursor;