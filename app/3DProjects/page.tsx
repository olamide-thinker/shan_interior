"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import heroImage from "../../assets/3dprojects/3d-hero.png";
import GridLayout from "@/components/3D-projects/game-Changer/layout";
import ProjectList from "@/components/Cards/Card";
import { PlayCircle } from "lucide-react";

const Page = () => {
  return (
    <div className="max-w-[2400px] mx-auto">
      <div className="min-h-screen flex flex-col">
        <section className="container mx-auto flex flex-col items-center overflow-hidden min-h-fit pt-16 sm:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="flex flex-col items-center text-center max-w-3xl w-full py-6">
            <p className="text-sm sm:text-base italic font-medium">
              3D Studio Project
            </p>

            {/* Headline */}
            <h1 className="text-[#8b8b8b] text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mt-2">
              Immersive 3D Studio Projects
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-2">
              Bringing Spaces to Life
            </h2>

            {/* CTA Button */}
            <Button className="bg-black mx-auto w-fit px-4 sm:px-5 py-2 mt-6 sm:mt-8 rounded-full text-white text-sm sm:text-base">
              <PlayCircle className="mr-2" />
              Watch Video
            </Button>
          </div>

          <div className="w-full relative mt-8">
            <div className="absolute bottom-0 bg-gradient-to-t from-[#f7f3ed] via-[#f7f3ed]/60 to-transparent z-20 h-40 sm:h-48 lg:h-60 w-full"></div>

            {/* Hero Image */}
            <Image
              src={heroImage}
              alt="3D Projects"
              height={3000}
              width={3000}
              className="w-full h-auto max-h-[80vh] object-cover z-10"
              priority
            />
          </div>
        </section>

        {/* services */}

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <GridLayout />
        </section>

        <section className="project-3D items-center flex justify-center mt-10">
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
