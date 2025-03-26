"use client";
import React from 'react'
import Image from 'next/image';
import gate from '@/public/Images/Entrance.jpg'
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Vist from '@/app/Components/Vist'
import Contact from '@/app/Components/Contact'
import Footer from "@/app/Components/Footer";

const page = () => {
  return (
    <div>
      <div>
        <Header />
        <Navbar />
      </div>
      
      {/* Container for background image */}
      <div className="relative w-full h-[58vh]">
        <Image
          src={gate}
          alt="Entrance"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white p-4 md:p-6">
          <div className='pl-10 pt-10'>
            <h2 className="text-3xl md:text-6xl font-black mb-2 md:mb-4">
              Feel <span className="text-blue-600">Free</span> to Contact Us
            </h2>
            <p className="text-sm md:text-lg mb-4 md:mb-6">
              {/* You can add more content here if needed */}
            </p>
          </div>
        </div>
      </div>

      <Vist />
      <Contact />
      <Footer />
    </div>
  )
}

export default page;
