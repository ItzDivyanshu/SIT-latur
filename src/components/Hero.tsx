import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedWordCycle } from "./ui/animated-word-cycle";
import BookingForm from "./booking/BookingForm";
import { useBooking } from "../context/BookingContext";

// Throttle utility function
const throttle = (func: (...args: any[]) => void, limit: number) => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 16); // ~60fps

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContent = useCallback(() => {
    const contentSection = document.getElementById("content");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const { openBooking } = useBooking();

  const handleGetQuoteClick = () => {
    console.log('Get Quote button clicked');
    openBooking();
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <BookingForm />
      {/* Video Background with Parallax Effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 transition-all duration-500 ease-in-out"
          style={{
            transform: `scale(${1 + scrollY * 0.0001})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <video 
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted 
            loop 
            playsInline
            onError={(e) => {
              console.error('Video error:', e);
              const video = e.target as HTMLVideoElement;
              console.log('Video error code:', video.error?.code);
              console.log('Video error message:', video.error?.message);
            }}
            onLoadedData={() => console.log('Video loaded successfully')}
          >
            <source 
              src="/media/Hero1_1 (1).mp4" 
              type="video/mp4"
              onError={() => console.log('MP4 source failed to load')}
            />
            <img 
              src="/media/about us.webp" 
              alt="Fallback hero image"
              className="absolute inset-0 w-full h-full object-cover"
            />
            Your browser does not support the video tag.
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
            <span className="block text-white mb-2 md:mb-4">Explore the World with</span>
            <div className="h-[1.5em] flex items-center justify-center">
              <AnimatedWordCycle 
                words={["Comfort & Luxury", "Adventure & Excitement", "Serenity & Peace", "Discovery & Wonder"]}
                interval={4000}
                className="text-[#FF0000] font-bold"
              />
            </div>
          </h1>
          
          <div className="animate-fade-in-up">
            <Button 
              onClick={handleGetQuoteClick}
              className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToContent}
      >
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </div>
  );
};

export default React.memo(Hero);