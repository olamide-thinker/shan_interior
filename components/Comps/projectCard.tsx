"use client";

import React from "react";
import { ProjectInfo } from "./projectInfo";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { Project_type } from "./getCloudinaryData";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { AiOutlineClose } from "react-icons/ai";
import { MainSlider } from "./mainSlider";

export const ProjectCard = ({ details }: { details: Project_type }) => {
  const [hovering, setHovering] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const content = {
    // imagesId:id,
    coverImage: details?.images[0]?.image || ("" as string),
    description: details.description,
    images: details?.images,
    location: details?.location as string,
    title: details.title,
  };

  const handleViewProject = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDialogOpen(true);
  };

  const handleDoubleClick = () => {
    setDialogOpen(true);
  };

  return (
    <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <div
        className=" rounded-lg overflow-x-hidden hover:shadow max-h-fit  relative  group"
        onMouseOut={() => setHovering(false)}
        // onTouchStart={()=> setHovering(!hovering)}
        onTouchStartCapture={() => setHovering(hovering)}
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onDoubleClick={handleDoubleClick}
      >
        {/* Background image */}

        <Image
          className="object-cover h-[500px]"
          src={content.coverImage}
          alt=""
          height={2000}
          width={3000}
        />

        {/* Foreground text */}
        {hovering && (
          <motion.div
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 1.1 }}

            className="flex flex-col justify-center items-center absolute bottom-10  w-full "
          >
            {content && <ProjectInfo content={content} />}
          </motion.div>
        )}

        <div className="p-4 flex justify-between items-center">
          <div>
            <p className="  text-lg  font-bold  ">{content.title}</p>
            <p className=" italic text-sm  ">{content.location}</p>
          </div>
          {/* View the Project button with pointer cursor and hover effects */}
          <button
              onClick={handleViewProject}
              className="inline-flex items-center justify-center px-4 py-2 bg-white text-black
                     rounded-md font-medium cursor-pointer transition-all duration-200
                     hover:bg-gray-100 hover:scale-105 active:scale-95"
          >
            View Project
          </button>

        </div>
      </div>
      
      <AlertDialogContent className="sm:max-w-[95vw] max-w-[98vw] max-h-[99vh] sm:max-h-[90vh]  overflow-hidden p-0 ">
        <AlertDialogCancel className=" absolute sm:right-4 sm:top-4 right-1 top-1 z-40 border-none w-fit rounded-full">
          <AiOutlineClose size={24} className=" text-black w-fit " />
        </AlertDialogCancel>
        <MainSlider content={content} />
      </AlertDialogContent>
    </AlertDialog>
  );
};
