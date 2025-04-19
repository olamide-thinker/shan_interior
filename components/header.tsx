"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import herobg1 from "../assets/home/heroImage_1.webp";
// import herobg2 from "../assets/sliderImage/heroImage_1.webp";
import herobg3 from "../assets/sliderImage/BEDROOM-2-VIEW-A.jpg";
import herobg4 from "../assets/sliderImage/IMG_0120.jpg";
import herobg5 from "../assets/sliderImage/Kuramo-40.jpg";
// import herobg6 from "../assets/sliderImage/Co-Working Office.JPG";
import { animate, createScope, Scope, createTimeline, waapi } from "animejs";

const Hero = () => {
  const root = useRef(null);
  const scope = useRef<Scope | null>(null);
  const images = [herobg1, herobg3, herobg4, herobg5];
  const [currentIndex, setCurrentIndex] = useState(0); // State for image tracking

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]); // Only run once

  useEffect(() => {
    if (root.current) {
      scope.current = createScope({ root });

      scope.current.add(() => {
        const heroBg = waapi.animate(".hero", {
          opacity: [0, 1],
          translateX: ["-100%", "0%"],
          duration: 1000,
          easing: "linear",
          delay: (_, i) => i * 50,
        });

        const heroText = waapi.animate(".heroText", {
          translateY: ["50px", "0px"],
          opacity: [0, 1],
          delay: (_, i) => i * 300,
          duration: 1000,
        });

        const timeline = createTimeline();
        timeline.sync(heroBg, 0).sync(heroText, 0);
      });
    }

    return () => {
      if (scope.current) {
        scope.current.revert();
      }
    };
  }, [currentIndex]); // Trigger animation every time image changes

  return (
    <section
      ref={root}
      className="relative h-screen flex flex-col justify-center items-center"
    >
      {/* Background Image */}
      <Image
        src={images[currentIndex]} // Dynamically switch images based on index
        className="absolute hero top-0 left-0 w-full h-full object-cover"
        alt="hero-bg"
      />
      {/* Hero Content */}
      <div className="absolute flex flex-col md:flex-row justify-between w-full left-0 bottom-[10%] md:bottom-[15%] px-6 md:px-10 z-20">
        <div className="headline max-w-2xl text-center md:text-left">
          <p className="text-white mt-4 heroText text-base italic md:text-lg leading-relaxed">
            Transforming spaces since 2017...
          </p>
          <h1 className="text-4xl md:text-6xl heroText font-bold text-white leading-tight">
            Elevating Spaces, Realizing Visions
          </h1>
          <p className="text-white mt-4 text-sm heroText md:text-lg leading-relaxed">
            From 3D Conceptualization to Flawless Execution, we bring your dream
            interiors to life with precision, creativity, and timely delivery.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-t from-black/70 bg-blend-multiply z-10 to-0 h-full w-full absolute top-0"></div>
    </section>
  );
};

export default Hero;
