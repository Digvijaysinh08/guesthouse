import React from "react";
import video from "../../assets/video.mp4";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-fit bg-gray-100">
        <h1 className=" uppercase text-3xl md:text-5xl font-bold text-gray-900 m-10 text-center shadow-lg p-4 rounded-lg bg-white transform transition duration-300 hover:scale-105">
          Welcome to Kingsukh Guest House
        </h1>
        <div className="w-full max-w-4xl shadow-2xl rounded-lg overflow-hidden">
          <video
            src={video}
            muted
            autoPlay
            loop
            type="video/mp4"
            className="object-cover w-full h-fit"
          />
        </div>
      </div>
    </>
  );
}
