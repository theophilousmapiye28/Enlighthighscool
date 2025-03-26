"use client";
import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import Count from "../Components/Count";
import Aboutpoertential from "@/app/Components/Aboutpoertential";
import Journey from "@/app/Components/Journey";
import Aboutteachers from "@/app/Components/Aboutteachers";
import Christianity from "@/app/Components/Christianity";
import Footer from "@/app/Components/Footer";

const Page = () => {
  return (
    <div>
      {/* Header and Navbar */}
      <Header />
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col h-[58vh] text-white p-6 bg-orange-600/80 gradient">
        <div className="pt-10 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-black mb-4">
            About <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-sm md:text-lg mb-6">
            We offer a range of programs to support our students in their academic and personal growth.
            Our dedicated counseling team provides guidance and support to help students navigate their educational journey.
            Our tutoring programs enhance learning and provide additional academic support.
            In addition, we offer a variety of extracurricular programs to encourage students to explore their interests and develop new skills.
          </p>

          {/* Buttons - Full Width on Small Screens */}
          <div className="flex flex-col md:flex-row gap-3">
            <Link className="text-sm md:text-md bg-blue-950 border border-white text-white px-4 py-2 text-center w-full md:w-auto" href="/contact">
              Learn More
            </Link>
            <Link className="text-sm md:text-md bg-white border-2 text-blue-950 px-4 py-2 text-center w-full md:w-auto" href="/contact">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Count />
      <Aboutpoertential />
      <Journey />
      <Aboutteachers />
      <Christianity />
      <Footer />
    </div>
  );
};

export default Page;
