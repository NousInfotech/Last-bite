'use client';

import React from 'react';
import { Leaf, Target, Heart, Sprout, ShoppingBag, TrendingUp, Download, Users } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <section className="py-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lush-mint/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-citrus-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-coral-red/5 rounded-full blur-3xl"></div>
      
   
     
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with illustration */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-1 bg-lush-mint/20 rounded-full mb-4">
              <span className="text-primary-green font-medium">Why Last Bite?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-rich-charcoal mb-6">About Us</h2>
            <div className="h-1 w-20 bg-coral-red rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Last Bite is <span className="text-primary-green font-semibold">{"India's first surplus food app</span>, founded in 2025 to reduce food waste and promote sustainability. We connect consumers with nearby restaurants, cafés, bakeries, and supermarkets offering unsold, perfectly good food at discounted prices."}</span>
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main illustration */}
              <div className="w-72 h-72 relative z-10 ">
                <img 
                  src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740" 
                  alt="Last Bite Illustration" 
                  className="w-full h-full object-contain "
                />
              </div>
              
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-lush-mint/20 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-citrus-gold/30 rounded-full -z-10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-dashed border-fresh-basil/30 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
        
        {/* Main content with illustration */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative">
              <img 
                src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740" 
                alt="Food waste reduction" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              
              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 transform rotate-3">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-zesty-lime" />
                  <span className="font-semibold text-primary-green">Eco-Friendly</span>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 transform -rotate-2">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-coral-red" />
                  <span className="font-semibold text-primary-green">Save Money</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our platform helps businesses <span className="text-primary-green font-semibold">recover revenue</span>, consumers <span className="text-primary-green font-semibold">save money</span>, and the planet by <span className="text-primary-green font-semibold">reducing waste</span> — all with one simple app.
            </p>
            
            {/* Benefits cards instead of stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              <div className="bg-soft-ivory p-6 rounded-xl shadow-sm border border-ash-gray/50 transform transition-transform hover:scale-105">
                <div className="bg-lush-mint/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Sprout className="h-6 w-6 text-deep-forest" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-deep-forest">Sustainable Future</h3>
                <p className="text-gray-600">Help create a more sustainable future by rescuing perfectly good food.</p>
              </div>
              
              <div className="bg-soft-ivory p-6 rounded-xl shadow-sm border border-ash-gray/50 transform transition-transform hover:scale-105">
                <div className="bg-coral-red/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-coral-red" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-deep-forest">Community Impact</h3>
                <p className="text-gray-600">Join a community of conscious consumers making a difference every day.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission & Vision - Completely Redesigned */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-rich-charcoal mb-2">Our Vision & Mission</h2>
            <p className="text-gray-600 max-w-xl mx-auto">What drives us every day to make a difference</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-lg border border-ash-gray/20 transform transition-all hover:shadow-xl">
              <div className="h-40 bg-gradient-to-r from-primary-green to-deep-forest relative overflow-hidden">
                {/* Abstract pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 C75,70 50,100 25,70 L0,100 Z" fill="white"/>
                  </svg>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <Target className="h-20 w-20 text-white opacity-80" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-green mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">A world where no food goes to waste and everyone enjoys affordable, sustainable meals.</p>
              </div>
            </div>
            
            <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-lg border border-ash-gray/20 transform transition-all hover:shadow-xl">
              <div className="h-40 bg-gradient-to-r from-coral-red to-citrus-gold relative overflow-hidden">
                {/* Abstract pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 C75,70 50,100 25,70 L0,100 Z" fill="white"/>
                  </svg>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <Leaf className="h-20 w-20 text-white opacity-80" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-coral-red mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">Create a smart, eco-friendly food marketplace that supports waste reduction, low-cost quality food, and community impact.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Goals Section - Completely Redesigned */}
        <div className="bg-soft-ivory rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative patterns */}
          <div className="absolute top-0 right-0 opacity-10">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <path d="M0,0 L200,0 L200,200 L0,200 Z" fill="none" stroke="#01615F" strokeWidth="2"/>
              <path d="M50,50 L150,50 L150,150 L50,150 Z" fill="none" stroke="#01615F" strokeWidth="2"/>
              <path d="M100,0 L100,200" fill="none" stroke="#01615F" strokeWidth="2"/>
              <path d="M0,100 L200,100" fill="none" stroke="#01615F" strokeWidth="2"/>
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-primary-green mb-2">Our Goals</h3>
                <p className="text-gray-600">What we aim to achieve in the near future</p>
              </div>
              
              <div className="flex items-center gap-3 bg-white py-2 px-4 rounded-full shadow-sm">
                <TrendingUp className="h-5 w-5 text-coral-red" />
                <span className="font-medium">2025 Targets</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShoppingBag className="h-8 w-8 text-white" />,
                  title: "Divert food from landfills",
                  color: "bg-[var(--primary-green)]"
                },
                {
                  icon: <Users className="h-8 w-8 text-white" />,
                  title: "Onboard 1,000+ businesses",
                  color: "bg-deep-forest"
                },
                {
                  icon: <Download className="h-8 w-8 text-white" />,
                  title: "Reach 100K app downloads",
                  color: "bg-fresh-basil"
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-white" />,
                  title: "Generate ₹2 crore revenue",
                  color: "bg-coral-red"
                },
                {
                  icon: <Sprout className="h-8 w-8 text-white" />,
                  title: "Cut carbon emissions by 10%",
                  color: "bg-zesty-lime"
                }
              ].map((goal, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm border border-ash-gray/20 transform transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className={`${goal.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 shadow-sm`}>
                    {goal.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-rich-charcoal mb-2">{goal.title}</h4>
                  <div className="w-12 h-1 bg-ash-gray rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
     {/* Call to action */}
<div className="mt-8 text-center">
  <h3 className="text-2xl md:text-3xl font-bold text-rich-charcoal mb-4">
    Start Saving Food Today
  </h3>
  <p className="max-w-xl mx-auto text-base md:text-lg text-gray-700 mb-6">
    With Last Bite, you get great food at low prices while helping the planet. 
    Download the app and be part of the solution.
  </p>
  <button
    onClick={() => {
      const nextSection = document.getElementById('next-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="bg-coral-red hover:bg-coral-red/90 text-white font-medium py-3 px-6 rounded-full inline-flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
</div>

      </div>
    </section>
  );
}