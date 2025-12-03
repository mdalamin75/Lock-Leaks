import React from 'react';
import Image from 'next/image';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      badge: 'Data Sources',
      badgeImage: '/img/data_source.svg',
      title: 'Add Your Links',
      description: 'Submit your social media, fan pages, or any URLs you want protected. Our system instantly starts scanning for leaks and duplicates.',
      buttonText: 'Start Free Scan',
      buttonImage: '/img/start_free_scan.svg',
    },
    {
      number: '02',
      badge: 'Smart Cleanup',
      badgeImage: '/img/smart_cleanup.svg',
      title: 'We Analyze & Remove',
      description: 'Our AI and cyber investigations team review and remove all detected leaks — from Google, file-sharing, and mirror sites.',
      buttonText: 'See Results',
      buttonImage: '/img/see_results.svg',
    },
    {
      number: '03',
      badge: 'Smart Cleanup',
      badgeImage: '/img/smart_cleanup.svg',
      title: 'Stay Protected 24/7',
      description: 'LockLeaks keeps scanning your content in real time to prevent new leaks and impersonators.',
      buttonText: 'Stay Protected',
      buttonImage: '/img/stay_protected.svg',
    },
  ];

  // Refined gradient: darker teal-blue to lighter sky blue
  const gradientStyle = {
    backgroundImage: 'linear-gradient(90deg, rgb(70, 170, 195) 0%, rgb(108, 197, 215) 50%, rgb(138, 210, 227) 100%)'
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header - Centered */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 font-plus-jakarta">
            <span className="text-black">How It </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(45, 105, 120) 0%, rgb(108, 197, 215) 35%, rgb(138, 210, 227) 50%, rgb(200, 235, 242) 65%, rgb(138, 210, 227) 80%, rgb(45, 105, 120) 100%)'
              }}
            >Works</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-black font-semibold font-plus-jakarta italic">
            3 simple steps to keep your <br className="hidden sm:block" /> content safe
          </p>
        </div>

        {/* Steps - Centered with left-aligned numbers */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-8 sm:gap-10 lg:gap-12 max-w-4xl mx-auto"
            >
              {/* Number Badge - Left aligned */}
              <div className="flex-shrink-0">
                <div 
                  className="text-7xl sm:text-7xl lg:text-7xl font-bold leading-none font-plus-jakarta"
                  style={{
                    ...gradientStyle,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.number}
                </div>
              </div>

              {/* Content - Right side */}
              <div className="flex-1">
                {/* Badge */}
                <div className="mb-2">
                  <Image
                    src={step.badgeImage}
                    alt={step.badge}
                    width={150}
                    height={100}
                    className="h-8 sm:h-10 lg:h-10 w-auto object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-black mb-2 sm:mb-2 lg:mb-2 font-plus-jakarta leading-tight">
                  {step.title}
                </h3>

                {/* Description - Lighter gray */}
                <p className="text-base sm:text-lg lg:text-lg text-[#5c556c] mb-4 sm:mb-4 lg:mb-4 leading-relaxed font-plus-jakarta max-w-2xl">
                  {step.description}
                </p>

                {/* Button */}
                <button className="group transition-all hover:scale-105 hover:opacity-90">
                  <Image
                    src={step.buttonImage}
                    alt={step.buttonText}
                    width={200}
                    height={100}
                    className="h-12 sm:h-12 lg:h-12 w-auto object-contain"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

