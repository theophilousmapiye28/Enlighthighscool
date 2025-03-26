"use client"; // Ensure animations work in Next.js App Router

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/Images/Doa-57.jpg";

const Christianity = () => {
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
            Christian Environment
          </h1>
          <hr className="h-2 w-16 bg-blue-900 mx-auto md:mx-0" />
          <p className="text-[18px] text-blue-950 lg:text-[20px] font-bold">
            Enlight High School plays a vital role in fostering a Christ-centered 
            environment for both students and teachers. Through dedication and service, 
            they ensure daily operations run smoothly while upholding Christian values. 
            Their commitment provides a nurturing, faith-driven learning experience, 
            ensuring that every aspect of school life reflects the principles of love, 
            integrity, and excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row w-full gap-4">
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

export default Christianity;
