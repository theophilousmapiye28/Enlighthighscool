
"use client"
import React from 'react'

import Navbar from '../Components/Navbar';
import Link from 'next/link';
import WeekendL from '@/app/Components/WeekendL'
import Holiday from '@/app/Components/Holiday'
import  Elearnin from '@/app/Components/Elearnin'
import Partnerss from '../Components/Partnerss';
import Footer  from "@/app/Components/Footer";


const page = () => {
  return (
    <div >
      <div className=''>
     
      <Navbar/>
      </div> 
      {/* Overlay Content */}
      <div className=" inset-0 flex flex-col    h-[58vh] text-white p-4 md:p-6 bg-black/80 gradient">
      <div className='pl-10 pt-10'>
              <h2 className="text-3xl md:text-6xl font-black mb-2 md:mb-4"> Explorer     Our 

                 <span className="text-blue-600"> Programs </span>
              </h2>
              <p className="text-sm md:text-lg mb-4 md:mb-6">
              Engage with our structured  programs designed
 to  cater  to various  learning
 needs.

  
              </p>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <Link className="text-sm md:text-md bg-blue-950 border border-white text-white px-3 md:px-4 py-2 " href="/contact">
                  Learn More
                </Link>
                <Link className="text-sm md:text-md bg-white border-2 text-blue-950 px-3 md:px-4 py-2 " href="/contact">
                  Apply Now
                </Link>
                </div>
              </div>
            </div>
           
           
            <WeekendL/>

            <Holiday/>
           <Elearnin/>
           <Partnerss/>
            <Footer/>
    
    </div>
  )
}

export default page
