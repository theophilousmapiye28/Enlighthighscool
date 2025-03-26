import React from 'react';
import Link from 'next/link';
import Lastf from './Lastf';
import Image from 'next/image';
import logo from '@/public/Images/Enlight logo white.png';
import fac from '@/public/icons/facebook.svg';
import fac2 from '@/public/icons/logos--whatsapp-icon (1).svg';

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white">
      {/* Footer Content */}
      <div className="container mx-auto py-10 px-8 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1  items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 w-full">

          {/* About Section */}
          <div className="pb-5">
           
            <p className="text-sm md:text-base leading-relaxed">
            <Image height={300} src={logo} alt="" />
            </p>
          </div>

          {/* Location & Contact */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg md:text-xl font-bold">Location</h2>
              <p className="text-sm">Kuwadzana <br /> Formerly West View Clinic</p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-bold">Contact Details</h2>
              <p className="text-sm">+263 77 304 8117</p>
              <p className="text-sm">enlighthighschool@gmail.com</p>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-lg md:text-xl font-bold">Follow Us</h2>
              <div className="flex space-x-4 mt-2">
                <Image height={40} width={40} src={fac} alt="Facebook" className="object-contain" />
                <Image height={40} width={40} src={fac2} alt="WhatsApp" className="object-contain" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-bold">Quick Links</h2>
            <div className="flex flex-wrap md:flex-col space-x-6 md:space-x-0 md:space-y-2">
              <Link className="hover:underline text-sm md:text-base" href="/About">About</Link>
              <Link className="hover:underline text-sm md:text-base" href="/Programs">Programs</Link>
              <Link className="hover:underline text-sm md:text-base" href="/Resources">Resources</Link>
              <Link className="hover:underline text-sm md:text-base" href="/Contact">Contact</Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <hr />
      <Lastf />
    </div>
  );
};

export default Footer;
