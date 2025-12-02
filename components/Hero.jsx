import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full bg-white min-h-screen flex flex-col items-center justify-center pt-24 pb-12 lg:pt-28 lg:pb-20 px-6 lg:px-8">
      {/* Hero Image */}
      <div className="relative z-10 mb-4 w-full max-w-4xl mx-auto flex justify-center items-center">
        <Image 
          src="/img/hero_bg.svg" 
          alt="Hero Image" 
          width={500} 
          height={500} 
          className="w-2xl h-auto object-cover"
          priority
        />
      </div>

      {/* Monitoring and Takedown Service Button */}
      <div className=" mb-8 lg:mb-12">
        <button className="relative px-6 py-2 rounded-full flex items-center shadow hover:shadow-md transition-all overflow-hidden min-w-[293px]">
          <Image 
            src="/img/service_button_bg.svg" 
            alt="Service Button Background" 
            width={293} 
            height={35} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <span className="relative z-10 text-[#1FA8CA] font-regular text-sm whitespace-nowrap ml-14">
            Monitoring and Takedown Service
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-5xl mx-auto px-4">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-[1.1]">
          <span className="bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(15deg,rgba(46, 87, 97, 1) 0%, rgba(119, 202, 223, 1) 100%);'
            }}>Remove </span>
          <span 
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(141, 211, 228, 1) 0%, rgb(81 102 117 / 33%) 50%, rgba(74, 185, 212, 1) 100%)'
            }}
          > Leaked  
          </span>
          <span 
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(15deg, rgba(119, 202, 223, 1) 20%, rgba(46, 87, 97, 1) 80%)'
            }}
          > Content
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl xl:text-xl text-black mb-4 lg:mb-5 max-w-xl mx-auto leading-relaxed italic font-medium">
          We scan the web for stolen photos & videos and remove them fast. Your first leak check is 100% free.
        </p>

        {/* CTA Button and Made by a Woman */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-4">
          {/* <button 
            className="px-3 py-2 text-white rounded-xl hover:opacity-90 transition-all font-semibold text-base flex items-center gap-2 shadow-lg hover:shadow-xl"
            style={{
              background: 'linear-gradient(90deg, #60A5FA 0%, #4A90E2 50%, #357ABD 100%)'
            }}
          >
            Get Started Free
            <Image 
                src="/img/star.svg" 
                alt="Star" 
                width={14} 
                height={14} 
                className="w-6 h-6"
              />
          </button> */}
          <button>
            <Image src="/img/get_started.svg" alt="Get Started Free" width={500} height={500} className="w-40 h-12 object-contain" />
          </button>
          
          <div className="flex items-center gap-2">
              <Image 
                src="/img/love.svg" 
                alt="Love" 
                width={14} 
                height={14} 
                className="w-9 h-9"
              />
            <span className="text-[#1a1a1a] font-semibold text-sm lg:text-base">Made by a Woman</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

