import Image from "next/image";
import { valueItems } from "../../mockData/interiorValue";

export default function ValueCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto md:px-6 items-center">
      {valueItems.map((item, index) => (
        <div
          key={index}
          className="relative w-80 h-80 rounded-lg  overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src={item.imageSrc}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
            priority // Ensures faster loading
          />
          {/* Overlay */}
        </div>
      ))}
    </div>
  );
}
