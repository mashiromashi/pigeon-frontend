import React, { useState } from "react";
import mainVideo from "assets/video/Pigeon-Brand-Video-Cropped.mp4";
import { Backdrop } from "@mui/material";
import ReactPlayer from "react-player";

const Video = () => {
  const [showVideo, setShowVide] = useState(false);
  return (
    <React.Fragment>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showVideo}
        onClick={() => {
          setShowVide(false);
        }}
      >
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=43b7cDijEK0"
        />
      </Backdrop>

      <section className="relative">
        <video
          className="w-full min-h-screen object-cover object-center"
          autoPlay="autoplay"
          loop="loop"
          muted
        >
          <source src={mainVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 px-6 md:px-10 xl:px-0">
          <div
            className="
  max-w-screen-sm
  mx-auto
  flex
  items-center
  justify-center
  h-full
"
          >
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white">
                Babies grow in different ways &amp; every way is unique
              </h3>
              <button
                onClick={() => setShowVide(true)}
                className="
      px-6
      pt-4
      pb-3
      rounded-full
      bg-primary
      text-white text-sm
      font-bold
      mt-6
      hover:bg-white hover:text-primary
      transition-color
      duration-500
    "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block h-6 w-6 -mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch them in action
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Video;
