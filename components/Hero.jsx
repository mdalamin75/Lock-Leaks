import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full bg-white min-h-screen flex flex-col items-center justify-center pt-24 pb-12 lg:pt-28 lg:pb-20 px-6 lg:px-8">
      {/* Hero Image */}
      <div className="relative z-10 mb-4 w-full max-w-4xl mx-auto flex flex-col justify-center items-center">
        {/* Lock Logo - Top Center */}
        <div className="relative z-20 -mb-2 lg:-mb-14 -ml-5">
          <Image 
            src="/img/hero_logo.svg" 
            alt="Lock Logo" 
            width={500} 
            height={500} 
            className="w-10 h-10 object-contain"
            priority
          />
        </div>
        {/* Hero Background with Arcs and Logos */}
        <div className="relative w-full flex justify-center items-center">
          <Image 
            src="/img/hero_2.svg" 
            alt="Hero Background" 
            width={391} 
            height={252} 
            className="w-full max-w-[391px] h-auto object-contain"
            priority
          />
        </div>
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
              backgroundImage: 'linear-gradient(15deg, rgb(48, 100, 112) 20%, rgb(114, 200, 222) 70%);'
            }}>Remove </span>
          <span 
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgb(138, 210, 227), rgb(188, 229, 239) 50%, rgb(61, 171, 198))'
            }}
          > Leaked  
          </span>
          <span 
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(15deg, rgb(61, 174, 202) 20%, rgb(49, 88, 97) 80%)'
            }}
          > Content
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl xl:text-xl text-black mb-4 lg:mb-5 max-w-xl mx-auto leading-relaxed italic font-bold">
          We scan the web for stolen photos & videos and remove them fast. Your first leak check is 100% free.
        </p>

        {/* CTA Button and Made by a Woman */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-4">
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
            <span className="text-black font-bold text-sm lg:text-base">Made by a Woman</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

