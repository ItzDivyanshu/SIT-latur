import React, { useState, useEffect } from 'react';

interface AnimatedWordCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

export const AnimatedWordCycle: React.FC<AnimatedWordCycleProps> = ({
  words,
  interval = 3000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cycleWords = () => {
      setIsVisible(false);
      
      const timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 500); // Half the interval for fade out

      return () => clearTimeout(timeoutId);
    };

    const intervalId = setInterval(cycleWords, interval);

    return () => clearInterval(intervalId);
  }, [words.length, interval]);

  return (
    <span 
      className={`inline-block transition-opacity duration-500 ${className} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {words[currentIndex]}
    </span>
  );
};

// No default export, using named export only
