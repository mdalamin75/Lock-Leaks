"use client";
import React from "react";
import OptimizedImage from "../OptimizedImage";
import { Shield, Users, Megaphone, Target, PanelLeftOpen, Play } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Creator Protection",
      description: "Protect content, identity and revenue"
    },
    {
      icon: Users,
      title: "Cam Model Protection",
      description: "Protect videos, privacy and earnings"
    },
    {
      icon: Megaphone,
      title: "Influencer Protection",
      description: "Protect profiles, likeness and brands"
    },
    {
      icon: Target,
      title: "Streamer Protection",
      description: "Protect streams, branding and reach"
    },
    {
      icon: PanelLeftOpen,
      title: "Agency Protection",
      description: "Protect models, assets and workflows"
    }
  ];

  return (
    <section className="w-full bg-[#F5F5F5] pt-40 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column: Services */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6 sm:mb-8 font-plus-jakarta">
              Services
            </h2>
            
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 text-gray-600 mt-1 bg-white rounded p-2 shadow-sm">
                    <service.icon className="w-7 h-7" strokeWidth={1} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-xl font-bold text-[#2C2C2C] mb-1 sm:mb-2 font-plus-jakarta">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-[#5C5C5C] font-plus-jakarta">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: How it works */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6 sm:mb-8 font-plus-jakarta">
              How it works
            </h2>
            
            <div className="space-y-4 sm:space-y-5">
              {/* Video Thumbnail */}
              <div className="relative w-full aspect-video bg-[#4A9EC3] rounded-lg overflow-hidden flex items-center justify-center">
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#4A9EC3] ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-[#5C5C5C] font-plus-jakarta">
                This video shows how our protection engine keeps creators safe.
              </p>
              
              {/* Watch Video Link */}
              <a 
                href="#" 
                className="inline-block text-base sm:text-lg md:text-xl font-bold text-[#2C2C2C] hover:text-[#4A90E2] transition-colors font-plus-jakarta"
              >
                Watch video
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

