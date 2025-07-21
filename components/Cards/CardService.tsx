import React from "react";
import Image from "next/image";
import { CircleLoader } from "react-spinners";
import design from "../../assets/home/services/design.png";
import space from "../../assets/home/services/space.png";
import woman from "../../assets/home/services/woman.png";
import management from "../../assets/home/services/management.png";
import chair from "../../assets/home/services/chair.png";

interface CardService_Props {
  className?: string;
  children?: React.ReactNode;
  image: string;
  text: string;
  description?: string;
}

const GridLayout: React.FC = () => {
  const data = [
    {
      bg: design,
      title: "Expert Professional Design",
      content:
        "Our design team is readily available to offer 3D renditions tailored to the unique ideas of our client.",
    },
    {
      bg: space,
      title: "Space Optimization",
      content:
        "Our space planning and optimization techniques transforms even the most challenging layouts into beautiful spaces.",
    },
    {
      bg: management,
      title: "Design Management",
      content:
        "Our unique management of our client’s project from inception to final delivery ensures that our client’s vision is translated into reality within a set timeframe and budget.",
    },
    {
      bg: chair,
      title: "Procurement",
      content:
        "Our procurement service is your gateway to accessing the finest furniture and decor elements, meticulously curated to elevate your space to new heights of elegance and functionality.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-4 gap-4 p-6 w-full h-[80rem] sm:h-[45rem] mx-auto">
      {/* Div 1 - Spans Full Height */}
      <div className="relative sm:row-span-4 sm:col-span-1 flex items-center justify-center rounded-lg shadow-md text-white text-xl  p-6">
        <Image
          src={woman}
          alt="Div 1"
          fill
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/20 bg-blend-multiply rounded-lg"></div>
        <div className="absolute z-10 left-4 top-4 text-white">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            Quick Consultation
          </p>
          <p className="text-xs sm:text-sm md:text-sm w-72 sm:w-80">
            Our team can provide swift guidance and personalized advice tailored
            to your interior design needs.
          </p>
        </div>
      </div>

      {/* Div 2 - Spans 2 Rows */}
      {data.map((a, i) => (
        <div
          key={i}
          className="relative sm:row-span-2 sm:col-span-1 flex items-center justify-center rounded-lg shadow-md p-6"
        >
          <Image
            src={a.bg}
            alt="Div 2"
            fill
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/20 bg-blend-multiply rounded-lg"></div>
          <div className="absolute z-10 left-4 top-4 text-white">
            <p className="text-lg font-bold sm:text-xl md:text-2xl  mb-2">
              {a.title}
            </p>
            <p className="text-xs opacity-85 sm:text-sm md:text-sm w-72 sm:w-80">
              {a.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CardService = ({
  className,
  children,
  image,
  text,
  description,
}: CardService_Props) => {
  const [imageLoading, setImageLoading] = React.useState(true);

  return (
    <div className={className}>
      <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
        {imageLoading && (
          <div className={"absolute h-full w-full bg-black/50 z-30 flex justify-center items-center"}>
            <CircleLoader size={50} color="#ffffff" loading={true} />
          </div>
        )}
        <Image
          src={image}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          onLoadingComplete={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
        />
      </div>
      {children}
    </div>
  );
};

export default GridLayout;
