import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Smoothing spring for the main cursor
  const springConfig = { damping: 22, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);
  
  // Trailing elements configuration
  const trailCount = 4;
  const trailDelay = 0.1;
  
  // Update cursor position with spring animation
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElements = [
        'BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT',
        '[role="button"]', '[role="link"]', '[role="menuitem"]',
        '[tabindex]', '.interactive', '.hover-effect', '.service-card'
      ];
      
      const isInteractive = interactiveElements.some(selector => 
        target.matches(selector) || target.closest(selector)
      );
      
      if (isInteractive) {
        setIsHovering(true);
        setCursorVariant('hover');
      } else {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', handleMouseOver);
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY]);

  // Main cursor variants
  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(0, 200, 255, 0.2)',
      borderColor: '#00c8ff',
      backdropFilter: 'blur(2px)',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 500,
        mass: 0.5
      }
    },
    hover: {
      scale: 1.5,
      backgroundColor: 'rgba(255, 100, 255, 0.3)',
      borderColor: '#ff64ff',
      backdropFilter: 'blur(3px)',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 500,
        mass: 0.5
      }
    }
  };

  // Trailing element variants
  const trailVariants = (index: number) => ({
    default: {
      scale: 1 - (index * 0.1),
      opacity: 0.6 - (index * 0.1),
      backgroundColor: `rgba(0, 200, 255, ${0.2 - (index * 0.05)})`,
      borderColor: `rgba(0, 200, 255, ${0.8 - (index * 0.15)})`,
      transition: {
        type: 'spring',
        damping: 20 + (index * 5),
        stiffness: 1000,
        mass: 0.3,
        delay: index * trailDelay
      }
    },
    hover: {
      scale: 1.2 - (index * 0.1),
      opacity: 0.8 - (index * 0.1),
      backgroundColor: `rgba(255, 100, 255, ${0.3 - (index * 0.05)})`,
      borderColor: `rgba(255, 100, 255, ${0.9 - (index * 0.15)})`,
      transition: {
        type: 'spring',
        damping: 20 + (index * 5),
        stiffness: 1000,
        mass: 0.3,
        delay: index * trailDelay * 0.5
      }
    }
  });

  // Calculate position with offset for trailing elements
  const getTrailPosition = (index: number) => {
    const offset = (trailCount - index) * 4;
    return {
      x: cursorX.get() - 16 - offset,
      y: cursorY.get() - 16 - offset
    };
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full border-2 pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          left: -16,
          top: -16,
          boxShadow: '0 0 20px rgba(0, 200, 255, 0.5)',
          mixBlendMode: isHovering ? 'difference' : 'normal'
        }}
        variants={cursorVariants}
        animate={cursorVariant}
      />
      
      {/* Trailing elements */}
      {Array.from({ length: trailCount }).map((_, index) => (
        <motion.div
          key={index}
          className="fixed w-8 h-8 rounded-full border-2 pointer-events-none z-40"
          style={{
            ...getTrailPosition(index),
            boxShadow: '0 0 15px rgba(0, 200, 255, 0.3)',
            mixBlendMode: isHovering ? 'difference' : 'normal'
          }}
          variants={trailVariants(index)}
          animate={cursorVariant}
        />
      ))}
      
      {/* Click effect */}
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-white pointer-events-none z-60"
        style={{
          x: cursorX,
          y: cursorY,
          left: -16,
          top: -16,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          opacity: [0, 0.5, 0],
          scale: [0.5, 3, 5],
          transition: { duration: 0.5, ease: 'easeOut' }
        }}
      />
    </div>
  );
};

export default CustomCursor;