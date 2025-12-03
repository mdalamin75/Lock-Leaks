'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "I used to stress about leaks every day. Now I feel protected and free to create.",
      profileImage: '/img/trust_profile.svg',
      badge: {
        platform: 'OnlyFans',
        text: 'Top 0,8%',
        logo: '/img/platform/only_fans.svg'
      }
    },
    {
      quote: "Lock Leaks has given me peace of mind. I can focus on creating without worrying about my content being stolen.",
      profileImage: '/img/trust_profile.svg',
      badge: {
        platform: 'OnlyFans',
        text: 'Top 0,8%',
        logo: '/img/platform/only_fans.svg'
      }
    },
    {
      quote: "The best investment I've made for my content business. Fast takedowns and excellent support.",
      profileImage: '/img/trust_profile.svg',
      badge: {
        platform: 'OnlyFans',
        text: 'Top 0,8%',
        logo: '/img/platform/only_fans.svg'
      }
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold font-plus-jakarta">
            <span className="text-black">Creators </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(45, 105, 120) 0%, rgb(108, 197, 215) 35%, rgb(138, 210, 227) 50%, rgb(200, 235, 242) 65%, rgb(138, 210, 227) 80%, rgb(45, 105, 120) 100%)'
              }}
            >Trust Us</span>
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="relative">
          {/* Navigation Arrows */}
          {/* LEFT BUTTON */}
          <button
            onClick={prevTestimonial}
            className="group absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 lg:-translate-x-8 z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-opacity"
            aria-label="Previous testimonial"
          >
            {/* Normal state - before.svg on left side, no flip needed */}
            <Image
              src="/img/testimonial_button_before.svg"
              alt="Previous"
              width={56}
              height={56}
              className="w-full h-full object-contain opacity-100 group-hover:opacity-0 absolute transition-opacity"
            />
            {/* Hover state - testimonial_button.svg on left side, needs flip */}
            <Image
              src="/img/testimonial_button.svg"
              alt="Previous"
              width={56}
              height={56}
              className="w-full h-full object-contain opacity-0 group-hover:opacity-100 absolute transition-opacity scale-x-[-1]"
            />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextTestimonial}
            className="group absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 lg:translate-x-8 z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-opacity"
            aria-label="Next testimonial"
          >
            {/* Normal state - before.svg on right side, needs flip */}
            <Image
              src="/img/testimonial_button_before.svg"
              alt="Next"
              width={56}
              height={56}
              className="w-full h-full object-contain opacity-100 group-hover:opacity-0 absolute transition-opacity scale-x-[-1]"
            />
            {/* Hover state - testimonial_button.svg on right side, no flip needed */}
            <Image
              src="/img/testimonial_button.svg"
              alt="Next"
              width={56}
              height={56}
              className="w-full h-full object-contain opacity-0 group-hover:opacity-100 absolute transition-opacity"
            />
          </button>

          {/* Testimonial Card */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 lg:p-12">
            {/* Profile Section */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center sm:items-start gap-6 sm:gap-8 mb-8 sm:mb-10">
              {/* Abstract Geometric Shape Background */}
              <div className="absolute left-0 sm:left-4 top-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
              
              {/* Profile Image Container */}
              <div className="relative z-10 flex-shrink-0">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src={currentTestimonial.profileImage}
                    alt="Creator Profile"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="relative text-center">
              {/* Large Quotation Marks */}
              <div className="absolute left-2 sm:left-4 lg:left-6 -top-2 sm:-top-4 lg:-top-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                <Image
                  src="/img/quoto.svg"
                  alt="Quote"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold italic text-black leading-relaxed font-plus-jakarta px-6 sm:px-10 lg:px-16">
                {currentTestimonial.quote}
              </blockquote>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8 sm:mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-pink-400 w-8'
                      : 'bg-pink-200 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

