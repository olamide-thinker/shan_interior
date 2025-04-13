"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import heroImage from "../../assets/3dprojects/3d-hero.png";
import GridLayout from "@/components/3D-projects/game-Changer/layout";
import ProjectList from "@/components/Cards/Card";

const Page = () => {
  return (
    <div>
      <div className="bg-[#f7f3ed] min-h-screen flex flex-col ">
        <section className="flex flex-col justify-center items-center overflow-hidden min-h-fit py-24  ">
          {/* Hero Content */}
          <div className="flex flex-col text-center max-w-2xl w-full py-6 flex-grow">
            <p className="text-sm italic md:text-base font-medium">
              3D Studio Project
            </p>

            {/* Headline */}
            <h1 className="text-[#8b8b8b] text-3xl md:text-5xl font-bold leading-tight">
              Immersive 3D Studio Projects
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold">
              Bringing Spaces to Life
            </h2>

            {/* Description */}
            <p className="text-[#8b8b8b] text-sm md:text-lg mt-4 md:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* CTA Button */}
            <Button className="bg-black mx-auto w-fit px-5 py-2 md:px-6 md:py-3 rounded-full text-white text-sm md:text-base ">
              Watch Video
            </Button>

            {/* Hero Image */}
            <Image
              src={heroImage}
              alt="3D Projects"
              height={3000}
              width={3000}
              className="w-full md:w-auto mx-auto md:mt-10"
            />
          </div>
        </section>

        {/* services */}

        <section className=" p-10 bg-background" id="services ">
          <GridLayout />
        </section>

        <section className=" project-3D items-center flex justify-center  mt-10 ">
          <ProjectList
            projectFolderPrefix={"shanInteriorsProjects/project_3d"}
            isFull={true}
          />
        </section>
      </div>
    </div>
  );
};

export default Page;
