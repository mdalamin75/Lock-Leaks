'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const gradientStyle = {
    backgroundImage: 'linear-gradient(90deg, rgb(70, 170, 195) 0%, rgb(108, 197, 215) 50%, rgb(138, 210, 227) 100%)'
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Login Form */}
      <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2 font-plus-jakarta">
                Login to your account
              </h1>
              <p className="text-base text-gray-600 font-plus-jakarta">
                Enter your details to sign in.
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2 font-plus-jakarta">
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-plus-jakarta"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2 font-plus-jakarta">
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
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-plus-jakarta"
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
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 font-plus-jakarta">Keep me logged in</span>
              </label>
              <Link href="#" className="text-sm text-blue-600 hover:text-blue-700 font-plus-jakarta">
                Forgot password?
              </Link>
            </div>

            {/* OR Separator */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-plus-jakarta">OR</span>
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
                <span className="text-sm font-medium text-gray-700 font-plus-jakarta">Google</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-sm font-medium text-gray-700 font-plus-jakarta">X</span>
              </button>
            </div>

            {/* Login Button */}
            <button
              className="w-full py-3.5 rounded-lg text-white font-bold text-base transition-all hover:shadow-lg hover:scale-105 font-plus-jakarta"
              style={gradientStyle}
            >
              Log In
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-lg font-bold text-black font-plus-jakarta">
              Lock Leaks
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 font-plus-jakarta">Don't have an account?</span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1.5 font-plus-jakarta">
                <span className="text-sm font-semibold">Start Free</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Content Protection Feature */}
      <div className="w-full lg:w-1/2 bg-black relative overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'
          }}></div>
        </div>

        <div className="relative z-10 w-full max-w-lg text-center">
          {/* Title */}
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 font-plus-jakarta"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgb(108, 197, 215) 0%, rgb(255, 255, 255) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Protect Your Content
          </h2>

          {/* Central Graphic */}
          <div className="relative mb-8 sm:mb-12 flex justify-center items-center">
            <div className="relative">
              {/* Shadow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/img/login_right_shadow.svg"
                  alt="Shadow"
                  width={400}
                  height={400}
                  className="w-full h-auto opacity-50"
                />
              </div>
              {/* Logo Box */}
              <div className="relative z-10">
                <Image
                  src="/img/login_right_logo_box.png"
                  alt="Content Protection"
                  width={300}
                  height={300}
                  className="w-64 sm:w-80 lg:w-96 h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-gray-800 rounded-xl p-6 sm:p-8 mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed font-plus-jakarta italic">
              "Floxy has the cleanest IP's unlike other providers, allowing us to scrape data & build account farms. Very reliable infrastructure that businesses can use on a large scale."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-600"></div>
              <div>
                <div className="text-sm font-semibold text-white font-plus-jakarta">Alice</div>
                <div className="text-xs text-gray-400 font-plus-jakarta">OF Creator</div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
            </div>
            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

