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
    { icon: 'v2', value: '45.9k', color: '#87CEEB', iconColor: '#4A90E2', textColor: '#2C3E50' },
    { icon: 'eye', value: '12.4k', color: '#9370DB', iconColor: '#FFFFFF', textColor: '#FFFFFF' },
    { icon: 'chat', value: '14.5k', color: '#87CEEB', iconColor: '#4A90E2', textColor: '#2C3E50' },
    { icon: 'person', value: '+12.4k', color: '#87CEEB', iconColor: '#4A90E2', textColor: '#2C3E50' },
    { icon: 'thumbs', value: '101k', color: '#9370DB', iconColor: '#FFFFFF', textColor: '#FFFFFF' },
  ];

  // Icon components
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'v2':
        return (
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
        );
      case 'eye':
        return (
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
        );
      case 'chat':
        return (
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        );
      case 'person':
        return (
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        );
      case 'thumbs':
        return (
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
          </svg>
        );
      default:
        return null;
    }
  };

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
        <div className="flex flex-col items-center mb-10 sm:mb-12 lg:mb-16 max-w-5xl mx-auto">
          {/* Top Row - 3 images */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-3 sm:mb-4 md:mb-6 w-full max-w-4xl">
            {profileStats.slice(0, 3).map((stat, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center"
              >
                {/* Profile Image Container */}
                <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Placeholder for profile image - replace with actual image */}
                  {/* <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-gray-400 rounded-full"></div>
                  </div> */}
                  <Image src="/img/model.png" alt="Profile Image" width={100} height={100} className="w-full h-full object-cover" />
                  
                  {/* Stat Badge - positioned at top edge */}
                  <div
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs md:text-sm font-semibold shadow-md z-10"
                    style={{ backgroundColor: stat.color }}
                  >
                    {/* Icon */}
                    <div
                      className="flex items-center justify-center"
                      style={{ color: stat.iconColor }}
                    >
                      {getIcon(stat.icon)}
                    </div>
                    <span style={{ color: stat.textColor }}>
                      {stat.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
                  {/* Main Message */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 italic font-medium leading-relaxed px-4">
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
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-3xl">
            {profileStats.slice(3, 5).map((stat, index) => (
              <div
                key={index + 3}
                className="relative flex flex-col items-center"
              >
                {/* Profile Image Container */}
                <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Placeholder for profile image - replace with actual image */}
                  {/* <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-gray-400 rounded-full"></div>
                  </div>  */}
                  <Image src="/img/model.png" alt="Profile Image" width={100} height={100} className="w-full h-full object-cover" />
                  
                  {/* Stat Badge - positioned at top edge */}
                  <div
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs md:text-sm font-semibold shadow-md z-10"
                    style={{ backgroundColor: stat.color }}
                  >
                    {/* Icon */}
                    <div
                      className="flex items-center justify-center"
                      style={{ color: stat.iconColor }}
                    >
                      {getIcon(stat.icon)}
                    </div>
                    <span style={{ color: stat.textColor }}>
                      {stat.value}
                    </span>
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

