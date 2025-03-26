"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import partner images
import part1 from "@/public/Images/hezo.jpeg";
import part2 from "@/public/Images/Cambridge real.png";
import part3 from "@/public/Partners/Zimsec.png";
import part4 from "@/public/Images/Logo.jpg";

// Partner images array for dynamic mapping
const partners = [part1, part2, part3, part4];

const Partnerss = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-[20px] text-blue-950 font-bold lg:text-[40px]">
          Partners for <span className="text-orange-600">Success</span> 
        </h2>
        <div className="h-1 w-32 md:w-[60vh] bg-blue-950 rounded-xl mx-auto mt-2"></div>
      </div>

      {/* Scrolling Carousel (Centered) */}
      <div className="relative w-[80%] max-w-[600px] overflow-hidden mt-8">
        <motion.div
          className="flex space-x-12 items-center"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          {partners.concat(partners).map((partner, index) => (
            <Image
              key={index}
              src={partner}
              alt={`Partner ${index + 1}`}
              height={90}
              width={90}
              className="drop-shadow-lg"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partnerss;
