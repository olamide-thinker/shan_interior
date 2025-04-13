import React from "react";
// import { Button } from "../ui/button";
import Link from "next/link";

interface HeaderTitleProps {
  title: string;
  heading: string;
  subHeading?: string;
  description?: string;
  button?: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  heading,
  subHeading,
  description,
  button,
}) => {
  return (
    <header className="flex   flex-col lg:flex-row h-fit md:h-[8rem] items-end justify-between px-6 py-0 gap-4">
      {/* Title & Heading Section */}
      <div className="max-w-lg  h-fit">
        <p className="text-sm md:text-base font-medium italic mb-6">{title}</p>
        <div className=" font-bold leading-[2.5rem]">
          <h1 className="text-[#8b8b8b] text-[2rem] md:text-[2.5rem] ">
            {heading}
          </h1>

          {subHeading && (
            <span className="text-[2rem] md:text-[2.5rem]">{subHeading}</span>
          )}
        </div>
      </div>

      {/* Description Section */}
      {description && (
        <div className="max-w-xl flex flex-col gap-4">
          <p className="text-[#8b8b8b] text-sm md:text-base">
            {description}{" "}
            {button && (
              <span className="underline font-bold  text-primary">
                <Link href={"#"}>Explore our {title}</Link>
              </span>
            )}
          </p>
          <div className="inline">
            {/* {button && (
              <Button className="bg-black w-fit px-5 py-2 md:px-6 md:py-3 rounded-full text-white text-sm md:text-base">
                Explore
              </Button>
            )} */}
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderTitle;
