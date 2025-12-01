import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-4 px-4">
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
                src="/img/logo.svg" 
                alt="Logo" 
                width={36} 
                height={36} 
                className="w-24 h-24 object-contain"
              />
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#" className="text-black hover:text-[#4A90E2] transition-colors text-sm font-medium">Services</a>
              <a href="#" className="text-black hover:text-[#4A90E2] transition-colors text-sm font-medium">Pricing</a>
              <a href="#" className="text-black hover:text-[#4A90E2] transition-colors text-sm font-medium">Resources</a>
              <a href="#" className="text-black hover:text-[#4A90E2] transition-colors text-sm font-medium">For Agencies</a>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Log in Button - White background, dark text, light purple border, pill shape, subtle shadow */}
            <button className="">
            <Image 
                src="/img/login_button.svg" 
                alt="Star" 
                width={14} 
                height={14} 
                className="w-full h-8 object-contain"
              />
            </button>
            
            {/* Start Free Button - Blue gradient (lighter top-left to deeper bottom-right), white text, star icon, prominent shadow */}
            <button className="">
              {/* Start Free */}
              <Image 
                src="/img/blue_button.svg" 
                alt="Star" 
                width={14} 
                height={14} 
                className="w-full h-8 object-contain"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

