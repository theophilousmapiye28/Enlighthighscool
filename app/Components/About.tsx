import React from "react";
import Image from "next/image";
import Icon from "@/public/Images/Component 24.png";
import vision from "@/public/Images/vision.svg";
import mission from "@/public/Images/Mission.svg";
import core from "@/public/Images/core vision.svg";

const About = () => {
  return (
    <div className="h-auto space-y-20 flex flex-col items-center justify-center p-6 sm:p-12">
      {/* Heading Section */}
      <div className="flex flex-col space-y-2 items-center justify-center">
        <h2 className="text-[20px] text-blue-950 text-center drop-shadow-xl font-bold lg:text-[35px]">
          About <span className="text-orange-600">Us</span>
        </h2>
        <div className="bg-orange-600 h-1 w-40 rounded-md"></div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Mission Statement Card */}
        <div className="flex flex-col items-center justify-center h-[380px] w-full sm:w-[280px] md:w-[320px] lg:w-[350px] rounded-xl border-2 border-blue-900 bg-white shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="border-2 flex items-center justify-center border-blue-900 h-24 w-24 rounded-full bg-white shadow-md"> <Image src={mission} height={50} width={50} alt="" /></div>
          <div className="h-[250px] w-full flex flex-col justify-center space-y-5 px-6 py-4 rounded-xl border bg-gradient-to-b from-blue-900 to-blue-700 shadow-md">
            <div className="flex flex-col items-center">
              <h3 className="text-[16px] text-white font-bold lg:text-[25px]">
                Mission Statement
              </h3>
              <div className="bg-orange-600 rounded-full h-1 w-16 mt-1"></div>
            </div>
            <p className="text-[12px] sm:text-[14px] text-white lg:text-[16px] font-medium text-center">
              Our mission is producing well-balanced citizens in a world-class learning environment.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="flex flex-col items-center justify-center h-[380px] w-full sm:w-[280px] md:w-[320px] lg:w-[350px] rounded-xl border-2 border-blue-900 bg-white shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="border-2 flex items-center justify-center border-blue-900 h-24 w-24 rounded-full bg-white shadow-md"> <Image src={vision} height={50} width={50} alt="" /></div>
          <div className="h-[250px] w-full flex flex-col justify-center space-y-5 px-6 py-4 rounded-xl border bg-gradient-to-b from-blue-900 to-blue-700 shadow-md">
            <div className="flex flex-col items-center">
              <h3 className="text-[16px] text-white font-bold lg:text-[25px]">
                Our Vision
              </h3>
              <div className="bg-orange-600 rounded-full h-1 w-16 mt-1"></div>
            </div>
            <p className="text-[12px] sm:text-[14px] text-white lg:text-[16px] font-medium text-center">
              Our vision is to empower students to acquire, demonstrate, articulate, and value knowledge and skills that will support them as lifelong learners.
            </p>
          </div>
        </div>

        {/* Core Values Card */}
        <div className="flex flex-col items-center justify-center h-[380px] w-full sm:w-[280px] md:w-[320px] lg:w-[350px] rounded-xl border-2 border-blue-900 bg-white shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="border-2 flex items-center justify-center border-blue-900 h-24 w-24 rounded-full bg-white shadow-md">
            <Image className="" src={core} height={40} width={40} alt="Core Values Icon" />
          </div>
          <div className="h-[250px] w-full flex flex-col justify-center space-y-5 px-6 py-4 rounded-xl border bg-gradient-to-b from-blue-900 to-blue-700 shadow-md">
            <div className="flex flex-col items-center">
              <h3 className="text-[16px] text-white font-bold lg:text-[25px]">
                Core Values
              </h3>
              <div className="bg-orange-600 rounded-full h-1 w-16 mt-1"></div>
            </div>
            <div className="space-y-3 text-white text-center text-[14px] lg:text-[16px] font-medium">
              <div className="flex items-center space-x-3 justify-center">
                <Image src={Icon} height={20} width={20} alt="Excellence Icon" />
                <span>Excellence</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <Image src={Icon} height={20} width={20} alt="Good Corporate Standards Icon" />
                <span>Good Corporate Standards</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <Image src={Icon} height={20} width={20} alt="Christian Standards Icon" />
                <span>Christian Standards</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <Image src={Icon} height={20} width={20} alt="Ubuntu Icon" />
                <span>Ubuntu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
