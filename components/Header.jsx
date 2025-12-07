"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center pt-4 px-4"
      style={{ isolation: "isolate" }}
    >
      <nav className="w-full max-w-3xl">

        {/* Navigation Container */}
        <div
          className="backdrop-blur-lg rounded-2xl shadow-md border border-white/30 px-4 py-2.5 flex items-center justify-between"
          style={{
            background:
              "linear-gradient(180deg, rgba(135, 135, 135, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        >

          {/* Logo + Menu */}
          <div className="flex items-center gap-6 lg:gap-8">

            {/* Logo */}
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src="/img/logo_3.webp"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {["Services", "Pricing", "Resources", "For Agencies"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-black hover:text-[#4A90E2] transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-2.5">

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-2.5">

              {/* Login Button */}
              <Link href="/login" className="hover:opacity-80 transition-opacity">
                <div className="relative w-28 h-8">
                  <Image
                    src="/img/login_button.svg"
                    alt="Login"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Start Free Button */}
              <button className="mt-1">
                <div className="relative w-32 h-9">
                  <Image
                    src="/img/blue_button_2.svg"
                    alt="Start Free"
                    fill
                    className="object-contain"
                  />
                </div>
              </button>

            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Toggle menu"}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                  <span className="block h-0.5 w-6 bg-black" />
                  <span className="block h-0.5 w-6 bg-black" />
                  <span className="block h-0.5 w-6 bg-black" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Background overlay */}
            <div
              className="fixed top-20 left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Slide Menu */}
            <div
              className={`fixed top-20 left-4 right-4 md:hidden z-40 transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <div
                className="backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(135, 135, 135, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              >

                {/* Mobile Links */}
                <div className="flex flex-col items-center gap-4 mb-6">
                  {["Services", "Pricing", "Resources", "For Agencies"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#"
                        onClick={closeMenu}
                        className="text-black hover:text-[#4A90E2] transition-colors text-base font-medium py-2 border-b border-white/20 w-full text-center"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>

                {/* Mobile Buttons */}
                <div className="flex flex-col gap-3">

                  {/* Login */}
                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="flex justify-center hover:opacity-80 transition-opacity"
                  >
                    <div className="relative w-40 h-10">
                      <Image
                        src="/img/login_button.svg"
                        alt="Login"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>

                  {/* Start Free */}
                  <button onClick={closeMenu} className="flex justify-center">
                    <div className="relative w-44 h-11">
                      <Image
                        src="/img/blue_button_2.svg"
                        alt="Start Free"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </button>

                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
