'use client';

import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  PhoneCall,
  MapPin,
  ArrowUp,
} from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 relative overflow-hidden mt-5">
      <div className="w-full">
        <svg
          className="w-full h-auto -mb-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
        >
          <path
            fill="#f3f4f6"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <img src='images/logo/logo/LB (full)/LB (full).svg' alt='logo' width={150} height={75}/>
            </div>
            <p className="text-gray-700 text-base max-w-md leading-relaxed">
              Join our mission to create a sustainable world by reducing food
              waste one bite at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
         <ul className="space-y-2 text-gray-700">
  {[
    { label: 'About Us', href: '/about' },
    { label: 'Partner with Us', href: '/partner' },
    { label: 'About Food Waste', href: '/food-waste' },
  ].map((item) => (
    <li key={item.label}>
      <Link
        href={item.href}
        className="hover:text-coral-red transition"
      >
        {item.label}
      </Link>
    </li>
  ))}

  {/* Contact Us with submenu */}
  <li className="group relative">
    <span className="cursor-pointer hover:text-coral-red transition">
      Contact Us
    </span>
    <ul className="absolute hidden group-hover:block bg-white border mt-1 rounded shadow-md space-y-1 p-2 z-10">
      <li>
        <a
          href="mailto:support@lastbiteindia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-3 py-1 hover:text-coral-red"
        >
          Email
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/918220324969"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-3 py-1 hover:text-coral-red"
        >
          WhatsApp
        </a>
      </li>
    </ul>
  </li>
</ul>

            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact
              </h3>
              <ul className="space-y-4 text-gray-700">
               <li className="flex items-start">
  <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-1" />
  <span>
    Bitex Novo Technology Private Limited<br />
    No. 13/1 (5A / 2), Cenotaph Road<br />
    1st Street, Teynampet, Chennai - 600 018
  </span>
</li>

                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-3" />
                  <a
                    href="mailto:hello@lastbite.com"
                    className="hover:text-coral-red transition"
                  >
                   support@lastbiteindia.com
                  </a>
                </li>
                <li className="flex items-center">
                  <PhoneCall className="h-5 w-5 text-gray-500 mr-3" />
                  <a
                    href="tel:+11234567890"
                    className="hover:text-coral-red transition"
                  >
                    +918220324969

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
          {/* Socials */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/profile.php?id=61576175234598"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-100 hover:bg-lush-mint hover:text-coral-red transition duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/lastbite_india?t=yGfJNJwwZsBq0-5zatukxg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-100 hover:bg-lush-mint hover:text-coral-red transition duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/lastbite_india?igsh=MWR1cGc1anpvY3BobQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-100 hover:bg-lush-mint hover:text-coral-red transition duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Legal */}
          <div className="flex space-x-4 text-sm text-gray-600 mb-4 md:mb-0">
            <Link
              href="/terms&privacy"
              className="hover:text-coral-red transition"
            >
              Terms & Privacy
            </Link>
          </div>

          {/* Back to Top */}
          <button
            className="bg-lush-mint text-white p-3 rounded-full hover:bg-citrus-gold fixed bottom-6 right-6 shadow-xl transition-all duration-300 z-10"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Last Bite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
