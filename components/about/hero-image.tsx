import Image from "next/image";
import { aboutPageItems } from "../../mockData/aboutHero";
import { CircleLoader } from "react-spinners";
import React from "react";

const AboutHero = () => {
  const [imageLoading, setImageLoading] = React.useState({
    left: true,
    right: true,
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mx-auto mt-4">
      {aboutPageItems.map((card, index) => (
        <div key={index} className="row-span-2 flex justify-center">
          {/* Background Image taking 2 columns */}
          <div className="relative h-[300px] sm:h-[600px] rounded-lg overflow-hidden">
            {imageLoading.left && (
              <div className="absolute h-full w-full bg-black/50 z-30 flex justify-center items-center">
                <CircleLoader size={50} color="#ffffff" loading={true} />
              </div>
            )}
            <Image
              src={card.imageSrc}
              alt={card.altText}
              width={2000} // Adjust width to match layout
              height={3000}
              className="rounded-lg object-cover w-[500px] h-auto"
              onLoadingComplete={() =>
                setImageLoading((prev) => ({ ...prev, left: false }))
              }
              onError={() => setImageLoading((prev) => ({ ...prev, left: false }))}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutHero;
