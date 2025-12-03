'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How does LockLeaks work?',
      answer: 'We scan the web 24/7 to find and remove your leaked content from all major platforms — automatically and securely.',
    },
    {
      question: 'Can you guarantee removals?',
      answer: 'Yes, we have a 97% success rate in removing leaked content. Our team uses advanced AI and manual processes to ensure maximum effectiveness.',
    },
    {
      question: 'Is my data and identity safe?',
      answer: 'Absolutely. We use enterprise-grade encryption and never share your information with third parties. Your privacy is our top priority.',
    },
    {
      question: 'How fast are removals done?',
      answer: 'Most removals are completed within 24-48 hours. Urgent cases can be expedited to same-day removal.',
    },
    {
      question: 'What makes LockLeaks different?',
      answer: 'LockLeaks combines AI-powered scanning with expert human oversight, providing 24/7 protection and the fastest takedown times in the industry.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Gradient style matching the site
  const gradientStyle = {
    backgroundImage: 'linear-gradient(90deg, rgb(70, 170, 195) 0%, rgb(108, 197, 215) 50%, rgb(138, 210, 227) 100%)'
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section */}
          <div className="flex flex-col">
            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 font-plus-jakarta leading-tight">
              <span 
                className="bg-clip-text text-transparent"
                style={gradientStyle}
              >Got </span>
              <span className="text-black">Questions? We've </span>
              <span 
                className="bg-clip-text text-transparent"
                style={gradientStyle}
              >Got </span>
              <span className="text-black">Answers.</span>
            </h2>

            {/* Introductory Text */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-12 sm:mb-16 lg:mb-20 leading-relaxed font-plus-jakarta">
              Before you build your first agent, here are some quick answers to the most common questions.
            </p>

            {/* Contact Support Area */}
            <div className="mt-auto">
              {/* Profile Icons */}
              <div className="flex items-center gap-3">
                <Image src="/img/profile_group.svg" alt="Profile" width={500} height={500} className="w-24 h-16 object-contain" />
              </div>

              {/* Heading */}
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-black mb-2 font-plus-jakarta">
                Still have a questions?
              </h3>

              {/* Sub-heading */}
              <p className="text-base sm:text-lg text-[#6c757d] mb-4 font-plus-jakarta">
                we'll be happy to help you.
              </p>

              {/* Contact Support Button */}
              <button className="transition-transform hover:scale-105">
                <Image src="/img/contact_support.svg" alt="Contact Support" width={500} height={500} className="w-48 h-16 object-contain" />
              </button>
            </div>
          </div>

          {/* Right Section - FAQ List */}
          <div className="space-y-4 sm:space-y-5">
            {faqs.map((faq, index) => (
              <div className="bg-[#f7f8f9] rounded-2xl p-2 sm:p-2 border border-[#d8d8d8]">
              <div
                key={index}
                className="bg-white border border-[#d8d8d8] rounded-2xl p-5 sm:p-6 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center gap-4 text-left"
                >
                  {/* Icon - Just the arrow image */}
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Image
                        src="/img/arrow_down.svg"
                        alt="Down arrow"
                        width={48}
                        height={48}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                      />
                    ) : (
                      <Image
                        src="/img/arrow_right.svg"
                        alt="Right arrow"
                        width={48}
                        height={48}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                      />
                    )}
                  </div>

                  {/* Question */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-black mb-0 font-plus-jakarta">
                      {faq.question}
                    </h3>
                  </div>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="mt-4 sm:mt-5 ml-14 sm:ml-16">
                    <p className="text-sm sm:text-base text-[#6c757d] leading-relaxed font-plus-jakarta">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

