"use client"; // Ensure animations work in Next.js App Router

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/Images/group formal bun1.jpg";

const Aboutpoertential = () => {
  return (
    <div className="px-6 py-10">
      {/* Main Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:p-12">
        
        {/* Animated Image (Comes first on small screens) */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <Image
            className="drop-shadow-2xl rounded-lg shadow-orange-600 w-full max-w-[500px] md:max-w-[600px]"
            height={3000}
            width={1200}
            src={one}
            alt="Enlight High School"
          />
        </motion.div>

        {/* Text & Buttons Section */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6"
        >
          <h1 className="text-[20px] text-blue-900 drop-shadow-2xl font-black lg:text-[45px]">
            Unlock Your Potential at
            Enlight Institution High School
          </h1>
          <p className="text-[18px] text-blue-950 lg:text-[20px] font-bold">
            At Enlight Institution High School, we strive for academic excellence, 
            providing a supportive community and a wide range of extracurricular 
            opportunities to help you grow and succeed.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row w-full gap-4">
            <Link
              className="text-sm md:text-md bg-blue-900 shadow-xl text-white p-3 rounded-lg w-full md:w-32 text-center"
              href="/contact"
            >
              Learn More
            </Link>

            <Link
              className="text-sm md:text-md bg-white border shadow-xl border-blue-900 text-blue-900 p-3 rounded-lg w-full md:w-32 text-center"
              href="/contact"
            >
              Enroll Now
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutpoertential;
