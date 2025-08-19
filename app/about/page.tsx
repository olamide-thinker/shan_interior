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
      <div className="bg-[#f7f3ed] min-h-fit pt-24 flex flex-col px-6">
        <section className="flex flex-col justify-center items-center ">
          {/* Hero Content */}
          <div className="flex flex-col text-center max-w-2xl w-full py-6 flex-grow">
            <p className="text-sm md:text-base font-medium italic">About Us</p>

            {/* Headline */}
            <h1 className="text-[#8b8b8b] text-3xl md:text-5xl font-bold leading-tight">
              Elevating Spaces,
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold">
              Realizing Vision.
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
            "To transform spaces into distinctive environments that reflect personal style, purpose, and functionality.",
            "We blend design artistry, innovation, and efficient execution to deliver interiors that inspire, uplift, and stand the test of time.",
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
              "To become Africa's most trusted and innovative interior design brand — setting the global standard in creativity, craftsmanship, and project excellence.",
              "We envision a world where every space reflects the soul of its user and the sophistication of smart design.",
            ]}
          />
        </div>
      </section>

      <section className=" project-3D py-8 bg-[#f7f3ed]  flex flex-col gap-6 px-6 mt-10 ">
        <HeaderTitle
          title=""
          heading=""
          subHeading="Core Values"
          description="Our core values guide every project we undertake, ensuring consistent quality and client satisfaction. These principles define our approach to design, collaboration, and execution."
          button=""
        />

        <ValueCard />
      </section>
    </div>
  );
};

export default Page;
