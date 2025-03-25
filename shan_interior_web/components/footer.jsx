import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPinterest,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/header/Shan-white.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/assets/footer-bg.png" // Update with your background image path
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10  max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col items-center sm:items-start  ">
          <Image src={logo} alt="Shan" className="w-32 md:w-auto" />
          <p className="text-gray-400 mt-3 text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <Link href="#">
              <FaPinterest className="text-white hover:text-gray-400 text-2xl" />
            </Link>
            <Link href="#">
              <FaInstagram className="text-white hover:text-gray-400 text-2xl" />
            </Link>
            <Link href="#">
              <FaLinkedin className="text-white hover:text-gray-400 text-2xl" />
            </Link>
            <Link href="#">
              <FaYoutube className="text-white hover:text-gray-400 text-2xl" />
            </Link>
          </div>
        </div>

        {/* Middle Section - Navigation */}
        <div className="text-center sm:text-left">
          <h3 className="text-orange-400 font-semibold">Shan Interiors</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <Link href="#" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                How We Work
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Legal & Support */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-orange-400 font-semibold">Legal Information</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-orange-400 font-semibold">Support</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 text-center mt-10 text-gray-400 text-sm">
        © 2025 Shan Interiors. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
