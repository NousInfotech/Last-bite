"use client";
import { useState, useEffect } from 'react';
import { Apple, Smartphone, CheckCircle, MapPin, Clock } from 'lucide-react';

export default function DownloadCTA() {
  const [, setIsVisible] = useState(false);
  const [, setAnimatePhone] = useState(false);

  useEffect(() => {
    // Enhanced animation sequence with better timing
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const phoneTimer = setTimeout(() => {
      setAnimatePhone(true);
    }, 800);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(phoneTimer);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-20 md:py-28"
    style={{ background: 'linear-gradient(135deg, #01615F, #065f46)' }} id="download-app">

      {/* Enhanced dynamic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-coral-red opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-red-400 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-purple-400 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content (Text & CTA) */}
          <div 
            className={`text-white transition-all duration-1000 transform ₹{
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/10 shadow-lg">
              <span className="text-white/90 font-medium text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-coral-red" /> Save Food & Money
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight !text-white">
              <span className="text-coral-red">Rescue Food</span> With <br /> 
              Last Bite
            </h2>
            
            <p className="text-xl mb-8 text-white/90 font-light max-w-lg leading-relaxed">
              Get incredible deals on quality food while fighting waste. Join thousands of eco-conscious shoppers saving money every day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {/* App Store Button - Enhanced */}
              <button className="group flex items-center justify-center gap-3 bg-white hover:bg-coral-red transition-all duration-300 rounded-xl py-4 px-6 font-bold text-emerald-700 shadow-lg shadow-emerald-900/20 transform hover:scale-105 hover:shadow-xl">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-base">App Store</div>
                </div>
              </button>
              
              {/* Google Play Button - Enhanced */}
              <button className="group flex items-center justify-center gap-3 bg-white hover:bg-coral-red transition-all duration-300 rounded-xl py-4 px-6 font-bold text-emerald-700 shadow-lg shadow-emerald-900/20 transform hover:scale-105 hover:shadow-xl">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="text-base">Google Play</div>
                </div>
              </button>
            </div>
            
            {/* Feature badges replacing stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-coral-red" />
                </div>
                <span className="text-white text-sm">Instant Notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-coral-red" />
                </div>
                <span className="text-white text-sm">Easy Pickup</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-coral-red" />
                </div>
                <span className="text-white text-sm">Store Ratings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-coral-red" />
                </div>
                <span className="text-white text-sm">Secure Payments</span>
              </div>
            </div>
          </div>
          
          {/* Right Content (Phone Mockup) - Using Device Emulator */}
          <div className="relative flex justify-center">
            <div 
              className={`relative z-20 transition-all duration-1000 transform ₹{
                animatePhone ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-20 opacity-0 rotate-6'
              }`}
            >
              {/* iPhone Device Frame */}
              <div className="device-iphone-14-pro max-w-full">
                <div className="device relative">
                  {/* iPhone body */}
                  <div className="relative mx-auto bg-black rounded-[55px] h-[712px] w-[350px] shadow-xl overflow-hidden border-[14px] border-black">
                    {/* iPhone notch */}
                    <div className="absolute top-0 left-1/2 w-[40%] h-[30px] -translate-x-1/2 bg-black rounded-b-[14px] z-50 flex items-end justify-center pb-1">
                      <div className="w-[10%] h-[4px] bg-gray-700 rounded-full"></div>
                    </div>
                    
                    {/* iPhone screen */}
                    <div className="relative h-full w-full rounded-[40px] overflow-hidden bg-white">
                      {/* App UI Content - Fully Animated & Dynamic */}
                      <div className="h-full overflow-hidden">
                        {/* App UI mockup - modern food app interface */}
                        <div className="animate-fadeIn">
                          {/* App header */}
                          <div className="bg-gradient-to-r from-emerald-600 to-teal-500 h-16 flex items-center justify-between px-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-white mr-2 flex items-center justify-center shadow-md">
                                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.352,0l-3-2.75a1,1,0,0,1,1.352-1.475l2.324,2.129,5.324-4.878a1,1,0,0,1,1.352,1.474Z"/>
                                </svg>
                              </div>
                              <div className="text-white font-bold text-lg">Last Bite</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Enhanced search bar - with animation */}
                          <div className="px-4 pt-4 animate-slideDown" style={{ animationDelay: '0.2s' }}>
                            <div className="bg-white rounded-xl shadow-md p-2 flex items-center">
                              <svg className="w-5 h-5 text-gray-400 ml-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                              <div className="text-gray-400 text-sm">Find nearby deals...</div>
                            </div>
                          </div>
                          
                          {/* Category pills - with animation */}
                          <div className="px-4 pt-4 animate-slideDown" style={{ animationDelay: '0.4s' }}>
                            <div className="flex space-x-2 overflow-x-auto pb-2">
                              <div className="flex-shrink-0 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md">All</div>
                              <div className="flex-shrink-0 bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">Bakery</div>
                              <div className="flex-shrink-0 bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">Grocery</div>
                              <div className="flex-shrink-0 bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">Restaurant</div>
                            </div>
                          </div>
                          
                          {/* Food items - with animation */}
                          <div className="p-4 overflow-y-auto h-[calc(100%-130px)]">
                            {/* Card 1 - With scale-in animation */}
                            <div className="bg-white rounded-2xl mb-4 overflow-hidden shadow-lg border border-gray-100 animate-scaleIn" style={{ animationDelay: '0.6s' }}>
                              <div className="h-32 bg-gradient-to-br from-orange-400 to-red-500 relative">
                                <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-800 px-2 py-1 rounded-lg text-xs font-bold shadow-md">
                                  -70%
                                </div>
                              </div>
                              <div className="p-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="font-bold text-gray-800 text-lg">Sunny Bakery Box</div>
                                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                      <MapPin className="w-3 h-3" />
                                      <span>450m away</span>
                                      <span className="mx-1">•</span>
                                      <Clock className="w-3 h-3" />
                                      <span>Pickup by 6PM</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 flex justify-between items-center">
                                  <div className="text-emerald-600 font-bold text-lg">₹3.99</div>
                                  <div className="text-xs line-through text-gray-400">₹12.99</div>
                                </div>
                                <button className="mt-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-2.5 text-sm font-medium transition-colors shadow-md">Reserve Now</button>
                              </div>
                            </div>
                            
                            {/* Card 2 - With scale-in animation */}
                            <div className="bg-white rounded-2xl mb-4 overflow-hidden shadow-lg border border-gray-100 animate-scaleIn" style={{ animationDelay: '0.8s' }}>
                              <div className="h-32 bg-gradient-to-br from-purple-400 to-indigo-500 relative">
                                <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-800 px-2 py-1 rounded-lg text-xs font-bold shadow-md">
                                  -60%
                                </div>
                              </div>
                              <div className="p-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="font-bold text-gray-800 text-lg">Verde Restaurant Box</div>
                                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                      <MapPin className="w-3 h-3" />
                                      <span>1.2km away</span>
                                      <span className="mx-1">•</span>
                                      <Clock className="w-3 h-3" />
                                      <span>Pickup by 8PM</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 flex justify-between items-center">
                                  <div className="text-emerald-600 font-bold text-lg">₹5.49</div>
                                  <div className="text-xs line-through text-gray-400">₹13.99</div>
                                </div>
                                <button className="mt-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-2.5 text-sm font-medium transition-colors shadow-md">Reserve Now</button>
                              </div>
                            </div>
                            
                            {/* Card 3 - With scale-in animation */}
                            <div className="bg-white rounded-2xl mb-4 overflow-hidden shadow-lg border border-gray-100 animate-scaleIn" style={{ animationDelay: '1s' }}>
                              <div className="h-32 bg-gradient-to-br from-teal-400 to-emerald-500 relative">
                                <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-800 px-2 py-1 rounded-lg text-xs font-bold shadow-md">
                                  -55%
                                </div>
                              </div>
                              <div className="p-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="font-bold text-gray-800 text-lg">Green Market Bundle</div>
                                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                      <MapPin className="w-3 h-3" />
                                      <span>800m away</span>
                                      <span className="mx-1">•</span>
                                      <Clock className="w-3 h-3" />
                                      <span>Pickup by 7PM</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 flex justify-between items-center">
                                  <div className="text-emerald-600 font-bold text-lg">₹4.99</div>
                                  <div className="text-xs line-through text-gray-400">₹10.99</div>
                                </div>
                                <button className="mt-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-2.5 text-sm font-medium transition-colors shadow-md">Reserve Now</button>
                              </div>
                            </div>
                          </div>
                          
                          {/* iPhone home indicator */}
                          <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-black/20 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* iPhone button details - for realism */}
                  <div className="absolute -right-3 top-28 h-16 w-1 bg-gray-800 rounded-l-lg"></div>
                  <div className="absolute -left-3 top-24 h-12 w-1 bg-gray-800 rounded-r-lg"></div>
                  <div className="absolute -left-3 top-40 h-12 w-1 bg-gray-800 rounded-r-lg"></div>
                  <div className="absolute -left-3 top-56 h-12 w-1 bg-gray-800 rounded-r-lg"></div>
                </div>
              </div>
              
              {/* Special badges */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-red-500/30 z-30">
                <div className="text-white text-center font-bold text-sm">
                  <div className="text-lg">70%</div>
                  <div className="text-xs">OFF</div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-yellow-500/30 z-30 flex items-center">
                <span>Easy Food Rescue</span>
                <CheckCircle className="w-4 h-4 ml-1.5" />
              </div>
              
              {/* Enhanced glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-400/30 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}