"use client";
import React from "react";
import OptimizedImage from "../OptimizedImage";

const AgencyHero = () => {
  return (
    <section className="w-full bg-white relative overflow-hidden flex flex-col items-center justify-center min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      
      {/* Hero Image - Full background */}
      <div className="relative z-10 mb-4 w-full max-w-4xl mx-auto flex flex-col justify-center items-center">

        <div className="w-full max-w-[520px] max-h-[200px]">
          <OptimizedImage
            src="/img/agency/agency_hero.svg"
            alt="Hero Background"
            className="w-full h-auto block"
            draggable="false"
          />
        </div>

      </div>

      {/* Text Content - Overlay on lower portion */}
      <div className="text-center max-w-5xl mx-auto px-4 font-plus-jakarta">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-[1.1]">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(45, 105, 120) 0%, rgb(108, 197, 215) 25%, rgb(200, 235, 242) 50%, rgb(108, 197, 215) 75%, rgb(45, 105, 120) 100%)",
            }}
          >
            Protect Every{" "}
          </span>

          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(15deg, rgb(61, 174, 202) 20%, rgb(49, 88, 97) 80%)",
            }}
          >
            Creator.
          </span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(45, 105, 120) 0%, rgb(108, 197, 215) 25%, rgb(200, 235, 242) 50%, rgb(108, 197, 215) 75%, rgb(45, 105, 120) 100%)",
            }}
          >
            Effortlessly.
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-black mt-4 lg:mt-5 max-w-xl mx-auto leading-relaxed italic font-bold">
        Fast removals, 24/7 monitoring, zero complications.
        </p>
      </div>
    </section>
  );
};

export default AgencyHero;

