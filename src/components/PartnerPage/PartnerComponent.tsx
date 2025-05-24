"use client";
import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Store, Coffee, ShoppingBag} from 'lucide-react';

// TypeScript interfaces
interface PartnerTypeCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

interface BenefitItemProps {
  text: string;
}

// interface TestimonialProps {
//   quote: string;
//   author: string;
//   business: string;
//   image: string;
// }

// Feature Card for different partner types
const PartnerTypeCard: React.FC<PartnerTypeCardProps> = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-primary-green mb-2">{title}</h3>
        <p className="text-foreground text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

// Benefit Item component
const BenefitItem: React.FC<BenefitItemProps> = ({ text }) => (
  <div className="flex items-start space-x-2 mb-3">
    <CheckCircle className="text-zesty-lime flex-shrink-0 mt-1" size={18} />
    <p className="text-foreground">{text}</p>
  </div>
);

// Testimonial component
// const Testimonial: React.FC<TestimonialProps> = ({ quote, author, business, image }) => (
//   <div className="bg-white p-6 rounded-lg shadow-md">
//     <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
//       <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
//         <img src={image} alt={author} className="w-full h-full object-cover" />
//       </div>
//       <div>
//         <p className="italic text-foreground mb-4">{quote}</p>
//         <div>
//           <p className="font-bold text-primary-green">{author}</p>
//           <p className="text-sm text-foreground/70">{business}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// Type definition for active tab
// type TabType = 'overview' | 'restaurants' | 'bakeries' | 'supermarkets' | 'customers';

// Main component
const PartnerComponent: React.FC = () => {
  // const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [, setIsOpen] = useState(false);
  const handleJoinClick = () => {
  // Close mobile menu if open
  setIsOpen(false);

  // Try to find the partner form section
  const partnerFormSection = document.querySelector(
    'section[class*="partner"], section[class*="contact"], form[class*="partner"]'
  );

  // Scroll to partner form if found
  if (partnerFormSection) {
    partnerFormSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  } else {
    // Optionally handle if not found
    console.warn("Partner form section not found.");
  }
};

  
  return (
    <div className="relative bg-gradient-to-b from-white to-lush-mint/30 min-h-screen pt-16 pb-20 mt-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold text-primary-green mb-4 leading-tight">
                Partner With Last Bite
              </h1>
              <h2 className="text-xl md:text-2xl text-coral-red mb-6 font-medium italic">
                Turn surplus food into impact. Reduce waste. Boost your business.
              </h2>
              <p className="text-foreground mb-8 text-lg">
                Every year, tons of perfectly good food go to waste — costing businesses money and harming the planet. 
                At <span className="font-bold text-primary-green">Last Bite</span>, we help you recover revenue from surplus food by connecting you with local customers who care about sustainability.
              </p>
              <div className="bg-citrus-gold/20 p-4 rounded-lg mb-8">
                <p className="font-bold text-deep-forest text-center text-xl">
                  {"It's a WIN-WIN-WIN SOLUTION!!"}
                </p>
              </div>
              
              <button className="bg-coral-red hover:bg-coral-red/90 text-white py-3 px-8 rounded-full font-medium text-lg transition-colors flex items-center gap-2 shadow-lg" onClick={handleJoinClick}>
                Join Now <ArrowRight size={18} />
              </button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-zesty-lime/20 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-coral-red/20 rounded-full -z-10"></div>
                <img 
                  src="images/partner/partner.png" 
                  alt="Happy partner with Last Bite" 
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Partner Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary-green mb-4">Why Partner With Us?</h2>
          <p className="text-foreground max-w-2xl mx-auto">
            {"Whether you're a "}<span className="font-semibold">restaurant</span>, <span className="font-semibold">café</span>, <span className="font-semibold">bakery</span>, or <span className="font-semibold">supermarket</span>, partnering with us is a smart step toward <span className="font-semibold text-deep-forest">cutting Unconsumed Food</span>, <span className="font-semibold text-deep-forest">growing your impact</span>, and <span className="font-semibold text-deep-forest">increasing your visibility</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PartnerTypeCard 
            icon={Coffee} 
            title="For Restaurants & Cafés" 
            description="Sell unsold meals (breakfast, lunch, or dinner) before they lose freshness. Reduce daily Unconsumed Food, recover costs, and reach new, conscious customers."
            color="bg-fresh-basil"
          />
          <PartnerTypeCard 
            icon={Store} 
            title="For Bakeries & Pastry Shops" 
            description="Move day-old baked goods and pastries that are still delicious. Turn potential waste into revenue and delight customers with your creations."
            color="bg-citrus-gold"
          />
          <PartnerTypeCard 
            icon={ShoppingBag} 
            title="For Supermarkets & Grocers" 
            description="Move near-expiry items while they're still safe and delicious. Clear inventory efficiently and contribute to a zero-waste movement."
            color="bg-coral-red"
          />
        </div>
      </div>
      
      {/* Environmental Impact Section */}
      <div className="bg-primary-green/10 py-6z">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary-green mb-6">Environmental Impact</h2>
              <div className="space-y-6">
                <p className="text-lg">
                  <span className="font-bold">Every bite counts.</span> Reduce Unconsumed Food, conserve resources, and help protect the planet. With Last Bite, sustainability is served fresh every day.
                </p>
                <div className="space-y-4">
                  <BenefitItem text="Prevent edible food from reaching landfills where it creates harmful methane" />
                  <BenefitItem text="Conserve the water, energy, and resources used to produce food" />
                  <BenefitItem text="Reduce carbon footprint through efficient local food distribution" />
                  <BenefitItem text="Join a community of environmentally responsible businesses" />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-zesty-lime/30 rounded-full"></div>
                <img 
                  src="images/partner/3.svg" 
                  alt="Environmental Impact" 
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
      {/* CTA Section */}
      <div className="container mx-auto px-4 my-6 text-center">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-lush-mint/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-citrus-gold/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <h2 className="text-3xl font-bold text-primary-green mb-4 relative z-10">Join the movement</h2>
          <p className="text-xl text-foreground mb-8 relative z-10">Partner with Last Bite today and be part of the solution.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
      <a
  href="https://wa.me/918220324969"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-coral-red hover:bg-coral-red/90 text-white py-3 px-8 rounded-full font-medium transition-colors flex items-center justify-center gap-2 shadow-md">
    Apply as Partner <ArrowRight size={18} /> 
  </button>
</a>

    <a
  href="https://calendly.com/lastbiteindia"
  target="_blank"
  rel="noopener noreferrer"
>
            <button className="bg-white border-2 border-primary-green text-primary-green py-3 px-8 rounded-full font-medium hover:bg-primary-green/5 transition-colors flex items-center justify-center gap-2">
              Schedule a Demo
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerComponent;