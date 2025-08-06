import React, { useState, useEffect, useRef } from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  className?: string;
}

const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

const CounterAnimation: React.FC<CounterAnimationProps> = ({
  end,
  duration = 2.5,
  suffix = '',
  prefix = '',
  delay = 0,
  className = ''
}) => {
  const [isInView, setIsInView] = useState(false);
  const nodeRef = useRef<HTMLElement | null>(null);
  const count = useSpring(0, { stiffness: 100, damping: 30 });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Format the animated number
  const displayNumber = useTransform(count, (value) => {
    return formatNumber(Math.floor(value)) + suffix;
  });

  useEffect(() => {
    if (inView) {
      const startAnimation = async () => {
        // Initial delay for staggered animation
        await new Promise(resolve => setTimeout(resolve, delay * 300));
        
        // Start the counting animation
        count.set(0);
        count.set(end);
        
        // Add a subtle scale animation when counting starts
        if (nodeRef.current) {
          nodeRef.current.animate(
            [
              { transform: 'scale(1)' },
              { transform: 'scale(1.15)', offset: 0.2 },
              { transform: 'scale(1)' },
            ],
            {
              duration: duration * 1000,
              easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
            }
          );
        }
      };

      startAnimation();
      setIsInView(true);
    }
  }, [inView, end, duration, delay, count]);

  return (
    <motion.span 
      ref={(el: HTMLElement | null) => {
        ref(el);
        nodeRef.current = el;
      }}
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: isInView ? 1 : 0.5, 
        y: isInView ? 0 : 10,
        transition: { duration: 0.5, delay: delay * 0.3 }
      }}
    >
      {prefix}
      <motion.span>{displayNumber}</motion.span>
    </motion.span>
  );
};

export default CounterAnimation;