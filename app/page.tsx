"use client"; // Ensure this runs on the client side

import React from "react";
import Header from '@/app/Components/Header';
import Navbar from "./Components/Navbar";
import Homeportencial from "./Components/Homeportencial";
import Carouselhome1 from "./Components/Carouselhome1";
import About from "./Components/About";
import Unmatched from "./Components/Unmatched";
import Testimonials from "./Components/Testimonials";
import Partnerss from "./Components/Partnerss";
import Footer from "./Components/Footer";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/Images/Group bun2.jpg";



// Import Images

  

const Page = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="">

{/* Main Content Section */}
<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:p-12">
        

        {/* Text & Buttons Section */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6"
        >
          <h1 className="text-[20px] text-blue-900 drop-shadow-2xl font-black lg:text-[50px]">
          Empowering <span className="text-orange-600">Future</span> Leaders
            <hr className="h-2 bg-blue-900 w-20 mx-auto md:mx-0 mt-2" />
          </h1>
          <p className="text-[18px] text-blue-950 lg:text-[20px] font-bold">
          Join a learning environment designed to help students excel 
                with modern educational tools, dedicated teachers, and 
                an engaging curriculum.

          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-6">
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
      </div>



      </div>
     
        
       
          
          
          
     
      <About />
      <Homeportencial />
      <Unmatched />
      <Carouselhome1 />
      <Testimonials />
      <Partnerss />
      <Footer />
    </div>
  );
};

export default Page;
