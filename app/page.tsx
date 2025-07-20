import HeaderTitle from "@/components/HOC/headerProp";
import ProjectList from "@/components/Cards/Card";
import GridLayout from "@/components/Cards/CardService";
import BrandLogos from "@/components/Home/brandLogo";
import TeamGrid from "@/components/Home/teamMembers";
import TestimonialCarousel from "@/components/Home/testimonials";
import VideoPlayer from "@/components/Home/video";
import Contact from "@/components/Home/contact";
import Hero from "@/components/header";
import ProcessTimeline from "@/components/Home/process";
import { HeroSlider } from "@/components/heroSlider";

export default async function Home() {
  return (
    <div className="min-h-screen">
      {/* Top Contact Bar */}
      {/* <HeroSlider /> */}
      <Hero />

      {/* Who Section */}
      {/* <section className="about p-6 md:p-10 flex flex-col gap-6">
        <HeaderTitle
          title="Who we are"
          heading="Transforming spaces"
          subHeading="since 2017..."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
        />
        <ProjectList />
      </section> */}

      {/* Our Service */}
      <section id="about" className="about p-6 md:p-10 flex flex-col gap-6">
        <HeaderTitle
          title="Our Service"
          heading="Why you should try "
          subHeading="Shan Interiors"
          description="At Shan Interiors, we bring your dream spaces to life with precision, creativity, and expertise. From 3D conceptualization to project execution, we handle every stage of interior design, ensuring a seamless transition from vision to reality."
        />
        <GridLayout />
      </section>

      {/* Our Brands*/}
      <section id="brands" className="brands p-6 md:p-10 flex flex-col gap-6">
        <BrandLogos />
      </section>

      {/* projects */}
      <section
        id="projects"
        className=" max-w-[2400px] mx-auto  project p-6 md:p-10 flex flex-col gap-6"
      >
        <HeaderTitle
          title="Interior Design Projects"
          heading="Crafting Exceptional"
          subHeading="Space with Purpose"
          description="We offer tailored interior design services that blend high-end aesthetics with smart budgeting—so you get exceptional spaces without overspending."
          button="Explore"
        />
        <ProjectList
          projectFolderPrefix={"shanInteriorsProjects/interior projects"}
          isFull={false}
        />
      </section>

      {/* projects */}
      <section className=" max-w-[2400px] mx-auto project-3D p-6 md:p-10 flex flex-col gap-6">
        <HeaderTitle
          title="3D Design Projects"
          heading="Crafting Exceptional"
          subHeading="Space with Purpose"
          description="Experience your future space before it’s built. Our 3D design service transforms your ideas into immersive visuals, giving you clarity and confidence every step of the way."
          button="Explore"
        />
        <ProjectList
          projectFolderPrefix={"shanInteriorsProjects/project_3d"}
          isFull={false}
        />
      </section>

      {/* projects */}
      <section className=" max-w-[2400px] mx-auto project-3D p-6 md:p-10 flex flex-col gap-6 hover:shadow-2xl rounded-lg transition-all duration-300">
        <HeaderTitle
          title="Meet the team"
          heading="Meet the Experts Who"
          subHeading="Bring Spaces to Life"
          description="Behind every space we design is a team of passionate creatives and detail-obsessed professionals, all dedicated to bringing your vision to life with skill, style, and heart. "
          // button="Explore"
        />
        <TeamGrid />
      </section>

      {/* Our works */}
      <section className=" max-w-[2400px] mx-auto how-we-work p-6 md:p-10 flex flex-col gap-6">
        <HeaderTitle
          title="How we work"
          heading="From Vision to"
          subHeading="Reality is our Process"
          description="At Shan Interiors, we believe in creating timeless, elegant interiors that reflect your style and enhance your lifestyle. Our collaborative approach, attention to detail, and commitment to excellence set us apart, making us your trusted partner in bringing your interior design dreams to life."
        />

        <ProcessTimeline />
      </section>

      {/* Our works */}
      {/* <section className="project-3D p-6 md:p-10 flex flex-col gap-6">
        <HeaderTitle
          title="Testimonials"
          heading="Trust by Over"
          subHeading="7k Satisfied Client"
          description="Shan Interiors has transformed businesses, homes, and tech spaces into elegant, functional environments for an enhanced experience. "
          button="Get in touch"
        />
        <TestimonialCarousel />
      </section> */}

      {/* <section className="project-3D p-6 md:p-10 flex flex-col gap-6">
        <VideoPlayer />
      </section> */}
      {/* 
      <section className=" project-3D p-6 md:p-10 flex flex-col gap-6">
        <Contact />
      </section> */}
    </div>
  );
}
