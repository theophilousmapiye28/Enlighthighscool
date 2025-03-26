"use client"; // Ensure animations work in Next.js App Router

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/Images/group formal bun1.jpg";

const Homeportencial = () => {
  return (
    <div className="flex flex-col lg:flex-row p-5 sm:p-12 space-x-0 lg:space-x-10 h-auto items-center justify-center overflow-hidden">
      {/* Animated Text Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when it enters the viewport
        initial={{ opacity: 0, y: 50 }} // Start hidden, move up
        transition={{ duration: 1.6, ease: "easeOut" }} // Smooth transition
        className="flex flex-col space-y-8 sm:space-y-16"
      >
        <h1 className="text-[20px] text-blue-900 drop-shadow-2xl font-black lg:text-[50px]">
          Discover Excellence at Enlight High School
        </h1>
        <p className="text-[18px] text-blue-950 lg:text-[20px] font-bold">
          At Enlight High School, we strive to provide a nurturing environment where
          students can excel academically and personally.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            className="text-sm flex items-center justify-center md:text-md bg-blue-900 shadow-xl text-white p-3 w-full sm:w-32 rounded-lg"
            href="/contact"
          >
            Learn More
          </Link>

          <Link
            className="text-sm flex items-center justify-center md:text-md bg-white border shadow-xl border-blue-900 text-blue-900 p-3 w-full sm:w-32 rounded-lg"
            href="/contact"
          >
            Enroll Now
          </Link>
        </div>
      </motion.div>

      {/* Animated Image */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when it enters the viewport
        initial={{ opacity: 0, y: -50 }} // Start hidden, move down
        transition={{ duration: 1.2, ease: "easeOut" }} // Smooth transition
        className="mt-8 lg:mt-0"
      >
        <Image
          className="drop-shadow-2xl rounded-lg shadow-blue-950"
          height={900}
          width={900}
          src={one}
          alt="Enlight High School"
        />
      </motion.div>
    </div>
  );
};

export default Homeportencial;
