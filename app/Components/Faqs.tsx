import React, { useState } from 'react';

const Faqs = () => {
  // State to track the currently active question
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to handle click and toggle the active answer
  const handleToggle = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className='min-h-[80vh] flex flex-col space-y-10'>
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-[20px] font-black text-blue-900 lg:text-[50px]">
          Frequently Asked <span className="text-orange-600">Questions</span>
        </h2>
        <p className="text-[18px] text-blue-950 lg:text-[20px] font-bold">
          Your queries answered for a smoother experience
        </p>
      </div>

      <div className='flex flex-col space-y-11 items-center justify-center'>
        
        {/* Question 1 */}
        <div className='w-[90%] border border-blue-950'>
          <h2 
            className='text-[20px] font-bold text-blue-900 lg:text-[30px] cursor-pointer hover:text-orange-600 bg-blue-100 p-4 rounded-lg flex items-center justify-between'
            onClick={() => handleToggle(0)}
          >
            <span>What programs do you offer?</span>
            <span>{activeIndex === 0 ? '-' : '+'}</span>
          </h2>
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 0 ? 'max-h-[500px] p-4' : 'max-h-0 p-0'}`}
          >
            <p className='text-sm'>
              At Enlight High School, we offer a comprehensive range of educational programs from Form One
              to Form Six. Our curriculum includes night school classes, weekend classes, and holiday school sessions designed to
              cater to the diverse needs of our students. Additionally, we provide an e-learning platform that allows students to
              access lessons and materials at their convenience. Our goal is to make quality education accessible to all, regardless of their schedule.
            </p>
          </div>
        </div>

        {/* Question 2 */}
        <div className='w-[90%] border border-blue-950'>
          <h2 
            className='text-[20px] font-bold text-blue-900 lg:text-[30px] cursor-pointer hover:text-orange-600 bg-blue-100 p-4 rounded-lg flex items-center justify-between'
            onClick={() => handleToggle(1)}
          >
            <span>How do I enroll?</span>
            <span>{activeIndex === 1 ? '-' : '+'}</span>
          </h2>
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 1 ? 'max-h-[500px] p-4' : 'max-h-0 p-0'}`}
          >
            <p>
              Enrolling at Enlight High School is a straightforward process designed to be user-friendly. Prospective students
              can fill out an online application form available on our website. Once the application is submitted, our admissions
              team will review it and provide further instructions. We also encourage students to visit our campus for a tour or to
              attend our information sessions, where they can learn more about our programs and meet our dedicated staff.
            </p>
          </div>
        </div>

        {/* Question 3 */}
        <div className='w-[90%] border border-blue-950'>
          <h2 
            className='text-[20px] font-bold text-blue-900 lg:text-[30px] cursor-pointer hover:text-orange-600 bg-blue-100 p-4 rounded-lg flex items-center justify-between'
            onClick={() => handleToggle(2)}
          >
            <span>What are the class schedules?</span>
            <span>{activeIndex === 2 ? '-' : '+'}</span>
          </h2>
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 2 ? 'max-h-[500px] p-4' : 'max-h-0 p-0'}`}
          >
            <p>
              Our class schedules are designed to accommodate the busy lives of our students. We offer evening classes during weekdays,
              weekend classes, and intensive holiday sessions to ensure flexibility. Each programs schedule varies, so we recommend checking
              our website for the latest updates and specific timings. We aim to provide options that fit our students needs, ensuring that everyone has
              the opportunity to pursue their education without conflicts.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Faqs;
