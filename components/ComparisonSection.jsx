import React from 'react';
import Image from 'next/image';

const ComparisonSection = () => {
  const comparisonData = [
    {
      title: 'Platform Coverage',
      rowImage: '/img/row.png',
    },
    {
      title: 'Takedown Success Rate',
      rowImage: '/img/row_2.png',
    },
    {
      title: 'Resolution Speed',
      rowImage: '/img/row_3.png',
    },
    {
      title: 'Deep Investigation',
      rowImage: '/img/row_4.png',
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 leading-tight">
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(15deg, rgba(119, 202, 223, 1) 0%, rgba(74, 185, 212, 1) 100%)'
              }}
            >
               
            </span>
              <span className="bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(15deg,rgba(46, 87, 97, 1) 0%, rgba(119, 202, 223, 1) 100%);'
              }}>Lock </span>
            {/* <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(141, 211, 228, 1) 0%, rgb(81 102 117 / 33%) 50%, rgba(74, 185, 212, 1) 100%)'
              }}
            > Leaked  
            </span> */}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(15deg, rgba(119, 202, 223, 1) 20%, rgba(46, 87, 97, 1) 80%)'
              }}
            > Leaks
            </span>
            <span className="text-[#1a1a1a]"> vs Others</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#1a1a1a] font-medium mt-2 italic">
            The Real Difference
          </p>
        </div>

        {/* Legend */}
        <div className="flex justify-end mb-6 lg:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-600 rounded"></div>
              <span className="text-xs sm:text-sm text-[#1a1a1a]">With others.</span>
            </div>
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded"
                style={{
                  background: 'linear-gradient(15deg, rgba(119, 202, 223, 1) 0%, rgba(74, 185, 212, 1) 100%)'
                }}
              ></div>
              <span className="text-xs sm:text-sm text-[#1a1a1a]">With Lock Leaks.</span>
            </div>
          </div>
        </div>

        {/* Comparison Bars */}
        <div className="space-y-4 mb-10 lg:mb-12 mx-auto w-full">
          {comparisonData.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-1 mt-0">
              {/* Row Image - Bar Chart */}
              <div className="flex-1 w-full sm:w-auto">
                <Image
                  src={item.rowImage}
                  alt={item.title}
                  width={500}
                  height={100}
                  className="w-full h-auto max-w-xl max-h-10"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center items-center">
          <button className="transition-transform hover:scale-105 active:scale-95">
            <Image
              src="/img/start_free_scan.svg"
              alt="Start Free Scan"
              width={300}
              height={80}
              className="w-36 sm:w-40 lg:w-44 h-auto"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

