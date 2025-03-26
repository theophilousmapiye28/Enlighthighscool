"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "@/public/Images/Logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border border-orange-600 z-20">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={80} height={80} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          <Link className="text-lg text-blue-900 hover:underline" href="/">Home</Link>
          <Link className="text-lg text-blue-900 hover:underline" href="/About">About</Link>
          <Link className="text-lg text-blue-900 hover:underline" href="/Programs">Programs</Link>
          <Link className="text-lg text-blue-900 hover:underline" href="/Resources">Resources</Link>
        </div>

        {/* Contact Link (Aligned Right) */}
        <Link className="hidden md:block text-md bg-blue-950 text-white px-4 py-2 rounded-lg ml-auto" href="/Contact">
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-blue-900" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-md py-4 space-y-4">
          <Link className="text-lg text-blue-900 hover:underline" href="/">Home</Link>
          <Link className="text-lg text-blue-900 hover:underline" href="/About">About</Link>
          <Link className="text-lg text-blue-900 hover:underline" href="/Programs">Programs</Link>
          <Link className="text-lg text-blue-900 hover:underline" href="/Resources">Resources</Link>
          <Link className="text-md bg-blue-900 text-white px-4 py-3 rounded-lg" href="/Contact">Contact Us</Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
