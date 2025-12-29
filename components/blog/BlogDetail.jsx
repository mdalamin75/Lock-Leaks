"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, Share2, Copy } from "lucide-react";
import { getBlogById, getAllBlogs } from "@/data/blogData";

const BlogDetail = ({ blogId }) => {
  // Get blog data dynamically based on ID
  const blog = getBlogById(blogId);

  // If blog not found, show error or redirect
  if (!blog) {
    return (
      <section className="w-full bg-white pt-32 sm:pt-40 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 font-plus-jakarta">
            Blog Post Not Found
          </h1>
          <p className="text-base sm:text-lg text-[#5C5C5C] mb-8 font-plus-jakarta">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-[#4A90E2] text-white px-6 py-3 rounded-lg hover:bg-[#3A7BC8] transition-colors font-plus-jakarta"
          >
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  // Use blog content from data, ensure it exists
  const blogContent = blog.content || [];

  // Get latest blogs (exclude current blog, get first 8)
  const allBlogs = getAllBlogs();
  const latestBlogs = allBlogs
    .filter(b => b.id !== blog.id)
    .slice(0, 8);

  return (
    <>
      <section className="w-full bg-white pt-32 sm:pt-40 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Bar - Back link on left, Date/Views on right */}
          <div>
              {/* Top Bar - Back link on left, Date/Views on right */}
              <div className="flex items-center justify-between mb-6">
                <Link 
                  href="/blog"
                  className="inline-flex items-center gap-2 text-black hover:text-[#4A90E2] text-sm sm:text-base font-plus-jakarta"
                >
                  ← Back to blog
                </Link>
              </div>
              <div className="text-center max-w-4xl mx-auto mb-16">
                {/* Date and Views - Top Right */}
                <div className="flex items-center justify-center gap-2 text-sm text-black font-plus-jakarta font-bold mb-5">
                  <span className="border-2 border-gray-300 px-2 py-1 rounded-md font-bold">{blog.date}</span>
                  <Eye className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-400">{blog.views}</span>
                </div>
                {/* Main Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 font-plus-jakarta leading-tight">
                  {blog.title}
                </h1>

                {/* Introductory Paragraph */}
                <p className="text-base sm:text-lg md:text-xl text-[#5C5C5C] mb-8 leading-relaxed font-plus-jakarta">
                  {blog.intro}
                </p>
              </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Main Content Area - Left Column (2/3 width) */}
            <div className="lg:col-span-2">

              {/* Large Embedded Image */}
              <div className="relative w-full aspect-video bg-[#1A1A1A] rounded-lg overflow-hidden mb-8">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                />
              </div>

              {/* Blog Content */}
              <div className="prose prose-lg max-w-none font-plus-jakarta">
                {blogContent.map((section, index) => {
                  if (section.type === "heading") {
                    return (
                      <h2 key={index} className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-8 mb-4 font-plus-jakarta">
                        {section.text}
                      </h2>
                    );
                  } else if (section.type === "list") {
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-base sm:text-lg text-[#5C5C5C]">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="leading-relaxed">
                            <strong>{item.split(':')[0]}:</strong>
                            {item.includes(':') ? item.split(':').slice(1).join(':') : ''}
                          </li>
                        ))}
                      </ul>
                    );
                  } else {
                    return (
                      <p key={index} className="text-base sm:text-lg text-[#5C5C5C] mb-6 leading-relaxed">
                        {section.text}
                      </p>
                    );
                  }
                })}
              </div>

              {/* Author Section */}
              <div className="flex items-center gap-4 mt-12 pt-8 border-t border-[#E0E0E0]">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="font-bold text-black text-base sm:text-lg font-plus-jakarta">
                    {blog.author.name}
                  </p>
                  <p className="text-sm sm:text-base text-[#9E9E9E] font-plus-jakarta">
                    {blog.author.role}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-black hover:text-[#4A90E2] cursor-pointer">
                  <Copy className="w-4 h-4" />
                  <span className="text-sm font-plus-jakarta">Copy Link</span>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Promotional Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-32 border border-[#D4D4D8]">
                {/* Profile Card */}
                <div className="flex flex-row items-center justify-center text-center mb-6 gap-5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 bg-white border border-blue-600 p-10 shadow-md">
                    <Image
                      src="/img/blog/alice_profile.svg"
                      alt="Alice"
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="text-left">
                  <p className="font-bold text-black text-lg font-plus-jakarta">
                    Alice
                  </p>
                  <p className="text-sm text-[#9E9E9E] mb-4 font-plus-jakarta">
                    Manager at Lock Leaks
                  </p>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-[#18181B] mb-6 font-plus-jakarta">
                  Let's make sure your content's safe.
                </h3>

                {/* Service Description Box - Inset white box */}
                <div className="bg-white rounded-lg border border-[#E0E0E0] p-4 sm:p-5 mb-6 space-y-3">
                  <p className="text-base text-[#5C5C5C] font-plus-jakarta text-center">
                    Hey — I'm <span className="font-bold text-black">Alice </span> from <span className="font-bold text-black">Lock Leaks</span>
                  </p>
                  <p className="text-base text-[#5C5C5C] font-plus-jakarta">
                    We scan the <strong className="font-bold text-black">web 24/7</strong> to spot <strong className="font-bold text-black">leaks</strong> before they <strong className="font-bold text-black">spread</strong>.
                  </p>
                  <p className="text-base text-[#5C5C5C] font-plus-jakarta">
                    Get a <strong className="font-bold text-black">free</strong>, private <strong className="font-bold text-black">check</strong> in seconds — <strong className="font-bold text-black">no sign-up </strong> needed.
                  </p>
                </div>

                {/* CTA Button */}
                <button className="w-full">
                  {/* Check My Content for Leaks
                  <Sparkles className="w-5 h-5" /> */}
                  <img src="/img/blog/check_my_content.svg" alt="Check My Content for Leaks" />
                </button>

                {/* Social Proof */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {/* Three overlapping profile pictures */}
                    <div className="flex items-center -space-x-2 mr-3">
                      <div className="relative w-20 h-12 rounded-full overflow-hidden border-2 border-white">
                        <Image
                          src="/img/blog/image_group.svg"
                          alt="User 1"
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center gap-1">
                      <img src="/img/star_gold.svg" alt="start" />
                      <span className="ml-1 font-bold text-black text-base font-plus-jakarta">5.0</span>
                    </div>
                    <p className="text-sm underline text-[#9E9E9E] font-plus-jakarta">
                      Trusted by 20K+ creators & agencies.
                    </p>
                  </div>
                </div>

              </div>
                {/* Social Share Icons - Separate white box */}
                <div className="bg-white rounded-3xl shadow-lg border border-[#D4D4D8] p-3 mt-5 max-w-xs mx-auto">
                  <div className="flex items-center justify-center gap-4">
                    <a href="#" className="text-black hover:text-[#4A90E2] transition-colors">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-blue-600 hover:text-[#4A90E2] transition-colors">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-blue-800 hover:text-[#4A90E2] transition-colors">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-black hover:text-[#4A90E2] transition-colors flex items-center gap-1">
                      <Share2 className="w-7 h-7" />
                      <span className="text-sm font-plus-jakarta">Share</span>
                    </a>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Title and View All Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-3 font-plus-jakarta">
                Latest blog posts
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#5C5C5C] font-plus-jakarta">
                Tool and strategies modern teams need to help their companies grow.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-2.5 sm:py-3 border border-[#E0E0E0] rounded-lg text-black hover:bg-[#F5F5F5] transition-colors text-sm sm:text-base font-medium font-plus-jakarta whitespace-nowrap"
            >
              View all posts
            </Link>
          </div>

          {/* Blog Grid - 2 rows, 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {latestBlogs.map((latestBlog) => (
              <Link
                key={latestBlog.id}
                href={`/blog/${latestBlog.id}`}
                className="group cursor-pointer"
              >
                {/* Blog Image */}
                <div className="relative w-full aspect-video bg-[#1A1A1A] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={latestBlog.image}
                    alt={latestBlog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Blog Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black group-hover:text-[#4A90E2] transition-colors line-clamp-2 font-plus-jakarta">
                  {latestBlog.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
