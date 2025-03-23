"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/header';
import { Button } from '@/components/ui/button';
import logo from "../../assets/header/Shan-black.png";
import heroImage from "../../assets/3dprojects/3d-hero.png";
import GridLayout from '@/components/3D-projects/game-Changer/layout';
import Footer from '@/components/footer';
import ProjectCard from '@/components/3D-projects/game-Changer/projectCard';
import ImageCard from '@/components/Cards/Card';
import AboutHero from '@/components/about/hero-image';

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
                        <nav className="bg-[#605d56] rounded-full px-4 py-2 hidden md:block">
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


                        <Button className="bg-[#605d56] px-4 md:px-6 py-2 md:py-3 rounded-lg text-white text-sm md:text-base">
                            Book an Appointment
                        </Button>
                    </header>

                    {/* Hero Content */}
                    <div className="flex flex-col text-center max-w-2xl w-full py-6 flex-grow">
                        <p className="text-sm md:text-base font-medium mb-4 md:mb-6">About Us</p>

                        {/* Headline */}
                        <h1 className="text-[#8b8b8b] text-3xl md:text-5xl font-bold leading-tight">
                           Design Spaces
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Elavating Experiences.
                        </h2>

                        {/* Description */}
                        <p className="text-[#8b8b8b] text-sm md:text-lg mt-4 md:mt-6">
                        At Shan Interiors, we transform spaces into elegant, functional environments that inspire. Our passion for design, attention to detail, and innovative approach ensure every project reflects our clients’ vision while enhancing comfort and style.
                        </p>
 
                    </div>
                    <div className=''>
                    <AboutHero/>

                    </div>
                </section>

                

                <section className=" project-3D  mt-10 ">

                    

                </section>

                <section className=" project-3D  mt-10 ">

                    

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
