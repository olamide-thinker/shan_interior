"use client";
import React from "react";
import { steps } from "../../mockData/steps";
import Image from "next/image";

// Define TypeScript Type for a Step
type Step = {
  id: number;
  title: string;
  description: string;
  steps: string;
};

const ProcessTimeline: React.FC = () => {
  return (
    <div className="w-full py-10 px-5 mt-10">
      {/* Responsive Grid Layout */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-12 justify-center">
        {steps.map((step: Step, index: number) => (
          <div
            key={step.id}
            className={`relative  shadow-lg rounded-xl p-6 transition-transform border cursor-default
              hover:scale-110 hover:rotate-0 hover:ring-2 ring-black transform ${
                index % 2 === 0 ? "rotate-3 bg-background" : "-rotate-3 bg-white"
              }`}
          >
            {/* Step Label */}
            <div className="absolute font-bold top-5 left-0 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-full shadow-md italic">
              {`${step.steps}`}
            </div>

            {/* Placeholder Image
            <div className="w-full h-40 md:h-48 lg:h-56 bg-gray-200 rounded-lg mb-4"></div> */}

            {/* Title & Description */}
            <h3 className="text-3xl font-semibold text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}

        {/* <div>
          <Image src={} />
        </div> */}
      </div>
    </div>
  );
};

export default ProcessTimeline;
