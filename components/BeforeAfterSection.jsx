import React from 'react';
import Image from 'next/image';

const BeforeAfterSection = () => {
  // Before items with negative consequences
  const beforeItems = [
    { 
      text: 'Losing Money', 
      icon: '/img/doller_note.svg',
      iconColor: '#4CAF50' // green
    },
    { 
      text: 'Losing Control', 
      icon: '/img/lock.svg',
      iconColor: '#2196F3' // blue
    },
    { 
      text: 'Stress & Anxiety', 
      icon: '/img/stress.svg',
      iconColor: '#FF9800' // orange
    },
    { 
      text: 'Damaged Reputation', 
      icon: '/img/damaged.svg',
      iconColor: '#F44336' // red
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold mb-1 leading-[1.1] font-plus-jakarta">
            <span className="bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(15deg, rgb(48, 100, 112) 20%, rgb(114, 200, 222) 70%);'
              }}>Before </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(138, 210, 227), rgb(188, 229, 239) 50%, rgb(61, 171, 198)100%)'
              }}
            > &   
            </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(15deg, rgb(61, 174, 202) 20%, rgb(49, 88, 97) 80%)'
              }}
            > After
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-bold text-black italic font-plus-jakarta">
            See how protecting your content <br className="hidden sm:block" /> changes everything.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Side - Before Items */}
          <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 lg:gap-16 w-full order-1 md:order-1">
            {beforeItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-2 sm:gap-3 bg-white shadow rounded-full px-3 sm:px-4 py-1 w-full max-w-xs sm:max-w-sm md:max-w-56"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={100}
                    height={100}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-black whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Center - Model Image with Label */}
          <div className="flex flex-col items-center relative order-3 md:order-2 md:col-span-1">
            {/* Arrow Group - positioned between left and center */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[60%] md:-translate-x-full hidden md:block w-12 lg:w-16 xl:w-24 2xl:w-32 z-10">
              <Image
                src="/img/arrow_group.svg"
                alt="Arrows"
                width={700}
                height={700}
                className="w-full h-auto"
              />
            </div>
            
            <div className="w-full flex flex-col items-center">
              {/* Before Lock Leaks Label */}
              <div className="mb-2 sm:mb-4">
                <p className="text-xs sm:text-sm text-black font-semibold text-center">
                  Before <br className="hidden sm:block" /> Lock Leaks
                </p>
              </div>
              
              {/* Profile Image */}
              <div className="relative w-full flex justify-center">
                <Image
                  src="/img/profile.png"
                  alt="Profile"
                  width={1000}
                  height={1000}
                  className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Side - After Stats */}
          <div className="flex flex-col justify-center gap-4 sm:gap-6 lg:gap-8 items-center md:items-start order-2 md:order-3 md:h-auto">
            {/* Dollar Amount */}
            <div className="flex items-baseline gap-1 sm:gap-2">
              <Image
                src="/img/dollar.svg"
                alt="Dollar"
                width={500}
                height={500}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0"
              />
              <div className="flex items-baseline">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black">
                  0,
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
                  0
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
                  11
                </span>
              </div>
            </div>

            {/* Views Count */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Image
                src="/img/eye.svg"
                alt="Views"
                width={500}
                height={500}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0"
              />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
                000
              </span>
            </div>
          </div>
        </div>

        {/* Get Started Free Button */}
        <div className="flex justify-center items-center mt-8 sm:mt-12 lg:mt-16">
          <button className="hover:opacity-90 transition-opacity">
            <Image 
              src="/img/get_started.svg" 
              alt="Get Started Free" 
              width={500} 
              height={500} 
              className="w-32 h-10 sm:w-40 sm:h-12 md:w-44 md:h-14 object-contain" 
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

