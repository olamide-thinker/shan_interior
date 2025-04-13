"use client";
import React from "react";
import Footer from "@/components/footer";
import AboutHero from "@/components/about/hero-image";
import HeaderTitle from "@/components/HOC/headerProp";
import ValueCard from "@/components/interiorProjects/valueCardProps";
import Objectives from "@/components/interiorProjects/objectives";
import imageOne from "../../assets/teams/founder_shan.png";
const Page = () => {
  return (
    <div>
      <div className="bg-[#f7f3ed] min-h-fit py-24 flex flex-col px-6">
        <section className="flex flex-col justify-center items-center ">
          {/* Hero Content */}
          <div className="flex flex-col text-center max-w-2xl w-full py-6 flex-grow">
            <p className="text-sm md:text-base font-medium italic">About Us</p>

            {/* Headline */}
            <h1 className="text-[#8b8b8b] text-3xl md:text-5xl font-bold leading-tight">
              Design Spaces
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold">
              Elavating Experiences.
            </h2>

            {/* Description */}
            <p className="text-[#8b8b8b] text-sm md:text-lg mt-4 md:mt-6">
              At Shan Interiors, we transform spaces into elegant, functional
              environments that inspire. Our passion for design, attention to
              detail, and innovative approach ensure every project reflects our
              clients’ vision while enhancing comfort and style.
            </p>
          </div>
          <div className="">
            <AboutHero />
          </div>
        </section>
      </div>
      <section className="bg-white project-3D  mt-10 ">
        <Objectives
          missionTitle="Mission"
          missionContent={[
            "To transform spaces into personalized sanctuaries that reflect the unique style and vision of each client, we blend innovative design solutions, cutting-edge technology, and impeccable craftsmanship. Our approach ensures that every space is not only visually stunning but also highly functional, comfortable, and meaningful.",
            "By incorporating 3D visualization, sustainable materials, and bespoke design elements, we bring ideas to life with precision and creativity.",
          ]}
          profile={{
            name: "Michael Shanu",
            role: "CTO and Founder",
            imageUrl: imageOne, // Ensure the image path is correct
            about:
              "Passionate about innovative design and sustainability, Shan Interiors in crafting visually compelling and functionally superior spaces.",
          }}
        />
        <div className="border-t">
          <Objectives
            missionTitle="Vision"
            missionContent={[
              "To ba leading force in interior design, redefining spaces with innovation, elegance, and functionality. We envision a world where every home, office, and commercial space reflects its owner’s unique style while promoting comfort, creativity, and sustainability. ",
              "Through cutting-edge 3D visualization and impeccable craftsmanship, we strive to turn imagination into reality—one space at a time.",
            ]}
          />
        </div>
      </section>

      <section className=" project-3D bg-[#f7f3ed]  flex flex-col gap-6 px-6 mt-10 ">
        <HeaderTitle
          title=""
          heading=""
          subHeading="Core Values"
          description="We begin with a thorough consultation to understand your vision, requirements, and budget for the project. This discussion allows us to align our approach with your expectations and goals. "
          button=""
        />

        <ValueCard />
      </section>

      {/* footer */}
      <section className=" project-3D  flex flex-col gap-6 mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default Page;
