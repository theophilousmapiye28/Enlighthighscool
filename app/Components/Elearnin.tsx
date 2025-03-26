import React from "react";
import Image from "next/image";
import Link from "next/link";
import un1 from "@/public/Images/Etxra lessons.jpeg";
import un2 from "@/public/Images/Premium Photo _ Open book with Graduation hat on light bulb Education learning on school and university or idea concept 3d illustration.jpeg";
import un3 from "@/public/Images/Senior citizens at an adult literary class in….jpeg";

const Elearnin = () => {
  return (
    <div className="flex flex-col p-6 md:p-12 space-y-6 min-h-screen items-center justify-center">
      {/* Heading */}
      <h2 className="text-xl md:text-3xl lg:text-5xl font-black text-blue-900 text-center">
        <span className="text-orange-600">Online</span>  Learning Excellence
      </h2>
      <p className="text-base md:text-lg lg:text-xl text-blue-950 font-bold text-center">
        Discover the flexibility of our e-learning programs tailored for all students.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl">
        {/* Card 1 - Extra Lessons */}
        <div className="min-h-[60vh] p-6 flex flex-col items-center justify-center border border-blue-900 rounded-lg shadow-md">
          <div className="relative w-[300px] h-[200px]">
            <Image src={un1} alt="Comprehensive Extra Lessons" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mt-4 text-center">
            Comprehensive Extra Lessons
          </h2>
          <p className="text-sm md:text-base text-blue-950 font-medium text-center mt-2">
            Our extra lessons cover mathematics, sciences, languages, and arts.
            They help students reinforce key concepts, improve understanding, and
            explore their interests in a focused learning environment.
          </p>
          <Link className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm md:text-md" href="/contact">
            Learn More
          </Link>
        </div>

        {/* Card 2 - 24/7 Accessibility */}
        <div className="min-h-[60vh] p-6 flex flex-col items-center justify-center border border-blue-900 rounded-lg shadow-md">
          <div className="relative w-[300px] h-[200px]">
            <Image src={un2} alt="24/7 Accessibility" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mt-4 text-center">
            24/7 Accessibility
          </h2>
          <p className="text-sm md:text-base text-blue-950 font-medium text-center mt-2">
            Our weekend classes cover a wide range of subjects, allowing students
            to strengthen their understanding in key areas. Our experienced
            instructors ensure a supportive and engaging learning experience.
          </p>
          <Link className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm md:text-md" href="/contact">
            Learn More
          </Link>
        </div>

        {/* Card 3 - Adult Learning */}
        <div className="min-h-[60vh] p-6 flex flex-col items-center justify-center border border-blue-900 rounded-lg shadow-md">
          <div className="relative w-[300px] h-[200px]">
            <Image src={un3} alt="Adult Learning" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mt-4 text-center">
            Adult Learning
          </h2>
          <p className="text-sm md:text-base text-blue-950 font-medium text-center mt-2">
            Learning has no age limit. Our e-learning program welcomes older
            adults who want to expand their knowledge and engage in an interactive
            online community with supportive instructors and fellow learners.
          </p>
          <Link className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm md:text-md" href="/contact">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Elearnin;
