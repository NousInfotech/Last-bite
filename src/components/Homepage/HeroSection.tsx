"use client";
import React, { useState, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const handleScroll = () => {
    const nextSection = document.getElementById('food-waste');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-forest/80 to-primary-green/60 z-10"></div>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/video/hero-main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content Container */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
        
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-soft-ivory mb-4 mt-4">
            {"India's Evers First Surplus"}
            <span className="relative inline-block mx-2">
              <span className="relative z-10">Food</span>
              <span className="absolute bottom-1 left-0 w-full h-4 bg-coral-red/70 -rotate-2 z-0"></span>
            </span> 
            Delivery App
          </h1>
            {/* Trust Badge */}
          <div className="inline-block mb-6 px-4 py-1 bg-soft-ivory/90 rounded-full">
            <p className="text-primary-green font-semibold text-sm md:text-base tracking-wider"> WE DELIVER TRUST </p>
          </div>
          {/* Slogan */}
          {/* <p className="text-xl md:text-2xl text-soft-ivory/90 mt-6 mb-10">
            Reduce Unconsumed Food, Feed the Future — One Bite at a Time
          </p> */}
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button className="bg-coral-red hover:bg-coral-red/90 text-soft-ivory rounded-full px-8 py-4 flex items-center gap-2 font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Download size={20} />
              Download for iOS
            </button>
            <button className="bg-lush-mint hover:bg-lush-mint/90 text-primary-green rounded-full px-8 py-4 flex items-center gap-2 font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Download size={20} />
              Download for Android
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <p className="text-soft-ivory mb-2 text-sm">Discover More</p>
      <ChevronDown
        className="text-soft-ivory animate-bounce cursor-pointer"
        size={24}
        onClick={handleScroll} // Add click event to scroll
      />
    </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 hidden lg:block">
          <div className="h-24 w-24 rounded-full bg-zesty-lime/30 blur-md animate-pulse"></div>
        </div>
        <div className="absolute bottom-1/3 right-10 hidden lg:block">
          <div className="h-32 w-32 rounded-full bg-fresh-basil/20 blur-md animate-pulse delay-700"></div>
        </div>
        
        {/* Trust Indicators */}
        {/* <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-6 md:gap-12">
  <div className="bg-soft-ivory/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">

    <span className="text-soft-ivory/80 text-sm">Sustainable practices.</span>
  </div>
  <div className="bg-soft-ivory/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
   
    <span className="text-soft-ivory/80 text-sm">Supporting local businesses.</span>
  </div>
  <div className="bg-soft-ivory/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">

    <span className="text-soft-ivory/80 text-sm">Helping those in need.</span>
  </div>
</div> */}


      </div>
    </div>
  );
}