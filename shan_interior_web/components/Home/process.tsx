"use client";
import React from "react";
import { steps } from "../../mockData/steps";

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
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-12">
        {steps.map((step: Step, index: number) => (
          <div
            key={step.id}
            className={`relative bg-white shadow-lg rounded-xl p-6 transition-transform transform ${
              index % 2 === 0 ? "rotate-3" : "-rotate-3"
            }`}
          >
            {/* Step Label */}
            <div className="absolute top-5 left-0 -translate-x-1/2 bg-green-200 text-xs px-2 py-1 rounded-full shadow-md">
                {`${step.steps}`}
            </div>

            {/* Placeholder Image */}
            <div className="w-full h-40 md:h-48 lg:h-56 bg-gray-200 rounded-lg mb-4"></div>

            {/* Title & Description */}
            <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
