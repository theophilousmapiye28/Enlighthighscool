import React from "react";
import Image from "next/image";
import Link from "next/link";
import un1 from "@/public/Images/Entrance.jpg";
import un2 from "@/public/Images/Premium Photo _ Open book with Graduation hat on light bulb Education learning on school and university or idea concept 3d illustration.jpeg";
import un3 from "@/public/Images/Human Fondness, Faith in Machines Grows During Pandemic - Neuroscience News.jpeg";

const Vist = () => {
  return (
    <div className="flex flex-col p-6 md:p-12 space-y-6 min-h-screen items-center justify-center text-center">
      <h2 className="text-xl md:text-3xl lg:text-5xl font-black text-blue-900">Visit Us</h2>
      <p className="text-base md:text-lg lg:text-xl text-blue-950 font-bold">
        Connecting with Enlight Institution
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl">
        {/* Card 1 - Our Location */}
        <div className="min-h-[60vh] p-6 flex flex-col items-center justify-center border border-blue-900 rounded-lg shadow-md">
          <div className="relative w-[300px] h-[200px]">
            <Image src={un1} alt="Our Location" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mt-4">Our Location</h2>
          <p className="text-sm md:text-base text-blue-950 font-medium mt-2">
            Enlight High School is centrally located, making it easily accessible
            for students and parents. Visit our campus to explore the vibrant
            learning environment we provide.
          </p>
          <Link className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm md:text-md" href="/contact">
            Learn More
          </Link>
        </div>

        {/* Card 2 - Business Hours */}
        <div className="min-h-[60vh] p-6 flex flex-col items-center justify-center border border-blue-900 rounded-lg shadow-md">
          <div className="relative w-[300px] h-[200px]">
            <Image src={un2} alt="Business Hours" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mt-4">Business Hours</h2>
          <p className="text-sm md:text-base text-blue-950 font-medium mt-2">
            We are open Monday to Friday, 8 AM to 5 PM, with weekend classes
            available. During holidays, we provide specialized sessions.
          </p>
          <Link className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm md:text-md" href="/contact">
            Learn More
          </Link>
        </div>

        {/* Card 3 - Contact Form */}
        <div className="min-h-[60vh] p-6 flex flex-col items-center justify-center border border-blue-900 rounded-lg shadow-md">
          <div className="relative w-[300px] h-[200px]">
            <Image src={un3} alt="Contact Form" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-blue-900 mt-4">Contact Form</h2>
          <p className="text-sm md:text-base text-blue-950 font-medium mt-2">
            Fill out our contact form for inquiries. Our team will respond
            promptly to address your concerns in a timely manner.
          </p>
          <Link className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm md:text-md" href="/contact">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vist;
