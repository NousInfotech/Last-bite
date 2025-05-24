"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleJoinClick = () => {
    setIsOpen(false);

    const appDownloadSection = document.getElementById("download-app");
    const partnerFormSection = document.querySelector(
      'section[class*="partner"], section[class*="contact"], form[class*="partner"]'
    );
    const fallbackSection = document.querySelector(
      '[id*="partner"], [id*="download"], [class*="partner"], [class*="download"]'
    );

    if (appDownloadSection) {
      appDownloadSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (partnerFormSection) {
      partnerFormSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (fallbackSection) {
      fallbackSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/#next-section";
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <img src="/images/logo/logo/Lb (full)/LB (full).svg" alt="logo" width={150} height={75} />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {[
              { name: "About Last Bite", href: "/about" },
              { name: "FAQ", href: "/faq" },
              { name: "Partner with us", href: "/partner" },
              { name: "About food-waste", href: "/food-waste" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 mx-1 ${
                  pathname === item.href
                    ? "text-primary-green bg-lush-mint/30 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-citrus-gold"
                    : "text-rich-charcoal hover:text-coral-red hover:bg-lush-mint/20"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleJoinClick}
              className="ml-4 bg-gradient-to-r from-coral-red to-citrus-gold text-white font-medium py-2.5 px-6 rounded-full shadow-md transform hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300 flex items-center cursor-pointer"
            >
              <span>Join Now</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full bg-lush-mint/20 text-primary-green hover:bg-lush-mint/30 transition-colors duration-200 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-3 pb-4 space-y-2 bg-white shadow-xl rounded-b-2xl mx-4">
          {[
            { name: "About Last Bite", href: "/about" },
            { name: "FAQ", href: "/faq" },
            { name: "Partner with us", href: "/partner" },
            { name: "About food-waste", href: "/food-waste" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                pathname === item.href
                  ? "bg-lush-mint/30 text-primary-green"
                  : "text-rich-charcoal hover:text-coral-red hover:bg-lush-mint/20"
              } flex items-center justify-between`}
              onClick={() => setIsOpen(false)}
            >
              <span>{item.name}</span>
              {pathname === item.href && <span className="h-2 w-2 rounded-full bg-citrus-gold"></span>}
            </Link>
          ))}
          <div className="px-4 py-3">
            <button
              onClick={handleJoinClick}
              className="w-full bg-gradient-to-r from-coral-red to-citrus-gold text-white font-medium py-3 px-6 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center cursor-pointer"
            >
              <span>Join Now</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
