import React from "react";
import CountUp from "react-countup";
import Image from "next/image";
import ico1 from "@/public/icons/students.png";
import ico2 from "@/public/icons/subjects.png";
import ico3 from "@/public/icons/activities.png";

const Count = () => {
  return (
    <div className="flex flex-wrap justify-center gap-12 md:gap-20 xl:gap-32 py-8 bg-blue-950 text-3xl font-bold">
      {/* Students Count */}
      <div className="flex flex-col items-center text-center">
        <Image height={40} src={ico1} alt="Students Icon" />
        <div className="text-white">
          <CountUp start={0} end={300} duration={2.5} />+
        </div>
        <h2 className="text-xl text-white">Students</h2>
        <div className="bg-orange-600 h-1 w-16 md:w-20 lg:w-40 mt-1"></div>
      </div>

      {/* Subjects Count */}
      <div className="flex flex-col items-center text-center">
        <Image height={40} src={ico2} alt="Subjects Icon" />
        <div className="text-white">
          <CountUp start={0} end={9} duration={2.5} />+
        </div>
        <h2 className="text-xl text-white">Subjects</h2>
        <div className="bg-orange-600 h-1 w-16 md:w-20 lg:w-40 mt-1"></div>
      </div>

      {/* Activities Count */}
      <div className="flex flex-col items-center text-center">
        <Image height={40} src={ico3} alt="Activities Icon" />
        <div className="text-white">
          <CountUp start={0} end={10} duration={2.5} />+
        </div>
        <h2 className="text-xl text-white">Activities</h2>
        <div className="bg-orange-600 h-1 w-16 md:w-20 lg:w-40 mt-1"></div>
      </div>
    </div>
  );
};

export default Count;
