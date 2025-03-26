import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import un1 from '@/public/Images/teachers.jpeg'
import un2 from '@/public/Images/Premium Photo _ Open book with Graduation hat on light bulb Education learning on school and university or idea concept 3d illustration.jpeg'
import un3 from '@/public/Images/Etxra lessons.jpeg'

const Unmatched = () => {
  return (
    <div className='flex flex-col p-6 sm:p-12 space-x-2 space-y-6 min-h-[100vh] items-center justify-center'>
      <h2 className="text-[20px] font-black text-blue-900 lg:text-[50px]">
        Unmatched Educational Experience
      </h2>
      <p className='text-[18px] text-blue-950 lg:text-[20px] font-bold'>
        Explore the unique advantages of studying at Enlight High School.
      </p>

      <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12'>
        {/* Card 1 */}
        <div className='min-h-[50vh] w-full md:w-[50vh] space-y-3 p-6 flex flex-col items-center justify-center  border border-blue-900'>
          <Image height={200} width={300} src={un1} alt="Experienced Educators" />
          <h2 className="text-[20px] p-1 text-blue-900 font-bold lg:text-[20px]">
            Experienced Educators
          </h2>
          <p className='text-[18px] text-blue-950 lg:text-[18px] font-semibold'>
            Our team of experienced educators is committed to providing personalized instruction and mentorship, ensuring that every student receives the guidance they need to excel academically and personally.
          </p>
          <Link
            className="text-sm flex items-center justify-center md:text-md bg-blue-900 shadow-xl text-white p-3 w-full sm:w-32 rounded-lg"
            href="/contact"
          >
            Learn More
          </Link>
        </div>

        {/* Card 2 */}
        <div className='min-h-[50vh] w-full md:w-[50vh] space-y-3 p-6 flex flex-col items-center justify-center  border border-blue-900'>
          <Image height={200} width={300} src={un2} alt="Comprehensive Support" />
          <h2 className="text-[20px] p-1 text-blue-900 font-bold lg:text-[20px]">
            Comprehensive Support
          </h2>
          <p className='text-[18px] text-blue-950 lg:text-[18px] font-semibold'>
            We provide comprehensive support, including academic  counseling and access to additional resources, which fosters a nurturing environment for every student to thrive and succeed.
          </p>
          <Link
            className="text-sm flex items-center justify-center md:text-md bg-blue-900 shadow-xl text-white p-3 w-full sm:w-32 rounded-lg"
            href="/contact"
          >
            Learn More
          </Link>
        </div>

        {/* Card 3 */}
        <div className='min-h-[50vh] w-full md:w-[50vh] space-y-3 p-6 flex flex-col items-center justify-center border border-blue-900'>
          <Image height={200} width={300} src={un3} alt="Community Engagement" />
          <h2 className="text-[20px] p-1 text-blue-900 font-bold lg:text-[20px]">
            Community Engagement
          </h2>
          <p className='text-[18px] text-blue-950 lg:text-[18px] font-semibold'>
            Enlight High School emphasizes the importance of community engagement, encouraging students to participate in various extracurricular activities and community service, which helps to develop well-rounded individuals.
          </p>
          <Link
            className="text-sm flex items-center justify-center md:text-md bg-blue-900 shadow-xl text-white p-3 w-full sm:w-32 rounded-lg"
            href="/contact"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Unmatched;
