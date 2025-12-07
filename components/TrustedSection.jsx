'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TrustedSection = () => {
  const [counts, setCounts] = useState({
    leaks: 0,
    accuracy: 0,
    revenue: 0,
    creators: 0,
  });

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const stats = [
    { 
      value: 55, 
      suffix: 'M', 
      label: 'Leaks Removed',
      key: 'leaks',
      duration: 2000,
      prefix: '',
    },
    { 
      value: 97, 
      suffix: '%', 
      label: 'Accuracy',
      key: 'accuracy',
      duration: 2000,
      prefix: '',
    },
    { 
      value: 100, 
      suffix: 'M+', 
      label: 'Revenue Saved',
      key: 'revenue',
      duration: 2000,
      prefix: '$',
    },
    { 
      value: 150, 
      suffix: '+', 
      label: 'Creators Protected',
      key: 'creators',
      duration: 2000,
      prefix: '',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounts();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateCounts = () => {
    stats.forEach((stat) => {
      const duration = stat.duration;
      const steps = 60;
      const increment = stat.value / steps;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(
          Math.floor(increment * currentStep),
          stat.value
        );

        setCounts((prev) => ({
          ...prev,
          [stat.key]: currentValue,
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
          // Ensure final value is set
          setCounts((prev) => ({
            ...prev,
            [stat.key]: stat.value,
          }));
        }
      }, stepDuration);
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-plus-jakarta">
            <span className="text-black">Trusted </span>
            <span className="bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(15deg, rgb(48, 100, 112) 20%, rgb(114, 200, 222) 70%);'
              }}>DMCA </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(15deg, rgb(61, 174, 202) 20%, rgb(49, 88, 97) 80%)'
              }}
            > Takedown
            </span>
            <span className="text-black"> Service</span>
          </h2>
        </div>

        {/* Trusted Image */}
        <div className="flex justify-center mb-8 sm:mb-8 lg:mb-8">
          <div className="w-full max-w-7xl lg:max-w-7xl">
            <img
              src="/img/trusted.svg"
              alt="Trusted DMCA Service"
              className="w-full h-auto object-contain"
              style={{ 
                imageRendering: '-webkit-optimize-contrast',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
              }}
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-24 bg-[#f7f7f7] px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 lg:py-8 rounded-2xl sm:rounded-3xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-5 shadow-md hover:shadow-lg transition-shadow border-2 border-[#b7e3ee] w-full"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-[#231645] mb-1 sm:mb-2 font-plus-jakarta flex items-baseline justify-center gap-0.5">
                  {stat.prefix && (
                    <span className="text-[#231645]">{stat.prefix}</span>
                  )}
                  <span className="text-[#231645]">{counts[stat.key]}</span>
                  <span className="text-[#5e527d] text-base sm:text-lg md:text-xl lg:text-lg font-medium">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-base text-[#5e527d] font-normal font-plus-jakarta leading-tight sm:leading-normal">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;

