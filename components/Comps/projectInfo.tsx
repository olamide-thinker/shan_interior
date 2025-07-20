import React from "react";
import Image from "next/image";

export const ProjectInfo = ({
  content,
}: {
  content: {
    title: string;
    location: string;
    description: string;
    images: {
      Image_id: string;
      image: string;
      caption: string;
    }[];
  };
}) => {
  console.log("123", content);

  return (
    <div className="flex relative flex-col gap-4  items-center z-50 bg-black/30 m-8 shadow bg-blend-multiply p-4 rounded-2xl mb-16">
      {/* <div className=" text-background space-y-4 p-4 rounded-lg ">
        <h3 className=" text-3xl font-semibold"> {content.title}</h3>

        <p className="text-sm line-clamp-2">{content.description}</p>
      </div> */}

      <div className=" flex gap-4 items-center justify-between shadow-2xl">
        {content?.images?.slice(0, 3).map((imageDetails, i) => (
          <div
            key={i}
            className="h-fit  max-w-[130px] group flex items-center justify-center"
          >
            {imageDetails && (
              <div className="relative rounded-xl h-[100px] overflow-x-hidden hover:scale-105  w-fit duration-700">
                {i == 2 && (
                  <p className="absolute z-40  h-full w-full bg-black/50 text-white items-center justify-center flex text-xl">
                    +{content.images.length + 1 - 4}
                  </p>
                )}
                <Image
                  src={imageDetails?.image}
                  alt="HeroImage"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover rounded-lg aspect-square "
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
