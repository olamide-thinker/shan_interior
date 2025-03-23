import Image from 'next/image';
import React from 'react'
import {brandItems} from '../../assets/brands/brands'

const BrandLogos = () => {
    return (
      <section className="py-12 ">
        <h2 className="text-center text-lg font-semibold text-black mb-6">
          Brand we have worked with
        </h2>
  
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {brandItems.map((brand, index) => (
            <div key={index} className="relative w-32 h-16 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Image src={brand.src} alt={brand.alt} layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default BrandLogos;