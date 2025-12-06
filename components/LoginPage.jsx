'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Move testimonials outside component to prevent recreation on each render
const testimonials = [
  {
    quote: "Floxy has the cleanest IP's unlike other providers, allowing us to scrape data & build account farms. Very reliable infrastructure that businesses can use on a large scale.",
    name: "Alice",
    role: "OF Creator"
  },
  {
    quote: "Lock Leaks has transformed how we protect our content. The service is fast, reliable, and gives us peace of mind.",
    name: "Sarah",
    role: "Content Creator"
  },
  {
    quote: "Best investment for content protection. The team is responsive and the results speak for themselves.",
    name: "Emma",
    role: "Digital Creator"
  }
];

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Memoize gradient style to prevent recreation
  const gradientStyle = useMemo(() => ({
    backgroundImage: 'linear-gradient(90deg, rgb(70, 170, 195) 0%, rgb(108, 197, 215) 50%, rgb(138, 210, 227) 100%)'
  }), []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Login Form */}
      <div className="w-full lg:w-1/2 bg-gray-100 flex flex-col justify-between p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center">
          {/* Login Card */}
          <div className="bg-white rounded-2xl p-6 sm:px-8 sm:pt-8 sm:pb-4 lg:px-10 lg:pt-10 lg:pb-6 shadow-lg">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="text-2xl sm:text-2xl font-medium text-black mb-2 font-inter">
                Login to your account
              </h1>
              <p className="text-sm font-normal text-[#515151] font-inter">
                Enter your details to sign in.
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-5">
              <label className="block text-sm font-normal text-black mb-2 font-inter">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="name@lockleaks.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-inter"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-5">
              <label className="block text-sm font-normal text-black mb-2 font-inter">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="********"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-inter"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m0 0a9.954 9.954 0 012.121-2.121m0 0L9.88 9.88m-3.29-3.29L3 3m6.29 6.29L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Keep me logged in & Forgot password */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-[#D0D0D0] rounded-md focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-black font-medium font-inter">Keep me logged in</span>
              </label>
              <Link href="#" className="text-sm text-[#1FA8CA] hover:text-blue-700 underline font-inter">
                Forgot password?
              </Link>
            </div>

            {/* OR Separator */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-inter">OR</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {/* <span className="text-sm font-medium text-gray-700 font-inter">Google</span> */}
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                {/* <span className="text-sm font-medium text-gray-700 font-inter">X</span> */}
              </button>
            </div>

            {/* Login Button */}
            <button
              className="w-full pt-2 pb-8 rounded-lg text-white font-medium text-base transition-all hover:scale-105 font-inter relative"
              style={{
                backgroundImage: 'url(/img/learge_login_bg.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <span className="text-sm font-medium text-white font-inter">Log In</span>
            </button>
          </div>

        </div>
        
        {/* Footer */}
        <div className="w-full max-w-xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <Image
              src="/img/footer_logo_2.png"
              alt="Lock Leaks"
              width={200}
              height={200}
              className="h-8 sm:h-8 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#515151] font-medium font-inter">Don't have an account?</span>
            <button >
              <Image
                src="/img/blue_button_2.svg"
                alt="Sign Up"
                width={100}
                height={100}
                className="w-full h-12 object-contain"
              />
              
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel - Content Protection Feature */}
      <div 
        className="w-full lg:w-1/2 min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 lg:p-8"
        style={{
          backgroundImage: 'url(/img/login_right_bg.svg)',
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          willChange: 'auto', // Optimize rendering performance
        }}
      >
        <div className="w-full max-w-lg text-center">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 font-inter">
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(31, 168, 202) 0%, rgb(220, 245, 250) 50%, rgb(31, 168, 202) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Protect{' '}
            </span>
            <span className="text-[#D0D0D0]">
              Your{' '}
            </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(31, 168, 202) 0%, rgb(220, 245, 250) 50%, rgb(31, 168, 202) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Content
            </span>
          </h2>

          {/* Central Graphic - Centered */}
          <div className="relative mb-8 sm:mb-12 flex justify-center items-center w-full">
            {/* Logo Box - Centered */}
            <div className="relative z-10 flex justify-center items-center w-full">
              <Image
                src="/img/login_right_logo_box.png"
                alt="Content Protection"
                width={400}
                height={400}
                className="w-full max-w-40 sm:max-w-48 lg:max-w-64 h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Testimonial Card */}
          <div 
            className="relative rounded-xl p-6 sm:p-8 mb-6 sm:mb-8 overflow-hidden"
            style={{
              backgroundImage: 'url(/img/login_right_shadow.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <p className="text-sm sm:text-sm text-left text-[#BCBCBC] mb-4 leading-relaxed font-inter relative z-10">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden">
                <Image
                  src="/img/login_profile.svg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-white font-inter text-left">{testimonials[currentTestimonial].name}</div>
                <div className="text-xs text-[#8F8F8F] font-inter text-left">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
            <button 
              onClick={prevTestimonial}
              className="w-8 h-8 rounded-full bg-white hover:bg-white/90 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 transition-all ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-8 h-8 rounded-full bg-white hover:bg-white/90 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Trustpilot Rating */}
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/img/trustpilot.svg"
              alt="Trustpilot"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

