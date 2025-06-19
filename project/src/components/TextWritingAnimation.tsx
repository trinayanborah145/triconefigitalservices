import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TextWritingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

const TextWritingAnimation: React.FC<TextWritingAnimationProps> = ({
  text,
  duration = 2,
  className = ''
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex >= text.length) {
      setIsComplete(true);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, (duration * 1000) / text.length);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, duration]);

  // Cursor blinking effect
  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.3,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }
    }
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="relative text-neon-cyan">
        {displayText}
        {!isComplete && (
          <motion.span
            className="absolute right-0 top-0 bottom-0 w-[2px] bg-neon-cyan"
            variants={cursorVariants}
            animate="blinking"
          />
        )}
      </span>
    </div>
  );
};

export default TextWritingAnimation;
