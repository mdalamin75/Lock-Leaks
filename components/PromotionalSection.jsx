import React from 'react';
import Image from 'next/image';

const PromotionalSection = () => {
  // Platform logos data
  const platforms = [
    { name: 'OnlyFans', color: '#00AFF0' },
    { name: 'CamSoda', color: '#FF69B4' },
    { name: 'MyFreeCams', color: '#00C853' },
    { name: 'LIVEJASMIN', color: '#E53935' },
    { name: 'BongaCams', color: '#FF69B4' },
    { name: 'STRIPCHAT', color: '#FF69B4' },
    { name: 'Chaturbate', color: '#FF6B35' },
  ];

  // Profile images with stats - arranged as 3 on top, 2 on bottom
  const profileStats = [
    { icon: 'v2', image: '/img/love_react.svg', value: '45.9k', color: '#87CEEB', iconColor: '#4A90E2', textColor: '#2C3E50' },
    { icon: 'eye', image: '/img/view.svg', value: '12.4k', color: '#9370DB', iconColor: '#FFFFFF', textColor: '#FFFFFF' },
    { icon: 'chat', image: '/img/comment.svg', value: '14.5k', color: '#87CEEB', iconColor: '#4A90E2', textColor: '#2C3E50' },
    { icon: 'person', image: '/img/follower.svg', value: '+12.4k', color: '#87CEEB', iconColor: '#4A90E2', textColor: '#2C3E50' },
    { icon: 'thumbs', image: '/img/like.svg', value: '101k', color: '#9370DB', iconColor: '#FFFFFF', textColor: '#FFFFFF' },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Platform Logos */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <div
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap"
                style={{ color: platform.color }}
              >
                {platform.name}
              </div>
            </div>
          ))}
        </div>

        {/* Profile Images Grid - 3 on top, 2 on bottom */}
        <div className="flex flex-col items-center mb-10 sm:mb-12 lg:mb-16 max-w-6xl mx-auto">
          {/* Top Row - 3 images */}
          <div className="flex justify-between gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-3 sm:mb-4 md:mb-6 w-full max-w-5xl">
            {profileStats.slice(0, 3).map((stat, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center max-w-52"
              >
                {/* Profile Image Container */}
                <div className="relative">
                  <Image src="/img/model.png" alt="Profile Image" width={200} height={200} className="w-full h-auto mt-6" />
                  
                  {/* Stat Badge - positioned at top edge */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                    <Image 
                      src={stat.image} 
                      alt={stat.icon} 
                      width={40} 
                      height={40} 
                      className="w-16 h-6 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
                  {/* Main Message */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl text-gray-700 italic font-medium leading-relaxed px-4">
            Helping creators protect their content<br className="hidden sm:block" />
            and boost monthly income by<br className="hidden sm:block" />
            removing leaks online.
          </p>
        </div>

        {/* Top Rated Section */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center gap-2 sm:gap-2.5">
            <span className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">Top Rated</span>
            <div className="flex gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, index) => (
                <Image key={index} src="/img/pink_star.svg" alt="Star" width={14} height={14} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              ))}
            </div>
          </div>
        </div>

          {/* Bottom Row - 2 images, centered */}
          <div className="flex justify-between items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl -mt-32">
            {profileStats.slice(3, 5).map((stat, index) => (
              <div
                key={index + 3}
                className="relative flex flex-col items-center max-w-48"
              >
                {/* Profile Image Container */}
                <div className="relative">
                  <Image src="/img/model.png" alt="Profile Image" width={200} height={200} className="w-full h-auto  mt-6" />
                  
                  {/* Stat Badge - positioned at top edge */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                    <Image 
                      src={stat.image} 
                      alt={stat.icon} 
                      width={40} 
                      height={40} 
                      className="w-16 h-6 "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromotionalSection;

