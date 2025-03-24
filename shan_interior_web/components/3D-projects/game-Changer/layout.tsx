import React from "react";
import Image from "next/image";

// Import Images
import build from "@/assets/3dprojects/gridIcons/build.png";

// Define Box Data for Reusability
const gridBoxes = [
  {
    id: 1,
    bgColor: "bg-[#80011f]",
    img: build,
    title: "Visualize Before You Build",
    text: "Avoid guesswork—visualize your space in 3D before making decisions. No more costly surprises or last-minute changes.",
    rowSpan: "row-span-3",
    textColor: "text-white",
  },
  {
    id: 2,
    bgColor: "bg-[#ecdcbb]",
    img: build,
    title: "Seamless Integration",
    text: "Integrate your designs effortlessly into our system, allowing easy modifications and instant previews.",
    rowSpan: "row-span-2",
    textColor: "text-gray-900", // Dark text for better contrast
  },
  {
    id: 3,
    bgColor: "bg-[#f39227]",
    img: build,
    title: "Interactive Customization",
    text: "Modify elements in real-time and watch your vision come to life. Experiment with different layouts, colors, and materials.",
    rowSpan: "row-span-4",
    textColor: "text-white",
  },
  {
    id: 4,
    bgColor: "bg-[#e1ece4]",
    img: build,
    title: "Realistic 3D Rendering",
    text: "Experience ultra-realistic visuals, ensuring precise detailing and accuracy before executing your project.",
    rowSpan: "row-span-3",
    textColor: "text-gray-800", // Darker text for readability
  },
];

const GridLayout = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Title */}
      <p className="text-center text-2xl font-bold text-gray-800">
        Why Our 3D Feature is a Game-Changer
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 grid-rows-5 gap-6 w-[90%] md:w-[70%] lg:w-[50%] h-fit mx-auto">
        {gridBoxes.map((box) => (
          <div
            key={box.id}
            className={`${box.bgColor} ${box.rowSpan} rounded-2xl p-6 flex flex-col justify-center items-start gap-3 shadow-md`}
          >
            {/* Image */}
            <Image src={box.img} alt={box.title} width={150} height={40} />

            {/* Title */}
            <h3 className={`text-lg font-semibold ${box.textColor}`}>{box.title}</h3>

            {/* Description */}
            <p className={`text-sm opacity-90 ${box.textColor}`}>{box.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLayout;
