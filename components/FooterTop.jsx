import React from 'react';
import Image from 'next/image';

const FooterTop = () => {
  return (
    <section 
      className="w-full max-w-7xl mx-auto relative overflow-hidden bg-cover bg-center bg-no-repeat rounded-2xl"
      style={{
        backgroundImage: 'url(/img/footer_top_bg.png)',
      }}
    >
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-700/80 to-blue-400/90"></div>

      {/* Content */}
      <div className="relative z-10 py-12 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
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
              <Image
                src="/img/profile_group.png"
                alt="User Profiles"
                width={60}
                height={60}
                className="w-12 h-auto"
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
                <Image
                  key={index}
                  src="/img/star_gold.svg"
                  alt="Star"
                  width={20}
                  height={20}
                  className="w-4 h-4"
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
              <Image
                src="/img/start_free_scan.svg"
                alt="Start Free Scan"
                width={200}
                height={100}
                className="w-48 h-10 object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterTop;

