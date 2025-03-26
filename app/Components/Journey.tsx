import React from "react";
import Image from "next/image";
import Link from "next/link";
import un1 from "@/public/Images/journey.jpeg";
import un2 from "@/public/Images/Group bun2.jpg";
import un3 from "@/public/Images/Etxra lessons.jpeg";

const Journey = () => {
  return (
    <div className="flex flex-col p-6 md:p-12 space-y-6 min-h-screen items-center justify-center">
      {/* Heading */}
      <h2 className="text-xl md:text-3xl lg:text-5xl font-black text-blue-900 text-center">
        Our Journey in Education
      </h2>
      <p className="text-base md:text-lg lg:text-xl text-blue-950 font-bold text-center">
        Empowering Young Minds for a Brighter Future
      </p>

      {/* Grid Layout for Responsiveness */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl">
        {/* Card 1 */}
        <div className="min-h-[60vh] p-3 flex flex-col items-center justify-center border border-blue-900 rounded-lg shadow-md">
          <div className="relative w-[300px] h-[250px]">
            <Image src={un1} alt="Foundation and Vision" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mt-4">
            Foundation and Vision
          </h2>
          <p className="text-sm md:text-base text-blue-950 font-medium text-center mt-2">
            Enlight High School was founded to provide quality education
            accessible to all students, regardless of their backgrounds.
            We have grown into a vibrant learning community that values inclusivity
            and academic excellence.
          </p>
          <Link
            className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm md:text-md"
            href="/contact"
          >
            Learn More
          </Link>
        </div>

        {/* Card 2 */}
        <div className="min-h-[60vh] p-3 flex flex-col items-center justify-center border border-blue-900 rounded-lg shadow-md">
          <div className="relative w-[300px] h-[250px]">
            <Image src={un2} alt="Innovative Learning Approaches" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mt-4">
            Innovative Learning Approaches
          </h2>
          <p className="text-sm md:text-base text-blue-950 font-medium text-center mt-2">
            We embrace innovative methods that cater to diverse learning styles.
            Our curriculum engages students actively, utilizing technology and modern
            teaching approaches.
          </p>
          <Link
            className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm md:text-md"
            href="/contact"
          >
            Learn More
          </Link>
        </div>

        {/* Card 3 */}
        <div className="min-h-[60vh] p-3 flex flex-col items-center justify-center border border-blue-900 rounded-lg shadow-md">
          <div className="relative w-[300px] h-[250px]">
            <Image src={un3} alt="Community Engagement" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mt-4">
            Community Engagement
          </h2>
          <p className="text-sm md:text-base text-blue-950 font-medium text-center mt-2">
            We recognize the importance of community involvement in education,
            fostering partnerships with local organizations, parents, and alumni to
            create a holistic learning experience.
          </p>
          <Link
            className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm md:text-md"
            href="/contact"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journey;
