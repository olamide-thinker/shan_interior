import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <div className="relative w-full max-w-[62rem] rounded-4xl p-6 mx-auto flex flex-col gap-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/contact-bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 bg-[#BB845A] p-8 rounded-4xl">
        <h1 className="text-3xl text-white text-center">Get in Touch with us Today</h1>

        {/* Input Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4">
          <input
            type="text"
            placeholder="Name"
            className="p-4 h-[3rem] rounded-lg bg-white text-gray-900 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 h-[3rem] rounded-lg bg-white text-gray-900 outline-none"
          />
          <input
            type="text"
            placeholder="Phone"
            className="p-4 h-[3rem] rounded-lg bg-white text-gray-900 outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 h-[6rem] sm:h-[3rem] col-span-1 sm:col-span-2 md:col-span-3 rounded-lg w-full bg-white text-gray-900 outline-none resize-none"
          ></textarea>
        </div>

        <Button className="w-full sm:w-fit mt-4 mx-auto">Send</Button>
      </div>
    </div>
  );
};

export default Contact;
