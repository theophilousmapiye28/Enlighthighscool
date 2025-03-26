"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import co1 from "@/public/Images/InClassstudying bun3.jpg";
import co2 from "@/public/Images/weekend free schedule.jpeg";
import co3 from "@/public/Images/Sportsware.jpg";

const Carouselhome1 = () => {
  return (
    <div className='flex p-5 sm:p-12 space-x-2 space-y-4 h-auto'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 110000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full drop-shadow-2xl"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row  space-x-5">
            <Image height={600} width={600} src={co1} alt="Education" />
            <div className="space-y-6 lg:space-y-10 flex flex-col text-center lg:text-left">
              <h2 className="text-[20px] text-blue-900 font-bold lg:text-[50px]">
                Empowering Education
              </h2>
              <p className="text-[18px] text-blue-950 lg:text-[20px] font-black">
                At Enlight High School, we believe in empowering every student to reach their full potential. 
                Our dedicated educators provide tailored support to foster a love for learning.
              </p>
              <Link
                className="text-sm flex items-center justify-center sm:justify-start md:text-md bg-blue-900 text-white p-3 w-full sm:w-auto rounded-lg"
                href="/contact"
              >
                Learn More
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center space-x-5">
            <Image height={600} width={600} src={co2} alt="E-Learning" />
            <div className="space-y-6 lg:space-y-10 flex flex-col text-center lg:text-left">
              <h2 className="text-[20px] text-blue-900 font-black lg:text-[50px]">
                Innovative E-Learning
              </h2>
              <p className="text-[18px] text-blue-950 lg:text-[20px] font-bold">
                Our state-of-the-art e-learning platform allows students to engage with course materials anytime, anywhere, 
                promoting a self-directed and interactive learning experience.
              </p>
              <Link
                className="text-sm flex items-center justify-center sm:justify-start md:text-md bg-blue-900 text-white p-3 w-full sm:w-auto rounded-lg"
                href="/contact"
              >
                Learn More
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center space-x-5">
            <Image height={600} width={600} src={co3} alt="Flexible Learning" />
            <div className="space-y-6 lg:space-y-10 flex flex-col text-center lg:text-left">
              <h2 className="text-[20px] text-blue-900 font-black lg:text-[50px]">
                Flexible Learning Options
              </h2>
              <p className="text-[18px] text-blue-950 lg:text-[20px] font-bold">
                We offer flexible learning options, including night and weekend classes, ensuring that 
                education is accessible to all students, regardless of their schedules.
              </p>
              <Link
                className="text-sm flex items-center justify-center sm:justify-start md:text-md bg-blue-900 text-white p-3 w-full sm:w-auto rounded-lg"
                href="/contact"
              >
                Learn More
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carouselhome1;
