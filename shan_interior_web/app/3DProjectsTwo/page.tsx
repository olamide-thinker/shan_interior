"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import logo from "../../assets/header/Shan-black.png";
import heroImage from "../../assets/3dprojects/3d-hero.png";
import GridLayout from '@/components/3D-projects/game-Changer/layout';
import Footer from '@/components/footer';
import ProjectCard from '@/components/3D-projects/game-Changer/projectCard';

const Page = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div>
            <div className="bg-[#f7f3ed] min-h-screen flex flex-col px-6">
                {/* Hero & Navbar */}
                <header className="w-full flex justify-between items-center py-4 px-6 md:px-12 relative">
                    {/* Logo */}
                    <Image src={logo} alt="Shan" width={128} height={64} priority />

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#605d56] text-2xl"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        ☰
                    </button>

                    {/* Desktop Navbar */}
                    <nav className="bg-[#605d56] rounded-full px-4 py-2 hidden md:block">
                        <div className="flex text-white items-center gap-4 md:gap-6 text-sm md:text-base">
                            <Link href="#">Home</Link>
                            <Link href="#">About Us</Link>
                            <Link href="#">3D Design Projects</Link>
                            <Link href="#">Interior Design Projects</Link>
                        </div>
                    </nav>

                    {/* Book an Appointment */}
                    <Button className="bg-[#605d56] px-4 md:px-6 py-2 md:py-3 rounded-lg text-white text-sm md:text-base">
                        Book an Appointment
                    </Button>

                    {/* Mobile Menu Dropdown */}
                    {isNavOpen && (
                        <div className="absolute top-16 left-0 w-full bg-[#605d56] text-white flex flex-col items-center py-4 md:hidden">
                            <Link href="#" className="py-2">Home</Link>
                            <Link href="#" className="py-2">About Us</Link>
                            <Link href="#" className="py-2">3D Design Projects</Link>
                            <Link href="#" className="py-2">Interior Design Projects</Link>
                        </div>
                    )}
                </header>

                {/* Hero Section */}
                <section className="flex flex-col-reverse md:flex-row items-center w-full px-10 flex-grow gap-6">
                    {/* Left - Hero Text */}
                    <div className="text-center md:text-left md:w-1/2 max-w-3xl">
                        <p className="text-sm md:text-base font-medium mb-4 md:mb-6">3D Studio Project</p>

                        <h1 className="text-[#8b8b8b] text-3xl md:text-5xl font-bold leading-tight">
                            Immersive 3D Studio Projects
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Bringing Spaces to Life
                        </h2>

                        <p className="text-[#8b8b8b] text-sm md:text-lg mt-4 md:mt-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        {/* CTA Button */}
                        <Button className="bg-black mx-auto md:mx-0 w-fit px-5 py-2 md:px-6 md:py-3 rounded-full text-white text-sm md:text-base mt-4">
                            Watch Video
                        </Button>
                    </div>

                    {/* Right - Hero Image */}
                    <Image src={heroImage} alt="3D Projects" width={500} height={300} priority />
                </section>

                {/* Services */}
                <section className="mt-10 bg-[#f7f3ed]">
                    <GridLayout />
                </section>

                {/* 3D Projects */}
                <section className="project-3D mt-10">
                    <ProjectCard title="Design Project" />
                </section>
            </div>

            {/* Footer */}
            <section className="project-3D flex flex-col gap-6 mt-10">
                <Footer />
            </section>
        </div>
    );
};

export default Page;
