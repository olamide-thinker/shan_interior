"use client";
import React from "react";

import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "../ui/scroll-area";
import { TfiLocationPin } from "react-icons/tfi";
import ClipLoader from "react-spinners/ClipLoader";
import { CircleLoader } from "react-spinners";

// const Projectcontent = [
//     { title: 'Four seasons hotel',
//     location: "Sharm El Sheikh",
//     description: "Loremss ipsum dolor sit amet consectetur. Nascetur condimentum enim ac sociis tellus pulvinar mi id. Orci curabitur dolor a posuere. Vulputate in feugiat libero dui eu vel aliquet suscipit. ",
//     imagesPath:'project1',
//     imagesID:[ 1,2,3,4,5,6] },
//   ];

export const MainSlider = ({
  content,
  showOpenButton = true,
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
  showOpenButton?: boolean;
}) => {
  const [selectedImage, setSelectedImage] = React.useState<string>(content.images[0].image);
  const [index, setIndex] = React.useState<number>(0);
  const [mainImageLoading, setMainImageLoading] = React.useState(true);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [showSwipeHint, setShowSwipeHint] = React.useState(true);
  const [thumbnailLoading, setThumbnailLoading] = React.useState<{[key: number]: boolean}>(() => {
    return content.images.reduce((acc, _, i) => ({ ...acc, [i]: true }), {});
  });

  // Hide swipe hint after 3 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const next = () => {
    if (index < content.images.length - 1) {
      setSelectedImage(content.images[index + 1].image);
      setMainImageLoading(true);
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setSelectedImage(content.images[index - 1].image);
      setMainImageLoading(true);
      setIndex(index - 1);
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle touch gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    // Require at least 50px swipe distance
    if (Math.abs(diff) > 50) {
      if (diff > 0 && index < content.images.length - 1) {
        next();
      } else if (diff < 0 && index > 0) {
        prev();
      }
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-[90vh] relative">
      {/* Main image section */}
      <div className="relative w-full h-[60vh] lg:h-full">
        <div
          className="absolute inset-0 flex items-center justify-center bg-secondary"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Swipe hint overlay */}
          {showSwipeHint && (
            <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none lg:hidden">
              <div className="bg-black/70 text-white px-6 py-3 rounded-full flex items-center gap-2 animate-fade-out">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Swipe to navigate
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          )}

          {mainImageLoading && (
            <div className="absolute inset-0 bg-black/50 z-30 flex justify-center items-center">
              <CircleLoader size={50} color="#ffffff" loading={true} />
            </div>
          )}
          <Image
            src={selectedImage || content.images[0].image}
            alt={content.title || ""}
            width={3000}
            height={3000}
            priority
            className="object-contain w-full h-full"
            onLoadingComplete={() => setMainImageLoading(false)}
            onError={() => setMainImageLoading(false)}
          />
        </div>

        {/* Navigation buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
          <Button
            className="w-10 h-10 pointer-events-auto bg-white/80 hover:bg-white"
            variant="outline"
            size="icon"
            disabled={index <= 0}
            onClick={prev}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>

          <Button
            className="w-10 h-10 pointer-events-auto bg-white/80 hover:bg-white"
            variant="outline"
            size="icon"
            disabled={index >= content.images.length - 1}
            onClick={next}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Info and thumbnails section */}
      <div className="w-full lg:w-[350px] h-[40vh] lg:h-full overflow-y-auto p-4 space-y-4 bg-white">
        <h2 className="text-xl sm:text-2xl font-semibold border-b pb-2">{content.title}</h2>
        <p className="flex items-center gap-2 text-sm bg-secondary p-2 rounded-lg">
          <TfiLocationPin /> {content.location}
        </p>

        {showOpenButton && (
          <Button
            onClick={() => {
              const projectUrl = `/project/${encodeURIComponent(
                content.title.toLowerCase().replace(/\s+/g, "-")
              )}`;
              window.open(projectUrl, "_blank");
            }}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Open in New Page
          </Button>
        )}

        <ScrollArea className="h-full pr-4">
          <p className="text-sm leading-relaxed mb-6">{content.description}</p>

          <div className="grid grid-cols-3 gap-2">
            {content.images?.map((image, i) => (
              <div
                key={i}
                className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
                  selectedImage === image.image 
                    ? "ring-2 ring-black" 
                    : "hover:opacity-80"
                }`}
                onClick={() => {
                  setIndex(i);
                  setSelectedImage(image.image);
                  setMainImageLoading(true);
                }}
              >
                {thumbnailLoading[i] && (
                  <div className="absolute inset-0 bg-black/50 z-30 flex items-center justify-center">
                    <CircleLoader size={20} color="#ffffff" loading={true} />
                  </div>
                )}
                <Image
                  src={image.image}
                  alt=""
                  fill
                  className="object-cover"
                  onLoadingComplete={() => {
                    setThumbnailLoading(prev => ({...prev, [i]: false}));
                  }}
                  loading={i < 6 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
