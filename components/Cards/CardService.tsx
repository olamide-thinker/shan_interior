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
      title: "Transparent communication, end-to-end",
      content:
        "We maintain open, honest dialogue throughout your project journey, providing regular updates, clear explanations, and responsive feedback channels that keep you informed and confident at every stage.",
    },
    {
      bg: space,
      title: "Clear timelines, efficient project delivery",
      content:
        "We establish realistic schedules and milestones from day one, leveraging streamlined processes and expert resource management to complete your project on time and within budget, without compromising on quality or attention to detail.",
    },
    {
      bg: management,
      title: "Personalized, client-first designs",
      content:
        "We prioritize your preferences, lifestyle, and aspirations in every design decision, creating bespoke spaces that reflect your unique personality and meet your specific functional needs, ensuring the final result is distinctly yours and perfectly tailored to how you live.",
    },
    {
      bg: chair,
      title: "Future-ready materials & technologies",
      content:
        "We integrate cutting-edge sustainable materials and smart technologies that enhance both aesthetics and functionality, ensuring your space remains innovative, efficient, and ahead of design trends for years to come.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-4 gap-4 p-6 w-full h-[80rem] sm:h-[45rem] mx-auto">
      {/* Div 1 - Spans Full Height */}
      <div className="relative sm:row-span-4 sm:col-span-1 flex items-center justify-center rounded-lg shadow-md text-white text-xl p-6 group">
        <Image
          src={woman}
          alt="Div 1"
          fill
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300 bg-blend-multiply rounded-lg"></div>
        <div className="absolute z-10 left-4 top-4 text-white">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            Proven expertise across residential, commercial & hospitality spaces
          </p>
          <p className="text-xs sm:text-sm md:text-md w-72 sm:w-80">
            With extensive experience designing for homes, offices, and hospitality venues, our portfolio showcases versatility and mastery across diverse environments and client requirements.
          </p>
        </div>
      </div>

      {/* Div 2 - Spans 2 Rows */}
      {data.map((a, i) => (
        <div
          key={i}
          className="relative sm:row-span-2 sm:col-span-1 flex items-center justify-center rounded-lg shadow-md p-6 group"
        >
          <Image
            src={a.bg}
            alt="Div 2"
            fill
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300 bg-blend-multiply rounded-lg"></div>
          <div className="absolute z-10 left-4 top-4 text-white">
            <p className="text-lg font-bold sm:text-xl w-[90%] md:text-2xl  mb-2">
              {a.title}
            </p>
            <p className="text-xs opacity-85 sm:text-sm md:text-md w-72 sm:w-80">
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
