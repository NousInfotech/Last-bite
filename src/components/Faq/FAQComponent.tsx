"use client";
import React, { useState, useRef } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Coffee,
  ShoppingBag,
  CreditCard,
  HelpCircle,
  Utensils,
  Leaf,
  MessageCircle
} from 'lucide-react';

// ----------------------
// Type Declarations
// ----------------------

type FAQItemType = {
  question: string;
  answer: string;
};

type FAQCategoryType = {
  category: string;
  items: FAQItemType[];
};

type CategoryIconProps = {
  category: string;
};

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

type FAQCategoryProps = {
  category: string;
  items: FAQItemType[];
  id: string;
};

// ----------------------
// Category Icon Component
// ----------------------

const CategoryIcon = ({ category }: CategoryIconProps) => {
  switch (category) {
    case 'About Last Bite':
      return <Coffee className="text-fresh-basil" size={24} />;
    case 'Ordering and Delivery':
      return <ShoppingBag className="text-coral-red" size={24} />;
    case 'Payment and Refunds':
      return <CreditCard className="text-citrus-gold" size={24} />;
    case 'Food and Safety':
      return <Utensils className="text-zesty-lime" size={24} />;
    case 'Support and Contact':
      return <MessageCircle className="text-lush-mint" size={24} />;
    default:
      return <HelpCircle className="text-fresh-basil" size={24} />;
  }
};

// ----------------------
// FAQ Accordion Item
// ----------------------

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div
      className="border-b border-ash-gray last:border-0 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center py-4 px-2 hover:bg-soft-ivory transition-colors duration-200">
        <h3 className="font-medium text-base md:text-lg text-primary-green">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-coral-red flex-shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-primary-green flex-shrink-0" size={20} />
        )}
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 pb-4 px-2' : 'max-h-0'}`}
      >
        <p className="text-foreground text-sm md:text-base opacity-90">{answer}</p>
      </div>
    </div>
  );
};

// ----------------------
// FAQ Category Section
// ----------------------

const FAQCategory = ({ category, items, id }: FAQCategoryProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-8 last:mb-0" id={id}>
      <div className="flex items-center gap-2 mb-4">
        <CategoryIcon category={category} />
        <h2 className="text-xl md:text-2xl font-bold text-deep-forest">{category}</h2>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default function FAQComponent() {
    // Organizing FAQ items by category
    const faqData = [
      {
        category: 'About Last Bite',
        items: [
          {
            question: 'What is Last Bite?',
            answer: 'Last Bite is a platform that connects customers with restaurants, bakeries, supermarkets, and grocery stores offering surplus food at discounted prices.'
          },
          {
            question: 'Why should I use Last Bite?',
            answer: 'You get delicious food at lower prices while reducing food waste and supporting sustainability.'
          },
          {
            question: 'How does Last Bite work?',
            answer: 'Download the app, browse surplus food deals near you, place an order, and get it delivered.'
          }
        ]
      },
      {
        category: 'Ordering and Delivery',
        items: [
          {
            question: 'How can I place an order?',
            answer: 'Simply select your preferred item, add it to the cart, choose a pickup or delivery option, and complete the payment.'
          },
          {
            question: 'Is delivery available in my area?',
            answer: 'Delivery availability depends on your location and our partner stores. Check the app for real-time updates.'
          }
        ]
      },
      {
        category: 'Payment and Refunds',
        items: [
          {
            question: 'What payment methods are accepted?',
            answer: 'We accept major debit cards, credit cards, UPI, and mobile wallets.'
          },
          {
            question: 'Can I cancel or modify my order?',
            answer: 'Orders cannot be modified once placed, but you can cancel within a specific time window. Refer to our cancellation policy for details.'
          },
          {
            question: 'What if I receive a damaged or incorrect item?',
            answer: 'Contact our support team once your food is arrived for assistance and resolution.'
          }
        ]
      },
      {
        category: 'Food and Safety',
        items: [
          {
            question: 'Is the food fresh and safe?',
            answer: 'Absolutely! All surplus food listed on Last Bite is fresh, safe, and meets quality standards.'
          },
          {
            question: 'How is food waste reduced?',
            answer: 'We partner with businesses to ensure surplus food is sold before it spoils, reducing waste and supporting sustainability.'
          },
          {
            question: 'Does Last Bite offer vegetarian or vegan options?',
            answer: 'Yes, you can filter options based on dietary preferences in the app.'
          }
        ]
      },
      {
        category: 'Support and Contact',
        items: [
          {
            question: 'How can I contact Last Bite support?',
            answer: 'You can reach us through the app\'s Help Center or email us at lastbiteindia@gmail.com.'
          },
          {
            question: 'Can I partner with Last Bite as a seller?',
            answer: 'Yes! Visit our \'Partner with Us\' page for details on how to join our network.'
          },
          {
            question: 'How can I leave feedback?',
            answer: 'We value your feedback! Use the feedback option in the app to share your thoughts.'
          }
        ]
      }
    ];
  
    // Function to scroll to a specific section
    const scrollToSection = (categoryId: string) => {
      const element = document.getElementById(categoryId);
      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    // Function to generate a valid ID from category name
    const getCategoryId = (category: string): string => {
      return `category-${category.toLowerCase().replace(/\s+/g, '-')}`;
    };
  
    return (
      <div className="bg-gradient-to-b from-white to-lush-mint/30 min-h-screen pt-36 pb-20">
        {/* Decorative Wave */}
        <div className="absolute left-0 right-0 -top-1 h-16 overflow-hidden z-0">
          <div className="w-full h-full bg-white"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-zesty-lime/20 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-coral-red/20 rounded-full -z-10"></div>
              <img 
                src="/api/placeholder/120/120" 
                alt="Last Bite Logo" 
                className="w-20 h-20 mx-auto"
              />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-green mb-3">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl text-deep-forest max-w-2xl mx-auto">
              Find answers to common questions about Last Bite and how we're working to reduce food waste one bite at a time.
            </p>
          </div>
  
          {/* Search & Categories Overview */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {faqData.map((category, index) => {
                const categoryId = getCategoryId(category.category);
                return (
                  <div 
                    key={index} 
                    className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                    onClick={() => scrollToSection(categoryId)}
                  >
                    <CategoryIcon category={category.category} />
                    <p className="text-xs md:text-sm font-medium text-center mt-2 text-deep-forest">
                      {category.category}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Visual Elements */}
          <div className="relative max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-citrus-gold/20 flex items-center justify-center mb-3">
                  <img src="/api/placeholder/40/40" alt="Save Money" className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-primary-green mb-1">Save Money</h3>
                <p className="text-sm text-foreground/80">Get quality food at discounted prices</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-zesty-lime/20 flex items-center justify-center mb-3">
                  <img src="/api/placeholder/40/40" alt="Save Planet" className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-primary-green mb-1">Save the Planet</h3>
                <p className="text-sm text-foreground/80">Help reduce food waste and emissions</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-coral-red/20 flex items-center justify-center mb-3">
                  <img src="/api/placeholder/40/40" alt="Enjoy Food" className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-primary-green mb-1">Enjoy Food</h3>
                <p className="text-sm text-foreground/80">Discover delicious meals from local places</p>
              </div>
            </div>
          </div>
  
          {/* FAQ Accordions by Category */}
          <div className="max-w-6xl mx-auto relative">
            {/* Decorative Elements */}
            {/* <div className="hidden md:block absolute -left-16 top-32">
              <img src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740" alt="Food illustration" className="w-20 h-32 object-contain" />
            </div>
            <div className="hidden md:block absolute -right-16 top-64">
              <img src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740" alt="Earth illustration" className="w-20 h-20 object-contain" />
            </div> */}
            
            {/* FAQ Categories */}
            {faqData.map((category, index) => (
              <FAQCategory 
                key={index} 
                category={category.category} 
                items={category.items} 
                id={getCategoryId(category.category)}
              />
            ))}
          </div>
          
          {/* CTA Section */}
          <div className=" text-center">
            <div className="inline-block bg-primary-green text-white py-3 px-6 rounded-full font-medium hover:bg-deep-forest transition-colors duration-200 cursor-pointer">
              Still have questions? Contact Us
            </div>
            <p className="mt-4 text-deep-forest/80 text-sm">
              We're here to help you reduce food waste and save money!
            </p>
          </div>
        </div>
      </div>
    );
  }