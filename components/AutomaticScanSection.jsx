import React from 'react';
import Image from 'next/image';
import OptimizedImage from './OptimizedImage';

const AutomaticScanSection = () => {
  // Icons arranged in wave pattern - each icon has specific vertical position
  // Using responsive classes for mobile and desktop
  const icons = [
    { name: 'x', icon: '/img/automatic_scan/x.svg', marginClasses: 'mb-0 ml-0', widthHeight: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' },
    { name: 'snapchat', icon: '/img/automatic_scan/snap_chat.svg', marginClasses: 'mb-4 -ml-2 sm:mb-12 sm:-ml-8', widthHeight: 'w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32' },
    { name: 'discord', icon: '/img/automatic_scan/discord.svg', marginClasses: 'mb-0 -ml-4 sm:mb-0 sm:-ml-16', widthHeight: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' },
    { name: 'camera', icon: '/img/automatic_scan/picture.svg', marginClasses: 'mb-6 -ml-4 sm:mb-20 sm:-ml-16', widthHeight: 'w-12 h-14 sm:w-16 sm:h-18 md:w-20 md:h-24 lg:w-24 lg:h-28' },
    { name: 'telegram', icon: '/img/automatic_scan/telegram.svg', marginClasses: 'mb-1 -ml-2 sm:mb-2 sm:-ml-8', widthHeight: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' },
    { name: 'chat', icon: '/img/automatic_scan/chat.svg', marginClasses: 'mb-6 ml-2 sm:mb-20 sm:ml-8', widthHeight: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' },
    { name: 'reddit', icon: '/img/automatic_scan/raddit.svg', marginClasses: '-mb-2 -ml-6 sm:-mb-8 sm:-ml-32', widthHeight: 'w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32' },
    { name: 'tiktok', icon: '/img/automatic_scan/tiktok.svg', marginClasses: 'mb-2 -ml-1 sm:mb-6 sm:-ml-4', widthHeight: 'w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20' },
    { name: 'facebook', icon: '/img/automatic_scan/facebook.svg', marginClasses: '-mb-3 ml-0 sm:-mb-10 sm:ml-0', widthHeight: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' },
    { name: 'play', icon: '/img/automatic_scan/play_button.svg', marginClasses: 'mb-1 ml-0 sm:mb-4 sm:ml-0', widthHeight: 'w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20' },
    { name: 'twitch', icon: '/img/automatic_scan/video.svg', marginClasses: 'mb-5 -ml-1 sm:mb-16 sm:-ml-4', widthHeight: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' },
    { name: 'instagram', icon: '/img/automatic_scan/instagram.svg', marginClasses: '-mb-1 -ml-4 sm:-mb-4 sm:-ml-16', widthHeight: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' },
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-plus-jakarta">
            <span className="text-black">Automatic </span>
              <span className="bg-clip-text text-transparent" style={{
                  backgroundImage: 'linear-gradient(15deg, rgb(48, 100, 112) 20%, rgb(114, 200, 222) 70%);'
                }}>Scan </span>
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
              > Takedown
              </span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-base sm:text-lg md:text-xl text-black font-bold font-plus-jakarta italic">
            Full protection, full anonymity.
          </p>
        </div>

        {/* Icons Wave Pattern */}
        <div className="flex flex-wrap sm:flex-nowrap items-end justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 px-2 sm:px-4 overflow-hidden py-2 sm:py-4 lg:py-6">
          {icons.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex items-center justify-center flex-shrink-0 ${item.marginClasses}`}
              >
                <div className="relative group flex items-center justify-center">
                  <OptimizedImage
                    src={item.icon}
                    alt={item.name}
                    className={`${item.widthHeight} object-contain opacity-100 group-hover:opacity-100 transition-opacity`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AutomaticScanSection;
