"use client";
import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Gem, Shield } from "lucide-react";
import { getAllBlogs } from "@/data/blogData";

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Get all blogs from shared data source
  const blogs = getAllBlogs();

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Calculate counts for each category
  const categoryCounts = useMemo(() => {
    return {
      all: blogs.length,
      partners: blogs.filter(blog => blog.category === "partners").length,
      antidetect: blogs.filter(blog => blog.category === "antidetect").length,
    };
  }, [blogs]);

  // Tab data with dynamic counts
  const tabs = [
    { id: "all", label: "View All", count: categoryCounts.all, icon: Sparkles },
    { id: "partners", label: "Partners", count: categoryCounts.partners, icon: Gem },
    { id: "antidetect", label: "Antidetect", count: categoryCounts.antidetect, icon: Shield },
  ];

  // Filter blogs based on active tab
  const filteredBlogs = activeTab === "all" 
    ? blogs 
    : blogs.filter(blog => blog.category === activeTab);

  // Calculate total pages based on filtered blogs
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Reset to page 1 when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Get current page blogs
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  return (
    <section className="w-full bg-white pt-32 sm:pt-40 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-4 sm:mb-6 font-plus-jakarta">
            Lock Leaks Blog
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#5C5C5C] max-w-3xl mx-auto leading-relaxed font-plus-jakarta">
            Welcome to Lock Leaks blog! Dive into our latest updates and discover tips to enhance your content protection experience. Don't forget to subscribe for the latest insights!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentPage(1); // Reset to first page when changing tab
                }}
                className={`
                  flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full
                  transition-all duration-200 font-plus-jakarta shadow-sm
                  ${
                    isActive
                      ? "bg-[#4A90E2] text-white shadow-md"
                      : "bg-[#F5F5F5] text-[#2C2C2C] hover:bg-[#E5E5E5]"
                  }
                `}
              >
                <IconComponent 
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    isActive 
                      ? "text-white" 
                      : tab.id === "all" 
                        ? "text-[#4A90E2]" 
                        : "text-[#2C2C2C]"
                  }`} 
                  strokeWidth={2}
                  fill={tab.id === "all" && !isActive ? "currentColor" : "none"}
                />
                <span className="text-sm sm:text-base font-medium">
                  {tab.label}
                </span>
                <span className={`
                  text-xs sm:text-sm font-semibold px-2 py-0.5 rounded-full
                  ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#E0E0E0] text-[#2C2C2C]"
                  }
                `}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {currentBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer block"
            >
              {/* Blog Image */}
              <div className="relative w-full aspect-video bg-[#1A1A1A] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Blog Content */}
              <div className="p-4 sm:p-6">
                {/* Date */}
                <p className="text-xs sm:text-sm text-[#9E9E9E] mb-2 font-plus-jakarta">
                  {blog.date}
                </p>

                {/* Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2C2C2C] mb-2 sm:mb-3 line-clamp-2 font-plus-jakarta">
                  {blog.title}
                </h2>

                {/* Description - 2 lines */}
                <p className="text-sm sm:text-base text-[#5C5C5C] line-clamp-2 leading-relaxed font-plus-jakarta">
                  {blog.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-[#E0E0E0]">
          <div className="text-sm sm:text-base text-[#2C2C2C] font-plus-jakarta">
            Page {currentPage}/{totalPages || 1}
          </div>
          
          <div className="flex items-center gap-3">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage <= 1}
              className={`
                px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg
                font-medium text-sm sm:text-base font-plus-jakarta
                transition-all duration-200
                ${
                  currentPage <= 1
                    ? "bg-[#E0E0E0] text-[#9E9E9E] cursor-not-allowed"
                    : "bg-[#4A90E2] text-white hover:bg-[#3A7BC8] shadow-md hover:shadow-lg"
                }
              `}
            >
              Previous
            </button>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage >= totalPages}
              className={`
                px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg
                font-medium text-sm sm:text-base font-plus-jakarta
                transition-all duration-200
                ${
                  currentPage >= totalPages
                    ? "bg-[#E0E0E0] text-[#9E9E9E] cursor-not-allowed"
                    : "bg-[#4A90E2] text-white hover:bg-[#3A7BC8] shadow-md hover:shadow-lg"
                }
              `}
            >
              Next
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;

