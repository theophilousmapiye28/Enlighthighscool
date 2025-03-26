"use client"; // Ensure animations work in Next.js App Router

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/Images/teachers.jpeg";

const Aboutteachers = () => {
  return (
    <div className="p-6 md:p-12">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-5xl font-black text-blue-900">
          Dedicated <span className="text-orange-600">Educators</span> and Staff
        </h2>
        <p className="text-lg lg:text-xl font-bold text-blue-950 mt-2">
          Committed to Your Success
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 mt-8 md:mt-12">
        {/* Text Content */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="flex flex-col space-y-6 md:space-y-10 text-center md:text-left"
        >
          <h1 className="text-2xl lg:text-4xl font-black text-blue-900">
            Experienced Faculty
          </h1>
          <div className="bg-orange-600 h-1 w-40 mx-auto md:mx-0"></div>

          <p className="text-lg lg:text-xl font-bold text-blue-950">
            Our team of educators comprises highly qualified professionals with <br />
             extensive experience  in their respective fields.
            They are passionate about teaching <br /> and dedicated to inspiring students  to reach their full potential. <br />
            With ongoing professional development, our faculty stays updated on the <br /> latest educational practices to enhance classroom learning.
          </p>

          {/* Call-to-Action Button */}
          <div className="flex justify-center md:justify-start">
            <Link
              className="text-sm md:text-md bg-white border shadow-xl border-blue-900 text-blue-900 px-4 py-2 w-full sm:w-32 text-center rounded-lg"
              href="/contact"
            >
              Enroll Now
            </Link>
          </div>
        </motion.div>

        {/* Animated Image */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            className="drop-shadow-2xl rounded-lg shadow-blue-950 w-full md:w-[450px] lg:w-[600px]"
            src={one}
            alt="Enlight High School"
            width={900}
            height={700}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutteachers;
