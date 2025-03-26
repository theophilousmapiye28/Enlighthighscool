

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import un1 from '@/public/Images/Active sports d.jpg';
import un2 from '@/public/Images/Fashion.jpg';
import un3 from '@/public/Images/Food.jpg';

const Resource2 = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 min-h-screen">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-blue-900 text-center">
      Diverse    More
      </h2>
      <p className="text-md sm:text-lg md:text-xl font-bold text-blue-950 text-center mt-2">
      Engage with our structured Practical designed to cater to various learning needs.
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        
        {/* Card 1 - Foundation and Vision */}
        <div className="p-6 bg-blue-950 text-white rounded-xl flex flex-col items-center space-y-3 shadow-lg">
          <Image height={200} width={400} src={un1} alt="Foundation and Vision" className="rounded-md" />
          <h2 className="text-lg md:text-xl font-bold text-center">Active Sports</h2>
          <p className="text-sm md:text-base text-center">
          Our sports activities program offers a wide range of physical exercises and team games designed to promote fitness, teamwork, and discipline. Students can participate in various sports, including soccer, basketball, athletics, and more, allowing them to develop their skills and explore their interests. Each activity is structured to accommodate different fitness levels, ensuring that everyone can engage and thrive. Our 
          experienced coaches create a supportive and motivating environment to help students excel in their chosen sports.


          </p>
          <Link href="/contact">
            <button className="mt-3 px-4 py-2 bg-blue-950 border-2 border-orange-600 rounded-lg text-white font-semibold hover:bg-orange-700 transition w-full md:w-32 text-center">
              Learn More
            </button>
          </Link>
        </div>

        {/* Card 2 - Innovative Learning Approaches */}
        <div className="p-6 bg-blue-950 text-white rounded-xl flex flex-col items-center space-y-3 shadow-lg">
          <Image height={200} width={400} src={un2} alt="Innovative Learning Approaches" className="rounded-md" />
          <h2 className="text-lg md:text-xl font-bold text-center">Fashion and Fabrics</h2>
          <p className="text-sm md:text-base text-center">
          Our fashion and fabrics classes provide a deep understanding of clothing design, textile selection, and garment construction. Covering essential topics such as sewing techniques, pattern-making, and fabric care, these classes help learners develop practical skills in fashion design and tailoring. Each session is designed to accommodate different learning styles, ensuring that all participants gain valuable knowledge. Our experienced instructors create an 
          engaging and supportive environment to enhance creativity and technical expertise in the field of fashion.
          </p>
          <Link href="/contact">
            <button className="mt-3 px-4 py-2 bg-blue-950 border-2 border-orange-600 rounded-lg text-white font-semibold hover:bg-orange-700 transition w-full md:w-32 text-center">
              Learn More
            </button>
          </Link>
        </div>

        {/* Card 3 - Community Engagement */}
        <div className="p-6 bg-blue-950 text-white rounded-xl flex flex-col items-center space-y-3 shadow-lg">
          <Image height={200} width={400} src={un3} alt="Community Engagement" className="rounded-md" />
          <h2 className="text-lg md:text-xl font-bold text-center">Food And Nutrition</h2>
          <p className="text-sm md:text-base text-center">
         
          Our food and nutrition classes provide a comprehensive understanding of healthy eating, meal preparation, and dietary balance. Covering essential topics such as meal planning, food safety, and nutrition science, these classes help learners develop practical cooking skills and make informed dietary choices. Each session is designed to accommodate different learning styles, ensuring that all participants gain valuable knowledge.
           Our experienced instructors create an engaging and supportive environment to enhance the learning experience
          </p>
          <Link href="/contact">
            <button className="mt-3 px-4 py-2 bg-blue-950 border-2 border-orange-600 rounded-lg text-white font-semibold hover:bg-orange-700 transition w-full md:w-32 text-center">
              Learn More
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Resource2;
