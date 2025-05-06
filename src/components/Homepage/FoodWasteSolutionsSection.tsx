"use client";
import { useState } from 'react';
import { ArrowRight, ShoppingBag, Utensils, Users } from 'lucide-react';
import { ReactElement } from 'react';

// Define types for our solutions data
type SolutionType = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  color: string;
};

type SolutionsMapType = {
  consumers: SolutionType;
  businesses: SolutionType;
  communities: SolutionType;
};

type TabType = keyof SolutionsMapType;

type IconMapType = {
  [key in TabType]: ReactElement;
};
type Props = {
  learnMoreButton?: ReactElement;
};

export default function FoodWasteSolutionsSection({ learnMoreButton }: Props) {
  const [activeTab, setActiveTab] = useState<TabType>('consumers');
  
  const solutions: SolutionsMapType = {
    consumers: {
      title: "For Consumers",
      subtitle: "Save Money, Reduce Waste",
      description: "Access discounted food that would otherwise go to waste. Get notifications when your favorite local spots have surplus items available at reduced prices.",
      features: [
        "Save up to 70% on fresh food",
        "Discover local businesses with surplus items",
        "Track your environmental impact",
        "Simple pickup process"
      ],
      image: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740",
      color: "bg-primary-green"
    },
    businesses: {
      title: "For Businesses",
      subtitle: "Turn Surplus into Opportunity",
      description: "Convert potential food waste into revenue while building customer loyalty and showcasing your commitment to sustainability.",
      features: [
        "Recoup costs on surplus inventory",
        "Attract eco-conscious customers",
        "Reduce disposal costs",
        "Easy-to-use management dashboard"
      ],
      image: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740",
      color: "bg-deep-forest"
    },
    communities: {
      title: "For Communities",
      subtitle: "Strengthen Local Food Systems",
      description: "We partner with food banks and community organizations to ensure surplus food reaches those who need it most when direct consumer sales aren't possible.",
      features: [
        "Donation facilitation services",
        "Local impact tracking",
        "Community engagement tools",
        "Food insecurity reduction"
      ],
      image: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740",
      color: "bg-coral-red"
    }
  };

  const tabKeys: TabType[] = ['consumers', 'businesses', 'communities'];
  const activeContent = solutions[activeTab];
  
  const icons: IconMapType = {
    consumers: <ShoppingBag className="w-6 h-6" />,
    businesses: <Utensils className="w-6 h-6" />,
    communities: <Users className="w-6 h-6" />
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-soft-ivory to-lush-mint/10" id='food-waste'>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-green mb-3">Solutions That Make a Difference</h2>
          <div className="w-24 h-1 bg-coral-red mx-auto mb-6"></div>
          <p className="text-rich-charcoal text-lg max-w-2xl mx-auto">
            Our platform connects surplus food with people who value it, creating a sustainable cycle that benefits everyone.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {tabKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === key
                ? `!bg-coral-red text-white`
              
                  : 'bg-ash-gray/30 text-rich-charcoal hover:bg-ash-gray'
              }`}
            >
              <span className="mr-2">{icons[key]}</span>
              {solutions[key].title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image with decorative elements */}
          <div className="order-2 md:order-1 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
              <img
                src={activeContent.image}
                alt={activeContent.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute bottom-0 left-0 right-0 ${activeContent.color} bg-opacity-90 p-4 text-white`}>
                <p className="font-bold">{activeContent.subtitle}</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-zesty-lime opacity-30 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-citrus-gold opacity-30 -z-10"></div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-rich-charcoal mb-4">
              {activeContent.title}
            </h3>
            <p className="text-primary-green text-xl font-medium mb-3">
              {activeContent.subtitle}
            </p>
            <p className="text-rich-charcoal mb-6">
              {activeContent.description}
            </p>
            
            <div className="space-y-3 mb-8">
              {activeContent.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start">
                  <div className={`p-1 rounded-full ${activeContent.color} text-white mt-1 mr-3`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            
            {learnMoreButton && (
  <div className="self-start mt-auto">
    {learnMoreButton}
  </div>
)}


          </div>
        </div>
        
        {/* Stats Highlight */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-center">
          {[
            { number: "30%", text: "of food is wasted globally", color: "text-coral-red" },
            { number: "3.3B", text: "tons of CO₂ from food waste", color: "text-primary-green" },
            { number: "1.3B", text: "tons of food wasted yearly", color: "text-deep-forest" },
            { number: "40%", text: "reduction with Last Bite", color: "text-fresh-basil" }
          ].map((stat, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <p className={`text-3xl md:text-4xl font-bold ${stat.color}`}>{stat.number}</p>
              <p className="text-rich-charcoal text-sm mt-2">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}