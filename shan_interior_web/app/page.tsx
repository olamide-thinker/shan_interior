import { Button } from "@/components/ui/button";
import Image from "next/image";

import HeaderTitle from "@/components/HOC/headerProp";
import ImageCard from "@/components/Cards/Card";
import GridLayout from "@/components/Cards/CardService";
import BrandLogos from "@/components/Home/brandLogo";
import TeamGrid from "@/components/Home/teamMembers";
import TestimonialCarousel from "@/components/Home/testimonials";
import VideoPlayer from "@/components/Home/video";
import Contact from "@/components/Home/contact";
import Footer from "@/components/footer";
import Hero from "@/components/header";
import ProcessTimeline from "@/components/Home/process";


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Top Contact Bar */}
      <Hero/>
      
      {/* Who Section */}
      <section className="about p-6 md:p-10 flex flex-col gap-6">
        <HeaderTitle
          title="Who we are"
          heading="Transforming spaces"
          subHeading="since 2017..."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. " />
        <ImageCard />
      </section>

      {/* Our Service */}
      <section id="about" className="about p-6 md:p-10 flex flex-col gap-6">
        <HeaderTitle
          title="Our Service"
          heading="Why you should try "
          subHeading="Shan Interiors"
          description="Our passion for creating beautiful and functional spaces that reflect the uniqueness of our clients sets us apart. Here's a glimpse of what we can do for you. " />
        <GridLayout />
      </section>

       {/* Our Brands*/}
       <section id="brands" className="brands p-6 md:p-10 flex flex-col gap-6">
        <BrandLogos/>
      </section>

      {/* projects */}
      <section id="projects" className="project p-6 md:p-10 flex flex-col gap-6">
        <HeaderTitle
          title="Interior Design Projects"
          heading="Crafting Exceptional"
          subHeading="Space with Purpose"
          description="We begin with a thorough consultation to understand your vision, requirements, and budget for the project. This discussion allows us to align our approach with your expectations and goals. " 
          button="Explore"
          />
         <ImageCard />
      </section>


      {/* projects */}
      <section className="project-3D p-6 md:p-10 flex flex-col gap-6">
        <HeaderTitle
          title="3D Design Projects"
          heading="Crafting Exceptional"
          subHeading="Space with Purpose"
          description="We begin with a thorough consultation to understand your vision, requirements, and budget for the project. This discussion allows us to align our approach with your expectations and goals. " 
          button="Explore"
          />
         <ImageCard />
      </section>

      {/* projects */}
      <section className="project-3D p-6 md:p-10 flex flex-col gap-6">
        <HeaderTitle
          title="Meet the team"
          heading="Meet the Experts Who"
          subHeading="Bring Spaces to Life"
          description="We begin with a thorough consultation to understand your vision, requirements, and budget for the project. This discussion allows us to align our approach with your expectations and goals. " 
          button="Explore"
          />
         <TeamGrid/>
      </section>

      



      {/* Our works */}
      <section className="how-we-work p-6 md:p-10 flex flex-col gap-6">
        <HeaderTitle
          title="How we work"
          heading="From Vision to"
          subHeading="Reality is our Process"
          description="At Shan Interiors, we're passionate about creating spaces that inspire and delight. With our unique approach to design, unparalleled creativity, and unwavering commitment to excellence, we're here to help you bring your vision to life in stunning style. " 
          />

          <ProcessTimeline/>
      </section>


       {/* Our works */}
       <section className="project-3D p-6 md:p-10 flex flex-col gap-6">
        <HeaderTitle
          title="Testimonials"
          heading="Trust by Over"
          subHeading="7k Satisfied Client"
          description="Shan Interiors has transformed businesses, homes, and tech spaces into elegant, functional environments for an enhanced experience. " 
          button="Get in touch"
          />
         <TestimonialCarousel/>
      </section>

      <section className="project-3D p-6 md:p-10 flex flex-col gap-6">

        <VideoPlayer/>

      </section>

      <section className=" project-3D p-6 md:p-10 flex flex-col gap-6">

        <Contact/>

      </section>

      <section className=" project-3D  flex flex-col gap-6">

        <Footer/>

      </section>








      
    </div>
  );
}
