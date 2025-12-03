import React from 'react';
import Image from 'next/image';

const ComparisonSection = () => {
  const comparisonData = [
    {
      title: 'Platform Coverage',
      rowImage: '/img/row.svg',
    },
    {
      title: 'Takedown Success Rate',
      rowImage: '/img/row_2.svg',
    },
    {
      title: 'Resolution Speed',
      rowImage: '/img/row_3.svg',
    },
    {
      title: 'Deep Investigation',
      rowImage: '/img/row_4.svg',
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold mb-2 leading-tight font-plus-jakarta">
              <span className="bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(15deg, rgb(49, 109, 124) 0%, rgb(154, 216, 231) 100%);'
              }}>Lock </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(15deg, rgb(138, 210, 227) 20%, rgb(49, 109, 124) 80%)'
              }}
            > Leaks
            </span>
            <span className="text-black"> vs Others</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-black font-bold mt-2 italic font-plus-jakarta">
            The Real Difference
          </p>
        </div>

        {/* Legend */}
        <div className="flex justify-end mb-6 lg:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <Image src="/img/black_dot.svg" alt="Black Dot" width={20} height={20} className="w-4 h-3 object-contain" />
              <span className="text-xs sm:text-sm text-black">With others.</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/img/blue_dot.svg" alt="Blue Dot" width={20} height={20} className="w-4 h-3 object-contain" />
              <span className="text-xs sm:text-sm text-black">With Lock Leaks.</span>
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
              className="w-36 sm:w-40 lg:w-40 h-auto"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

