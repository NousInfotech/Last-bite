"use client";
import { useState, useEffect, useRef } from 'react';
import { 
   Timer, Heart, TrendingUp, ShieldCheck, 
  Sparkles, Leaf, Coffee, Utensils, Clock, Store, DollarSign
} from 'lucide-react';

export default function KeywordMarquee({ 
  speed = "medium", 
  direction = "left",
  pauseOnHover = true,
  backgroundColor = "white",
  highlightColor = "#10b981" // emerald-600 equivalent
}) {
  const [isAnimated, setIsAnimated] = useState(false);
  const marqueeRef = useRef(null);
  
  // Keywords with their icons - expanded list
  const keywords = [
    { text: "Save Money", icon: <DollarSign className="w-4 h-4" /> },
    { text: "Reduce Waste", icon: <Leaf className="w-4 h-4" /> },
    { text: "Quality Food", icon: <ShieldCheck className="w-4 h-4" /> },
    { text: "Easy Pickup", icon: <Timer className="w-4 h-4" /> },
    { text: "Support Local", icon: <Heart className="w-4 h-4" /> },
    { text: "70% Off", icon: <TrendingUp className="w-4 h-4" /> },
    { text: "Fresh Deals", icon: <Sparkles className="w-4 h-4" /> },
    { text: "Eco-Friendly", icon: <Leaf className="w-4 h-4" /> },
    { text: "Restaurants", icon: <Utensils className="w-4 h-4" /> },
    { text: "Bakeries", icon: <Coffee className="w-4 h-4" /> },
    { text: "Last Minute", icon: <Clock className="w-4 h-4" /> },
    { text: "Local Shops", icon: <Store className="w-4 h-4" /> },
    { text: "Quick Bites", icon: <Timer className="w-4 h-4" /> },
  ];

  // Duplicate the keywords for seamless looping
  const allKeywords = [...keywords, ...keywords];
  
  // Calculate animation duration based on speed
  const getDuration = () => {
    switch(speed) {
      case "slow": return '60s';
      case "fast": return '20s';
      default: return '30s';
    }
  };

  const getDirection = () => {
    return direction === "right" ? "rtl" : "ltr";
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="pt-7 overflow-hidden border-y border-gray-100 relative"
      style={{ backgroundColor }}
    >
      {/* Optional gradient fades on the sides for smooth transition */}
      <div className="absolute top-0 bottom-0 left-0 w-20 z-10" 
           style={{ background: `linear-gradient(to right, ${backgroundColor}, transparent)` }}></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 z-10" 
           style={{ background: `linear-gradient(to left, ${backgroundColor}, transparent)` }}></div>
      
      {/* Marquee track */}
      <div className="relative max-w-full mx-auto overflow-hidden" dir={getDirection()}>
        <div 
          ref={marqueeRef}
          className={`flex gap-6 md:gap-8 whitespace-nowrap transition-all ${
            isAnimated ? 'animate-marquee' : 'translate-x-0'
          } ${pauseOnHover ? 'hover:animation-pause' : ''}`}
          style={{
            animationDuration: getDuration(),
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDirection: direction === "right" ? 'reverse' : 'normal'
          }}
        >
          {allKeywords.map((item, index) => (
            <div 
              key={index} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <div style={{ color: highlightColor }}>{item.icon}</div>
              <span className="font-medium text-gray-700 text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Ensure CSS animation is defined */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(${direction === "right" ? "50%" : "-50%"});
          }
        }
        
        .animate-marquee {
          animation-name: marquee;
        }
        
        .animation-pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}