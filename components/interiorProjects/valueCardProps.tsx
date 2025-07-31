import Image from "next/image";
import { valueItems } from "../../mockData/interiorValue";

export default function ValueCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto md:px-6 items-center">
      {valueItems.map((item, index) => (
        <div
          key={index}
          className="relative w-80 h-80 rounded-lg overflow-hidden group perspective"
          style={{ perspective: "1000px" }}
        >
          {/* Card Container - handles the flip */}
          <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180 cursor-pointer">
            {/* Front Side - Image Only */}
            <div className="absolute w-full h-full backface-hidden">
              <Image
                src={item.imageSrc}
                alt={item.altText}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
                priority // Ensures faster loading
              />
            </div>
            
            {/* Back Side - Content */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#1a1a1a] flex flex-col justify-center items-center p-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white text-base">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
      
      {/* CSS for flip card functionality */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
