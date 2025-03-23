import React from "react";

const GridLayout = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-center font-bold">Why Our 3D Feature is a Game-Changer</p>

    <div className="grid grid-cols-2 grid-rows-5 gap-5 w-[50%] h-[30rem] mx-auto">
      <div className="bg-blue-500 rounded-2xl p-4 text-white row-span-3">Div 1</div>
      <div className="bg-red-500 rounded-2xl p-4 text-white row-span-2">Div 2</div>
      <div className="bg-green-500 rounded-2xl p-4 text-white row-span-4">Div 3</div>
      <div className="bg-yellow-500 rounded-2xl p-4 text-white row-span-3">Div 4</div>
    </div>
    </div>
  );
};

export default GridLayout;
