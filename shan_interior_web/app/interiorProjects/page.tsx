"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/header';
import { Button } from '@/components/ui/button';
import logo from "../../assets/header/Shan-black.png";
import heroImage from "../../assets/interiorprojects/hero/interior.png";
import Footer from '@/components/footer';
import ProjectCard from '@/components/3D-projects/game-Changer/projectCard';

const Page = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div>
            <div className='bg-[#eef5f4] min-h-screen flex flex-col px-6'>
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
                        <nav className="bg-[#4d4c44]/25 rounded-full px-6 py-4 hidden md:block">
                            <div className="flex text-white items-center gap-4 md:gap-6 text-sm md:text-base">
                                <Link href="#">
                                    Home
                                </Link>
                                <Link href="#">
                                    About Us
                                </Link>
                                <Link href="#">
                                    3D Design Projects
                                </Link>
                                <Link href="#">
                                    Interior Design Projects
                                </Link>

                            </div>
                        </nav>


                        <Button className="bg-[#4d4c44]/40 px-6 py-4 md:px-6 md:py-6 rounded-full text-white text-sm md:text-base">
                            Book an Appointment
                        </Button>
                    </header>

                    {/* Hero Content */}
                    <div className="flex flex-col text-center max-w-2xl w-full py-6 flex-grow">
                        <p className="text-sm md:text-base font-medium mb-4 md:mb-6">Interior Project</p>

                        {/* Headline */}
                        <h1 className="text-[#8b8b8b] text-3xl md:text-5xl font-bold leading-tight">
                            Explore Our Thoughtfully
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Designed Spaces
                        </h2>

                        {/* Description */}
                        <p className="text-[#8b8b8b] text-sm md:text-lg mt-4 md:mt-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>


                        {/* Hero Image */}
                        <Image src={heroImage} alt="3D Projects" className="w-48 md:w-auto mx-auto mt-6 md:mt-10" />
                    </div>
                </section>

                {/* services */}


            </div>
            <section className=" project-3D  mt-10 ">

                <ProjectCard title="3D Studio Project" />

            </section>

            {/* footer */}
            <section className=" project-3D  flex flex-col gap-6 mt-10">

                <Footer />

            </section>
        </div>
    );
}

export default Page;
