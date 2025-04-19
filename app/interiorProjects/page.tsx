// "use client";
import React from "react";
import Image from "next/image";
import heroImage from "../../assets/interiorprojects/hero/interior-hero.png";

import ProjectList from "@/components/Cards/Card";

// export async function getServerSideProps() {
//   const projects = await getProjects(); // use your existing function
//   return { props: { projects } };
// }

const Page = async () => {
  return (
    <div>
      <div className="bg-[#eef5f4] md:min-h-screen h-[70vh] flex flex-col px-6 ">
        <section className="flex flex-col justify-center items-center overflow-hidden min-h-fit py-24  ">
          {/* <div className="bg-[#f7f3ed] min-h-fit py-24 flex flex-col px-6"> */}
          {/* Hero Content */}
          <div className="flex z-10 flex-col text-center max-w-2xl w-full py-6 flex-grow">
            <p className="text-sm md:text-base font-medium mb-4 md:mb-6 italic">
              Interior Project
            </p>

            {/* Headline */}
            <h1 className="text-[#8b8b8b] text-3xl md:text-5xl font-bold leading-tight">
              Explore Our Thoughtfully
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold">Designed Spaces</h2>

            {/* Description */}
            {/* <p className="text-[#8b8b8b] text-sm md:text-lg mt-4 md:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>
          <div className="flex absolute bottom-0 h-full md:h-fit  md:-bottom-20 z-0 items-center justify-center ">
            {/* Hero Image */}
            <Image
              src={heroImage}
              alt="3D Projects"
              height={3000}
              width={3000}
              className="w-full object-cover md:min-w-[75vw] mx-auto mt-6 md:mt-10"
            />
          </div>
        </section>

        {/* services */}
      </div>
      <section className=" project-3D flex justify-center items-center w-full p-4 sm:p-8 md:p-16 lg:p-24 mt-10 ">
        <ProjectList
          projectFolderPrefix={"shanInteriorsProjects/interior projects"}
          isFull={true}
        />
        {/* <ProjectCard title="3D Studio Project" /> */}
      </section>
    </div>
  );
};

export default Page;
