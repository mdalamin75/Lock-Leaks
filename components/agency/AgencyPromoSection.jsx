"use client";
import React from "react";

const AgencyPromoSection = () => {
  return (
    <section className="w-full bg-[#000000E8] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-white space-y-4 sm:space-y-5 lg:space-y-6 font-plus-jakarta">
          
          {/* Line 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            {/* Info Icon - Light blue circle with white 'i' */}
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
              <img src="/img/agency/mini_logo.svg" alt="logo" />
            </div>
            <span className="text-white font-medium">Lock Leaks monitors every creator</span>
            
            {/* Google Icon - Gray circle with white 'G' */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-black flex items-center justify-center flex-shrink-0">
              <span className="text-[#666666] text-[18px] font-bold leading-none">G</span>
            </div>
            <span className="text-white font-medium">link, photo, </span>
            <span className="text-[#838383] font-medium">and video</span>
            <span className="text-[#838383] font-medium">across the internet</span>
          </div>

          {/* Line 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            <span className="text-[#838383] font-medium">giving your agency real-time leak</span>
            
            {/* Bell Icon - Dark gray circle with white outline bell */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-black flex items-center justify-center flex-shrink-0">
              <svg 
                className="w-4 h-4 text-[#666666]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                />
              </svg>
            </div>
            <span className="text-[#838383] font-medium">alerts, fast takedowns, and detailed reports</span>
          </div>

          {/* Line 3 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            <span className="text-[#838383] font-medium">so you can scale safely without losing</span>
            
            {/* Dollar Icon - Dark green circle with white '$' */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-black flex items-center justify-center flex-shrink-0">
              <span className="text-[#00ff5e8a] text-[16px]  font-bold leading-none">$</span>
            </div>
            <span className="text-[#838383] font-medium">revenue.</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgencyPromoSection;

