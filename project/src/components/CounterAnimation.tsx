import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ 
  end, 
  duration = 2000,
  suffix = '',
  prefix = ''
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    if (inView) {
      const startAnimation = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressRatio = Math.min(progress / duration, 1);
        
        // Easing function for smoother animation
        const easedProgress = progressRatio === 1 
          ? 1 
          : 1 - Math.pow(2, -10 * progressRatio);
        
        setCount(Math.floor(easedProgress * end));

        if (progressRatio < 1) {
          animationFrame = requestAnimationFrame(startAnimation);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(startAnimation);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="font-display font-bold">
      {prefix}{count}{suffix}
    </div>
  );
};

export default CounterAnimation;