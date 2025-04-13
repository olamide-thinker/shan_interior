"use client";

import React from "react";
import { ProjectInfo } from "./projectInfo";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { Project_type } from "./getCloudinaryData";

export const ProjectCard = ({ details }: { details: Project_type }) => {
  const [hovering, setHovering] = React.useState(false);

  const content = {
    // imagesId:id,
    coverImage: details?.images[0]?.image || ("" as string),
    description: details.description,
    images: details?.images,
    location: details?.location as string,
    title: details.title,
  };

  return (
    <div
      className=" rounded-lg overflow-x-hidden hover:shadow max-h-fit  relative  group"
      onMouseOut={() => setHovering(false)}
      // onTouchStart={()=> setHovering(!hovering)}
      onTouchStartCapture={() => setHovering(hovering)}
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
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
        <Button size={"sm"} className="rounded-full text-sm">
          View Project
        </Button>
      </div>
    </div>
  );
};
