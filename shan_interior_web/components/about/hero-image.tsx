import Image from "next/image";
import { aboutPageItems } from "../../mockData/aboutHero";

const AboutHero = () => {
  return (
    <div className="flex flex-wrap w-full mx-auto gap-6 mt-10">
      {aboutPageItems.map((card, index) => (
        <div key={index} className="flex w-full max-w-md">
          {/* Background Image */}
          <Image
            src={card.imageSrc}
            alt={card.altText}
            width={659}
            height={400}
            className="rounded-lg object-cover"
          />

          
        </div>
      ))}
    </div>
  );
};

export default  AboutHero ;
