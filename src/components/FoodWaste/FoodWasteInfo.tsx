"use client";
import Link from 'next/link';
import React, { useState } from 'react';

export default function FoodWasteInfo() {
  const [activeTab, setActiveTab] = useState('global');
  



  return (
    <section className="py-16 bg-gradient-to-br from-soft-ivory via-lush-mint/10 to-soft-ivory">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with curved design */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-lush-mint/20 rounded-full transform scale-[1.8] blur-3xl opacity-30"></div>
          <div className="relative z-10 text-center">
            <span className="inline-block text-sm font-semibold text-primary-green px-6 py-1.5 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--lush-mint)', opacity: 0.8 }}>
              Growing Crisis
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5"
                style={{ color: 'var(--rich-charcoal)' }}>
              About <span style={{ color: 'var(--primary-green)' }}>Food Waste</span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-16 rounded-full" 
                 style={{ backgroundColor: 'var(--coral-red)' }}></div>
            </div>
            <p className="text-lg max-w-2xl mx-auto"
               style={{ color: 'var(--rich-charcoal)', opacity: 0.8 }}>
              Unconsumed Food is a global crisis—affecting economies, communities, and the environment. 
              Understanding the scale of the problem is the first step toward creating a more sustainable future.
            </p>
          </div>
        </div>

        {/* Curved Tabs */}
        <div className="flex justify-center mb-14">
          <div className="relative">
            <div className="absolute inset-0 bg-lush-mint/30 blur-md rounded-full transform scale-110"></div>
            <div className="relative inline-flex rounded-full p-1 shadow-md bg-white/80 backdrop-blur-sm"
                style={{ borderColor: 'var(--lush-mint)' }}>
              <button
                onClick={() => setActiveTab('global')}
                className={`px-8 py-3 text-sm font-medium rounded-full transition duration-300 ease-in-out ${
                  activeTab === 'global' ? 'shadow-md' : ''
                }`}
                style={{ 
                  backgroundColor: activeTab === 'global' ? 'var(--primary-green)' : 'transparent',
                  color: activeTab === 'global' ? 'white' : 'var(--primary-green)'
                }}
              >
                Global Facts
              </button>
              <button
                onClick={() => setActiveTab('local')}
                className={`px-8 py-3 text-sm font-medium rounded-full transition duration-300 ease-in-out ${
                  activeTab === 'local' ? 'shadow-md' : ''
                }`}
                style={{ 
                  backgroundColor: activeTab === 'local' ? 'var(--primary-green)' : 'transparent',
                  color: activeTab === 'local' ? 'white' : 'var(--primary-green)'
                }}
              >
                Chennai Impact
              </button>
            </div>
          </div>
        </div>

        {/* Main Content with Curved Design */}
        {activeTab === 'global' ? (
          <div className="relative mb-16">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-green/20 to-lush-mint/30 rounded-[3rem] blur-xl opacity-70"></div>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white/80 backdrop-blur-sm shadow-xl">
              {/* Banner Area */}
              <div className="relative h-80 overflow-hidden rounded-t-[2.5rem]">
                <div className="absolute inset-0 bg-gradient-to-r z-10"
                    style={{ 
                      backgroundImage: 'linear-gradient(120deg, rgba(1, 97, 95, 0.9), rgba(0, 64, 59, 0.7))' 
                    }}></div>
                <div 
                  className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full"
                  style={{ backgroundColor: 'var(--zesty-lime)', opacity: 0.15 }}
                ></div>
                <div 
                  className="absolute -top-16 -left-16 w-64 h-64 rounded-full"
                  style={{ backgroundColor: 'var(--lush-mint)', opacity: 0.2 }}
                ></div>
                <div className="absolute inset-0 flex items-center p-12 z-20">
                  <h3 className="text-white text-4xl md:text-5xl font-bold max-w-lg leading-tight">
                    Shocking Global Unconsumed Food Facts
                  </h3>
                </div>
                <img 
                  src="images/food waste/3.svg" 
                  alt="Global Unconsumed Food" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              
              {/* Content Area */}
              <div className="p-8 md:p-12 relative">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full translate-x-1/2 -translate-y-1/2"
                    style={{ backgroundColor: 'var(--coral-red)', opacity: 0.05 }}></div>
                
                <p className="text-xl mb-10 relative z-10"
                   style={{ color: 'var(--rich-charcoal)', opacity: 0.9 }}>
                  According to reports, <span className="font-bold"
                  style={{ color: 'var(--primary-green)' }}>40% of all food produced globally is wasted</span>. 
                  {"That's a staggering"} <span className="font-bold"
                  style={{ color: 'var(--primary-green)' }}>2.5 billion tonnes of food</span> wasted 
                  every year—equivalent to <span className="font-bold"
                  style={{ color: 'var(--primary-green)' }}>80,000 kilograms every second</span>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* First Stat */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-lush-mint/50 rounded-[2rem] transform scale-[1.02] blur-sm opacity-70 
                                  group-hover:scale-105 group-hover:opacity-90 transition-all duration-300"></div>
                    <div className="relative rounded-[2rem] p-8 h-full flex flex-col items-center justify-center text-center
                                  transform transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="text-5xl font-bold mb-3"
                           style={{ color: 'var(--deep-forest)' }}>40%</div>
                      <p className="text-sm" style={{ color: 'var(--deep-forest)' }}>
                        of global food production wasted annually
                      </p>
                    </div>
                  </div>
                  
                  {/* Second Stat */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-lush-mint/50 rounded-[2rem] transform scale-[1.02] blur-sm opacity-70 
                                  group-hover:scale-105 group-hover:opacity-90 transition-all duration-300"></div>
                    <div className="relative rounded-[2rem] p-8 h-full flex flex-col items-center justify-center text-center
                                  transform transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="text-5xl font-bold mb-3"
                           style={{ color: 'var(--deep-forest)' }}>2.5B</div>
                      <p className="text-sm" style={{ color: 'var(--deep-forest)' }}>
                        tonnes of Unconsumed Foodd every year
                      </p>
                    </div>
                  </div>
                  
                  {/* Third Stat */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-lush-mint/50 rounded-[2rem] transform scale-[1.02] blur-sm opacity-70 
                                  group-hover:scale-105 group-hover:opacity-90 transition-all duration-300"></div>
                    <div className="relative rounded-[2rem] p-8 h-full flex flex-col items-center justify-center text-center
                                  transform transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="text-5xl font-bold mb-3"
                           style={{ color: 'var(--deep-forest)' }}>80K</div>
                      <p className="text-sm" style={{ color: 'var(--deep-forest)' }}>
                        kilograms wasted every second
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative mb-16">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-green/20 to-lush-mint/30 rounded-[3rem] blur-xl opacity-70"></div>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white/80 backdrop-blur-sm shadow-xl">
              {/* Banner Area */}
              <div className="relative h-80 overflow-hidden rounded-t-[2.5rem]">
                <div className="absolute inset-0 bg-gradient-to-r z-10"
                    style={{ 
                      backgroundImage: 'linear-gradient(120deg, rgba(1, 97, 95, 0.9), rgba(0, 64, 59, 0.7))' 
                    }}></div>
                <div 
                  className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full"
                  style={{ backgroundColor: 'var(--zesty-lime)', opacity: 0.15 }}
                ></div>
                <div 
                  className="absolute -top-16 -left-16 w-64 h-64 rounded-full"
                  style={{ backgroundColor: 'var(--lush-mint)', opacity: 0.2 }}
                ></div>
                <div className="absolute inset-0 flex items-center p-12 z-20">
                  <h3 className="text-white text-4xl md:text-5xl font-bold max-w-lg leading-tight">
                    {"The Local Reality: Chennai's Unconsumed Food Crisis"}
                  </h3>
                </div>
                <img 
        src="images/food waste/2.svg" 
                  alt="Chennai Unconsumed Food" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              
              {/* Content Area */}
              <div className="p-8 md:p-12 relative">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full translate-x-1/2 -translate-y-1/2"
                    style={{ backgroundColor: 'var(--coral-red)', opacity: 0.05 }}></div>
                
                <p className="text-xl mb-10 relative z-10"
                   style={{ color: 'var(--rich-charcoal)', opacity: 0.9 }}>
                  In Chennai alone, the Corporation collects <span className="font-bold"
                  style={{ color: 'var(--primary-green)' }}>600–800 tonnes of Unconsumed Food daily</span> from 
                  restaurants, pizzerias, roadside eateries, and public garbage bins. Studies show that 
                  <span className="font-bold"
                  style={{ color: 'var(--primary-green)' }}> 65–70% of a full bin consists of food and vegetable waste</span>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* First Stat */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-lush-mint/50 rounded-[2rem] transform scale-[1.02] blur-sm opacity-70 
                                  group-hover:scale-105 group-hover:opacity-90 transition-all duration-300"></div>
                    <div className="relative rounded-[2rem] p-8 h-full flex flex-col items-center justify-center text-center
                                  transform transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="text-5xl font-bold mb-3"
                           style={{ color: 'var(--deep-forest)' }}>600-800</div>
                      <p className="text-sm" style={{ color: 'var(--deep-forest)' }}>
                        tonnes of Unconsumed Food collected daily in Chennai
                      </p>
                    </div>
                  </div>
                  
                  {/* Second Stat */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-lush-mint/50 rounded-[2rem] transform scale-[1.02] blur-sm opacity-70 
                                  group-hover:scale-105 group-hover:opacity-90 transition-all duration-300"></div>
                    <div className="relative rounded-[2rem] p-8 h-full flex flex-col items-center justify-center text-center
                                  transform transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="text-5xl font-bold mb-3"
                           style={{ color: 'var(--deep-forest)' }}>65-70%</div>
                      <p className="text-sm" style={{ color: 'var(--deep-forest)' }}>
                        of garbage bin contents are Unconsumed Food
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm italic mt-8 text-center"
                     style={{ color: 'var(--rich-charcoal)', opacity: 0.6 }}>
                  Source: The Hindu, The Economic Times
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Impact Cards - More organic shape */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Environmental Impact Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-coral-red/10 rounded-[2rem] transform scale-[1.02] blur-sm opacity-70 
                          group-hover:scale-105 group-hover:opacity-90 transition-all duration-300"></div>
            <div className="relative bg-white/90 rounded-[2rem] p-8 h-full overflow-hidden
                          transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
              {/* Decorative circle */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full"
                   style={{ backgroundColor: 'var(--coral-red)', opacity: 0.05 }}></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                     style={{ backgroundColor: 'var(--coral-red)', opacity: 0.2 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                       style={{ color: 'var(--coral-red)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--rich-charcoal)' }}>
                  Environmental Impact
                </h3>
                <p className="text-base" style={{ color: 'var(--rich-charcoal)', opacity: 0.8 }}>
                  Unconsumed Food is responsible for 8-10% of global greenhouse gas emissions. When food decomposes in landfills, 
                  it produces methane—a greenhouse gas 25 times more potent than CO₂.
                </p>
              </div>
            </div>
          </div>
          
          {/* Economic Impact Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-citrus-gold/10 rounded-[2rem] transform scale-[1.02] blur-sm opacity-70 
                          group-hover:scale-105 group-hover:opacity-90 transition-all duration-300"></div>
            <div className="relative bg-white/90 rounded-[2rem] p-8 h-full overflow-hidden
                          transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
              {/* Decorative circle */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full"
                   style={{ backgroundColor: 'var(--citrus-gold)', opacity: 0.05 }}></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                     style={{ backgroundColor: 'var(--citrus-gold)', opacity: 0.2 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                       style={{ color: 'var(--citrus-gold)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--rich-charcoal)' }}>
                  Economic Value
                </h3>
                <p className="text-base" style={{ color: 'var(--rich-charcoal)', opacity: 0.8 }}>
                  The economic cost of Unconsumed Food in India is estimated at ₹92,000 crores annually. 
                  For businesses, this represents significant lost revenue and increased operational costs.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section - Organic flowing shape */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary-green/30 to-deep-forest/20 rounded-[3rem] blur-xl opacity-80"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-3 p-10 md:p-14 relative overflow-hidden" 
                  style={{ 
                    background: 'linear-gradient(135deg, var(--primary-green), var(--deep-forest))'
                  }}>
                {/* Decorative elements */}
                <div className="absolute -left-24 top-12 w-48 h-48 rounded-full opacity-20 bg-white/30"></div>
                <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full opacity-10 bg-white/20 transform translate-x-1/3 translate-y-1/4"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Join Our Mission
                  </h3>
                  <p className="mb-10 text-white opacity-90 text-lg">
                   {"Whether you're a business with surplus food or a conscious consumer, you can be part of the solution. Join the Last Bite network today."}
                  </p>
                  <div className="flex flex-wrap gap-5">
                    <Link href='/partner#partner'>
                    <button className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                      style={{ 
                        backgroundColor: 'var(--zesty-lime)', 
                        color: 'var(--deep-forest)'
                      }}>
                      Partner With Us
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    </Link>
                    <Link href="/partner">
                    <button  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/80 font-medium rounded-full transition-all duration-300 text-white hover:bg-white/10 transform hover:-translate-y-1">
                      Learn More
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 relative h-full min-h-[320px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                <img 
                  src="images/join our mission/2.svg" 
                  alt="Food rescue" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}