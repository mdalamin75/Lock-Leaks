"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OptimizedImage from "./OptimizedImage";

const Hero = () => {

  return (
    <section className="w-full bg-white flex flex-col items-center justify-center pt-24 lg:pt-28 px-6 lg:px-8">

      {/* Hero Image – iOS = WEBP, Android/Desktop = SVG */}
      <div className="relative z-10 mb-4 w-full max-w-4xl mx-auto flex flex-col justify-center items-center">

        <div className="w-full max-w-[520px]">
          <OptimizedImage
            src="/img/hero_3.svg"
            alt="Hero Background"
            className="w-full h-auto block"
            draggable="false"
          />
        </div>

      </div>

      {/* Monitoring and Takedown Service Button */}
      <div className="mb-8 lg:mb-12">
        <button className="relative flex items-center justify-center shadow hover:shadow-md transition-all overflow-hidden w-[293px] h-[35px] rounded-full">
          <div className="absolute inset-0">
            <OptimizedImage
              src="/img/service_button_bg.svg"
              alt="Service Button"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
          <span className="relative z-10 text-[#1FA8CA] font-regular text-sm -mr-8">
            Monitoring and Takedown Service
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-5xl mx-auto px-4 font-plus-jakarta">

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-[1.1]">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(15deg, rgb(48, 100, 112) 20%, rgb(114, 200, 222) 70%)",
            }}
          >
            Remove{" "}
          </span>

          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(138, 210, 227), rgb(188, 229, 239) 50%, rgb(61, 171, 198))",
            }}
          >
            Leaked{" "}
          </span>

          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(15deg, rgb(61, 174, 202) 20%, rgb(49, 88, 97) 80%)",
            }}
          >
            Content
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-black mb-4 lg:mb-5 max-w-xl mx-auto leading-relaxed italic font-bold">
          We scan the web for stolen photos & videos and remove them fast. Your first leak check is 100% free.
        </p>

        {/* CTA & Made By A Woman */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <button className="relative w-40 h-12">
            <OptimizedImage
              src="/img/get_started.svg"
              alt="Get Started Free"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </button>

          <div className="flex items-center gap-2">
            <div className="relative w-9 h-9">
              <OptimizedImage
                src="/img/love.svg"
                alt="Love"
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
            <span className="text-black font-bold text-sm lg:text-base">
              Made by a Woman
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
