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
                src="/img/logo.png" 
                alt="Logo" 
                width={36} 
                height={36} 
                className="w-full h-full object-contain"
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
            <button className="px-4 py-2 bg-white text-black rounded-xl border border-[#a39fb6ad] hover:bg-gray-50 transition-colors text-sm font-medium" style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
              Log in
            </button>
            
            {/* Start Free Button - Blue gradient (lighter top-left to deeper bottom-right), white text, star icon, prominent shadow */}
            <button className="px-4 py-2 bg-gradient-to-br from-[#60A5FA] via-[#4A90E2] to-[#357ABD] text-white rounded-xl hover:from-[#4A90E2] hover:via-[#357ABD] hover:to-[#2A5F8F] transition-all text-sm font-medium flex items-center gap-1.5" style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              Start Free
              <Image 
                src="/img/star.svg" 
                alt="Star" 
                width={14} 
                height={14} 
                className="w-3.5 h-3.5"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

