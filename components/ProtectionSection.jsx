import React from 'react';
import Image from 'next/image';
import OptimizedImage from './OptimizedImage';

const ProtectionSection = () => {
  const services = [
    // Top Row
    {
      title: 'DMCA Takedown',
      // description: 'We remove your content from websites that steal or copy it without your permission.',
      image: '/img/protection/protection.svg',
      width: 'w-full',
    },
    {
        title: 'Web Scan 24/7',
        // description: 'We use the most powerful software to detect where your illegal content is hidden. We run manual and automated scans.',
      image: '/img/protection/protection_3.svg',
      width: 'w-56',
    },
    {
      title: 'Reports',
      // description: 'You will receive reports on what we are doing and the results achieved.',
      image: '/img/protection/protection_3.svg',
      width: 'w-56',
    },
    // Bottom Row
    {
      title: 'File sharing websites scan and takedown',
      // description: 'We scan and take down file-sharing websites like mega.nz',
      image: '/img/protection/protection_4.svg',
    },
    {
      title: 'Live Support',
      // description: 'You will be assigned a team expert who you can contact when you need',
      image: '/img/protection/protection_3.svg',
    },
    {
      title: 'Search Results Removal',
      // description: 'We remove your leaked content from Google, Bing, and other search engines.',
      image: '/img/protection/protection_5.svg',
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-plus-jakarta">
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(45, 95, 110) 0%, rgb(108, 197, 215) 35%, rgb(138, 210, 227) 55%, rgb(45, 95, 110) 100%)'
              }}
            >24/7 </span>
            <span className="text-black">Content </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(45, 105, 120) 0%, rgb(108, 197, 215) 25%, rgb(200, 235, 242) 50%, rgb(108, 197, 215) 75%, rgb(45, 105, 120) 100%)'
              }}
            >Protection <br /> </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(180deg, rgb(108, 197, 215) 0%, rgb(65, 145, 165) 50%, rgb(45, 95, 110) 100%)'
              }}
            >& </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(90, 180, 200) 0%, rgb(158, 218, 230) 35%, rgb(200, 235, 242) 50%, rgb(108, 197, 215) 70%, rgb(45, 95, 110) 100%)'
              }}
            >Takedown </span>
            <span className="text-black">Service</span>
          </h2>
        </div>

        {/* Service Cards Grid */}
          {/* <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 lg:gap-2 mb-10 sm:mb-12 lg:mb-16 w-fit mx-auto">
          {services.map((service, index) => (
            <div key={index} className="w-[calc(33.333%-0.33rem)] sm:w-[calc(33.333%-0.5rem)] lg:w-[calc(33.333%-0.67rem)] h-64 sm:h-72 lg:h-80 flex-shrink-0">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div> */}
        <div className="flex flex-col gap-5 items-center">
          <div className="flex gap-5 items-center justify-center flex-wrap">
            <OptimizedImage src="/img/protection/protection11.svg" alt="Protection" className="w-[40rem] h-48 md:h-[24rem] object-contain" />
            <OptimizedImage src="/img/protection/protection_22.svg" alt="Protection" className="w-64 md:h-96 object-contain" />
            <OptimizedImage src="/img/protection/protection_33.svg" alt="Protection" className="w-64 h-96 object-contain" />
          </div>
          <div className="flex gap-5 items-center justify-center flex-wrap">
            <OptimizedImage src="/img/protection/protection_4.svg" alt="Protection" className="w-64 h-96 object-contain" />
            <div className="relative">
              <OptimizedImage src="/img/protection/protection_5.svg" alt="Protection" className="w-64 h-96 object-contain" />
              {/* <Image src="/img/protection/protection_52.png" alt="Protection" width={500} height={500} className="w-56 h-auto object-contain absolute bottom-5 left-1/2 -translate-x-1/2" /> */}
            </div>
            <OptimizedImage src="/img/protection/protection_6.svg" alt="Protection" className="w-[40rem] h-48 md:h-[24rem] object-contain" />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="hover:opacity-90 transition-opacity">
            <OptimizedImage
              src="/img/get_started.svg"
              alt="Get Started Free"
              className="w-36 sm:w-36 h-auto object-contain mt-10"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProtectionSection;

