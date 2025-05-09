"use client";
import React,{ useState } from 'react';
import { Leaf, Droplet, TrendingUp, CircleDollarSign } from 'lucide-react';

export default function FoodWasteImpact() {
  const [activeTab, setActiveTab] = useState<TabKey>('environment');

  type TabKey = 'environment' | 'global' | 'solution' | 'economic';
  
  const tabs: Record<TabKey, {
    title: string;
    icon: React.ReactNode;
    content: React.ReactNode;
  }> = {
    environment: {
      title: "Environmental Impact",
      icon: <Leaf className="w-8 h-8 text-deep-forest" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            When <span className="font-bold">1 ton of food waste</span> ends up in a landfill, it produces:
          </p>
          <div className="bg-lush-mint rounded-lg p-4 shadow-sm">
            <p className="font-bold text-deep-forest">0.25 tons of methane</p>
            <p className="text-primary-green">A greenhouse gas 25x more potent than CO₂</p>
          </div>
          <div className="bg-lush-mint rounded-lg p-4 shadow-sm">
            <p className="font-bold text-deep-forest">7–9 tons of CO₂e emissions</p>
            <p className="text-primary-green">Released directly into the atmosphere</p>
          </div>
        </div>
      )
    },
    global: {
      title: "Global Impact",
      icon: <Droplet className="w-8 h-8 text-fresh-basil" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg mb-4">Food waste causes <span className="font-bold">8–10% of global greenhouse gas emissions</span> and contributes to:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-ash-gray bg-opacity-30 rounded-lg p-4">
              <h4 className="font-bold text-primary-green mb-2">Methane Emissions</h4>
              <p>From decomposing food in landfills</p>
            </div>
            <div className="bg-ash-gray bg-opacity-30 rounded-lg p-4">
              <h4 className="font-bold text-primary-green mb-2">Carbon Footprint</h4>
              <p>From producing and transporting uneaten food</p>
            </div>
          </div>
        </div>
      )
    },
    solution: {
      title: "The Solution",
      icon: <TrendingUp className="w-8 h-8 text-coral-red" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg mb-4">By <span className="font-bold">reducing food waste</span>, we can make a difference:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-soft-ivory rounded-lg p-4 border-l-4 border-zesty-lime">
              <p className="font-bold text-primary-green">Cut harmful emissions</p>
            </div>
            <div className="bg-soft-ivory rounded-lg p-4 border-l-4 border-zesty-lime">
              <p className="font-bold text-primary-green">Conserve natural resources</p>
            </div>
            <div className="bg-soft-ivory rounded-lg p-4 border-l-4 border-zesty-lime">
              <p className="font-bold text-primary-green">Fight climate change</p>
            </div>
            <div className="bg-soft-ivory rounded-lg p-4 border-l-4 border-zesty-lime">
              <p className="font-bold text-primary-green">Support sustainable food systems</p>
            </div>
          </div>
        </div>
      )
    },
    economic: {
      title: "Economic Benefits",
      icon: <CircleDollarSign className="w-8 h-8 text-citrus-gold" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg mb-4">Reducing food waste creates economic value:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-citrus-gold bg-opacity-20 rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-primary-green mb-2">For Businesses</h4>
              <p>Recover revenue from unsold inventory</p>
            </div>
            <div className="bg-citrus-gold bg-opacity-20 rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-primary-green mb-2">For Consumers</h4>
              <p>Save money through discounted surplus food</p>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="bg-white font-sans max-w-7xl mx-auto p-4 md:p-6">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-green to-deep-forest rounded-2xl shadow-xl">
        {/* Circular decoration */}
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-lush-mint rounded-full opacity-20"></div>
        <div className="absolute -left-16 -top-16 w-36 h-36 bg-fresh-basil rounded-full opacity-10"></div>
        
        <div className="relative p-6 md:p-10 z-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Reducing Food Waste Matters
              </h2>
              <p className="text-lush-mint text-lg mb-8">
                {"Food waste isn't just about lost food—it's a major"} <span className="font-bold text-white">environmental threat</span> with significant impacts.
              </p>
              
              {/* Tab navigation */}
              <div className="flex flex-wrap gap-2 mb-8">
                {Object.entries(tabs).map(([key, tab]) => (
                  <button 
                    key={key}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      activeTab === key 
                      ? 'bg-white text-primary-green' 
                      : 'bg-deep-forest text-white hover:bg-deep-forest hover:bg-opacity-70'
                    }`}
                    onClick={() => setActiveTab(key as TabKey)}

                  >
                    {tab.icon}
                    <span className="font-medium">{tab.title}</span>
                  </button>
                ))}
              </div>
              
              {/* Tab content */}
              <div className="bg-white rounded-xl p-6">
                {tabs[activeTab].content}
              </div>
            </div>
            
            {/* Right image column */}
            <div className="hidden md:block md:w-2/5">
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-24 h-24 bg-citrus-gold rounded-full opacity-30"></div>
                <img 
                  src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740" 
                  alt="Food waste reduction" 
                  className="rounded-xl shadow-lg object-cover w-full h-[520px]"
                />
                <div className="absolute -right-4 bottom-8 bg-coral-red text-white font-bold px-4 py-2 rounded-lg shadow-lg transform rotate-6">
                  Join the movement!
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-8 bg-lush-mint bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">Ready to make a difference?</h3>
                <p className="text-lush-mint">Download the Last Bite app today</p>
              </div>
              <button className="bg-coral-red hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Statistics grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="bg-soft-ivory p-6 rounded-xl shadow-sm border-l-4 border-fresh-basil">
          <p className="text-3xl font-bold text-primary-green">1/3</p>
          <p className="text-foreground">Of all food produced globally is wasted</p>
        </div>
        <div className="bg-soft-ivory p-6 rounded-xl shadow-sm border-l-4 border-zesty-lime">
          <p className="text-3xl font-bold text-primary-green">931M</p>
          <p className="text-foreground">Tonnes of food wasted annually</p>
        </div>
        <div className="bg-soft-ivory p-6 rounded-xl shadow-sm border-l-4 border-coral-red">
          <p className="text-3xl font-bold text-primary-green">25%</p>
          <p className="text-foreground">Reduction goal by 2030</p>
        </div>
        <div className="bg-soft-ivory p-6 rounded-xl shadow-sm border-l-4 border-citrus-gold">
          <p className="text-3xl font-bold text-primary-green">₹1.5L Cr</p>
          <p className="text-foreground">Annual food waste value in India</p>
        </div>
      </div>
    </div>
  );
}