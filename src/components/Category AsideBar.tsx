"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface mytype {
  maxPrice?: [number, number];
  handleSliderChange?: (value: [number, number]) => void;
}

function CategoryAsideBar({ maxPrice, handleSliderChange }: mytype) {
  return (
    <aside className="lg:w-[20%] xl:w-[20%] hidden lg:block border-r px-5 py-6 bg-white space-y-10">
      {/* TYPE */}
      <div className="space-y-5">
        <h1 className="text-[#90A3BF] font-semibold text-xs">TYPE</h1>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
            <Checkbox checked={true} />
            Sport
            <span className="text-[#90A3BF] font-semibold text-xl">(10)</span>
          </div>
          <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
            <Checkbox checked={true} />
            SUV
            <span className="text-[#90A3BF] font-semibold text-xl">(12)</span>
          </div>
          <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
            <Checkbox />
            MPV
            <span className="text-[#90A3BF] font-semibold text-xl">(16)</span>
          </div>
          <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
            <Checkbox />
            Sedan
            <span className="text-[#90A3BF] font-semibold text-xl">(20)</span>
          </div>
          <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
            <Checkbox />
            Coupe
            <span className="text-[#90A3BF] font-semibold text-xl">(14)</span>
          </div>
          <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
            <Checkbox />
            Hatchback
            <span className="text-[#90A3BF] font-semibold text-xl">(14)</span>
          </div>
        </div>
      </div>

      {/* CATEGORY */}
      <div className="space-y-5">
        <h1 className="text-[#90A3BF] font-semibold text-xs ">Category</h1>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
            <Checkbox />2 Person
            <span className="text-[#90A3BF] font-semibold text-xl">(10)</span>
          </div>
          <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
            <Checkbox />4 Person
            <span className="text-[#90A3BF] font-semibold text-xl">(14)</span>
          </div>
          <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
            <Checkbox />6 Person
            <span className="text-[#90A3BF] font-semibold text-xl">(12)</span>
          </div>
          <div className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
            <Checkbox checked={true} />8 or More
            <span className="text-[#90A3BF] font-semibold text-xl">(16)</span>
          </div>
        </div>
      </div>

      {/* PRICE */}
      <div className="flex flex-col gap-5 ">
        <h1 className="text-[#90A3BF] font-semibold text-xs ">Price</h1>
        <div className="flex flex-col gap-3">
          <Slider
            value={maxPrice || [10, 210]}
            onValueChange={handleSliderChange}
            max={210}
            step={5}

          />

          <h1 className="flex items-center gap-2 text-[#596780] font-semibold ">
            Max. ${maxPrice && maxPrice[0]}
          </h1>
        </div>
      </div>
    </aside>
  );
}

export default CategoryAsideBar;
