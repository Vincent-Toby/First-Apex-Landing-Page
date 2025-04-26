"use client";
import React from "react";
import { useState, useEffect } from "react";

interface CustomerTestimonial {
  quote: string;
  customer: string;
  id: number;
}

const testimonials: CustomerTestimonial[] = [
  {
    id: 1,
    quote:
      "I'd advice every parent to admit their daughter in this great school",
    customer: "Adewuyi francis",
  },
  {
    id: 2,
    quote:
      "My daughter scored the highest jamb score world wide. Thank you first apex school",
    customer: "Onadumoku Johnson",
  },
  {
    id: 3,
    quote: "My son played for the football team and won a medal",
    customer: "Willams Victoria",
  },
];

export default function Testimonials() {
  const [currentComment, setCurrentComment] = useState(0);

  useEffect(() => {
    const chaneTime = setInterval(() => {
      setCurrentComment((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(chaneTime);
  }, []);

  return (
    <div id="testimonial" className="landingpage-container h-max py-[80px] sm:py-[140px] gap-[100px] bg-white transition-all duration-200 flex flex-col items-center justify-start w-full">
      <div className="text-center mx-auto w-max flex flex-col gap-[4px]">
        <h3 className="text-2xl md:text-3xl font-bold">
          Testimonials
        </h3>
        <p className="text-[14px] text-zinc-600 font-medium">This is what our parents are saying</p>
      </div>

        <div className="transition-opacity text-center max-w-3xl flex flex-col gap-[16px] duration-1000 ease-in-out">
          <h3 className="text-[24px] italic">
            "{testimonials[currentComment].quote}"
          </h3>
          <p className="text-[14px] text-zinc-500">
            ~ {testimonials[currentComment].customer}
          </p>
        </div>
    </div>
  );
}
