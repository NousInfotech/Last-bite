// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check for current path
    const path = window.location.pathname;
    setActiveItem(path);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gradient-to-r from-primary-green/95 to-deep-forest/95 backdrop-blur-sm shadow-lg py-2" 
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="h-12 w-12 bg-gradient-to-br from-lush-mint to-fresh-basil rounded-full flex items-center justify-center mr-3 shadow-md transform group-hover:scale-110 transition-all duration-300">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl ${scrolled ? 'text-white' : 'text-primary-green'} tracking-tight`}>Last Bite</span>
                <span className={`text-xs ${scrolled ? 'text-lush-mint' : 'text-fresh-basil'} font-medium`}>Reduce Food Waste</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { name: "About Last Bite", href: "/about" },
              { name: "FAQ", href: "/faq" },
              { name: "Partner with us", href: "/partner" },
              { name: "About food-waste", href: "/food-waste" }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 mx-1
                  ${activeItem === item.href 
                    ? `${scrolled ? 'text-white bg-deep-forest/40' : 'text-primary-green bg-lush-mint/30'}`
                    : `${scrolled ? 'text-soft-ivory hover:bg-deep-forest/40' : 'text-rich-charcoal hover:text-coral-red hover:bg-lush-mint/20'}`
                  }
                  ${activeItem === item.href ? 'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-citrus-gold' : ''}
                `}
              >
                {item.name}
              </Link>
            ))}
            <button className="ml-4 bg-gradient-to-r from-coral-red to-citrus-gold text-white font-medium py-2.5 px-6 rounded-full shadow-md transform hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300 flex items-center">
              <span>Join Now</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-full ${
                scrolled ? 'bg-deep-forest/30 text-white' : 'bg-lush-mint/20 text-primary-green'
              } hover:bg-lush-mint/30 transition-colors duration-200 focus:outline-none`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`px-4 pt-3 pb-4 space-y-2 ${scrolled ? 'bg-deep-forest text-white' : 'bg-white'} shadow-xl rounded-b-2xl mx-4`}>
          {[
            { name: "About Last Bite", href: "/about" },
            { name: "FAQ", href: "/faq" },
            { name: "Partner with us", href: "/partner" },
            { name: "About food-waste", href: "/food-waste" }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                activeItem === item.href 
                  ? (scrolled ? 'bg-primary-green/40 text-white' : 'bg-lush-mint/30 text-primary-green') 
                  : (scrolled ? 'text-lush-mint hover:bg-primary-green/40' : 'text-rich-charcoal hover:text-coral-red hover:bg-lush-mint/20')
              } flex items-center justify-between`}
              onClick={() => setIsOpen(false)}
            >
              <span>{item.name}</span>
              {activeItem === item.href && <span className="h-2 w-2 rounded-full bg-citrus-gold"></span>}
            </Link>
          ))}
          <div className="px-4 py-3">
            <button className="w-full bg-gradient-to-r from-coral-red to-citrus-gold text-white font-medium py-3 px-6 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center">
              <span>Download</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;