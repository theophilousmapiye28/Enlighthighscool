"use client"; // Ensure animations work in Next.js App Router

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/Images/InClassstudying bun3.jpg";

const Holiday = () => {
  return (
    <div className="px-6 py-10">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-[20px] font-black text-blue-900 lg:text-[50px]">
          <span className="text-orange-600"> Holiday </span> Learning Programs
        </h2>
        <p className="text-[18px] text-blue-950 lg:text-[20px] font-bold">
          Committed to Your Success
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:p-12">
        {/* Animated Image (Comes first on small screens) */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <Image
            className="drop-shadow-2xl rounded-lg shadow-blue-950 w-full max-w-[500px] md:max-w-[600px]"
            height={2000}
            width={900}
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
          <h1 className="text-[20px] text-blue-900 drop-shadow-2xl font-black lg:text-[50px]">
            Skills Enhancement
            <hr className="h-2 bg-blue-900 w-20 mx-auto md:mx-0 mt-2" />
          </h1>
          <p className="text-[18px] text-blue-950 lg:text-[20px] font-bold">
            Focused on skill enhancement, our holiday programs aim to strengthen students 
            existing knowledge while introducing new concepts. Whether its improving writing skills, 
            mastering mathematical concepts, or exploring scientific phenomena, our classes make 
            learning enjoyable and impactful. Students will return to school with renewed confidence 
            and knowledge.
          </p>

          {/* Button */}
          <Link
            className="text-sm md:text-md bg-white border shadow-xl border-blue-900 text-blue-900 p-3 rounded-lg w-full md:w-32 text-center"
            href="/contact"
          >
            Enroll Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Holiday;
