'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center pt-4 px-4" style={{ isolation: 'isolate' }}>
      <nav className="w-full max-w-3xl">
        {/* Glassmorphism Navigation Bar with Figma Gradient */}
        <div 
          className="backdrop-blur-lg rounded-2xl shadow-md border border-white/30 px-4 py-2.5 flex items-center justify-between"
          style={{
            background: 'linear-gradient(180deg, rgba(135, 135, 135, 0.4) 0%, rgba(255, 255, 255, 0) 100%)'
          }}
        >
          {/* Logo and Navigation Menu */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Logo Image */}
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
              <Image 
                src="/img/logo_3.webp" 
                alt="Logo" 
                width={500} 
                height={500} 
                className="w-24 h-24 object-contain"
              />
            </div>
            
            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#" className="text-black hover:text-[#4A90E2] transition-colors text-sm font-medium">Services</a>
              <a href="#" className="text-black hover:text-[#4A90E2] transition-colors text-sm font-medium">Pricing</a>
              <a href="#" className="text-black hover:text-[#4A90E2] transition-colors text-sm font-medium">Resources</a>
              <a href="#" className="text-black hover:text-[#4A90E2] transition-colors text-sm font-medium">For Agencies</a>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Log in Button - White background, dark text, light purple border, pill shape, subtle shadow */}
              <Link href="/login" className="hover:opacity-80 transition-opacity">
                <Image 
                  src="/img/login_button.svg" 
                  alt="Login" 
                  width={14} 
                  height={14} 
                  className="w-full h-8 object-contain"
                />
              </Link>
              
              {/* Start Free Button - Blue gradient (lighter top-left to deeper bottom-right), white text, star icon, prominent shadow */}
              <button className="mt-1">
                <Image 
                  src="/img/blue_button_2.svg" 
                  alt="Start Free" 
                  width={14} 
                  height={14} 
                  className="w-full h-9 object-contain"
                />
              </button>
            </div>

            {/* Mobile Hamburger/Close Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Toggle menu"}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                  <span className="block h-0.5 w-6 bg-black" />
                  <span className="block h-0.5 w-6 bg-black" />
                  <span className="block h-0.5 w-6 bg-black" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop - starts below header */}
            <div
              className="fixed top-20 left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />
            
            {/* Mobile Menu */}
            <div
              className={`fixed top-20 left-4 right-4 md:hidden z-40 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              <div
                className="backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-6"
                style={{
                  background: 'linear-gradient(180deg, rgba(135, 135, 135, 0.4) 0%, rgba(255, 255, 255, 0) 100%)'
                }}
              >
                {/* Mobile Navigation Links */}
                <div className="flex flex-col items-center gap-4 mb-6">
                  <a
                    href="#"
                    onClick={closeMenu}
                    className="text-black hover:text-[#4A90E2] transition-colors text-base font-medium py-2 border-b border-white/20 w-full text-center"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    onClick={closeMenu}
                    className="text-black hover:text-[#4A90E2] transition-colors text-base font-medium py-2 border-b border-white/20 w-full text-center"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    onClick={closeMenu}
                    className="text-black hover:text-[#4A90E2] transition-colors text-base font-medium py-2 border-b border-white/20 w-full text-center"
                  >
                    Resources
                  </a>
                  <a
                    href="#"
                    onClick={closeMenu}
                    className="text-black hover:text-[#4A90E2] transition-colors text-base font-medium py-2 border-b border-white/20 w-full text-center"
                  >
                    For Agencies
                  </a>
                </div>

                {/* Mobile Buttons */}
                <div className="flex flex-col gap-3">
                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="hover:opacity-80 transition-opacity flex justify-center"
                  >
                    <Image
                      src="/img/login_button.svg"
                      alt="Login"
                      width={14}
                      height={14}
                      className="w-full h-10 object-contain"
                    />
                  </Link>
                  
                  <button
                    onClick={closeMenu}
                    className="flex justify-center"
                  >
                    <Image
                      src="/img/blue_button_2.svg"
                      alt="Start Free"
                      width={14}
                      height={14}
                      className="w-full h-11 object-contain"
                    />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

