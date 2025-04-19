"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCreative,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import { animate, stagger } from "animejs"; // Correct named import from animejs v4
import herobg from "../assets/header/hero-header.png";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export const HeroSlider = () => {
  const textRef = useRef<HTMLDivElement>(null);

  // Function to animate the text
  const animateText = () => {
    if (textRef.current) {
      animate(textRef.current.querySelectorAll(".animatable"), {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: "easeOutQuad",
        delay: stagger(200), // Animate with a delay for each text element
      });
    }
  };

  return (
    <Swiper
      grabCursor
      effect="fade"
      speed={1000}
      parallax
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      onSlideChangeTransitionEnd={animateText}
      onSwiper={() => setTimeout(animateText, 500)} // Trigger first slide animation
      creativeEffect={{
        prev: {
          shadow: true,
          origin: "left center",
          translate: ["-5%", 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: "right center",
          translate: ["5%", 0, -200],
          rotate: [0, -100, 0],
        },
      }}
      modules={[EffectCreative, Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <SwiperSlide key={i}>
          <section className="relative h-screen flex flex-col justify-center items-center">
            <Image
              src={herobg}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="hero-bg"
            />
            <div
              ref={textRef}
              data-swiper-parallax="-300"
              className="absolute flex flex-col md:flex-row justify-between w-full left-0 bottom-[10%] md:bottom-[15%] px-6 md:px-10"
            >
              <div className="headline max-w-2xl text-center md:text-left space-y-4">
                <p className="text-white text-base italic md:text-lg animatable">
                  Transforming spaces since 2017...
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-white animatable">
                  Elevating Spaces, Realizing Visions
                </h1>
                <p className="text-white text-sm md:text-lg animatable">
                  From 3D Conceptualization to Flawless Execution, we bring your
                  dream interiors to life with precision, creativity, and timely
                  delivery.
                </p>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
