import React from 'react';
import Image from 'next/image';
import OptimizedImage from './OptimizedImage';

const PromotionalSection = () => {
  // Platform logos data
  const platforms = [
    { name: 'OnlyFans', logo: '/img/platform/only_fans.svg' },
    { name: 'CamSoda', logo: '/img/platform/camsoda.svg' },
    { name: 'MyFreeCams', logo: '/img/platform/my_free_cams.svg' },
    { name: 'LIVEJASMIN', logo: '/img/platform/livejasmin.svg' },
    { name: 'BongaCams', logo: '/img/platform/bonga_cams.svg' },
    { name: 'STRIPCHAT', logo: '/img/platform/strip_chat.svg' },
    { name: 'Chaturbate', logo: '/img/platform/chaturbate.svg' },
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
    <section className="w-full bg-white pt-12 pb-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Platform Logos */}
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
              {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <OptimizedImage
                src={platform.logo}
                alt={platform.name}
                className="w-20 h-8 sm:w-24 sm:h-10 md:w-28 md:h-12 lg:w-32 lg:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
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
                  <Image src="/img/model.webp" alt="Profile Image" width={200} height={200} quality={100} unoptimized={true} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 208px" className="w-full h-auto mt-8 md:mt-8" />
                  
                  {/* Stat Badge - positioned at top edge */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                    <OptimizedImage
                      src={stat.image} 
                      alt={stat.icon} 
                      className="w-20 h-9 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Main Message */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl text-black italic font-medium leading-relaxed px-4">
              Helping creators protect their content<br className="hidden sm:block" />
              and boost monthly income by<br className="hidden sm:block" />
              removing leaks online.
            </p>
          </div>

          {/* Top Rated Section */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center gap-2 sm:gap-2.5">
              <span className="text-sm sm:text-base lg:text-lg text-black font-medium">Top Rated</span>
              <div className="flex gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, index) => (
                  <OptimizedImage key={index} src="/img/pink_star.svg" alt="Star" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row - 2 images, centered */}
          <div className="flex justify-between items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl -mt-16 lg:-mt-24">
            {profileStats.slice(3, 5).map((stat, index) => (
              <div
                key={index + 3}
                className="relative flex flex-col items-center max-w-32 lg:max-w-48"
              >
                {/* Profile Image Container */}
                <div className="relative">
                  <Image src="/img/model.webp" alt="Profile Image" width={200} height={200} quality={100} unoptimized={true} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 208px" className="w-full h-auto mt-7 md:mt-8" />
                  
                  {/* Stat Badge - positioned at top edge */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                    <OptimizedImage
                      src={stat.image} 
                      alt={stat.icon} 
                      className="w-20 h-9 object-contain"
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

