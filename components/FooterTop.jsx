"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OptimizedImage from "./OptimizedImage";
import { getOptimizedImagePath } from "@/utils/imageHelper";

const FooterTop = () => {
  const [bgPath, setBgPath] = useState('/img/footer_top_bg.svg');

  useEffect(() => {
    setBgPath(getOptimizedImagePath('/img/footer_top_bg.svg'));
  }, []);

  return (
    <section
      className="w-full max-w-7xl mx-auto relative overflow-hidden rounded-2xl bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bgPath})`,
      }}
    >
      {/* Content Layer */}
      <div className="relative z-10 py-4 sm:py-4 lg:py-12 px-3 sm:px-3 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-plus-jakarta">
            Protecting what you create.
          </h2>

          {/* Subtitle */}
          <p className="text-base text-white mb-3 md:mb-6 max-w-3xl mx-auto leading-relaxed">
            LockLeaks keeps your content safe so you can focus on growing — not worrying.
          </p>

          {/* Social Proof Section */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">

            {/* Profile Group */}
            <div className="relative w-12 h-12">
              <OptimizedImage
                src="/img/profile_group.svg"
                alt="User Profiles"
                className="w-full h-full object-contain"
              />
            </div>

            {/* 20K+ */}
            <span className="text-white text-sm font-semibold">
              20K+
            </span>

            {/* Divider */}
            <div className="w-px h-4 bg-white/50"></div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="relative w-4 h-4">
                  <OptimizedImage
                    src="/img/star_gold.svg"
                    alt="Star"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Rating Text */}
            <span className="text-white text-xs font-extralight">
              5.0 on Lock Leaks
            </span>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="hover:opacity-90 transition-opacity relative w-48 h-10">
              <OptimizedImage
                src="/img/start_free_scan.svg"
                alt="Start Free Scan"
                className="w-full h-full object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterTop;
