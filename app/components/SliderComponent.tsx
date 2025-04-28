"use client";

import React, { useState, useEffect } from "react";

interface Activities {
  title: string;
  desc: string;
  image: string;
  id: number;
}

const activity: Activities[] = [
  {
    id: 1,
    title: "Title1",
    image: "images/laboratory.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Title2",
    image: "images/badmitton.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Title3",
    image: "images/classroom.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 4,
    title: "Title4",
    image: "images/merry-go-round.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 5,
    title: "Title5",
    image: "images/footballteam.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

export const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? activity.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === activity.length - 1 ? 0 : prev + 1));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentActivity = activity[currentIndex];

  return (
    <div className="landingpage-container py-[80px] md:h-[100dvh] h-[500px] relative">
      {/* Left arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={prevSlide}
        className="size-[32px] hover:scale-[110%] p-1 z-20 hidden sm:block cursor-pointer transition-all duration-200 bg-black/50 text-white rounded-full absolute left-[20px] top-1/2 -translate-y-[50%] active:bg-gray-300"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="m15 18l-6-6l6-6"
        />
      </svg>

      {/* Right arrow */}
      <svg
        onClick={nextSlide}
        className="size-[32px] hover:scale-[110%] p-1 z-20 hidden sm:block cursor-pointer transition-all duration-200 bg-black/50 text-white rounded-full absolute right-[20px] top-1/2 -translate-y-[50%] active:bg-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="m9 18l6-6l-6-6"
        />
      </svg>

      <div className="relative h-full">
        <div className="inset-0 absolute flex flex-col gap-[40px] items-start justify-between z-10 bg-[#093B3B]/60 h-full p-[24px] md:px-[40px] py-[80px] rounded-2xl text-white">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              {currentActivity.title}
            </h2>
            <p className="text-base md:text-lg">{currentActivity.desc}</p>
          </div>
        </div>

        <img
          className="object-cover rounded-2xl h-full w-full transition-all duration-500"
          src={currentActivity.image}
          alt={currentActivity.title}
        />
      </div>
    </div>
  );
};
