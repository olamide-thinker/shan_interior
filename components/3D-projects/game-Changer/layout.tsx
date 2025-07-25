import React from "react";
import Image from "next/image";

// Import Images
import build from "@/assets/3dprojects/gridIcons/build.png";
import rating from "@/assets/3dprojects/gridIcons/rating.png";
import feedback from "@/assets/3dprojects/gridIcons/feedback.png";
import layout from "@/assets/3dprojects/gridIcons/layout.png";

// Define Box Data for Reusability
const gridBoxes = [
  {
    id: 1,
    bgColor: "bg-[#e1ece4]",
    img: build,
    title: "Visualize Before You Build",
    text: "Avoid guesswork—visualize your space in 3D before making decisions. No more costly surprises or last-minute changes.",
    rowSpan: "row-span-3",
    textColor: "text-gray-800",
    flag: "col",
  },
  {
    id: 2,
    bgColor: "bg-[#e1ece4]",
    img: layout,
    title: "",
    text: "Test layouts, colors, and materials in real time..",
    rowSpan: "row-span-2",
    textColor: "text-gray-800", // Dark text for better
    flag: "col-reverse",
  },
  {
    id: 3,
    bgColor: "bg-[#e1ece4]",
    img: rating,
    title: "Immersive Experience",
    text: "Once finalized, easily export your design in multiple formats for contractors and suppliers, ensuring precision in implementation.",
    rowSpan: "row-span-4",
    textColor: "text-gray-800",
    flag: "col",
  },
  {
    id: 4,
    bgColor: "bg-[#e1ece4]",
    img: feedback,
    title: "",
    text: "Share designs, get feedback, and refine instantly.",
    rowSpan: "row-span-3",
    textColor: "text-gray-800", // Darker text for readability
    flag: "col",
  },
];

const GridLayout = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Title */}
      <p className="text-center text-2xl font-bold text-gray-800">
        Why Our 3D Service is a Game-Changer
      </p>

      {/* Grid Layout */}
      <div className="flex  flex-col sm:flex-row gap-4 ">
        {gridBoxes.map((box) => (
          <div
            key={box.id}
            className={`${box.bgColor} ${box.rowSpan}  mb-2 rounded-2xl p-4 min-h-fit sm:min-h-full border border-red flex  justify-center  items-center  gap-3 shadow-md `}
          >
            <div className={'flex items-center justify-between  gap-4'}>

            {/* Image */}
            <Image
              src={box.img}
              className="w-auto h-[50px] object-contain"
              alt={box.title}
              width={250}
              height={400}
            />

            {/* Title */}
            <div>
              <h3 className={`text-lg font-semibold ${box.textColor}`}>
                {box.title}
              </h3>

              {/* Description */}
              <p className={`text-sm opacity-90 font-bold ${box.textColor}`}>
                {box.text}
              </p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLayout;
