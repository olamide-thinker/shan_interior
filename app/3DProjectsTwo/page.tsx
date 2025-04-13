"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import heroImage from "../../assets/3dprojects/3d-hero.png";
import GridLayout from "@/components/3D-projects/game-Changer/layout";
import Footer from "@/components/footer";
import ProjectCard from "@/components/3D-projects/game-Changer/projectCard";

const Page = () => {
  return (
    <div>
      <div className="bg-[#f7f3ed] min-h-screen flex flex-col px-6">
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center overflow-hidden min-h-fit py-24  ">
          {/* Left - Hero Text */}
          <div className="text-center md:text-left md:w-1/2 max-w-3xl">
            <p className="text-sm md:text-base font-medium mb-4 md:mb-6">
              3D Studio Project
            </p>

            <h1 className="text-[#8b8b8b] text-3xl md:text-5xl font-bold leading-tight">
              Immersive 3D Studio Projects
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold">
              Bringing Spaces to Life
            </h2>

            <p className="text-[#8b8b8b] text-sm md:text-lg mt-4 md:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* CTA Button */}
            <Button className="bg-black mx-auto md:mx-0 w-fit px-5 py-2 md:px-6 md:py-3 rounded-full text-white text-sm md:text-base mt-4">
              Watch Video
            </Button>
          </div>

          {/* Right - Hero Image */}
          <Image
            src={heroImage}
            alt="3D Projects"
            width={500}
            height={300}
            priority
          />
        </section>

        {/* Services */}
        <section className="mt-10 bg-[#f7f3ed]">
          <GridLayout />
        </section>

        {/* 3D Projects */}
        <section className="project-3D mt-10">
          <ProjectCard title="Design Project" />
        </section>
      </div>

      {/* Footer */}
      <section className="project-3D flex flex-col gap-6 mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default Page;
