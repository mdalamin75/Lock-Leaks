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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Before & After
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-700">
            See how protecting your content <br className="hidden sm:block" /> changes everything.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Side - Before Items */}
          <div className="flex flex-col gap-4 lg:gap-6 max-w-60">
            {beforeItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 bg-white shadow rounded-full px-4 py-3"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </div>
                <span className="text-sm sm:text-base font-medium text-gray-700">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Center - Model Image with Label */}
          <div className="flex items-center relative">
            {/* Arrow Group - positioned between left and center */}
            <div className="">
              <Image
                src="/img/arrow_group.png"
                alt="Arrows"
                width={150}
                height={300}
                className="w-80 h-full"
              />
            </div>
            
            <div>
              {/* Before Lock Leaks Label */}
              <div className="mb-0">
                <p className="text-sm sm:text-base text-gray-600 font-semibold text-center">
                  Before <br className="hidden sm:block" /> Lock Leaks
                </p>
              </div>
              
              {/* Profile Image */}
              <div className="relative">
                <Image
                  src="/img/profile.png"
                  alt="Profile"
                  width={300}
                  height={400}
                  className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Side - After Stats */}
          <div className="flex flex-col justify-between gap-6 lg:gap-8 items-center lg:items-start h-4/5">
            {/* Dollar Amount */}
            <div className="flex items-baseline gap-2">
              <Image
                src="/img/dollar_count.svg"
                alt="Dollar"
                width={200}
                height={200}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-40 lg:h-20"
              />
              {/* <div className="flex items-baseline">
                <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-500">
                  $0,0
                </span>
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                  00
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-500">
                  11
                </span>
              </div> */}
            </div>

            {/* Views Count */}
            <div className="flex items-center gap-3">
              <Image
                src="/img/eye_count.svg"
                alt="Views"
                width={50}
                height={50}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-40 lg:h-12"
              />
              {/* <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                000
              </span> */}
            </div>
          </div>
        </div>

        {/* Get Started Free Button */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <button className="">
            {/* Get Started Free
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg> */}
            <Image src="/img/blue_button_2.svg" alt="Get Started Free" width={100} height={100} className="w-80 h-12 object-contain" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

