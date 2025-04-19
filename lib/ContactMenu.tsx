"use client";
import { useState } from "react";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function ContactMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseLeave={() => setIsOpen(false)}
      className="relative inline-block group"
    >
      {/* Trigger Button */}
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-15 h-25 md:w-20 md:h-20 p-0 bg-white border overflow-hidden border-black shadow-md rounded-2xl focus:outline-none focus:ring-2 focus:ring-black relative"
      >
        <p className="absolute bg-black text-white font-semibold bottom-0 text-xs py-1 text-center w-full">
          Contact Us
        </p>
        <Image
          src="/customerCare.jpg"
          alt="Contact Us"
          height={800}
          width={800}
          className="group-hover:animate-pulse h-full duration-600 object-cover"
        />
      </button>

      {/* Contact Modal */}
      {isOpen && (
        <div
          className="absolute z-50 bg-[#F5F5F0] text-[#333] w-72 sm:w-80 flex flex-col p-5 ml-4 border border-gray-300 shadow-xl bottom-14 md:bottom-3 right-8 md:right-full  rounded-xl transition-transform transform translate-x-0 translate-y-0"
          role="dialog"
          aria-label="Contact Options"
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Let’s get in touch</h3>
              <p className="text-sm text-gray-600">
                Choose your preferred method of contact:
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-2">
              <ContactOption
                href="https://wa.me/+2348067530517"
                icon={<IoLogoWhatsapp size={20} className="text-[#7A9E9F]" />}
                label="Contact via WhatsApp"
              />

              <ContactOption
                href="tel:+2348067530517"
                icon={<FaPhone size={20} className="text-[#C67156]" />}
                label="Call Us"
              />

              <ContactOption
                href="https://web.facebook.com/shaninteriorsng?mibextid=ZbWKwL&_rdc=1&_rdr#"
                icon={<FaFacebook size={20} className="text-[#4267B2]" />}
                label="Visit Facebook"
              />

              <ContactOption
                href="https://www.instagram.com/shaninteriors/"
                icon={<FaInstagram size={20} className="text-[#C13584]" />}
                label="Visit Instagram"
              />

              <ContactOption
                href="https://www.tiktok.com/@shaninteriors?_t=8s4O6YUrTnx&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAaffAz-_3j0zEqoq7PK3ma_ze4eRSAO98kHwNmpncvz9ISMvhj5r4gVnGF5leg_aem_oTobeozucObYKrVZSLSegQ"
                icon={<FaTiktok size={20} className="text-black" />}
                label="Visit TikTok"
              />

              <ContactOption
                href="/"
                icon={<FaXTwitter size={20} className="text-black" />}
                label="Visit X (Twitter)"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ContactOption({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e6e6de] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7A9E9F]"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
