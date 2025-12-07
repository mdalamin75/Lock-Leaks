import React from 'react';
import Image from 'next/image';

const FooterTop = () => {
  return (
    <section 
      className="w-full max-w-7xl mx-auto relative overflow-hidden bg-cover bg-center bg-no-repeat rounded-2xl"
      style={{
        backgroundImage: 'url(/img/footer_top_bg.svg)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
      }}
    >
      {/* Gradient Overlay for better text readability */}
      <div className="absolute"></div>

      {/* Content */}
      <div className="relative z-10 py-12 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-plus-jakarta">
            Protecting what you create.
          </h2>

          {/* Subtitle */}
          <p className="text-base text-white mb-6 max-w-3xl mx-auto leading-relaxed">
            LockLeaks keeps your content safe so you can focus on growing — not worrying.
          </p>

          {/* Social Proof Section */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
            {/* Profile Group */}
            <div className="flex items-center">
              <img
                src="/img/profile_group.svg"
                alt="User Profiles"
                className="w-12 h-auto"
                style={{ 
                  imageRendering: '-webkit-optimize-contrast',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                }}
              />
            </div>

            {/* 20K+ Text */}
            <span className="text-white text-sm font-semibold">
              20K+
            </span>

            {/* Vertical Separator */}
            <div className="w-px h-4 bg-white/50"></div>

            {/* Star Rating */}
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="/img/star_gold.svg"
                  alt="Star"
                  className="w-4 h-4"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                  }}
                />
              ))}
            </div>

            {/* Rating Text */}
            <span className="text-white text-xs font-extralight">
              5.0 on Lock Leaks
            </span>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="hover:opacity-90 transition-opacity">
              <img
                src="/img/start_free_scan.svg"
                alt="Start Free Scan"
                className="w-48 h-10 object-contain"
                style={{ 
                  imageRendering: '-webkit-optimize-contrast',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterTop;

