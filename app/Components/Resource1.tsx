import React from "react";
import Image from "next/image";
import Link from "next/link";
import un1 from "@/public/Images/teachers.jpeg";
import un2 from "@/public/Images/Premium Photo _ Open book with Graduation hat on light bulb Education learning on school and university or idea concept 3d illustration.jpeg";
import un3 from "@/public/Images/Etxra lessons.jpeg";

const Resource1 = () => {
  return (
    <div className="flex flex-col p-6 md:p-12 space-y-6 min-h-screen items-center justify-center">
      {/* Heading */}
      <h2 className="text-xl md:text-3xl lg:text-5xl font-black text-blue-900 text-center">
        Learning Resources Hub
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl">
        {/* Card 1 - Study Guides */}
        <div className="min-h-[60vh] p-6 flex flex-col items-center justify-center border border-blue-900 rounded-lg shadow-md">
          <div className="relative w-[300px] h-[200px]">
            <Image src={un1} alt="Study Guides" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mt-4 text-center">
            Study Guides
          </h2>
          <p className="text-sm md:text-base text-blue-950 font-medium text-center mt-2">
            Our collection of study guides is designed to help students grasp key concepts
            and excel in their studies. These guides cover a wide range of subjects and are
            tailored to various learning styles, making them an invaluable resource.
          </p>
          <Link className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm md:text-md" href="/contact">
            Learn More
          </Link>
        </div>

        {/* Card 2 - Online Resources */}
        <div className="min-h-[60vh] p-6 flex flex-col items-center justify-center border border-blue-900 rounded-lg shadow-md">
          <div className="relative w-[300px] h-[200px]">
            <Image src={un2} alt="Online Resources" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mt-4 text-center">
            Online Resources
          </h2>
          <p className="text-sm md:text-base text-blue-950 font-medium text-center mt-2">
            We provide access to online resources such as interactive quizzes, video lectures, 
            and educational articles to support independent learning and reinforce knowledge.
          </p>
          <Link className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm md:text-md" href="/contact">
            Learn More
          </Link>
        </div>

        {/* Card 3 - Supplementary Materials */}
        <div className="min-h-[60vh] p-6 flex flex-col items-center justify-center border border-blue-900 rounded-lg shadow-md">
          <div className="relative w-[300px] h-[200px]">
            <Image src={un3} alt="Supplementary Materials" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mt-4 text-center">
            Supplementary Materials
          </h2>
          <p className="text-sm md:text-base text-blue-950 font-medium text-center mt-2">
            Additional resources such as recommended readings, practice exams, and exercises 
            help reinforce classroom learning and deepen students understanding of complex subjects.
          </p>
          <Link className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm md:text-md" href="/contact">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resource1;
