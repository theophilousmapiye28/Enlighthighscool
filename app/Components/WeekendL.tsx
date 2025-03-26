import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import un1 from '@/public/Images/teachers.jpeg';
import un2 from '@/public/Images/Premium Photo _ Open book with Graduation hat on light bulb Education learning on school and university or idea concept 3d illustration.jpeg';
import un3 from '@/public/Images/Etxra lessons.jpeg';

const WeekendL = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 min-h-screen">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-blue-900 text-center">
        Weekend Learning Opportunities
      </h2>
      <p className="text-md sm:text-lg md:text-xl font-bold text-blue-950 text-center mt-2">
        Expand your knowledge with our weekend classes tailored for all levels.
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        
        {/* Card 1 - Foundation and Vision */}
        <div className="p-6 bg-blue-900 text-white rounded-xl flex flex-col items-center space-y-3 shadow-lg">
          <div className="relative w-[300px] h-[250px]">
            <Image src={un1} alt="Foundation and Vision" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-center">Diverse Curriculum</h2>
          <p className="text-sm md:text-base text-center">
    Our weekend classes cover a wide range of subjects , including mathematics sciences , langueges , and arts This diversity allows students to explore their interests and strengthen their 
    understanding in key areas . Each class is designed cater to different  learning styles ensuring that all students can thrive. Our experienced instructors are dedicated to providing  a supportive 
    and engaging learning environment.
          </p>
          <Link href="/contact">
            <button className="mt-3 px-4 py-2 border-2 border-orange-600 rounded-lg text-white font-semibold hover:bg-orange-700 transition w-full md:w-32 text-center">
              Learn More
            </button>
          </Link>
        </div>

        {/* Card 2 - Innovative Learning Approaches */}
        <div className="p-6 bg-blue-900 text-white rounded-xl flex flex-col items-center space-y-3 shadow-lg">
          <div className="relative w-[300px] h-[250px]">
            <Image src={un2} alt="Innovative Learning Approaches" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-center">Flexible Scheduling</h2>
          <p className="text-sm md:text-base text-center">
      Understanding the busy lives of our students , we offer flexible scheduling options for our weekend classes . Students can choose from Various time slots
      that best fit their availability .This flexible makes it easier for students to balance 
      their academic pursuits with other commitments . Our goal is to make learning accessible and convenient for everyone .  
          </p>
          <Link href="/contact">
            <button className="mt-3 px-4 py-2 border-2 border-orange-600 rounded-lg text-white font-semibold hover:bg-orange-700 transition w-full md:w-32 text-center">
              Learn More
            </button>
          </Link>
        </div>

        {/* Card 3 - Community Engagement */}
        <div className="p-6 bg-blue-900 text-white rounded-xl flex flex-col items-center space-y-3 shadow-lg">
          <div className="relative w-[300px] h-[250px]">
            <Image src={un3} alt="Community Engagement" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-center">Interactive Learnig</h2>
          <p className="text-sm md:text-base text-center">
Our weekend  classes emphasize interactive learning encouraging students to participate actively in discussions and hands-on activities 
This approach not only enhances understanding but also fosters critical thinking and problem -solving skills students are encouraged to collaborate with their peers ,
creating a dynamic learning atmosphere .we believe that active engagement is key to effective learning.
          </p>
          <Link href="/contact">
            <button className="mt-3 px-4 py-2 border-2 border-orange-600 rounded-lg text-white font-semibold hover:bg-orange-700 transition w-full md:w-32 text-center">
              Learn More
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default WeekendL;
