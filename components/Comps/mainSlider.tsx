"use client";
import React from "react";

import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "../ui/scroll-area";
import { TfiLocationPin } from "react-icons/tfi";
import ClipLoader from "react-spinners/ClipLoader";

// const Projectcontent = [
//     { title: 'Four seasons hotel',
//     location: "Sharm El Sheikh",
//     description: "Loremss ipsum dolor sit amet consectetur. Nascetur condimentum enim ac sociis tellus pulvinar mi id. Orci curabitur dolor a posuere. Vulputate in feugiat libero dui eu vel aliquet suscipit. ",
//     imagesPath:'project1',
//     imagesID:[ 1,2,3,4,5,6] },
//   ];

export const MainSlider = ({
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
  // const [imagePath, setImagePath] = React.useState('project1')
  const [selectedImage, setSelectedImage] = React.useState<string>(
    content.images[0].image
  );
  const [index, setIndex] = React.useState<number>(0);

  const next = () => {
    setSelectedImage(content.images[index + 1].image);
    setIndex(index + 1);
    console.log(index, "  ", content.images.length - 2);
  };
  const prev = () => {
    setSelectedImage(content.images[index - 1].image);
    setIndex(index - 1);
  };

  return (
    <div className="flex w-full h-[90vh]   flex-col sm:flex-row  justify-between ">
      <div className="relative w-full  flex">
        <div className="sm:h-[90vh] flex items-center justify-center w-full overflow-hidden bg-secondary">
          <Image
            src={selectedImage || content.images[0].image}
            alt={""}
            width={3000}
            height={3000}
            className="object-contain object-center w-full h-full "
          />
        </div>

        <div className="flex absolute top-[50%] justify-between w-[100%] items-center p-4">
          <Button
            className="w-[42px] h-[42px]"
            variant={"outline"}
            size={"icon"}
            disabled={index <= 0}
            onClick={() => prev()}
          >
            <ChevronLeftIcon />
          </Button>

          <Button
            className="w-[42px] h-[42px]"
            variant={"outline"}
            size={"icon"}
            disabled={index > content.images.length - 2}
            onClick={() => next()}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>

      <div className=" sm:min-w-[350px]  sm:p-4 p-2 space-y-4">
        <h2 className=" text-3xl border-b pb-2 my-4">{content.title}</h2>
        <p className="flex gap-1 items-center bg-secondary p-1 w-fit rounded-lg pr-4">
          <TfiLocationPin /> {content.location}
        </p>
        <ScrollArea className=" w-full sm:h-full max-h-[82%] p-1 ">
          <p>{content.description}</p>

          <div className=" grid grid-cols-3 p-2 gap-4 mt-8">
            {!content.images ? (
              <ClipLoader />
            ) : (
              content.images.map((image, i: number) => {
                return (
                  <div
                    key={i}
                    className={`h-[100px] cursor-pointer w-[100px] overflow-hidden rounded-lg ${
                      selectedImage === image.image && " shadow-lg"
                    }`}
                    onClick={() => {
                      setIndex(i);
                      setSelectedImage(image?.image);
                    }}
                  >
                    <Image
                      src={image.image}
                      alt={""}
                      width={200}
                      height={200}
                      className="h-full object-cover"
                    />
                  </div>
                );
              })
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
