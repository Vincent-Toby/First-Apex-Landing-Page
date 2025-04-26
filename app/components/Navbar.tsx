"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed landingpage-container bg-[#fff] z-20  inset-x-0 top-0 h-[80px] flex flex-col gap-10">
      {/* Navbar */}
      <div className="flex items-center justify-between py-5">
        <h3 className="text-[#093B3B] text-[25px] font-bold">First apex</h3>

        {/* Navbar Items */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href={"#facilities"}
            className="text-zinc-600 text-[14px] hover:text-black cursor-pointer transition-all duration-150"
          >
            Our Facilities
          </Link>
          <Link
            href={"#staff"}
            className="text-zinc-600 text-[14px] hover:text-black cursor-pointer transition-all duration-150"
          >
            Staff
          </Link>
          <Link
            href={"#testimonial"}
            className="text-zinc-600 text-[14px] hover:text-black cursor-pointer transition-all duration-150"
          >
            Testimonials
          </Link>
          <button className="bg-[#093B3B] h-max text-sm px-[16px] py-[8px] rounded-full text-[#fff] cursor-pointer flex items-center justify-center">
            Contact Us
          </button>
        </div>

        {/* Hamburger Menu */}
        <svg
          onClick={handleMenu}
          className="md:hidden cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 6h18M3 12h18M3 18h18"
          />
        </svg>
      </div>

      {/* Hidden Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm transition-all duration-300">
          {/* Close Hamburger btn */}
          <div
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-4xl cursor-pointer"
          >
            &times;
          </div>

          {/* Hamburger Menu Items */}
          <div className="flex flex-col items-center w-full gap-[40px]">
            <Link
              onClick={() => setMenuOpen(false)}
              href={"#facilities"}
              className="text-black text-[16px]"
            >
              Courses
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              href={"#staff"}
              className="text-black text-[16px]"
            >
              Pages
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              href={"#testimonial"}
              className="text-black text-[16px]"
            >
              About Us
            </Link>
            <button className="bg-[#093B3B] h-max text-sm px-[16px] py-[8px] rounded-full text-[#fff] cursor-pointer flex items-center justify-center">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
