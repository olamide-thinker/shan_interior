import React from "react";
import Image from "next/image";
import herobg from "../assets/header/hero-header.png";

const Hero = () => {
  return (
    <div>
      <section className="relative  h-screen flex flex-col justify-center items-center">
        {/* Background Image */}
        <Image
          src={herobg}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="hero-bg"
        />
        {/* Hero Content */}
        <div className="absolute flex flex-col md:flex-row justify-between w-full left-0 bottom-[10%] md:bottom-[15%] px-6 md:px-10">
          {/* Headline and Description */}
          <div className="headline max-w-2xl text-center md:text-left">
            <p className="text-white mt-4 text-base italic md:text-lg leading-relaxed">
              Transforming spaces since 2017...{" "}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Elevating Spaces, Realizing Visions
            </h1>
            <p className="text-white mt-4 text-sm md:text-lg leading-relaxed">
              From 3D Conceptualization to Flawless Execution, we bring your
              dream interiors to life with precision, creativity, and timely
              delivery.
            </p>

            {/* <Button className="bg-[#605d56] px-6 py-3 mt-6 rounded-lg text-white text-sm md:text-base">
              Get in Touch
            </Button> */}
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
  );
};

export default Hero;
