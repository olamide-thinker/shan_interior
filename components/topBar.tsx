import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

export const TopBar = () => {
  return (
    <div className="w-full hidden sm:flex z-50  flex-col italic md:flex-row justify-between bg-black text-gray-300 px-6 md:px-10 py-1 text-center md:text-left">
      <p> Your Preferred Interior Design Company</p>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
        <Link className="flex gap-2 group items-center" href={""}>
          <PhoneCall size={18} />
          <p className="group-hover:underline">+234 806 753 0517</p>
        </Link>
        <Link className="flex gap-2 group items-center" href={""}>
          <Mail size={18} />
          <p className="group-hover:underline">
            contact@shaninteriordesign.com
          </p>
        </Link>
      </div>
    </div>
  );
};
