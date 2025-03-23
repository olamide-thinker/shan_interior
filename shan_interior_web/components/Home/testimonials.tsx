"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imageOne from '../../assets/teams/team-1.png';


const testimonials = [
  {
    name: "Mrs. Kimberly Jonas",
    feedback: "Working with Shan Interiors was a game-changer for our office space!",
    imgSrc: imageOne
  },
  {
    name: "Mr. Ayomida Mark",
    feedback: "Working with Shan Interiors was a game-changer for our office space!",
    imgSrc: imageOne
  },
  {
    name: "Mrs. Kimberly Jonas",
    feedback: "Working with Shan Interiors was a game-changer for our office space!",
    imgSrc: imageOne
  },
  {
    name: "Mrs. Kimberly Jonas",
    feedback: "Working with Shan Interiors was a game-changer for our office space!",
    imgSrc: imageOne
  },
  {
    name: "Mrs. Kimberly Jonas",
    feedback: "Working with Shan Interiors was a game-changer for our office space!",
    imgSrc: imageOne
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-10">
      <div className="mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[400px] rounded-lg shadow-lg overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.imgSrc.src})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content on Top */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="w-[80%] mx-auto bg-black/60 backdrop-blur-md text-white p-4 rounded-xl">
                    <p className="text-sm">{testimonial.feedback}</p>
                  </div>
                  <h4 className="text-md text-right font-semibold mt-3 text-white">{testimonial.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
