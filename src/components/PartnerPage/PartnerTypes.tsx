"use client";
import { useState } from 'react';
import Image from 'next/image';

interface PartnerType {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export default function PartnerTypes() {
  const [activePartner, setActivePartner] = useState<number | null>(null);
   const [, setIsOpen] = useState(false);
    const handleJoinClick = () => {
    // Close mobile menu if open
    setIsOpen(false);
    }
  const partnerTypes: PartnerType[] = [
    {
      id: 1,
      title: "Restaurants & QSRs",
      image: "images/partnertype/1.svg",
      alt: "Restaurant food display"
    },
    {
      id: 2,
      title: "Cafés & Coffee Shops",
         image: "images/partnertype/3.svg",
      alt: "Café with pastries"
    },
    {
      id: 3,
      title: "Bakeries & Delis",
           image: "images/partnertype/6.svg",
      alt: "Fresh baked goods"
    },
    {
      id: 4,
      title: "Grocery Stores & Supermarkets",
         image: "images/partnertype/8.svg",
      alt: "Grocery store produce section"
    },
    {
      id: 5,
      title: "Food Producers & Wholesalers",
        image: "images/partnertype/2.svg",
      alt: "Food production facility"
    }
  ];

  return (
    <section className="py-16 bg-soft-ivory">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-rich-charcoal">
            Who We Partner With
          </h2>
          <div className="h-1 w-24 bg-coral-red mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
            We work with food businesses of all sizes:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerTypes.map((partner) => (
              <div 
                key={partner.id}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setActivePartner(partner.id)}
                onMouseLeave={() => setActivePartner(null)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.alt}
                    layout="fill"
                    objectFit="cover"
                    className={`transition-transform duration-500 ${
                      activePartner === partner.id ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-green/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className={`p-5 border-t-4 transition-colors duration-300 ${
                  activePartner === partner.id ? 'border-coral-red' : 'border-lush-mint'
                }`}>
                  <h3 className="text-xl font-semibold text-primary-green">
                    {partner.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-6 max-w-3xl mx-auto">
            Become a Last Bite partner and start turning your surplus into business opportunity.
            </p>
            <button className="bg-coral-red hover:bg-coral-red/90 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg" onClick={handleJoinClick}>
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}