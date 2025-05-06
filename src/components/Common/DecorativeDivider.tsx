"use client";
import { useEffect, useState } from 'react';

export default function DecorativeDivider({ 
  accentColor = "#10b981",  // emerald accent color
  backgroundColor = "#004d40" // dark teal background
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    
    // Set up animation loop
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 100);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Top wave transition */}
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill={backgroundColor}
          />
        </svg>
      </div>
      
      {/* Main decorative element */}
      <div 
        className="py-8"
        style={{ backgroundColor }}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Decorative pattern */}
          <div className="flex justify-center">
            <div className="relative w-full md:w-3/4 h-24 flex items-center justify-center">
              {/* Animated geometric elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className={`absolute w-16 h-16 rounded-full transition-all duration-1000 ${animate ? 'opacity-80' : 'opacity-20'}`}
                    style={{
                      backgroundColor: accentColor,
                      left: `${10 + i * 16}%`,
                      transform: `scale(${animate ? 0.6 + (i % 3) * 0.2 : 0.3}) translateY(${animate ? (i % 2 ? -8 : 8) : 0}px)`,
                      opacity: animate ? 0.2 + (i * 0.1) : 0.1,
                      filter: `blur(${8 - i}px)`
                    }}
                  />
                ))}
              </div>
              
              {/* Central line with logo text */}
              <div className="relative w-full flex items-center justify-center">
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
                <div className="relative px-8 py-2 bg-transparent z-10">
                  <div className="font-bold text-3xl md:text-4xl tracking-widest flex items-center" 
                       style={{ 
                         color: 'white',
                         textShadow: `0 0 10px rgba(255,255,255,0.5), 0 0 20px ${accentColor}80`
                       }}>
                    <span className="font-light italic">Last</span>
                    <span className="font-extrabold" style={{ color: accentColor }}>Bite</span>
                    <div className="ml-2 w-2 h-2 rounded-full" 
                         style={{ 
                           backgroundColor: accentColor,
                           boxShadow: `0 0 10px 2px ${accentColor}`
                         }} />
                  </div>
                </div>
              </div>
              
              {/* Accent circles */}
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className={`absolute w-2 h-2 rounded-full transition-all duration-700 delay-${i * 100}`}
                  style={{
                    backgroundColor: 'white',
                    left: `${10 + i * 20}%`,
                    opacity: 0.7,
                    transform: `scale(${animate ? 1 : 0.5})`,
                    boxShadow: `0 0 8px 2px ${accentColor}`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave transition */}
      <div className="w-full rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill={backgroundColor}
          />
        </svg>
      </div>
    </div>
  );
}