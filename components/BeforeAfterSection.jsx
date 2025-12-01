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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-1 leading-[1.1]">
            <span className="bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(15deg,rgba(46, 87, 97, 1) 0%, rgba(119, 202, 223, 1) 100%);'
              }}>Before </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(141, 211, 228, 1) 0%, rgb(81 102 117 / 33%) 50%, rgba(74, 185, 212, 1) 100%)'
              }}
            > &   
            </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(15deg, rgba(119, 202, 223, 1) 20%, rgba(46, 87, 97, 1) 80%)'
              }}
            > After
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 italic">
            See how protecting your content <br className="hidden sm:block" /> changes everything.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Side - Before Items */}
          <div className="flex flex-col gap-4 lg:gap-6 max-w-56">
            {beforeItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 bg-white shadow rounded-full px-4 py-1"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={100}
                    height={100}
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Center - Model Image with Label */}
          <div className="flex items-center relative col-span-2">
            {/* Arrow Group - positioned between left and center */}
            <div className="">
              <Image
                src="/img/arrow_group.png"
                alt="Arrows"
                width={500}
                height={500}
                className="w-full h-96"
              />
            </div>
            
            <div>
              {/* Before Lock Leaks Label */}
              <div className="mb-0">
                <p className="text-sm sm:text-sm text-gray-600 font-semibold text-center">
                  Before <br className="hidden sm:block" /> Lock Leaks
                </p>
              </div>
              
              {/* Profile Image */}
              <div className="relative">
                <Image
                  src="/img/profile.png"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="w-56 max-w-xs sm:max-w-sm lg:max-w-xl h-80 rounded-2xl"
                />
              </div>
            </div>
          {/* Right Side - After Stats */}
          <div className="flex flex-col justify-between gap-6 lg:gap-8 items-center lg:items-start h-72">
            {/* Dollar Amount */}
            <div className="flex items-baseline gap-2">
              <Image
                src="/img/dollar_count.svg"
                alt="Dollar"
                width={500}
                height={500}
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
                width={500}
                height={500}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-40 lg:h-12"
              />
              {/* <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                000
              </span> */}
            </div>
          </div>
          </div>
        </div>

        {/* Get Started Free Button */}
        <div className="flex justify-center items-center mt-12 lg:mt-16">
          <button className="">
            <Image src="/img/get_started.svg" alt="Get Started Free" width={500} height={500} className="w-40 h-12 object-contain" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

