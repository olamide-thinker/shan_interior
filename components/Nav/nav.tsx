"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // You can install with `npm i react-icons`

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/3DProjects">3D Design Projects</Link>
      <Link href="/interiorProjects">Interior Design Projects</Link>
    </>
  );

  return (
    <nav className="bg-[#605d56] text-white px-4 py-2 rounded-full relative">
      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6 text-sm md:text-base">
        {navLinks}
      </div>

      {/* Mobile button */}
      <div className="md:hidden flex justify-between items-center">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full right-0  bg-[#605d56] rounded-b-lg mt-2 py-16 px-8 flex flex-col gap-8  z-50 whitespace-nowrap text-2xl font-bold">
          {navLinks}
        </div>
      )}
    </nav>
  );
}
