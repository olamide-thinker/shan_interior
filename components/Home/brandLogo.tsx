"use client"

import Image from "next/image";
import React from "react";
import { CircleLoader } from "react-spinners";
import { brandItems } from "../../assets/brands/brands";

const BrandLogos = () => {
  const [imageLoading, setImageLoading] = React.useState<{[key: number]: boolean}>({});

  return (
    <section className="py-12 ">
      <h2 className="text-center text-lg font-semibold text-black mb-6">
        Brand we have worked with
      </h2>

      <div className="flex justify-center items-center gap-8 flex-wrap">
        {brandItems.map((brand, index) => (
          <div
            key={index}
            className="relative w-32 h-16 opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            {imageLoading[index] && (
              <div className={'absolute h-full w-full bg-black/50 z-30 flex justify-center items-center'}>
                <CircleLoader
                  size={20}
                  color="#ffffff"
                  loading={true}
                />
              </div>
            )}
            <Image
              src={brand.src}
              alt={brand.alt}
              width={500}
              height={500}
              className="w-full h-full object-contain"
              onLoadingComplete={() => {
                setImageLoading(prev => ({...prev, [index]: false}));
              }}
              onLoad={() => {
                setImageLoading(prev => ({...prev, [index]: true}));
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandLogos;
