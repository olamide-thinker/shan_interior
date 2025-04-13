"use client";
import { Building } from "lucide-react";
import React from "react";

export const VideoPlayer = () => {
  const [playing, setPlaying] = React.useState(1);

  const experiences = [
    { item: 1, name: "Hilton Hotel", videoId: "TlMUknHQYLU" },
    { item: 2, name: "ABC Hotel", videoId: "Fm-w6xheCKI" },
    { item: 3, name: "Radisson Hotel", videoId: "waaZqDBUfKs" },
    { item: 4, name: "Dangote", videoId: "mcnTurv60kU" },
    { item: 5, name: "Lilly Land Hotel", videoId: "9xkxT2hY634" },
  ];

  const currentPlaying = experiences.filter((list) => list.item === playing);
  console.log("playing ", currentPlaying.flat());

  console.log(playing, experiences.length);

  return (
    <div
      id="project"
      className=" w-full p-2 md:p-16 items-center flex flex-col justify-center"
    >
      {/* <div className='border w-[100%] h-[100%] rounded-[60px] bg-black flex items-end f '> */}
      {currentPlaying && (
        <Player
          onEnd={() => {
            setPlaying(playing < experiences.length ? playing + 1 : 1);
          }}
          videoList={experiences}
          currentVideo={currentPlaying[0]?.videoId}
        />
      )}

      <div className=" flex flex-wrap md:flex-nowrap gap-2 w-full sm:pl-8">
        <div className=" flex gap-2 p-2 flex-wrap items-center justify-center ">
          {experiences.map((exp) => (
            <div
              className={`px-2 flex items-center rounded-sm bg-accent/15 ${
                currentPlaying[0].videoId === exp.videoId && "border-2"
              }`}
              onClick={() => {
                setPlaying(exp.item);
              }}
              key={exp.item}
            >
              <p className=" flex gap-2 items-center font-bold sm:text-2xl whitespace-nowrap  cursor-pointer tracking-wide">
                <Building size={16} /> {exp.name}
              </p>
              {/* {currentPlaying[0].videoId === exp.videoId && <div className='flex items-center'>
                <PlayIcon/>
                <p className=' italic'>Playing...</p>
            </div>  } */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

import YouTube from "react-youtube";

export const Player = ({ currentVideo, onEnd }: any) => {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
    },
  };

  return (
    <YouTube
      className="w-full"
      iframeClassName=" rounded-lg sm:rounded-3xl h-[320px] md:h-[85vh] w-full border border-none"
      videoId={currentVideo}
      opts={opts}
      onError={() => <p>Error...</p>}
      onEnd={onEnd}
    />
  );
};
