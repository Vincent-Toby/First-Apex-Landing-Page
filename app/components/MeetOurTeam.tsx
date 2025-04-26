"use client";
import React from "react";
import { useRef } from "react";

interface StaffData {
  name: string;
  position: string;
  image: string;
  desc: string;
  id: number;
}

const staff: StaffData[] = [
  {
    id: 1,
    name: "staff1",
    position: "Principal",
    image: "https://fakeimg.pl/600x400",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    id: 2,
    name: "staff2",
    position: "Teacher",
    image: "https://fakeimg.pl/600x400",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    id: 3,
    name: "staff3",
    position: "Teacher",
    image: "https://fakeimg.pl/600x400",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    id: 4,
    name: "staff4",
    position: "Secetary",
    image: "https://fakeimg.pl/600x400",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    name: "staff5",
    position: "matron",
    image: "https://fakeimg.pl/600x400",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function MeetOurTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div id="staff" className="landingpage-container">
      <div className="relative flex flex-col gap-[24px]">
        <h3 className="text-[30px] text-center sm:text-left font-[700]">
          Our Wondefull Staff
        </h3>

        {/* Left arrow */}
        <svg
          onClick={scrollLeft}
          xmlns="http://www.w3.org/2000/svg"
          className="size-[32px] hover:scale-[110%] p-1 hidden sm:block cursor-pointer transition-all duration-200 bg-black/50 text-white rounded-full absolute left-[0px] top-1/2 -translate-y-[50%] active:bg-gray-300"
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
          onClick={scrollRight}
          className="size-[32px] hover:scale-[110%] p-1 hidden sm:block cursor-pointer transition-all duration-200 bg-black/50 text-white rounded-full absolute right-[0px] top-1/2 -translate-y-[50%] z-[10] active:bg-gray-300"
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

        {/* Staff cards */}
        <div
          ref={scrollRef}
          className="flex gap-[16px] scroll-smooth sm:overflow-x-hidden overflow-x-auto px-[48px] hide-scrollbar"
        >
          {staff.map((staff) => (
            <div
              key={staff.id}
              className="rounded-[8px] bg-white sm:min-w-[350px] min-w-7/9 overflow-hidden"
            >
              <img src={staff.image} alt="" className="object-cover h-[320px]" />
              <div className="px-[16px] py-[24px] flex flex-col gap-[8px]">
                <h3 className="text-[18px] capitalize">
                  {staff.name}
                </h3>
                <div className="flex flex-col gap-[4px]">
                <p className="text-zinc-500 text-[12px] font-[500]">
                  {staff.position}
                </p>
                <p className="text-[14px] text-zinc-700">{staff.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
