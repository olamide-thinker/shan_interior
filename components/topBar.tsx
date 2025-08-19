import { Mail, PhoneCall} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

export const TopBar = () => {
  return (
    <div className="w-full absolute top-0 hidden text-sm items-center sm:flex z-50  flex-col italic md:flex-row justify-between bg-black text-gray-300 px-6 md:px-10 py-1 text-center md:text-left">
      <p className={'opacity-80'}> Your Preferred Interior Design Company</p>


      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <div className={'flex gap-2 items-center justify-center px-2  bg-secondary/15 py-0.5 rounded-lg '}>
            {/*<Link*/}
            {/*    href={href}*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e6e6de] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7A9E9F]"*/}
            {/*>*/}
            <Link
                href="https://web.facebook.com/shaninteriorsng?mibextid=ZbWKwL&_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className={'hover:scale-110 transition-transform cursor-pointer'} >
                <Icon icon="qlementine-icons:facebook-16" width="18" height="18" />
            </Link>
            <Link
                href="https://www.instagram.com/shaninteriors/"
                target="_blank"
                rel="noopener noreferrer"
                className={'hover:scale-110 transition-transform cursor-pointer'} >
                <Icon icon="fontisto:instagram" width="18" height="18" />
            </Link>
            <Link
                href="https://www.tiktok.com/@shaninteriors?_t=8s4O6YUrTnx&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAaffAz-_3j0zEqoq7PK3ma_ze4eRSAO98kHwNmpncvz9ISMvhj5r4gVnGF5leg_aem_oTobeozucObYKrVZSLSegQ"

                target="_blank"
                rel="noopener noreferrer"
                className={'hover:scale-110 transition-transform cursor-pointer'} >
                 <Icon icon="hugeicons:new-twitter-rectangle" width="20" height="20" />
            </Link>
        </div>


        <Link className="flex gap-2 group items-center px-2  bg-secondary/15 py-0.5 rounded-lg" href={""}>
          <PhoneCall size={16} />
          <p className="group-hover:underline">+234 806 753 0517</p>
        </Link>
        <Link className="flex gap-2 group items-center px-2  bg-secondary/15 py-0.5 rounded-lg" href={""}>
          <Mail size={16} />
          <p className="group-hover:underline">
            contact@shaninteriordesign.com
          </p>
        </Link>
      </div>
    </div>
  );
};
