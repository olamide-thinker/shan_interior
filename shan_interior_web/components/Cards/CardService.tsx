import React from "react";
import Image from "next/image";
import design from '../../assets/home/services/design.png';
import space from '../../assets/home/services/space.png';
import woman from '../../assets/home/services/woman.png';
import management from '../../assets/home/services/management.png';
import chair from '../../assets/home/services/chair.png';

const GridLayout: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-4 gap-4 p-6 w-full h-[80rem] sm:h-[40rem] mx-auto">{/* Div 1 - Spans Full Height */}
      <div className="relative sm:row-span-4 sm:col-span-1 flex items-center justify-center rounded-lg shadow-md text-white text-xl font-bold p-6">
        <Image src={woman} alt="Div 1" fill className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
        <div className="absolute z-10 left-4 top-4 text-white">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Expert Professional Design</p>
          <p className="text-sm sm:text-base md:text-lg w-72 sm:w-80">
            Our design team is readily available to offer 3D renditions tailored to the unique ideas of our client.
          </p>
        </div>
      </div>

      {/* Div 2 - Spans 2 Rows */}
      <div className="relative sm:row-span-2 sm:col-span-1 flex items-center justify-center rounded-lg shadow-md p-6">
        <Image src={design} alt="Div 2" fill className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
        <div className="absolute z-10 left-4 top-4 text-white">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Creative Design Solutions</p>
          <p className="text-sm sm:text-base md:text-lg w-72 sm:w-80">
            We blend innovation with expertise to create visually stunning and functional designs.
          </p>
        </div>
      </div>

      {/* Div 3 - Spans 2 Rows */}
      <div className="relative sm:row-span-2 sm:col-span-1 flex items-center justify-center rounded-lg shadow-md p-6">
        <Image src={space} alt="Div 3" fill className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
        <div className="absolute z-10 left-4 top-4 text-white">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Optimized Workspaces</p>
          <p className="text-sm sm:text-base md:text-lg w-72 sm:w-80">
            We design workspaces that maximize productivity and aesthetics.
          </p>
        </div>
      </div>

      {/* Div 4 - Spans 2 Rows */}
      <div className="relative sm:row-span-2 sm:col-span-1 flex items-center justify-center rounded-lg shadow-md p-6">
        <Image src={management} alt="Div 4" fill className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 bg-white/40 rounded-lg"></div>
        <div className="absolute z-10 left-4 top-4 text-black">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Project Management</p>
          <p className="text-sm sm:text-base md:text-lg w-72 sm:w-80">
            From concept to completion, we oversee projects for seamless execution.
          </p>
        </div>
      </div>

      {/* Div 5 - Spans 2 Rows */}
      <div className="relative sm:row-span-2 sm:col-span-1 flex items-center justify-center rounded-lg shadow-md p-6">
        <Image src={chair} alt="Div 5" fill className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
        <div className="absolute z-10 left-4 top-4 text-white">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Ergonomic Seating</p>
          <p className="text-sm sm:text-base md:text-lg w-72 sm:w-80">
            Experience comfort and support with our range of ergonomic seating solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
