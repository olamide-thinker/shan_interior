import Image from "next/image";
import { aboutPageItems } from "../../mockData/aboutHero";

const AboutHero = () => {
  return (
    <div className="grid grid-cols-2 gap-6 w-full mx-auto mt-10">
      {aboutPageItems.map((card, index) => (
        <div key={index} className="row-span-2 flex justify-center">
          {/* Background Image taking 2 columns */}
          <Image
            src={card.imageSrc}
            alt={card.altText}
            width={1200} // Adjust width to match layout
            height={500}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default AboutHero;
