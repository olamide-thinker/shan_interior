// "use client";
import React from "react";
import Image from "next/image";
import heroImage from "../../assets/interiorprojects/hero/hero_imag.png";

import ProjectList from "@/components/Cards/Card";

// export async function getServerSideProps() {
//   const projects = await getProjects(); // use your existing function
//   return { props: { projects } };
// }

const Page = async () => {
  return (
    <div className="">
      <div className="bg-[#eef5f4] min-h-[70vh] items-center justify-center md:min-h-screen flex flex-col v-full">
        <section className="mx-auto flex flex-col justify-center items-center overflow-hidden min-h-fit py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
          {/* Hero Content */}
          <div className="flex z-10 flex-col text-center max-w-3xl w-full py-6">
            <p className="text-sm sm:text-base font-medium mb-4 italic">
              Interior Project
            </p>

            {/* Headline */}
            <h1 className="text-[#8b8b8b] text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
              Explore Our Thoughtfully
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-2">
              Designed Spaces
            </h2>
          </div>

          <div className=" bottom-0 w-full h-full md:h-auto md:-bottom-20 z-0">
            <div className="relative h-full w-full flex items-center justify-center">
              <Image
                src={heroImage}
                alt="Interior Projects Hero"
                height={3000}
                width={3000}
                className="w-full
                 h-[600px] object-bottom object-contain md:min-w-[75vw] mx-auto mt-2 md:mt-4 max-w-[2000px]"
                priority
              />
            </div>
          </div>
        </section>
      </div>

      <section className=" max-w-[2400px] mx-auto flex justify-center items-center w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 mt-10 ">
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
