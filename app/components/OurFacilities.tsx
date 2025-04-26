"use client";
import { useState } from "react";

type Tab = "Play Ground" | "Laboratory" | "Classrooms" | "Sports" | "I.C.T" | "Art";

type Card = {
  id: number;
  title: string;
  image: string;
  category: Tab;
};

const tabs: Tab[] = [
  "Play Ground",
  "Laboratory",
  "Classrooms",
  "Sports",
  "I.C.T",
  "Art",
];

const cards: Card[] = [
  {
    id: 1,
    title: "Chemistry Lab",
    image: "images/laboratory.jpg",
    category: "Laboratory",
  },
  {
    id: 2,
    title: "Primary School Classroom",
    image: "images/classroom.jpg",
    category: "Classrooms",
  },
  {
    id: 3,
    title: "Merry-Go-Round",
    image: "images/merry-go-round.jpg",
    category: "Play Ground",
  },
  {
    id: 4,
    title: "Badminton Court",
    image: "images/badmitton.jpg",
    category: "Sports",
  },
  {
    id: 5,
    title: "Tabletennis",
    image: "images/tennis.jpg",
    category: "Sports",
  },
  {
    id: 6,
    title: "Tabletennis Court",
    image: "images/tabletennis.jpg",
    category: "Sports",
  },
  {
    id: 7,
    title: "Football Team",
    image: "images/footballteam2.jpg",
    category: "Sports",
  },
  {
    id: 8,
    title: "Cardboard Cloth Design",
    image: "images/creativity.jpg",
    category: "Art",
  },
  {
    id: 9,
    title: "Fun Area",
    image: "images/playground.jpg",
    category: "Play Ground",
  },
  {
    id: 10,
    title: "Taekwondo",
    image: "images/taekwondo.jpg",
    category: "Sports",
  },
  {
    id: 11,
    title: "I.C.T Laboratory",
    image: "https://fakeimg.pl/600x400",
    category: "I.C.T",
  },
];

export default function OurFacilities() {
  const [activeTab, setActiveTab] = useState<Tab>("Play Ground");

  const filteredCards = cards.filter((card) => card.category === activeTab);

  return (
    <div id="facilities" className="landingpage-container">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Our Facilities
      </h2>

      {/* tabs */}
      <div className="flex gap-[16px] md:gap-[24px] border-b border-gray-300 mb-6 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`border-b-2 py-2 text-[14px] cursor-pointer font-[500] transition-colors duration-200 ${
              activeTab === tab
                ? "border-[#093B3B] font-[600] text-[#093B3B]"
                : "border-transparent text-zinc-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* cards */}
      <div className="grid gap-x-[24px] gap-y-[40px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 dxl:grid-cols-4">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-[16px] cursor-pointer hover:shadow-xl overflow-hidden transition-all duration-300 hover:scale-[103%]"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-[240px] w-full object-cover"
            />
            <div className="px-[16px] py-[24px]">
              <h3 className="text-lg leading-none dfont-semibold mb-1">{card.title}</h3>
              <p className="text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente quae.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
