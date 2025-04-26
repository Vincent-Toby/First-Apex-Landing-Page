"use client";
import React, { useState } from "react";

type Props = {};

export default function Banner({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="h-[100dvh] landingpage-container flex items-center w-full">
      <div
        className="bg-cover relative w-full overflow-hidden bg-center rounded-[32px] dmb-[40px] h-[calc(100%-180px)] my-auto"
        style={{ backgroundImage: "url('/images/fas.jpg')" }}
      >
        <div className="w-full inset-0 absolute flex flex-col gap-[40px] items-start justify-between z-10 bg-[#093B3B]/90 h-full p-[24px] md:px-[40px] py-[80px] rounded-2xl">
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white/70 text-center md:text-left text-[14px]">
              Your child deserves to be here.
            </h4>
            <h3 className="text-white font-[700] text-[56px] leading-tight sm:leading-none tracking-wide sm:text-[70px] text-center md:text-left dmax-w-[36rem]">
              <span className="text-[28px] font-[300]">Welcome To:</span> <br />First Apex Schools
            </h3>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-[16px]">
            <p className="text-gray-200 text-[12px] sm:text-[14px] md:text-base text-center md:text-left max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              pariatur enim, quod harum mollitia quo fuga, rem officiis, amet
              commodi repellat consectetur ex et ut esse rerum! Sequi, cumque
              voluptatibus?
            </p>

            <button className="bg-white h-max text-sm px-[16px] py-[8px] rounded-full text-[#093B3B] cursor-pointer flex items-center justify-center">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
