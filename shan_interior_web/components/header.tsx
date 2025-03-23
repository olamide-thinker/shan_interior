import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import logo from "../assets/header/Shan-white.png";
import herobg from "../assets/header/hero-header.png";
import Link from 'next/link';

const Hero = () => {
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row justify-between bg-black text-amber-700 px-6 md:px-10 py-4 text-center md:text-left">
        <p>Residential, Commercial and Hospitality Interior Design Company</p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
          <p>+234 806 753 0517</p>
          <p>shaninteriors@mail.com</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center">
        {/* Background Image */}
        <Image src={herobg} className="absolute top-0 left-0 w-full h-full object-cover" alt="hero-bg" />

        {/* Hero & Navbar */}
        <header className="absolute top-0 left-0 w-full flex flex-wrap justify-between items-center px-6 md:px-10 py-4 z-10">
          <Image src={logo} alt="Shan" className="w-32 md:w-auto" />

          <nav className="bg-[#605d56] rounded-full px-4 py-2 hidden md:block">
            <div className="flex text-white items-center gap-4 md:gap-6 text-sm md:text-base">
              <Link href="#">
                Home
              </Link>
              <Link href="#">
                About Us             
                 </Link>
              <Link href="#">
                3D Design Projects
              </Link>
              <Link href="#">
                Interior Design Projects
              </Link>
              
            </div>
          </nav>

          <Button className="bg-[#605d56] px-5 py-2 md:px-6 md:py-3 rounded-lg text-white text-sm md:text-base">
            Book an Appointment
          </Button>
        </header>

        {/* Hero Content */}
        <div className="absolute flex flex-col md:flex-row justify-between w-full left-0 bottom-[10%] md:bottom-[15%] px-6 md:px-10">
          {/* Headline and Description */}
          <div className="headline max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Elevating Spaces, Realizing Visions
            </h1>
            <p className="text-white mt-4 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>

            <Button className="bg-[#605d56] px-6 py-3 mt-6 rounded-lg text-white text-sm md:text-base">
              Get in Touch
            </Button>
          </div>

          {/* Carousel Indicator */}
          <div className="flex gap-2 items-end mt-6 md:mt-0">
            <div className="w-8 h-2 bg-amber-700 rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>



      </section>

    </div>
  )
}

export default Hero
