import Image from "next/image";
import { cardAbout } from "../../mockData/imageCard";

const ImageCard = () => {
  return (
    <div className="w-full  flex flex-wrap gap-6">
      {cardAbout.map((card, index) => (
        <div key={index} className="relative w-full max-w-md">
          {/* Background Image */}
          <Image
            src={card.imageSrc}
            alt={card.altText}
            width={1259}
            height={400}
            className="rounded-lg object-cover"
          />

          {/* Overlay */}
          <div className="absolute bottom-4 left-4 right-4  bg-transparent border-2 border-s-white text-white p-4 rounded-md">
            <p className="text-sm">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
