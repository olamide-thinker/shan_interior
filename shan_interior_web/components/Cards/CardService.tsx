import React from "react";

const GridLayout: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-4 gap-4 p-6 w-full h-[80rem] sm:h-[40rem] mx-auto">
      <div className="bg-blue-600 text-white p-6 flex items-center justify-center sm:row-span-4 sm:col-span-1 rounded-lg shadow-md">
        Div 1
      </div>
      <div className="bg-green-500 text-white p-6 flex items-center justify-center sm:row-span-2 sm:col-span-1 rounded-lg shadow-md">
        Div 2
      </div>
      <div className="bg-red-500 text-white p-6 flex items-center justify-center sm:row-span-2 sm:col-span-1 rounded-lg shadow-md">
        Div 3
      </div>
      <div className="bg-yellow-400 text-black p-6 flex items-center justify-center sm:row-span-2 sm:col-span-1 rounded-lg shadow-md">
        Div 4
      </div>
      <div className="bg-purple-600 text-white p-6 flex items-center justify-center sm:row-span-2 sm:col-span-1 rounded-lg shadow-md">
        Div 5
      </div>
    </div>
  );
};

export default GridLayout;
