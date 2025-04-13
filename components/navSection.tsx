"use client"; // Required if you're using App Router

import Image from "next/image";
import React from "react";
import Nav from "./Nav/nav";
import whiteLogo from "../assets/header/Shan_Interiors_Logo_white.svg";
import blackLogo from "../assets/header/Shan_Interiors_Logo_black.svg";
import { usePathname } from "next/navigation"; // 👈 Import hook

export const NavSection = () => {
  const pathname = usePathname(); // Get the current route
  const isHome = pathname === "/"; // Check if 'home' is in the URL

  // console.log(isHome, "isHome");

  return (
    <header className="absolute z-50 sm:top-14 left-0 w-full flex flex-wrap justify-between items-center px-6 md:px-10 py-4">
      <Image
        src={isHome ? whiteLogo : blackLogo}
        alt="Shan"
        className="h-14 md:w-auto"
      />

      <Nav />
    </header>
  );
};
