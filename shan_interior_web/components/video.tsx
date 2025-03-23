"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import play from '../assets/play.svg'


const VideoPlayer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full  mx-auto">
            {/* Background Image */}
            <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
                <Image
                    src="/assets/video-thumbnail.jpg" // Change to your image path
                    alt="Video Thumbnail"
                    width={800}
                    height={450}
                    className="w-full rounded-lg shadow-lg object-cover"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg group-hover:bg-black/50 transition">
                    <Image src={play} alt="play" />
                </div>
            </div>

            {/* Video Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
                    <div className="relative w-full max-w-2xl p-4">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-4 text-white text-xl font-bold"
                        >
                            ✕
                        </button>

                        {/* Embedded Video */}
                        <div className="relative w-full pt-[56.25%]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                                src="https://www.youtube-nocookie.com/embed/9md3cBx64kU"
                                title="Video"
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
