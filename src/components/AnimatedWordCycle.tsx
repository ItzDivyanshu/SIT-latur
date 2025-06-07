import React, { useState, useEffect } from 'react';

interface AnimatedWordCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

const AnimatedWordCycle: React.FC<AnimatedWordCycleProps> = ({ 
  words, 
  interval = 3000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // After fade out completes, change word and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 500); // Half of the interval for the fade out/in duration
      
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span 
      className={`transition-opacity duration-500 ${className} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {words[currentIndex]}
    </span>
  );
};

export default AnimatedWordCycle;
