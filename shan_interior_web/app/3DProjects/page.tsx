"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import logo from "../../assets/header/Shan-black.png";
import heroImage from "../../assets/3dprojects/3d-hero.png";
import GridLayout from '@/components/3D-projects/game-Changer/layout';
import Footer from '@/components/footer';
import ProjectCard from '@/components/3D-projects/game-Changer/projectCard';
import Nav from '@/components/Nav/nav';

const Page = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div>
            <div className='bg-[#f7f3ed] min-h-screen flex flex-col px-6'>
                <section className="flex flex-col justify-center items-center ">
                    {/* Hero & Navbar */}
                    <header className="w-full flex justify-between items-center py-4 px-6 md:px-12 relative">
                        <Image src={logo} alt="Shan" className="w-24 md:w-32" />

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-[#605d56] text-2xl"
                            onClick={() => setIsNavOpen(!isNavOpen)}
                        >
                            ☰
                        </button>

                        {/* Navbar */}
                        <Nav/>


                        <Button className="bg-[#4d4c44]/40 px-6 py-4 md:px-6 md:py-6 rounded-full text-white text-sm md:text-base">
                            Book an Appointment
                        </Button>
                    </header>

                    {/* Hero Content */}
                    <div className="flex flex-col text-center max-w-2xl w-full py-6 flex-grow">
                        <p className="text-sm md:text-base font-medium mb-4 md:mb-6">3D Studio Project</p>

                        {/* Headline */}
                        <h1 className="text-[#8b8b8b] text-3xl md:text-5xl font-bold leading-tight">
                            Immersive 3D Studio Projects
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Bringing Spaces to Life
                        </h2>

                        {/* Description */}
                        <p className="text-[#8b8b8b] text-sm md:text-lg mt-4 md:mt-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        {/* CTA Button */}
                        <Button className="bg-black mx-auto w-fit px-5 py-2 md:px-6 md:py-3 rounded-full text-white text-sm md:text-base mt-4">
                            Watch Video
                        </Button>

                        {/* Hero Image */}
                        <Image src={heroImage} alt="3D Projects" className="w-48 md:w-auto mx-auto mt-6 md:mt-10" />
                    </div>
                </section>

                {/* services */}

                <section className='mt-10 bg-[#f7f3ed]' id='services ' >

                    <GridLayout />
                </section>

                <section className=" project-3D  mt-10 ">

                    <ProjectCard title="3D Studio Project" />

                </section>

            </div>

            {/* footer */}
            <section className=" project-3D  flex flex-col gap-6 mt-10">

                <Footer />

            </section>
        </div>
    );
}

export default Page;
