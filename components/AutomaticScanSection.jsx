import React from 'react';
import Image from 'next/image';

const AutomaticScanSection = () => {
  // Icons arranged in wave pattern - each icon has specific vertical position
  // Using individual margin-bottom values for precise wave pattern matching
  const icons = [
    { name: 'x', icon: '/img/automatic_scan/x.svg', marginBottom: 'mb-0', widthHeight: 'w-24 h-24' }, // low
    { name: 'snapchat', icon: '/img/automatic_scan/snap_chat.svg', marginBottom: 'mb-12 -ml-8', widthHeight: 'w-32 h-32' }, // mid-low
    { name: 'discord', icon: '/img/automatic_scan/discord.svg', marginBottom: 'mb-0 -ml-16', widthHeight: 'w-24 h-24' }, // high
    { name: 'camera', icon: '/img/automatic_scan/picture.svg', marginBottom: 'mb-20 -ml-16', widthHeight: 'w-24 h-28' }, // mid
    { name: 'telegram', icon: '/img/automatic_scan/telegram.svg', marginBottom: 'mb-2 -ml-8', widthHeight: 'w-24 h-24' }, // high
    { name: 'chat', icon: '/img/automatic_scan/chat.svg', marginBottom: 'mb-20 ml-8', widthHeight: 'w-24 h-24' }, // high
    { name: 'reddit', icon: '/img/automatic_scan/raddit.svg', marginBottom: '-mb-8 -ml-32 ', widthHeight: 'w-32 h-32' }, // high
    { name: 'tiktok', icon: '/img/automatic_scan/tiktok.svg', marginBottom: 'mb-6 -ml-4', widthHeight: 'w-20 h-20' }, // mid-low
    { name: 'facebook', icon: '/img/automatic_scan/facebook.svg', marginBottom: '-mb-10', widthHeight: 'w-24 h-24' }, // mid
    { name: 'play', icon: '/img/automatic_scan/play_button.svg', marginBottom: 'mb-4', widthHeight: 'w-20 h-20' }, // mid-high
    { name: 'twitch', icon: '/img/automatic_scan/video.svg', marginBottom: 'mb-16 -ml-4', widthHeight: 'w-24 h-24' }, // mid
    { name: 'instagram', icon: '/img/automatic_scan/instagram.svg', marginBottom: '-mb-4 -ml-16 ', widthHeight: 'w-24 h-24' }, // low
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-3 sm:mb-4 font-plus-jakarta">
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
        <div className="flex flex-nowrap items-end justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 px-4 overflow-hidden py-8">
          {icons.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex items-center justify-center flex-shrink-0 ${item.marginBottom}`}
              >
                <div className="relative group flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={`${item.widthHeight} object-contain opacity-100 group-hover:opacity-100 transition-opacity`}
                    quality={100}
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
