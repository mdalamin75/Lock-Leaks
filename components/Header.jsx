"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import OptimizedImage from "./OptimizedImage";
import { Shield, Users, Megaphone, Target, PanelLeftOpen, Play, FileText, LifeBuoy, Heart, Pen, Calendar } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const servicesRef = useRef(null);
  const resourcesRef = useRef(null);
  const servicesTimeoutRef = useRef(null);
  const resourcesTimeoutRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle hover with delay to prevent premature closing
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // Small delay to allow moving to dropdown
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
    }
    setIsResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 150);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    };
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Creator Protection",
      description: "Protect content, identity and revenue",
      href: "/services#creator"
    },
    {
      icon: Users,
      title: "Cam Model Protection",
      description: "Protect videos, privacy and earnings",
      href: "/services#cam-model"
    },
    {
      icon: Megaphone,
      title: "Influencer Protection",
      description: "Protect profiles, likeness and brands",
      href: "/services#influencer"
    },
    {
      icon: Target,
      title: "Streamer Protection",
      description: "Protect streams, branding and reach",
      href: "/services#streamer"
    },
    {
      icon: PanelLeftOpen,
      title: "Agency Protection",
      description: "Protect models, assets and workflows",
      href: "/services#agency"
    }
  ];

  const supportLine = [
    {
      icon: FileText,
      title: "Knowledge base",
      description: "Find an answer for a question",
      href: "/knowledge-base"
    },
    {
      icon: LifeBuoy,
      title: "Support",
      description: "Get in touch with our team",
      href: "/support"
    }
  ];

  const learnAndGrow = [
    {
      icon: Heart,
      title: "Customers",
      description: "Meet the GTM teams using Lock Leaks",
      href: "/customers"
    },
    {
      icon: Pen,
      title: "Blog",
      description: "Helpful ideas to succeed in sales",
      href: "/blog"
    },
    {
      icon: Play,
      title: "Watch our demo",
      description: "See Lock Leaks in action",
      href: "/demo"
    },
    {
      icon: Calendar,
      title: "Book a meeting",
      description: "Get a 1 on 1 product tour",
      href: "/book-meeting"
    }
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center pt-4 px-4"
      style={{ isolation: "isolate" }}
    >
      <nav className="w-full max-w-3xl relative">

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
            <Link href="/">
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src="/img/logo_3.webp"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {/* Services Dropdown */}
              <div 
                ref={servicesRef}
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  className="text-black hover:text-[#4A90E2] transition-colors text-sm font-medium"
                >
                  Services
                </button>
                
                <div 
                  className={`absolute top-full left-0 right-0 -translate-x-[11%] w-[calc(100vw-2rem)] max-w-3xl bg-white rounded-lg shadow-xl border border-gray-200 py-6 z-50 mt-[5px] transition-all duration-300 ease-in-out ${
                    isServicesOpen 
                      ? 'opacity-100 translate-y-5 pointer-events-auto' 
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-8 px-6">
                    {/* Left Column: Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Services</h3>
                      <div className="space-y-1">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="flex-shrink-0 mt-1 bg-gray-100 rounded p-2 group-hover:bg-gray-200 transition-colors">
                              <service.icon className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-bold text-gray-900 mb-0.5 group-hover:text-[#4A90E2] transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: How it works */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">How it works</h3>
                      <div className="space-y-3">
                        {/* Video Thumbnail - Smaller size */}
                        <div className="relative w-full h-32 bg-[#4A9EC3] rounded-lg overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                              <Play className="w-6 h-6 text-[#4A9EC3] ml-0.5" fill="currentColor" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-xs text-gray-500 leading-relaxed">
                          This video shows how our protection engine keeps creators safe.
                        </p>
                        
                        {/* Watch Video Link */}
                        <a 
                          href="#" 
                          className="inline-block text-sm font-bold text-gray-900 hover:text-[#4A90E2] transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsServicesOpen(false);
                          }}
                        >
                          Watch video
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="text-black hover:text-[#4A90E2] transition-colors text-sm font-medium"
              >
                Pricing
              </a>

              {/* Resources Dropdown */}
              <div 
                ref={resourcesRef}
                className="relative"
                onMouseEnter={handleResourcesMouseEnter}
                onMouseLeave={handleResourcesMouseLeave}
              >
                <button
                  className="text-black hover:text-[#4A90E2] transition-colors text-sm font-medium"
                >
                  Resources
                </button>
                
                <div 
                  className={`absolute top-full left-1/2 -translate-x-[37.5%] w-[calc(100vw-2rem)] max-w-3xl bg-white rounded-lg shadow-xl border border-gray-200 py-6 z-50 mt-[5px] transition-all duration-300 ease-in-out ${
                    isResourcesOpen 
                      ? 'opacity-100 translate-y-5 pointer-events-auto' 
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-8 px-6">
                    {/* Left Column: Support Line */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Support Line</h3>
                      <div className="space-y-2">
                        {supportLine.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="flex items-start gap-3 px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
                            onClick={() => setIsResourcesOpen(false)}
                          >
                            <div className="flex-shrink-0 mt-1">
                              <item.icon className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-bold text-gray-900 mb-0.5 group-hover:text-[#4A90E2] transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Learn & Grow */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Learn & Grow</h3>
                      <div className="space-y-2">
                        {learnAndGrow.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="flex items-start gap-3 px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
                            onClick={() => setIsResourcesOpen(false)}
                          >
                            <div className="flex-shrink-0 mt-1">
                              <item.icon className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-bold text-gray-900 mb-0.5 group-hover:text-[#4A90E2] transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/agency"
                className="text-black hover:text-[#4A90E2] transition-colors text-sm font-medium"
              >
                For Agencies
              </Link>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-2.5">

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-2.5">

              {/* Login Button */}
              <Link href="/login" className="hover:opacity-80 transition-opacity">
                <div className="relative w-16 h-8">
                  <OptimizedImage
                    src="/img/login_button.svg"
                    alt="Login"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>

              {/* Start Free Button */}
              <button className="mt-1">
                <div className="relative w-24 h-9">
                  <OptimizedImage
                    src="/img/blue_button_2.svg"
                    alt="Start Free"
                    className="w-full h-full object-contain"
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
                  {/* Mobile Services Dropdown */}
                  <div className="w-full">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="text-black hover:text-[#4A90E2] transition-colors text-base font-medium py-2 border-b border-white/20 w-full flex items-center justify-center gap-2"
                    >
                      Services
                    </button>
                    {isServicesOpen && (
                      <div className="mt-2 space-y-2 pl-4">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            onClick={closeMenu}
                            className="flex items-start gap-3 py-2 text-sm text-black hover:text-[#4A90E2] transition-colors"
                          >
                            <div className="flex-shrink-0 mt-1 bg-white/50 rounded p-1.5">
                              <service.icon className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">{service.title}</h4>
                              <p className="text-xs text-gray-500">{service.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <a
                    href="#"
                    onClick={closeMenu}
                    className="text-black hover:text-[#4A90E2] transition-colors text-base font-medium py-2 border-b border-white/20 w-full text-center"
                  >
                    Pricing
                  </a>

                  {/* Mobile Resources Dropdown */}
                  <div className="w-full">
                    <button
                      onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                      className="text-black hover:text-[#4A90E2] transition-colors text-base font-medium py-2 border-b border-white/20 w-full flex items-center justify-center gap-2"
                    >
                      Resources
                    </button>
                    {isResourcesOpen && (
                      <div className="mt-2 space-y-4 pl-4">
                        {/* Support Line Section */}
                        <div>
                          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Support Line</h3>
                          <div className="space-y-2">
                            {supportLine.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                onClick={closeMenu}
                                className="flex items-start gap-3 py-2 text-sm text-black hover:text-[#4A90E2] transition-colors"
                              >
                                <div className="flex-shrink-0 mt-1 bg-white/50 rounded p-1.5">
                                  <item.icon className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-sm">{item.title}</h4>
                                  <p className="text-xs text-gray-500">{item.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        {/* Learn & Grow Section */}
                        <div>
                          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Learn & Grow</h3>
                          <div className="space-y-2">
                            {learnAndGrow.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                onClick={closeMenu}
                                className="flex items-start gap-3 py-2 text-sm text-black hover:text-[#4A90E2] transition-colors"
                              >
                                <div className="flex-shrink-0 mt-1 bg-white/50 rounded p-1.5">
                                  <item.icon className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-sm">{item.title}</h4>
                                  <p className="text-xs text-gray-500">{item.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/blog"
                    onClick={closeMenu}
                    className="text-black hover:text-[#4A90E2] transition-colors text-base font-medium py-2 border-b border-white/20 w-full text-center"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/agency"
                    onClick={closeMenu}
                    className="text-black hover:text-[#4A90E2] transition-colors text-base font-medium py-2 border-b border-white/20 w-full text-center"
                  >
                    For Agencies
                  </Link>
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
                      <OptimizedImage
                        src="/img/login_button.svg"
                        alt="Login"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Link>

                  {/* Start Free */}
                  <button onClick={closeMenu} className="flex justify-center">
                    <div className="relative w-44 h-11">
                      <OptimizedImage
                        src="/img/blue_button_2.svg"
                        alt="Start Free"
                        className="w-full h-full object-contain"
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
